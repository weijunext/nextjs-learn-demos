"use client";
import Comparison1 from "@/app/hooks/useMemo/demo1";
import Comparison2 from "@/app/hooks/useMemo/demo2";
import Comparison3 from "@/app/hooks/useMemo/demo3";
import Comparison4 from "@/app/hooks/useMemo/demo4";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export default function Demo() {
  return (
    <>
      <div
        className="mb-12 animate-fade-up text-center text-gray-500  opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          <p>
            Source code of this page is on my{" "}
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/tree/useMemo"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              GitHub
            </Link>
          </p>
          <p>
            and I have also written{" "}
            <Link
              href="https://weijunext.com/"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              a blog post
            </Link>{" "}
            sharing knowledge about useMemo.
          </p>
        </Balancer>
      </div>
      <div className="w-full max-w-screen-xl px-5 xl:px-0 grid animate-fade-up grid-cols-1 gap-y-10 gap-5 md:grid-cols-2">
        <div className="relative overflow-hidden">
          <div>
            Demo1: with useMemo 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useMemo/app/hooks/useMemo/demo1.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <Comparison1 />
        </div>
        <div className="relative overflow-hidden">
          <div>
            Demo2: without useMemo 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useMemo/app/hooks/useMemo/demo2.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <Comparison2 />
        </div>
        <div className="relative overflow-hidden">
          <div>
            Demo3: with memo 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useMemo/app/hooks/useMemo/demo3.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <Comparison3 />
        </div>
        <div className="relative overflow-hidden">
          <div>
            Demo4: without memo 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useMemo/app/hooks/useMemo/demo4.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <Comparison4 />
        </div>
      </div>
    </>
  );
}
