import StatusBar from "@/app/hooks/useSyncExternalStore/demo1";
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
    title: "React Hooks - useSyncExternalStore",
  },
  twitter: {
    ...siteConfig.twitter,
    title: "React Hooks - useSyncExternalStore",
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
              href="https://github.com/weijunext/nextjs-learn-demos/tree/useSyncExternalStore"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              [Visit the source code]
            </Link>
          </p>
          <p>
            👉{" "}
            <Link
              href="https://weijunext.com/article/7a4d45e4-ca6d-44ad-abfd-36ee9a5bb1a4"
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
            Demo1: Subscribe to the browser API using useSyncExternalStore. 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useSyncExternalStore/app/hooks/useSyncExternalStore/demo1.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <StatusBar />
        </div>
      </div>
    </>
  );
}
