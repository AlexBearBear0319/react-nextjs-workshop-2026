"use client";

/** Day 1 is a permanent public section with no browser override. */

import { isDay1Unlocked as configDay1Unlocked } from "@/config/workshopState";

export function useDay1Unlocked(): boolean {
  return configDay1Unlocked;
}
