import React, { InputHTMLAttributes, forwardRef, useRef } from "react";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const MyInput = forwardRef<HTMLInputElement, MyInputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      placeholder="Type something..."
      className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
    />
  );
});
MyInput.displayName = "MyInput";

const TextInput2: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return (
    <div className="p-8 bg-gray-100 w-full max-w-sm rounded-xl mx-auto mt-5 shadow-lg">
      <MyInput ref={inputRef} type="text" />
      <button
        onClick={handleClick}
        className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
      >
        Focus the input
      </button>
    </div>
  );
};

export default TextInput2;
