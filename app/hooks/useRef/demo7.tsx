import { useEffect, useRef } from "react";

export default function WindowSize() {
  const widthRef = useRef(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      widthRef.current = window.innerWidth;
      console.log(`Width: ${widthRef.current}`);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-8 bg-gray-100 w-full max-w-md rounded-xl mx-auto mt-5 shadow-lg text-center text-gray-700 font-bold">
      Check the console for window width updates!
    </div>
  );
}
