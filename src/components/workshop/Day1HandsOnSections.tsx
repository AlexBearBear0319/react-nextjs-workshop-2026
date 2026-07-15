/**
 * Day 1 — Hands-on #00 → #04 (+ summary)
 * Steps and copy-paste code follow the workshop PDF.
 */

import Link from "next/link";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { FacilitatorNote } from "@/components/ui/FacilitatorNote";
import { ProTip } from "@/components/ui/ProTip";
import { Section } from "@/components/ui/Section";
import { Warning } from "@/components/ui/Warning";
import {
  DoneWhen,
  HandsOnBanner,
  LessonMeta,
} from "@/components/workshop/LessonKit";
import { DAY2_DATE } from "@/config/workshopState";

export function HandsOn00Section() {
  return (
    <Section id="hands-on-00" number="00" title="Hands-on #00 — Clean Up Before Build">
      <HandsOnBanner number={0} title="Clean Up Before Build">
        Delete the boilerplate and make room for your code.
      </HandsOnBanner>

      <p>
        The default Next.js screen is the <strong>boilerplate</strong>. It proves
        your install worked — now we delete it.
      </p>

      <h3 className="text-lg font-semibold text-[#9B191F]">Exercise</h3>
      <ol className="list-inside list-decimal space-y-2 text-sm">
        <li>
          Open{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
            src/app/page.js
          </code>{" "}
          and delete <strong>EVERYTHING</strong>.
        </li>
        <li>Write the code below (copy → paste into VS Code):</li>
      </ol>

      <CodeBlock
        title="src/app/page.js"
        code={`export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8 text-gray-900">
      <h1>My Workspace</h1>
    </main>
  );
}`}
      />

      <ol className="list-inside list-decimal space-y-2 text-sm" start={3}>
        <li>
          Open{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
            http://localhost:3000/
          </code>{" "}
          and confirm that <strong>My Workspace</strong> appears.
        </li>
      </ol>

      <DoneWhen>
        <code>http://localhost:3000/</code> shows <strong>My Workspace</strong>{" "}
        and the terminal has no red error message.
      </DoneWhen>
    </Section>
  );
}

export function HandsOn01Section() {
  return (
    <Section
      id="hands-on-01"
      number="01"
      title="Hands-on #01 — Build Your ProfileCard Component"
    >
      <HandsOnBanner number={1} title="Build Your ProfileCard Component">
        Create one reusable card template with consistent prop names.
      </HandsOnBanner>

      <h3 className="text-lg font-semibold text-[#9B191F]">Exercise</h3>
      <ol className="list-inside list-decimal space-y-2 text-sm">
        <li>
          Create{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
            src/components/ProfileCard.js
          </code>
        </li>
        <li>
          Your ProfileCard will use these props: <code>name</code>,{" "}
          <code>title</code>, <code>desc</code>, and <code>imageSrc</code>. Start
          with the three text props; you will add <code>imageSrc</code> in
          Hands-on #02.
        </li>
        <li>Display the three text props in your JSX.</li>
      </ol>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Copy this starter with <code>name</code>, <code>title</code>, and{" "}
        <code>desc</code>:
      </p>

      <CodeBlock
        title="src/components/ProfileCard.js"
        code={`export function ProfileCard({ name, title, desc }) {
  return (
    <div className="flex items-center gap-4 text-gray-900">
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{title}</p>
        <p className="mt-1 text-sm">{desc}</p>
      </div>
    </div>
  );
}`}
      />

      <h3 className="text-lg font-semibold text-[#9B191F]">
        How every element works
      </h3>
      <ul className="space-y-3 text-sm">
        <li>
          <code className="text-[#9B191F]">export function ProfileCard(…)</code>{" "}
          — creates a reusable component other files can import.
        </li>
        <li>
          <code className="text-[#9B191F]">{"{ name, title, desc }"}</code> —{" "}
          <strong>props</strong> boxes. Parent pages pass values in; this
          component receives them.
        </li>
        <li>
          <code className="text-[#9B191F]">return ( … )</code> — what React shows
          on screen (must return JSX).
        </li>
        <li>
          Outer <code>div</code> with <code>flex items-center gap-4</code> —
          lays content in a row with spacing (room for a photo later).
        </li>
        <li>
          <code>{"{name}"}</code>, <code>{"{title}"}</code>,{" "}
          <code>{"{desc}"}</code> — curly braces inject the prop values into
          JSX.
        </li>
        <li>
          Tailwind classes like <code>text-xl</code>, <code>font-semibold</code>
          , <code>text-gray-600</code> — style without a separate CSS file.
        </li>
      </ul>

      <div className="rounded-xl border border-dashed border-[#9B191F]/40 p-4 text-center">
        <p className="font-semibold text-[#9B191F]">What about the image?</p>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Next hands-on — the Next.js <code>&lt;Image /&gt;</code> component.
        </p>
      </div>

      <DoneWhen>
        <code>src/components/ProfileCard.js</code> exports a component that
        receives <code>name</code>, <code>title</code>, and <code>desc</code>.
        It will appear in the browser after you import it in Hands-on #03.
      </DoneWhen>
    </Section>
  );
}

export function HandsOn02Section() {
  return (
    <Section
      id="hands-on-02"
      number="02"
      title="Hands-on #02 — The Next.js <Image /> Component"
    >
      <HandsOnBanner number={2} title="The Next.js <Image /> Component">
        Add a safely sized image to the same ProfileCard component.
      </HandsOnBanner>

      <h3 className="text-lg font-semibold text-[#9B191F]">
        Why use {"<Image />"}?
      </h3>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-red-300 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/40">
          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Standard {"<img>"} tag
          </p>
          <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
            You manually choose loading, sizing, and optimisation. Missing
            dimensions can cause the page to move while loading.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/40">
          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Next.js {"<Image />"} tag
          </p>
          <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
            Helps optimise the file, lazy-loads by default, and reserves the
            image shape using its width and height.
          </p>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-[#9B191F]">Exercise</h3>
      <ol className="list-inside list-decimal space-y-2 text-sm">
        <li>
          Drop a photo into the{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
            public/
          </code>{" "}
          folder (example: <code>public/profile.png</code>).
        </li>
        <li>
          Import Image:{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
            import Image from &quot;next/image&quot;
          </code>
        </li>
        <li>Add a parameter into the function (<code>imageSrc</code>).</li>
        <li>Then add {"<Image />"} to your component.</li>
      </ol>

      <CodeBlock
        title="src/components/ProfileCard.js"
        code={`import Image from "next/image";

export function ProfileCard({ name, title, desc, imageSrc }) {
  return (
    <div className="flex items-center gap-4 text-gray-900">
      <Image
        src={imageSrc}
        alt={name}
        width={96}
        height={96}
      />

      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{title}</p>
        <p className="mt-1 text-sm">{desc}</p>
      </div>
    </div>
  );
}`}
      />

      <ProTip title="public/ paths">
        File at <code>public/profile.png</code> → use{" "}
        <code>imageSrc=&quot;/profile.png&quot;</code> (leading slash, no{" "}
        <code>public</code> in the path).
      </ProTip>

      <Warning title="A personal photo is optional">
        You may use an avatar, illustration, pet, or other non-sensitive image.
        Do not put private information on a card you may publish later.
      </Warning>

      <div className="rounded-xl border border-blue-300 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/30">
        <p className="font-semibold text-blue-950 dark:text-blue-100">
          Need a safe fallback image?
        </p>
        <p className="mt-1 text-sm text-blue-900 dark:text-blue-200">
          Choose either picture. Both buttons save it as <code>profile.png</code>.
          Move that file into your project&apos;s <code>public/</code> folder.
          The later{" "}
          <code>imageSrc=&quot;/profile.png&quot;</code> examples will work without
          any renaming.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a
            href="/avatars/profile-girl.png"
            download="profile.png"
            className="inline-flex rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:ring-offset-zinc-950"
          >
            Download girl profile
          </a>
          <a
            href="/avatars/profile-man.png"
            download="profile.png"
            className="inline-flex rounded-lg border border-blue-700 bg-white px-4 py-2.5 text-sm font-semibold text-blue-800 transition-colors hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-blue-950 dark:text-blue-100 dark:hover:bg-blue-900 dark:ring-offset-zinc-950"
          >
            Download man profile
          </a>
        </div>
      </div>

      <div className="rounded-xl border-2 border-dashed border-[#9B191F]/30 p-5 text-center">
        <p className="font-semibold text-zinc-900 dark:text-zinc-100">
          Now see yourself on your own website
        </p>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          After Hands-on #03 wires the About page, your photo will show on{" "}
          <code>/about</code>.
        </p>
      </div>

      <DoneWhen>
        <code>ProfileCard</code> receives <code>imageSrc</code> and renders a
        Next.js <code>&lt;Image /&gt;</code> with <code>alt</code>, <code>width</code>,
        and <code>height</code>.
      </DoneWhen>
    </Section>
  );
}

export function HandsOn03Section() {
  return (
    <Section
      id="hands-on-03"
      number="03"
      title='Hands-on #03 — Adding an "About Me" Route'
    >
      <HandsOnBanner number={3} title='Adding an "About Me" Route'>
        Create the folder route, link to it, and finally render your card.
      </HandsOnBanner>

      <h3 className="text-lg font-semibold text-[#9B191F]">Exercise — part A</h3>
      <ol className="list-inside list-decimal space-y-2 text-sm">
        <li>
          Create folder:{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
            src/app/about/
          </code>
        </li>
        <li>
          Create file:{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
            src/app/about/page.js
          </code>
        </li>
        <li>
          In your main{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
            page.js
          </code>
          , add a navigation button:
        </li>
      </ol>

      <CodeBlock
        title="src/app/page.js"
        code={`import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8 text-gray-900">
      <h1>My Workspace</h1>

      <Link href="/about">Go to About Me</Link>
    </main>
  );
}`}
      />

      <h3 className="text-lg font-semibold text-[#9B191F]">Exercise — part B</h3>
      <ol className="list-inside list-decimal space-y-2 text-sm">
        <li>
          Go to{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-800">
            src/app/about/page.js
          </code>
        </li>
        <li>Import and use your ProfileCard component on the about page:</li>
      </ol>

      <CodeBlock
        title="src/app/about/page.js"
        code={`import { ProfileCard } from "@/components/ProfileCard";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <ProfileCard
        name="Alex"
        title="Computer Science Student"
        desc="Learning React and Next.js!"
        imageSrc="/profile.png"
      />
    </main>
  );
}`}
      />

      <Warning title="Use your own details">
        Change <code>name</code>, <code>title</code>, <code>desc</code>, and{" "}
        <code>imageSrc</code> to match your photo filename in{" "}
        <code>public/</code>.
      </Warning>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Test: click <strong>Go to About Me</strong>, or open{" "}
        <code>http://localhost:3000/about</code>.
      </p>

      <DoneWhen>
        The Home link opens <code>/about</code>, where your own ProfileCard and
        chosen image are visible without a full-page reload.
      </DoneWhen>
    </Section>
  );
}

export function HandsOn04Section() {
  return (
    <Section
      id="hands-on-04"
      number="04"
      title="Hands-on #04 — Make Your Card Look Good"
    >
      <HandsOnBanner number={4} title="Make Your Card Look Good">
        Apply the same utility ideas you tested in the Tailwind playground.
      </HandsOnBanner>

      <h3 className="text-lg font-semibold text-[#9B191F]">Exercise — must have</h3>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            ProfileCard.js
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <code className="text-[#9B191F]">bg-white</code> — clean white card
            </li>
            <li>
              <code className="text-[#9B191F]">text-gray-800</code> — readable
              dark text
            </li>
            <li>
              <code className="text-[#9B191F]">p-6</code> — breathing room
            </li>
            <li>
              <code className="text-[#9B191F]">rounded-xl</code> — soft corners
            </li>
            <li>
              <code className="text-[#9B191F]">shadow-lg</code> — depth / “card”
              feel
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            about/page.js
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <code className="text-[#9B191F]">bg-gradient-to-br</code> —
              diagonal gradient
            </li>
            <li>
              <code className="text-[#9B191F]">from-blue-50</code> — light blue
              start
            </li>
            <li>
              <code className="text-[#9B191F]">to-indigo-100</code> — soft indigo
              end
            </li>
          </ul>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-[#9B191F]">
        Bonus points
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-amber-300/60 bg-amber-50/80 p-4 dark:border-amber-800 dark:bg-amber-950/30">
          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            ProfileCard.js
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <code>transition-all</code> — animate style changes
            </li>
            <li>
              <code>duration-300</code> — 300ms smooth feel
            </li>
            <li>
              <code>hover:shadow-2xl</code> — bigger shadow on hover
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-amber-300/60 bg-amber-50/80 p-4 dark:border-amber-800 dark:bg-amber-950/30">
          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Image styles (on {"<Image />"})
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <code>rounded-full</code> — circle photo
            </li>
            <li>
              <code>object-cover</code> — crop nicely, no stretch
            </li>
            <li>
              <code>w-24 h-24</code> — fixed avatar size
            </li>
            <li>
              <code>shrink-0</code> — photo won’t get squished
            </li>
            <li>
              <code>ring-4 ring-blue-200</code> — soft colored ring
            </li>
            <li>
              <code>hover:scale-105</code> — slight zoom on hover
            </li>
          </ul>
        </div>
      </div>

      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        Copy-paste — ProfileCard with must-have + bonus
      </p>
      <CodeBlock
        title="src/components/ProfileCard.js"
        code={`import Image from "next/image";

export function ProfileCard({ name, title, desc, imageSrc }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-6 text-gray-800 shadow-lg transition-all duration-300 hover:shadow-2xl">
      <Image
        src={imageSrc}
        alt={name}
        width={96}
        height={96}
        className="h-24 w-24 shrink-0 rounded-full object-cover ring-4 ring-blue-200 transition-all duration-300 hover:scale-105"
      />

      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{title}</p>
        <p className="mt-1 text-sm">{desc}</p>
      </div>
    </div>
  );
}`}
      />

      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        Copy-paste — About page gradient
      </p>
      <CodeBlock
        title="src/app/about/page.js"
        code={`import { ProfileCard } from "@/components/ProfileCard";

export default function About() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <ProfileCard
        name="Alex"
        title="Computer Science Student"
        desc="Learning React and Next.js!"
        imageSrc="/profile.png"
      />
    </main>
  );
}`}
      />

      <DoneWhen>
        Your card stays readable, the photo remains circular and unsquashed,
        and the About page has a clear background with comfortable spacing.
      </DoneWhen>
    </Section>
  );
}

export function Day1SummarySection() {
  return (
    <Section id="day-1-summary" number="✓" title="Summary — What's Next?">
      <LessonMeta
        slides="85–94"
        outcome="Check your finished Day 1 project and prepare only the accounts needed for Day 2."
      />

      <h3 className="text-lg font-semibold text-[#9B191F]">
        What you just did
      </h3>
      <ul className="space-y-2 text-sm">
        <li>✅ Set up a real Next.js project</li>
        <li>
          ✅ Understood React components{" "}
          <strong>[Bubble Theory]</strong>
        </li>
        <li>✅ Passed data using props</li>
        <li>✅ Created multiple pages with file-based routing</li>
        <li>✅ Styled with Tailwind CSS</li>
        <li>
          ✅ Used the Next.js <code>&lt;Image /&gt;</code> component{" "}
          <strong>[Hands-on #02]</strong>
        </li>
      </ul>

      <h3 className="text-lg font-semibold text-[#9B191F]">Day 2 teaser</h3>
      <ul className="list-inside list-disc space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
        <li>
          <strong>State</strong> — making buttons actually do things (click →
          something changes → it&apos;s interactive)
        </li>
        <li>
          <strong>Deploying to Vercel</strong> — your site goes live (real URL.
          Show your mum. Put it on LinkedIn.)
        </li>
      </ul>

      <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/40">
        <p className="font-semibold text-amber-900 dark:text-amber-200">
          Homework before Day 2 ({DAY2_DATE})
        </p>
        <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-amber-900/90 dark:text-amber-100/90">
          <li>
            Create a free GitHub account at{" "}
            <a
              href="https://github.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              github.com/signup
            </a>
          </li>
          <li>
            Create a free Vercel account at{" "}
            <a
              href="https://vercel.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              vercel.com/signup
            </a>
          </li>
        </ol>
        <p className="mt-3 text-sm text-amber-900/90 dark:text-amber-100/90">
          Need step-by-step help? Go back to the{" "}
          <Link
            href="/#before-day-2"
            className="font-semibold underline hover:no-underline"
          >
            Home page → Before Day 2
          </Link>{" "}
          prerequisites for the GitHub and Vercel account walkthroughs.
        </p>
      </div>

      <FacilitatorNote title="Closing flow for slides 88–94">
        Invite final questions and let helpers resolve any remaining red error
        screens. Then run the lucky draw, explain the certificate and feedback
        steps, and finish with the contact and thank-you slides. These are event
        cues; students do not need to change their code.
      </FacilitatorNote>
    </Section>
  );
}
