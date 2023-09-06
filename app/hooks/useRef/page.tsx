"use client";
import TextInput from "@/app/hooks/useRef/demo1";
import TextInput2 from "@/app/hooks/useRef/demo2";
import Timer from "@/app/hooks/useRef/demo3";
import DisplayValue from "@/app/hooks/useRef/demo4";
import DisplayValueError from "@/app/hooks/useRef/demo5";
import MovingBox from "@/app/hooks/useRef/demo6";
import WindowSize from "@/app/hooks/useRef/demo7";
import { useState } from "react";

export default function UseRefDemo() {
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount((pre: number) => pre + 1);
  };

  return (
    <div className="w-full max-w-screen-xl px-5 xl:px-0 grid animate-fade-up grid-cols-1 gap-y-10 gap-5 md:grid-cols-3">
      <div className="relative overflow-hidden">
        <div>Demo 1: Accessing DOM elements</div>
        <TextInput />
      </div>
      <div className="relative overflow-hidden">
        <div>Demo 2: Exposing a ref to other component</div>
        <TextInput2 />
      </div>
      <div className="relative overflow-hidden">
        <div>Demo 3: Save the state without triggering a render</div>
        <Timer />
      </div>
      <div className="relative overflow-hidden">
        <div>Demo 4: Save the previous props or state</div>
        <DisplayValue value={count} />
        <button
          onClick={addCount}
          className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
        >
          ADD
        </button>
      </div>
      <div className="relative overflow-hidden">
        <div>Demo 5: Incorrect example</div>
        <DisplayValueError value={count} />
        <button
          onClick={addCount}
          className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
        >
          ADD
        </button>
      </div>
      <div className="relative overflow-hidden">
        <div>Demo 6: useRef with requestAnimationFrame</div>
        <MovingBox />
      </div>
      <div className="relative overflow-hidden">
        <div>Demo 7: useRef with addEventListener resize</div>
        <WindowSize />
      </div>
    </div>
  );
}
