import React, { useEffect, useRef } from "react";

const MovingBox: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const boxWidth = 100; // 移动到useEffect外部，使其在整个组件中都可见

  useEffect(() => {
    const boxElem = boxRef.current;
    if (!boxElem) return;

    let position = 0;

    const animate = () => {
      position += 1;
      if (position > window.innerWidth) {
        position = -boxWidth; // 当方块完全离开屏幕时，将其重置到屏幕左侧
      }
      boxElem.style.transform = `translateX(${position}px)`;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current); // 在组件卸载时取消动画
      }
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className="p-4 mt-5 mb-4"
      style={{ width: `${boxWidth}px`, height: "100px", background: "blue" }}
    ></div>
  );
};

export default MovingBox;
