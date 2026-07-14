/**
 * Shared curriculum topic lists — used by Sidebar and day/[topic] routes.
 * `id` must match the URL segment: /day-1/[id], /day-2/[id]
 */

export type CurriculumTopic = {
  id: string;
  label: string;
  group?: string;
  navNumber?: string;
};

export const DAY1_TOPICS: CurriculumTopic[] = [
  {
    id: "why-react-nextjs",
    label: "Why React & Next.js?",
    group: "Teaching & theory",
    navNumber: "1",
  },
  {
    id: "project-setup",
    label: "Project Setup Time",
    group: "Teaching & theory",
    navNumber: "2",
  },
  {
    id: "what-is-jsx",
    label: "What is JSX?",
    group: "Teaching & theory",
    navNumber: "3",
  },
  {
    id: "file-structure",
    label: "File Structure",
    group: "Teaching & theory",
    navNumber: "4",
  },
  {
    id: "build-hot-reload",
    label: "Build, Run & Fast Refresh",
    group: "Teaching & theory",
    navNumber: "5",
  },
  {
    id: "routing",
    label: "Routing — Folders Become URLs",
    group: "Teaching & theory",
    navNumber: "6",
  },
  {
    id: "components",
    label: "Components",
    group: "Teaching & theory",
    navNumber: "7",
  },
  {
    id: "props",
    label: "Props",
    group: "Teaching & theory",
    navNumber: "8",
  },
  {
    id: "tailwind-styling",
    label: "Tailwind CSS Styling",
    group: "Teaching & theory",
    navNumber: "9",
  },
  {
    id: "hands-on-00",
    label: "Clean Up",
    group: "Hands-on practice",
    navNumber: "00",
  },
  {
    id: "hands-on-01",
    label: "ProfileCard",
    group: "Hands-on practice",
    navNumber: "01",
  },
  {
    id: "hands-on-02",
    label: "Add an Image",
    group: "Hands-on practice",
    navNumber: "02",
  },
  {
    id: "hands-on-03",
    label: "About Route",
    group: "Hands-on practice",
    navNumber: "03",
  },
  {
    id: "hands-on-04",
    label: "Style the Card",
    group: "Hands-on practice",
    navNumber: "04",
  },
  {
    id: "day-1-summary",
    label: "What's Next?",
    group: "Wrap-up",
    navNumber: "✓",
  },
];

export const DAY2_TOPICS: CurriculumTopic[] = [
  {
    id: "rendering-fundamentals",
    label: "Rendering — Server & Client",
    group: "Teaching & theory",
    navNumber: "1",
  },
  {
    id: "react-hooks",
    label: "React Hooks — The Big Two",
    group: "Teaching & theory",
    navNumber: "2",
  },
  {
    id: "use-state",
    label: "useState — Component Memory",
    group: "Teaching & theory",
    navNumber: "3",
  },
  {
    id: "use-effect",
    label: "useEffect — Dependencies",
    group: "Teaching & theory",
    navNumber: "4",
  },
  {
    id: "async-fetch",
    label: "Async JavaScript & Fetch",
    group: "Teaching & theory",
    navNumber: "5",
  },
  {
    id: "event-handlers",
    label: "React Event Handlers",
    group: "Teaching & theory",
    navNumber: "6",
  },
  {
    id: "git-github",
    label: "Git & GitHub",
    group: "Teaching & theory",
    navNumber: "7",
  },
  {
    id: "vercel-deploy",
    label: "Deploying to Vercel",
    group: "Teaching & theory",
    navNumber: "8",
  },
  {
    id: "hands-on-01",
    label: "Skills Toggle",
    group: "Hands-on practice",
    navNumber: "01",
  },
  {
    id: "hands-on-02",
    label: "QuoteCard",
    group: "Hands-on practice",
    navNumber: "02",
  },
  {
    id: "hands-on-03",
    label: "Commit & Push",
    group: "Hands-on practice",
    navNumber: "03",
  },
  {
    id: "hands-on-04",
    label: "Go Live",
    group: "Hands-on practice",
    navNumber: "04",
  },
  {
    id: "day-2-summary",
    label: "You Shipped",
    group: "Wrap-up",
    navNumber: "✓",
  },
];

export function topicHref(day: "day-1" | "day-2", topicId: string) {
  return `/${day}/${topicId}`;
}

export function getTopicIndex(
  topics: CurriculumTopic[],
  topicId: string
): number {
  return topics.findIndex((t) => t.id === topicId);
}

export function isValidTopic(
  topics: CurriculumTopic[],
  topicId: string
): boolean {
  return topics.some((t) => t.id === topicId);
}
