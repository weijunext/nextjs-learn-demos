import BoxComparison from "@/app/hooks/useLayoutEffect/demo1";
import HoverTooltip from "@/app/hooks/useLayoutEffect/demo2";
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
    title: "React Hooks - useLayoutEffect",
  },
  twitter: {
    ...siteConfig.twitter,
    title: "React Hooks - useLayoutEffect",
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
              href="https://github.com/weijunext/nextjs-learn-demos/tree/useLayoutEffect"
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
