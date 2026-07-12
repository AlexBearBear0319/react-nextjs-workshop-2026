"use client";

/**
 * CodeBlock — displays syntax-highlighted code with a "Copy to Clipboard" button.
 *
 * Uses Cascadia Code font (loaded globally) and our lightweight highlighter.
 * Students can click "Copy" to paste code directly into VS Code.
 *
 * Props:
 *   code     — the raw code string to display
 *   language — hint for the highlighter (tsx, jsx, bash, css, etc.)
 *   title    — optional label shown in the top-left (e.g. "ProfileCard.tsx")
 */

import { useCallback, useMemo, useState } from "react";
import { highlightCode } from "@/lib/syntaxHighlight";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = "tsx", title }: CodeBlockProps) {
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
      // Fallback for older browsers or non-HTTPS contexts.
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
    <div className="group relative my-4 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-900 dark:border-zinc-700">
      {/* Header bar with title and copy button */}
      <div className="flex items-center justify-between border-b border-zinc-700 bg-zinc-800 px-4 py-2">
        <span className="font-mono text-xs text-zinc-400">
          {title ?? language}
        </span>
        <button
          onClick={handleCopy}
          className="rounded-md px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code area */}
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-zinc-100">
        <code>
          {highlightedLines.map((line, i) => (
            <div key={i} className="table-row">
              <span className="table-cell select-none pr-4 text-right text-xs text-zinc-600">
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
