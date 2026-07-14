/**
 * Section — reusable wrapper for curriculum sections within a day page.
 * Provides consistent heading styles and spacing between lesson blocks.
 */

import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  number: number | string;
  title: string;
  children: ReactNode;
}

export function Section({ id, number, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      {/* Sticky glass section header for long lesson scrolling */}
      <div className="sticky top-14 z-20 -mx-1 mb-6 flex items-start gap-3 rounded-xl border border-black/10 bg-white/70 px-3 py-2 backdrop-blur-md dark:border-[#2a2a3a] dark:bg-[#0a0a0f]/85 sm:items-center">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#9B191F] text-sm font-bold text-white shadow-[0_0_16px_rgba(155,25,31,0.35)]">
          {number}
        </span>
        <h2 className="min-w-0 text-xl font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className="prose-workshop space-y-4 text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}
