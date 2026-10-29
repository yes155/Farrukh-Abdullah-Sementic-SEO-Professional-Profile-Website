import { PERSON_ID } from './schemas';

// Checked against the DataCite record, article byline/date metadata, and public
// repository on October 29, 2026. These are authored works, not endorsements.
export const PUBLIC_WORK = [
  {
    id: 'research',
    kind: 'Research deposit',
    title: 'Entity-First Generative Engine Optimization (GEO): Structuring Machine-Readable Knowledge Graphs for AI Search Citation',
    summary: 'A deposited work on entity-first GEO and machine-readable knowledge graphs for AI search.',
    url: 'https://zenodo.org/records/23701870',
    date: '2026-10-27',
    publisher: 'Zenodo',
    doi: '10.5281/zenodo.23701870',
    action: 'View the research deposit',
  },
  {
    id: 'article',
    kind: 'Authored article',
    title: 'Men’s Journal Traffic Is Up 415% Since Google AI Overviews Launched. Here’s Who Else Is Winning',
    summary: 'Commentary published on Connectively about publisher traffic trends and AI Overviews.',
    url: 'https://blog.connectively.us/mens-journal-traffic-is-up-415-since-google-ai-overviews-launched-heres-who-else-is-winning/',
    date: '2026-08-27',
    publisher: 'Connectively',
    action: 'Read the authored article',
  },
  {
    id: 'implementation',
    kind: 'Public implementation',
    title: 'The work behind this website',
    summary: 'Inspect source changes and automated checks for this website’s service pages, structured data, and practical tools.',
    url: 'https://github.com/yes155/Farrukh-Abdullah-Sementic-SEO-Professional-Profile-Website',
    action: 'Inspect the implementation',
  },
] as const;

export function getPublicWorkSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': PUBLIC_WORK.map(work => ({
      '@type': work.id === 'research' ? 'CreativeWork' : work.id === 'article' ? 'Article' : 'SoftwareSourceCode',
      '@id': work.id === 'research' ? `https://doi.org/${work.doi}` : `${work.url}#work`,
      name: work.title,
      ...(work.id === 'article' ? { headline: work.title } : {}),
      description: work.summary,
      url: work.url,
      author: { '@id': PERSON_ID },
      ...('date' in work ? { datePublished: work.date } : {}),
      ...('publisher' in work ? { publisher: { '@type': 'Organization', name: work.publisher } } : {}),
      ...(work.id === 'research' ? { identifier: { '@type': 'PropertyValue', propertyID: 'DOI', value: work.doi } } : {}),
      ...(work.id === 'implementation' ? { codeRepository: work.url } : {}),
    })),
  };
}
