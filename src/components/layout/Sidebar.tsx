"use client";

/**
 * Sidebar — the main navigation for the workshop curriculum.
 *
 * Day 2 links are hidden until either:
 *   - An organizer flips isDay2Unlocked in workshopState.ts and redeploys, OR
 *   - An organizer visits /admin and unlocks Day 2 in localStorage (browser-only).
 *
 * On mobile, the sidebar slides in as a drawer toggled by the hamburger button.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDay2Unlocked } from "@/hooks/useDay2Unlocked";

interface NavItem {
  href: string;
  label: string;
  locked?: boolean;
}

const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/day-1", label: "Day 1 — Foundations" },
];

const day2Nav: NavItem = {
  href: "/day-2",
  label: "Day 2 — Interactivity",
};

function NavLink({
  href,
  label,
  locked,
  onClick,
}: NavItem & { onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (locked) {
    return (
      <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 dark:text-zinc-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span>{label}</span>
        <span className="ml-auto text-xs text-amber-600 dark:text-amber-400">Locked</span>
      </div>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
        isActive
          ? "bg-[#9B191F] font-medium text-white"
          : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
      }`}
    >
      {label}
    </Link>
  );
}

export function Sidebar() {
  const day2Unlocked = useDay2Unlocked();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const sidebarContent = (
    <nav className="flex flex-col gap-1 p-4">
      {mainNav.map((item) => (
        <NavLink key={item.href} {...item} onClick={closeMobile} />
      ))}

      {/* Day 2 — conditionally shown or locked */}
      {day2Unlocked ? (
        <NavLink {...day2Nav} onClick={closeMobile} />
      ) : (
        <>
          <NavLink {...day2Nav} locked />
          <p className="mt-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
            Day 2 is locked until tomorrow!
          </p>
        </>
      )}
    </nav>
  );

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-4 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#9B191F] text-white shadow-lg lg:hidden"
        aria-label="Open navigation"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Mobile overlay drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMobile}
          />
          <aside className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl dark:bg-zinc-900">
            <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">Menu</span>
              <button
                onClick={closeMobile}
                className="rounded-lg p-1 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Close navigation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            {sidebarContent}
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 lg:block">
        <div className="sticky top-14 p-2">
          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Curriculum
          </p>
          {sidebarContent}
        </div>
      </aside>
    </>
  );
}
