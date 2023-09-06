import React, { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
};

function DisplayValue({ value }: Props): React.ReactElement {
  const [prevValue, setPrevValue] = useState<number | null>(null); // 初始时，没有前一个值
  const currentRef = useRef<number>(value);

  useEffect(() => {
    setPrevValue(currentRef.current);
    currentRef.current = value;
  }, [value]);

  return (
    <div className="p-4 mt-5 mb-4 bg-gray-100 rounded-md w-full max-w-md mx-auto text-center text-gray-800 border border-gray-300 shadow-md">
      <p className="text-lg font-semibold mb-2">Current Value: {value}</p>
      <p className="text-sm text-gray-600">Previous Value: {prevValue}</p>
    </div>
  );
}

export default DisplayValue;
