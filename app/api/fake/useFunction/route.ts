import { getUserDateRemaining } from "@/lib/membership/checkStatus";
import { incrAfterUse } from "@/lib/membership/usage";
import redis from "@/lib/redis";
import { DateRemaining } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";

/**
 * 仅测试接口使用，实际业务中都在服务端组件里直接调用redis
 */
export async function POST(req: NextRequest) {
  try {
    // 判断referer
    const headers = req.headers
    const referer: string | null = headers.get('referer')
    if (!referer || !referer.includes(process.env.NEXTAUTH_URL as string)) {
      const errorText = 'Sorry, the demo is available at https://nextjs.weijunext.com/fake-membership'
      return NextResponse.json({ error: errorText }, { status: 401 });
    }
    // 判断token是否存在
    const token = headers.get('token')

    if (!token) {
      const errorText = 'Token is expired. Please login again.'
      return NextResponse.json({ error: errorText }, { status: 401 });
    }
    // 判断用户sub
    const sub: string = await redis.get(token) || ''
    if (!sub) {
      const errorText = 'user not found.'
      return NextResponse.json({ error: errorText }, { status: 401 });
    }
    // 计算当日剩余次数
    const remainingInfo: DateRemaining = await getUserDateRemaining({ sub })
    if (remainingInfo.userDateRemaining <= 0) {
      const errorText = '0 uses remaining today.'
      return NextResponse.json({ error: errorText }, { status: 401 });
    }
    // 忽略使用功能的逻辑
    // ……

    // 自增已使用次数或自减加油包次数
    incrAfterUse({ sub, remainingInfo })

    // 返回
    return NextResponse.json({ success: true, msg: 'fake use function success' });
  } catch (e) {
    return NextResponse.json({ error: "failed to upgrade" }, { status: 500 });
  }
}