import React, { useEffect, useRef } from "react";

export default function Timer(): React.ReactElement {
  const count = useRef<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      count.current += 1;
      console.log(`Elapsed time: ${count.current} minutes`);
    }, 1000 * 60);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-8 bg-gray-100 w-full max-w-md rounded-xl mx-auto mt-5 shadow-lg text-center text-gray-700 font-bold">
      Check the console to see the elapsed time!
    </div>
  );
}
