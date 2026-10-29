import type { Insight } from '@/types';
import { CORE_SERVICES } from './serviceContent';
import { CASE_SLUGS, getCaseContent } from './caseContent';
import { PUBLIC_WORK } from './publicWork';

const ORIGIN = 'https://farrukh.top';
const line = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();
const label = (value: string) => line(value).replace(/\[/g, '\\[').replace(/\]/g, '\\]');
const entry = (title: string, path: string, summary: string) =>
  `- [${label(title)}](${new URL(path, ORIGIN).href}): ${line(summary)}`;

// Use the same resolved article records as the live pages, rather than a second
// hand-maintained list that can retain superseded CMS titles and claims.
export function buildLlmsText(articles: Insight[]): string {
  const guides = articles.filter(article => !article.noIndex &&
    (!article.canonicalUrl || new URL(article.canonicalUrl, ORIGIN).href === `${ORIGIN}/insights/${article.id}`));
  return [
    '# Farrukh Abdullah — SEO consulting',
    '',
    '> Independent semantic SEO, local SEO, and AI-search visibility consulting. Based in Faisalabad, Pakistan, working remotely with businesses and their teams.',
    '',
    'This optional navigation file summarizes public pages. It does not grant crawler access or establish indexing, rankings, AI citations, or independent verification of project outcomes. Consult the linked pages for current scope, sources, and evidence limitations.',
    '',
    '## Services',
    '',
    ...CORE_SERVICES.map(service => entry(service.title, `/services/${service.slug}`, service.intro)),
    '',
    '## Evidence and practical resources',
    '',
    entry('Work, evidence, and public references', '/evidence', 'Research deposit, authored writing, public implementation records, an attributed client review, and project evidence context.'),
    entry('Local SEO audit workbook', '/tools/local-seo-audit-workbook', 'A free manual review with 16 checks, evidence fields, next actions, and CSV export. It is not an automated crawl or SEO score.'),
    entry('SEO project planner', '/tools/seo-project-planner', 'Prepare a project brief around the business, customer task, and measurement needs.'),
    entry('AI-search observation template (CSV)', '/resources/ai-search-observation-template.csv', 'Ten starter buyer questions and blank observation fields. Record engines, context, citations, and accuracy; measure referrals and inquiries separately.'),
    '',
    '## Research, writing, and public work',
    '',
    ...PUBLIC_WORK.map(work => entry(work.title, work.url, `${work.kind}. ${work.summary}`)),
    '',
    'Authored work and owned implementation records are distinct from independent endorsements. Read the evidence page for publication and source context.',
    '',
    '## Project accounts',
    '',
    'These pages describe engagement work and reported outcomes. Campaign dates and underlying analytics exports are not currently published with the accounts. Read each page’s evidence notes; reported outcomes are not independently verified performance guarantees.',
    '',
    ...CASE_SLUGS.map(slug => { const study = getCaseContent(slug)!; return entry(study.name, `/case-studies/${slug}`, study.summary); }),
    '',
    '## Guides',
    '',
    ...guides.map(article => entry(article.title, `/insights/${article.id}`, article.summary)),
    '',
    '## Identity and contact',
    '',
    entry('About Farrukh Abdullah', '/about', 'Professional background, approach, and training records. Training and maintained profiles are distinct from independent endorsements.'),
    entry('Contact', '/contact', 'Discuss project fit, access, implementation responsibilities, and fees. Rankings and AI citations are not guaranteed.'),
    '',
  ].join('\n');
}
