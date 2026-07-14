"use client";

/**
 * Day 1 — Project Setup Time
 * Simple create-next-app flow (JavaScript + ESLint, no TypeScript), with OS-specific steps.
 */

import { useState, useSyncExternalStore, type ReactNode } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { OsToggle } from "@/components/ui/OsToggle";
import { ProTip } from "@/components/ui/ProTip";
import { Section } from "@/components/ui/Section";
import { Warning } from "@/components/ui/Warning";
import { LessonMeta } from "@/components/workshop/LessonKit";

type Os = "macos" | "windows";

const subscribeToPlatform = () => () => {};

function getDetectedOs(): Os {
  const platform = window.navigator.platform.toLowerCase();
  const ua = window.navigator.userAgent.toLowerCase();
  return platform.includes("win") || ua.includes("windows")
    ? "windows"
    : "macos";
}

const getServerOs = (): Os => "macos";

const SETUP_CHOICES = [
  { prompt: "Ok to proceed?", answer: "y" },
  {
    prompt: "Would you like to use the recommended Next.js defaults?",
    answer: "No, customize settings",
  },
  { prompt: "Would you like to use TypeScript?", answer: "No" },
  { prompt: "Which linter would you like to use?", answer: "ESLint" },
  { prompt: "Would you like to use React Compiler?", answer: "Yes" },
  { prompt: "Would you like to use Tailwind CSS?", answer: "Yes" },
  {
    prompt: "Would you like your code inside a `src/` directory?",
    answer: "Yes",
  },
  {
    prompt: "Would you like to use App Router? (recommended)",
    answer: "Yes",
  },
  {
    prompt: "Would you like to customize the import alias (`@/*` by default)?",
    answer: "No",
  },
  {
    prompt:
      "Would you like to include AGENTS.md to guide coding agents to write up-to-date Next.js code?",
    answer: "No",
  },
] as const;

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9B191F] text-xs font-bold text-white">
          {number}
        </span>
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
      </div>
      <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </div>
  );
}

function CreateAppChoices() {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700">
      <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-400">
        create-next-app choices (same for everyone)
      </div>
      <ul className="divide-y divide-zinc-200 text-sm dark:divide-zinc-700">
        {SETUP_CHOICES.map((item) => (
          <li
            key={item.prompt}
            className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
          >
            <span className="text-zinc-600 dark:text-zinc-400">{item.prompt}</span>
            <span className="shrink-0 font-semibold text-[#9B191F]">
              → {item.answer}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WindowsSetup() {
  return (
    <div className="space-y-4">
      <Step number={1} title="Choose a folder to save your project">
        <p>
          Open <strong>File Explorer</strong> and create a simple folder, for
          example on your Desktop:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            Good: <code>Desktop\workshop</code> or{" "}
            <code>Documents\workshop</code>
          </li>
          <li>
            Avoid folder names with spaces or symbols like{" "}
            <code>&amp;</code>, <code>#</code>, <code>%</code> — these often
            break <code>npm</code> / <code>npx</code> on Windows
          </li>
          <li>
            Prefer a local drive folder. Heavy OneDrive sync folders can lock
            files while <code>node_modules</code> installs
          </li>
        </ul>
      </Step>

      <Step number={2} title="Copy the folder path">
        <ol className="list-inside list-decimal space-y-1">
          <li>Open that folder in File Explorer</li>
          <li>Click the address bar once (so the full path is selected)</li>
          <li>
            Press <strong>Ctrl + C</strong> to copy it
          </li>
        </ol>
        <p>
          Example path:{" "}
          <code>C:\Users\Alex\Desktop\workshop</code>
        </p>
      </Step>

      <Step number={3} title="Open Command Prompt (CMD)">
        <ol className="list-inside list-decimal space-y-1">
          <li>
            Press <strong>Win + R</strong>
          </li>
          <li>
            Type <code>cmd</code> and press Enter
          </li>
        </ol>
        <ProTip>
          Use <strong>Command Prompt</strong> for this workshop (not an old
          PowerShell window that was open before installing Node). A fresh CMD
          window picks up the Node PATH correctly.
        </ProTip>
      </Step>

      <Step number={4} title="Go into that folder with cd">
        <p>
          In CMD, type <code>cd /d </code>, paste your path, then press Enter.
          Keep the quotes if your path has spaces:
        </p>
        <CodeBlock
          language="bash"
          title="Command Prompt"
          code={`cd /d "C:/Users/Alex/Desktop/workshop"`}
        />
        <ul className="list-inside list-disc space-y-1">
          <li>
            <code>/d</code> matters — it also switches drive letters (for
            example from <code>C:</code> to <code>D:</code>)
          </li>
          <li>
            Check you are in the right place: type <code>cd</code> and press
            Enter — it should print your workshop folder path
          </li>
        </ul>
        <Warning title='Common error: "The system cannot find the path specified"'>
          You pasted an incomplete path, or forgot quotes around a path with
          spaces. Copy the path again from File Explorer and retry.
        </Warning>
      </Step>

      <Step number={5} title="Confirm Node.js works">
        <CodeBlock
          language="bash"
          title="Command Prompt"
          code={`node --version
npm --version`}
        />
        <p>
          You should see version numbers (Node should be <strong>v20.9+</strong>).
        </p>
        <Warning title={`Common error: 'node' is not recognized as an internal or external command`}>
          Node is missing from PATH. Install Node.js LTS from the Home page,
          then <strong>close CMD completely</strong> and open a new one. Old
          windows do not refresh PATH.
        </Warning>
      </Step>

      <Step number={6} title="Create the Next.js app">
        <p>
          Stay inside your workshop folder (parent folder), then run:
        </p>
        <CodeBlock
          language="bash"
          title="Command Prompt"
          code={`npx create-next-app@latest my-profile-card`}
        />
        <p>
          If asked <strong>Ok to proceed?</strong>, type <code>y</code> and
          press Enter. Then choose the options below.
        </p>
        <CreateAppChoices />
        <Warning title="Popular Windows issues during create-next-app">
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <strong>Path with &amp; or weird symbols</strong> → move to a
              simple folder name and retry
            </li>
            <li>
              <strong>Permission / EPERM / operation not permitted</strong> →
              close OneDrive sync pause conflicts, avoid creating inside a
              protected system folder, retry in Desktop\workshop
            </li>
            <li>
              <strong>Folder already exists</strong> → delete the half-created{" "}
              <code>my-profile-card</code> folder (or pick a new name) and run
              the command again
            </li>
            <li>
              <strong>Antivirus locking files</strong> → wait a minute and
              retry; exclude the workshop folder if installs keep failing
            </li>
          </ul>
        </Warning>
      </Step>

      <Step number={7} title="Enter the generated project folder">
        <CodeBlock
          language="bash"
          title="Command Prompt"
          code="cd my-profile-card"
        />
        <p>
          Your terminal path should now end with <code>my-profile-card</code>.
          Stop here—we will inspect the generated files before starting the
          development server.
        </p>
      </Step>

      <Step number={8} title="Open the project in VS Code">
        <p>Open the generated project folder:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            In File Explorer, go into <code>my-profile-card</code>
          </li>
          <li>
            Right-click empty space → <strong>Open with Code</strong> (if
            available), or
          </li>
          <li>
            In VS Code: <strong>File → Open Folder…</strong> and select{" "}
            <code>my-profile-card</code>, or
          </li>
          <li>
            From Command Prompt (already inside <code>my-profile-card</code>):
          </li>
        </ul>
        <CodeBlock
          language="bash"
          title="Command Prompt"
          code="code ."
        />
        <Warning title={`'code' is not recognized?`}>
          Use <strong>File → Open Folder…</strong> for now. Later, rerun the VS
          Code installer and enable the PATH option, then open a{" "}
          <strong>new</strong> Command Prompt window.
        </Warning>
        <ProTip title="Windows tip">
          Save files with <strong>Ctrl + S</strong>. After the file tour, the
          Build &amp; Test topic will start the development server and show why
          saving matters.
        </ProTip>
      </Step>
    </div>
  );
}

function MacSetup() {
  return (
    <div className="space-y-4">
      <Step number={1} title="Choose a folder to save your project">
        <p>
          Open <strong>Finder</strong> and create a simple folder, for example
          on your Desktop named <code>workshop</code>.
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            Good: <code>Desktop/workshop</code> or{" "}
            <code>Documents/workshop</code>
          </li>
          <li>
            Avoid spaces and symbols in the folder name when possible
          </li>
          <li>
            If Desktop/Documents are synced with iCloud, waits/freezes during
            install are common — a local folder is safer
          </li>
        </ul>
      </Step>

      <Step number={2} title="Open Terminal in that folder">
        <p>
          <strong>Easiest method:</strong>
        </p>
        <ol className="list-inside list-decimal space-y-1">
          <li>
            In Finder, <strong>right-click</strong> (or Control-click) your{" "}
            <code>workshop</code> folder
          </li>
          <li>
            Choose <strong>New Terminal at Folder</strong> (sometimes under{" "}
            <strong>Services</strong>)
          </li>
        </ol>
        <ProTip title='Don&apos;t see "New Terminal at Folder"?'>
          Enable it once: <strong>System Settings → Keyboard → Keyboard
          Shortcuts → Services → Files and Folders</strong>, then turn on{" "}
          <strong>New Terminal at Folder</strong>. Right-click the folder again.
        </ProTip>
        <p>
          <strong>Backup method</strong> (always works):
        </p>
        <ol className="list-inside list-decimal space-y-1">
          <li>
            Open <strong>Terminal</strong> (Spotlight: Cmd + Space, type
            Terminal)
          </li>
          <li>
            Type <code>cd </code> (with a space), then drag your{" "}
            <code>workshop</code> folder into the Terminal window and press
            Enter
          </li>
        </ol>
        <CodeBlock
          language="bash"
          title="macOS Terminal"
          code={`pwd`}
        />
        <p>
          <code>pwd</code> should print something like{" "}
          <code>/Users/alex/Desktop/workshop</code>.
        </p>
      </Step>

      <Step number={3} title="Confirm Node.js works">
        <CodeBlock
          language="bash"
          title="macOS Terminal"
          code={`node --version
npm --version`}
        />
        <p>
          You should see version numbers (Node should be <strong>v20.9+</strong>).
        </p>
        <Warning title="Common error: command not found: node / npx">
          Install Node.js LTS from the Home page, then{" "}
          <strong>quit Terminal fully</strong> (Cmd + Q) and open it again. If
          you installed Node while Terminal was already open, the old window
          will not see it.
        </Warning>
      </Step>

      <Step number={4} title="Create the Next.js app">
        <p>
          Stay inside your workshop folder (parent folder), then run:
        </p>
        <CodeBlock
          language="bash"
          title="macOS Terminal"
          code={`npx create-next-app@latest my-profile-card`}
        />
        <p>
          If asked <strong>Ok to proceed?</strong>, type <code>y</code> and
          press Enter. Then choose the options below.
        </p>
        <CreateAppChoices />
        <Warning title="Popular macOS issues during create-next-app">
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <strong>Permission denied</strong> → make sure you own the folder
              (create it yourself on Desktop). Do not install into system
              folders
            </li>
            <li>
              <strong>EEXIST / folder already exists</strong> → delete the
              incomplete <code>my-profile-card</code> folder in Finder, then
              rerun the command
            </li>
            <li>
              <strong>Stuck on install / iCloud downloading</strong> → wait for
              cloud sync to finish, or move the workshop folder out of iCloud
              Desktop/Documents
            </li>
            <li>
              <strong>xcode-select / developer tools prompt</strong> → click
              Install and wait; some Macs need Command Line Tools once before
              npm packages finish
            </li>
          </ul>
        </Warning>
      </Step>

      <Step number={5} title="Enter the generated project folder">
        <CodeBlock
          language="bash"
          title="macOS Terminal"
          code="cd my-profile-card"
        />
        <p>
          Your terminal path should now end with <code>my-profile-card</code>.
          Stop here—we will inspect the generated files before starting the
          development server.
        </p>
      </Step>

      <Step number={6} title="Open the project in VS Code">
        <p>Open the generated project folder:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            In Finder, right-click <code>my-profile-card</code> →{" "}
            <strong>Open With → Visual Studio Code</strong>, or
          </li>
          <li>
            In VS Code: <strong>File → Open Folder…</strong> and select{" "}
            <code>my-profile-card</code>, or
          </li>
          <li>
            From Terminal (already inside <code>my-profile-card</code>):
          </li>
        </ul>
        <CodeBlock
          language="bash"
          title="macOS Terminal"
          code="code ."
        />
        <Warning title="command not found: code?">
          Open VS Code, press <strong>Cmd + Shift + P</strong>, run{" "}
          <strong>Shell Command: Install &apos;code&apos; command in PATH</strong>
          , then open a <strong>new</strong> Terminal and try again.
        </Warning>
        <ProTip title="macOS tip">
          Save files with <strong>Cmd + S</strong>. After the file tour, the
          Build &amp; Test topic will start the development server and show why
          saving matters. You can also open Terminal inside VS Code
          later with <strong>Control + `</strong>.
        </ProTip>
      </Step>
    </div>
  );
}

export function ProjectSetupSection() {
  const detectedOs = useSyncExternalStore(
    subscribeToPlatform,
    getDetectedOs,
    getServerOs,
  );
  const [selectedOs, setSelectedOs] = useState<Os | null>(null);
  const os = selectedOs ?? detectedOs;

  return (
    <Section id="project-setup" number={2} title="Project Setup Time">
      <LessonMeta
        slides="28–31"
        outcome="Create the same JavaScript, ESLint, Tailwind, src-directory, and App Router project on Windows or macOS."
      />
      <p className="text-sm font-semibold uppercase tracking-wider text-[#9B191F]">
        Topic 2 · create the project
      </p>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="!mb-0 text-sm text-zinc-500 dark:text-zinc-400">
          Pick your laptop OS — follow only that checklist.
        </p>
        <OsToggle value={os} onChange={setSelectedOs} />
      </div>

      <p>
        We keep setup <strong>simple</strong>: JavaScript only (no TypeScript),
        with <strong>ESLint</strong> on so Day 2 can continue in the same
        project cleanly. First get your terminal into the right folder, then run{" "}
        <code>create-next-app</code>.
      </p>

      <Warning title="Before you start (everyone)">
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>
            Node.js LTS must already be installed (check Home → Prerequisites)
          </li>
          <li>
            Do <strong>not</strong> create a project inside another Next.js /
            React project folder
          </li>
          <li>
            The command creates a <strong>new</strong> folder named{" "}
            <code>my-profile-card</code> inside the folder you opened
          </li>
          <li>
            Stay connected to Wi‑Fi — the first install downloads packages
          </li>
        </ul>
      </Warning>

      {os === "windows" ? <WindowsSetup /> : <MacSetup />}
    </Section>
  );
}
