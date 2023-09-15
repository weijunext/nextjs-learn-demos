import WithUseDeferredValue from "@/app/hooks/useDeferredValue/demo1";
import WithoutUseDeferredValue from "@/app/hooks/useDeferredValue/demo2";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export const metadata = {
  title: "React Hooks Demos",
  description: "React Hooks Demos by Weijunext",
  author: "weijunext",
  twitter: {
    card: "summary_large_image",
    title: "React Hooks Demos",
    description: "React Hooks Demos by Weijunext",
    creator: "@weijunext",
  },
  metadataBase: new URL("https://nextjs.weijunext.com"),
  themeColor: "#FFF",
};

export default function Demo() {
  return (
    <>
      <div
        className="mb-12 animate-fade-up text-center text-gray-500  opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          <p>
            👉{" "}
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/tree/useDeferredValue"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              [Visit the source code]
            </Link>
          </p>
          <p>
            👉{" "}
            <Link
              href="https://weijunext.com/article/fe61d9a6-84a1-4315-8e1d-34303cb2a497"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              [Read the blog post]
            </Link>
          </p>
        </Balancer>
      </div>
      <div className="w-full max-w-screen-xl px-5 xl:px-0 grid animate-fade-up grid-cols-1 gap-y-10 gap-5 md:grid-cols-2">
        <div className="relative overflow-hidden">
          <div>
            Demo1: with useDeferredValue 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useDeferredValue/app/hooks/useDeferredValue/demo1.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <WithUseDeferredValue />
        </div>
        <div className="relative overflow-hidden">
          <div>
            Demo2: without useDeferredValue 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useDeferredValue/app/hooks/useDeferredValue/demo2.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <WithoutUseDeferredValue />
        </div>
      </div>
    </>
  );
}
