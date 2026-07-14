/**
 * Landing Page (/)
 *
 * Welcome screen with Day 1 install prerequisites and Day 2 account setup.
 */

import Link from "next/link";
import { WorkshopLayout } from "@/components/layout/WorkshopLayout";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { DAY1_DATE, DAY2_DATE } from "@/config/workshopState";

export default function HomePage() {
  return (
    <WorkshopLayout>
      {/* Hero */}
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#9B191F]">
          React Workshop Series
        </p>
        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Welcome to the Workshop Companion Hub
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          This is your step-by-step guide for the workshop on{" "}
          <strong>{DAY1_DATE}</strong> and <strong>{DAY2_DATE}</strong>. Follow
          along at your own pace — each section builds on the last. By the end,
          you will have built and deployed your own personal profile card
          website!
        </p>
      </div>

      {/* Day 1 — tools to install */}
      <div className="mb-10 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Before Day 1 — Install on your laptop
        </h2>
        <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
          Make sure you have these installed before Day 1 ({DAY1_DATE}):
        </p>
        <ul className="space-y-8">
          <li className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9B191F]/10 text-xs font-bold text-[#9B191F]">
              1
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                Node.js (v20.9 or newer)
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Download the LTS build from{" "}
                <a
                  href="https://nodejs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9B191F] underline hover:no-underline"
                >
                  nodejs.org
                </a>
                . To check, open Terminal and type:{" "}
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                  node --version
                </code>
              </p>
              <VideoEmbed
                videoId="ENrzD9HAZK4"
                title="Node.js Ultimate Beginner's Guide in 7 Easy Steps — Fireship"
              />
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9B191F]/10 text-xs font-bold text-[#9B191F]">
              2
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                VS Code (Visual Studio Code)
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Download from{" "}
                <a
                  href="https://code.visualstudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9B191F] underline hover:no-underline"
                >
                  code.visualstudio.com
                </a>
                . This is the code editor we will use all workshop.
              </p>
              <VideoEmbed
                videoId="B-s71n0dHUk"
                title="Learn Visual Studio Code in 7min — Official Beginner Tutorial"
              />
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9B191F]/10 text-xs font-bold text-[#9B191F]">
              3
            </span>
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                A modern web browser (Chrome, Firefox, or Edge)
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                You will use this to preview your website as you build it.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Day 2 — accounts */}
      <div
        id="before-day-2"
        className="mb-10 scroll-mt-20 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900"
      >
        <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Before Day 2 — Create your accounts
        </h2>
        <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
          Make sure you have your <strong>own</strong> GitHub and Vercel
          accounts ready before Day 2 ({DAY2_DATE}). We will push your profile
          card to GitHub and deploy it on Vercel.
        </p>
        <ul className="space-y-8">
          <li className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9B191F]/10 text-xs font-bold text-[#9B191F]">
              1
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                Register a GitHub account
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Sign up at{" "}
                <a
                  href="https://github.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9B191F] underline hover:no-underline"
                >
                  github.com/signup
                </a>
                . Use an email you can access — you will need this account on
                Day 2.
              </p>
              <VideoEmbed
                videoId="RnWDKWmaQ8s"
                startSeconds={26}
                title="Create a GitHub account"
              />
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9B191F]/10 text-xs font-bold text-[#9B191F]">
              2
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                Create a Vercel account
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Sign up at{" "}
                <a
                  href="https://vercel.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9B191F] underline hover:no-underline"
                >
                  vercel.com/signup
                </a>
                . Use an email you can access — we will connect your accounts
                and deploy together on Day 2.
              </p>
              <VideoEmbed
                videoId="KW-NP7lolJk"
                title="Create a Vercel account"
              />
            </div>
          </li>
        </ul>
      </div>

      {/* Quick start CTA */}
      <div className="rounded-xl border-2 border-dashed border-[#9B191F]/30 p-6 text-center">
        <p className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Before Day 1 ({DAY1_DATE})
        </p>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          Install the Day 1 tools above, and set up GitHub + Vercel before Day 2
          ({DAY2_DATE}). Check the sidebar for lock status.
        </p>
        <Link
          href="/day-1"
          className="inline-flex items-center gap-2 rounded-lg bg-[#9B191F] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7d1419]"
        >
          Go to Day 1
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </WorkshopLayout>
  );
}
