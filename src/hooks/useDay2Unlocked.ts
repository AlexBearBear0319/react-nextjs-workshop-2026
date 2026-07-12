"use client";

/**
 * Client-side hook that determines whether Day 2 is accessible.
 *
 * Priority order:
 * 1. localStorage override (set via /admin page) — per-browser only
 * 2. Hardcoded config in src/config/workshopState.ts — affects everyone after redeploy
 *
 * This hook MUST run on the client because localStorage is not available
 * during server-side rendering.
 */

import { useEffect, useState } from "react";
import {
  DAY2_STORAGE_KEY,
  isDay2Unlocked as configDay2Unlocked,
} from "@/config/workshopState";

export function useDay2Unlocked(): boolean {
  // Start with the config value to avoid hydration mismatch on first paint.
  const [unlocked, setUnlocked] = useState(configDay2Unlocked);

  useEffect(() => {
    const stored = localStorage.getItem(DAY2_STORAGE_KEY);

    if (stored === "true") {
      setUnlocked(true);
    } else if (stored === "false") {
      setUnlocked(false);
    } else {
      // No localStorage override — fall back to the config file.
      setUnlocked(configDay2Unlocked);
    }

    // Re-check when another tab updates localStorage (e.g. admin page open).
    const handleStorage = (e: StorageEvent) => {
      if (e.key === DAY2_STORAGE_KEY) {
        setUnlocked(e.newValue === "true" || configDay2Unlocked);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return unlocked;
}
