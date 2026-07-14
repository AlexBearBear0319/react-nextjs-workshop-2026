import type { ReactNode } from "react";

export function LessonMeta({
  slides,
  duration,
  outcome,
}: {
  slides: string;
  duration: string;
  outcome: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
        <span className="rounded-full bg-[#9B191F]/10 px-2.5 py-1 text-[#9B191F] dark:bg-[#9B191F]/20 dark:text-red-300">
          Slide companion · {slides}
        </span>
        <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          {duration}
        </span>
      </div>
      <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">
          Your takeaway:
        </span>{" "}
        {outcome}
      </p>
    </div>
  );
}

export function ConceptGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-3 md:grid-cols-2">{children}</div>;
}

export function ConceptCard({
  eyebrow,
  title,
  children,
  tone = "neutral",
}: {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  tone?: "neutral" | "red" | "green" | "amber" | "blue";
}) {
  const tones = {
    neutral:
      "border-black/10 bg-white dark:border-white/10 dark:bg-zinc-900",
    red: "border-[#9B191F]/25 bg-[#9B191F]/5 dark:border-[#9B191F]/40 dark:bg-[#9B191F]/10",
    green:
      "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30",
    amber:
      "border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30",
    blue: "border-blue-300 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30",
  };

  return (
    <div className={`rounded-xl border p-4 ${tones[tone]}`}>
      {eyebrow && (
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#9B191F] dark:text-red-300">
          {eyebrow}
        </p>
      )}
      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h3>
      <div className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {children}
      </div>
    </div>
  );
}

export function HandsOnBanner({
  number,
  title,
  duration,
  children,
}: {
  number: number;
  title: string;
  duration: string;
  children?: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-[#9B191F] text-white dark:border-white/10">
      <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Hands-on #{String(number).padStart(2, "0")}
          </p>
          <h3 className="mt-1 text-2xl font-bold tracking-tight">{title}</h3>
          {children && <div className="mt-2 text-sm text-white/80">{children}</div>}
        </div>
        <span className="w-fit shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold">
          {duration}
        </span>
      </div>
    </div>
  );
}

export function DoneWhen({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-emerald-300 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white"
        aria-hidden="true"
      >
        ✓
      </span>
      <div className="text-sm leading-relaxed text-emerald-950 dark:text-emerald-100">
        <p className="font-semibold">Done when</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}

export function StepNumber({ children }: { children: ReactNode }) {
  return (
    <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#9B191F] text-xs font-bold text-white">
      {children}
    </span>
  );
}
