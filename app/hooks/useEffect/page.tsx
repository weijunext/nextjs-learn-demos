"use client";
import Counter from "@/app/hooks/useEffect/demo1";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export default function UseRefDemo() {
  return (
    <>
      <div
        className="mb-12 animate-fade-up text-center text-gray-500  opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          <p>
            These demos source code of this page is on my{" "}
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/tree/useEffect"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              GitHub
            </Link>
          </p>
          <p>
            and I have also written
            <Link
              href="https://weijunext.com/article/772e7900-ead5-4468-8a68-599e916bc651"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              a blog post
            </Link>{" "}
            sharing knowledge about useEffect.
          </p>
        </Balancer>
      </div>
      <div className="w-full max-w-screen-xl px-5 xl:px-0 grid animate-fade-up grid-cols-1 gap-y-10 gap-5 md:grid-cols-3">
        <div className="relative overflow-hidden">
          <div>
            Demo : Counter 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useEffect/app/hooks/useEffect/demo1.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <Counter />
        </div>
      </div>
    </>
  );
}