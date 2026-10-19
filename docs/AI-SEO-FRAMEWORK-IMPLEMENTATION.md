# Visual semantics and topical planning implementation

Editorial revision: 19 October 2026. Site: https://farrukh.top.

## Result

The approved Armadillo case-study design is the shared template for all nine published case studies. The homepage, core services, fourteen industry pages, ten remote-service-area pages, article directory, twenty article pages, About, Contact, and footer now follow clearer page-purpose and reading conventions. A single useful planning tool was added; existing industry pages were not multiplied into redundant tool URLs.

The inventory is 66 canonical sitemap pages: the existing 65 plus `/tools/seo-project-planner`. `CONTENT-MAP.csv` records each page’s visitor task, query-intent class, heading questions, and treatment of wording variants. Regenerate it with `node scripts/export-content-map.mjs`.

## Framework decisions

| Framework module | Implementation | Limits and interpretation |
| --- | --- | --- |
| 1.1–1.3: purpose and visible attributes | Service headers show the offer, real service attributes, initial deliverables, and next action. Case studies show the client and project overview. Articles lead with a title and summary. The planner leads with controls and a useful brief. | These are usability choices, not assertions about an undisclosed ranking weight. No fake price, instant audit, free service claim, or fabricated business location. |
| 1.4: concise, relevant opening | Reduced the homepage and repeated footer directory; removed repeated caution panels. Service and city pages begin with the actual offer. | No keyword stuffing or arbitrary first-2%-of-tokens target. Important information remains readable and complete. |
| 1.5: implementation quality | Removed unnecessary wrappers from editorial sections and redundant presentation. Templates differ by user task: utility, case study, service, directory, or guide. | Shared components remain intentionally reusable. CSS names and DOM structures were not randomized to conceal authorship. |
| 1.6: useful tools | Free browser-based SEO project planner with service-business, SaaS/online-business, and catalog contexts. It produces review priorities and a copyable brief. | No site crawler, invented score, outside request, or forced email capture. The business-type choice changes context; local-profile eligibility is flagged for online businesses. |
| 2.1–2.4: factual and experiential copy | Consultant work descriptions use plain language; testimonials remain attributed and unchanged. Work and customer outcomes are distinct sections. | No rigid three-sentence formula, invented expertise, or manufactured client comments. |
| 2.5: questions and structured content | Native accessible questions on core services, industry pages, city pages, the homepage, and the planner. Visible answers and Question/Answer markup use the same data. | These are answers from the consultant, not user-generated forum posts. FAQ markup does not promise a Google rich result or AI citation. |
| 2.6: natural brevity | Cut filler, repeated warning copy, oversized boilerplate, and jargon. | No AI-detector evasion or numerical length target. |
| 3.1–3.2: topical decisions | Complete 66-page intent inventory with QDP/QDH/QDS planning. Service variants stay together; a guide explains page-versus-heading decisions. | No claim of scraping eight competitors or achieving a 120% coverage threshold. Coverage expansion must answer an actual customer need and have supporting material. |
| 3.3–3.5: publishing and change control | Kept the two existing permanent consolidations and unpublished niche-case-study drafts. Modification dates are recorded, not generated on each build. Legal-page dates remain at the earlier substantive revision. | No randomized publishing, property-aging theater, or automatic freeze merely because a page has impressions. The owner authorized these corrections. |
| 4: entity consistency and external links | Stable consultant/provider identity, truthful remote location statements, descriptive internal links, and existing professional profile links. | No external placements, paid links, consensus seeding, or unsupported attribute claims were published. |
| 5: distribution | The case studies, topic map, and linked guides provide coherent source assets for later distribution. | No accounts, communities, podcasts, IMDb profiles, ebooks, microdomains, or external posts were created. Those need a real publishing purpose and destination-specific instructions. |
| 6: measurement | Updated the measurement guide for the available Search Console Generative AI reporting, with rollout limits, separate platform observations, and business outcomes. The planner has no invented analytics. | This work does not connect Search Console or retrieve server logs. A property’s report availability must be checked in that account. |
| 7: verification | Production checks cover all sitemap pages, unique titles, canonical URLs, one H1, JSON-LD, primary-source links, visible FAQ answers, in-page anchors, redirects, and missing routes. | Browser checks sample shared templates. No claim that an HTML test proves every viewport’s visual quality or predicts rankings. |
| 8: risk handling | Kept layouts faithful to the actual service and user task. | No deceptive storefront, platform automation, mass account creation, or inauthentic publications. |

## Case-study review

| Published account | Editorial treatment |
| --- | --- |
| Armadillo Coffee Roasters | Local discovery narrative; pack visibility and customer discovery attributed to feedback. No stock coffee photo. |
| The Reese Law Center LLC | Homewood firm and practice-page work; doubled calls attributed to the client. |
| Hotel Circa 39 | Property and neighborhood-content work; 35% organic-booking increase attributed to the client. |
| Swag Pro | Catalog access, category/product content, and consolidation; sales outcome attributed to feedback. |
| South Seattle Women’s Fitness | Studio and neighborhood discovery; top-three and member statements attributed to feedback. |
| Simulithic | Content planning and product explanations; removed claims of outperforming invisible competitors or guaranteed AI discovery. No quantified visibility result is asserted. |
| Windcave | Content inventory, overlap, consolidation, and internal relationships. Numerical outcomes remain an engagement account, with no independently verified analytics claimed. |
| Local lead-generation portfolio | Identified as a multi-business portfolio. The ROI calculation and comparison-period limitation remain explicit. |
| Azuno | Analytics-product content narrative, with the existing attributed client quote connected to the account. |

The six unpublished niche placeholders remain unpublished. No anonymous placeholder was promoted into a client success story. Existing client statements are not newly verified by this release; campaign exports and sharing permissions still need the owner’s records.

## Verification and release

Run `npm test`, `npm run build`, `npm run test:production`, and `git diff --check`. The production checks explicitly inspect the nine case pages and the planner, verify accessible native-FAQ content against structured data, and check article table-of-contents destinations.

After deployment, sample the homepage, case-study template, core service, industry page, city page, article, and planner in the browser. Planner changes must alter the suggested service and brief, and copy needs either a success response or an accessible manual-copy fallback. Do not submit a real contact inquiry as a test.

## Primary references checked

- Google, helpful people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google, generative AI optimization: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google, Search spam policies: https://developers.google.com/search/docs/essentials/spam-policies
- Google, Generative AI performance reports and initial limited rollout: https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports
- Google, documentation updates including retired FAQ rich results: https://developers.google.com/search/updates

These support implementation decisions; they do not validate the interview framework’s numerical thresholds or promise ranking outcomes.
