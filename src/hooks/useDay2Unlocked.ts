"use client";

/**
 * Client-side hook that determines whether Day 2 is accessible.
 *
 * Priority order:
 * 1. localStorage override (set via /admin page) — per-browser only
 * 2. Hardcoded config in src/config/workshopState.ts — affects everyone after redeploy
 */

import { useSyncExternalStore } from "react";
import {
  DAY2_STORAGE_KEY,
  WORKSHOP_UNLOCK_EVENT,
  isDay2Unlocked as configDay2Unlocked,
} from "@/config/workshopState";

function readUnlocked(): boolean {
  try {
    const stored = localStorage.getItem(DAY2_STORAGE_KEY);
    if (stored === "true") return true;
    if (stored === "false") return false;
  } catch {
    // localStorage may be unavailable in some privacy modes
  }
  return configDay2Unlocked;
}

function subscribe(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === DAY2_STORAGE_KEY || event.key === null) onStoreChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(WORKSHOP_UNLOCK_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(WORKSHOP_UNLOCK_EVENT, onStoreChange);
  };
}

export function useDay2Unlocked(): boolean {
  return useSyncExternalStore(
    subscribe,
    readUnlocked,
    () => configDay2Unlocked,
  );
}
