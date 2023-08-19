"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <>
      <div
        className="cursor-pointer hover:text-brand underline underline-offset-4"
        onClick={(e) => {
          e.preventDefault();
          signOut({
            callbackUrl: `${window.location.origin}/login`,
          });
        }}
      >
        退出登录
      </div>
    </>
  );
}
