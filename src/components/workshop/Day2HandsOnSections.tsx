/**
 * Day 2 hands-on pages — deliberately separate from teaching/theory pages.
 * Exercises follow slides 45–54 and continue the exact Day 1 JavaScript files.
 */

import { SkillsTogglePreview } from "@/components/games/Day2LearningLabs";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { ProTip } from "@/components/ui/ProTip";
import { Section } from "@/components/ui/Section";
import { Warning } from "@/components/ui/Warning";
import { Day2Checklist } from "@/components/workshop/Day2Checklist";
import {
  ConceptCard,
  DoneWhen,
  HandsOnBanner,
} from "@/components/workshop/Day2LessonKit";

const snippet = (...lines: string[]) => lines.join("\n");

export function SkillsToggleHandsOnSection() {
  return (
    <Section
      id="hands-on-01"
      number={9}
      title="Hands-on #01 — Show & Hide Skills"
    >
      <HandsOnBanner number={1} title="Build a Skills Toggle" duration="~10 min">
        Upgrade yesterday&apos;s ProfileCard with <code>useState</code>, an
        event handler, and conditional rendering.
      </HandsOnBanner>

      <div className="grid gap-3 sm:grid-cols-3">
        <ConceptCard eyebrow="Build time" title="30 minutes">
          Four focused challenges from the slides.
        </ConceptCard>
        <ConceptCard eyebrow="Buffer" title="15 minutes" tone="amber">
          Troubleshooting, facilitator help, and sharing.
        </ConceptCard>
        <ConceptCard eyebrow="Final outcome" title="A live interactive card" tone="green">
          Skills toggle, API quote, GitHub commit, Vercel URL.
        </ConceptCard>
      </div>

      <Day2Checklist
        label="Before you start"
        items={[
          "Open the same my-profile-card project from Day 1.",
          "Run npm run dev.",
          "Open http://localhost:3000/about.",
          "Keep the terminal visible so you can see errors.",
        ]}
      />

      <SkillsTogglePreview />

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">Exercise</h3>
      <ol className="list-inside list-decimal space-y-2 text-sm">
        <li>
          Open <code>src/components/ProfileCard.js</code>.
        </li>
        <li>
          Add <code>&quot;use client&quot;;</code> as the first line.
        </li>
        <li>
          Import <code>useState</code> and create <code>showSkills</code>.
        </li>
        <li>Add a button that toggles the state.</li>
        <li>Render the skills only when the state is true.</li>
      </ol>

      <CodeBlock
        title="src/components/ProfileCard.js"
        language="jsx"
        code={snippet(
          '"use client";',
          "",
          'import Image from "next/image";',
          'import { useState } from "react";',
          "",
          "export function ProfileCard({ name, title, desc, imageSrc }) {",
          "  const [showSkills, setShowSkills] = useState(false);",
          "",
          "  return (",
          '    <article className="rounded-xl bg-white p-6 text-gray-800 shadow-lg">',
          '      <div className="flex items-center gap-4">',
          "        <Image",
          "          src={imageSrc}",
          "          alt={name}",
          "          width={96}",
          "          height={96}",
          '          className="h-24 w-24 shrink-0 rounded-full object-cover ring-4 ring-blue-200"',
          "        />",
          "",
          "        <div>",
          '          <h2 className="text-xl font-semibold">{name}</h2>',
          '          <p className="text-gray-600">{title}</p>',
          '          <p className="mt-1 text-sm">{desc}</p>',
          "        </div>",
          "      </div>",
          "",
          "      <button",
          '        type="button"',
          "        onClick={() => setShowSkills((isOpen) => !isOpen)}",
          "        aria-expanded={showSkills}",
          '        aria-controls="profile-skills"',
          '        className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"',
          "      >",
          '        {showSkills ? "Hide Skills ▲" : "Show My Skills ▼"}',
          "      </button>",
          "",
          "      {showSkills && (",
          '        <div id="profile-skills" className="mt-4 flex flex-wrap gap-2">',
          '          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">React</span>',
          '          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">Next.js</span>',
          '          <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-800">Tailwind CSS</span>',
          "        </div>",
          "      )}",
          "    </article>",
          "  );",
          "}"
        )}
      />

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Read the important lines
      </h3>
      <ul className="space-y-3 text-sm">
        <li>
          <code>useState(false)</code> — the skills start closed.
        </li>
        <li>
          <code>setShowSkills((isOpen) =&gt; !isOpen)</code> — flip the previous
          value safely.
        </li>
        <li>
          <code>showSkills &amp;&amp; (...)</code> — render the badges only when
          the state is true.
        </li>
        <li>
          <code>aria-expanded</code> — tells assistive technology whether the
          controlled section is open.
        </li>
      </ul>

      <Warning title="Hook error or button does nothing?">
        Check that <code>&quot;use client&quot;;</code> is before every import,
        <code>useState</code> is imported from React, and the button receives a
        function in <code>onClick</code>.
      </Warning>

      <DoneWhen>
        The button opens and closes the skill badges, its label changes in both
        states, and the browser console has no red error.
      </DoneWhen>
    </Section>
  );
}

export function QuoteCardHandsOnSection() {
  return (
    <Section
      id="hands-on-02"
      number={10}
      title="Hands-on #02 — Fetch a Live Quote"
    >
      <HandsOnBanner number={2} title="Add a Random Quote Card" duration="~10 min">
        Create a separate Client Component with loading, success, and fallback
        states, then place it on the About page.
      </HandsOnBanner>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">Exercise — part A</h3>
      <ol className="list-inside list-decimal space-y-2 text-sm">
        <li>
          Create <code>src/components/QuoteCard.js</code>.
        </li>
        <li>Add the complete component below.</li>
        <li>Save the file and check the terminal for syntax errors.</li>
      </ol>

      <CodeBlock
        title="src/components/QuoteCard.js"
        language="jsx"
        code={snippet(
          '"use client";',
          "",
          'import { useEffect, useState } from "react";',
          "",
          "const FALLBACK_QUOTE = {",
          '  quote: "The expert in anything was once a beginner.",',
          '  author: "Helen Hayes",',
          "};",
          "",
          "export function QuoteCard() {",
          "  const [quote, setQuote] = useState(null);",
          '  const [status, setStatus] = useState("loading");',
          "",
          "  useEffect(() => {",
          "    let ignore = false;",
          "",
          "    async function fetchQuote() {",
          "      try {",
          '        const response = await fetch("https://dummyjson.com/quotes/random");',
          "",
          "        if (!response.ok) {",
          '          throw new Error("Quote request failed");',
          "        }",
          "",
          "        const data = await response.json();",
          "",
          "        if (!ignore) {",
          "          setQuote({ quote: data.quote, author: data.author });",
          '          setStatus("success");',
          "        }",
          "      } catch {",
          "        if (!ignore) {",
          "          setQuote(FALLBACK_QUOTE);",
          '          setStatus("fallback");',
          "        }",
          "      }",
          "    }",
          "",
          "    fetchQuote();",
          "",
          "    return () => {",
          "      ignore = true;",
          "    };",
          "  }, []);",
          "",
          '  if (status === "loading") {',
          '    return <p className="mt-4 text-gray-500">Loading your quote…</p>;',
          "  }",
          "",
          "  return (",
          '    <figure className="mt-4 rounded-xl border-l-4 border-blue-600 bg-white p-5 text-gray-800 shadow">',
          '      <blockquote className="italic">“{quote.quote}”</blockquote>',
          '      <figcaption className="mt-2 text-sm text-gray-500">',
          "        — {quote.author}",
          "      </figcaption>",
          '      {status === "fallback" && (',
          '        <p className="mt-3 text-xs text-amber-700">',
          "          Live quote unavailable—showing an offline fallback.",
          "        </p>",
          "      )}",
          "    </figure>",
          "  );",
          "}"
        )}
      />

      <ProTip title="Why this endpoint differs from the slide">
        The slide&apos;s Quotable endpoint is currently unreliable. DummyJSON
        provides a working no-auth random quote endpoint. Its text field is{" "}
        <code>data.quote</code>, not <code>data.content</code>.
      </ProTip>

      <ProTip title="This pattern is for Hook practice">
        We are fetching in <code>useEffect</code> so you can learn client loading,
        success, and failure states. In a normal App Router project, initial
        page data is often better fetched in an async Server Component.
      </ProTip>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">Exercise — part B</h3>
      <p className="text-sm">
        Import the new component into <code>src/app/about/page.js</code>. The
        About page can remain a Server Component; it is allowed to render a
        Client Component child.
      </p>
      <CodeBlock
        title="src/app/about/page.js"
        language="jsx"
        code={snippet(
          'import { ProfileCard } from "@/components/ProfileCard";',
          'import { QuoteCard } from "@/components/QuoteCard";',
          "",
          "export default function About() {",
          "  return (",
          '    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">',
          '      <div className="mx-auto max-w-md">',
          "        <ProfileCard",
          '          name="Alex"',
          '          title="Computer Science Student"',
          '          desc="Learning React and Next.js!"',
          '          imageSrc="/alex.png"',
          "        />",
          "        <QuoteCard />",
          "      </div>",
          "    </main>",
          "  );",
          "}"
        )}
      />

      <Warning title="Use your Day 1 details">
        Keep your own <code>name</code>, <code>title</code>, <code>desc</code>,
        and <code>imageSrc</code> values. Only add the QuoteCard import and
        component to your existing About page.
      </Warning>

      <DoneWhen>
        The About page first shows a loading message, then a quote and author.
        Refreshing requests another quote. If the network fails, the fallback is
        still readable.
      </DoneWhen>
    </Section>
  );
}

export function GitSaveHandsOnSection() {
  return (
    <Section
      id="hands-on-03"
      number={11}
      title="Hands-on #03 — Save Your Work"
    >
      <HandsOnBanner number={3} title="Commit and Push Properly" duration="~5 min">
        Turn the two features into a clear project snapshot and send it to
        GitHub.
      </HandsOnBanner>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">Exercise</h3>
      <ol className="space-y-3 text-sm">
        <li className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">
            1 · Inspect what changed
          </p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            Make sure the list contains only files you expected to edit.
          </p>
        </li>
        <li className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">
            2 · Stage and review
          </p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            Stage the work, then inspect the exact snapshot before committing.
          </p>
        </li>
        <li className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">
            3 · Commit and push
          </p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            Use a message that explains the value of this change.
          </p>
        </li>
      </ol>

      <CodeBlock
        title="Terminal"
        language="bash"
        code={snippet(
          "# Check what changed",
          "git status",
          "git diff",
          "",
          "# Stage all project changes and review the snapshot",
          "git add .",
          "git diff --staged",
          "",
          "# Commit with a meaningful message, then push",
          'git commit -m "add skills toggle and random quote"',
          "git push"
        )}
      />

      <Warning title="Never commit secrets">
        Before <code>git add .</code>, stop if you see a file containing an API
        key, password, or private token. This quote API needs no key. Real secret
        values belong in <code>.env.local</code>, which should stay out of Git.
      </Warning>

      <ProTip title="Push has no upstream branch?">
        On a first push, run <code>git push -u origin main</code>. After that,
        plain <code>git push</code> is enough.
      </ProTip>

      <DoneWhen>
        Refresh the GitHub repository. The latest commit message is visible and
        the changed files contain your skills toggle and QuoteCard.
      </DoneWhen>
    </Section>
  );
}

export function AutoDeployHandsOnSection() {
  const checks = [
    "The home page loads.",
    "The /about route loads.",
    "Show My Skills opens and closes the badges.",
    "The quote changes after a refresh.",
    "The card is usable on a narrow phone-sized window.",
  ];

  return (
    <Section
      id="hands-on-04"
      number={12}
      title="Hands-on #04 — Watch It Go Live"
    >
      <HandsOnBanner number={4} title="Verify the Automatic Deployment" duration="~5 min">
        Watch the GitHub push become a live Vercel build, test it, then share
        your real URL.
      </HandsOnBanner>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">Exercise</h3>
      <ol className="space-y-3 text-sm">
        <li className="flex gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#9B191F] text-xs font-bold text-white">
            1
          </span>
          <span className="pt-1">
            Open{" "}
            <a
              href="https://vercel.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#9B191F] dark:text-red-300 underline hover:no-underline"
            >
              vercel.com/dashboard
            </a>{" "}
            and choose your project.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#9B191F] text-xs font-bold text-white">
            2
          </span>
          <span className="pt-1">
            Open Deployments and find the build for your newest commit.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#9B191F] text-xs font-bold text-white">
            3
          </span>
          <span className="pt-1">
            Wait for <strong>Ready</strong>. It often takes under a minute, but
            use the status rather than the clock.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#9B191F] text-xs font-bold text-white">
            4
          </span>
          <span className="pt-1">
            Choose Visit, then test the production site—not localhost.
          </span>
        </li>
      </ol>

      <Day2Checklist label="Production acceptance check" items={checks} />

      <Warning title="Deployment failed?">
        Open the failed deployment and read the first useful build error. Run{" "}
        <code>npm run build</code> locally, fix the same error, commit, and push
        again. Vercel will automatically start another deployment.
      </Warning>

      <ProTip title="Still seeing the old version?">
        Confirm the newest deployment says Ready and that you opened its
        production URL. Then hard-refresh the page. Also check that your commit
        reached the production branch, normally <code>main</code>.
      </ProTip>

      <DoneWhen>
        Your public URL shows the skills toggle and live quote. Copy that URL
        and share it in the workshop Telegram group.
      </DoneWhen>
    </Section>
  );
}

export function Day2SummarySection() {
  return (
    <Section id="day-2-summary" number={13} title="Day 2 Complete — You Shipped">
      <div className="rounded-xl border border-black/10 bg-[#9B191F] p-6 text-center text-white dark:border-white/10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          Workshop complete
        </p>
        <h3 className="mt-2 text-3xl font-bold tracking-tight">
          Your profile is live.
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-white/80">
          You moved from static JSX to state, effects, real network data,
          version control, and an automatic production deployment.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        The complete mental model
      </h3>
      <ol className="space-y-3 text-sm">
        <li>
          <strong>Render:</strong> keep components on the server by default;
          create a client boundary for state, effects, events, or browser APIs.
        </li>
        <li>
          <strong>Interact:</strong> an event handler calls a state setter, and
          React renders the next snapshot.
        </li>
        <li>
          <strong>Synchronize:</strong> an Effect connects the component to an
          external system with explicit dependencies and cleanup.
        </li>
        <li>
          <strong>Ship:</strong> commit a meaningful change, push to GitHub, and
          let Vercel build and publish it.
        </li>
      </ol>

      <div className="grid gap-3 sm:grid-cols-2">
        <ConceptCard eyebrow="Your code" title="GitHub repository" tone="blue">
          A history you can continue improving and show to others.
        </ConceptCard>
        <ConceptCard eyebrow="Your product" title="Vercel URL" tone="green">
          A real website that anyone with the link can open.
        </ConceptCard>
      </div>

      <Day2Checklist
        label="Before you leave"
        items={[
          "Bookmark your GitHub repository.",
          "Save your production URL somewhere easy to find.",
          "Share the URL in Telegram.",
          "Choose one small improvement to make after the workshop.",
        ]}
      />

      <ProTip title="The habit that matters">
        Build a small change, test it, commit it clearly, and ship it. Repeating
        that loop is how a workshop project becomes a portfolio project.
      </ProTip>
    </Section>
  );
}
