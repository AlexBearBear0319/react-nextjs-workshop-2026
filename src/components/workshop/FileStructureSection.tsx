/**
 * Day 1 — File Structure
 * After Project Setup + What is JSX.
 * Separates src (components) from app (pages / routing).
 */

import { CodeBlock } from "@/components/ui/CodeBlock";
import { FacilitatorNote } from "@/components/ui/FacilitatorNote";
import { Section } from "@/components/ui/Section";
import { Warning } from "@/components/ui/Warning";
import { LessonMeta } from "@/components/workshop/LessonKit";

function TreeRow({
  name,
  hint,
  tone,
}: {
  name: string;
  hint: string;
  tone: "safe" | "danger" | "config" | "focus";
}) {
  const toneClass =
    tone === "safe"
      ? "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/40"
      : tone === "danger"
        ? "border-red-300 bg-red-50 dark:border-red-900 dark:bg-red-950/40"
        : tone === "focus"
          ? "border-[#9B191F]/40 bg-[#9B191F]/5 dark:border-[#9B191F]/50 dark:bg-[#9B191F]/10"
          : "border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/40";

  return (
    <div className={`rounded-lg border px-3 py-2 text-sm ${toneClass}`}>
      <code className="font-mono font-semibold text-zinc-900 dark:text-zinc-100">
        {name}
      </code>
      <p className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-400">{hint}</p>
    </div>
  );
}

export function FileStructureSection() {
  return (
    <Section id="file-structure" number={4} title="File Structure">
      <LessonMeta
        slides="34–37"
        outcome="Find pages, shared layouts, components, images, and generated folders without editing the wrong file."
      />
      <p className="text-sm font-semibold uppercase tracking-wider text-[#9B191F]">
        Project map · where does everything live?
      </p>

      <p>
        You know JSX now. Next question:{" "}
        <strong>where does everything live</strong> in your project — and what
        can you safely leave alone without breaking everything?
      </p>

      <div className="rounded-xl border border-black/10 bg-[#9B191F] p-5 text-white dark:border-white/10">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
          React and Next.js Workshop Pt.1
        </p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">
          File Structure
        </h3>
        <p className="mt-1 text-sm text-white/90">
          (Where does everything live?)
        </p>
        <p className="mt-3 text-sm italic text-white/85">
          And what can I safely leave alone without breaking everything?
        </p>
      </div>

      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Open your folder in VS Code
      </h3>
      <p>
        If the project is not open yet, use Terminal (Mac) or CMD (Windows):
      </p>
      <CodeBlock
        language="bash"
        title="Terminal"
        code="code ."
      />
      <Warning title="command not found: code?">
        Open the folder with <strong>File → Open Folder…</strong> for now. On
        Mac, the Command Palette can install the <code>code</code> shell
        command. On Windows, rerun the VS Code installer and enable its PATH
        option. Then open a new terminal.
      </Warning>

      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Project structure
      </h3>

      <div className="grid gap-2 sm:grid-cols-2">
        <TreeRow
          name=".next/"
          hint="Appears after dev/build runs. Generated files—do not touch."
          tone="danger"
        />
        <TreeRow
          name="node_modules/"
          hint="Thousands of packages. Do not touch."
          tone="danger"
        />
        <TreeRow
          name="public/"
          hint="Your images and static files can go here."
          tone="safe"
        />
        <TreeRow
          name="src/"
          hint="Your source-code root—app/ exists now; you add components/ later."
          tone="focus"
        />
        <TreeRow
          name="package.json / package-lock.json"
          hint="Lists the tools your project uses."
          tone="config"
        />
        <TreeRow
          name="next.config.mjs, eslint.config.mjs, jsconfig.json, postcss.config.mjs"
          hint="Settings and config files. Leave these alone for now."
          tone="config"
        />
      </div>

      {/* components vs app — sibling folders inside src */}
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Important: <code>src/components</code> and <code>src/app</code> have
        different jobs
      </h3>
      <p>
        Both folders sit inside <code>src</code>. Learn them as sibling folders
        with two separate jobs.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/40">
          <p className="font-mono text-base font-bold text-zinc-900 dark:text-zinc-100">
            src/components/
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>Store your building blocks here</strong> — especially
            reusable <strong>components</strong> (for example{" "}
            <code>src/components/ProfileCard.js</code>).
          </p>
          <p className="mt-2 rounded-lg bg-emerald-100/80 px-2.5 py-2 text-xs font-medium text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200">
            This folder is not generated for you. You will create it in
            Hands-on #01.
          </p>
          <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
            Think: LEGO pieces you will reuse.
          </p>
        </div>
        <div className="rounded-xl border border-[#9B191F]/40 bg-[#9B191F]/5 p-4 dark:border-[#9B191F]/50 dark:bg-[#9B191F]/10">
          <p className="font-mono text-base font-bold text-zinc-900 dark:text-zinc-100">
            src/app/
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>Pages and routing live here</strong>. Folders and{" "}
            <code>page.js</code> files become URLs (for example{" "}
            <code>src/app/page.js</code> → <code>/</code> →{" "}
            <code>localhost:3000</code> once the server starts).
          </p>
          <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
            Think: which screen the visitor opens.
          </p>
        </div>
      </div>

      <FacilitatorNote>
        Advice from us: today you mainly open files inside{" "}
        <code>src/app/</code> for the home page. When we build the Profile Card,
        we will create components under <code>src/components/</code> (still
        inside <code>src</code>, but <strong>not</strong> inside{" "}
        <code>app</code>).
      </FacilitatorNote>

      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Inside <code>src/app</code> (pages)
      </h3>
      <p>
        Expand <code>src</code> → <code>app</code> in the VS Code sidebar. You
        should see:
      </p>

      <div className="space-y-3">
        <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <p className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            favicon.ico
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            <strong>Site icon</strong> — the tiny icon in the browser tab.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <p className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            globals.css
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            <strong>App-wide styles</strong> and{" "}
            <span className="font-semibold text-[#9B191F] underline">
              Tailwind CSS
            </span>{" "}
            imports. Styles here can affect the whole site.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <p className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            layout.js
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            <strong>Shared UI</strong> that appears on all pages (think navbar /
            footer shell). We will leave this mostly alone today.
          </p>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
          <p className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            page.js
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            <strong>Home page UI</strong> for <code>/</code> — what you see at{" "}
            <code>http://localhost:3000</code> after the next topic starts the
            server. This is the main page file we edit first.
          </p>
        </div>
      </div>

      <Warning title="Safe to tidy?">
        You may change the content <em>inside</em> <code>page.js</code> later.
        Do <strong>not</strong> delete <code>.next</code>,{" "}
        <code>node_modules</code>, or the config files. And remember: components
        go in <code>src/components/</code>, pages stay in <code>src/app/</code>.
      </Warning>

      <div className="rounded-xl border-2 border-dashed border-[#9B191F]/30 p-5 text-center">
        <p className="font-semibold text-zinc-900 dark:text-zinc-100">
          Checkpoint
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Point to <code>src/app</code> (pages and routing), then say where you
          will create <code>src/components</code> (reusable building blocks)
          later. Continue to Build &amp; Test and Routing.
        </p>
      </div>
    </Section>
  );
}
