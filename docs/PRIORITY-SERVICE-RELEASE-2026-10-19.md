# Priority service-page release — 19 October 2026

## Scope

Improve three existing commercial pages without adding keyword-variant URLs:

- `/services/seo-for-electricians`
- `/services/seo-for-fence-contractors`
- `/services/seo-for-orthodontists`

Each page now connects an industry-specific customer journey to concrete consulting deliverables, a dated independent public-site walkthrough, a sample implementation brief, and definitions for useful business outcomes. Public businesses are examples of published page organization, not clients or evidence of their search performance. No analytics, rankings, testimonials, or results have been invented for those examples.

Titles and descriptions describe the service buyer's task. Unique questions cover industry-specific decisions. The Local SEO parent and two relevant guides link to the worked examples. The existing URLs, canonicals, service schema, and sitemap architecture remain in place.

## Measurement procedure

The supplied Search Console export ends on 16 October 2026, before this release. It is a baseline, not evidence that the implementation has already improved rankings. Keep the original export private; it is not included in this public repository.

1. In Search Console, inspect the three exact URLs. Check index eligibility, Google's selected canonical, and last crawl. Request indexing after a successful live test when the account permits it. A sitemap submission or indexing request is not a ranking guarantee.
2. Save the release date, deployed commit, and URLs inspected. Keep subsequent substantive edits in the same change log.
3. Use the Web search report, the United States country filter, and an exact page filter for each URL. Record the reporting dates, clicks, impressions, CTR, and average position. Review mobile and desktop separately when there is enough data. Exporting query data with these filters is necessary; separate country and query CSVs cannot be joined to infer a query's country.
4. Review each page's actual query list and group close industry variants together. Separate branded consultant-name searches from commercial non-brand queries. Do not create another page merely for a close wording variant. Search Console omits some queries, so displayed query totals can differ from page totals.
5. Establish a comparable 28-day pre-release window using the connected account. Compare it with complete post-release periods, allowing for reporting delay and the time Google takes to recrawl. Check crawl/index status before attributing a change to the new content.
6. Track confirmed contact-form submissions and contact interactions separately from qualified inquiries, booked meetings, and won projects. Use a consistent lead definition and keep unattributed inquiries visible. Do not infer conversion quality from a phone-link click.

## Review schedule and decisions

| Review | Purpose | Decision |
|---|---|---|
| After recrawl is confirmed | Verify the published page and canonical are indexed | Resolve observed crawling, indexing, or canonical issues before rewriting again |
| 28 complete post-release days | Inspect query relevance, impressions, position distribution, clicks, and inquiry quality | Identify whether the page is appearing for the intended buyer task; record uncertainty at low volume |
| 56 complete days | Compare a second complete period with the same filters | Improve a section only where query evidence or a visitor question identifies a real gap |
| 84 complete days | Assess sustained visibility and qualified inquiries | Reassess competitor usefulness, verifiable proof, offer, and relevant authority work if progress is weak |

A rise in average position alone is insufficient: a changed query mix can move the average. Read query-level trends alongside impressions, clicks, and relevant inquiries. An aggregate average of 10 does not establish that every target query is on page one.

## Next evidence to obtain

- Client-approved electrical, fencing, or orthodontic project material before presenting any niche-specific client case study.
- Consistent live Search Console access for filtered comparisons and indexing checks.
- A real competitor and relevant referring-site review before deciding whether content gaps, reputation, or links are the remaining constraint. Avoid arbitrary link quotas or invented domain metrics.

## Validation

Run `npm test`, `npm run build`, `npm run test:production`, and `git diff --check`. Production checks cover all 66 sitemap pages and ensure the three walkthroughs appear only on their intended industry pages, source links are present, illustrative business URLs are not broken internal links, FAQ answers match schema, metadata is present, and redirects and missing routes behave correctly.
