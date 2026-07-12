"use client";

/**
 * StateVisualizer — Day 2 mini-game demonstrating useState and re-renders.
 *
 * Split-screen layout:
 *   LEFT  — a simulated code editor showing useState(0) and setCount(count + 1)
 *   RIGHT — a live counter button
 *
 * When the student clicks the button, the relevant code line highlights
 * and the counter updates, visually connecting "state changed" → "UI re-rendered".
 */

import { useCallback, useState } from "react";

type HighlightedLine = "none" | "useState" | "setCount" | "render";

export function StateVisualizer() {
  const [count, setCount] = useState(0);
  const [highlighted, setHighlighted] = useState<HighlightedLine>("none");
  const [clickLog, setClickLog] = useState<string[]>([]);

  const handleClick = useCallback(() => {
    // Step 1: highlight setCount line
    setHighlighted("setCount");
    setClickLog((prev) => [...prev, `setCount(${count} + 1) called`]);

    // Step 2: after a brief pause, update state and highlight useState
    setTimeout(() => {
      setCount((c) => c + 1);
      setHighlighted("useState");

      // Step 3: show re-render
      setTimeout(() => {
        setHighlighted("render");
        setClickLog((prev) => [...prev, `Component re-rendered with count = ${count + 1}`]);
        setTimeout(() => setHighlighted("none"), 800);
      }, 400);
    }, 400);
  }, [count]);

  const lineClass = (line: HighlightedLine) => {
    const base = "block rounded px-2 py-0.5 transition-all duration-300 font-mono text-sm";
    if (highlighted === line) {
      return `${base} bg-yellow-400/30 text-yellow-200 ring-1 ring-yellow-400/50`;
    }
    return `${base} text-zinc-300`;
  };

  return (
    <div className="my-6 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
      <h3 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        State Visualizer
      </h3>
      <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
        Click the button on the right. Watch the code on the left light up as React
        updates state and re-renders the component.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Left: simulated code */}
        <div className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900">
          <div className="border-b border-zinc-700 bg-zinc-800 px-4 py-2">
            <span className="font-mono text-xs text-zinc-400">Counter.tsx</span>
          </div>
          <pre className="p-4 font-mono text-sm leading-7">
            <code>
              <span className="text-purple-400">&quot;use client&quot;</span>
              {"\n\n"}
              <span className="text-purple-400">import</span>
              {" { useState } "}
              <span className="text-purple-400">from</span>
              {' "react"'}
              {"\n\n"}
              <span className="text-purple-400">export default function</span>
              {" Counter() {"}
              {"\n"}
              <span className={lineClass("useState")}>
                {"  const [count, setCount] = useState("}
                <span className="text-amber-400">{count}</span>
                {")"}
              </span>
              {"\n\n"}
              <span className="text-purple-400">  return</span>
              {" ("}
              {"\n"}
              <span className={lineClass("render")}>
                {"    <button onClick={() => {"}
              </span>
              {"\n"}
              <span className={lineClass("setCount")}>
                {"      setCount(count + 1)"}
              </span>
              {"\n"}
              {"    }}>"}
              {"\n"}
              {"      Clicked "}
              <span className="text-emerald-400">{`{count}`}</span>
              {" times"}
              {"\n"}
              {"    </button>"}
              {"\n"}
              {"  )"}
              {"\n"}
              {"}"}
            </code>
          </pre>
        </div>

        {/* Right: live UI */}
        <div className="flex flex-col items-center justify-center gap-6 rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-700 dark:bg-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Live Preview</p>
          <button
            onClick={handleClick}
            className="rounded-xl bg-[#9B191F] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            Clicked {count} times
          </button>

          {/* Execution log */}
          {clickLog.length > 0 && (
            <div className="w-full max-w-xs">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Execution Log
              </p>
              <div className="max-h-32 overflow-y-auto rounded-lg bg-zinc-900 p-3 font-mono text-xs text-emerald-400">
                {clickLog.map((entry, i) => (
                  <p key={i} className="mb-1">
                    → {entry}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
