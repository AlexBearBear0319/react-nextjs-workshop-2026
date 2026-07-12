"use client";

/**
 * Admin Page (/admin) — Hidden route for workshop organizers.
 *
 * This page is NOT linked in the sidebar (students won't stumble on it).
 * Organizers visit /admin directly to unlock Day 2 for their browser.
 *
 * HOW IT WORKS:
 *   - "Unlock Day 2" writes 'true' to localStorage key 'day2_unlocked'
 *   - "Lock Day 2"   writes 'false' to localStorage
 *   - "Reset"        removes the localStorage key (falls back to config file)
 *
 * IMPORTANT: This only affects YOUR browser. To unlock Day 2 for ALL students,
 * change isDay2Unlocked to true in src/config/workshopState.ts and redeploy.
 */

import { useCallback, useEffect, useState } from "react";
import {
  DAY2_STORAGE_KEY,
  isDay2Unlocked as configDay2Unlocked,
} from "@/config/workshopState";
import { WorkshopLayout } from "@/components/layout/WorkshopLayout";

export default function AdminPage() {
  const [storageValue, setStorageValue] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setStorageValue(localStorage.getItem(DAY2_STORAGE_KEY));
  }, []);

  const unlock = useCallback(() => {
    localStorage.setItem(DAY2_STORAGE_KEY, "true");
    setStorageValue("true");
  }, []);

  const lock = useCallback(() => {
    localStorage.setItem(DAY2_STORAGE_KEY, "false");
    setStorageValue("false");
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem(DAY2_STORAGE_KEY);
    setStorageValue(null);
  }, []);

  const effectiveStatus =
    storageValue === "true"
      ? "UNLOCKED (localStorage)"
      : storageValue === "false"
        ? "LOCKED (localStorage)"
        : configDay2Unlocked
          ? "UNLOCKED (config file)"
          : "LOCKED (config file)";

  if (!mounted) {
    return (
      <WorkshopLayout>
        <p className="text-zinc-500">Loading admin panel...</p>
      </WorkshopLayout>
    );
  }

  return (
    <WorkshopLayout>
      <div className="mx-auto max-w-lg">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#9B191F]">
          Organizer Only
        </p>
        <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Admin Panel
        </h1>

        {/* Status card */}
        <div className="mb-8 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Day 2 Status
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-500">Config file default:</span>
              <span className="font-mono font-medium text-zinc-900 dark:text-zinc-100">
                {configDay2Unlocked ? "true" : "false"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">localStorage override:</span>
              <span className="font-mono font-medium text-zinc-900 dark:text-zinc-100">
                {storageValue ?? "(none)"}
              </span>
            </div>
            <div className="flex justify-between border-t border-zinc-200 pt-3 dark:border-zinc-700">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                Effective status:
              </span>
              <span
                className={`font-mono font-bold ${
                  effectiveStatus.startsWith("UNLOCKED")
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-amber-600 dark:text-amber-400"
                }`}
              >
                {effectiveStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={unlock}
            className="flex-1 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Unlock Day 2
          </button>
          <button
            onClick={lock}
            className="flex-1 rounded-lg bg-amber-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
          >
            Lock Day 2
          </button>
          <button
            onClick={reset}
            className="flex-1 rounded-lg border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Reset to Default
          </button>
        </div>

        {/* Organizer instructions */}
        <div className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-6 text-sm leading-relaxed text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-400">
          <h3 className="mb-3 font-semibold text-zinc-900 dark:text-zinc-100">
            Organizer Instructions
          </h3>
          <ol className="list-inside list-decimal space-y-2">
            <li>
              <strong>Testing (your browser only):</strong> Click &quot;Unlock
              Day 2&quot; above, then visit /day-2 to preview the content.
            </li>
            <li>
              <strong>Day 2 morning (all students):</strong> Open{" "}
              <code className="rounded bg-zinc-200 px-1 font-mono text-xs dark:bg-zinc-700">
                src/config/workshopState.ts
              </code>
              , change <code>isDay2Unlocked</code> to{" "}
              <code>true</code>, and redeploy to Vercel.
            </li>
            <li>
              <strong>PDF slides:</strong> Search the codebase for{" "}
              <code>ORGANIZER: Replace this Google Drive link</code> to update
              the download button on the home page.
            </li>
          </ol>
        </div>
      </div>
    </WorkshopLayout>
  );
}
