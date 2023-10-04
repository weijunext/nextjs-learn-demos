import { getBoostPackKey, getUserDateUsageKey } from "@/lib/membership/constants";
import redis from "@/lib/redis";
import { UserSub } from "@/types/user";
import 'server-only';

interface DateRemaining {
  redisRole: number; // 用户角色
  userTodayRemaining: number; // 今天剩余次数
  boostPackRemaining: number; // 加油包剩余次数
  userDateRemaining: number; // 上面二者总的剩余次数
}

interface IncrAfterChat {
  sub: string;
  remainingInfo: DateRemaining;
}
export const incrAfterUse = async ({ sub, remainingInfo }: IncrAfterChat) => {
  /**
   * 用户使用量自增
   */
  // 如果有默认次数，增加一次日使用次数
  if (remainingInfo.userTodayRemaining > 0) {
    await incrUserDate({ sub })
    return
  }
  // 如果没有默认次数，有加油包，扣除加油包次数
  if (remainingInfo.boostPackRemaining > 0) {
    const boostPackKey = await getBoostPackKey({ sub })
    await redis.decr(boostPackKey)
    return
  }
  // 如果没有默认次数，也没有加油包，则不处理，只需要记录日志
  console.log('0 uses remaining today.');
}
// 【自增】用户使用次数，这个方法用于内部调用
export const incrUserDate = async ({ sub }: UserSub) => {
  const keyDate = await getUserDateUsageKey({ sub });
  await redis.incr(keyDate);
}