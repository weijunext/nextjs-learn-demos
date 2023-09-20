import { useDebugValue, useSyncExternalStore } from 'react';

export function useOnlineStatus(): boolean {
  const isOnline = useSyncExternalStore<boolean>(subscribe, getSnapshot, getServerSnapshot);
  useDebugValue(isOnline ? "✅ Online(useDebugValue)" : "❌ Disconnected(useDebugValue)")
  return isOnline;
}

function getSnapshot(): boolean {
  return navigator.onLine;
}

function getServerSnapshot(): boolean {
  return true;
}

function subscribe(callback: () => void): () => void {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}
