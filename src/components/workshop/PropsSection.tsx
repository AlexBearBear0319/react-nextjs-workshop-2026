/**
 * Day 1 — Props (how to customise your component)
 * Profile card scenarios from workshop slides + bubble tea simulator.
 */

import { BubbleTeaBuilder } from "@/components/games/BubbleTeaBuilder";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { FacilitatorNote } from "@/components/ui/FacilitatorNote";
import { ProTip } from "@/components/ui/ProTip";
import { Section } from "@/components/ui/Section";
import { LessonMeta } from "@/components/workshop/LessonKit";

export function PropsSection() {
  return (
    <Section id="props" number={8} title="Props">
      <LessonMeta
        slides="58–61"
        outcome="Pass name, title, desc, and imageSrc into one reusable ProfileCard."
      />

      <p className="text-sm font-semibold uppercase tracking-wider text-[#9B191F] dark:text-red-300">
        How to customise your component
      </p>

      <p>
        A component without props is stuck on one value — like a profile card
        that can only ever say &quot;Ahmad&quot;. Props let you pass different
        data into the same component.
      </p>

      {/* Before vs After */}
      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Props: before vs after
      </h3>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Without props — hardcoded, not reusable
          </p>
          <CodeBlock
            title="Always Ahmad. Forever."
            code={`function ProfileCard() {
  return <h2>Ahmad</h2> // Always Ahmad. Forever.
}`}
          />
          <p className="rounded-lg border border-[#9B191F]/40 bg-[#9B191F]/5 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300">
            It&apos;s hardcoded. Even if you call it many times, it&apos;s still
            Ahmad — which is not useful.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            With props — flexible, reusable
          </p>
          <CodeBlock
            title="Same component · different people"
            code={`function ProfileCard({ name, title }) {
  return <h2>{name} — {title}</h2>
}

// Usage:
<ProfileCard name="Ahmad" title="CS Student" />
<ProfileCard name="Priya" title="Business Student" />`}
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-emerald-300/70 bg-emerald-50/80 p-3 text-sm dark:border-emerald-800 dark:bg-emerald-950/30">
          <p className="font-semibold text-emerald-800 dark:text-emerald-300">
            A — receive
          </p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            Create <code>name</code> and <code>title</code> with curly braces{" "}
            <code>{"{}"}</code> as boxes to receive the values.
          </p>
        </div>
        <div className="rounded-lg border border-emerald-300/70 bg-emerald-50/80 p-3 text-sm dark:border-emerald-800 dark:bg-emerald-950/30">
          <p className="font-semibold text-emerald-800 dark:text-emerald-300">
            B — pass
          </p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            Pass the values with <code>name=&quot;Ahmad&quot;</code> and{" "}
            <code>title=&quot;CS Student&quot;</code> when you use the component.
          </p>
        </div>
      </div>

      {/* Parent → child */}
      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Props: parent and child components
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Think of props like a package the parent sends to the child.
      </p>

      <div className="grid gap-4 lg:grid-cols-2">
        <CodeBlock
          title="page.js — the parent"
          code={`// page.js (the parent)
// Uses the component, passes props:
<ProfileCard name="Ahmad" title="CS Student" />`}
        />
        <CodeBlock
          title="ProfileCard.js — the child"
          code={`// ProfileCard.js (the child)
// Receives and displays the props:
function ProfileCard({ name, title }) {
  return <div>{name} — {title}</div>
}`}
        />
      </div>

      <ProTip title="One-way street">
        Parent feeds data down. Child displays it. Data only flows{" "}
        <strong>one way</strong>: parent → child.
      </ProTip>

      {/* Bridge back to bubble tea + simulator */}
      <div className="rounded-xl border border-[#9B191F]/30 bg-gradient-to-br from-[#9B191F]/5 to-amber-50/80 p-4 dark:border-[#9B191F]/40 dark:from-[#9B191F]/15 dark:to-zinc-900">
        <p className="text-lg font-bold text-[#9B191F] dark:text-red-300">
          Play: one component · three pages
        </p>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Top: change lid, cup, or straw in the{" "}
          <strong>component</strong> — all three cups update together. Bottom:
          each pretend page has its own <strong>props</strong> (flavour,
          pearls, sugar).
        </p>
      </div>

      <CodeBlock
        language="jsx"
        title="Same component on three pages"
        code={`// Home, About, Menu — all import BubbleTeaCup
<BubbleTeaCup flavour="Milk" sugar="50%" pearls />
<BubbleTeaCup flavour="Green" sugar="100%" pearls />
<BubbleTeaCup flavour="Black" sugar="0%" />`}
      />

      <BubbleTeaBuilder />

      <div className="rounded-xl border border-blue-300 bg-blue-50 p-4 text-sm text-blue-950 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-100">
        <p className="font-semibold">The ProfileCard names we will keep</p>
        <p className="mt-1">
          <code>name</code>, <code>title</code>, <code>desc</code>, and{" "}
          <code>imageSrc</code>. Keeping the same names through Day 1 and Day 2
          makes every later copy-and-paste step fit together.
        </p>
      </div>

      <FacilitatorNote title="Teaching cue: keep props progressive">
        Demonstrate <code>name</code> and <code>title</code> first. Once students
        can point to where each value is passed and received, introduce{" "}
        <code>desc</code> and <code>imageSrc</code> as the two fields they will
        add during the hands-on steps.
      </FacilitatorNote>

      <div className="rounded-xl border-2 border-dashed border-[#9B191F]/30 p-5 text-center">
        <p className="font-semibold text-zinc-900 dark:text-zinc-100">
          Checkpoint
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Swap the pink lid — did Home, About, and Menu all change? Now change
          only Home&apos;s sugar. That&apos;s component vs props. Next up:{" "}
          <strong>Tailwind CSS</strong> — make the card look less ugly.
        </p>
      </div>
    </Section>
  );
}
