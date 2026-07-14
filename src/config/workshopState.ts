/**
 * ============================================================================
 * WORKSHOP STATE CONFIGURATION
 * ============================================================================
 *
 * This file controls workshop availability. Day 1 is permanently open. Day 2
 * can be opened globally here or for one browser from the hidden admin page.
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
 * 3. TESTING DAY 2 (unlock for YOUR browser only):
 *    Visit `/admin`. Its Day 2 control writes to localStorage and does not
 *    affect other students.
 * ============================================================================
 */

/** Workshop session dates (shown in locked-state messages). */
export const DAY1_DATE = "15 Jul 2026";
export const DAY2_DATE = "22 Jul 2026";

/** Day 1 is deliberately permanent and cannot be locked from the admin page. */
export const isDay1Unlocked = true;

/** Set to `true` on Day 2 (22 Jul) and redeploy to unlock for everyone. */
export const isDay2Unlocked = false;

/** Key used in localStorage by the /admin page for per-browser Day 2 overrides. */
export const DAY2_STORAGE_KEY = "day2_unlocked";

/** Fired on the same tab after /admin changes a day lock (storage events only cross tabs). */
export const WORKSHOP_UNLOCK_EVENT = "workshop-unlock-change";
