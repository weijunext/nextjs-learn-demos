import Card from "@/components/home/card";
import ComponentGrid from "@/components/home/component-grid";
import { Github, Twitter } from "@/components/shared/icons";
import TablerEyeFilled from "@/components/shared/icons/eye";
import LogoSVG from "@/components/shared/icons/logo";
import redis from "@/lib/redis";
import { nFormatter } from "@/lib/utils";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/weijunext/nextjs-learn-demos",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    }
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  await redis.incr("view");
  const view: number = (await redis.get("view")) || 0;

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center opacity-0 space-x-5"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            href="https://twitter.com/weijunext/"
            target="_blank"
            rel="noreferrer"
            className="mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
          >
            <Twitter className="h-5 w-5 text-[#1d9bf0]" />
            <p className="text-sm font-semibold text-[#1d9bf0]">Follow Me</p>
          </a>
          <a
            href="https://weijunext.com/"
            target="_blank"
            rel="noreferrer"
            className="mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
          >
            <LogoSVG className="h-5 w-5 text-[#1d9bf0]" />
            <p className="text-sm font-semibold text-[#1d9bf0]">My Blog</p>
          </a>
        </div>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl  opacity-0 font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Next.js Demos</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500  opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Next.js Learn Demos is an open-source repository that provides
            branch-by-branch explanations of Next.js ecosystem technologies.
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center opacity-0 space-x-5"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/weijunext/nextjs-learn-demos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              <span className="font-semibold">{nFormatter(stars)}</span>
            </p>
          </a>
          <div className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800">
            <TablerEyeFilled />
            <p>
              <span className="hidden sm:inline-block">Page Views</span>{" "}
              <span className="font-semibold">{nFormatter(view)}</span>
            </p>
          </div>
        </div>
      </div>
      <h3
        className="mt-10 mb-2 animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl opacity-0 font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>Stack</Balancer>
      </h3>
      <div className="grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
          />
        ))}
      </div>

      <h3
        className="mt-10 mb-2 animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl opacity-0 font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>Other Hot Posts</Balancer>
      </h3>
      <div className="grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {posts.map(({ title, description, demo }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Next.js + TailWindCSS",
    description: `This repo base on Next.js and TailWindCSS.
    👉 [Read my blog posts — J实验室](https://weijunext.com/tag/NextJS/)`,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="logo" src="/next.svg" width={50} height={50} />
        <Image alt="logo" src="/tailwindcss.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Auth + Database",
    description: `Implement login module with Next.js, Next-Auth, Postgres, and Prisma.
    👉 [Visit the source code](https://github.com/weijunext/nextjs-learn-demos/tree/NextAuth-Prisma)
    👉 [Read the blog post](https://weijunext.com/article/061d8cd9-fcf3-4d9e-bd33-e257bc4f9989)
      `,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="logo" src="/next.svg" width={50} height={50} />
        <Image alt="logo" src="/postgresql.svg" width={50} height={50} />
        <Image alt="logo" src="/prisma.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Docker compose",
    description: `Explore the usage of Docker and Docker Compose.
    👉 [Visit the source code](https://github.com/weijunext/nextjs-learn-demos/tree/docker).
    👉 [Read the blog post](https://weijunext.com/article/b33a5545-fd26-47a6-8641-3c7467fb3910).
      `,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Docker logo" src="/docker.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Upstash Redis",
    description: `Use Upstash as your Redis server.
    👉 [Visit the source code](https://github.com/weijunext/nextjs-learn-demos/tree/Upstash).
      👉 [Read the blog post](https://weijunext.com/article/6510121c-90da-4d20-85a1-72cbbdb3983b).
      `,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Docker logo" src="/upstash.svg" width={50} height={50} />
      </div>
    ),
  },
];

const posts = [
  {
    title: "React Hooks",
    description: `Dive deep into React hooks.
    👉 [Read the blog post](https://weijunext.com/tag/React%20hooks)
    👉 [Visit the demos page](https://nextjs.weijunext.com/hooks)
      `,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="logo" src="/react.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "NextJS Page Router: rendering",
    description: `Explaining CSR, SSR, SSG, and ISR in Next.js.
      👉 [Read the blog post](https://weijunext.com/article/fa1588d6-c068-40ec-a587-4572bd349b25)`,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="logo" src="/next.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "NextJS APP Router: rendering",
    description: `NextJS v13 server-side and client-side components best practices.
      👉 [Read the blog post](https://weijunext.com/article/9e02de2e-c76c-4b82-998a-9e7066450c42)`,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="logo" src="/next.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Google Auth2.0",
    description: `Develop Google OAuth 2.0 login.
      👉 [Read the blog post](https://weijunext.com/article/485132d1-31bd-4cb5-9fbc-576fb64d5ae9)`,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="logo" src="/google.svg" width={50} height={50} />
      </div>
    ),
  },
];
