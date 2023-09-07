"use client";
import React, { useEffect, useState } from "react";

const Counter: React.FC = () => {
  const [leftCount, setLeftCount] = useState<number>(0);
  const [rightCount, setRightCount] = useState<number>(0);

  useEffect(() => {
    /**
     * This useEffect will be executed when:
     * 1、the component is mounted and unmounted.
     * 2、click left button.
     * 3、click right button.
     */
    console.log(`Left button clicked ${leftCount} times`);
    document.title = `Left button clicked ${leftCount} times`;
  });

  useEffect(() => {
    /**
     * This useEffect will be executed when:
     * 1、the component is mounted and unmounted.
     * 2、click right button.
     */
    console.log(`Right button clicked ${rightCount} times`);
  }, [rightCount]);

  useEffect(() => {
    /**
     * This useEffect will be executed when:
     * 1、the component is mounted and unmounted.
     */
    console.log(`I have a empty array of dependencies.`);
  }, []);

  return (
    <div className="p-8 bg-gray-100 w-full rounded-xl mx-auto mt-5 shadow-lg">
      <p className="text-xl mb-4">
        Left button clicked <span className="text-blue-500">{leftCount}</span>{" "}
        times
      </p>
      <p className="text-xl mb-4">
        Right button clicked <span className="text-blue-500">{rightCount}</span>{" "}
        times
      </p>
      <div className="flex justify-between">
        <button
          onClick={() => setLeftCount((pre) => pre + 1)}
          className="w-[40%] bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
        >
          left button
        </button>
        <button
          onClick={() => setRightCount((pre) => pre + 1)}
          className="w-[40%] bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
        >
          right button
        </button>
      </div>
    </div>
  );
};

export default Counter;
