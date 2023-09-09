"use client";
import BoxComparison from "@/app/hooks/useLayoutEffect/demo1";
import HoverTooltip from "@/app/hooks/useLayoutEffect/demo2";
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
              href="https://github.com/weijunext/nextjs-learn-demos/tree/useLayoutEffect"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              GitHub
            </Link>
          </p>
          <p>
            and I have also written {/* TODO: 修改 */}
            <Link
              href="https://weijunext.com/article/772e7900-ead5-4468-8a68-599e916bc651"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              a blog post
            </Link>{" "}
            sharing knowledge about useLayoutEffect.
          </p>
        </Balancer>
      </div>
      <div className="w-full max-w-screen-xl px-5 xl:px-0 grid animate-fade-up grid-cols-1 gap-y-10 gap-5 md:grid-cols-2">
        <div className="relative overflow-hidden">
          <div>
            Demo1: useEffect vs useLayoutEffect 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useLayoutEffect/app/hooks/useLayoutEffect/demo1.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <BoxComparison />
        </div>
        <div className="relative overflow-hidden">
          <div>
            Demo2: ToolTip 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useLayoutEffect/app/hooks/useLayoutEffect/demo2.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <HoverTooltip />
        </div>
      </div>
    </>
  );
}
