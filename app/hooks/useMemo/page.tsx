import Comparison1 from "@/app/hooks/useMemo/demo1";
import Comparison2 from "@/app/hooks/useMemo/demo2";
import Comparison3 from "@/app/hooks/useMemo/demo3";
import Comparison4 from "@/app/hooks/useMemo/demo4";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export const metadata = {
  title: "React Hooks Demos",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  themeColor: siteConfig.themeColor,
  icons: siteConfig.icons,
  openGraph: {
    ...siteConfig.openGraph,
    title: "React Hooks - useMemo",
  },
  twitter: {
    ...siteConfig.twitter,
    title: "React Hooks - useMemo",
  },
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
              href="https://github.com/weijunext/nextjs-learn-demos/tree/useMemo"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              [Visit the source code]
            </Link>
          </p>
          <p>
            👉{" "}
            <Link
              href="https://weijunext.com/article/75704b53-4f6d-45db-a73b-f0cd6ce90ce9"
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
