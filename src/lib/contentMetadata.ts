// The substantive revision date, not a build timestamp.
export const EDITORIAL_UPDATED = "2026-10-19";
const PAGE_UPDATES: Record<string, string> = {
  "/": "2026-10-28",
  "/about": "2026-10-29",
  "/evidence": "2026-10-29",
  "/tools/local-seo-audit-workbook": "2026-10-28",
  "/services/local-seo": "2026-10-28",
  "/services/semantic-seo": "2026-10-28",
  "/services/ai-seo-consulting": "2026-10-28",
  "/services/seo-for-electricians": "2026-10-28",
  "/services/seo-for-fence-contractors": "2026-10-28",
  "/services/seo-for-orthodontists": "2026-10-28",
};
export function getPageUpdated(path: string): string {
  if (path.startsWith("/case-studies/")) return "2026-10-28";
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
