"use client";
import React, { useMemo, useState } from "react";

type User = {
  id: number;
  name: string;
};

type UserListProps = {
  users: User[];
  searchTerm: string;
  isDark: boolean;
};

type ListProps = {
  users: User[];
};

let allUsers: User[] = [];
for (let i = 1; i <= 500; i++) {
  allUsers.push({ id: i, name: `User${i}` });
}

export function filterUsers(users: User[], searchTerm: string) {
  return users.filter((user) => user.name.includes(searchTerm));
}

const List: React.FC<ListProps> = ({ users }) => {
  console.log(
    "[ARTIFICIALLY SLOW] Rendering <List /> with " + users.length + " items"
  );
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }
  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="p-2 border bg-white rounded">
          {user.name}
        </div>
      ))}
    </>
  );
};

const UserListWithoutMemo: React.FC<UserListProps> = ({
  users,
  searchTerm,
  isDark,
}) => {
  const currentUsers = useMemo(() => {
    return filterUsers(users, searchTerm);
  }, [users, searchTerm]);
  return (
    <div
      className="space-y-2 px-4"
      style={{ background: isDark ? "#000" : "" }}
    >
      <List users={currentUsers} />
    </div>
  );
};

const Comparison4: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDark, setIsDark] = useState(false);

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
        <h2 className="flex-1 text-lg font-bold mb-2">Without memo</h2>
        <UserListWithoutMemo
          users={allUsers}
          searchTerm={searchTerm}
          isDark={isDark}
        />
      </div>
    </div>
  );
};

export default Comparison4;
