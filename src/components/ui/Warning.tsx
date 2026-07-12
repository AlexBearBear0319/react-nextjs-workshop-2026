/**
 * Warning — an amber callout for common beginner mistakes.
 * Helps reduce facilitator load by answering predictable questions.
 *
 * Examples: "Forgot to save?", "Missing 'use client'?", "Wrong folder?"
 */

import type { ReactNode } from "react";

interface WarningProps {
  children: ReactNode;
  title?: string;
}

export function Warning({ children, title = "Watch Out!" }: WarningProps) {
  return (
    <div className="my-4 flex gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-950/40">
      <span className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </span>
      <div>
        <p className="mb-1 text-sm font-semibold text-amber-800 dark:text-amber-300">
          {title}
        </p>
        <div className="text-sm leading-relaxed text-amber-900 dark:text-amber-200">
          {children}
        </div>
      </div>
    </div>
  );
}
