import { useRef } from "react";

export default function TextInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className="p-8 bg-gray-100 w-full rounded-xl mx-auto mt-5 shadow-lg">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
      <button
        onClick={focusInput}
        className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
      >
        Focus the input
      </button>
    </div>
  );
}
