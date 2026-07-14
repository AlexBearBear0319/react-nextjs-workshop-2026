/**
 * Day 1 — Components (Bubble Tea theory)
 * Theory + structure. Props are the next section.
 */

import { CodeBlock } from "@/components/ui/CodeBlock";
import { FacilitatorNote } from "@/components/ui/FacilitatorNote";
import { Section } from "@/components/ui/Section";
import { Warning } from "@/components/ui/Warning";
import {
  ConceptCard,
  ConceptGrid,
  LessonMeta,
} from "@/components/workshop/LessonKit";

export function ComponentsSection() {
  return (
    <Section id="components" number={7} title="Components">
      <LessonMeta
        slides="45–56"
        outcome="Build a reusable React component, then recognise which tools come from Next.js."
      />

      <p className="text-sm font-semibold uppercase tracking-wider text-[#9B191F] dark:text-red-300">
        The bubble tea theory
      </p>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Why component? Think bubble tea
      </h3>
      <p>
        Imagine your shop sells three drinks: avocado, strawberry, and brown
        sugar. Every order needs the same cup, lid, straw, and recipe — plus one
        unique topping.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-red-300 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/40">
          <p className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
            Traditional (vanilla HTML / CSS)
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You copy the cup + lid + straw + recipe onto{" "}
            <strong>every page</strong>, then add avocado / strawberry / brown
            sugar.
          </p>
          <p className="mt-3 text-sm font-semibold text-[#9B191F] dark:text-red-300">
            Need a new cup cover? Edit the code on every page. Painful.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/40">
          <p className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
            Component (React / Next.js)
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You build the cup model <strong>once</strong> as a component. Reuse
            it everywhere.
          </p>
          <p className="mt-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            Need a new cup model? Change the component once — every drink
            updates.
          </p>
        </div>
      </div>

      <FacilitatorNote>
        Advice from us: stop rebuilding a brand-new cup from scratch every time.
        Make the template once. Reuse it. (Next section: how to pass different
        toppings with <strong>props</strong>.)
      </FacilitatorNote>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        The bubble tea analogy
      </h3>
      <ul className="list-inside list-disc space-y-2 text-sm">
        <li>
          A <strong>component</strong> = the standard cup + lid + straw +
          recipe.
        </li>
        <li>You make the template once. Every order uses the same template.</li>
        <li>Stop building a brand new cup from scratch every time.</li>
      </ul>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        React component structure (bubble tea edition)
      </h3>
      <p>
        Create your custom component under{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
          src/components/
        </code>
        :
      </p>

      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        3 things every component needs:
      </p>
      <ol className="list-inside list-decimal space-y-1 text-sm">
        <li>
          A <strong>function</strong> with a <strong>Capital Letter</strong> name
          (the cup recipe name)
        </li>
        <li>
          A <strong>return</strong> statement (what you hand to the customer)
        </li>
        <li>
          <strong>JSX</strong> inside the return (how the drink looks)
        </li>
      </ol>

      <CodeBlock
        title="src/components/BubbleTeaCup.jsx"
        code={`export default function BubbleTeaCup() {
  return (
    <div>
      <p>Cup + lid + straw</p>
      <h2>Milk Tea</h2>
    </div>
  );
}`}
      />

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Cup, lid, and straw live <strong>inside</strong> the component. Want a
        new lid design? Edit this file once — every place that uses{" "}
        <code>BubbleTeaCup</code> updates.
      </p>

      <Warning title="Capital letter matters">
        <code>&lt;bubbleTeaCup /&gt;</code> looks like a normal HTML tag to
        React. <code>&lt;BubbleTeaCup /&gt;</code> is your custom cup component.
        Always start component names with a capital letter.
      </Warning>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        React components and Next.js features
      </h3>
      <p className="italic text-zinc-600 dark:text-zinc-400">
        Two are components you import. One is a special file that renders your
        own component.
      </p>

      <ConceptGrid>
        <ConceptCard eyebrow="You build it" title="Custom React component" tone="red">
          <code>ProfileCard</code> and <code>BubbleTeaCup</code> are functions
          you create. Their capitalised names let React recognise them as
          components.
        </ConceptCard>
        <ConceptCard eyebrow="Next.js component" title={<code>&lt;Link&gt;</code>} tone="green">
          Import it from <code>next/link</code>. It extends a normal anchor for
          fast navigation between your app&apos;s routes.
        </ConceptCard>
        <ConceptCard eyebrow="Next.js component" title={<code>&lt;Image /&gt;</code>} tone="blue">
          Import it from <code>next/image</code>. It helps size and optimise an
          image while requiring useful accessibility information.
        </ConceptCard>
        <ConceptCard eyebrow="Next.js file convention" title={<code>layout.js</code>} tone="purple">
          This is <strong>not</strong> an imported built-in component. The file
          exports your layout component, which wraps pages with shared UI such
          as a navigation bar.
        </ConceptCard>
      </ConceptGrid>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        1. Link: move between pages
      </h3>
      <CodeBlock
        language="jsx"
        title="src/app/page.js"
        code={`import Link from "next/link";

export default function Home() {
  return <Link href="/">Go to Home</Link>;
}`}
      />
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        The <code>href</code> says where to go. <code>/</code> is the home URL
        you already have. Next.js can prefetch linked routes in production and
        navigate without replacing the entire page.
      </p>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        2. Image: show a correctly sized image
      </h3>
      <CodeBlock
        language="jsx"
        title="Inside ProfileCard.js"
        code={`import Image from "next/image";

<Image
  src="/alex.png"
  alt="Alex's profile photo"
  width={96}
  height={96}
/>`}
      />
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        <code>src</code> selects the file, <code>alt</code> explains the image,
        and <code>width</code> plus <code>height</code> reserve its shape so the
        page does not jump while loading. You will use this in Hands-on #02.
      </p>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        3. layout.js: keep the navigation shared
      </h3>
      <CodeBlock
        language="jsx"
        title="Concept preview — src/app/layout.js"
        copyable={false}
        code={`import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}`}
      />
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        <code>{"{children}"}</code> is the current page. The navigation sits
        outside it, so the same navbar wraps both Home and About. For today,
        understand the pattern—do not replace your generated root layout yet.
      </p>

      <Warning title="The important distinction">
        <code>&lt;Link&gt;</code> and <code>&lt;Image /&gt;</code> are built-in Next.js
        React components. <code>layout.js</code> is a special filename where
        <strong> you define</strong> a layout component.
      </Warning>

      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Official references:{" "}
        <a
          href="https://nextjs.org/docs/app/api-reference/components/link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9B191F] underline hover:no-underline dark:text-red-300"
        >
          Link
        </a>
        {", "}
        <a
          href="https://nextjs.org/docs/app/api-reference/components/image"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9B191F] underline hover:no-underline dark:text-red-300"
        >
          Image
        </a>
        {", and "}
        <a
          href="https://nextjs.org/docs/app/api-reference/file-conventions/layout"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9B191F] underline hover:no-underline dark:text-red-300"
        >
          layout.js
        </a>
        .
      </p>

      <div className="rounded-xl border-2 border-dashed border-[#9B191F]/30 p-5 text-center">
        <p className="font-semibold text-zinc-900 dark:text-zinc-100">
          Checkpoint
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Can you explain why building the cup once as a component beats copying
          HTML on every page? Next up: <strong>props</strong> — how to customise
          each order (and your profile card).
        </p>
      </div>

      <FacilitatorNote title="Planned break point">
        Pause here before Props. Ask everyone to save their files and keep the
        development terminal running. Helpers can use the pause to confirm that
        each student can still see the local page before the class continues.
      </FacilitatorNote>
    </Section>
  );
}
