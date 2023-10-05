import Link from "next/link";

import { Icons } from "@/components/Icons";
import { UserAuthForm } from "@/components/UserAuthForm";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const metadata = {
  title: "Login",
  description: "Login to your account",
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  themeColor: siteConfig.themeColor,
  icons: siteConfig.icons,
  openGraph: {
    ...siteConfig.openGraph,
    title: "Login Page",
  },
  twitter: {
    ...siteConfig.twitter,
    title: "Login Page",
  },
};

export default async function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Image
            alt="logo"
            src="/next.svg"
            className="sm:w-12 sm:h-12 w-6 h-6 mx-auto"
            width={32}
            height={32}
          />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Please select your login method.
          </p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
}
