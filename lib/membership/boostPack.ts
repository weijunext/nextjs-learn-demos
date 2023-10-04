import { BOOST_PACK_EXPIRE, BOOST_PACK_USES, getBoostPackKey } from "@/lib/membership/constants";
import redis from "@/lib/redis";
import { UserSub } from "@/types/user";
import 'server-only';

/**
 * 设计：购买加油包
 * 如果已有加油包（expire存在且大于当前时间），expire + 7天，oldBalance + BOOST_PACK_USES；
 * 如果没有加油包，设置expire为 0 + 7天，0 + BOOST_PACK_USES；
 */
export const boostPack = async ({ sub }: UserSub) => {
  const userBoostPackKey = await getBoostPackKey({ sub })
  const userBoostPack = await redis.get(userBoostPackKey) || 0
  if (userBoostPack === 0) {
    const res = await redis.set(userBoostPackKey, BOOST_PACK_USES, { ex: BOOST_PACK_EXPIRE })
    if (res === 'OK') {
      return { sub, boostPackUses: BOOST_PACK_USES, expire: BOOST_PACK_EXPIRE, boostPack: 'success', success: true }
    }
    return { sub, boostPackUses: 0, expire: 0, boostPack: 'fail', success: false }
  }
  // 已是加油包用户，查询过期时间，计算新的过期时间，更新过期时间
  const oldBalance: number = await redis.get(userBoostPackKey) || 0
  const TTL = await redis.ttl(userBoostPackKey)
  const newTTL = TTL + BOOST_PACK_EXPIRE
  const newBalance = oldBalance + BOOST_PACK_USES
  const res = await redis.setex(userBoostPackKey, newTTL, newBalance)
  return res === 'OK' ?
    { sub, oldBalance, newBalance, expire: newTTL, boostPack: 'success', success: true } :
    { sub, oldBalance, newBalance: oldBalance, expire: TTL, boostPack: 'fail', success: false }
}