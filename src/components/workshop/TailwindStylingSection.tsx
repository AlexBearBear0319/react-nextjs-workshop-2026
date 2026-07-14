/**
 * Day 1 — Tailwind CSS Styling
 * Utility-first classes in JSX — no separate CSS files for beginners.
 */

import { TailwindCardPlayground } from "@/components/games/Day1LearningLabs";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { FacilitatorNote } from "@/components/ui/FacilitatorNote";
import { ProTip } from "@/components/ui/ProTip";
import { Section } from "@/components/ui/Section";
import { Warning } from "@/components/ui/Warning";
import { LessonMeta } from "@/components/workshop/LessonKit";

const CLASS_BREAKDOWN = [
  { cls: "bg-white", meaning: "background white" },
  { cls: "p-4", meaning: "padding of 4 units" },
  { cls: "rounded-xl", meaning: "very rounded corners" },
  { cls: "shadow-lg", meaning: "large drop shadow" },
] as const;

export function TailwindStylingSection() {
  return (
    <Section id="tailwind-styling" number={9} title="Tailwind CSS Styling">
      <LessonMeta
        slides="62–65"
        outcome="Read Tailwind utilities inside className, change them, and predict how the card will look."
      />

      <p className="text-sm font-semibold uppercase tracking-wider text-[#9B191F] dark:text-red-300">
        Making it look less ugly
      </p>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Styling at the speed of thought
      </h3>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Old way — flip between HTML and CSS files
          </p>
          <CodeBlock
            title="styles.css + JSX"
            code={`/* styles.css */
.card {
  background: white;
  padding: 16px;
  border-radius: 12px;
}

// JSX
<div className="card">...</div>`}
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Tailwind — utility-first, right in the class name
          </p>
          <CodeBlock
            title="One file. Read the classes."
            code={`<div className="bg-white p-4 rounded-xl shadow-lg">
  ...
</div>

// Read the class names.
// They say exactly what they do.`}
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Decode one line of Tailwind
      </h3>
      <CodeBlock
        title="className breakdown"
        code={`<div className="bg-white p-4 rounded-xl shadow-lg">
  ...
</div>`}
      />

      <div className="grid gap-2 sm:grid-cols-2">
        {CLASS_BREAKDOWN.map(({ cls, meaning }) => (
          <div
            key={cls}
            className="flex items-center gap-3 rounded-lg border border-black/10 bg-zinc-50 px-3 py-2.5 dark:border-white/10 dark:bg-zinc-900/60"
          >
            <code className="rounded bg-[#9B191F]/10 px-2 py-0.5 font-mono text-sm font-semibold text-[#9B191F] dark:text-red-300">
              {cls}
            </code>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              → {meaning}
            </span>
          </div>
        ))}
      </div>

      <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
        <li>Tailwind is designed to be readable.</li>
        <li>Classes read like English.</li>
        <li>
          When you forget a class, look it up in the{" "}
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#9B191F] underline hover:no-underline dark:text-red-300"
          >
            Tailwind documentation
          </a>
          .
        </li>
      </ul>

      {/* Cheatsheet resource */}
      <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
        <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
          Handy: Tailwind CSS CheatSheet
        </p>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          &quot;Never memorize something that you can look up.&quot; Scan
          spacing, typography, flex, borders — copy the class you need.
        </p>
        <a
          href="https://www.creative-tim.com/twcomponents/cheatsheet"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#9B191F] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Open the CheatSheet
          <span aria-hidden>↗</span>
        </a>
      </div>

      <div className="rounded-xl border border-blue-300 bg-blue-50 p-4 text-sm text-blue-950 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-100">
        <p className="font-semibold">Tailwind is written in className</p>
        <p className="mt-1">
          The utilities sit directly on the JSX element, so they can feel like
          “inline styling”. Technically, React&apos;s inline-style API is the{" "}
          <code>style={"{{ ... }}"}</code> prop; today we use Tailwind utilities
          inside <code>className</code> instead.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Try it: change the card utilities
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Change the background, rounding, padding, and shadow. Watch both the
        card and its generated <code>className</code> update immediately.
      </p>

      <TailwindCardPlayground />

      <FacilitatorNote title="Teaching cue: ask for a prediction">
        Change one control at a time. Before selecting it, ask students whether
        it will affect colour, spacing, corners, or depth. Then let them choose
        their own combination and explain one class to a helper.
      </FacilitatorNote>

      <Warning title="Styles not showing up later?">
        Save the file — <strong>Cmd+S</strong> / <strong>Ctrl+S</strong>. Your
        create-next-app project already includes Tailwind.
      </Warning>

      <ProTip title="Starter classes">
        Common ones: <code>text-xl</code>, <code>font-bold</code>,{" "}
        <code>bg-blue-500</code>, <code>rounded-lg</code>, <code>p-4</code>,{" "}
        <code>mt-2</code>. Mix and match — that is the whole game.
      </ProTip>

      <div className="rounded-xl border-2 border-dashed border-[#9B191F]/30 p-5 text-center">
        <p className="font-semibold text-zinc-900 dark:text-zinc-100">
          Theory done — time to build
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Next: Hands-on #00 → #04. Follow each step and use the Copy button on
          every code block.
        </p>
      </div>
    </Section>
  );
}
