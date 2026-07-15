import { 
  SpecItem, 
  CredibilityCard, 
  MetricCard, 
  Project, 
  Service, 
  ProcessStep, 
  Certification, 
  ExperienceItem, 
  Insight 
} from "./types";

export const STRATEGIST_NAME = "Farrukh Abdullah";
export const STRATEGIST_TITLE = "Semantic SEO Specialist";

export const STRATEGIST_SPECS: SpecItem[] = [
  { label: "Based in", value: "Faisalabad, Pakistan — working with clients globally" },
  { label: "Focus", value: "Entity SEO, knowledge graphs, and generative engine optimization (GEO)" },
  { label: "Status", value: "Currently taking on new projects", statusColor: "#00c2ff" }
];

export const CREDIBILITY_CARDS: CredibilityCard[] = [
  { label: "2+ Years in Semantic SEO", iconName: "Database", badge: "GEO Era" },
  { label: "11+ Years Sales & Analytics", iconName: "TrendingUp", badge: "Data-Driven" },
  { label: "IBM Content Certified", iconName: "Award", badge: "IBM" },
  { label: "Moz Advanced Certified", iconName: "ShieldCheck", badge: "Moz" },
  { label: "BrightLocal Certified", iconName: "MapPin", badge: "Local" },
  { label: "Claude101 Certified", iconName: "BrainCircuit", badge: "Anthropic" }
];

export const EXPERTISE_TAGS: string[] = [
  "Semantic SEO",
  "Entity SEO",
  "Topical Authority",
  "AI Overviews (AIO)",
  "ChatGPT Visibility",
  "Perplexity Optimization",
  "Google Business Profile",
  "Schema Markup",
  "Knowledge Graph Construction",
  "AEO (Answer Engine Optimization)",
  "GEO (Generative Engine Optimization)",
  "Technical SEO",
  "Content Architecture",
  "Local SEO",
  "Google Search Console",
  "Google Analytics (GA4)",
  "SEMrush",
  "Screaming Frog",
  "Moz",
  "Excel Data Modeling"
];

export const METRIC_CARDS: MetricCard[] = [
  {
    value: "+112%",
    title: "Organic Lead Growth",
    description: "Architected semantic entity structuring and topical clustering for windcave.com fintech search categories.",
    tags: ["FinTech", "Semantic SEO"]
  },
  {
    value: "1,200+",
    title: "Inbound Calls Generated",
    description: "Sourced through optimized regional local SEO system assets in hyper-competitive service niches.",
    tags: ["Local SEO", "Lead Gen"]
  },
  {
    value: "340%",
    title: "Average SEO ROI",
    description: "High-intent localized search systems built for continuous calls, form-fills, and revenue attribution.",
    tags: ["Data Analytics", "Performance"]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "case-01",
    title: "Semantic SEO structuring & entity clustering",
    industry: "FinTech & Payments",
    challenge: "The client windcave.com faced severe search visibility plateau and fragmented domain equity across its payment product categories, with search crawlers failing to associate their pages with core payment entities.",
    strategy: "Implemented a robust Semantic SEO architecture. This included mapping out an entity-based topical authority framework, structuring key-value payment schemas, and engineering semantic content clusters to position the domain as an authoritative source in both Google and AI search engines.",
    execution: [
      "Injected structured JSON-LD schemas linking pages directly to primary Wikidata entity coordinates.",
      "Re-engineered site content architecture into structured topical clusters matching payment search entities.",
      "Optimized payment gateway API references and developer documentation hubs for search agent readability.",
      "Conducted comprehensive entity-based content gaps to build unbreakable topical coverage for critical terms."
    ],
    results: [
      "+112% increase in organic lead registrations within 9 months of semantic launch",
      "First-page visibility established for high-intent payment solutions and direct AI-search citations",
      "Resolved internal topical cannibalization issues, recapturing lost keyword authority"
    ],
    technologies: ["Wikidata", "JSON-LD Schema", "Semantic SEO", "Ahrefs", "Google Search Console"],
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Examine semantic strategy"
  },
  {
    id: "case-02",
    title: "Local SEO systems for competitive service niches",
    industry: "US Service Niches",
    challenge: "New brand entrants in hyper-competitive local service niches (Junk Removal, RV Repair) needed rapid localized SERP traction with low advertising spend.",
    strategy: "Deployed localized SEO systems for competitive service niches, utilizing hyper-nested geographic schemas and structured local business identifiers.",
    execution: [
      "Optimized multi-location site architectures optimized for localized intent.",
      "Implemented comprehensive Google Business Profile configurations synced with geo-specific landing pages.",
      "Built hyper-local nested citation schemas to trigger Google's local map pack.",
      "Programmatically scaled service-page content architectures mapped to local neighborhood coordinates."
    ],
    results: [
      "Generated 1,200+ inbound calls with direct attribution tracking",
      "Ranked 12 distinct regional assets inside the Google local map pack",
      "Achieved average 340% ROI across the active local SEO system portfolio"
    ],
    technologies: ["Google Business Profile", "Local Citation Building", "Nested Schemas", "Analytics Mapping", "Local SEO Systems"],
    imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Review local lead architecture"
  }
];

export const SERVICES: Service[] = [
  {
    id: "srv-01",
    title: "Semantic SEO & Topical Authority",
    description: "Turn scattered pages into a connected authority structure search engines can't ignore.",
    deliverables: [
      "Entity mapping against Wikidata and Wikipedia",
      "Topical authority and content gap analysis",
      "Internal linking structured around topic clusters",
      "Content rewritten for semantic density, not keyword count",
      "Indexing and crawl audits via Search Console"
    ],
    ctaText: "Start with an authority audit"
  },
  {
    id: "srv-02",
    title: "Generative Engine Optimization (GEO)",
    description: "Get cited by ChatGPT Search, Perplexity, and Google AI Overviews — not just ranked by Google.",
    deliverables: [
      "AI citation share-of-voice diagnostic",
      "Content restructured for how LLMs actually parse pages",
      "JSON-LD structured data implementation",
      "Answer-first copy formatted for AI extraction",
      "AI crawler accessibility checks"
    ],
    ctaText: "Get cited by AI search"
  }
];

export const PHILOSOPHY_STATEMENTS = [
  {
    lead: "Search engines read entities, not strings.",
    body: "Traditional search engines crawled simple text sequences. Today, Google's knowledge systems and modern LLMs process real-world concept nodes. When you structure your content around verified entities and properties, you make yourself impossible to ignore."
  },
  {
    lead: "Structure is the language of AI search.",
    body: "AI models from OpenAI, Anthropic, and Google do not surf web pages like humans. They parse patterns, structured data, and unambiguous assertions. If your expertise is not formatted cleanly into machine-readable knowledge nodes, you remain invisible."
  },
  {
    lead: "SEO must align with business numbers.",
    body: "Search volume is a vanity metric. True search advisory means tying organic impressions directly to pipeline revenues. My background in corporate sales and market analytics ensures every SEO campaign is built on concrete financial outcomes."
  }
];

export const WORKING_PROCESS: ProcessStep[] = [
  {
    number: "1",
    title: "Topical discovery and entity mapping",
    description: "We analyze your brand footprint against Wikidata, DBpedia, and organic index charts to understand how search engines classify your core concept nodes.",
    details: ["Wikidata & Entity ID validation", "Semantic competitor gap audits", "AI citation current share of voice check"]
  },
  {
    number: "2",
    title: "Conceptual content restructuring",
    description: "We map your industry's entire topic map, defining parents, children, and adjacent relations to design an airtight content clustering blueprint.",
    details: ["Conceptual cluster design", "Search intent gap analysis", "Topical matrix roadmap"]
  },
  {
    number: "3",
    title: "Programmatic schema strategy",
    description: "We build custom JSON-LD schema layouts to cleanly organize your company's physical, digital, and professional relations for machine scrapers.",
    details: ["Nested JSON-LD organizational schema", "Hyper-local coordinates structuring", "Entity relational tagging models"]
  },
  {
    number: "4",
    title: "Content optimization & citation alignment",
    description: "We rewrite and restructure critical service and authority pages, upgrading conversational prose into high-density, authoritative assertions.",
    details: ["Generative Engine Optimization formatting", "High-density editorial updates", "Expert authority reference linking"]
  },
  {
    number: "5",
    title: "Continuous evaluation & ROI mapping",
    description: "We constantly audit how search models answer industry-relevant queries, refining schema coordinates and content assets to defend your visibility.",
    details: ["ChatGPT & Perplexity citation audits", "GSC search volume attribution checks", "Topical expansion recommendations"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-01",
    title: "SEO and Content Strategy Professional Certificate",
    organization: "IBM",
    year: "2023",
    iconColor: "#0f62fe"
  },
  {
    id: "cert-02",
    title: "Search Engine Optimization Professional Certificate",
    organization: "Moz",
    year: "2021",
    iconColor: "#328aff"
  },
  {
    id: "cert-03",
    title: "Local SEO Certificate",
    organization: "BrightLocal",
    year: "2022",
    iconColor: "#e6194b"
  },
  {
    id: "cert-04",
    title: "Claude101 Certificate",
    organization: "Anthropic",
    year: "2024",
    iconColor: "#cc9900"
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "exp-01",
    role: "SEO Strategist & Consultant",
    company: "Independent / Freelance",
    period: "2024 - Present",
    bullets: [
      "Architected semantic SEO strategies and topical authority maps for multiple digital assets, aligning content clusters with search entities to maximize ranking potential and AI-citation readiness.",
      "Formulated and executed semantic SEO strategies and entity-based content architectures for windcave.com and anxivo.com, scaling organic presence and search authority.",
      "Built and scaled local SEO lead-generation systems in competitive US service niches (Junk Removal, RV Repair), optimizing site architecture for localized SERP performance.",
      "Ran competitive intelligence and entity-based content gap analysis to surface and capture high-value ranking opportunities."
    ],
    analyticalAngle: "Bypasses keyword guesswork to architect robust Entity-Relationship Maps and schema registries, positioning domains for both traditional rankings and AI-citation systems."
  }
];

export const INSIGHTS_ARTICLES: Insight[] = [
  {
    id: "ins-01",
    title: "Generative Engine Optimization: How to Secure Brand Citations in ChatGPT Search and Perplexity",
    category: "AI Search",
    readTime: "6 min read",
    date: "June 24, 2026",
    summary: "Generative engine optimization (GEO) is how brands get cited by ChatGPT Search, Perplexity, and Google AI Overviews. LLMs do not use traditional PageRank — they use proximity vectors, source credibility signals, and co-citation densities. Learn the exact content frameworks that improve AI search visibility and secure persistent brand citations.",
    contentMarkdown: `## The Shift from Indexing to Generating

Traditional SEO has trained us to optimize for Google's indexing crawl, focusing on keyword matching, clean page loads, and domain authority backlinks. However, **Generative Engine Optimization (GEO)** requires a fundamentally different philosophy.

When user queries are answered directly by an LLM like ChatGPT or Perplexity:
- **The search engine acts as a synthesizer**, reading multiple web sources and extracting information.
- **Citations are rewarded** to sources that provide the most explicit, structured, and authoritative assertions.

### Core Strategies to Boost AI Search Visibility

To optimize your content for AI search citation networks, focus on these five strategies:

#### 1. High-Density Unambiguous Assertions
LLMs are trained to summarize. If your content is buried in passive prose, the transformer models will skip it. Re-structure your copy to use direct, active, and high-precision claims.
- **Weak:** "Our software is generally considered by many industry leaders to be an exceptionally fast solution when it comes to compiling massive data repositories."
- **Strong:** "Our software compiles 10GB databases in 4.2 seconds, 3.5x faster than the industry average of 15 seconds."

#### 2. Nested Relational Schema (JSON-LD)
By explicitly telling search spiders which Wikidata concepts your page discusses, you reduce the 'cognitive load' of the NLP engines parsing your site. Ensure every page contains precise entities mapped to their respective resource IDs.

#### 3. Structured Data Verification Tables
AI models are highly responsive to tables and bulleted specification lists. Whenever presenting metrics, pricing, or product specifications, render them in clean, semantic HTML tables. 

#### 4. The Co-Citation Footprint
LLMs are trained on massive web corpora. If your brand is continuously mentioned alongside your primary service categories on high-authority external resources (industry journals, podcasts, major publications), the model's association weights will shift in your favor.

#### 5. Brand Authority Anchors
Make sure your founder, key executives, and physical locations are verified entities across the web. Connect your personal LinkedIn, Google Business Profile, and industry memberships with Schema markup to create an solid circle of trust.`
  },
  {
    id: "ins-02",
    title: "Understanding Entity-Based Content Architecture: Moving Beyond Simple Keyword Density",
    category: "Semantic SEO",
    readTime: "8 min read",
    date: "May 12, 2026",
    summary: "Entity SEO and topical authority have replaced keyword density as the core ranking signal in semantic search. This guide explains how to build entity-based content architecture using concept clustering, vector distances, and structured schemas — the same approach behind modern topical authority SEO.",
    contentMarkdown: `## Keywords Are Dead. Entities Are Forever.

For two decades, SEO was a game of keywords: identifying search volume, writing 2,000-word articles matching those keywords, and placing them in title tags and headers. Modern search engines like Google's Hummingbird and MUM are entity-based. They understand **things, not strings**.

### What is an Entity?

An entity is a concept that is well-defined, singular, and distinguishable. For example, 'Semantic SEO' is an entity. It has properties, relationships to other entities (like 'Search Engines', 'Structured Data', 'Google'), and direct mappings in structured knowledge bases like Wikidata.

### Transitioning to an Entity-Based Architecture

To transition your domain into an authoritative semantic hub, implement the following roadmap:

#### 1. Define Your Core Entity Maps
Before writing a single article, draft a topological map of your industry's main concepts. Determine which concepts are parent nodes, child nodes, and associated nodes.
- **Core Node:** Enterprise Security
- **Child Nodes:** Intrusion Detection, Zero Trust Network Access (ZTNA), Endpoint Security
- **Associated Entities:** NIST Compliance, Firewalls, Threat Intelligence

#### 2. Resolve Topical Gaps Programmatically
Analyze your competitors not by what keywords they rank for, but by which entity relations they cover. If they have comprehensive assets explaining 'Zero Trust Architecture' but you lack articles on 'Least Privilege Access' (a key relationship of Zero Trust), your authority graph is incomplete.

#### 3. Optimize Internal Anchor Paths
Anchor texts should denote relationship pathways. Instead of generic 'click here' or repetitive 'cybersecurity services' links, use precise contextual anchors that explain the relation:
- *'...to implement our **[Zero Trust Access Control system]** which establishes a strict least-privilege protocol.'*

#### 4. Ground Your Content in Verified Facts
Google's Quality Rater Guidelines (E-E-A-T) prioritize factual accuracy. Ground your claims with external links pointing to authoritative, established knowledge nodes (such as official university papers, governmental websites, or recognized industry standards).`
  },
  {
    id: "ins-03",
    title: "A Schema Strategy for Growth Brands: Structuring Your Site for Google's Knowledge Graph",
    category: "Entity SEO",
    readTime: "5 min read",
    date: "April 08, 2026",
    summary: "Schema markup and structured data are what let Google\u2019s Knowledge Graph recognize your brand as a verified entity. This blueprint links multi-location businesses, international corporations, and executive profiles into a single machine-readable schema.org graph for stronger entity recognition and Knowledge Panel eligibility.",
    contentMarkdown: `## Structuring your site's knowledge graph

Growth brands often suffer from fragmented digital presences: multiple regional domains, dozens of social profiles, various executive personal brands, and thousands of product SKUs. Without a unified schema strategy, Google struggles to reconcile this into a single entity card.

### The Unified Graph Method

Instead of injecting isolated, disjointed schema blocks on separate pages (e.g., a LocalBusiness schema on one page, an Organization schema on the home page, and Product schema on a third), you must construct a single **Unified JSON-LD Graph**.

Using the \`@graph\` array in JSON-LD, you can link all properties together in a single script block on your main pages:

\`\`\`json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://brand.com/#organization",
      "name": "Global Tech Corp",
      "url": "https://brand.com",
      "sameAs": [
        "https://www.wikidata.org/wiki/Q12345",
        "https://www.linkedin.com/company/globaltech"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://brand.com/#website",
      "url": "https://brand.com",
      "name": "Global Tech Corp Website",
      "publisher": {
        "@id": "https://brand.com/#organization"
      }
    }
  ]
}
\`\`\`

### Key Benefits of Unified Schema Graphs

1. **Eliminates Entity Ambiguity:** Directly informs Google that the organization that publishes the website is the exact same entity listed in the Wikidata database.
2. **Accelerates Indexing Speed:** Google's crawlers can trace the entire organizational topology in a single, well-structured pass.
3. **Protects Brand SERP Real Estate:** Directly correlates your brand's properties to guarantee a rich Knowledge Panel with clean social profiles, logos, and executive names.`
  },
  {
    id: "ins-04",
    title: "Local Entity SEO: How AI Search Engines Understand Location-Based Businesses",
    category: "Local SEO",
    readTime: "6 min read",
    date: "July 14, 2026",
    summary: "Local SEO used to mean stuffing a city name into your title tag. AI search reads location as an entity attribute, not a keyword. Here's how to structure a local business so both Google's map pack and AI answer engines recognize exactly where you operate and what you do.",
    contentMarkdown: `## Location Is an Entity Property, Not a Keyword

For years, local SEO meant writing 'plumber in Austin' fifteen times across a page and hoping Google noticed. That approach is now actively counterproductive. Modern search systems, including Google's local algorithm and generative answer engines like AI Overviews, don't scan for city names in prose. They resolve a business to a **specific entity** with a fixed set of properties: name, address, phone, category, service area, and its relationship to other verified local entities.

If those properties aren't structured and consistent everywhere your business appears online, AI systems either guess or skip you entirely, no matter how many times you typed your city name.

### The Four Signals That Actually Matter

#### 1. NAP Consistency Across the Web
Name, Address, and Phone number must match exactly, character for character, across your website, Google Business Profile, and every citation source (directories, industry listings, review sites). A mismatch as small as 'St.' versus 'Street' creates ambiguity about whether two listings refer to the same entity, which weakens confidence signals for both traditional rankings and AI citation.

#### 2. LocalBusiness Schema, Nested Correctly
A bare LocalBusiness schema block dropped into your homepage footer does little on its own. It needs to nest your address, geo-coordinates, service area, opening hours, and price range as connected properties, and link back to your Organization schema with a shared @id. This is what lets a crawler resolve 'this page' and 'this business' as the same verified entity instead of two loosely related signals.

#### 3. Neighborhood-Level Content Specificity
Generic city-wide service pages compete against thousands of identical templates. Structuring content around specific neighborhoods, landmarks, or service zones, paired with real operational details (response times, areas actually served, local project examples) gives search systems concrete, differentiated facts to extract rather than repeated boilerplate.

#### 4. Review and Citation Density on Verified Platforms
Google Business Profile reviews, industry-specific directories, and local citation networks function as external validation of the entity's existence and category. Volume matters less than consistency: the same business category and description language reinforced across many sources builds a clearer entity profile than a single glowing but isolated review.

### Why This Matters More With AI Search

When someone asks an AI assistant 'who's a reliable electrician near me,' the model isn't crawling live map results. It's drawing on whatever structured, consistent local entity data it has already encountered and trusts. A business with clean schema, consistent NAP, and dense verified citations has a real chance of being surfaced. A business relying on keyword-stuffed city names in body text is, for practical purposes, invisible to these systems.

Local SEO hasn't gotten more complicated. It's gotten more literal: search systems now expect you to state your entity properties plainly and consistently, rather than implying them through repetition.`
  }
];
