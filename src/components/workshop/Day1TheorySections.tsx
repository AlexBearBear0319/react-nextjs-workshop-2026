/**
 * Day 1 teaching/theory sections that follow the workshop slide deck.
 *
 * These pages deliberately introduce ideas before the later hands-on sections.
 * Examples marked as previews are not instructions to change the student project.
 */

import {
  HotReloadVisualizer,
  RouteMapper,
} from "@/components/games/Day1LearningLabs";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { FacilitatorNote } from "@/components/ui/FacilitatorNote";
import { ProTip } from "@/components/ui/ProTip";
import { Section } from "@/components/ui/Section";
import { Warning } from "@/components/ui/Warning";
import {
  ConceptCard,
  ConceptGrid,
  LessonMeta,
} from "@/components/workshop/LessonKit";

const snippet = (...lines: string[]) => lines.join("\n");

export function IntroductionTheorySection() {
  return (
    <Section id="introduction" number={1} title="Why React? Why Next.js?">
      <LessonMeta
        slides="15–27"
        outcome={
          <>
            Explain the different jobs of HTML, React, and Next.js—and why we
            are using all three together.
          </>
        }
      />

      <div className="rounded-xl border border-black/10 bg-[#9B191F] p-5 text-white dark:border-white/10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
          Start with the problem
        </p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">
          Why can&apos;t we just use HTML?
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/90">
          We can—and HTML is still the foundation of every page we build.
          React and Next.js help when a site grows and the same interface,
          data, and behaviour appear in many places.
        </p>
      </div>

      <p>
        Imagine manually writing 50 similar student cards. Copying the markup
        works at first, but a new logo or card layout means finding and editing
        every copy. The difficult part is not the first card; it is keeping all
        50 copies consistent later.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300">
            Repeated by hand
          </p>
          <p className="mt-2 font-semibold text-zinc-900 dark:text-zinc-100">
            50 copies → 50 places to maintain
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            One forgotten copy can look different from the others.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
            Reusable component
          </p>
          <p className="mt-2 font-semibold text-zinc-900 dark:text-zinc-100">
            One card template → reused many times
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Change the shared structure once, then each use receives its own
            details. We will build this pattern in the Components topic.
          </p>
        </div>
      </div>

      <CodeBlock
        title="Concept preview — do not copy yet"
        language="jsx"
        copyable={false}
        code={snippet(
          "// Build the shared shape once...",
          "function StudentCard({ name }) {",
          "  return <article><h2>{name}</h2></article>;",
          "}",
          "",
          "// ...then reuse it with different information.",
          '<StudentCard name="Aisha" />',
          '<StudentCard name="Marcus" />'
        )}
      />

      <ProTip title="HTML is not the enemy">
        React components still produce interface elements such as headings,
        paragraphs, links, and images. Your HTML knowledge remains useful;
        React gives you a practical way to compose and update those elements.
      </ProTip>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Three layers, three different jobs
      </h3>
      <ConceptGrid>
        <ConceptCard eyebrow="Foundation" title="HTML, CSS, and JavaScript">
          HTML describes content, CSS styles it, and JavaScript adds behaviour.
          React and Next.js build on these web foundations rather than replacing
          them.
        </ConceptCard>
        <ConceptCard eyebrow="UI library" title="React" tone="blue">
          React helps us describe an interface as reusable components and update
          that interface when its data changes. It focuses mainly on the UI
          layer.
        </ConceptCard>
        <ConceptCard eyebrow="React framework" title="Next.js" tone="red">
          Next.js uses React and adds an application structure plus integrated
          features such as routing, rendering, image handling, and server code.
        </ConceptCard>
        <ConceptCard
          eyebrow="Our project"
          title="React inside Next.js"
          tone="green"
        >
          This is not React versus Next.js. A Next.js app is a React app with
          framework conventions and tools around it.
        </ConceptCard>
      </ConceptGrid>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        The kitchen analogy from the slides
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-900">
          <p className="text-3xl" aria-hidden="true">
            🍴
          </p>
          <h4 className="mt-3 font-semibold text-zinc-900 dark:text-zinc-100">
            React library = your utensils
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            A knife is a focused tool. The chef chooses when and how to use it.
            In the same way, React gives us focused tools for composing user
            interfaces.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-900">
          <p className="text-3xl" aria-hidden="true">
            🍱
          </p>
          <h4 className="mt-3 font-semibold text-zinc-900 dark:text-zinc-100">
            Next.js framework = a recipe or meal kit
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            The kit supplies a useful structure and agreed places for things.
            You still choose what to build, but you do not have to invent every
            convention yourself.
          </p>
        </div>
      </div>

      <Warning title="A useful correction to remember">
        React does not make routing or data fetching impossible. It simply does
        not prescribe a complete app solution by itself; developers can add
        other libraries. Next.js is one framework that integrates those app-level
        decisions for us.
      </Warning>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        What Next.js adds to our toolkit
      </h3>
      <div
        className="overflow-x-auto rounded-xl border border-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B191F] dark:border-white/10"
        role="region"
        aria-label="React and Next.js responsibilities"
        tabIndex={0}
      >
        <table className="w-full min-w-[620px] border-collapse text-left text-sm">
          <caption className="sr-only">
            Comparison of React&apos;s focus and features integrated by Next.js
          </caption>
          <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">
                Need
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                React&apos;s focus
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Next.js integration
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/10 bg-white dark:divide-white/10 dark:bg-zinc-900">
            <tr>
              <th scope="row" className="px-4 py-3 font-medium">
                Reusable UI
              </th>
              <td className="px-4 py-3">Components and updates</td>
              <td className="px-4 py-3">Uses React components</td>
            </tr>
            <tr>
              <th scope="row" className="px-4 py-3 font-medium">
                Pages and URLs
              </th>
              <td className="px-4 py-3">Not prescribed by React itself</td>
              <td className="px-4 py-3">App Router and file conventions</td>
            </tr>
            <tr>
              <th scope="row" className="px-4 py-3 font-medium">
                Search-friendly output
              </th>
              <td className="px-4 py-3">Needs an app-level approach</td>
              <td className="px-4 py-3">
                Rendering and metadata tools that support discoverability
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-4 py-3 font-medium">
                App features
              </th>
              <td className="px-4 py-3">Combine React with other tools</td>
              <td className="px-4 py-3">
                Image optimisation, server features, and build tooling
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        These features give us a strong starting point; they do not guarantee a
        fast or highly ranked website automatically. Our content and code still
        matter.
      </p>

      <div
        className="rounded-xl border-2 border-dashed border-[#9B191F]/30 p-5"
        role="group"
        aria-labelledby="introduction-checkpoint"
      >
        <p
          id="introduction-checkpoint"
          className="font-semibold text-zinc-900 dark:text-zinc-100"
        >
          Checkpoint — explain it to a partner
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Finish this sentence: “React helps me ______; Next.js helps organise
          the full app by ______.” If you can describe their different jobs,
          you are ready to set up the project.
        </p>
      </div>
    </Section>
  );
}

export function BuildHotReloadSection() {
  return (
    <Section
      id="build-hot-reload"
      number={5}
      title="Build & Test — Your Local Dev Loop"
    >
      <LessonMeta
        slides="69–71 · moved after File Structure"
        outcome={
          <>
            Start the local development server, edit and save safely, and know
            when to use <code>dev</code>, <code>build</code>, or{" "}
            <code>start</code>.
          </>
        }
      />

      <p>
        You have found the important files. Now we need a way to see what those
        files produce. During development, Next.js runs a small web server on
        your own laptop and watches your code for saved changes.
      </p>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-black/10 bg-white p-4 text-center dark:border-white/10 dark:bg-zinc-900">
          <p className="text-2xl" aria-hidden="true">
            1️⃣
          </p>
          <p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Edit in VS Code
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4 text-center dark:border-white/10 dark:bg-zinc-900">
          <p className="text-2xl" aria-hidden="true">
            2️⃣
          </p>
          <p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Save the file
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4 text-center dark:border-white/10 dark:bg-zinc-900">
          <p className="text-2xl" aria-hidden="true">
            3️⃣
          </p>
          <p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            See the browser update
          </p>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Start the development server
      </h3>
      <ol className="space-y-4 text-sm">
        <li className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">
            1. Open a terminal inside your project folder
          </p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            The terminal path should end with <code>my-profile-card</code>.
          </p>
        </li>
        <li className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">
            2. Run the project&apos;s development script
          </p>
          <CodeBlock language="bash" title="Terminal" code="npm run dev" />
          <p className="text-zinc-600 dark:text-zinc-400">
            <code>npm</code> reads the <code>dev</code> script in{" "}
            <code>package.json</code>. In a Next.js project, that starts{" "}
            <code>next dev</code> (using Turbopack by default in Next.js 16).
          </p>
        </li>
        <li className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">
            3. Open the Local address printed in the terminal
          </p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            It is usually <code>http://localhost:3000</code>. Use the exact
            address shown on your screen if Next.js chooses another port.
          </p>
        </li>
      </ol>

      <ProTip title="What does localhost mean?">
        <code>localhost</code> means “this computer.” The page is running on
        your laptop for testing; classmates cannot visit it over the public
        internet. Deployment comes later.
      </ProTip>

      <Warning title="Keep that terminal open">
        The development server is the running terminal process. Closing its
        window or pressing <strong>Ctrl + C</strong> stops the server, so the
        local page will stop responding. Open another terminal tab if you need
        to type unrelated commands.
      </Warning>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Save → Fast Refresh → updated page
      </h3>
      <p>
        The slides call this “hot reload.” In Next.js, the feature you will see
        is called <strong>Fast Refresh</strong>. Change JSX or styling in{" "}
        <code>src/app/page.js</code>, then save with <strong>Cmd + S</strong> on
        Mac or <strong>Ctrl + S</strong> on Windows. Most edits appear quickly
        without you pressing the browser refresh button.
      </p>

      <HotReloadVisualizer />

      <ConceptGrid>
        <ConceptCard
          eyebrow="Usually"
          title="Your edit updates in place"
          tone="green"
        >
          Fast Refresh re-renders the affected React component. When it is safe,
          it can also preserve temporary state while you edit.
        </ConceptCard>
        <ConceptCard
          eyebrow="Sometimes"
          title="A full reload is needed"
          tone="amber"
        >
          Some changes cross the React boundary or require a restart. The page
          may reload and temporary state may reset; that does not mean your
          saved code disappeared.
        </ConceptCard>
      </ConceptGrid>

      <Warning title="An error screen is feedback, not disaster">
        A missing bracket or tag can show a red error overlay. Read the file and
        line shown, fix the code, and save again. Next.js normally clears the
        overlay after the problem is fixed.
      </Warning>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Development and production are different jobs
      </h3>
      <div
        className="overflow-x-auto rounded-xl border border-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B191F] dark:border-white/10"
        role="region"
        aria-label="Next.js npm scripts comparison"
        tabIndex={0}
      >
        <table className="w-full min-w-[650px] border-collapse text-left text-sm">
          <caption className="sr-only">
            When to use npm run dev, npm run build, and npm run start
          </caption>
          <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">
                Command
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Job
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Use it when…
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/10 bg-white dark:divide-white/10 dark:bg-zinc-900">
            <tr>
              <th scope="row" className="px-4 py-3 font-mono font-medium">
                npm run dev
              </th>
              <td className="px-4 py-3">Runs the development server</td>
              <td className="px-4 py-3">
                You are coding and want Fast Refresh and helpful errors
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-4 py-3 font-mono font-medium">
                npm run build
              </th>
              <td className="px-4 py-3">
                Creates an optimised production build, then finishes
              </td>
              <td className="px-4 py-3">
                You want to check and prepare the app for production
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-4 py-3 font-mono font-medium">
                npm run start
              </th>
              <td className="px-4 py-3">
                Serves a production build made by <code>build</code>
              </td>
              <td className="px-4 py-3">
                You are testing or hosting that completed production build
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        None of these commands publishes the app to the internet by itself.
        For today&apos;s edit-and-check loop, stay with <code>npm run dev</code>.
      </p>

      <FacilitatorNote title="Room check for 50 learners">
        Ask everyone to hold up a hand only after their local page and terminal
        are both visible. With 10 helpers, give each helper one cluster of about
        five students. Check the project-folder path first, then the terminal
        error, before changing any code.
      </FacilitatorNote>

      <div
        className="rounded-xl border-2 border-dashed border-[#9B191F]/30 p-5"
        role="group"
        aria-labelledby="hot-reload-checkpoint"
      >
        <p
          id="hot-reload-checkpoint"
          className="font-semibold text-zinc-900 dark:text-zinc-100"
        >
          Checkpoint — make one visible change
        </p>
        <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          <li>Keep the development terminal running.</li>
          <li>
            Change one heading inside <code>src/app/page.js</code>.
          </li>
          <li>Save and point to the updated text in your browser.</li>
        </ol>
      </div>
    </Section>
  );
}

export function RoutingTheorySection() {
  return (
    <Section id="routing" number={6} title="Routing — Folders Become URLs">
      <LessonMeta
        slides="38–44"
        outcome={
          <>
            Predict a URL from an App Router folder, identify the special{" "}
            <code>page.js</code> file, and know that function names do not
            create routes.
          </>
        }
      />

      <div className="rounded-xl border border-black/10 bg-[#9B191F] p-5 text-white dark:border-white/10">
        <p className="text-3xl" aria-hidden="true">
          🗺️
        </p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">
          Routing is the GPS for your website
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/90">
          A visitor requests a URL such as{" "}
          <code className="text-white">/about</code>. The router matches that
          path to the page UI your app should show.
        </p>
      </div>

      <p>
        In the Next.js <strong>App Router</strong>, route segments come from
        folders inside <code>src/app</code>. A special <code>page.js</code> file
        makes the UI for that route publicly accessible.
      </p>

      <CodeBlock
        title="Folder-to-URL map"
        language="text"
        copyable={false}
        code={snippet(
          "src/app/",
          "├── page.js                 → /",
          "├── about/",
          "│   └── page.js             → /about",
          "└── profile/",
          "    └── page.js             → /profile"
        )}
      />

      <ConceptGrid>
        <ConceptCard
          eyebrow="Route segment"
          title="A normal route folder adds part of the path"
          tone="blue"
        >
          The <code>about</code> folder contributes <code>/about</code>. Nested
          folders can contribute more segments, such as <code>/about/team</code>.
        </ConceptCard>
        <ConceptCard
          eyebrow="Special file"
          title={<code>page.js</code>}
          tone="red"
        >
          The folder alone is not a public page. Its <code>page.js</code> default
          export provides the UI visitors see at that route.
        </ConceptCard>
      </ConceptGrid>

      <RouteMapper />

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        The file path controls the URL—not the function name
      </h3>
      <CodeBlock
        title="src/app/page.js"
        language="jsx"
        copyable={false}
        code={snippet(
          "// This file is still the / route.",
          "// Renaming the function does not create /about.",
          "export default function About() {",
          "  return <h1>My home page</h1>;",
          "}"
        )}
      />
      <p>
        The component function can be called <code>Page</code>, <code>Home</code>,
        or <code>About</code>; that name is for people reading the code. Because
        the file above is <code>src/app/page.js</code>, its URL remains{" "}
        <code>/</code>. A real <code>/about</code> route needs{" "}
        <code>src/app/about/page.js</code>.
      </p>

      <Warning title="Two pieces must match">
        To add a route, put a default-exported React component in the correct
        special <code>page.js</code> file. A folder without <code>page.js</code>,
        or a renamed function inside the home page, does not create the route.
      </Warning>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        How this compares with other approaches
      </h3>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Separate HTML files
          </p>
          <h4 className="mt-2 font-semibold text-zinc-900 dark:text-zinc-100">
            Often a new document per page
          </h4>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            A basic static site might link to <code>about.html</code>. Servers
            can also configure cleaner URLs, so the filename is not a universal
            rule.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            React by itself
          </p>
          <h4 className="mt-2 font-semibold text-zinc-900 dark:text-zinc-100">
            UI without one required router
          </h4>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            React focuses on components. An app can add a routing library or use
            a framework; React itself does not prescribe one routing setup.
          </p>
        </div>
        <div className="rounded-xl border border-[#9B191F]/30 bg-[#9B191F]/5 p-4 dark:border-[#9B191F]/40 dark:bg-[#9B191F]/10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#9B191F] dark:text-red-300">
            Next.js App Router
          </p>
          <h4 className="mt-2 font-semibold text-zinc-900 dark:text-zinc-100">
            An integrated file convention
          </h4>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Organise folders and special files under <code>app</code>; Next.js
            derives the matching route structure.
          </p>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-[#9B191F] dark:text-red-300">
        Preview: move between routes with <code>&lt;Link&gt;</code>
      </h3>
      <p>
        Creating a page gives us a destination. Next.js also provides the
        built-in <code>&lt;Link&gt;</code> component for internal navigation.
        It enables client-side transitions that keep shared UI in place, and
        Next.js can prefetch eligible routes to make navigation feel fast.
      </p>

      <CodeBlock
        title="Preview only — we return to this in Components"
        language="jsx"
        copyable={false}
        code={snippet(
          'import Link from "next/link";',
          "",
          "export default function Navigation() {",
          '  return <Link href="/">Home</Link>;',
          "}"
        )}
      />

      <ProTip title="Only remember two things for now">
        Import <code>Link</code> from <code>next/link</code>, then put the target
        route in <code>href</code>. In the Components topic, we will unpack why{" "}
        <code>&lt;Link&gt;</code> is a built-in Next.js component and place it
        alongside <code>&lt;Image /&gt;</code> and shared{" "}
        <code>layout.js</code> UI.
      </ProTip>

      <FacilitatorNote title="Teaching cue: predict first">
        Before revealing an answer, point to one file path and ask the room to
        say the URL together. Then let helpers check one nearby learner&apos;s
        folder tree. This catches the common mistake that the function name
        creates the route.
      </FacilitatorNote>

      <div
        className="rounded-xl border-2 border-dashed border-[#9B191F]/30 p-5"
        role="group"
        aria-labelledby="routing-checkpoint"
      >
        <p
          id="routing-checkpoint"
          className="font-semibold text-zinc-900 dark:text-zinc-100"
        >
          Checkpoint — predict before you click
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          <li>
            What URL comes from <code>src/app/profile/page.js</code>?
          </li>
          <li>
            What file supplies the UI for <code>/</code>?
          </li>
          <li>
            Does renaming <code>function Home</code> to{" "}
            <code>function About</code> change the URL?
          </li>
        </ul>
        <p className="mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Answers: <code>/profile</code>, <code>src/app/page.js</code>, and no.
        </p>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Read later:{" "}
        <a
          href="https://nextjs.org/docs/app/getting-started/layouts-and-pages"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#9B191F] underline hover:no-underline dark:text-red-300"
        >
          Next.js — Layouts and Pages
        </a>
      </p>
    </Section>
  );
}
