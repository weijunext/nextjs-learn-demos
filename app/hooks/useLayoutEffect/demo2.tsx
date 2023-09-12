"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Rect = {
  top: number;
  left: number;
  bottom: number;
  right: number;
};

interface ButtonWithTooltipProps {
  tooltipContent: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

interface TooltipProps {
  targetRect: Rect;
  containerRect: Rect;
  children: React.ReactNode;
}

export default function HoverTooltip() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="p-8 bg-gray-100 rounded-xl shadow-lg m-4 space-y-4"
    >
      <ButtonWithTooltip
        containerRef={containerRef}
        tooltipContent="This tooltip does not fit above the button. This is why it's displayed below instead!"
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
      <ButtonWithTooltip
        containerRef={containerRef}
        tooltipContent="This tooltip fits above the button"
      >
        Hover over me (tooltip above)
      </ButtonWithTooltip>
      <ButtonWithTooltip
        containerRef={containerRef}
        tooltipContent="This tooltip fits above the button"
      >
        Hover over me (tooltip above)
      </ButtonWithTooltip>
    </div>
  );
}

const ButtonWithTooltip: React.FC<ButtonWithTooltipProps> = ({
  tooltipContent,
  containerRef,
  children,
}) => {
  const [targetRect, setTargetRect] = useState<Rect | null>(null);
  const [containerRect, setContainerRect] = useState<Rect | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 focus:outline-none transition"
        onPointerEnter={() => {
          buttonRef.current &&
            setTargetRect(buttonRef.current.getBoundingClientRect());
          containerRef.current &&
            setContainerRect(containerRef.current.getBoundingClientRect());
        }}
        onPointerLeave={() => {
          setTargetRect(null);
          setContainerRect(null);
        }}
      >
        {children}
      </button>
      {targetRect && containerRect && (
        <Tooltip targetRect={targetRect} containerRect={containerRect}>
          {tooltipContent}
        </Tooltip>
      )}
    </div>
  );
};

const Tooltip: React.FC<TooltipProps> = ({
  children,
  targetRect,
  containerRect,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      setTooltipHeight(height);
    }
  }, [children]); // 根据children变化来重新计算，以确保内容改变时更新高度

  let tooltipX = targetRect.left;
  let tooltipY =
    targetRect.top - containerRect.top - tooltipHeight <= 0
      ? targetRect.bottom
      : targetRect.top - tooltipHeight; // 默认在按钮上方

  return createPortal(
    <div
      ref={ref}
      className="absolute bg-gray-700 text-white py-2 px-2 rounded shadow-md"
      style={{
        left: `${tooltipX}px`,
        top: `${tooltipY}px`,
      }}
    >
      {children}
    </div>,
    document.body
  );
};
