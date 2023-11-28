import React from "react";

interface AnimatedSvgComponentProps {
  width?: number;
  height?: number;
  titleSize?: string; // Tailwind CSS 文本大小类
  titleText?: string;
  paragraphSize?: string;
  paragraphText?: string;
  paragraphLink?: string; // 新增链接属性
  enableAnimation?: boolean;
  backgroundColors?: string[];
  textColor?: string;
}

const AnimatedSvgComponent: React.FC<AnimatedSvgComponentProps> = ({
  width = 800,
  height = 400,
  titleSize = "text-5xl", // 默认 Tailwind 文本大小
  titleText = "Animated SVG<br/>with React & Tailwind", // 默认标题
  paragraphSize = "text-xl", // 默认 Tailwind 文本大小
  paragraphText = "Click to see the source", // 默认段落文本
  paragraphLink, // 链接，默认为空
  enableAnimation = true,
  backgroundColors = ["#fc5c7d", "#6a82fb", "#05dfd7"],
  textColor = "text-white",
}) => {
  const backgroundGradient = `linear-gradient(-45deg, ${backgroundColors.join(
    ", "
  )})`;

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
        className={paragraphSize}
      >
        {paragraphText}
      </a>
    ) : (
      <p className={paragraphSize}>{paragraphText}</p>
    );

  return (
    <svg
      fill="none"
      viewBox={`0 0 ${width} ${height}`}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject height={height} width={width}>
        <div>
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

              .animate-gradient {
                animation: gradientBackground 10s ease infinite;
                background-size: 600% 400%;
              }

              .animate-rotate {
                animation: rotate ease-in-out 1s infinite alternate;
              }

              .animate-fadeIn {
                animation: fadeIn 3s ease 0s normal forwards;
              }

              .animated-svg-card {
                height: ${height}px;
                width: ${width}px;
                background: ${backgroundGradient};
                background-size: 600% 400%;
                animation: gradientBackground 10s ease infinite;
              }
            `}
          </style>
          <div
            className={`animated-svg-card w-full h-full flex flex-col items-center justify-center m-0 rounded-md ${
              enableAnimation ? "animate-gradient" : ""
            } ${textColor}`}
          >
            <h1
              className={`${titleSize} uppercase text-shadow ${
                enableAnimation ? "animate-rotate" : ""
              }`}
            >
              {renderedTitle}
            </h1>
            <h5>{renderedParagraph}</h5>
          </div>
        </div>
      </foreignObject>
    </svg>
  );
};

export default AnimatedSvgComponent;
