import Card from "@/components/home/card";
import { Twitter } from "@/components/shared/icons";
import LogoSVG from "@/components/shared/icons/logo";
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

export default function ReactHooksList() {
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
          <Balancer>React Hooks Demos</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500  opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>Dive deep into React hooks.</Balancer>
        </p>
      </div>
      <h3
        className="mt-10 mb-2 animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl opacity-0 font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>Hooks</Balancer>
      </h3>
      <div className="grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description }) => (
          <Card key={title} title={title} description={description} />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "useState",
    description: ` 👉 [Read the blog post](https://weijunext.com/article/36abddc1-a8cb-4618-b6eb-e536c4879535/)`,
  },
  {
    title: "useReducer",
    description: `👉 [Read the blog post](https://weijunext.com/article/486d38b7-bb0a-4493-a72c-01077000b098/)`,
  },
  {
    title: "useContext",
    description: `👉 [Read the blog post](https://weijunext.com/article/99d401ae-7428-405d-8af5-5c23c582dec8/)`,
  },
  {
    title: "useRef",
    description: `👉 [Read the blog post](https://weijunext.com/article/f3460492-19ff-4214-8111-f1effa11e3ab/)
    👉 [Visit demo page](https://nextjs.weijunext.com/hooks/useRef/)`,
  },
  {
    title: "useEffect",
    description: `👉 [Read the blog post](https://weijunext.com/article/772e7900-ead5-4468-8a68-599e916bc651/)
    👉 [Visit demo page](https://nextjs.weijunext.com/hooks/useEffect/)`,
  },
  {
    title: "useLayoutEffect",
    description: `👉 [Read the blog post](https://weijunext.com/article/fe61d9a6-84a1-4315-8e1d-34303cb2a497/)
    👉 [Visit demo page](https://nextjs.weijunext.com/hooks/useLayoutEffect/)`,
  },
  {
    title: "useMemo",
    description: `👉 [Read the blog post](https://weijunext.com/article/75704b53-4f6d-45db-a73b-f0cd6ce90ce9/)
    👉 [Visit demo page](https://nextjs.weijunext.com/hooks/useMemo/)`,
  },
  {
    title: "useCallback",
    description: `👉 [Read the blog post](https://weijunext.com/article/0db6ef00-d058-4204-8502-0990d06d0a4b/)`,
  },
  {
    title: "useTransition",
    description: `👉 [Read the blog post](https://weijunext.com/article/5458862c-76aa-436e-adc5-269dc82228df/)`,
  },
  {
    title: "useDeferredValue",
    description: `👉 [Read the blog post](https://weijunext.com/article/0ca90f65-4cc3-4a64-a6ab-de0b2fde87a3/)
    👉 [Visit demo page](https://nextjs.weijunext.com/hooks/useDeferredValue/)`,
  },
];
