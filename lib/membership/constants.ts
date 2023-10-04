/**
 * 1 普通用户; 2 会员
 */

import { Role, UserSub } from "@/types/user";
export const ROLES: { [key in Role]: string } = {
  1: 'Basic',
  2: 'MemberShip',
}

export const ROLES_LIMIT: { [key in Role]: number } = {
  1: process.env.COMMON_USER_DAILY_LIMIT_STR && Number(process.env.COMMON_USER_DAILY_LIMIT_STR) || 10,
  2: process.env.MEMBERSHIP_DAILY_LIMIT_STR && Number(process.env.MEMBERSHIP_DAILY_LIMIT_STR) || 500,
}

export const DATE_USAGE_KEY_EXPIRE = 3600 * 24 * 10 // 10天，用户日用量保存时长
export const MEMBERSHIP_EXPIRE = 3600 * 24 * 31 // 31天，会员一个月的时间
export const MEMBERSHIP_ROLE_VALUE = 2 // 月度会员的值
export const BOOST_PACK_EXPIRE = 3600 * 24 * 7 // 7天，购买加油包的使用期限
export const BOOST_PACK_USES = 100 // 每次购买加油包获得的次数
export const getUserDateUsageKey = ({ sub }: UserSub) => {
  const currentDate = new Date().toLocaleDateString();
  return `userId:${sub}::date:${currentDate}::user_date_uses`
}
export const getMembershipStatusKey = ({ sub }: UserSub) => {
  return `userId:${sub}::membership`
}
export const getBoostPackKey = ({ sub }: UserSub) => {
  return `userId:${sub}::boost_pack_uses`
}