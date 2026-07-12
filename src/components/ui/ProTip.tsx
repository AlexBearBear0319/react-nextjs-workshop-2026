/**
 * ProTip — a friendly callout for helpful hints and best practices.
 * Styled with SIM Red to match the workshop brand.
 *
 * Use this for tips like "Save your file before checking the browser!"
 */

import type { ReactNode } from "react";

interface ProTipProps {
  children: ReactNode;
  title?: string;
}

export function ProTip({ children, title = "Pro Tip" }: ProTipProps) {
  return (
    <div className="my-4 flex gap-3 rounded-xl border border-[#9B191F]/20 bg-[#9B191F]/5 p-4 dark:border-[#9B191F]/30 dark:bg-[#9B191F]/10">
      <span className="mt-0.5 shrink-0 text-[#9B191F]" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </span>
      <div>
        <p className="mb-1 text-sm font-semibold text-[#9B191F]">{title}</p>
        <div className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {children}
        </div>
      </div>
    </div>
  );
}
