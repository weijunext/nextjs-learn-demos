import Card from "@/components/home/card";
import ComponentGrid from "@/components/home/component-grid";
import { Github, Twitter } from "@/components/shared/icons";
import TablerEyeFilled from "@/components/shared/icons/eye";
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
        <a
          href="https://twitter.com/weijunext"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">Follow Me</p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl  opacity-0 font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Next.js Learn Demos</Balancer>
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
            href="https://github.com/steven-tey/precedent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              <span className="font-semibold">{nFormatter(stars)}</span>
            </p>
          </a>
          <span className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800">
            <TablerEyeFilled />
            <p>
              <span className="hidden sm:inline-block">Page Views</span>{" "}
              <span className="font-semibold">{nFormatter(view)}</span>
            </p>
          </span>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
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
    </>
  );
}

const features = [
  {
    title: "Next.js + TailWindCSS",
    description:
      "This repo base on Next.js and TailWindCSS. Read my blogs on [J实验室](https://weijunext.com/tag/NextJS/)",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="logo" src="/next.svg" width={50} height={50} />
        <Image alt="logo" src="/tailwindcss.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Built-in Auth + Database",
    description: `Use NextJS+Next-Auth+Postgres+Prisma to implement the login module.
      The code is on [Auth branch](https://github.com/weijunext/nextjs-learn-demos/tree/NextAuth-Prisma).
      The blog is on [中文讲解](https://weijunext.com/article/061d8cd9-fcf3-4d9e-bd33-e257bc4f9989).
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
      The code is on [Docker branch](https://github.com/weijunext/nextjs-learn-demos/tree/docker).
      The blog is on [中文讲解](https://weijunext.com/article/b33a5545-fd26-47a6-8641-3c7467fb3910).
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
      The code is on [Upstash branch](https://github.com/weijunext/nextjs-learn-demos/tree/Upstash).
      The blog is on [中文讲解](https://weijunext.com/article/6510121c-90da-4d20-85a1-72cbbdb3983b).
      `,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Docker logo" src="/upstash.svg" width={50} height={50} />
      </div>
    ),
  },
];
