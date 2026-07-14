"use client";

/**
 * CodeBlock — syntax-highlighted code with Copy to Clipboard.
 *
 * - Cascadia Code via global `.font-mono`
 * - Light + dark chrome (adapts with next-themes)
 * - Beginners can copy snippets straight into VS Code
 */

import { useCallback, useMemo, useState } from "react";
import { highlightCode } from "@/lib/syntaxHighlight";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  copyable?: boolean;
}

export function CodeBlock({
  code,
  language = "tsx",
  title,
  copyable = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const highlightedLines = useMemo(
    () => highlightCode(code.trimEnd(), language),
    [code, language]
  );

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [code]);

  return (
    <div className="group relative my-4 overflow-hidden rounded-xl border border-black/10 bg-zinc-50 dark:border-white/10 dark:bg-zinc-900">
      <div className="flex items-center justify-between border-b border-black/10 bg-white/80 px-4 py-2 backdrop-blur-md dark:border-white/10 dark:bg-black/40">
        <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
          {title ?? language}
        </span>
        {copyable ? (
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-md px-2.5 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-[#9B191F]/10 hover:text-[#9B191F] dark:text-zinc-300 dark:hover:bg-[#9B191F]/20 dark:hover:text-white"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        ) : (
          <span className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
            Concept only
          </span>
        )}
      </div>

      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-zinc-800 dark:text-zinc-100">
        <code>
          {highlightedLines.map((line, i) => (
            <div key={i} className="table-row">
              <span className="table-cell select-none pr-4 text-right text-xs text-zinc-400 dark:text-zinc-600">
                {i + 1}
              </span>
              <span
                className="table-cell"
                dangerouslySetInnerHTML={{ __html: line || "&nbsp;" }}
              />
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
