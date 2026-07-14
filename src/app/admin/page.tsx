"use client";

/**
 * /admin — Hidden unlock page (student mini-quiz destination).
 *
 * Not linked in the sidebar. Day 1 is permanently open; this route keeps the
 * browser-only Day 2 test controls.
 */

import Link from "next/link";
import {
  DAY1_DATE,
  DAY2_DATE,
  DAY2_STORAGE_KEY,
  WORKSHOP_UNLOCK_EVENT,
} from "@/config/workshopState";
import { WorkshopLayout } from "@/components/layout/WorkshopLayout";
import { CelebrationBurst } from "@/components/ui/CelebrationBurst";
import { useDay2Unlocked } from "@/hooks/useDay2Unlocked";

function writeDayUnlocked(storageKey: string, unlocked: boolean) {
  try {
    localStorage.setItem(storageKey, unlocked ? "true" : "false");
  } catch {
    // ignore
  }
  window.dispatchEvent(new Event(WORKSHOP_UNLOCK_EVENT));
}

type UnlockCardProps = {
  dayLabel: string;
  sessionDate: string;
  href: string;
  unlocked: boolean;
  onUnlock?: () => void;
  onLock?: () => void;
};

function UnlockCard({
  dayLabel,
  sessionDate,
  href,
  unlocked,
  onUnlock,
  onLock,
}: UnlockCardProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {dayLabel}
          </h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {sessionDate}
          </p>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
            unlocked
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"
              : "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300"
          }`}
        >
          {unlocked ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          )}
          {unlocked ? "Unlocked" : "Locked"}
        </span>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        {unlocked ? (
          <>
            <Link
              href={href}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#9B191F] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7d1419]"
            >
              Open {dayLabel}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            {onLock && (
              <button
                type="button"
                onClick={onLock}
                className="flex-1 rounded-lg border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Lock again
              </button>
            )}
          </>
        ) : onUnlock ? (
          <button
            type="button"
            onClick={onUnlock}
            className="w-full rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Unlock {dayLabel}
          </button>
        ) : (
          <p className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
            Managed in workshop settings
          </p>
        )}
      </div>
    </div>
  );
}

export default function AdminPage() {
  const day2Unlocked = useDay2Unlocked();

  return (
    <WorkshopLayout>
      <CelebrationBurst />
      <div className="relative z-10 mx-auto max-w-lg">
        <div className="mb-8 text-center">
          <div className="celebrate-hero mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#9B191F]/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9B191F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 5-4.9" />
            </svg>
          </div>
          <div className="celebrate-copy">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#9B191F]">
              You found it
            </p>
            <h1 className="mb-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Content Unlock
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Nice routing skills! Day 1 stays open; use this page only when
              Day 2 needs a browser-only test unlock.
            </p>
          </div>
        </div>

        <div className="celebrate-cards space-y-4">
          <UnlockCard
            dayLabel="Day 1"
            sessionDate={DAY1_DATE}
            href="/day-1"
            unlocked
          />
          <UnlockCard
            dayLabel="Day 2"
            sessionDate={DAY2_DATE}
            href="/day-2"
            unlocked={day2Unlocked}
            onUnlock={() => {
              writeDayUnlocked(DAY2_STORAGE_KEY, true);
            }}
            onLock={() => {
              writeDayUnlocked(DAY2_STORAGE_KEY, false);
            }}
          />
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <Link href="/" className="font-medium text-[#9B191F] hover:underline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </WorkshopLayout>
  );
}
