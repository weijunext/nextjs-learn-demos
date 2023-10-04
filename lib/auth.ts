import prisma from "@/lib/prisma";
import redis from "@/lib/redis";
import { getRedisRoleByUserId } from "@/lib/role";
import { UserInfo } from "@/types/user";
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
    signOut: '/auth/logout',
  },
  providers: [
    GithubProvider({
      clientId: `${process.env.GITHUB_ID}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
      httpOptions: {
        timeout: 50000,
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        // token 传递给 session
        token.accessToken = account.access_token

        // token 存入 redis
        const accessToken: string | undefined = account.access_token
        const expire = 60 * 60 * 24 * 36
        const sub: string = token.sub && token.sub.toString() || 'error sub'
        if (accessToken && sub) await redis.set(accessToken, sub, { ex: expire })

        const res = await prisma.user.upsert({
          where: {
            sub: token.sub
          },
          update: {
            // 使用token中的数据
            username: token.name || '',
            avatar: token.picture || '',
            email: token.email || ''
          },
          create: {
            // 使用token中的数据 
            sub: token.sub || '',
            username: token.name || '',
            avatar: token.picture || '',
            email: token.email || '',
            platform: 'github',
          }
        })
        const redisRoleAndExpire: { redisRole: number, expire: number } = await getRedisRoleByUserId({ sub: res.sub as string })
        const userInfo = {
          sub: res.sub,
          username: res.username,
          avatar: res.avatar,
          platform: res.platform,
          email: res.email,
          role: redisRoleAndExpire.redisRole || 0,
          membershipExpire: redisRoleAndExpire.expire || null,
          accessToken: account.access_token
        }
        return userInfo
      }
      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        const redisRoleAndExpire: { redisRole: number, expire: number } = await getRedisRoleByUserId({ sub: token.sub as string })
        session.user = {
          sub: token.sub,
          username: token.username,
          avatar: token.avatar,
          platform: token.platform,
          email: token.email,
          role: redisRoleAndExpire.redisRole || 0,
          membershipExpire: redisRoleAndExpire.expire || null,
          accessToken: token.accessToken
        } as UserInfo
      }
      return session
    }
  },
}

export default NextAuth(authOptions)
