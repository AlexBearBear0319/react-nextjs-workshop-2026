"use client";

/**
 * ThemeProvider wraps the app with next-themes so students can toggle
 * between light and dark mode. The `attribute="class"` strategy adds
 * a `dark` class to <html> when dark mode is active.
 */

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
}
