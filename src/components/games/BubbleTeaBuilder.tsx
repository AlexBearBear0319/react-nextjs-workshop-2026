"use client";

/**
 * BubbleTeaBuilder — Day 1 mini-game demonstrating Components & Props.
 *
 * Students click buttons that change "props" (tea color, pearls, sweetness).
 * The Cup component re-renders visually, proving that changing props
 * changes what a component looks like — without rewriting the component itself.
 *
 * This is the React equivalent of passing different ingredients to the same recipe.
 */

import { useState } from "react";

type TeaColor = "milk" | "green" | "black";
type Sweetness = "none" | "half" | "full";

interface CupProps {
  teaColor: TeaColor;
  pearls: boolean;
  sweetness: Sweetness;
}

/** The Cup component — it only knows about the props it receives. */
function Cup({ teaColor, pearls, sweetness }: CupProps) {
  const teaColors: Record<TeaColor, string> = {
    milk: "bg-amber-200",
    green: "bg-emerald-300",
    black: "bg-amber-900",
  };

  const sweetnessLabels: Record<Sweetness, string> = {
    none: "0% sugar",
    half: "50% sugar",
    full: "100% sugar",
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Visual cup */}
      <div className="relative">
        <div className="h-40 w-32 rounded-b-3xl border-4 border-zinc-300 bg-white/20 dark:border-zinc-600">
          <div
            className={`absolute bottom-0 left-0 right-0 rounded-b-2xl ${teaColors[teaColor]} transition-colors duration-500`}
            style={{ height: "75%" }}
          />
          {/* Pearls at the bottom */}
          {pearls && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2.5 w-2.5 rounded-full bg-zinc-800 dark:bg-zinc-900"
                />
              ))}
            </div>
          )}
        </div>
        {/* Lid */}
        <div className="mx-auto h-3 w-36 rounded-full bg-zinc-400 dark:bg-zinc-500" />
        {/* Straw */}
        <div className="absolute -right-2 top-4 h-24 w-2 rounded-full bg-red-400" />
      </div>

      {/* Props display — shows students what values are being passed */}
      <div className="rounded-lg bg-zinc-100 px-4 py-2 font-mono text-xs dark:bg-zinc-800">
        <p>
          teaColor = <span className="text-emerald-600 dark:text-emerald-400">&quot;{teaColor}&quot;</span>
        </p>
        <p>
          pearls = <span className="text-purple-600 dark:text-purple-400">{String(pearls)}</span>
        </p>
        <p>
          sweetness = <span className="text-sky-600 dark:text-sky-400">&quot;{sweetness}&quot;</span>
        </p>
      </div>
      <p className="text-xs text-zinc-500">{sweetnessLabels[sweetness]}</p>
    </div>
  );
}

export function BubbleTeaBuilder() {
  const [teaColor, setTeaColor] = useState<TeaColor>("milk");
  const [pearls, setPearls] = useState(true);
  const [sweetness, setSweetness] = useState<Sweetness>("half");

  return (
    <div className="my-6 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
      <h3 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Bubble Tea Builder
      </h3>
      <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
        Click the buttons below to change the <strong>props</strong> passed to the{" "}
        <code className="rounded bg-zinc-100 px-1 font-mono text-xs dark:bg-zinc-800">&lt;Cup /&gt;</code>{" "}
        component. Watch how the cup updates instantly!
      </p>

      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
        <Cup teaColor={teaColor} pearls={pearls} sweetness={sweetness} />

        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Change Props
          </p>
          <button
            onClick={() => setTeaColor("green")}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            Change to Green Tea
          </button>
          <button
            onClick={() => setTeaColor("black")}
            className="rounded-lg bg-amber-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-950"
          >
            Change to Black Tea
          </button>
          <button
            onClick={() => setTeaColor("milk")}
            className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-amber-500"
          >
            Change to Milk Tea
          </button>
          <button
            onClick={() => setPearls((p) => !p)}
            className="rounded-lg bg-zinc-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            {pearls ? "Remove Pearls" : "Add Pearls"}
          </button>
          <button
            onClick={() =>
              setSweetness((s) =>
                s === "none" ? "half" : s === "half" ? "full" : "none"
              )
            }
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Toggle Sweetness
          </button>
        </div>
      </div>
    </div>
  );
}
