import Link from "next/link";
import { notFound } from "next/navigation";
import { TopicPager } from "@/components/workshop/TopicPager";
import {
  AutoDeployHandsOnSection,
  Day2SummarySection,
  GitSaveHandsOnSection,
  QuoteCardHandsOnSection,
  SkillsToggleHandsOnSection,
} from "@/components/workshop/Day2HandsOnSections";
import {
  AsyncFetchTheorySection,
  EventHandlersTheorySection,
  GitGitHubTheorySection,
  HooksTheorySection,
  RenderingTheorySection,
  UseEffectTheorySection,
  UseStateTheorySection,
  VercelTheorySection,
} from "@/components/workshop/Day2TheorySections";
import {
  DAY2_TOPICS,
  isValidTopic,
  topicHref,
} from "@/config/curriculum";
import type { ReactNode } from "react";

const DAY2_CONTENT: Record<string, ReactNode> = {
  "rendering-fundamentals": <RenderingTheorySection />,
  "react-hooks": <HooksTheorySection />,
  "use-state": <UseStateTheorySection />,
  "use-effect": <UseEffectTheorySection />,
  "async-fetch": <AsyncFetchTheorySection />,
  "event-handlers": <EventHandlersTheorySection />,
  "git-github": <GitGitHubTheorySection />,
  "vercel-deploy": <VercelTheorySection />,
  "hands-on-01": <SkillsToggleHandsOnSection />,
  "hands-on-02": <QuoteCardHandsOnSection />,
  "hands-on-03": <GitSaveHandsOnSection />,
  "hands-on-04": <AutoDeployHandsOnSection />,
  "day-2-summary": <Day2SummarySection />,
};

export function generateStaticParams() {
  return DAY2_TOPICS.map((t) => ({ topic: t.id }));
}

export default async function Day2TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;

  if (!isValidTopic(DAY2_TOPICS, topic) || !DAY2_CONTENT[topic]) {
    notFound();
  }

  const meta = DAY2_TOPICS.find((t) => t.id === topic)!;
  const index = DAY2_TOPICS.findIndex((t) => t.id === topic);
  const phase = topic.startsWith("hands-on-")
    ? "Hands-on practice"
    : topic === "day-2-summary"
      ? "Wrap-up"
      : "Teaching & theory";

  return (
    <>
      <h1 className="sr-only">Day 2 — {meta.label}</h1>
      <div className="mb-6">
        <div className="mb-1 flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#9B191F] dark:text-red-300">
          <span>
            Day 2 · Topic {index + 1} of {DAY2_TOPICS.length}
          </span>
          <span className="rounded-full bg-[#9B191F]/10 px-2 py-0.5 text-[10px] tracking-[0.14em] dark:bg-[#9B191F]/20 dark:text-red-300">
            {phase}
          </span>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          <Link
            href={topicHref("day-2", DAY2_TOPICS[0].id)}
            className="hover:underline"
          >
            Interactivity, data &amp; deployment
          </Link>
          <span className="mx-1.5">/</span>
          {meta.label}
        </p>
      </div>

      {index === 0 && (
        <div className="mb-8 grid gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/40 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
              Pick up where Day 1 ended
            </p>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-400">
              Open your <strong>my-profile-card</strong> project and run{" "}
              <code className="rounded bg-blue-100 px-1 font-mono text-xs dark:bg-blue-900">
                npm run dev
              </code>
              . Topics 1–8 are teaching and theory; topics 9–12 are separate
              hands-on exercises.
            </p>
          </div>
          <div className="flex gap-2 text-center text-xs font-semibold">
            <span className="rounded-lg bg-white/70 px-3 py-2 text-blue-800 dark:bg-blue-950 dark:text-blue-200">
              8 theory
            </span>
            <span className="rounded-lg bg-white/70 px-3 py-2 text-blue-800 dark:bg-blue-950 dark:text-blue-200">
              4 hands-on
            </span>
          </div>
        </div>
      )}

      {DAY2_CONTENT[topic]}

      <TopicPager day="day-2" topics={DAY2_TOPICS} topicId={topic} />
    </>
  );
}
