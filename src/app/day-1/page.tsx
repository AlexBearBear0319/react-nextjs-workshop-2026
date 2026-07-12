/**
 * Day 1 Page (/day-1)
 *
 * Three sections:
 *   1. Project Setup (create-next-app)
 *   2. Components & Props (with BubbleTeaBuilder game)
 *   3. Tailwind CSS Styling
 *
 * End goal: students build a static Personal Profile Card.
 */

import { BubbleTeaBuilder } from "@/components/games/BubbleTeaBuilder";
import { WorkshopLayout } from "@/components/layout/WorkshopLayout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { ProTip } from "@/components/ui/ProTip";
import { Section } from "@/components/ui/Section";
import { Warning } from "@/components/ui/Warning";

export default function Day1Page() {
  return (
    <WorkshopLayout>
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#9B191F]">
          Day 1
        </p>
        <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Foundations — Components, Props &amp; Styling
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Today we learn the building blocks of React. By the end of the day,
          you will have a static Personal Profile Card running in your browser.
        </p>
      </div>

      {/* ── Section 1: Project Setup ── */}
      <Section id="project-setup" number={1} title="Project Setup">
        <p>
          First, we need to create a new Next.js project. Open your{" "}
          <strong>Terminal</strong> in VS Code (menu: View → Terminal) and run
          this command:
        </p>

        <CodeBlock
          language="bash"
          title="Terminal"
          code={`npx create-next-app@latest my-profile-card`}
        />

        <p>When prompted, choose these options:</p>
        <ul className="list-inside list-disc space-y-1 text-sm">
          <li>TypeScript → <strong>Yes</strong></li>
          <li>ESLint → <strong>Yes</strong></li>
          <li>Tailwind CSS → <strong>Yes</strong></li>
          <li>App Router → <strong>Yes</strong></li>
        </ul>

        <p>Then start the development server:</p>

        <CodeBlock
          language="bash"
          title="Terminal"
          code={`cd my-profile-card
npm run dev`}
        />

        <ProTip>
          Open <strong>http://localhost:3000</strong> in your browser. You
          should see the default Next.js welcome page. If you see an error,
          make sure you ran <code>cd my-profile-card</code> first!
        </ProTip>

        <Warning title="Terminal says 'command not found'?">
          You probably forgot to install Node.js. Go back to the Home page
          prerequisites and install it from nodejs.org, then restart VS Code.
        </Warning>
      </Section>

      {/* ── Section 2: Components & Props ── */}
      <Section id="components-props" number={2} title="Components & Props">
        <p>
          In React, everything is a <strong>component</strong> — a reusable
          piece of UI. Components receive <strong>props</strong> (short for
          &quot;properties&quot;) to customize what they display.
        </p>

        <p>
          Let us create a simple Profile Card component. Create a new file at{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
            src/components/ProfileCard.tsx
          </code>
          :
        </p>

        <CodeBlock
          title="ProfileCard.tsx"
          code={`interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
}

export function ProfileCard({ name, title, bio }: ProfileCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{title}</p>
      <p>{bio}</p>
    </div>
  );
}`}
        />

        <p>
          Then use it in your page by passing different props:
        </p>

        <CodeBlock
          title="page.tsx"
          code={`import { ProfileCard } from "@/components/ProfileCard";

export default function Home() {
  return (
    <ProfileCard
      name="Alex"
      title="Computer Science Student"
      bio="Learning React and Next.js!"
    />
  );
}`}
        />

        <ProTip>
          Think of props like function arguments. The component is the function,
          and props are the values you pass in. Change the props → the UI
          changes!
        </ProTip>

        {/* Interactive game */}
        <BubbleTeaBuilder />
      </Section>

      {/* ── Section 3: Tailwind CSS Styling ── */}
      <Section id="tailwind-styling" number={3} title="Tailwind CSS Styling">
        <p>
          Right now our profile card looks plain. Let us use{" "}
          <strong>Tailwind CSS</strong> to make it beautiful. Tailwind uses
          utility classes directly in your HTML/JSX.
        </p>

        <p>Update your ProfileCard with Tailwind classes:</p>

        <CodeBlock
          title="ProfileCard.tsx"
          code={`export function ProfileCard({ name, title, bio }: ProfileCardProps) {
  return (
    <div className="max-w-sm rounded-2xl bg-white p-6 shadow-lg">
      <div className="mb-4 h-20 w-20 rounded-full bg-blue-500" />
      <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
      <p className="text-sm font-medium text-blue-600">{title}</p>
      <p className="mt-2 text-gray-600">{bio}</p>
    </div>
  );
}`}
        />

        <Warning title="Styles not showing up?">
          Did you save the file? Press <strong>Cmd+S</strong> (Mac) or{" "}
          <strong>Ctrl+S</strong> (Windows). Next.js auto-refreshes the browser
          when you save — but only if the file is actually saved!
        </Warning>

        <ProTip title="Tailwind cheat sheet">
          Common classes: <code>text-xl</code> (big text),{" "}
          <code>font-bold</code> (bold), <code>bg-blue-500</code> (blue
          background), <code>rounded-lg</code> (rounded corners),{" "}
          <code>p-4</code> (padding), <code>mt-2</code> (margin top).
        </ProTip>

        <div className="mt-6 rounded-xl border-2 border-dashed border-[#9B191F]/30 p-6 text-center">
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Day 1 Goal Complete!
          </p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            You now have a styled Personal Profile Card. Save your project —
            we will continue building on it tomorrow in Day 2!
          </p>
        </div>
      </Section>
    </WorkshopLayout>
  );
}
