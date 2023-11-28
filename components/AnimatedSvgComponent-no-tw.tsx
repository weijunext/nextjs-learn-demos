/**
 * 功能和 AnimatedSvgComponent 一样，但把基于 TailwindCSS 的样式类改成内联 CSS 了
 */
import React from "react";

interface AnimatedSvgComponentProps {
  width?: number;
  height?: number;
  titleText?: string;
  paragraphText?: string;
  paragraphLink?: string; // 新增链接属性
  enableAnimation?: boolean;
  backgroundColors?: string[];
}

const AnimatedSvgComponentNoTW: React.FC<AnimatedSvgComponentProps> = ({
  width = 800,
  height = 400,
  titleText = "Animated SVG with React & Tailwind", // 默认标题
  paragraphText = "Click to see the source", // 默认段落文本
  paragraphLink, // 链接，默认为空
  enableAnimation = true,
  backgroundColors = ["#fc5c7d", "#6a82fb", "#05dfd7"],
}) => {
  const backgroundGradient = `linear-gradient(-45deg, ${backgroundColors.join(
    ", "
  )})`;

  const titleStyles: React.CSSProperties = {
    fontSize: "2.25rem", // 相当于 Tailwind 的 text-5xl
    fontWeight: "bold",
    textTransform: "uppercase",
    textShadow:
      "0 1px 0 #efefef, 0 1px 0 #efefef, 0 1px 0 #efefef, 0 1px 0 #efefef, 0 12px 5px rgba(0, 0, 0, 0.1)",
    animation: enableAnimation
      ? "rotate 1s ease-in-out infinite alternate"
      : undefined,
  };

  const paragraphStyles = {
    fontSize: "1.25rem", // 相当于 Tailwind 的 text-xl
    animation: "fadeIn 3s ease 0s normal forwards",
  };

  // 创建带有正确换行的标题
  const renderedTitle = titleText.split("<br/>").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  // 生成段落文本或链接
  const renderedParagraph =
    paragraphLink && paragraphText ? (
      <a
        href={paragraphLink}
        target="_blank"
        rel="noopener noreferrer"
        style={paragraphStyles}
      >
        {paragraphText}
      </a>
    ) : (
      <p style={paragraphStyles}>{paragraphText}</p>
    );

  return (
    <svg
      fill="none"
      viewBox={`0 0 ${width} ${height}`}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <foreignObject width="100%" height="100%">
        <div
          style={{
            width: "100%",
            height: "100%",
            background: backgroundGradient,
            backgroundSize: "600% 400%",
            animation: enableAnimation
              ? "gradientBackground 10s ease infinite"
              : "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
            borderRadius: "0.375rem", // 相当于 Tailwind 的 rounded-md
            color: "white", // 文本颜色
          }}
        >
          <style>
            {`
              @keyframes rotate {
                0% { transform: rotate(3deg); }
                100% { transform: rotate(-3deg); }
              }

              @keyframes gradientBackground {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }

              @keyframes fadeIn {
                0% { opacity: 0; }
                66% { opacity: 0; }
                100% { opacity: 1; }
              }
            `}
          </style>
          <h1 style={titleStyles}>{renderedTitle}</h1>
          <h5>{renderedParagraph}</h5>
        </div>
      </foreignObject>
    </svg>
  );
};

export default AnimatedSvgComponentNoTW;
