/**
 * ============================================================================
 * WORKSHOP STATE CONFIGURATION
 * ============================================================================
 *
 * This file controls whether Day 2 content is visible to ALL visitors
 * (when deployed to production). There is NO database — everything is
 * hardcoded or stored in the browser's localStorage.
 *
 * HOW ORGANIZERS SHOULD USE THIS:
 *
 * 1. BEFORE THE WORKSHOP (Day 1):
 *    Keep `isDay2Unlocked` set to `false`. Students will only see Day 1.
 *
 * 2. ON DAY 2 MORNING (permanent unlock for everyone):
 *    Change this line to `true`, then redeploy the site (e.g. push to
 *    GitHub and let Vercel rebuild). Every student will see Day 2.
 *
 * 3. DURING DAY 1 (unlock for YOUR browser only — for testing):
 *    Visit the hidden admin page at `/admin` and click "Unlock Day 2".
 *    This writes to localStorage and does NOT affect other students.
 *
 * 4. PDF SLIDES:
 *    Search the codebase for "ORGANIZER: Replace this Google Drive link"
 *    to find where to paste your slide download URLs.
 * ============================================================================
 */

/** Set to `true` on Day 2 morning and redeploy to unlock for everyone. */
export const isDay2Unlocked = false;

/** Key used in localStorage by the /admin page for per-browser overrides. */
export const DAY2_STORAGE_KEY = "day2_unlocked";
