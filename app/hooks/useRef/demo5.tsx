import React, { useRef } from "react";

type Props = {
  value: number; // 根据你的实际需求更改类型
};

function DisplayValueError({ value }: Props): React.ReactElement {
  const previousValue = useRef<number>(value);

  // 错误：在渲染期间修改 ref
  if (previousValue.current !== value) {
    previousValue.current = value;
  }

  return (
    <div className="p-4 mt-5 mb-4 bg-gray-100 rounded-md w-full max-w-md mx-auto text-center text-gray-800 border border-gray-300 shadow-md">
      <p className="text-lg font-semibold mb-2">Current Value: {value}</p>
      <p className="text-sm text-gray-600">
        Previous Value: {previousValue.current}
      </p>
    </div>
  );
}

export default DisplayValueError;
