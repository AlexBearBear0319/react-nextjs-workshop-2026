"use client";

/**
 * Sidebar — expandable Day 1 / Day 2 with one page per topic.
 * Whole day row toggles expand; topic links go to /day-N/topic-id.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  DAY1_TOPICS,
  DAY2_TOPICS,
  topicHref,
  type CurriculumTopic,
} from "@/config/curriculum";
import { DAY1_DATE, DAY2_DATE } from "@/config/workshopState";
import { useDay1Unlocked } from "@/hooks/useDay1Unlocked";
import { useDay2Unlocked } from "@/hooks/useDay2Unlocked";

function DayTopicNav({
  day,
  dayLabel,
  topics,
  locked,
  unlockDate,
  onNavigate,
}: {
  day: "day-1" | "day-2";
  dayLabel: string;
  topics: CurriculumTopic[];
  locked?: boolean;
  unlockDate?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const dayBase = `/${day}`;
  const onThisDay = pathname === dayBase || pathname.startsWith(`${dayBase}/`);
  const [expanded, setExpanded] = useState(onThisDay);

  useEffect(() => {
    // Preserve the existing behavior: navigating into a day opens its topics.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (onThisDay) setExpanded(true);
  }, [onThisDay]);

  if (locked) {
    return (
      <div className="space-y-1">
        <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 dark:text-zinc-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="min-w-0 flex-1">{dayLabel}</span>
          <span className="text-xs text-amber-600 dark:text-amber-400">
            Locked
          </span>
        </div>
        {unlockDate && (
          <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
            Unlocks on {unlockDate}!
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-0.5">
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
          onThisDay
            ? "bg-[#9B191F]/15 font-medium text-[#9B191F] dark:bg-[#9B191F]/25 dark:text-red-300"
            : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
        }`}
      >
        <span className="min-w-0 flex-1">{dayLabel}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {expanded && (
        <ul className="ml-2 space-y-0.5 border-l border-black/10 pl-2 dark:border-white/10">
          {topics.map((topic, index) => {
            const href = topicHref(day, topic.id);
            const isActive = pathname === href;
            const startsGroup =
              topic.group && topic.group !== topics[index - 1]?.group;

            return (
              <Fragment key={topic.id}>
                {startsGroup && (
                  <li className="px-2.5 pb-1 pt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400 first:pt-1 dark:text-zinc-500">
                    {topic.group}
                  </li>
                )}
                <li>
                  <Link
                    href={href}
                    onClick={onNavigate}
                    className={`flex items-start gap-2 rounded-lg px-2.5 py-1.5 text-sm transition-colors ${
                      isActive
                        ? "bg-[#9B191F] font-medium text-white"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      {topic.navNumber ?? index + 1}
                    </span>
                    <span className="leading-snug">{topic.label}</span>
                  </Link>
                </li>
              </Fragment>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function Sidebar() {
  const day1Unlocked = useDay1Unlocked();
  const day2Unlocked = useDay2Unlocked();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleDrawerKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleDrawerKeyDown);
    return () => {
      window.removeEventListener("keydown", handleDrawerKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const sidebarContent = (
    <nav className="flex flex-col gap-2 p-4" aria-label="Curriculum">
      <Link
        href="/"
        onClick={closeMobile}
        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
          pathname === "/"
            ? "bg-[#9B191F] font-medium text-white"
            : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
        }`}
      >
        Home
      </Link>

      <DayTopicNav
        day="day-1"
        dayLabel="Day 1 — Foundations"
        topics={DAY1_TOPICS}
        locked={!day1Unlocked}
        unlockDate={DAY1_DATE}
        onNavigate={closeMobile}
      />

      <DayTopicNav
        day="day-2"
        dayLabel="Day 2 — Interactivity"
        topics={DAY2_TOPICS}
        locked={!day2Unlocked}
        unlockDate={DAY2_DATE}
        onNavigate={closeMobile}
      />
    </nav>
  );

  return (
    <>
      <button
        ref={menuButtonRef}
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#9B191F] text-white shadow-lg lg:hidden"
        style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
        aria-label="Open navigation"
        aria-expanded={mobileOpen}
        aria-controls="mobile-workshop-navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMobile}
            aria-hidden
          />
          <aside
            ref={drawerRef}
            id="mobile-workshop-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Workshop navigation"
            className="absolute left-0 top-0 flex h-full w-72 flex-col border-r border-black/10 bg-white/80 shadow-xl backdrop-blur-md dark:border-[#2a2a3a] dark:bg-[#0a0a0f]/95"
          >
            <div className="flex items-center justify-between border-b border-black/10 p-4 dark:border-white/10">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                Menu
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeMobile}
                className="rounded-lg p-1 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Close navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">{sidebarContent}</div>
          </aside>
        </div>
      )}

      <aside className="hidden w-64 shrink-0 border-r border-black/10 bg-white/70 backdrop-blur-md dark:border-[#2a2a3a] dark:bg-[#0a0a0f]/80 lg:block">
        <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto p-2">
          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Curriculum
          </p>
          {sidebarContent}
        </div>
      </aside>
    </>
  );
}
