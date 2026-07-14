/**
 * Day 2 teaching/theory pages.
 * These follow slides 1–44 and are intentionally separate from hands-on work.
 */

import {
  AsyncAwaitFlow,
  EffectDependencyLab,
  EventHandlerPlayground,
  RenderingBoundaryLab,
} from "@/components/games/Day2LearningLabs";
import { StateVisualizer } from "@/components/games/StateVisualizer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { ProTip } from "@/components/ui/ProTip";
import { Section } from "@/components/ui/Section";
import { Warning } from "@/components/ui/Warning";
import {
  ConceptCard,
  ConceptGrid,
  LessonMeta,
} from "@/components/workshop/Day2LessonKit";

const snippet = (...lines: string[]) => lines.join("\n");

export function RenderingTheorySection() {
  return (
    <Section
      id="rendering-fundamentals"
      number={1}
      title="Rendering — Server and Client"
    >
      <LessonMeta
        slides="1–8"
        duration="~12 minutes"
        outcome={
          <>
            Decide where a component belongs and know what{" "}
            <code>&quot;use client&quot;</code> actually changes.
          </>
        }
      />

      <p>
        Before adding interactivity, ask one question:{" "}
        <strong>who prepares the page—the server or the browser?</strong> The
        slides use a meal analogy to compare two classic approaches.
      </p>

      <ConceptGrid>
        <ConceptCard
          eyebrow="Classic CSR"
          title="The browser cooks the meal"
          tone="blue"
        >
          The server sends an HTML shell plus JavaScript. The browser runs that
          JavaScript and builds the interface. This feels app-like, but gives
          the device more work.
        </ConceptCard>
        <ConceptCard
          eyebrow="Classic SSR"
          title="The server serves the meal"
          tone="green"
        >
          The server prepares HTML for the requested URL. The browser receives
          useful content it can display immediately.
        </ConceptCard>
      </ConceptGrid>

      <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          Decode the comparison on slides 4–5
        </h3>
        <dl className="mt-3 divide-y divide-black/10 text-sm dark:divide-white/10">
          <div className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr]">
            <dt className="font-semibold">Initial display</dt>
            <dd className="text-zinc-600 dark:text-zinc-400">
              Classic CSR may wait for JavaScript before useful content appears;
              SSR sends useful HTML first. Real performance still depends on the
              amount of work, data, and network speed.
            </dd>
          </div>
          <div className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr]">
            <dt className="font-semibold">SEO</dt>
            <dd className="text-zinc-600 dark:text-zinc-400">
              Search engines can process JavaScript, but important content in
              the initial HTML is easier and more reliable to discover.
            </dd>
          </div>
          <div className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr]">
            <dt className="font-semibold">JavaScript sent</dt>
            <dd className="text-zinc-600 dark:text-zinc-400">
              A traditional client-rendered app usually sends more. Server
              Components help Next.js keep non-interactive code out of the
              browser bundle.
            </dd>
          </div>
          <div className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr]">
            <dt className="font-semibold">Interactivity</dt>
            <dd className="text-zinc-600 dark:text-zinc-400">
              Server-rendered HTML is not permanently “limited.” Client
              Components can hydrate it and add rich interaction.
            </dd>
          </div>
          <div className="grid gap-1 pt-3 sm:grid-cols-[9rem_1fr]">
            <dt className="font-semibold">Data fetching</dt>
            <dd className="text-zinc-600 dark:text-zinc-400">
              Data can be fetched on either side. Choose based on secrets,
              interactivity, freshness, and how much client JavaScript is useful.
            </dd>
          </div>
        </dl>
      </div>

      <Warning title="Important Next.js 16 translation">
        In the App Router, <strong>Client Component does not mean CSR</strong>.
        Next.js can still generate its initial HTML on the server and then
        hydrate it in the browser. <code>&quot;use client&quot;</code> marks a{" "}
        <strong>client JavaScript boundary</strong> for state, effects, events,
        and browser APIs.
      </Warning>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        The decision you make in this workshop
      </h3>
      <div
        className="overflow-x-auto rounded-xl border border-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B191F] dark:border-white/10"
        role="region"
        aria-label="Server and Client Component comparison"
        tabIndex={0}
      >
        <table className="w-full min-w-[620px] border-collapse text-left text-sm">
          <caption className="sr-only">
            Comparison of Server Components and Client Components in Next.js
          </caption>
          <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Question</th>
              <th className="px-4 py-3 font-semibold">Server Component</th>
              <th className="px-4 py-3 font-semibold">Client Component</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/10 bg-white dark:divide-white/10 dark:bg-zinc-900">
            <tr>
              <th scope="row" className="px-4 py-3 font-medium">Default in App Router?</th>
              <td className="px-4 py-3 text-emerald-700 dark:text-emerald-300">
                Yes
              </td>
              <td className="px-4 py-3">No—declare a boundary</td>
            </tr>
            <tr>
              <th scope="row" className="px-4 py-3 font-medium">Browser JavaScript?</th>
              <td className="px-4 py-3">None for that component</td>
              <td className="px-4 py-3">Included for interaction</td>
            </tr>
            <tr>
              <th scope="row" className="px-4 py-3 font-medium">
                State, events, or effects?
              </th>
              <td className="px-4 py-3">No</td>
              <td className="px-4 py-3 text-emerald-700 dark:text-emerald-300">
                Yes
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-4 py-3 font-medium">Best fit</th>
              <td className="px-4 py-3">Static content, server data</td>
              <td className="px-4 py-3">Buttons, inputs, browser APIs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        Server Component — the default
      </p>
      <CodeBlock
        title="src/components/ProfileIntro.js"
        language="jsx"
        code={snippet(
          "export function ProfileIntro({ name, desc }) {",
          "  return (",
          "    <section>",
          "      <h2>{name}</h2>",
          "      <p>{desc}</p>",
          "    </section>",
          "  );",
          "}"
        )}
      />

      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        Client Component — an interactive leaf
      </p>
      <CodeBlock
        title="src/components/LikeButton.js"
        language="jsx"
        code={snippet(
          '"use client";',
          "",
          'import { useState } from "react";',
          "",
          "export function LikeButton() {",
          "  const [likes, setLikes] = useState(0);",
          "",
          "  return (",
          "    <button onClick={() => setLikes((current) => current + 1)}>",
          "      ❤️ {likes} likes",
          "    </button>",
          "  );",
          "}"
        )}
      />

      <RenderingBoundaryLab />

      <ProTip title="Which is better? Both.">
        Keep static content on the server, then add small interactive Client
        Components where users need them. One page can compose both kinds.
      </ProTip>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Reference:{" "}
        <a
          href="https://nextjs.org/docs/app/getting-started/server-and-client-components"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#9B191F] dark:text-red-300 underline hover:no-underline"
        >
          Next.js — Server and Client Components
        </a>
      </p>
    </Section>
  );
}

export function HooksTheorySection() {
  return (
    <Section id="react-hooks" number={2} title="React Hooks — The Big Two">
      <LessonMeta
        slides="9–14"
        duration="~8 minutes"
        outcome={
          <>
            Explain what a Hook does and follow the Rules of Hooks before
            writing <code>useState</code> or <code>useEffect</code>.
          </>
        }
      />

      <p>
        A <strong>Hook</strong> is a React function that lets a component use a
        React feature. Hook names begin with <code>use</code>. Today&apos;s two
        are the most important starting points.
      </p>

      <ConceptGrid>
        <ConceptCard
          eyebrow="Memory"
          title={<code>useState</code>}
          tone="red"
        >
          Stores a value between renders. Updating it tells React to render the
          component again with the new value.
        </ConceptCard>
        <ConceptCard
          eyebrow="Synchronization"
          title={<code>useEffect</code>}
          tone="amber"
        >
          Synchronizes with something outside React after rendering: a request,
          timer, browser API, or subscription.
        </ConceptCard>
      </ConceptGrid>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        The Rules of Hooks
      </h3>
      <div className="grid gap-3 sm:grid-cols-2">
        <ConceptCard eyebrow="Rule 1" title="Call Hooks at the top level">
          Never put a Hook inside an <code>if</code>, loop, nested function, or
          after an early return. React relies on the same call order.
        </ConceptCard>
        <ConceptCard eyebrow="Rule 2" title="Call Hooks from React code">
          Use them inside a function component or your own custom Hook—not a
          regular utility function.
        </ConceptCard>
      </div>

      <CodeBlock
        title="RulesOfHooks.js"
        language="jsx"
        copyable={false}
        code={snippet(
          "function ProfileCard({ signedIn }) {",
          "  // ✅ Always called in the same order, at the top level",
          "  const [likes, setLikes] = useState(0);",
          "",
          "  if (!signedIn) return <p>Please sign in</p>;",
          "",
          "  // ❌ Too late: skipped whenever signedIn is false",
          "  // const [open, setOpen] = useState(false);",
          "",
          "  return <button>{likes}</button>;",
          "}"
        )}
      />

      <Warning title="When does a component need “use client”?">
        Today&apos;s Hooks—<code>useState</code> and <code>useEffect</code>—need
        a Client Component. Put <code>&quot;use client&quot;;</code> before
        imports in the file that creates that boundary. Remember the capability,
        not the inaccurate idea that every Hook in existence is client-only.
      </Warning>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Reference:{" "}
        <a
          href="https://react.dev/reference/react/hooks"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#9B191F] dark:text-red-300 underline hover:no-underline"
        >
          React Hooks reference
        </a>
      </p>
    </Section>
  );
}

export function UseStateTheorySection() {
  return (
    <Section id="use-state" number={3} title="useState — Component Memory">
      <LessonMeta
        slides="15–18"
        duration="~12 minutes"
        outcome={
          <>
            Read a state pair, update it from an event, and explain why the UI
            renders again.
          </>
        }
      />

      <p>
        A normal variable can change, but React is not watching it. State gives
        React both the value to remember and a setter that schedules another
        render.
      </p>

      <CodeBlock
        title="Ordinary variable vs state"
        language="jsx"
        copyable={false}
        code={snippet(
          "// Changing this does not tell React to update the screen.",
          "let count = 0;",
          "count = count + 1;",
          "",
          "// React remembers this value between renders.",
          "const [count, setCount] = useState(0);"
        )}
      />

      <div className="grid gap-3 md:grid-cols-3">
        <ConceptCard eyebrow="Current value" title={<code>count</code>}>
          The value used by this render.
        </ConceptCard>
        <ConceptCard eyebrow="Update function" title={<code>setCount</code>}>
          Requests a new value and another render.
        </ConceptCard>
        <ConceptCard eyebrow="Initial value" title={<code>useState(0)</code>}>
          Used when the component mounts for the first time.
        </ConceptCard>
      </div>

      <CodeBlock
        title="src/components/LikeButton.js"
        language="jsx"
        code={snippet(
          '"use client";',
          "",
          'import { useState } from "react";',
          "",
          "export function LikeButton() {",
          "  const [likes, setLikes] = useState(0);",
          "",
          "  function handleLike() {",
          "    setLikes((currentLikes) => currentLikes + 1);",
          "  }",
          "",
          "  return (",
          "    <div>",
          "      <p>❤️ {likes} likes</p>",
          "      <button onClick={handleLike}>Like</button>",
          "    </div>",
          "  );",
          "}"
        )}
      />

      <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Follow one click
        </p>
        <ol className="mt-3 grid gap-3 text-sm sm:grid-cols-3">
          <li className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/70">
            <strong className="text-[#9B191F] dark:text-red-300">1.</strong> The browser fires{" "}
            <code>onClick</code>.
          </li>
          <li className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/70">
            <strong className="text-[#9B191F] dark:text-red-300">2.</strong>{" "}
            <code>setLikes</code> requests the next value.
          </li>
          <li className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/70">
            <strong className="text-[#9B191F] dark:text-red-300">3.</strong> React renders again
            and shows it.
          </li>
        </ol>
      </div>

      <StateVisualizer />

      <ProTip title="Prefer a functional update">
        When the next value depends on the previous one, write{" "}
        <code>setLikes((current) =&gt; current + 1)</code>. It stays correct when
        React groups updates together.
      </ProTip>

      <Warning title="State is a snapshot">
        Calling the setter does not rewrite the variable inside the event that is
        already running. React applies the value to a future render.
      </Warning>
    </Section>
  );
}

export function UseEffectTheorySection() {
  return (
    <Section
      id="use-effect"
      number={4}
      title="useEffect — Synchronize After Render"
    >
      <LessonMeta
        slides="19–24"
        duration="~15 minutes"
        outcome={
          <>
            Choose the right dependency array and avoid accidental repeat work
            or loops.
          </>
        }
      />

      <p>
        An Effect runs <strong>after React commits a render</strong>. Use it to
        synchronize with something outside React—not to calculate ordinary JSX
        values that can be calculated while rendering.
      </p>

      <CodeBlock
        title="Effect anatomy"
        language="jsx"
        copyable={false}
        code={snippet(
          "useEffect(() => {",
          "  // Synchronize with an external system here.",
          "",
          "  return () => {",
          "    // Optional cleanup: undo a timer, request, or subscription.",
          "  };",
          "}, [dependency]);"
        )}
      />

      <div className="grid gap-3 md:grid-cols-3">
        <ConceptCard
          eyebrow="No array"
          title="After every commit"
          tone="amber"
        >
          <code>useEffect(() =&gt; {"{ ... }"})</code>
          <p className="mt-2">Useful rarely. Repeats after every render.</p>
        </ConceptCard>
        <ConceptCard
          eyebrow="Empty array"
          title="When mounted"
          tone="green"
        >
          <code>useEffect(() =&gt; {"{ ... }"}, [])</code>
          <p className="mt-2">Common for starting one synchronization.</p>
        </ConceptCard>
        <ConceptCard
          eyebrow="Values listed"
          title="Mount + value changes"
          tone="blue"
        >
          <code>useEffect(() =&gt; {"{ ... }"}, [likes])</code>
          <p className="mt-2">
            Re-synchronizes whenever <code>likes</code> changes.
          </p>
        </ConceptCard>
      </div>

      <EffectDependencyLab />

      <Warning title="No array is not automatically an infinite loop">
        It becomes a loop when the Effect changes state on every run, causing
        another render, which runs the Effect again. Ask:{" "}
        <em>what external system am I synchronizing with?</em>
      </Warning>

      <ProTip title="Why did it run twice in development?">
        React Strict Mode may perform an extra setup → cleanup → setup cycle in
        development to expose missing cleanup. Production does not do that
        extra development check.
      </ProTip>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Reference:{" "}
        <a
          href="https://react.dev/learn/synchronizing-with-effects"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#9B191F] dark:text-red-300 underline hover:no-underline"
        >
          React — Synchronizing with Effects
        </a>
      </p>
    </Section>
  );
}

export function AsyncFetchTheorySection() {
  return (
    <Section
      id="async-fetch"
      number={5}
      title="Async JavaScript — Fetch, Await, Display"
    >
      <LessonMeta
        slides="25–29"
        duration="~15 minutes"
        outcome={
          <>
            Follow a request from <code>fetch()</code> to JSON to loading,
            success, or error UI.
          </>
        }
      />

      <p>
        Network work takes time. JavaScript starts the request, keeps the page
        responsive, and continues the async function when the result arrives.
        Think of ordering food:
      </p>

      <div className="grid gap-3 md:grid-cols-3">
        <ConceptCard
          eyebrow="1 · Place order"
          title={<code>fetch(url)</code>}
          tone="red"
        >
          Starts a request and gives you a Promise for the response.
        </ConceptCard>
        <ConceptCard
          eyebrow="2 · Do other things"
          title="The page stays responsive"
          tone="blue"
        >
          JavaScript does not freeze the whole interface while waiting.
        </ConceptCard>
        <ConceptCard
          eyebrow="3 · Food arrives"
          title={<code>await</code>}
          tone="green"
        >
          Pauses this async function until the Promise settles, then continues.
        </ConceptCard>
      </div>

      <AsyncAwaitFlow />

      <CodeBlock
        title="Fetch → check → parse"
        language="javascript"
        code={snippet(
          "async function getQuote() {",
          '  const response = await fetch("https://dummyjson.com/quotes/random");',
          "",
          "  if (!response.ok) {",
          '    throw new Error("Quote request failed");',
          "  }",
          "",
          "  const data = await response.json();",
          "  console.log(data.quote, data.author);",
          "}"
        )}
      />

      <div className="rounded-xl border border-black/10 bg-zinc-950 p-4 text-zinc-100">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
          Response shape
        </p>
        <pre className="mt-2 overflow-x-auto font-mono text-sm text-emerald-300">
          <code>
            {snippet(
              "{",
              '  "id": 62,',
              '  "quote": "If you want to lift yourself up...",',
              '  "author": "Booker T. Washington"',
              "}"
            )}
          </code>
        </pre>
      </div>

      <Warning title="Workshop API update">
        The slide&apos;s <code>api.quotable.io</code> endpoint is currently
        unreliable. The exercise uses{" "}
        <code>https://dummyjson.com/quotes/random</code> and its{" "}
        <code>quote</code> / <code>author</code> fields so your workshop does
        not depend on a known failing service.
      </Warning>

      <ProTip title="Why fetch in useEffect today?">
        This exercise deliberately practices client-side synchronization,
        loading state, and error handling. For ordinary initial data in a real
        Next.js App Router page, prefer fetching in an async Server Component or
        using the framework&apos;s recommended data tools. Use an Effect when the
        client truly needs to synchronize with an external system.
      </ProTip>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Every request needs visible states
      </h3>
      <ConceptGrid>
        <ConceptCard eyebrow="Waiting" title="Loading">
          Tell the user the request started. Do not leave an unexplained blank.
        </ConceptCard>
        <ConceptCard eyebrow="Arrived" title="Success" tone="green">
          Render the quote and author from the response.
        </ConceptCard>
        <ConceptCard eyebrow="Could not arrive" title="Error" tone="amber">
          Show a friendly fallback and keep the rest of the page usable.
        </ConceptCard>
        <ConceptCard eyebrow="Optional" title="Retry" tone="blue">
          Let the user request again instead of forcing a refresh.
        </ConceptCard>
      </ConceptGrid>

      <ProTip title="Keep async work inside the Effect">
        The Effect callback itself should not be <code>async</code>. Define an
        async function inside it, then call that function. You will use this
        pattern in Hands-on #02.
      </ProTip>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        API reference:{" "}
        <a
          href="https://dummyjson.com/docs/quotes"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#9B191F] dark:text-red-300 underline hover:no-underline"
        >
          DummyJSON Quotes
        </a>
      </p>
    </Section>
  );
}

const eventRows = [
  ["onClick", "User clicks", "Buttons, icons"],
  ["onChange", "Input value changes", "Inputs, selects"],
  ["onSubmit", "Form is submitted", "Forms"],
  ["onInput", "User types", "Live input"],
  ["onFocus", "Element gets focus", "Input guidance"],
  ["onBlur", "Element loses focus", "Validation"],
  ["onKeyDown", "Key is pressed", "Keyboard shortcuts"],
  ["onKeyUp", "Key is released", "Typing feedback"],
  ["onMouseEnter", "Pointer enters", "Hover preview"],
  ["onMouseLeave", "Pointer leaves", "End hover preview"],
  ["onMouseMove", "Pointer moves", "Drag or drawing"],
  ["onDoubleClick", "Double click", "Special action"],
  ["onScroll", "User scrolls", "Scroll progress"],
  ["onLoad", "Resource loaded", "Images"],
  ["onError", "Resource failed", "Fallback UI"],
  ["onContextMenu", "Right click", "Custom menu"],
] as const;

export function EventHandlersTheorySection() {
  return (
    <Section
      id="event-handlers"
      number={6}
      title="Event Handlers — Respond to People"
    >
      <LessonMeta
        slides="30–31"
        duration="~8 minutes + break"
        outcome={
          <>
            Connect a browser event to a function without accidentally calling
            it during render.
          </>
        }
      />

      <p>
        An <strong>event handler</strong> is a function React runs after an
        action such as a click, key press, form submission, or input change. It
        bridges <em>user action</em> to <em>state update</em>.
      </p>

      <CodeBlock
        title="Passing an event handler"
        language="jsx"
        copyable={false}
        code={snippet(
          "function handleClick() {",
          "  setShowSkills((isOpen) => !isOpen);",
          "}",
          "",
          "// ✅ Pass it. React calls it after the click.",
          "<button onClick={handleClick}>Toggle skills</button>",
          "",
          "// ❌ Calls it immediately while rendering.",
          "<button onClick={handleClick()}>Toggle skills</button>"
        )}
      />

      <EventHandlerPlayground />

      <ProTip title="React event names use camelCase">
        Write <code>onClick</code>, not HTML&apos;s lowercase{" "}
        <code>onclick</code>. Pass a function between the braces.
      </ProTip>

      <div
        className="overflow-x-auto rounded-xl border border-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B191F] dark:border-white/10"
        role="region"
        aria-label="React event handler reference"
        tabIndex={0}
      >
        <table className="w-full min-w-[620px] border-collapse text-left text-sm">
          <caption className="sr-only">
            Common React event handlers, when they fire, and typical uses
          </caption>
          <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Event</th>
              <th className="px-4 py-3 font-semibold">When it fires</th>
              <th className="px-4 py-3 font-semibold">Common use</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/10 bg-white dark:divide-white/10 dark:bg-zinc-900">
            {eventRows.map(([event, fires, use]) => (
              <tr key={event}>
                <th scope="row" className="px-4 py-2.5 font-normal">
                  <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
                    {event}
                  </code>
                </th>
                <td className="px-4 py-2.5">{fires}</td>
                <td className="px-4 py-2.5 text-zinc-500 dark:text-zinc-400">
                  {use}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-blue-300 bg-blue-50 p-5 text-center dark:border-blue-800 dark:bg-blue-950/30">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
          Slide 32 · Checkpoint
        </p>
        <p className="mt-1 text-xl font-bold text-zinc-900 dark:text-zinc-100">
          Take a 15-minute break
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          When you return: Git, GitHub, and your first live deployment.
        </p>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Reference:{" "}
        <a
          href="https://react.dev/learn/responding-to-events"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#9B191F] dark:text-red-300 underline hover:no-underline"
        >
          React — Responding to Events
        </a>
      </p>
    </Section>
  );
}

export function GitGitHubTheorySection() {
  return (
    <Section
      id="git-github"
      number={7}
      title="Git & GitHub — Save and Share"
    >
      <LessonMeta
        slides="33–36"
        duration="~15 minutes"
        outcome={
          <>
            Make a meaningful commit, connect a GitHub repository, and push the
            project safely.
          </>
        }
      />

      <ConceptGrid>
        <ConceptCard eyebrow="On your computer" title="Git" tone="red">
          Records snapshots of the project so you can understand what changed
          and return to earlier work.
        </ConceptCard>
        <ConceptCard eyebrow="On the internet" title="GitHub" tone="blue">
          Hosts the Git repository online so you can back it up, share it, and
          connect it to deployment tools.
        </ConceptCard>
      </ConceptGrid>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        1 · Verify Git and your identity
      </h3>
      <CodeBlock
        title="Terminal"
        language="bash"
        code={snippet(
          "git --version",
          "git config --global user.name",
          "git config --global user.email"
        )}
      />
      <Warning title="“git” is not recognized or command not found">
        Install Git from{" "}
        <a
          href="https://git-scm.com/downloads"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:no-underline"
        >
          git-scm.com/downloads
        </a>
        , then fully close and reopen VS Code. Ask a facilitator before moving
        on—the remaining deployment steps depend on Git.
      </Warning>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        If either identity value is blank, set it once:
      </p>
      <CodeBlock
        title="Terminal — only if needed"
        language="bash"
        code={snippet(
          'git config --global user.name "Your Name"',
          'git config --global user.email "your@email.com"'
        )}
      />

      <ProTip title="What the email affects">
        Use an email connected to GitHub—or your GitHub <code>noreply</code>{" "}
        address—if you want commits attributed to your profile. It is not what
        authenticates a push.
      </ProTip>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        2 · Check what Day 1 already set up
      </h3>
      <p className="text-sm">
        Open a terminal in your <code>my-profile-card</code> project. Do not run
        <code>cd</code> again if the VS Code terminal is already inside that
        folder.
      </p>
      <CodeBlock
        title="Terminal — safe status checks"
        language="bash"
        code={snippet(
          "git status",
          "git remote -v",
          "git log -1 --oneline"
        )}
      />

      <ProTip title="Already completed the Day 1 homework?">
        If <code>git status</code> works and <code>git remote -v</code> shows a
        GitHub URL named <code>origin</code>, your setup is complete. Do not run
        <code>git init</code> or <code>git remote add</code> again. Continue at
        “Your daily Git habit” below.
      </ProTip>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        3 · Only if this is not a Git repository
      </h3>
      <CodeBlock
        title="Terminal — use only when git status says “not a git repository”"
        language="bash"
        code={snippet(
          "git init",
          "git add .",
          'git commit -m "build my profile card"'
        )}
      />

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        4 · Only if no GitHub remote exists
      </h3>
      <ol className="list-inside list-decimal space-y-2 text-sm">
        <li>
          Open{" "}
          <a
            href="https://github.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#9B191F] dark:text-red-300 underline hover:no-underline"
          >
            github.com/new
          </a>
          .
        </li>
        <li>Name it <code>my-profile-card</code>.</li>
        <li>
          Public is easiest to share, but it is not required for a personal
          Vercel project.
        </li>
        <li>
          Do not add a README, <code>.gitignore</code>, or licence—the local
          project already has files.
        </li>
        <li>Create it, then copy the HTTPS repository URL.</li>
      </ol>
      <CodeBlock
        title="Terminal — only when git remote -v is empty"
        language="bash"
        code={snippet(
          "git remote add origin YOUR_REPO_URL",
          "git branch -M main",
          "git remote -v",
          "git push -u origin main"
        )}
      />

      <Warning title="“remote origin already exists”">
        Do not add it twice. Check <code>git remote -v</code>. If it points to
        the wrong repository, run{" "}
        <code>git remote set-url origin YOUR_REPO_URL</code>.
      </Warning>

      <Warning title="GitHub asks for a username and password">
        GitHub does not accept your account password for Git pushes. A modern
        credential helper normally opens a browser sign-in. If that does not
        happen, ask a facilitator to help with GitHub CLI, a personal access
        token, or GitHub Desktop—never paste your normal GitHub password into
        the terminal. See the{" "}
        <a
          href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:no-underline"
        >
          GitHub authentication guide
        </a>
        .
      </Warning>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Your daily Git habit
      </h3>
      <CodeBlock
        title="Terminal"
        language="bash"
        code={snippet(
          "git status",
          "git add .",
          'git commit -m "describe the meaningful change"',
          "git push"
        )}
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <ConceptCard
          eyebrow="Helpful"
          title="Specific commit messages"
          tone="green"
        >
          <ul className="space-y-1">
            <li>“add skills toggle to profile card”</li>
            <li>“connect random quote API”</li>
            <li>“fix profile layout on mobile”</li>
          </ul>
        </ConceptCard>
        <ConceptCard
          eyebrow="Avoid"
          title="Messages with no meaning"
          tone="amber"
        >
          <ul className="space-y-1">
            <li>“stuff”</li>
            <li>“fix”</li>
            <li>random keyboard text</li>
          </ul>
        </ConceptCard>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Reference:{" "}
        <a
          href="https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#9B191F] dark:text-red-300 underline hover:no-underline"
        >
          GitHub — Add locally hosted code
        </a>
      </p>
    </Section>
  );
}

export function VercelTheorySection() {
  const deploySteps = [
    "Go to vercel.com and continue with GitHub.",
    "From the dashboard, choose Add New → Project.",
    "Find the my-profile-card repository and choose Import.",
    "Confirm the project name, Next.js preset, and root directory.",
    "Choose Deploy and wait for the build to finish.",
    "Open the generated URL and test both / and /about.",
  ];

  return (
    <Section id="vercel-deploy" number={8} title="Vercel — Put Your Site Online">
      <LessonMeta
        slides="37–44"
        duration="~12 minutes"
        outcome={
          <>
            Import a GitHub repository, make a production deployment, and know
            what happens after the next <code>git push</code>.
          </>
        }
      />

      <div className="rounded-xl border border-[#9B191F]/25 bg-[#9B191F]/5 p-5 text-center dark:border-[#9B191F]/40 dark:bg-[#9B191F]/10">
        <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          localhost:3000 is only your laptop
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          A deployment builds the project online and gives it a URL other people
          can visit.
        </p>
      </div>

      <p>
        Vercel is the company behind Next.js and a hosting platform designed to
        deploy Next.js projects directly from Git providers such as GitHub.
      </p>

      <ConceptGrid>
        <ConceptCard
          eyebrow="Student friendly"
          title="$0 Hobby plan"
          tone="red"
        >
          Intended for personal, non-commercial projects within the plan&apos;s
          usage limits—appropriate for this workshop profile.
        </ConceptCard>
        <ConceptCard
          eyebrow="Connected workflow"
          title="Push → build → deploy"
          tone="green"
        >
          Once connected, every new push triggers a deployment automatically.
        </ConceptCard>
        <ConceptCard
          eyebrow="Global delivery"
          title="Built-in CDN"
          tone="blue"
        >
          Vercel routes and caches content through a global delivery network.
        </ConceptCard>
        <ConceptCard
          eyebrow="Secure by default"
          title="Automatic HTTPS"
          tone="green"
        >
          Every deployment gets a shareable URL with an automatically managed
          TLS certificate.
        </ConceptCard>
      </ConceptGrid>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Before opening Vercel
      </h3>
      <CodeBlock
        title="Terminal"
        language="bash"
        code={snippet("npm run build", "git status", "git push")}
      />
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Fix any local build error first. A clean local build makes the live
        deployment much easier to troubleshoot.
      </p>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Deploy from the dashboard
      </h3>
      <ol className="space-y-3 text-sm">
        {deploySteps.map((step, index) => (
          <li
            key={step}
            className="flex gap-3 rounded-xl border border-black/10 bg-white p-3 dark:border-white/10 dark:bg-zinc-900"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#9B191F] text-xs font-bold text-white">
              {index + 1}
            </span>
            <span className="pt-1">{step}</span>
          </li>
        ))}
      </ol>

      <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
        <div className="rounded-xl border border-black/10 bg-white p-4 text-center dark:border-white/10 dark:bg-zinc-900">
          <p className="font-mono text-xs text-[#9B191F] dark:text-red-300">git push</p>
          <p className="mt-1 text-sm font-semibold">Send a commit</p>
        </div>
        <span className="text-center text-zinc-400" aria-hidden="true">
          <span className="sm:hidden">↓</span>
          <span className="hidden sm:inline">→</span>
        </span>
        <div className="rounded-xl border border-black/10 bg-white p-4 text-center dark:border-white/10 dark:bg-zinc-900">
          <p className="font-mono text-xs text-[#9B191F] dark:text-red-300">Vercel build</p>
          <p className="mt-1 text-sm font-semibold">Check and compile</p>
        </div>
        <span className="text-center text-zinc-400" aria-hidden="true">
          <span className="sm:hidden">↓</span>
          <span className="hidden sm:inline">→</span>
        </span>
        <div className="rounded-xl border border-black/10 bg-white p-4 text-center dark:border-white/10 dark:bg-zinc-900">
          <p className="font-mono text-xs text-[#9B191F] dark:text-red-300">Live URL</p>
          <p className="mt-1 text-sm font-semibold">Publish the update</p>
        </div>
      </div>

      <Warning title="Repository missing from the import list?">
        Check that you used the correct GitHub account and granted the Vercel
        GitHub app access to this repository. Repository access can be adjusted
        from the GitHub app settings.
      </Warning>

      <ProTip title="Dashboard labels can move">
        The slide screenshots show the flow, but dashboard layouts change. Look
        for the durable actions: <strong>New Project → Import → Deploy</strong>.
      </ProTip>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Reference:{" "}
        <a
          href="https://vercel.com/docs/git"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#9B191F] dark:text-red-300 underline hover:no-underline"
        >
          Vercel — Deploying Git repositories
        </a>
      </p>
    </Section>
  );
}
