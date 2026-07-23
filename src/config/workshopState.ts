/**
 * ============================================================================
 * WORKSHOP STATE CONFIGURATION
 * ============================================================================
 *
 * This file controls workshop availability. Day 1 is permanently open. Day 2
 * can be opened globally here or for one browser by completing the hidden
 * `/admin` route quest.
 * There is no database.
 *
 * HOW ORGANIZERS SHOULD USE THIS:
 *
 * 1. DAY 1:
 *    Keep `isDay1Unlocked` true. The admin page intentionally has no Day 1
 *    lock control.
 *
 * 2. ON DAY 2 (22 Jul — permanent unlock for everyone):
 *    Change `isDay2Unlocked` to `true`, then redeploy. Every student will
 *    see Day 2.
 *
 * 3. ROUTE QUEST / TESTING (unlock for ONE browser only):
 *    Students discover `/admin`, solve the routing question, and claim the
 *    browser-only key. This writes to localStorage and does not affect others.
 *
 * 4. DAY 2 RECAP:
 *    Auto-unlocks at `DAY2_RECAP_UNLOCK_AT` (23 Jul 2026 00:00 SGT).
 *    Keep `isDay2RecapReady` false until the PDF is in public/slides/, then
 *    flip to true and redeploy. Use `isDay2RecapForceUnlocked` only for testing.
 * ============================================================================
 */

/** Workshop session dates (shown in locked-state messages). */
export const DAY1_DATE = "15 Jul 2026";
export const DAY2_DATE = "22 Jul 2026";

/**
 * Day 2 Recap auto-unlocks at this instant (Singapore / Asia/Singapore).
 * Students do not need a redeploy after the clock passes.
 */
export const DAY2_RECAP_UNLOCK_AT = "2026-07-23T00:00:00+08:00";
export const DAY2_RECAP_UNLOCK_LABEL = "23 Jul 2026, 00:00 SGT";

/**
 * Flip to `true` after the Day 2 PDF is uploaded under public/slides/.
 * Until then the unlocked page shows Coming Soon + Telegram notice.
 */
export const isDay2RecapReady = true;

/** Organizer override for testing Day 2 Recap before the unlock clock. */
export const isDay2RecapForceUnlocked = false;

/** Day 1 is deliberately permanent and cannot be locked from the admin page. */
export const isDay1Unlocked = true;

/** Set to `true` on Day 2 (22 Jul) and redeploy to unlock for everyone. */
export const isDay2Unlocked = false;

/** Key used by the /admin route quest for per-browser Day 2 overrides. */
export const DAY2_STORAGE_KEY = "day2_unlocked";

/** Fired on the same tab after /admin changes a day lock (storage events only cross tabs). */
export const WORKSHOP_UNLOCK_EVENT = "workshop-unlock-change";
