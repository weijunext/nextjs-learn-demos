import { siteConfig } from "@/config/site";
import { getCurrentUser } from "@/lib/session";
import { UserInfo } from "@/types/user";
import { Balancer } from "react-wrap-balancer";

export const metadata = {
  title: "Fake Membership",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  themeColor: siteConfig.themeColor,
  icons: siteConfig.icons,
  openGraph: {
    ...siteConfig.openGraph,
    title: "Fake Membership",
  },
  twitter: {
    ...siteConfig.twitter,
    title: "Fake Membership",
  },
};

export default async function FakeMembershipContainer() {
  const user = (await getCurrentUser()) as UserInfo;

  // // 获取用户当日剩余次数
  // let userUsageInfo = {
  //   todayRemaining: 0,
  //   boostPackRemaining: 0,
  //   membershipExpire: 0,
  //   boostPackExpire: 0,
  // };
  // if (user && user.sub) {
  //   /**
  //    * 根据角色判断可使用的次数
  //    * 1、普通用户返回当日剩余次数，月会员返回当日剩余次数和过期时间
  //    * 2、加油包用户返回剩余次数和过期时间
  //    * 3、以上两条可同时展示
  //    */
  //   userUsageInfo = await checkStatus({ sub: user.sub });
  // }
  // const remaining = userUsageInfo.todayRemaining;
  // const boostPackRemaining = userUsageInfo.boostPackRemaining;
  // const membershipExpire = userUsageInfo.membershipExpire
  //   ? Math.floor(new Date().getTime() / 1000) + userUsageInfo.membershipExpire
  //   : 0;
  // const boostPackExpire = userUsageInfo.boostPackExpire
  //   ? Math.floor(new Date().getTime() / 1000) + userUsageInfo.boostPackExpire
  //   : 0;

  return (
    <div className="max-w-screen-md z-10">
      <Balancer>
        <div>
          数据库资源不足，本项目暂停提供登录和会员演示，你可以根据教程创建自己的数据库进行测试
        </div>
        <div>
          Due to insufficient database resources, the login and member
          demonstration for this project are temporarily suspended. You can
          follow the tutorial to create your own database for testing purposes.
        </div>
        {/* <FakeMembership user={user as UserInfo} /> */}
      </Balancer>
    </div>
  );
}
