"use client";
import React, { useMemo, useState } from "react";

type User = {
  id: number;
  name: string;
};

export function filterUsers(users: User[], searchTerm: string) {
  console.log(
    "[ARTIFICIALLY SLOW] Rendering <List /> with " + users.length + " items"
  );
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }
  return users.filter((user) => user.name.includes(searchTerm));
}

const Comparison2: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDark, setIsDark] = useState(false);

  const allUsers: User[] = useMemo(() => {
    let list = [];
    for (let i = 1; i <= 500; i++) {
      list.push({ id: i, name: `User${i}` });
    }
    return list;
  }, []);

  console.log("without useMemo");
  const withoutUseMemoCurrentUsers = filterUsers(allUsers, searchTerm);

  return (
    <div className="h-96 overflow-auto border p-6 mt-5 shadow-lg bg-gray-100 rounded-xl text-gray-700">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name..."
        className="p-2 mb-4 border rounded w-full"
      />

      <button
        onClick={() => setIsDark((pre) => !pre)}
        className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
      >
        {isDark ? "Dark mode" : "Light mode"}
      </button>

      <div>
        <h2 className="flex-1 text-lg font-bold m-2">Without useMemo</h2>
        <div
          className="space-y-2 px-4"
          style={{ background: isDark ? "#000" : "" }}
        >
          {withoutUseMemoCurrentUsers.map((user) => (
            <div key={user.id} className="p-2 border bg-white rounded">
              {user.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comparison2;
