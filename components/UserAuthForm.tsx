"use client";

import { signIn } from "next-auth/react";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);

  const login = async () => {
    setIsGitHubLoading(true);
    signIn("github", {
      callbackUrl: `${window.location.origin}`,
    });
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {/* 数据库资源不足，登录功能将跳转到我的另一个项目体验，你也可以依据自己的数据库在站内进行测试 */}
      {/* Due to insufficient database resources, the login feature will redirect to another one of my projects for the experience. You can also conduct tests within the site based on your own database. */}
      {/* <button
        type="button"
        className={cn(buttonVariants())}
        onClick={login}
        disabled={isGitHubLoading}
      >
        {isGitHubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </button> */}
      <Link
        href="https://www.smartexcel.cc"
        target="_blank"
        className={cn(buttonVariants())}
      >
        <button type="button">Go SmartExcel and try it.</button>
      </Link>
    </div>
  );
}
