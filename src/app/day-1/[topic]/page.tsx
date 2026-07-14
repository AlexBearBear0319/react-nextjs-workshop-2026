import Link from "next/link";
import { notFound } from "next/navigation";
import { TopicPager } from "@/components/workshop/TopicPager";
import { ComponentsSection } from "@/components/workshop/ComponentsSection";
import {
  Day1SummarySection,
  HandsOn00Section,
  HandsOn01Section,
  HandsOn02Section,
  HandsOn03Section,
  HandsOn04Section,
} from "@/components/workshop/Day1HandsOnSections";
import { FileStructureSection } from "@/components/workshop/FileStructureSection";
import { ProjectSetupSection } from "@/components/workshop/ProjectSetupSection";
import { PropsSection } from "@/components/workshop/PropsSection";
import { TailwindStylingSection } from "@/components/workshop/TailwindStylingSection";
import { WhatIsJsxSection } from "@/components/workshop/WhatIsJsxSection";
import {
  BuildHotReloadSection,
  IntroductionTheorySection,
  RoutingTheorySection,
} from "@/components/workshop/Day1TheorySections";
import {
  DAY1_TOPICS,
  isValidTopic,
  topicHref,
} from "@/config/curriculum";
import type { ReactNode } from "react";

const DAY1_CONTENT: Record<string, ReactNode> = {
  "why-react-nextjs": <IntroductionTheorySection />,
  "project-setup": <ProjectSetupSection />,
  "what-is-jsx": <WhatIsJsxSection />,
  "file-structure": <FileStructureSection />,
  "build-hot-reload": <BuildHotReloadSection />,
  routing: <RoutingTheorySection />,
  components: <ComponentsSection />,
  props: <PropsSection />,
  "tailwind-styling": <TailwindStylingSection />,
  "hands-on-00": <HandsOn00Section />,
  "hands-on-01": <HandsOn01Section />,
  "hands-on-02": <HandsOn02Section />,
  "hands-on-03": <HandsOn03Section />,
  "hands-on-04": <HandsOn04Section />,
  "day-1-summary": <Day1SummarySection />,
};

export function generateStaticParams() {
  return DAY1_TOPICS.map((t) => ({ topic: t.id }));
}

export default async function Day1TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;

  if (!isValidTopic(DAY1_TOPICS, topic) || !DAY1_CONTENT[topic]) {
    notFound();
  }

  const meta = DAY1_TOPICS.find((t) => t.id === topic)!;
  const index = DAY1_TOPICS.findIndex((t) => t.id === topic);
  const phase = meta.group ?? "Teaching & theory";

  return (
    <>
      <h1 className="sr-only">Day 1 — {meta.label}</h1>
      <div className="mb-6">
        <div className="mb-1 flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#9B191F] dark:text-red-300">
          <span>
            Day 1 · Topic {index + 1} of {DAY1_TOPICS.length}
          </span>
          <span className="rounded-full bg-[#9B191F]/10 px-2 py-0.5 text-[10px] tracking-[0.14em] dark:bg-[#9B191F]/20 dark:text-red-300">
            {phase}
          </span>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          <Link
            href={topicHref("day-1", DAY1_TOPICS[0].id)}
            className="hover:underline"
          >
            Foundations &amp; build
          </Link>
          <span className="mx-1.5">/</span>
          {meta.label}
        </p>
      </div>

      {index === 0 && (
        <div className="mb-8 grid gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/30 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-sm font-medium text-emerald-900 dark:text-emerald-200">
              Your Day 1 slide companion
            </p>
            <p className="mt-1 text-sm text-emerald-800 dark:text-emerald-300">
              Follow the topics in order, use the Copy buttons and checkpoints,
              and raise your hand when you need a helper. Your code is expected
              to grow one small step at a time.
            </p>
          </div>
          <div className="flex gap-2 text-center text-xs font-semibold">
            <span className="rounded-lg bg-white/80 px-3 py-2 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
              9 theory
            </span>
            <span className="rounded-lg bg-white/80 px-3 py-2 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
              5 hands-on
            </span>
          </div>
        </div>
      )}

      {DAY1_CONTENT[topic]}

      <TopicPager day="day-1" topics={DAY1_TOPICS} topicId={topic} />
    </>
  );
}
