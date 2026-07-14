"use client";

import { useId, useState } from "react";

export function Day2Checklist({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}) {
  const id = useId();
  const [checked, setChecked] = useState(() => items.map(() => false));
  const completeCount = checked.filter(Boolean).length;

  return (
    <fieldset className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-900">
      <legend className="px-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {label}
      </legend>
      <div className="mt-2 space-y-2">
        {items.map((item, index) => {
          const itemId = id + "-" + index;

          return (
            <label
              key={item}
              htmlFor={itemId}
              className="flex cursor-pointer items-start gap-3 rounded-lg p-2 text-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/70"
            >
              <input
                id={itemId}
                type="checkbox"
                checked={checked[index]}
                onChange={() =>
                  setChecked((current) =>
                    current.map((value, itemIndex) =>
                      itemIndex === index ? !value : value,
                    ),
                  )
                }
                className="mt-0.5 h-4 w-4 accent-[#9B191F]"
              />
              <span
                className={
                  checked[index]
                    ? "text-zinc-400 line-through dark:text-zinc-500"
                    : "text-zinc-700 dark:text-zinc-300"
                }
              >
                {item}
              </span>
            </label>
          );
        })}
      </div>
      <p
        className="mt-3 border-t border-black/10 pt-3 text-xs font-semibold text-zinc-500 dark:border-white/10 dark:text-zinc-400"
        aria-live="polite"
      >
        {completeCount} of {items.length} complete
      </p>
    </fieldset>
  );
}
