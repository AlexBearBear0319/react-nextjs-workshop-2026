"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

type LabShellProps = {
  eyebrow: string;
  title: string;
  titleId: string;
  description: string;
  children: ReactNode;
};

function LabShell({
  eyebrow,
  title,
  titleId,
  description,
  children,
}: LabShellProps) {
  return (
    <section
      aria-labelledby={titleId}
      className="my-6 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-900"
    >
      <div className="border-b border-black/10 bg-gradient-to-br from-[#9B191F]/10 via-white to-amber-50 px-5 py-5 dark:border-white/10 dark:from-[#9B191F]/25 dark:via-zinc-900 dark:to-amber-950/20 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B191F] dark:text-red-300">
          {eyebrow}
        </p>
        <h3
          id={titleId}
          className="mt-1 text-xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-2xl"
        >
          {title}
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </section>
  );
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B191F] focus-visible:ring-offset-2 dark:focus-visible:ring-red-300 dark:focus-visible:ring-offset-zinc-900";

const primaryButton = `${focusRing} rounded-lg bg-[#9B191F] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7f1419] disabled:cursor-not-allowed disabled:opacity-45 motion-reduce:transition-none dark:bg-red-700 dark:hover:bg-red-600`;

const secondaryButton = `${focusRing} rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 motion-reduce:transition-none dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800`;

const INITIAL_HEADING = "Welcome to my profile";

function plainHeadingText(value: string) {
  return value.replace(/[<>{}]/g, "");
}

function headingAsJsxSource(value: string) {
  return value.replace(
    /&(?=(?:#\d+|#x[\da-f]+|[a-z][\da-z]+);)/gi,
    "&amp;",
  );
}

const REFRESH_STEPS = [
  {
    label: "Edit",
    detail: "Change the JSX in page.js",
  },
  {
    label: "Save",
    detail: "Save the file in your editor",
  },
  {
    label: "Fast Refresh",
    detail: "The Next.js dev server processes the edit",
  },
  {
    label: "Browser",
    detail: "React renders the updated screen",
  },
] as const;

/**
 * A local simulation of the edit-and-save feedback loop used by `next dev`.
 * It deliberately makes no file-system or network changes.
 */
export function HotReloadVisualizer() {
  const [draftHeading, setDraftHeading] = useState(INITIAL_HEADING);
  const [browserHeading, setBrowserHeading] = useState(INITIAL_HEADING);
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [message, setMessage] = useState(
    "Change the heading, then save the file to start the simulation.",
  );
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => timers.current.forEach(clearTimeout);
  }, []);

  const hasVisibleText = draftHeading.trim().length > 0;
  const hasUnsavedChanges = draftHeading !== browserHeading;
  const draftHeadingSource = headingAsJsxSource(draftHeading);

  function stopTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  function updateDraft(nextHeading: string) {
    if (isRunning) {
      stopTimers();
      setIsRunning(false);
    }

    setDraftHeading(nextHeading);
    setActiveStep(0);
    setIsComplete(false);
    setMessage(
      !nextHeading.trim()
        ? "Enter some visible heading text before saving."
        : nextHeading === browserHeading
          ? "The editor and browser already match. Make a change to continue."
          : "The editor has an unsaved change. Select Save file when you are ready.",
    );
  }

  function saveFile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!hasVisibleText || !hasUnsavedChanges || isRunning) return;

    const savedHeading = draftHeading;
    stopTimers();
    setIsRunning(true);
    setIsComplete(false);
    setActiveStep(1);
    setMessage("File saved. The Next.js development server noticed the edit.");

    timers.current.push(
      setTimeout(() => {
        setActiveStep(2);
        setMessage(
          "Fast Refresh is updating the component without a manual browser refresh.",
        );
      }, 650),
      setTimeout(() => {
        setBrowserHeading(savedHeading);
        setActiveStep(3);
        setIsRunning(false);
        setIsComplete(true);
        setMessage(
          "Browser updated. Your saved JSX is now visible in the preview.",
        );
      }, 1350),
    );
  }

  function reset() {
    stopTimers();
    setDraftHeading(INITIAL_HEADING);
    setBrowserHeading(INITIAL_HEADING);
    setActiveStep(0);
    setIsRunning(false);
    setIsComplete(false);
    setMessage(
      "Simulation reset. Change the heading, then save the file to begin.",
    );
  }

  return (
    <LabShell
      eyebrow="Development loop"
      title="See edit → save → Fast Refresh → browser"
      titleId="hot-reload-visualizer-title"
      description="When npm run dev is running, Next.js watches your project. Edit the heading and save it to see the same feedback loop you use while building."
    >
      <ol
        aria-label="Fast Refresh flow"
        className="grid gap-2 sm:grid-cols-4"
      >
        {REFRESH_STEPS.map((step, index) => {
          const isActive = index === activeStep && !isComplete;
          const isDone = isComplete || index < activeStep;

          return (
            <li
              key={step.label}
              aria-current={isActive ? "step" : undefined}
              className={`relative rounded-xl border p-3 ${
                isActive
                  ? "border-[#9B191F] bg-[#9B191F]/5 dark:border-red-400 dark:bg-[#9B191F]/20"
                  : isDone
                    ? "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30"
                    : "border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950/50"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    isActive
                      ? "bg-[#9B191F] text-white dark:bg-red-400 dark:text-zinc-950"
                      : isDone
                        ? "bg-emerald-600 text-white"
                        : "bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  {isDone ? "✓" : index + 1}
                </span>
                <span className="font-semibold text-zinc-950 dark:text-white">
                  {step.label}
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                {step.detail}
              </p>
              {index < REFRESH_STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white px-1 text-zinc-400 dark:bg-zinc-900 sm:block"
                >
                  →
                </span>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <form
          onSubmit={saveFile}
          className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950"
        >
          <div className="flex items-center justify-between gap-3 border-b border-zinc-700 bg-zinc-900 px-4 py-2">
            <span className="font-mono text-xs text-zinc-400">
              src/app/page.js
            </span>
            <span
              className={`rounded-full px-2 py-1 text-[11px] font-bold ${
                hasUnsavedChanges
                  ? "bg-amber-400/15 text-amber-300"
                  : "bg-emerald-400/15 text-emerald-300"
              }`}
            >
              {hasUnsavedChanges ? "Unsaved" : "Saved"}
            </span>
          </div>

          <div className="p-4">
            <pre className="overflow-x-auto font-mono text-xs leading-7 text-zinc-300 sm:text-sm">
              <code>
                <span className="text-violet-300">export default function</span>
                {" Home() {"}
                {"\n"}
                <span className="text-violet-300">{"  return ("}</span>
                {"\n"}
                <span className="text-zinc-500">{"    <h1>"}</span>
                <span className="text-amber-300">{draftHeadingSource}</span>
                <span className="text-zinc-500">{"</h1>"}</span>
                {"\n"}
                <span className="text-violet-300">{"  )"}</span>
                {"\n"}
                {"}"}
              </code>
            </pre>

            <label
              htmlFor="hot-reload-heading"
              className="mt-5 block text-sm font-semibold text-zinc-100"
            >
              Edit the heading text
            </label>
            <input
              id="hot-reload-heading"
              type="text"
              value={draftHeading}
              maxLength={60}
              onChange={(event) =>
                updateDraft(plainHeadingText(event.target.value))
              }
              aria-describedby="hot-reload-heading-help"
              className={`${focusRing} mt-2 w-full rounded-lg border border-zinc-600 bg-zinc-900 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500`}
            />
            <p
              id="hot-reload-heading-help"
              className="mt-2 text-xs leading-5 text-zinc-400"
            >
              Enter plain heading text, then press Enter or select Save file.
              JSX symbols are ignored, and this simulation does not edit your
              real project.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="submit"
                disabled={!hasVisibleText || !hasUnsavedChanges || isRunning}
                className={primaryButton}
              >
                {isRunning ? "Refreshing…" : "Save file"}
              </button>
              <button type="button" onClick={reset} className={secondaryButton}>
                Reset
              </button>
            </div>
          </div>
        </form>

        <div
          aria-busy={isRunning}
          className="flex min-h-80 flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950/50"
        >
          <div className="flex items-center gap-2 border-b border-zinc-200 bg-white px-4 py-2.5 dark:border-zinc-700 dark:bg-zinc-900">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-red-400"
            />
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-amber-400"
            />
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-emerald-400"
            />
            <span className="ml-2 rounded-md bg-zinc-100 px-3 py-1 font-mono text-[11px] text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
              localhost:3000
            </span>
          </div>
          <div className="flex flex-1 items-center justify-center p-6 text-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9B191F] dark:text-red-300">
                Browser preview
              </p>
              <h4 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
                {browserHeading}
              </h4>
              <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                {hasUnsavedChanges
                  ? "The browser still shows the last saved version."
                  : "The browser and saved file match."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="mt-4 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium leading-6 text-blue-900 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-200"
      >
        {message}
      </div>

      <p className="mt-3 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
        Fast Refresh usually preserves temporary state in function components,
        but some edits require a full reload or reset state. It is a development
        feature, not the production build.
      </p>
    </LabShell>
  );
}

type RouteId = "home" | "about" | "profile";

const ROUTES: ReadonlyArray<{
  id: RouteId;
  label: string;
  folder: string;
  path: string;
  url: string;
  defaultFunction: string;
  heading: string;
}> = [
  {
    id: "home",
    label: "Home",
    folder: "No extra folder",
    path: "src/app/page.js",
    url: "/",
    defaultFunction: "Home",
    heading: "Home page",
  },
  {
    id: "about",
    label: "About",
    folder: "about",
    path: "src/app/about/page.js",
    url: "/about",
    defaultFunction: "About",
    heading: "About me",
  },
  {
    id: "profile",
    label: "Profile",
    folder: "profile",
    path: "src/app/profile/page.js",
    url: "/profile",
    defaultFunction: "Profile",
    heading: "My profile",
  },
];

function safeFunctionName(value: string) {
  const validCharacters = value.replace(/[^A-Za-z0-9_$]/g, "");
  return validCharacters.replace(/^[0-9]+/, "");
}

const RESERVED_FUNCTION_NAMES = new Set([
  "arguments",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "eval",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "null",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
]);

function isValidFunctionName(value: string) {
  return (
    /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value) &&
    !RESERVED_FUNCTION_NAMES.has(value)
  );
}

export function RouteMapper() {
  const [routeId, setRouteId] = useState<RouteId>("home");
  const [functionName, setFunctionName] = useState("Home");
  const [message, setMessage] = useState(
    "The root page file maps to /. It does not need a home folder.",
  );

  const route = ROUTES.find((candidate) => candidate.id === routeId) ?? ROUTES[0];
  const functionNameIsValid = isValidFunctionName(functionName);
  const displayedFunctionName = functionNameIsValid ? functionName : "Page";

  function chooseRoute(nextRoute: (typeof ROUTES)[number]) {
    setRouteId(nextRoute.id);
    setFunctionName(nextRoute.defaultFunction);
    setMessage(
      `${nextRoute.path} maps to ${nextRoute.url}. The folders and page.js file decide the URL.`,
    );
  }

  function reset() {
    setRouteId("home");
    setFunctionName("Home");
    setMessage("Reset to the home route: src/app/page.js maps to /.");
  }

  return (
    <LabShell
      eyebrow="Folder-to-route map"
      title="Build a route by placing page.js"
      titleId="route-mapper-title"
      description="Choose a page, inspect the folder path, then rename its JavaScript function. The file location controls the URL; the function name does not."
    >
      <fieldset>
        <legend className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Which page do you want to create?
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {ROUTES.map((candidate) => {
            const selected = candidate.id === routeId;

            return (
              <button
                key={candidate.id}
                type="button"
                aria-pressed={selected}
                onClick={() => chooseRoute(candidate)}
                className={`${focusRing} rounded-xl border p-4 text-left transition-colors motion-reduce:transition-none ${
                  selected
                    ? "border-[#9B191F] bg-[#9B191F]/5 dark:border-red-400 dark:bg-[#9B191F]/20"
                    : "border-zinc-200 bg-zinc-50 hover:border-zinc-300 hover:bg-white dark:border-zinc-700 dark:bg-zinc-950/50 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
                }`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-bold text-zinc-950 dark:text-white">
                    {candidate.label}
                  </span>
                  <code
                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                      selected
                        ? "bg-[#9B191F] text-white dark:bg-red-400 dark:text-zinc-950"
                        : "bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200"
                    }`}
                  >
                    {candidate.url}
                  </code>
                </span>
                <code className="mt-3 block break-all text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                  {candidate.path}
                </code>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-950/50">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
            File tree
          </p>
          <div className="mt-4 space-y-2 font-mono text-sm text-zinc-700 dark:text-zinc-300">
            <p>📁 src</p>
            <p className="pl-5">└─ 📁 app</p>
            {route.id === "home" ? (
              <p className="pl-10 font-bold text-[#9B191F] dark:text-red-300">
                └─ 📄 page.js
              </p>
            ) : (
              <>
                <p className="pl-10 font-bold text-[#9B191F] dark:text-red-300">
                  └─ 📁 {route.folder}
                </p>
                <p className="pl-16 font-bold text-[#9B191F] dark:text-red-300">
                  └─ 📄 page.js
                </p>
              </>
            )}
          </div>

          <dl className="mt-5 grid gap-3">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-zinc-900">
              <dt className="text-[11px] font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Folder to create
              </dt>
              <dd className="mt-1 font-mono text-sm font-semibold text-zinc-950 dark:text-white">
                {route.folder}
              </dd>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-zinc-900">
              <dt className="text-[11px] font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Required file path
              </dt>
              <dd className="mt-1 break-all font-mono text-sm font-semibold text-zinc-950 dark:text-white">
                {route.path}
              </dd>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-zinc-900">
              <dt className="text-[11px] font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Browser URL
              </dt>
              <dd className="mt-1 font-mono text-lg font-bold text-[#9B191F] dark:text-red-300">
                localhost:3000{route.url}
              </dd>
            </div>
          </dl>
        </div>

        <div className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950">
          <div className="flex items-center justify-between gap-3 border-b border-zinc-700 bg-zinc-900 px-4 py-2">
            <span className="break-all font-mono text-xs text-zinc-400">
              {route.path}
            </span>
            <span className="shrink-0 rounded-full bg-blue-400/15 px-2 py-1 text-[11px] font-bold text-blue-300">
              URL: {route.url}
            </span>
          </div>
          <div className="p-4">
            <pre className="overflow-x-auto font-mono text-xs leading-7 text-zinc-300 sm:text-sm">
              <code>
                <span className="text-violet-300">export default function</span>
                <span className="text-amber-300">
                  {` ${displayedFunctionName}`}
                </span>
                {"() {"}
                {"\n"}
                <span className="text-violet-300">{"  return ("}</span>
                {"\n"}
                <span className="text-zinc-500">{"    <h1>"}</span>
                <span className="text-emerald-300">{route.heading}</span>
                <span className="text-zinc-500">{"</h1>"}</span>
                {"\n"}
                <span className="text-violet-300">{"  )"}</span>
                {"\n"}
                {"}"}
              </code>
            </pre>

            <label
              htmlFor="route-function-name"
              className="mt-5 block text-sm font-semibold text-zinc-100"
            >
              Try renaming the function
            </label>
            <input
              id="route-function-name"
              type="text"
              value={functionName}
              maxLength={30}
              spellCheck={false}
              onChange={(event) =>
                setFunctionName(safeFunctionName(event.target.value))
              }
              onBlur={() =>
                setMessage(
                  functionNameIsValid
                    ? "The function is now " +
                        displayedFunctionName +
                        ", but the URL is still " +
                        route.url +
                        ". Function names do not create routes."
                    : "That is not a valid JavaScript function name, so the preview uses Page. The URL is still " +
                        route.url +
                        ".",
                )
              }
              aria-invalid={!functionNameIsValid}
              aria-describedby="route-function-name-help"
              className={`${focusRing} mt-2 w-full rounded-lg border border-zinc-600 bg-zinc-900 px-3 py-2.5 font-mono text-sm text-white`}
            />
            <p
              id="route-function-name-help"
              className={
                functionNameIsValid
                  ? "mt-2 text-xs leading-5 text-zinc-400"
                  : "mt-2 text-xs leading-5 text-amber-300"
              }
            >
              {functionNameIsValid
                ? "Use letters, numbers, _ or $. Watch the URL badge—it stays the same."
                : "Enter a non-reserved JavaScript name. The preview temporarily uses Page."}
            </p>
          </div>
        </div>
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium leading-6 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-200"
      >
        {message}
      </div>

      <div className="mt-4 flex flex-col gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold text-amber-950 dark:text-amber-200">
            Home route trap
          </p>
          <p className="mt-1 text-sm leading-6 text-amber-900 dark:text-amber-100">
            <code>src/app/page.js</code> creates <code>/</code>. If you create
            {" "}
            <code>src/app/home/page.js</code>, Next.js creates <code>/home</code>,
            not the home URL.
          </p>
        </div>
        <button type="button" onClick={reset} className={secondaryButton}>
          Reset map
        </button>
      </div>
    </LabShell>
  );
}

type UtilityOption = {
  label: string;
  className: string;
};

const BACKGROUNDS: readonly UtilityOption[] = [
  { label: "White", className: "bg-white" },
  { label: "Soft red", className: "bg-red-100" },
  { label: "Sky", className: "bg-sky-100" },
  { label: "Amber", className: "bg-amber-100" },
];

const CORNERS: readonly UtilityOption[] = [
  { label: "Square", className: "rounded-none" },
  { label: "Small", className: "rounded-lg" },
  { label: "Large", className: "rounded-2xl" },
  { label: "Extra large", className: "rounded-3xl" },
];

const PADDING: readonly UtilityOption[] = [
  { label: "Compact", className: "p-3" },
  { label: "Comfortable", className: "p-5" },
  { label: "Spacious", className: "p-8" },
];

const SHADOWS: readonly UtilityOption[] = [
  { label: "None", className: "shadow-none" },
  { label: "Small", className: "shadow-sm" },
  { label: "Large", className: "shadow-lg" },
  { label: "Extra large", className: "shadow-2xl" },
];

type UtilityPickerProps = {
  legend: string;
  options: readonly UtilityOption[];
  selected: string;
  onSelect: (option: UtilityOption) => void;
};

function UtilityPicker({
  legend,
  options,
  selected,
  onSelect,
}: UtilityPickerProps) {
  return (
    <fieldset className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-950/50">
      <legend className="px-1 text-xs font-bold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
        {legend}
      </legend>
      <div className="mt-1 flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = option.className === selected;

          return (
            <button
              key={option.className}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(option)}
              className={`${focusRing} rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-colors motion-reduce:transition-none ${
                isSelected
                  ? "border-[#9B191F] bg-[#9B191F] text-white dark:border-red-400 dark:bg-red-700"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-500"
              }`}
            >
              <span className="block">{option.label}</span>
              <code
                className={`mt-0.5 block text-[10px] ${
                  isSelected
                    ? "text-red-100"
                    : "text-zinc-500 dark:text-zinc-400"
                }`}
              >
                {option.className}
              </code>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function TailwindCardPlayground() {
  const [background, setBackground] = useState("bg-white");
  const [corners, setCorners] = useState("rounded-2xl");
  const [padding, setPadding] = useState("p-5");
  const [shadow, setShadow] = useState("shadow-lg");
  const [message, setMessage] = useState(
    "Choose a utility. The className and card preview update together.",
  );

  const generatedClassName = [
    "mx-auto",
    "w-full",
    "max-w-sm",
    "border",
    "border-zinc-200",
    "text-zinc-900",
    "transition-all",
    "duration-200",
    "motion-reduce:transition-none",
    background,
    corners,
    padding,
    shadow,
  ].join(" ");

  function chooseUtility(
    group: string,
    option: UtilityOption,
    update: (value: string) => void,
  ) {
    update(option.className);
    setMessage(
      `${group} changed to ${option.className}. The preview updated immediately.`,
    );
  }

  function reset() {
    setBackground("bg-white");
    setCorners("rounded-2xl");
    setPadding("p-5");
    setShadow("shadow-lg");
    setMessage("Card reset to the starting Tailwind utilities.");
  }

  return (
    <LabShell
      eyebrow="Tailwind playground"
      title="Change utility classes and watch the card"
      titleId="tailwind-card-playground-title"
      description="Mix one background, corner, padding, and shadow utility. Each class changes one visual job, so you can experiment without writing a separate CSS rule."
    >
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/30">
        <p className="text-sm font-bold text-blue-950 dark:text-blue-200">
          Tailwind goes in <code>className</code>
        </p>
        <p className="mt-1 text-sm leading-6 text-blue-900 dark:text-blue-100">
          In React, write <code>className=&quot;rounded-2xl bg-white p-5&quot;</code>.
          The <code>style={"{{ ... }}"}</code> prop is React&apos;s inline CSS—it is
          not where Tailwind utility names go.
        </p>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="grid content-start gap-3 sm:grid-cols-2">
          <UtilityPicker
            legend="1. Background"
            options={BACKGROUNDS}
            selected={background}
            onSelect={(option) =>
              chooseUtility("Background", option, setBackground)
            }
          />
          <UtilityPicker
            legend="2. Rounded corners"
            options={CORNERS}
            selected={corners}
            onSelect={(option) =>
              chooseUtility("Corners", option, setCorners)
            }
          />
          <UtilityPicker
            legend="3. Padding"
            options={PADDING}
            selected={padding}
            onSelect={(option) =>
              chooseUtility("Padding", option, setPadding)
            }
          />
          <UtilityPicker
            legend="4. Shadow"
            options={SHADOWS}
            selected={shadow}
            onSelect={(option) => chooseUtility("Shadow", option, setShadow)}
          />
        </div>

        <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-100 p-4 dark:border-zinc-700 dark:bg-zinc-950 sm:p-6">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
            Live profile-card preview
          </p>
          <article
            className={generatedClassName}
          >
            <div className="flex items-center gap-3">
              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#9B191F] text-lg font-bold text-white"
              >
                A
              </div>
              <div className="min-w-0">
                <h4 className="truncate font-bold">Alex&apos;s Profile</h4>
                <p className="text-sm text-zinc-600">React beginner</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-700">
              I am learning how small Tailwind utilities combine into a complete
              design.
            </p>
            <div className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
              {["React", "Next.js", "Tailwind CSS"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-zinc-900 px-2.5 py-1 text-xs font-semibold text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950">
        <div className="flex items-center justify-between gap-3 border-b border-zinc-700 bg-zinc-900 px-4 py-2">
          <span className="font-mono text-xs text-zinc-400">
            Generated className
          </span>
          <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[11px] font-bold text-emerald-300">
            Live
          </span>
        </div>
        <pre
          className="overflow-x-auto whitespace-pre-wrap break-words p-4 font-mono text-xs leading-6 text-zinc-300 sm:text-sm"
        >
          <code>
            <span className="text-zinc-500">{"<article "}</span>
            <span className="text-violet-300">className</span>
            <span className="text-zinc-100">=&quot;</span>
            <span className="text-amber-300">{generatedClassName}</span>
            <span className="text-zinc-100">&quot;</span>
            <span className="text-zinc-500">{" />"}</span>
          </code>
        </pre>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          aria-live="polite"
          aria-atomic="true"
          className="text-sm font-medium leading-6 text-zinc-700 dark:text-zinc-300"
        >
          {message}
        </p>
        <button
          type="button"
          onClick={reset}
          className={`${secondaryButton} shrink-0`}
        >
          Reset card
        </button>
      </div>
    </LabShell>
  );
}
