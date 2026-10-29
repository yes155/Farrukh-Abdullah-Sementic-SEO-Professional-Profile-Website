# GEO consistency release — October 29, 2026

## Problem and behavior

The live optional `/llms.txt` retained superseded article titles, stronger citation promises, and unqualified performance summaries. Most routes also served a different, older identity definition from Home and About. This release aligns navigation and structured data with the maintained site records.

- `/llms.txt` is now a text response built from `CORE_SERVICES`, `getCaseContent`, and the same resolved `getInsightsArticles` records used on the website. It excludes noindex articles and articles canonicalized elsewhere. It includes the evidence hub, workbook, project planner, and measurement template. Project summaries describe work, with a shared qualification about unpublished campaign dates and analytics exports.
- One server component emits the same Person and ProfessionalService graph once in the document head on every route. The legacy duplicate definitions and route-dependent client component are removed. Existing WebSite, Service, Article, and application references use the same entity IDs.
- The Person retains the user-supplied personal profiles, excluding the business listing, the consultancy homepage, and the Zenodo record. The business keeps its GoodFirms company listing and the existing Clutch profile. Its previous links to a human's Wikidata item, a publication, and an authored GitHub resource are removed from `sameAs`.
- Existing visible credential destinations are attached to their corresponding credential objects, rather than the Person's identity array. No destination is invented for the credential without an existing public link.
- The evidence page adds a repeatable observation method and a blank CSV with eight unbranded and two branded starter questions. Dates, engines, country, language, session/search context, exact questions, mentions, citations, source support, and accuracy are separate fields. Referrals and qualified inquiries must be measured separately in analytics and business records.
- The evidence page receives a substantive October 29 revision date. Unchanged case pages and service pages keep their existing content dates. The page inventory remains 68.

## Relationship review and limits

| Reference | Treatment | Basis |
| --- | --- | --- |
| Wikidata Q141886354 | Person profile only | The public EntityData JSON labels Farrukh Abdullah and identifies an instance of human (Q5). This does not establish independent editorial recognition. |
| GoodFirms company URL | Business profile only | Company-profile URL supplied by the user. Live retrieval did not return inspectable content in this session; no new verification claim is made. |
| Clutch business profile | Business profile; existing visible review context retained | Previously inspected public client review. It concerns market research, not verified electrical-contractor SEO outcomes. |
| GitHub `awesome-geo-seo` | Existing visible maintained-resource link on `/evidence` | A resource collection is not the consultancy entity. No new claim that the whole collection is independently validated. |
| Zenodo record 23701870 | Excluded from identity equivalence | A record is not a person or business identity. Direct record API returned 403; do not invent its title, authorship, subject, publication status, or an alternative graph relationship. Reconsider after inspecting the actual record. |
| Other user-supplied personal profile URLs | Retained as supplied | This release does not certify the ownership, activity, or identity accuracy of every external profile. |

The linked source types are not interchangeable: owned implementation history, training, profiles, client feedback, and independent editorial coverage have different evidential value.

## Checks

Passed before publication: `npm test`, `npm run build` (including TypeScript), and `npm run test:production` (68 pages, 20 articles, 9 case studies, 68 consistent head graphs, three crawler user-agent responses, and two redirects). `git diff --check` also passed. The integration suite checks the shared identity in all 68 initial HTML responses, single entity definitions, publisher linkage, existing FAQ/metadata/internal links, current article titles in the AI navigation response, blank CSV integrity, and robots policy plus HTTP responses for three crawler user-agent strings. User-agent simulation is not proof of access from a crawler's verified IP range.

## Not represented as completed

No new client source exports, campaign dates, revenue attribution, publication permission, independent coverage, outreach, achieved AI citations, or ranking improvement are manufactured or claimed. One substantantiated client case still requires the genuine source pack and permission. The observation CSV is a method, not an observed result. No scheduled task is created.

`robots.txt` already permits public pages and protects `/studio`; no policy change is needed. FAQ content and markup remain intact. No fixed paragraph-length formula, new `llms-full.txt`, or irrelevant contractor-business schema is added.

## Primary references

- https://schema.org/sameAs
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://developers.openai.com/api/docs/bots
- https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- https://www.wikidata.org/wiki/Special:EntityData/Q141886354.json
