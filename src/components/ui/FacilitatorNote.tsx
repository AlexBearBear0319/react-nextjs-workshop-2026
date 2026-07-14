import type { ReactNode } from "react";

export function FacilitatorNote({
  children,
  title = "Facilitator note",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <details className="group my-4 rounded-xl border border-dashed border-purple-300 bg-purple-50/70 dark:border-purple-800 dark:bg-purple-950/20">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-purple-900 outline-none transition-colors hover:bg-purple-100/70 focus-visible:ring-2 focus-visible:ring-purple-500 dark:text-purple-200 dark:hover:bg-purple-950/40">
        <span className="flex items-center gap-2">
          <span aria-hidden="true">🎤</span>
          {title}
        </span>
        <span className="text-xs font-medium text-purple-600 group-open:hidden dark:text-purple-400">
          Show note
        </span>
        <span className="hidden text-xs font-medium text-purple-600 group-open:inline dark:text-purple-400">
          Hide note
        </span>
      </summary>
      <div className="border-t border-purple-200 px-4 py-3 text-sm leading-relaxed text-purple-950 dark:border-purple-900 dark:text-purple-100">
        {children}
      </div>
    </details>
  );
}
