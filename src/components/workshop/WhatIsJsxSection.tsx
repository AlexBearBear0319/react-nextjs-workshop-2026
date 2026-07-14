/**
 * Day 1 — What is JSX?
 * Placed right after Project Setup for absolute beginners.
 */

import { CodeBlock } from "@/components/ui/CodeBlock";
import { FacilitatorNote } from "@/components/ui/FacilitatorNote";
import { Section } from "@/components/ui/Section";
import { Warning } from "@/components/ui/Warning";
import { LessonMeta } from "@/components/workshop/LessonKit";

export function WhatIsJsxSection() {
  return (
    <Section id="what-is-jsx" number={3} title="What is JSX?">
      <LessonMeta
        slides="32–33"
        outcome="Recognise HTML-like JSX inside a JavaScript component and distinguish it from a separate HTML file."
      />
      <p className="text-sm font-semibold uppercase tracking-wider text-[#9B191F]">
        Core concept · after project setup
      </p>

      <p>
        You just created a Next.js project. When you open a file like{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
          page.js
        </code>
        , you will see something that looks like HTML inside JavaScript. That
        mix is called <strong>JSX</strong>.
      </p>

      <div className="rounded-xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-900">
        <h3 className="mb-3 text-lg font-bold text-[#9B191F]">What is JSX?</h3>
        <ul className="list-inside list-disc space-y-2 text-sm">
          <li>
            <strong>JSX</strong> stands for <strong>JavaScript XML</strong>.
          </li>
          <li>It lets us write HTML-like tags <strong>directly inside React</strong>.</li>
          <li>
            That makes building the page much easier — you see the UI shape in
            your code.
          </li>
        </ul>
      </div>

      <div className="rounded-xl border border-black/10 bg-[#9B191F]/5 p-5 dark:border-white/10 dark:bg-[#9B191F]/10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#9B191F]">
          Still not sure?
        </p>
        <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          JSX = HTML + JavaScript working together
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Think of it like this: HTML describes what the page looks like.
          JavaScript adds logic. JSX is how React lets you write both in one
          place.
        </p>
      </div>

      <p>Look at the difference:</p>

      <CodeBlock
        language="jsx"
        title="Normal HTML (in a .html file)"
        code={`<!-- Normal HTML -->
<h1>Hello World</h1>`}
      />

      <CodeBlock
        language="jsx"
        title="JSX (inside React)"
        code={`// JSX — HTML-looking tags inside a JavaScript function
function Greeting() {
  return <h1>Hello World</h1>;
}`}
      />

      <FacilitatorNote>
        Advice from us: you do <strong>not</strong> need to memorize the word
        &quot;XML&quot;. Just remember: <strong>JSX looks like HTML, but it
        lives inside your React / JavaScript files</strong> (like{" "}
        <code>.js</code> or <code>.jsx</code>).
      </FacilitatorNote>

      <Warning title="Common first-day confusion">
        If you open <code>src/app/page.js</code> and see{" "}
        <code>&lt;div&gt;</code> or <code>&lt;h1&gt;</code> tags, that is
        normal — that is JSX. You are not editing a separate{" "}
        <code>.html</code> file for this workshop.
      </Warning>

      <div className="rounded-xl border-2 border-dashed border-[#9B191F]/30 p-5 text-center">
        <p className="font-semibold text-zinc-900 dark:text-zinc-100">
          Checkpoint
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Open your project in VS Code, find{" "}
          <code className="rounded bg-zinc-100 px-1 font-mono text-xs dark:bg-zinc-800">
            src/app/page.js
          </code>
          , and point to one JSX tag (for example <code>&lt;main&gt;</code> or{" "}
          <code>&lt;h1&gt;</code>). Next we will map the full file structure.
        </p>
      </div>
    </Section>
  );
}
