// The substantive revision date, not a build timestamp.
export const EDITORIAL_UPDATED = "2026-10-19";
const PAGE_UPDATES: Record<string, string> = {
  "/services/seo-for-electricians": "2026-10-21",
};
export function getPageUpdated(path: string): string {
  return PAGE_UPDATES[path] || EDITORIAL_UPDATED;
}
export function validISODate(value?: string): string | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}
export function displayDate(value: string): string {
  const iso = validISODate(value);
  return iso ? new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }) : value;
}
