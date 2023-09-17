"use client";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const TextInput = forwardRef(function TextInput(props, ref) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Type something..."
      className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
    />
  );
});
type CustomInputHandle = {
  focus: () => void;
  clear: () => void;
};
export default function ClearInput() {
  const inputRef = useRef<CustomInputHandle | null>(null);

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.clear();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="p-8 bg-gray-100 w-full rounded-xl mx-auto mt-5 shadow-lg">
      <TextInput ref={inputRef} />
      <button
        onClick={clearInput}
        className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
      >
        Clear the input
      </button>
    </div>
  );
}
