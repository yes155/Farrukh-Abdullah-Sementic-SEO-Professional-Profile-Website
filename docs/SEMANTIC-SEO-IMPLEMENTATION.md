# Semantic SEO implementation — 18 October 2026

Scope: implement the 18 findings from the full-site audit against source revision `7ccac6c5b05575ad34f8372078e39cdb08048417`. Production hosting and the main branch are not changed by this review branch.

## Changes by finding

| Finding | Implementation |
|---|---|
| F01 | Replaced timer-driven scores and simulated crawler messages with a clearly described manual-review handoff. URL entry is validated and remains editable in the inquiry form. |
| F02 | Corrected all 20 maintained articles. Removed unsupported ranking/statistical claims; corrected the October 2025 update premise and the Princeton answer-capsule attribution. |
| F03 | Added primary-source links and scope/context to every article. Removed the unsupported city opportunity index and citation multipliers. |
| F04 | Replaced the ad hoc renderer with react-markdown/remark-gfm. Headings, paragraphs, lists, tables, code and links render as separate elements; imported H1s become H2s. Raw HTML is not enabled. |
| F05 | Replaced positional industry linking with explicit relevant relationships. Fence and orthodontist services receive contextual article support. |
| F06 | Replaced industry copy with distinct customer journeys, examples, measurement, scope and limitations. A mixed portfolio is explicitly labeled; niche-specific outcomes are not invented. |
| F07 | Updated city pages with honest remote delivery, distinct planning examples and more relevant reported engagements. General city destinations are labeled accordingly. Unverified ZIP-demand and market assertions were removed. |
| F08 | Lahore now describes a Service delivered by the same Faisalabad provider. Removed the separate unverified Lahore business address and city-center coordinates. |
| F09 | Service geography and provider identities are separate. Removed customer sectors typed as AdministrativeArea. |
| F10 | Missing article metadata/content resolution calls notFound rather than returning a successful Article Not Found page. |
| F11 | Article schema derives from the resolved article record. All 20 maintained articles have matching titles/dates, with optional unsupported word counts omitted. |
| F12 | Reused the canonical Person ID and linked bylines; About is modeled as a ProfilePage. All nine case-study articles reference the same author/provider. |
| F13 | Consolidated estate-agency intent into the US real-estate service with a permanent Next.js redirect. Removed the old URL from navigation and sitemap. |
| F14 | Consolidated tradies intent into contractors with a permanent redirect, preserving useful broad-versus-specialist scope. |
| F15 | All case studies distinguish reported work/outcomes from public evidence and list the records needed to evaluate numerical results. Stock images are labeled. Attributed feedback and client names are preserved. |
| F16 | Added controlled CMS categories and explicit article/service/case/industry relationships. The homepage consumes resolved article data. Newer CMS edits can supersede the approved revisions. |
| F17 | Sitemap uses a recorded substantive revision date and article-specific modification dates, never the build clock. Consolidated URLs are excluded. |
| F18 | Clarified the homepage offer and service scope. Removed unsupported certainty in the primary commercial pages; retained the monochrome/cyan styling and existing identity. |

## Editorial record and CMS precedence

The repository now contains 20 maintained article records, including the two previously CMS-only pages. An older CMS record does not reintroduce the superseded inaccurate copy. A later CMS document modification (_updatedAt) supersedes the revision, even when the editor retains an earlier visible modification date. The merge preserves CMS image, canonical and noIndex controls. It does not edit or delete the underlying CMS documents. The CMS editor now exposes the relationship and substantive-modification fields.

The revision timestamp is recorded in source at the time of this change. It is not regenerated on deployment. Publication dates are preserved. Original case-study publication dates are not invented; the visible revision date and Article dateModified describe this editorial change.

## Permanent URL changes

- `/services/seo-for-estate-agents` → `/services/seo-for-real-estate-agents`
- `/services/seo-for-tradies` → `/services/seo-for-contractors`

Next.js `permanent: true` produces HTTP 308. There are 65 retained sitemap pages: the original 67 minus these two consolidated services. No bulk page deletion is performed.

## Evidence-dependent work

The implementation fixes presentation and unsupported assertions; it does not manufacture missing evidence. Exact campaign baseline/comparison dates, client analytics, attribution exports, ROI calculations, permissions, and current city-specific research still require authentic records. Case pages identify the missing public evidence. City examples are labeled as planning examples, not completed market studies. No new client result, office, affiliation, certification or measured market dataset has been invented.

The audited numerical results remain identified as reported outcomes. They should be replaced or substantiated when the owner supplies the underlying records. The source changes do not independently verify the authenticity of client testimonials or relationships.

## Verification

- Clean `npm ci --no-audit --no-fund` passes after repairing the lockfile.
- `npm test` checks CMS revision precedence, category normalization and article/schema consistency across all 20 records.
- `npm run build` validates production compilation and TypeScript.
- `npm run test:production` starts/stops the built application and `npm run test:seo` checks production HTTP output for all 65 sitemap URLs: status, unique titles, descriptions, canonicals, H1s, valid JSON, source links, article metadata, headings, author identity, active internal destinations, geographic identity, missing routes and permanent redirects.
- `.github/workflows/seo-checks.yml` runs those checks on pull requests and the implementation branch.

No browser interaction or visual verification is claimed. The contact-delivery API is not submitted during tests. Google indexing, ranking changes and client campaign outcomes are not inferred from a passing build or HTTP checks.

## Local verification result

The production HTTP suite passed for 65 retained pages and 20 articles. All 20 articles have external primary-source links, unified Article markup and linked author bylines. Three missing routes were checked with ordinary and Googlebot user agents and returned 404. Both consolidation redirects returned permanent responses. Clean installation, content-model checks, production compilation/TypeScript and whitespace checks pass.

Browser interactions, visual layout and actual inquiry delivery still require separate verification. No production merge or deployment is part of this branch.
