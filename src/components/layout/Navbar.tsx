"use client";

/**
 * Navbar — sticky glass header with workshop branding + theme toggle.
 * Glassmorphism: backdrop-blur + translucent surface (brief design system).
 */

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-black/10 bg-white/70 px-4 backdrop-blur-md dark:border-[#2a2a3a] dark:bg-[#0a0a0f]/85 lg:px-6">
      <Link
        href="/"
        className="flex min-w-0 items-center gap-2.5 rounded-md outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B191F]"
      >
        <Image
          src="/brand/react-workshop-series.png"
          alt=""
          width={40}
          height={27}
          className="h-7 w-auto shrink-0"
          priority
        />
        <span className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          React Workshop Series
        </span>
      </Link>
      <ThemeToggle />
    </header>
  );
}
