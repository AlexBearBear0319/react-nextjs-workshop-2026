/**
 * WorkshopLayout — wraps every page with the sidebar + navbar shell.
 * Import this in each page (or in a shared layout group) to get consistent
 * navigation across the entire workshop site.
 */

import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#EFEFEF] dark:bg-[#0a0a0f]">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="min-w-0 flex-1 overflow-y-auto">
          <div className="mx-auto max-w-4xl px-4 pb-24 pt-8 lg:px-8 lg:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
