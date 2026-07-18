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

// 2b. Homepage-only review/aggregateRating fragment, linked to the
// Organization entity via matching @id. Inject this ONLY on the homepage,
// alongside ORGANIZATION_SCHEMA — the Testimonials section there is the
// one place these reviews are actually visible. Google's structured data
// guidelines require review markup to appear on the page where the
// reviews themselves are visible, not site-wide.
export const ORGANIZATION_REVIEWS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORGANIZATION_ID,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "7",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Sarah M." },
      "reviewBody": "Farrukh helped us show up in the local pack within weeks. Now new customers literally tell us they found us online."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "David R." },
      "reviewBody": "Farrukh rebuilt our SEO strategy from the ground up. Calls from local leads have doubled, and our site finally feels professional."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Elena P." },
      "reviewBody": "Farrukh's geo-targeted SEO gave us visibility in exactly the neighborhoods we wanted. Bookings through organic search are up 35%."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Mark T." },
      "reviewBody": "Farrukh spotted technical issues and optimized our product pages with semantic SEO. Within three months, organic sales became our main revenue stream."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Jessica L." },
      "reviewBody": "Farrukh helped us dominate local search. We're now consistently in the top three results, which brought in a steady stream of new members."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Michael K." },
      "reviewBody": "Farrukh showed us how search engines increasingly rely on language models to interpret intent, then tailored our content to align with those signals."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Margaret Genet" },
      "reviewBody": "Farrukh showed us how semantic SEO and geo-targeting could work hand-in-hand with the way AI and language models interpret search intent. His strategy made our content future-proof in an AI-first world."
    }
  ]
};

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
