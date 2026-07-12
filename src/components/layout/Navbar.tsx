"use client";

/**
 * Navbar — top bar with workshop title and theme toggle.
 * Stays fixed at the top while students scroll through long lessons.
 */

import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-zinc-200 bg-white/80 px-4 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80 lg:px-6">
      <div className="flex items-center gap-3">
        {/* SIM Red accent dot */}
        <span className="inline-block h-3 w-3 rounded-full bg-[#9B191F]" />
        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Workshop Companion Hub
        </span>
      </div>
      <ThemeToggle />
    </header>
  );
}
