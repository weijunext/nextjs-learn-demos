"use client";
import { FC, memo, useState } from "react";

const WithoutUseDeferredValue: FC = () => {
  const [text, setText] = useState<string>("");
  return (
    <div className="p-4">
      {/* 输入框的值直接与 text 绑定，所以输入框会实时显示用户的输入 */}
      <input
        className="p-2 border border-gray-300 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* SlowList 组件接受 text 作为属性，渲染优先级没有降低，页面会卡顿 */}
      <SlowList text={text} />
    </div>
  );
};

interface SlowListProps {
  text: string;
}

const SlowList: FC<SlowListProps> = memo(function SlowList({ text }) {
  const arr: JSX.Element[] = [];
  for (let i = 0; i < 200; i++) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {} // 模拟计算密集型操作
    if (String(i).includes(text)) {
      arr.push(
        <li key={i} className="p-1 bg-gray-100 border-b">
          {i}
        </li>
      );
    }
  }
  return <ul className="mt-4">{arr}</ul>;
});

export default WithoutUseDeferredValue;
