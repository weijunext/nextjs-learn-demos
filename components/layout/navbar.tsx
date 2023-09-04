"use client";

import { ThemedButton } from "@/components/ThemedButton";
import useScroll from "@/lib/hooks/use-scroll";
import { UserInfo } from "@/types/user";
import Image from "next/image";
import Link from "next/link";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

export default function NavBar({ user }: { user: UserInfo | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.svg"
              alt="NextJS Learn Demos Logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>NextJS Learn Demos</p>
          </Link>
          <div className="flex items-center gap-4">
            <ThemedButton></ThemedButton>
            {user ? (
              <UserDropdown user={user} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
