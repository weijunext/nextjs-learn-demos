"use client";
import { useSignInModal } from "@/components/layout/sign-in-modal";
import { UserInfo } from "@/types/user";
import dayjs from "dayjs";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface Props {
  user: UserInfo;
}
interface ShowInfoProps {
  todayRemaining: number;
  membershipExpire: number;
  boostPackRemaining: number;
  boostPackExpire: number;
}

export async function checkStatusFetch({
  sub,
  accessToken,
}: {
  sub: string;
  accessToken: string;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/membership/fake/checkStatus`,
    {
      cache: "force-cache",
      method: "post",
      headers: {
        token: accessToken,
      },
      body: JSON.stringify({
        sub,
      }),
    }
  );
  const resp = await res.json();
  return resp;
}

export function FakeMembership({ ...props }: Props) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const [showInfo, setShowInfo] = useState<ShowInfoProps>({
    todayRemaining: 0,
    membershipExpire: 0,
    boostPackRemaining: 0,
    boostPackExpire: 0,
  });

  const checkStatusAction = useCallback(async () => {
    const res: ShowInfoProps = await checkStatusFetch({
      sub: props.user?.sub,
      accessToken: props.user?.accessToken || "",
    });
    const membershipExpire = res.membershipExpire
      ? Math.floor(new Date().getTime() / 1000) + res.membershipExpire
      : 0;
    const boostPackExpire = res.boostPackExpire
      ? Math.floor(new Date().getTime() / 1000) + res.boostPackExpire
      : 0;
    setShowInfo({
      todayRemaining: res.todayRemaining,
      boostPackRemaining: res.boostPackRemaining,
      membershipExpire,
      boostPackExpire,
    });
  }, [props.user, setShowInfo]);

  const buyMembership = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/membership/fake/upgrade`,
      {
        cache: "force-cache",
        method: "post",
        headers: {
          token: props.user?.accessToken || "",
        },
        body: JSON.stringify({
          sub: props.user?.sub || "",
        }),
      }
    );
    const resp = await res.json();
    if (resp.success) {
      checkStatusAction();
    }
  };

  const buyBoost = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/membership/fake/bugBoostPack`,
      {
        cache: "force-cache",
        method: "post",
        headers: {
          token: props.user?.accessToken || "",
        },
        body: JSON.stringify({
          sub: props.user?.sub || "",
        }),
      }
    );
    const resp = await res.json();
    if (resp.success) {
      checkStatusAction();
    }
  };

  const clearMemberExpire = async (type: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/membership/fake/clearExpire`,
      {
        cache: "force-cache",
        method: "post",
        headers: {
          token: props.user?.accessToken || "",
        },
        body: JSON.stringify({
          sub: props.user?.sub || "",
          type,
        }),
      }
    );
    const resp = await res.json();
    if (resp.success) {
      checkStatusAction();
    }
  };

  const useFunctionAction = async () => {
    if (showInfo.todayRemaining > 0) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/fake/useFunction`,
        {
          cache: "force-cache",
          method: "post",
          headers: {
            token: props.user?.accessToken || "",
          },
        }
      );
      const resp = await res.json();
      if (resp.success) {
        checkStatusAction();
      }
      return;
    }
    // 会员用户，提示购买加油包
    if (showInfo.membershipExpire > 0) {
      alert("Purchase a Boost Pack to get more uses right now.");
      return;
    }
    // 普通用户，提示购买会员
    alert("Become a member to enjoy 500 uses every day.");
  };

  useEffect(() => {
    checkStatusAction();
  }, []);

  if (!props.user) {
    return (
      <>
        <SignInModal />
        <button
          className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
          onClick={() => setShowSignInModal(true)}
        >
          Login to test
        </button>
      </>
    );
  }

  return (
    <>
      <div className=" bg-gray-100 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center space-x-4 mb-4">
            <Image
              alt={props.user.email}
              src={props.user.avatar || `https://api.dicebear.com/avatar.svg`}
              width={40}
              height={40}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="font-bold text-xl">{props.user.username}</h2>
              <p className="text-gray-600">
                Plan:{" "}
                {showInfo.membershipExpire
                  ? `Membership(Expires on: 
                  ${dayjs(showInfo.membershipExpire * 1000).format(
                    "YYYY-MM-DD HH:mm"
                  )})`
                  : "Basic"}
              </p>
              <p className="text-gray-600">
                Today Remaining Uses:{" "}
                {showInfo.todayRemaining <= 0 ? 0 : showInfo.todayRemaining}{" "}
                times
              </p>
              {showInfo.boostPackExpire ? (
                <p className="text-gray-600">
                  Boost Pack Balance: {showInfo.boostPackRemaining} times
                  (Expires on
                  {dayjs(showInfo.boostPackExpire * 1000).format(
                    "YYYY-MM-DD HH:mm"
                  )}
                  )
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={useFunctionAction}
              className="w-full px-4 py-2 bg-purple-500 text-white rounded-md"
            >
              Simulate the use of functions(模拟使用功能)
            </button>
            <button
              onClick={buyMembership}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Simulate buy membership(购买会员)
            </button>
            <button
              onClick={buyBoost}
              className="w-full px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Simulate buy boost(购买加油包)
            </button>
            <button
              onClick={() => clearMemberExpire("membership")}
              className="w-full px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Simulate membership expiration(模拟会员过期)
            </button>
            <button
              onClick={() => clearMemberExpire("boost")}
              className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md"
            >
              Simulate boost expiration(模拟加油包过期)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
