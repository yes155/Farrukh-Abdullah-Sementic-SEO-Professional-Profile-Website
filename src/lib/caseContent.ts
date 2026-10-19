import { FEATURED_PROJECTS } from '@/data';
import { CLIENT_CASE_STUDIES } from './clientCaseStudies';

const featuredDetails = [
  {
    slug: 'windcave', name: 'Windcave', location: 'International payments market',
    summary: 'Organizing payment-product content through page consolidation, topic planning, and clearer internal links.',
    challenge: 'Windcave’s payment-product content was spread across pages with overlapping purposes. The project focused on clarifying how those pages related to one another and helping prospective customers find the relevant payment solutions.',
    strategy: 'I reviewed the content inventory, planned where overlapping pages could be combined, and mapped useful connections between payment topics. Content revisions, internal links, and structured data were handled as parts of the same project.',
  },
  {
    slug: 'local-seo-systems', name: 'Local lead-generation portfolio', location: 'US service markets',
    summary: 'Local SEO work across service businesses, connecting profiles, service pages, local listings, and inquiry tracking.',
    challenge: 'This portfolio covered businesses in service categories including junk removal and RV repair. The goal was to make those businesses easier to find in their actual operating areas and connect search discovery with incoming inquiries.',
    strategy: 'I coordinated business-profile information, service content, local listings, and call tracking. Each business needed pages describing its own services and operating area rather than a generic location template.',
  },
  {
    slug: 'azuno', name: 'Azuno', location: 'San Francisco market',
    summary: 'Making an AI analytics offering easier to understand through clearer content, internal links, and business information.',
    challenge: 'Azuno needed its website to explain its analytics offering more clearly and reach prospective customers in its San Francisco market. The project addressed unclear page purposes, gaps in customer-question coverage, and technical issues.',
    strategy: 'I mapped customer questions to relevant pages, planned content and internal links, and worked on technical and factual business-information corrections. Traffic and lead observations were reviewed alongside those changes.',
  },
];

export function getCaseContent(slug: string) {
  const client = CLIENT_CASE_STUDIES.find(study => study.slug === slug);
  if (client) return {
    slug, title: client.h1, name: client.clientName, location: client.location,
    industry: client.industry, focus: client.technologies, summary: client.challengeShort,
    challenge: client.challenge, strategy: client.strategy, execution: client.execution,
    results: client.results, quote: client.testimonialQuote,
    attribution: `${client.ownerName}, ${client.ownerRole}`,
    services: [client.servicesPrimary, client.servicesSecondary], insight: client.insightLink,
  };
  const index = featuredDetails.findIndex(study => study.slug === slug);
  if (index < 0) return undefined;
  const details = featuredDetails[index];
  const project = FEATURED_PROJECTS[index];
  return {
    ...details, title: `${details.name}: SEO case study`, industry: project.industry,
    focus: project.technologies, execution: project.execution, results: project.results,
    quote: '', attribution: '',
    services: [
      { path: index === 1 ? '/services/local-seo' : '/services/semantic-seo', label: index === 1 ? 'Local SEO services' : 'Semantic SEO consulting' },
      { path: '/services/ai-seo-consulting', label: 'AI SEO consulting' },
    ],
    insight: { path: index === 1 ? '/insights/local-entity-seo-ai-search' : '/insights/entity-based-content-architecture', label: 'Read the supporting implementation guide' },
  };
}
export const CASE_SLUGS = [...featuredDetails.map(study => study.slug), ...CLIENT_CASE_STUDIES.map(study => study.slug)];
