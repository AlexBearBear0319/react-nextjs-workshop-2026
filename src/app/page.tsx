/**
 * Landing Page (/)
 *
 * Welcome screen with prerequisites and a PDF slides download button.
 * This is the first page students see when they open the workshop site.
 */

import { WorkshopLayout } from "@/components/layout/WorkshopLayout";
import { ProTip } from "@/components/ui/ProTip";

export default function HomePage() {
  return (
    <WorkshopLayout>
      {/* Hero */}
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#9B191F]">
          React &amp; Next.js Workshop 2026
        </p>
        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Welcome to the Workshop Companion Hub
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          This is your step-by-step guide for the next two days. Follow along
          at your own pace — each section builds on the last. By the end, you
          will have built and deployed your own personal profile card website!
        </p>
      </div>

      {/* Prerequisites */}
      <div className="mb-10 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Before We Start — Prerequisites
        </h2>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          Make sure you have these installed on your laptop before Day 1 begins:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9B191F]/10 text-xs font-bold text-[#9B191F]">
              1
            </span>
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                Node.js (v18 or newer)
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Download from{" "}
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
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9B191F]/10 text-xs font-bold text-[#9B191F]">
              2
            </span>
            <div>
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

      {/* PDF Download */}
      <div className="mb-10 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Workshop Slides
        </h2>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          Download the PDF slides to follow along on a second screen or print
          them out for reference.
        </p>
        {/*
          ORGANIZER: Replace this Google Drive link with your actual slide URL.
          Example: href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
        */}
        <a
          href="https://drive.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#9B191F] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7d1419]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF Slides
        </a>
      </div>

      <ProTip title="How to use this site">
        Use the sidebar (or the menu button on mobile) to navigate between days
        and sections. Each section has code you can copy directly into VS Code.
        Look out for <strong>Pro Tips</strong> and <strong>Warnings</strong> —
        they answer the most common questions so you do not have to wait for a
        facilitator!
      </ProTip>

      {/* Quick start CTA */}
      <div className="rounded-xl border-2 border-dashed border-[#9B191F]/30 p-6 text-center">
        <p className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Ready to start?
        </p>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          Head to Day 1 in the sidebar to begin building your profile card.
        </p>
        <a
          href="/day-1"
          className="inline-flex items-center gap-2 rounded-lg bg-[#9B191F] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7d1419]"
        >
          Start Day 1
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </WorkshopLayout>
  );
}
