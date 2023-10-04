import { MEMBERSHIP_EXPIRE, MEMBERSHIP_ROLE_VALUE, ROLES, getMembershipStatusKey, getUserDateUsageKey } from "@/lib/membership/constants";
import redis from "@/lib/redis";
import { Role, UserSub } from "@/types/user";
import 'server-only';

/**
 * 设计：升级成会员
 * 如果已是会员（expire存在且大于当前时间），expire + 31天；
 * 如果不是会员，设置expire为 0 + 31天；
 * 每次购买都清空当日已用次数
 */
export const upgrade = async ({ sub }: UserSub) => {
  // 检查用户角色
  const userRoleKey = await getMembershipStatusKey({ sub })
  const userRole: Role = await redis.get(userRoleKey) || 1
  console.log(userRole);

  // 普通用户，直接设置role和过期时间
  if (userRole === 1) {
    const res = await redis.set(userRoleKey, MEMBERSHIP_ROLE_VALUE, { ex: MEMBERSHIP_EXPIRE })
    if (res === 'OK') {
      // 清空今天已用次数
      clearTodayUsage({ sub })
      return { sub, oldRole: ROLES[userRole], newRole: ROLES[MEMBERSHIP_ROLE_VALUE], expire: MEMBERSHIP_EXPIRE, upgrade: 'success', success: true }
    }
    return { sub, oldRole: ROLES[userRole], upgrade: 'fail', success: false }
  }
  // 会员用户，查询过期时间，计算新的过期时间，更新过期时间
  const TTL = await redis.ttl(userRoleKey)
  const newTTL = TTL + MEMBERSHIP_EXPIRE
  const res = await redis.expire(userRoleKey, newTTL)
  if (res === 1) {
    // 清空今天已用次数
    clearTodayUsage({ sub })
    return { sub, oldRole: ROLES[MEMBERSHIP_ROLE_VALUE], newRole: ROLES[MEMBERSHIP_ROLE_VALUE], expire: newTTL, upgrade: 'success', success: true }
  }
  return { sub, oldRole: ROLES[MEMBERSHIP_ROLE_VALUE], newRole: ROLES[MEMBERSHIP_ROLE_VALUE], expire: TTL, upgrade: 'fail', success: false }
}

// 升级后清空当日已用次数
export const clearTodayUsage = async ({ sub }: UserSub) => {
  const userDateUsageKey = await getUserDateUsageKey({ sub })
  await redis.set(userDateUsageKey, 0)
}

