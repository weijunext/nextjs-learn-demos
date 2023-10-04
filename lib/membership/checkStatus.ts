import { MEMBERSHIP_ROLE_VALUE, ROLES_LIMIT, getBoostPackKey, getMembershipStatusKey, getUserDateUsageKey } from "@/lib/membership/constants";
import redis from "@/lib/redis";
import { DateRemaining, Role, UserSub } from "@/types/user";
import 'server-only';

// 【获取】用户日使用次数
export const getUserDateUsage = async ({ sub }: UserSub) => {
  const keyDate = await getUserDateUsageKey({ sub });
  // 使用次数
  const userTodayUsage: number = (await redis.get(keyDate)) || 0;
  return {
    userTodayUsage
  }
}
// 计算当日可用次数：查询当日已用次数，计算剩余次数，再加上加油包剩余次数
export const getUserDateRemaining = async ({ sub }: UserSub) => {
  const { userTodayUsage } = await getUserDateUsage({ sub })
  const userRoleKey = await getMembershipStatusKey({ sub })
  const redisRole: Role = await redis.get(userRoleKey) || 1
  const userDateDefaultLimit: number = ROLES_LIMIT[redisRole]

  const userTodayRemaining = userDateDefaultLimit - userTodayUsage <= 0 ? 0 : userDateDefaultLimit - userTodayUsage
  const boostPackKey = await getBoostPackKey({ sub })
  const boostPackRemaining: number = await redis.get(boostPackKey) || 0
  // 查询次数是在请求openai前，自增次数是在请求后，这里把查询到的redis剩余次数返回，并传给自增方法，减少redis请求次数
  return {
    redisRole,
    userTodayRemaining,
    boostPackRemaining,
    userDateRemaining: userTodayRemaining + boostPackRemaining
  }
}
// 计算当日剩余次数、会员到期时间、加油包剩余次数、加油包到期时间
export const checkStatus = async ({ sub }: UserSub) => {
  const userDateRemaining: DateRemaining = await getUserDateRemaining({ sub }) // 用户角色、当日剩余次数、加油包剩余次数
  // 如果是会员，计算会员到期时间
  let membershipExpire = 0
  if (userDateRemaining.redisRole === MEMBERSHIP_ROLE_VALUE) {
    const userRoleKey = await getMembershipStatusKey({ sub })
    membershipExpire = await redis.ttl(userRoleKey)
  }
  // 如果加油包次数大于0，计算加油包到期时间
  let boostPackExpire = 0
  if (userDateRemaining.boostPackRemaining > 0) {
    const boostPackKey = await getBoostPackKey({ sub })
    boostPackExpire = await redis.ttl(boostPackKey)
  }
  return {
    redisRole: userDateRemaining.redisRole,
    todayRemaining: userDateRemaining.userTodayRemaining,
    membershipExpire: membershipExpire,
    boostPackRemaining: userDateRemaining.boostPackRemaining,
    boostPackExpire: boostPackExpire,
  }
}