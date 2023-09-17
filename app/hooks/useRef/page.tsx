"use client";
import TextInput from "@/app/hooks/useRef/demo1";
import TextInput2 from "@/app/hooks/useRef/demo2";
import Timer from "@/app/hooks/useRef/demo3";
import DisplayValue from "@/app/hooks/useRef/demo4";
import DisplayValueError from "@/app/hooks/useRef/demo5";
import MovingBox from "@/app/hooks/useRef/demo6";
import WindowSize from "@/app/hooks/useRef/demo7";
import Link from "next/link";
import { useState } from "react";
import { Balancer } from "react-wrap-balancer";

export default function UseRefDemo() {
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount((pre: number) => pre + 1);
  };

  return (
    <>
      <p
        className="mb-12 animate-fade-up text-center text-gray-500  opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          <p>
            👉{" "}
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/tree/useRef"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              [Visit the source code]
            </Link>
          </p>
          <p>
            👉{" "}
            <Link
              href="https://weijunext.com/article/f3460492-19ff-4214-8111-f1effa11e3ab"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              [Read the blog post]
            </Link>
          </p>
        </Balancer>
      </p>
      <div className="w-full max-w-screen-xl px-5 xl:px-0 grid animate-fade-up grid-cols-1 gap-y-10 gap-5 md:grid-cols-3">
        <div className="relative overflow-hidden">
          <div>
            Demo 1: Accessing DOM elements 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useRef/app/hooks/useRef/demo1.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <TextInput />
        </div>
        <div className="relative overflow-hidden">
          <div>
            Demo 2: Exposing a ref to other component 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useRef/app/hooks/useRef/demo2.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <TextInput2 />
        </div>
        <div className="relative overflow-hidden">
          <div>
            Demo 3: Save the state without triggering a render 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useRef/app/hooks/useRef/demo3.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <Timer />
        </div>
        <div className="relative overflow-hidden">
          <div>
            Demo 4: Save the previous props or state 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useRef/app/hooks/useRef/demo4.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <DisplayValue value={count} />
          <button
            onClick={addCount}
            className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
          >
            ADD
          </button>
        </div>
        <div className="relative overflow-hidden">
          <div>
            Demo 5: Incorrect example 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useRef/app/hooks/useRef/demo5.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <DisplayValueError value={count} />
          <button
            onClick={addCount}
            className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
          >
            ADD
          </button>
        </div>
        <div className="relative overflow-hidden">
          <div>
            Demo 6: useRef with requestAnimationFrame 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useRef/app/hooks/useRef/demo6.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <MovingBox />
        </div>
        <div className="relative overflow-hidden">
          <div>
            Demo 7: useRef with addEventListener resize 👉
            <Link
              href="https://github.com/weijunext/nextjs-learn-demos/blob/useRef/app/hooks/useRef/demo7.tsx"
              className="hover:text-brand underline underline-offset-4"
              target="_blank"
            >
              Code
            </Link>
          </div>
          <WindowSize />
        </div>
      </div>
    </>
  );
}
