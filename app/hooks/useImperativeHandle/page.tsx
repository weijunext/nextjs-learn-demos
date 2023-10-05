import ClearInput from "@/app/hooks/useImperativeHandle/demo1";
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
    title: "React Hooks - useImperativeHandle",
  },
  twitter: {
    ...siteConfig.twitter,
    title: "React Hooks - useImperativeHandle",
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
              href="https://github.com/weijunext/nextjs-learn-demos/tree/useImperativeHandle"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              [Visit the source code]
            </Link>
          </p>
          <p>
            👉{" "}
            <Link
              href="https://weijunext.com/article/9e8ce44c-238d-4eb7-b194-69493ac7c3e5"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              [Read the blog post]
            </Link>
          </p>
        </Balancer>
      </div>
      <div className="w-full max-w-screen-xl px-5 xl:px-0 grid animate-fade-up grid-cols-1 gap-y-10 gap-5 place-items-center md:grid-cols-3">
        <div className="relative overflow-hidden">
          <div>
            Demo1: Use useImperativeHandle to clear the input field. 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useImperativeHandle/app/hooks/useImperativeHandle/demo1.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <ClearInput />
        </div>
      </div>
    </>
  );
}
