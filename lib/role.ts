// import 'server-only';

import { MEMBERSHIP_ROLE_VALUE, getMembershipStatusKey } from "@/lib/membership/constants";
import redis from '@/lib/redis';
import { Role, UserSub } from '@/types/user';

export const getRedisRoleByUserId = async ({ sub }: UserSub) => {
  let expire = 0
  if (!sub) return { redisRole: 0, expire }
  const userRoleKey = await getMembershipStatusKey({ sub })
  const redisRole: Role = await redis.get(userRoleKey) || 1
  if (redisRole === MEMBERSHIP_ROLE_VALUE) {
    expire = await redis.ttl(userRoleKey)
  }
  return {
    redisRole,
    expire
  }
}