/**
 * Schema.org JSON-LD Structured Data Definitions
 * Highly compliant with Google's structured data guidelines.
 * Uses `@id` references to build a fully connected Entity-Relationship Graph.
 */

export const CANONICAL_DOMAIN = "https://farrukh.top";

// Stable URI coordinates to prevent entity duplication and establish direct relationships
export const PERSON_ID = `${CANONICAL_DOMAIN}/#person`;
export const ORGANIZATION_ID = `${CANONICAL_DOMAIN}/#organization`;
export const WEBSITE_ID = `${CANONICAL_DOMAIN}/#website`;

// 1. PERSON SCHEMA
export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  "name": "Farrukh Abdullah",
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
      "name": "IBM SEO and Content Strategy Professional Certificate",
      "credentialCategory": "Professional Certificate",
      "dateCreated": "2023",
      "recognizedBy": {
        "@type": "Organization",
        "name": "IBM"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Moz Search Engine Optimization Professional Certificate",
      "credentialCategory": "Professional Certificate",
      "dateCreated": "2021",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Moz"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "BrightLocal Local SEO Certificate",
      "credentialCategory": "Professional Certificate",
      "dateCreated": "2022",
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

// 2. ORGANIZATION SCHEMA (ProfessionalService)
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORGANIZATION_ID,
  "name": "Farrukh Abdullah Advisory",
  "founder": {
    "@id": PERSON_ID
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Worldwide"
    },
    {
      "@type": "AdministrativeArea",
      "name": "B2B SaaS Businesses"
    },
    {
      "@type": "AdministrativeArea",
      "name": "FinTech Enterprises"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Local Service Brands"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Faisalabad",
    "addressCountry": "PK"
  },
  "url": CANONICAL_DOMAIN,
  "logo": `${CANONICAL_DOMAIN}/farrukh-photo-final.jpg`,
  "email": "f.abdullah79@gmail.com",
  "telephone": "+923346536393"
};

// NOTE: Removed ORGANIZATION_REVIEWS_SCHEMA (self-serving Review + AggregateRating
// markup over in-house testimonials). Google's structured data policy forbids
// "self-serving reviews" — review/rating markup about your own organization — and
// such markup can trigger a manual action stripping rich results. Testimonials
// remain visible in the UI as editorial proof; they are not eligible for Review
// rich results and should not be marked up as such.

// 3. WEBSITE SCHEMA
export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  "name": "Farrukh Abdullah | Semantic SEO & GEO Strategist",
  "url": CANONICAL_DOMAIN,
  "publisher": {
    "@id": ORGANIZATION_ID
  }
};

// 4. SERVICE SCHEMAS
export const SEMANTIC_SEO_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${CANONICAL_DOMAIN}/services/semantic-seo/#service`,
  "name": "Semantic SEO & Topical Authority Consulting",
  "serviceType": "Semantic SEO Consulting",
  "provider": {
    "@id": ORGANIZATION_ID
  },
  "areaServed": {
    "@id": ORGANIZATION_ID
  },
  "description": "Turn scattered web pages into a fully-connected topical authority structure that search engines can't ignore, mapped to verified knowledge graphs and Wikidata coordinates.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Core Deliverables",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Entity mapping against Wikidata and Wikipedia"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Topical authority and content gap analysis"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Internal linking structured around topic clusters"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content rewritten for semantic density, not keyword count"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Indexing and crawl audits via Search Console"
        }
      }
    ]
  }
};

export const AI_SEO_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${CANONICAL_DOMAIN}/services/ai-seo-consulting/#service`,
  "name": "AI SEO Consulting",
  "serviceType": "AI Search Optimization",
  "provider": {
    "@id": ORGANIZATION_ID
  },
  "areaServed": {
    "@id": ORGANIZATION_ID
  },
  "description": "AI SEO consulting covering Generative Engine Optimization (GEO) and technical AI-crawler accessibility — get cited by ChatGPT Search, Perplexity AI, and Google AI Overviews by restructuring content architectures for how LLM transformers actually retrieve and summarize information.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Core Deliverables",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI citation share-of-voice diagnostic"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content restructured for how LLMs actually parse pages"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "JSON-LD structured data implementation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Answer-first copy formatted for AI extraction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI crawler accessibility checks"
        }
      }
    ]
  }
};

export const LOCAL_SEO_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${CANONICAL_DOMAIN}/services/local-seo/#service`,
  "name": "Local SEO Services",
  "serviceType": "Local SEO Marketing",
  "provider": {
    "@id": ORGANIZATION_ID
  },
  "areaServed": {
    "@id": ORGANIZATION_ID
  },
  "description": "Design and build localized search systems focusing on local map pack visibility, localized landing page architecture, Google Business Profile optimization, nested local schema, and complete call/lead tracking.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Core Deliverables",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local map pack visibility"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Localized landing page architecture"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Google Business Profile optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nested local schema"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Call and lead tracking"
        }
      }
    ]
  }
};

// 5. BREADCRUMB SCHEMAS
export function getBreadcrumbSchema(steps: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": steps.map((step, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": step.name,
      "item": step.url.startsWith("http") ? step.url : `${CANONICAL_DOMAIN}${step.url}`
    }))
  };
}

// Default breadcrumb for root homepage
export const HOME_BREADCRUMB_SCHEMA = getBreadcrumbSchema([
  { name: "Home", url: "/" }
]);

// 6. ARTICLE SCHEMAS
export const ARTICLE_SCHEMAS: Record<string, any> = {
  "ins-01": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/ins-01/#article`,
    "headline": "Generative Engine Optimization: How to Secure Brand Citations in ChatGPT Search and Perplexity",
    "datePublished": "2026-06-24T08:00:00Z",
    "dateModified": "2026-06-24T08:00:00Z",
    "author": {
      "@id": PERSON_ID
    },
    "publisher": {
      "@id": ORGANIZATION_ID
    },
    "description": "Learn the precise content frameworks that secure persistent citations in generative AI search engines like ChatGPT Search and Perplexity.",
    "about": [
      { "@type": "Thing", "name": "Generative Engine Optimization" },
      { "@type": "Thing", "name": "ChatGPT Search" },
      { "@type": "Thing", "name": "Perplexity AI" },
      { "@type": "Thing", "name": "AI Citations" }
    ],
    "wordCount": 540,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/ins-01`
  },
  "ins-02": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/ins-02/#article`,
    "headline": "Understanding Entity-Based Content Architecture: Moving Beyond Simple Keyword Density",
    "datePublished": "2026-05-12T08:00:00Z",
    "dateModified": "2026-05-12T08:00:00Z",
    "author": {
      "@id": PERSON_ID
    },
    "publisher": {
      "@id": ORGANIZATION_ID
    },
    "description": "Keywords are surface expressions; entities are the deep structure. This guide explains how to construct topical authority matrices using concept clustering.",
    "about": [
      { "@type": "Thing", "name": "Semantic SEO" },
      { "@type": "Thing", "name": "Entity SEO" },
      { "@type": "Thing", "name": "Topical Authority" },
      { "@type": "Thing", "name": "Knowledge Graphs" }
    ],
    "wordCount": 680,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/ins-02`
  },
  "ins-03": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/ins-03/#article`,
    "headline": "A Schema Strategy for Growth Brands: Structuring Your Site for Google's Knowledge Graph",
    "datePublished": "2026-04-08T08:00:00Z",
    "dateModified": "2026-04-08T08:00:00Z",
    "author": {
      "@id": PERSON_ID
    },
    "publisher": {
      "@id": ORGANIZATION_ID
    },
    "description": "A blueprint for linking multi-location businesses, regional domains, and executive profiles into a single machine-readable schema.org graph.",
    "about": [
      { "@type": "Thing", "name": "Schema Markup" },
      { "@type": "Thing", "name": "Google Knowledge Graph" },
      { "@type": "Thing", "name": "JSON-LD" },
      { "@type": "Thing", "name": "Entity Disambiguation" }
    ],
    "wordCount": 490,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/ins-03`
  },
  "ins-04": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/ins-04/#article`,
    "headline": "Local Entity SEO: How AI Search Engines Understand Location-Based Businesses",
    "datePublished": "2026-07-14T08:00:00Z",
    "dateModified": "2026-07-14T08:00:00Z",
    "author": {
      "@id": PERSON_ID
    },
    "publisher": {
      "@id": ORGANIZATION_ID
    },
    "description": "Local SEO used to mean stuffing a city name into your title tag. AI search reads location as an entity attribute, not a keyword.",
    "about": [
      { "@type": "Thing", "name": "Local SEO" },
      { "@type": "Thing", "name": "Entity SEO" },
      { "@type": "Thing", "name": "LocalBusiness Schema" },
      { "@type": "Thing", "name": "NAP Consistency" }
    ],
    "wordCount": 560,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/ins-04`
  },
  "ins-05": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/ins-05/#article`,
    "headline": "How to Build a Topical Map: The Semantic SEO Framework for Topical Authority",
    "datePublished": "2026-07-17T08:00:00Z",
    "dateModified": "2026-07-17T08:00:00Z",
    "author": {
      "@id": PERSON_ID
    },
    "publisher": {
      "@id": ORGANIZATION_ID
    },
    "description": "A topical map is the structural blueprint behind topical authority. This guide covers Central Entity, Source Context, Core and Outer Sections, EAV signatures, and contextual bridges.",
    "about": [
      { "@type": "Thing", "name": "Topical Authority" },
      { "@type": "Thing", "name": "Topical Map" },
      { "@type": "Thing", "name": "Central Entity" },
      { "@type": "Thing", "name": "Semantic SEO" }
    ],
    "wordCount": 720,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/ins-05`
  },
  "entity-first-geo": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/entity-first-geo/#article`,
    "headline": "Entity-First GEO: The Semantic SEO Foundation That Decides AI Citations",
    "datePublished": "2026-08-03T08:00:00Z",
    "dateModified": "2026-08-03T08:00:00Z",
    "author": { "@id": PERSON_ID },
    "publisher": { "@id": ORGANIZATION_ID },
    "description": "An entity-first GEO framework: why entity clarity decides AI citations, the four entity signals AI engines check, and a practical audit workflow.",
    "about": [
      { "@type": "Thing", "name": "Generative Engine Optimization" },
      { "@type": "Thing", "name": "Entity SEO" },
      { "@type": "Thing", "name": "Semantic SEO" },
      { "@type": "Thing", "name": "AI Citations" }
    ],
    "wordCount": 1101,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/entity-first-geo`
  },
  "answer-capsules-ai-extraction": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/answer-capsules-ai-extraction/#article`,
    "headline": "The 120–150 Word Answer Capsule: The Exact Passage Structure AI Engines Extract",
    "datePublished": "2026-08-04T08:00:00Z",
    "dateModified": "2026-08-04T08:00:00Z",
    "author": { "@id": PERSON_ID },
    "publisher": { "@id": ORGANIZATION_ID },
    "description": "The answer capsule: the 120-150 word self-contained passage structure that boosted GEO visibility by 40% in Princeton's study, with templates and rewrites.",
    "about": [
      { "@type": "Thing", "name": "Answer Engine Optimization" },
      { "@type": "Thing", "name": "Generative Engine Optimization" },
      { "@type": "Thing", "name": "AI Overviews" },
      { "@type": "Thing", "name": "Content Structure" }
    ],
    "wordCount": 983,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/answer-capsules-ai-extraction`
  },
  "ai-mode-search-language": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/ai-mode-search-language/#article`,
    "headline": "AI Mode Rewrote Search Language: How to Write Content for Conversation, Not Keywords",
    "datePublished": "2026-08-05T08:00:00Z",
    "dateModified": "2026-08-05T08:00:00Z",
    "author": { "@id": PERSON_ID },
    "publisher": { "@id": ORGANIZATION_ID },
    "description": "How Google AI Mode data rewrote search language: conversational prompts, follow-up queries, multimodal input, and a page rewrite methodology.",
    "about": [
      { "@type": "Thing", "name": "AI Mode" },
      { "@type": "Thing", "name": "Search Intent" },
      { "@type": "Thing", "name": "Conversational Search" },
      { "@type": "Thing", "name": "Content Optimization" }
    ],
    "wordCount": 885,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/ai-mode-search-language`
  },
  "schema-as-citation-signal": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/schema-as-citation-signal/#article`,
    "headline": "Schema as a Citation Signal: Resolving What the Conflicting Studies Actually Mean",
    "datePublished": "2026-08-06T08:00:00Z",
    "dateModified": "2026-08-06T08:00:00Z",
    "author": { "@id": PERSON_ID },
    "publisher": { "@id": ORGANIZATION_ID },
    "description": "Reconciling the conflicting studies on schema markup and AI citations: Ahrefs, Princeton, and Google's 2026 guidance, plus a schema priority list.",
    "about": [
      { "@type": "Thing", "name": "Schema Markup" },
      { "@type": "Thing", "name": "JSON-LD" },
      { "@type": "Thing", "name": "AI Citations" },
      { "@type": "Thing", "name": "Structured Data" }
    ],
    "wordCount": 902,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/schema-as-citation-signal`
  },
  "content-freshness-ai-search": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/content-freshness-ai-search/#article`,
    "headline": "The Freshness Advantage: Why AI Systems Prefer Newer Content and How to Build a Refresh Pipeline",
    "datePublished": "2026-08-07T08:00:00Z",
    "dateModified": "2026-08-07T08:00:00Z",
    "author": { "@id": PERSON_ID },
    "publisher": { "@id": ORGANIZATION_ID },
    "description": "The freshness advantage in AI search: Ahrefs' 25.7% recency finding, Koray's momentum concept, and a four-column refresh pipeline tied to a topical map.",
    "about": [
      { "@type": "Thing", "name": "Content Freshness" },
      { "@type": "Thing", "name": "Topical Authority" },
      { "@type": "Thing", "name": "AI Search" },
      { "@type": "Thing", "name": "Content Refresh" }
    ],
    "wordCount": 828,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/content-freshness-ai-search`
  },
  "topical-authority-core-update": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/topical-authority-core-update/#article`,
    "headline": "Topical Authority vs. the October 2025 Core Update: What Koray's Model Predicted and Why It Held",
    "datePublished": "2026-08-08T08:00:00Z",
    "dateModified": "2026-08-08T08:00:00Z",
    "author": { "@id": PERSON_ID },
    "publisher": { "@id": ORGANIZATION_ID },
    "description": "How the October 2025 Google core update validated Koray Tuğberk Gübür's Topical Authority formula, with the framework's practical application for AI search.",
    "about": [
      { "@type": "Thing", "name": "Topical Authority" },
      { "@type": "Thing", "name": "Google Core Update" },
      { "@type": "Thing", "name": "Semantic SEO" },
      { "@type": "Thing", "name": "Entity SEO" }
    ],
    "wordCount": 925,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/topical-authority-core-update`
  },
  "reddit-youtube-co-citation-geo": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/reddit-youtube-co-citation-geo/#article`,
    "headline": "Reddit, YouTube, and the Co-Citation Web: Off-Site Signals That Get You Cited by AI",
    "datePublished": "2026-08-09T08:00:00Z",
    "dateModified": "2026-08-09T08:00:00Z",
    "author": { "@id": PERSON_ID },
    "publisher": { "@id": ORGANIZATION_ID },
    "description": "The co-citation web in AI search: why Reddit, YouTube, LinkedIn, and other off-site platforms drive AI citations, with a 90-day playbook for solo operators.",
    "about": [
      { "@type": "Thing", "name": "Generative Engine Optimization" },
      { "@type": "Thing", "name": "Co-Citation" },
      { "@type": "Thing", "name": "Reddit" },
      { "@type": "Thing", "name": "Brand Mentions" }
    ],
    "wordCount": 804,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/reddit-youtube-co-citation-geo`
  },
  "original-data-solo-seo": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/original-data-solo-seo/#article`,
    "headline": "Original Data Without a Data Team: How Solo SEOs and Small Brands Get Cited as Primary Sources",
    "datePublished": "2026-08-10T08:00:00Z",
    "dateModified": "2026-08-10T08:00:00Z",
    "author": { "@id": PERSON_ID },
    "publisher": { "@id": ORGANIZATION_ID },
    "description": "How solo SEOs and small brands produce original, citable data: the 4.1x data table signal, realistic data sources, and a repeatable five-step research sprint.",
    "about": [
      { "@type": "Thing", "name": "Original Research" },
      { "@type": "Thing", "name": "Content Marketing" },
      { "@type": "Thing", "name": "AI Citations" },
      { "@type": "Thing", "name": "Data-Driven SEO" }
    ],
    "wordCount": 852,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/original-data-solo-seo`
  },
  "local-businesses-ai-search": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/local-businesses-ai-search/#article`,
    "headline": "Local Businesses in AI Search: Being the Entity AI Names for 'Best Plumber Near Me'",
    "datePublished": "2026-08-11T08:00:00Z",
    "dateModified": "2026-08-11T08:00:00Z",
    "author": { "@id": PERSON_ID },
    "publisher": { "@id": ORGANIZATION_ID },
    "description": "How local businesses get named in AI answers: Google's 2026 guidance on Google Business Profile, the local entity signals, and a local GEO checklist.",
    "about": [
      { "@type": "Thing", "name": "Local SEO" },
      { "@type": "Thing", "name": "Google Business Profile" },
      { "@type": "Thing", "name": "AI Overviews" },
      { "@type": "Thing", "name": "Generative Engine Optimization" }
    ],
    "wordCount": 812,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/local-businesses-ai-search`
  },
  "geo-measurement-stack": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/geo-measurement-stack/#article`,
    "headline": "The GEO Measurement Stack: Citation SOV, Answer Share, and the 50-Run Method",
    "datePublished": "2026-08-11T08:00:00Z",
    "dateModified": "2026-08-11T08:00:00Z",
    "author": { "@id": PERSON_ID },
    "publisher": { "@id": ORGANIZATION_ID },
    "description": "A practical GEO measurement stack: citation rate, share of voice, sentiment framing, and the statistically valid 50-run sampling method — free and repeatable.",
    "about": [
      { "@type": "Thing", "name": "Generative Engine Optimization" },
      { "@type": "Thing", "name": "AI Search Metrics" },
      { "@type": "Thing", "name": "Share of Voice" },
      { "@type": "Thing", "name": "Measurement" }
    ],
    "wordCount": 930,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/geo-measurement-stack`
  },
  "us-cities-local-seo-opportunity": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/us-cities-local-seo-opportunity/#article`,
    "headline": "Local SEO Opportunity by US City: Where Service Businesses Win in 2026",
    "datePublished": "2026-08-11T08:00:00Z",
    "dateModified": "2026-08-11T08:00:00Z",
    "author": { "@id": PERSON_ID },
    "publisher": { "@id": ORGANIZATION_ID },
    "description": "Which US cities have soft local SERPs, which are locked down, and what it takes to win the map pack and AI answers in each market — backed by 2026 data on competition density and AI Overviews.",
    "about": [
      { "@type": "Thing", "name": "Local SEO" },
      { "@type": "Thing", "name": "US Cities" },
      { "@type": "Thing", "name": "Map Pack" },
      { "@type": "Thing", "name": "AI Overviews" }
    ],
    "wordCount": 1100,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/us-cities-local-seo-opportunity`
  },
  "chatgpt-seo-optimization": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/chatgpt-seo-optimization/#article`,
    "headline": "ChatGPT SEO: How to Get Cited and Ranked in ChatGPT Search",
    "datePublished": "2026-08-12T08:00:00Z",
    "dateModified": "2026-08-12T08:00:00Z",
    "author": { "@id": PERSON_ID },
    "publisher": { "@id": ORGANIZATION_ID },
    "description": "ChatGPT Search is a ranking surface with its own rules. The citation and entity signals that matter, plus a repeatable ChatGPT SEO audit to get your pages cited.",
    "about": [
      { "@type": "Thing", "name": "Generative Engine Optimization" },
      { "@type": "Thing", "name": "ChatGPT Search" },
      { "@type": "Thing", "name": "AI Citations" },
      { "@type": "Thing", "name": "ChatGPT SEO" }
    ],
    "wordCount": 950,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/chatgpt-seo-optimization`
  },
  "llms-txt-ai-crawlers": {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${CANONICAL_DOMAIN}/insights/llms-txt-ai-crawlers/#article`,
    "headline": "llms.txt for SEO: The File That Makes AI Crawlers Read Your Site",
    "datePublished": "2026-08-12T08:00:00Z",
    "dateModified": "2026-08-12T08:00:00Z",
    "author": { "@id": PERSON_ID },
    "publisher": { "@id": ORGANIZATION_ID },
    "description": "A practical guide to llms.txt: the plain-text file that gives AI crawlers a prioritized map of your site — and why it helps, but never replaces, semantic SEO.",
    "about": [
      { "@type": "Thing", "name": "llms.txt" },
      { "@type": "Thing", "name": "AI Crawlers" },
      { "@type": "Thing", "name": "Generative Engine Optimization" },
      { "@type": "Thing", "name": "Technical SEO" }
    ],
    "wordCount": 750,
    "mainEntityOfPage": `${CANONICAL_DOMAIN}/insights/llms-txt-ai-crawlers`
  }
};

// 7. FAQ PAGE SCHEMA
export const FAQ_QUESTIONS_DATA = [
  {
    question: "What is Semantic SEO and how does it differ from traditional SEO?",
    answer: "Traditional SEO optimizes for keywords and backlinks. Semantic SEO optimizes for entities and relationships — structuring your content so search engines and AI models understand what your business actually is, what it does, and how it connects to other verified concepts (people, places, products, organizations). Instead of chasing keyword density, semantic SEO builds a knowledge graph around your brand that both Google and AI search engines can trust and cite."
  },
  {
    question: "How does Generative Engine Optimization (GEO) help brands get cited by AI search engines?",
    answer: "GEO restructures your content so AI models like ChatGPT, Perplexity, and Google AI Overviews can extract, verify, and cite it directly in generated answers. This includes answer-first content structure, clean JSON-LD schema, unambiguous factual assertions, and clear entity relationships — the signals AI systems use to decide which sources are trustworthy enough to reference by name."
  },
  {
    question: "Do you provide Local SEO services for regional brands?",
    answer: "Yes. Local SEO Services is a separate offering focused on local map pack visibility, Google Business Profile optimization, and localized landing page architecture — built for service businesses that need calls and form-fills, not enterprise knowledge graph work."
  },
  {
    question: "How long does semantic SEO or GEO work take to show results?",
    answer: "Most engagements run on a 90-day structured cycle, with early technical and schema improvements often visible within 4–6 weeks, and meaningful ranking or citation movement typically appearing between month two and three, depending on your site's starting technical health and competitive landscape."
  },
  {
    question: "What's the difference between GEO and AEO?",
    answer: "Generative Engine Optimization (GEO) is the broader discipline of making a brand visible and citable across all AI-driven search — including chat-based tools and AI Overviews. Answer Engine Optimization (AEO) is a more specific practice within GEO, focused on structuring content in direct, answer-first formats optimized for extraction by voice assistants and AI answer boxes. In practice, most engagements use both together."
  },
  {
    question: "Do you work with businesses outside Pakistan?",
    answer: "Yes — while based in Faisalabad, Pakistan, all engagements are conducted remotely, and current and past clients span the US, UK, and international B2B markets."
  },
  {
    question: "Do you offer SEO services specifically for businesses in Lahore?",
    answer: "Yes — in addition to global semantic SEO and GEO consulting, dedicated local SEO support is available for Lahore-based businesses, including local search visibility, Google Business Profile setup, and localized content strategy."
  }
];

export const FAQ_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_QUESTIONS_DATA.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};
