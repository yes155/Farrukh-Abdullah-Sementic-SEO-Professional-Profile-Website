# Research, writing, and public work — October 29, 2026

The About page previously linked to the evidence hub without displaying the consultant's registered research deposit and published article. Add three shared cards: the research deposit, authored Connectively article, and public implementation history for this website. Use the existing light surfaces, borders, spacing, and typography; keep the TechBehemoths verification snippet intact.

## Sources and labels

- DataCite's public metadata for DOI `10.5281/zenodo.23701870` identifies Farrukh Abdullah as creator, ORCID `0009-0001-9570-3897`, publisher Zenodo, and an issue date of October 27, 2026. The registered title is “Entity-First Generative Engine Optimization (GEO): Structuring Machine-Readable Knowledge Graphs for AI Search Citation.” The record is presented as a research deposit, without peer-review or CERN-endorsement claims. Registry metadata currently categorizes it as `Standard`; this release does not change external registry metadata or evaluate the paper's methods or conclusions. Its abstract field contains a project-sharing link, which is not republished on this website.
- Connectively's article names Farrukh Abdullah as author. Its publication metadata is `2026-08-27T23:51:45Z`. The article is presented as an authored contribution; linking to it does not claim independent coverage of the consultancy or independently validate each statement in the article.
- The site's GitHub repository is an owned public implementation record. It demonstrates changes and checks rather than a client result.
- SerpApi awesome-seo-tools pull request #534 was checked October 29, 2026 and remained open and unmerged. A dated submission note appears on the evidence page with a link to its live status. It is not listed as accepted inclusion or endorsement.
- The direct TechBehemoths company profile was inspected during the earlier verification-badge task. Its company identity and website match this consultancy. It is now included in the business's `sameAs` array. This identity link does not assert that the platform has completed website verification.

## Implementation

`src/lib/publicWork.ts` supplies the card content and structured data so names, destinations, authors, and publication dates remain aligned. About and Evidence each render a graph with CreativeWork, Article, and SoftwareSourceCode nodes linked through `author` to the existing Person ID. The deposited work and repository are not Person or business identity aliases.

The evidence page explains publication context, retains the direct Clutch review, and labels professional identifiers and company listings separately. Generic directory links, a hardcoded rating, and the Overleaf sharing URL are omitted. The About page's substantive update date advances to October 29; publication dates remain the original dates. The optional AI navigation response uses the shared work records and updated evidence summary. The site inventory remains 68 pages.

## Validation

Passed: `npm test`, `npm run build` including TypeScript, `npm run test:production` across 68 pages, and `git diff --check`. The suite additionally checks that each work's title, date, destination, and author relationship match the visible content on About and Evidence, while retaining the existing company-verification destination. Review the live cards and badge after deployment.

## Reference URLs

- https://api.datacite.org/dois/10.5281/zenodo.23701870
- https://zenodo.org/records/23701870
- https://blog.connectively.us/mens-journal-traffic-is-up-415-since-google-ai-overviews-launched-heres-who-else-is-winning/
- https://github.com/serpapi/awesome-seo-tools/pull/534
- https://techbehemoths.com/company/farrukh-abdullah-advisory
