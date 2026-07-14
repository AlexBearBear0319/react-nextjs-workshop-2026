/**
 * ProTip — friendly callout for helpful hints and best practices.
 *
 * Brief styling: soft red background + thick #9B191F left border.
 * Adapts opacities for light/dark mode.
 */

import type { ReactNode } from "react";

interface ProTipProps {
  children: ReactNode;
  title?: string;
}

export function ProTip({ children, title = "Pro Tip" }: ProTipProps) {
  return (
    <div className="my-4 flex gap-3 rounded-xl border border-black/10 border-l-4 border-l-[#9B191F] bg-[#9B191F]/5 p-4 dark:border-white/10 dark:border-l-[#9B191F] dark:bg-[#9B191F]/10">
      <span className="mt-0.5 shrink-0 text-[#9B191F] dark:text-red-300" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </span>
      <div>
        <p className="mb-1 text-sm font-semibold text-[#9B191F] dark:text-red-300">{title}</p>
        <div className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {children}
        </div>
      </div>
    </div>
  );
}
