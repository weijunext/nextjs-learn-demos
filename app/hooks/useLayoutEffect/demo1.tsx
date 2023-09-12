"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const BoxComparison: React.FC = () => {
  const [heightEffect, setHeightEffect] = useState<number>(0);
  const [heightLayoutEffect, setHeightLayoutEffect] = useState<number>(0);
  const refEffect = useRef<HTMLDivElement | null>(null);
  const refLayoutEffect = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (refEffect.current) {
      setHeightEffect(refEffect.current.offsetWidth);
    }
  }, []);

  useLayoutEffect(() => {
    if (refLayoutEffect.current) {
      setHeightLayoutEffect(refLayoutEffect.current.offsetWidth);
    }
  }, []);

  return (
    <div className="space-x-10 flex p-6 bg-gray-100 rounded-xl mx-auto mt-5 shadow-lg text-center text-gray-700">
      <div>
        <h2 className="font-bold text-xl">使用 useEffect</h2>
        <div ref={refEffect} className="w-24 h-1 bg-light-gray"></div>
        <div
          style={{ height: `${heightEffect}px` }}
          className="w-48 bg-red-500 mt-2.5"
        >
          红色方块
        </div>
      </div>

      <div>
        <h2 className="font-bold text-xl">使用 useLayoutEffect</h2>
        <div ref={refLayoutEffect} className="w-24 h-1 bg-light-gray"></div>
        <div
          style={{ height: `${heightLayoutEffect}px` }}
          className="w-48 bg-blue-500 mt-2.5"
        >
          蓝色方块
        </div>
      </div>
    </div>
  );
};

export default BoxComparison;
