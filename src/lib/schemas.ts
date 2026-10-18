import type { Insight } from "@/types";
import { validISODate } from "./contentMetadata";
import { CORE_SERVICES } from "./serviceContent";
export const CANONICAL_DOMAIN = "https://farrukh.top";
export const PERSON_ID = `${CANONICAL_DOMAIN}/#person`;
export const ORGANIZATION_ID = `${CANONICAL_DOMAIN}/#organization`;
export const WEBSITE_ID = `${CANONICAL_DOMAIN}/#website`;
export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  "name": "Farrukh Abdullah",
  "url": `${CANONICAL_DOMAIN}/about`,
  "image": `${CANONICAL_DOMAIN}/farrukh-photo-final.jpg`,
  "jobTitle": "Semantic SEO & Generative Engine Optimization Strategist",
  "worksFor": {
    "@id": ORGANIZATION_ID
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Faisalabad",
    "addressCountry": "PK"
  },
  "knowsAbout": [
    "Semantic SEO",
    "Generative Engine Optimization",
    "Entity-Based Search",
    "Knowledge Graphs",
    "JSON-LD Structured Data",
    "Local SEO",
    "AI Search Visibility"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Search Engine Optimization and Content Marketing",
      "credentialCategory": "Professional Certificate",
      "dateCreated": "2026",
      "recognizedBy": {
        "@type": "Organization",
        "name": "IBM"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Search Engine Optimization Professional Certificate",
      "credentialCategory": "Professional Certificate",
      "dateCreated": "2026",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Moz"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "How to Create, Optimize, and Manage Google Business Profiles",
      "credentialCategory": "Professional Certificate",
      "dateCreated": "2025",
      "recognizedBy": {
        "@type": "Organization",
        "name": "BrightLocal"
      }
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/in/farrukh-abdullah-5a218424/"
  ]
};


export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": ORGANIZATION_ID,
  name: "Farrukh Abdullah Advisory", founder: { "@id": PERSON_ID },
  areaServed: "Worldwide; remote consulting with a focus on United States businesses",
  address: { "@type": "PostalAddress", addressLocality: "Faisalabad", addressCountry: "PK" },
  url: CANONICAL_DOMAIN, image: `${CANONICAL_DOMAIN}/farrukh-photo-final.jpg`,
  email: "f.abdullah79@gmail.com", telephone: "+923346536393"
};
export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org", "@type": "WebSite", "@id": WEBSITE_ID,
  name: "Farrukh Abdullah — SEO Consulting", url: CANONICAL_DOMAIN,
  publisher: { "@id": ORGANIZATION_ID }
};
export function getServiceSchema(path: string, name: string, description: string, areaServed: unknown = { "@type": "Country", name: "United States" }) {
  return { "@context": "https://schema.org", "@type": "Service", "@id": `${CANONICAL_DOMAIN}${path}#service`,
    name, description, url: `${CANONICAL_DOMAIN}${path}`, provider: { "@id": ORGANIZATION_ID }, areaServed };
}
const coreSchemas = CORE_SERVICES.map(s => getServiceSchema(`/services/${s.slug}`, s.title, s.intro));
export const [SEMANTIC_SEO_SERVICE_SCHEMA, AI_SEO_SERVICE_SCHEMA, LOCAL_SEO_SERVICE_SCHEMA] = coreSchemas;
export function getBreadcrumbSchema(steps: { name: string; url: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: steps.map((step, index) => ({ "@type": "ListItem", position: index + 1, name: step.name, item: new URL(step.url, CANONICAL_DOMAIN).href })) };
}
export const HOME_BREADCRUMB_SCHEMA = getBreadcrumbSchema([{ name: "Home", url: "/" }]);
export function getArticleSchema(article: Insight) {
  const url = new URL(article.canonicalUrl || `/insights/${article.id}`, CANONICAL_DOMAIN).href;
  return { "@context": "https://schema.org", "@type": "Article", "@id": `${url}#article`,
    headline: article.title, description: article.summary, mainEntityOfPage: url,
    author: { "@id": PERSON_ID, url: `${CANONICAL_DOMAIN}/about` }, publisher: { "@id": ORGANIZATION_ID },
    datePublished: validISODate(article.date), dateModified: validISODate(article.modifiedDate || article.date),
    ...(article.featuredImageUrl ? { image: article.featuredImageUrl } : {}) };
}
export function getCollectionSchema(path: string, name: string, items: { name: string; path: string }[]) {
  return { "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${CANONICAL_DOMAIN}${path}#page`, name,
    url: `${CANONICAL_DOMAIN}${path}`, isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@type": "ItemList", itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, url: `${CANONICAL_DOMAIN}${item.path}` })) } };
}
export const FAQ_QUESTIONS_DATA = [
  { question: "What does semantic SEO consulting include?", answer: "Content inventories, page-intent planning, useful internal relationships, and implementation checks. The agreed scope explains which changes are recommendations and who implements them." },
  { question: "Can you guarantee AI citations or map rankings?", answer: "No. Search systems and competitors change. I document access, content, and measurement work and evaluate citations, referrals, and qualified inquiries separately." },
  { question: "Where do you work?", answer: "I am based in Faisalabad, Pakistan and provide remote consulting, with a focus on US service businesses. City pages describe service availability rather than local offices." },
  { question: "How is the work priced?", answer: "A written proposal defines deliverables, access, implementation responsibilities, and fees after an initial review. There is no universal price or guaranteed results timeline." },
  { question: "What happens when I request a website review?", answer: "You provide your website and inquiry details for a manual review. The form does not crawl your website or generate an instant score." }
];
export const FAQ_PAGE_SCHEMA = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_QUESTIONS_DATA.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
