import NextAuth, { NextAuthOptions } from "next-auth" 
import GithubProvider from 'next-auth/providers/github';
// import prisma from "@/lib/prisma";
// import { UserInfo } from "@/types/user";

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
    session: async ({ session, token }) => {
      // const res = await prisma.user.upsert({
      //   where: {
      //     userId: token.sub
      //   },
      //   update: {
      //     // 使用token中的数据
      //     username: token.name,
      //     avatar: token.picture,
      //     email: token.email
      //   },
      //   create: {
      //     // 使用token中的数据 
      //     userId: token.sub,
      //     username: token.name,
      //     avatar: token.picture,
      //     email: token.email,
      //     platform: 'github',
      //   }
      // })
      // if (res) {
      //   session.user = {
      //     userId: res.userId,
      //     username: res.username,
      //     avatar: res.avatar,
      //     platform: res.platform,
      //     email: res.email,
      //   } as UserInfo
      // }
      return session
    }
  },
}

export default NextAuth(authOptions)
