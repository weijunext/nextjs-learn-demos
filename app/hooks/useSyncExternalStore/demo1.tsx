"use client";
import { useOnlineStatus } from "@/lib/hooks/useOnlineStatus";

export default function StatusBar() {
  const isOnline = useOnlineStatus();
  return (
    <div className="p-8 bg-gray-100 w-full rounded-xl mx-auto mt-5">
      <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
    </div>
  );
}
