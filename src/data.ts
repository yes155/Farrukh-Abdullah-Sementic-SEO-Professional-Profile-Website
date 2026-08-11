import { 
  SpecItem, 
  CredibilityCard, 
  MetricCard, 
  Project, 
  Service, 
  ProcessStep, 
  Certification, 
  ExperienceItem, 
  Insight,
  Testimonial 
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
  },
  {
    id: "case-03",
    title: "Semantic SEO and AI/LLM alignment for a SaaS analytics platform",
    industry: "SaaS / AI Solutions",
    challenge: "Azuno, a fast-growing SaaS company specializing in AI-driven analytics, struggled to gain organic traction despite an innovative product. Its content lacked the semantic depth for search engines and AI systems to interpret intent, geo-targeting was weak, and potential customers in its core San Francisco market were missing the brand entirely.",
    strategy: "Designed a semantic SEO framework tailored to Azuno's needs: reorganized content around entities, context, and relationships to match how LLMs process queries; built localized landing pages and optimized the Google Business Profile to target San Francisco's tech community; and structured content to be machine-readable and easily surfaced in AI-powered search experiences.",
    execution: [
      "Reorganized existing content around entities, context, and relationships instead of isolated keywords.",
      "Built localized landing pages targeting San Francisco's tech community and optimized the Google Business Profile.",
      "Structured content to be machine-readable and easily surfaced in AI-powered search experiences.",
      "Aligned the broader content strategy with how large language models interpret and surface information, future-proofing the SEO approach."
    ],
    results: [
      "+120% increase in organic traffic within 4 months",
      "Top 3 local search rankings for \"AI analytics San Francisco\" and related geo-keywords",
      "35% growth in qualified leads from Bay Area businesses",
      "Improved discoverability across AI-driven search platforms, positioning Azuno as a thought leader in the AI/LLM space"
    ],
    technologies: ["Semantic SEO", "Entity Optimization", "Local SEO", "Google Business Profile", "LLM Content Alignment"],
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Explore the semantic + AI alignment strategy"
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
Make sure your founder, key executives, and physical locations are verified entities across the web. Connect your personal LinkedIn, Google Business Profile, and industry memberships with Schema markup to create an solid circle of trust.`,
    relatedArticleIds: ["ins-03", "ins-05"],
    relatedServicePath: "/services/ai-seo-consulting",
    relatedServiceName: "AI SEO Consulting",
    relatedCaseStudyPath: "/case-studies/azuno",
    relatedCaseStudyName: "Azuno: Semantic SEO & AI/LLM Alignment"
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
Google's Quality Rater Guidelines (E-E-A-T) prioritize factual accuracy. Ground your claims with external links pointing to authoritative, established knowledge nodes (such as official university papers, governmental websites, or recognized industry standards).`,
    relatedArticleIds: ["ins-05", "ins-03"],
    relatedServicePath: "/services/semantic-seo",
    relatedServiceName: "Semantic SEO & Topical Authority",
    relatedCaseStudyPath: "/case-studies/windcave",
    relatedCaseStudyName: "Windcave: Semantic SEO Structuring & Entity Clustering"
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
3. **Protects Brand SERP Real Estate:** Directly correlates your brand's properties to guarantee a rich Knowledge Panel with clean social profiles, logos, and executive names.`,
    relatedArticleIds: ["ins-01", "ins-02"],
    relatedServicePath: "/services/semantic-seo",
    relatedServiceName: "Semantic SEO & Topical Authority",
    relatedCaseStudyPath: "/case-studies/windcave",
    relatedCaseStudyName: "Windcave: Semantic SEO Structuring & Entity Clustering"
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

Local SEO hasn't gotten more complicated. It's gotten more literal: search systems now expect you to state your entity properties plainly and consistently, rather than implying them through repetition.`,
    relatedArticleIds: ["ins-02", "ins-05"],
    relatedServicePath: "/services/local-seo",
    relatedServiceName: "Local SEO Services",
    relatedCaseStudyPath: "/case-studies/local-seo-systems",
    relatedCaseStudyName: "Local SEO Systems: US Service Niches"
  },
  {
    id: "ins-05",
    title: "How to Build a Topical Map: The Semantic SEO Framework for Topical Authority",
    category: "Topical Authority",
    readTime: "7 min read",
    date: "July 17, 2026",
    summary: "A topical map is the structural blueprint behind topical authority — it's what separates a site that ranks for one keyword from one that becomes the trusted answer for an entire subject. Here's the Central Entity, Source Context, and Core/Outer Section framework that turns a random article list into a connected authority structure.",
    contentMarkdown: `## Topical Authority Isn't Article Count

Publishing fifty articles on a topic doesn't create topical authority. Publishing fifty articles that were never planned against a shared structure creates fifty disconnected pages competing with each other for the same crawl budget and diluting the same entity signals.

Topical authority is a formula, not a volume metric:

**Topical Authority = Topical Coverage × Historical Data**

**Topical Coverage** is the complete, structured processing of every factual attribute of your Central Entity within a defined border — not keyword density, not page count. **Historical Data** is the accumulated quality of user-engagement signals over time. A topical map is the document that plans Topical Coverage before a single article gets written.

### The Two Inputs Every Map Starts From

#### 1. Central Entity
The single anchor noun or concept that must appear, in some form, on every page in the map — at both the macro level (H1, title tag) and the micro level (individual paragraphs). For a semantic SEO consultant, the Central Entity is simply **"Farrukh"** as a professional entity — not "SEO agency," not "SEO services." Every page should strengthen that one entity, not a generic category.

#### 2. Source Context
The site's business model or monetization purpose, and it acts as a filter on the Central Entity. It determines which of the entity's attributes belong in the map and which are out of scope. The same Central Entity produces a completely different map depending on Source Context:
- **Central Entity "Apple" + Source Context "Nutrition"** → vitamins, calories, digestion
- **Central Entity "Apple" + Source Context "Investing"** → market cap, supply chain, earnings

Skip this step and you end up writing about attributes that don't serve your actual business model — technically related to the entity, but irrelevant to why anyone would hire you.

### Core Section vs. Outer Section

Once Central Entity and Source Context are defined, pages split into two structural roles:

| Section | What It Covers | Job |
|---|---|---|
| **Core Section** | Main attribute(s) of the Central Entity that exist *because of* the Source Context | Carries the highest informational and commercial value — this is what you're actually known for |
| **Outer Section** | Minor attributes that round out coverage | Builds Historical Data, broadens topical relevance, and feeds trust signals into the Core Section as neighborhood content |

A site with only a Core Section looks thin to both crawlers and readers — it answers the main question but nothing adjacent to it. A site with only an Outer Section never establishes what it's actually the authority on. Both sections have to exist, and the Core Section needs to be planned first.

### EAV: One Fact Per Page

Every page in a topical map should map to a unique **Entity → Attribute → Value** triple (Subject → Predicate → Object). If two planned pages resolve to the same EAV signature — same entity, same attribute — they're the same page wearing two URLs, and they'll cannibalize each other in search results. Before adding a row to a topical map, check it against every existing row: does this cover a genuinely different attribute, or a rephrasing of one already covered?

### Contextual Bridges: Why Isolated Pages Fail

A topical map isn't just a list of planned pages — it's a network. Each page should connect to related pages through **contextual bridges**, which can be:
- **Linkless** — thematic consistency and shared terminology across pages without a hyperlink
- **Hyperlinked** — an explicit link where the surrounding sentence states *why* the two topics relate, using a predicate verb rather than a bare "click here"

A page with zero inbound or outbound contextual bridges is an orphan. Orphan pages don't contribute to topical authority even if the content itself is excellent, because nothing tells search engines — or readers — how that page's entity relates to the rest of the site's knowledge graph.

### A Minimal Build Sequence

1. **Define Source Context** in one sentence — what does this site monetize, and how?
2. **Confirm the Central Entity** — the one anchor that's constant across every page you'll ever publish here.
3. **Research the entity's ontology** — its sub-entities, properties, and connections, so you know the full attribute space before choosing what to cover.
4. **Name the Core Section** — the main attributes that exist specifically because of your Source Context.
5. **Name the Outer Section** — minor attributes that build breadth and trust.
6. **Assign each page a unique EAV signature** before writing it, to catch cannibalization before it happens.
7. **Plan contextual bridges** between pages at map-design time, not as an afterthought during editing.

Skipping straight to step 7 — writing content and linking it after the fact — is the most common reason topical authority efforts stall: the map gets built backwards, from content to structure, instead of from structure to content.`,
    relatedArticleIds: ["ins-02", "ins-03"],
    relatedServicePath: "/services/semantic-seo",
    relatedServiceName: "Semantic SEO & Topical Authority",
    relatedCaseStudyPath: "/case-studies/windcave",
    relatedCaseStudyName: "Windcave: Semantic SEO Structuring & Entity Clustering"
  },
  {
    id: "entity-first-geo",
    title: "Entity-First GEO: The Semantic SEO Foundation That Decides AI Citations",
    category: "AI Search",
    readTime: "8 min read",
    date: "August 3, 2026",
    summary: "Most GEO advice is tactical — answer capsules, statistics, quotes. But every study that tracks who actually gets cited comes back to the same structural trait: entity clarity. Here is the entity-first framework that turns semantic SEO into AI citation rank.",
    metaTitle: "Entity-First GEO: How Semantic SEO Wins AI Citations",
    metaDescription: "Why entity clarity, not keywords, decides which brands get cited by ChatGPT, Perplexity and AI Overviews. The 4 signals plus a 5-step entity audit.",
    contentMarkdown: `## The Short Version

AI engines do not rank pages the way Google's blue links do. They select sources and assemble an answer. Every dataset that tracks who actually gets selected — Semrush's AI Visibility Index, Ahrefs' citation studies, Google's own guidance — keeps pointing at the same structural trait: **entity clarity**. The brand that knows what it is, states its attributes plainly, and keeps that story consistent across the web gets cited. The brand that only chases keywords does not, no matter how many statistics it adds.

Entity-first GEO is not a new tactic. It is semantic SEO applied to the generative engine: define the entity, cover its attributes, connect it to verified context, and let citation rank follow.

## What Every AI Citation Study Agrees On

When Semrush tracked 2,500 prompts across Google AI Mode and ChatGPT in 2026, the brands that showed up consistently shared three structural characteristics: **entity clarity, content extractability, and multi-platform presence** (Semrush AI Visibility Index, 2026). Notice that none of the three is a keyword. None is a word count. All three describe how cleanly the AI system can resolve the brand to a concept.

Ahrefs reached the same conclusion from a different angle. Analyzing the top 50 websites cited across 76.7 million AI Overviews, it found a 0.70 correlation between being mentioned on highly-linked pages and AI Overview visibility (Ahrefs, 2026). The entity that is already corroborated elsewhere is the entity AI trusts.

Even the tactics from Princeton's GEO paper — answer capsules at +40%, statistics at +41%, expert quotes at +37% — only work when the underlying source is clearly about one thing (Aggarwal et al., Princeton, 2024). A statistically dense page about nothing in particular does not get cited.

## Entity Clarity Is a Ranking Signal, Not a Style Choice

Entity clarity means an AI system can answer three questions about your source in under a second:

- **What are you?** Your name and category resolve cleanly — "Semantic SEO strategist," not "a digital person who does marketing things."
- **What do you know?** Your pages cover the attributes and facts of that category, not a scattered mix of loosely related topics.
- **Who else confirms you?** Your brand, your people, and your locations appear consistently on the platforms AI systems already trust.

This is the same logic behind Koray Tuğbuerk Gübür's Entity Attribute Value model from semantic SEO: a page earns relevance when the entity, its attribute, and a concrete value are all present and consistent. The generative engine simply makes the reward for that consistency more visible, because an LLM synthesizes from whatever entity profile it can resolve.

## The Four Entity Signals AI Engines Check

#### 1. Name and Category Resolution

Your organization, author, and product names must match across your site, social profiles, directories, and review platforms. A brand cited as "Farrukh Abdullah Advisory" on its site and "Farrukh Abdullah SEO" everywhere else splits into two weak entities. Consistent naming is the cheapest entity signal you can fix.

#### 2. Attribute Completeness

For your central entity, list every attribute a searcher could care about — services, credentials, pricing, location, experience, case results — and cover each one somewhere on your site. Missing attributes are missing facts the AI has to guess or skip.

#### 3. Contextual Consistency

A page about AI search should not wander into unrelated asides. Koray's method is explicit: do not dilute the context with irrelevant opinions or analogies. The more every page on your site reinforces one macro context, the stronger the entity profile.

#### 4. External Corroboration

Wikipedia, Wikidata, LinkedIn, Google Business Profile, industry directories, and press mentions act as verification nodes. AI engines weigh third-party corroboration heavily — one of the strongest citation predictors in Ahrefs' brand factor study was being mentioned in contexts AI already trusts.

## An Entity Audit You Can Run in an Afternoon

| Step | Action | Question it answers |
|---|---|---|
| 1 | Search your exact brand name on ChatGPT, Perplexity, and Google AI Mode | Does AI describe you accurately or as a different entity? |
| 2 | Export your Search Console top 50 pages and tag each page's central entity | Are your pages resolved to one concept or several competing ones? |
| 3 | Check NAP + name consistency on 5 high-signal platforms | Is there one entity or five fragments? |
| 4 | Map each page to an Entity → Attribute → Value triple | Do two pages claim the same triple (cannibalization)? |
| 5 | Verify your Organization + Person schema resolve to one @id graph | Does Google see your site, person, and brand as connected? |

## How Entity-First GEO Changes What You Write

Entity-first writing is stricter than keyword writing. Before drafting, name the entity and the single attribute the page exists to prove. Then write every heading, fact, and table in service of that attribute. Statistics still matter — AI citation studies consistently reward concrete numbers — but they are evidence for the entity, not decoration.

This is where the tactical GEO playbook and semantic SEO finally converge. Answer capsules, question headings, and data tables are all extractability tactics. Entity clarity decides whether the extraction is worth doing. Fix the foundation first, then optimize the extraction.

## A Five-Step Entity-First Content Workflow

1. **Resolve the entity.** Confirm name, category, and @id references across your site and the web.
2. **Define the E-A-V for the page.** One entity, one attribute, one value set.
3. **Write answer-first.** Lead with the direct answer, then the evidence, then the nuance.
4. **Corroborate externally.** Add a LinkedIn post, a directory listing, or a community answer that reinforces the same claim.
5. **Re-measure.** Track citation rate and share of voice per query, not vanity rankings.

## Why This Fits Inside a Topical Map

Entity-first GEO is the citation layer on top of a topical map. The topical map plans which attributes of your central entity get covered across the site; entity-first GEO makes sure each covered attribute is written so an LLM can extract and credit it. If you have not built the map yet, start with How to Build a Topical Map before optimizing individual pages — a map tells you which entities deserve the depth.

## The Bottom Line

GEO tactics move the needle a few percentage points. Entity clarity is the difference between being eligible for citation and being invisible to the retrieval system. Define the entity, cover its attributes, corroborate it externally, and every other GEO technique finally has something to compound on.`,
    relatedArticleIds: ["ins-05","ins-02","schema-as-citation-signal"],
    relatedServicePath: "/services/ai-seo-consulting",
    relatedServiceName: "AI SEO Consulting",
    relatedCaseStudyPath: "/case-studies/windcave",
    relatedCaseStudyName: "Windcave: Semantic SEO Structuring & Entity Clustering"
  },
  {
    id: "answer-capsules-ai-extraction",
    title: "The 120–150 Word Answer Capsule: The Exact Passage Structure AI Engines Extract",
    category: "AI Search",
    readTime: "9 min read",
    date: "August 4, 2026",
    summary: "LLMs pull passages, not pages. The 120–150 word answer capsule — a self-contained answer directly under each heading — produced a +40% visibility lift in Princeton's GEO study. Here is the exact structure, five reusable templates, and before-and-after rewrites.",
    metaTitle: "Answer Capsules: The 120–150 Word Structure AI Cites",
    metaDescription: "Templates and before/after examples for the 120–150 word answer capsules that boosted GEO visibility +40% in Princeton's study.",
    contentMarkdown: `## The Short Version

An **answer capsule** is a self-contained 120–150 word answer placed directly under a heading, written so it makes sense with zero surrounding context. In Princeton's GEO study, adding answer capsules was one of the most reliable visibility boosts measured, in the same family as statistics (+41%) and expert quotes (+37%) (Aggarwal et al., 2024). The reason is mechanical: retrieval-augmented systems pull passages, not pages, so every passage must carry its own answer.

## Why LLMs Extract Passages, Not Pages

Google's AI Mode, ChatGPT with browsing, and Perplexity do not read a page the way a person scrolls it. They retrieve candidate passages and assemble an answer from the fragments that best match the query. Research across citation studies puts a sharp number on this: around 44% of LLM citations come from the first 30% of a page. If your core answer sits in the conclusion, the retrieval system often never reaches it.

The practical consequence is that every section of your article is a candidate for a citation on its own. Write each section as if a stranger will read only that section, on its own, with no other context from the page.

## What an Answer Capsule Actually Is

A capsule has five parts:

- **A direct first sentence** that answers the question in the heading. No throat-clearing.
- **One core claim** stated with a concrete fact or number where possible.
- **A supporting explanation** of why the claim is true, in 2–3 sentences.
- **A self-contained boundary** — no "as mentioned above," no "we discussed earlier."
- **A length of roughly 120–150 words**, short enough to be extracted whole, long enough to be substantive.

The heading above the capsule matters as much as the capsule itself. Question headings signal exactly what the passage answers, which is why question-based headings outperform topic labels in both human scanning and AI extraction.

## The +40% Data Point and Why It Holds

The Princeton study tested six content optimization strategies across 10,000 queries and measured visible citation lift: statistics at +41%, answer capsules at +40%, expert quotes at +37%, inline citations at +22%. Keyword stuffing, by contrast, reduced visibility by 10%. Two lessons:

- **Extractability tactics compound.** Statistics, capsules, and quotes are all ways to make a passage self-sufficient and quotable.
- **Over-optimization backfires.** AI models detect stuffed, unnatural copy and deprioritize it.

## Five Reusable Capsule Templates

#### 1. The Definition Capsule

"X is [definition]. It is distinct from [adjacent concept] because [key difference]. In practice, [concrete example]. Since [date or source], [what changed]."

Use this for any concept your audience might ask AI to define. Definitional passages are citation anchors for the query and its related forms.

#### 2. The Comparison Capsule

"To choose between A and B, compare [criterion 1], [criterion 2], and [criterion 3]. A wins on [attribute] and suits [scenario]. B wins on [attribute] and suits [scenario]. If your priority is [use case], pick [choice]."

Comparison content performs strongly in AI answers — decision queries are among the highest-volume types in AI search.

#### 3. The How-To Capsule

"To [goal], follow these steps. Step 1: [action]. Step 2: [action]. Step 3: [action]. You know it worked when [checkpoint]. Budget roughly [time or cost]."

Step sequences map cleanly onto the instruction lists AI engines generate.

#### 4. The Data Capsule

"[Claim] with [number] in [timeframe], according to [source], [date]. A follow-up study by [source] found [second number]. The practical implication is [what the reader should do]."

Each data capsule should carry two dated facts — the same two-statistics-per-section discipline used in research-fed articles.

#### 5. The Decision Capsule

"Choose [option] when [condition]. Choose [option B] when [different condition]. If you are unsure, [tiebreaker test]. The cost of guessing wrong is [downside]."

Decision capsules answer the "which should I pick" queries that AI Mode data shows are growing fastest.

## Before and After: One Heading, Two Paragraphs

**Before (vague, not extractable):**
"Schema markup is quite important for modern search. Many experts agree that adding structured data to your pages helps search engines and AI systems understand your content better. There are different types of schema and you should probably use some of them."

**After (self-contained answer capsule):**
"Schema markup tells search engines and AI systems what a page is about in a language they parse directly. Pages with schema are cited more often by AI tools, though adding schema to pages that were already cited made no measurable difference (Ahrefs, 2026). For most sites the highest-value types are Article, Organization, Breadcrumb, and FAQ — they resolve the entity, the author, and the question-answer pairs AI engines extract most."

The after version is a standalone answer. It could be cited on its own, with nothing else from the page.

## Capsule Rules Checklist

- Put the direct answer in the first sentence of each section.
- Keep each capsule between 120 and 150 words.
- Use question headings above every capsule.
- Include at least two dated statistics per article section.
- Never reference other sections — "as discussed" breaks extraction.
- Front-load your conclusion; 44% of citations come from the first 30%.

## When Capsules Overlap with FAQ Schema

Answer capsules and FAQ markup serve the same goal from different directions: both create clean question-answer pairs for machines to extract. A page built with capsules gives you the content; structured data gives you the explicit Q&A mapping. They are complementary, not competing — see how FAQ schema performs specifically in AI Overviews for the pairing strategy that works.

## The Bottom Line

Answer capsules are the cheapest extractability upgrade available to any site. They require no design, no schema, and no tooling — only a stricter way of writing sections. Structure every heading as a question, answer it in 120–150 words in the first block, and you have built the exact passage shape retrieval systems are looking for.`,
    relatedArticleIds: ["entity-first-geo","geo-measurement-stack","ins-01"],
    relatedServicePath: "/services/ai-seo-consulting",
    relatedServiceName: "AI SEO Consulting",
    relatedCaseStudyPath: "/case-studies/azuno",
    relatedCaseStudyName: "Azuno: Semantic SEO & AI/LLM Alignment"
  },
  {
    id: "ai-mode-search-language",
    title: "AI Mode Rewrote Search Language: How to Write Content for Conversation, Not Keywords",
    category: "AI Search",
    readTime: "7 min read",
    date: "August 5, 2026",
    summary: "Google's own AI Mode data shows users narrate full questions, follow up more every month, and search by image more than any other query type. Content written for three-word keywords misses all of it. Here is the rewrite system.",
    metaTitle: "Writing for AI Mode: The New Search Language of 2026",
    metaDescription: "Google AI Mode users narrate full questions and follow up 40% more each month. How to rewrite content for conversational and multimodal queries.",
    contentMarkdown: `## The Short Version

Google's AI Mode data, published May 2026, describes a searcher most content strategies were never built for. Users narrate full context into the search bar, follow up an average of 40% more every month, and input by image more than any other query type. The top opening words in AI Mode are "what," "how," "I," "is," and "can." Content written for a three-word keyword target answers a shrinking share of the queries actually being asked.

## What Google's AI Mode Data Actually Says

The report "How People Are Using AI Mode in the U.S." covered AI Mode from its May 2025 launch through April 2026 and put hard numbers on the behavior shift:

- **Follow-up queries grew more than 40% per month on average.** Users stay in a conversation instead of landing on one answer and leaving.
- **More than one in six AI Mode searches is multimodal** — voice, image, or video input rather than typed text.
- **Image-input searches grew more than 40% month over month** since launch — the fastest-growing query type in the system.
- **The top five AI Mode keywords are Information, Identify, Find, Explain, and Summarize.** The top opening words are what, how, I, is, and can.
- **Queries starting with "which" grew 40% faster** over six months — AI Mode is becoming a decision-support tool, not just a discovery layer.
- Google reported more than 1 billion monthly AI Mode users, with query volume doubling every quarter since launch.

The report organizes AI Mode behavior into five categories: Explore, Decide, Learn, Create, and Do. Brainstorming queries grew 30% faster than the overall pace; planning queries grew 80% faster.

## The Gap: Your Content Still Answers 2024 Queries

Here is the gap most content strategies have not closed. A page written for the keyword [best running shoes 2025] does not serve the query "I'm training for my first 5K and I've never bought running shoes before, which pair should I start with and how do I know if they fit right?" Both express shoe-buying intent. Only the second describes what the AI Mode user is actually doing.

The practical fix is to stop optimizing page titles, meta descriptions, and H2 structures around three-to-four-word keyword targets, and start optimizing around the full conversational question and its follow-ups.

## How to Rewrite a Page for Conversational Search

#### 1. Rewrite the Primary Keyword as a Natural-Language Prompt

Take the main keyword for each page and rewrite it the way a person would actually ask in conversation. "Local SEO" becomes "How do I make my local business show up for people searching near me?" If your content does not answer the longer-form version, you have a gap a competitor will fill.

#### 2. Answer the Follow-Up Inventory

The 40% monthly growth in follow-up queries means users are not satisfied with one answer. For every entry-point question on your site, write the follow-up questions people naturally ask next, and answer them in the same article or a linked one. Most sites do not have this inventory at all.

#### 3. Cover the Decision Layer

"Which" queries are the fastest-growing decision signal. If your topic involves choices, include explicit comparison content — criteria, tradeoffs, and a clear recommendation — because that is what a user in Decide mode is asking for.

## Building a Follow-Up Question Inventory

- List your 10 highest-traffic entry pages and their primary keyword.
- Ask the conversational version of that keyword out loud, then the natural follow-ups.
- Check AI engines: prompt ChatGPT and Perplexity with your main question and note the sub-questions they generate and the sources they cite.
- Map each sub-question to a section in the existing article or a new article node.
- Track which follow-ups are unanswered — those are the lowest-risk content opportunities you have.

## Multimodal: Alt Text as a Search Surface

With image input the fastest-growing query type, alt text is no longer just accessibility. It is a query surface. Alt text written for a person scanning a screen and alt text written for a user who photographed a product and asked AI Mode what it is and where to buy it are different things. Write alt text that names the entity, the context, and the category: "white ergonomic office chair with lumbar support, sold by [brand], mid-century style" instead of "chair." The same discipline applies to image filenames and surrounding captions.

## Five Content Types for the Five Modes

| Mode | User goal | Content that wins |
|---|---|---|
| Explore | Understand the landscape | Definitions, explainers, comparison overviews |
| Decide | Choose between options | Comparison tables, criteria, recommendations |
| Learn | Build a skill | Structured how-tos, step sequences, checklists |
| Create | Make something | Templates, examples, downloadable assets |
| Do | Take action | Location, pricing, booking, step-by-step instructions |

## The Bottom Line

The searcher changed; the keywords did not stop existing, but they stopped being the primary shape of demand. If you write content that answers the conversational version of your topic — plus the follow-ups and the decision questions — you are aligned with how AI Mode users actually search in 2026. Keyword pages are still indexed; conversational coverage is what gets cited.`,
    relatedArticleIds: ["geo-measurement-stack","answer-capsules-ai-extraction","ins-01"],
    relatedServicePath: "/services/ai-seo-consulting",
    relatedServiceName: "AI SEO Consulting",
    relatedCaseStudyPath: "/case-studies/azuno",
    relatedCaseStudyName: "Azuno: Semantic SEO & AI/LLM Alignment"
  },
  {
    id: "schema-as-citation-signal",
    title: "Schema as a Citation Signal: Resolving What the Conflicting Studies Actually Mean",
    category: "Entity SEO",
    readTime: "8 min read",
    date: "August 6, 2026",
    summary: "One study says schema pages get cited more. Another says adding schema to already-cited pages does nothing. Google's May 2026 guide says structured data is not required for generative AI search. All three are true — here is how to reconcile them.",
    metaTitle: "Does Schema Help AI Citations? The Data, Resolved",
    metaDescription: "Ahrefs, Princeton, and Google's 2026 guide say different things about schema and AI citations. Here is how to reconcile them into one priority list.",
    contentMarkdown: `## The Short Version

Schema markup is in the middle of a three-way contradiction in 2026. Ahrefs found pages with schema are cited more often by AI tools, but adding schema to already-cited pages made no significant difference. Third-party research credits structured data with roughly a 30% lift in source citation on ChatGPT and Perplexity. And Google's official May 2026 guide says structured data is not required for generative AI search. The resolution: schema is a **competition enabler, not a visibility engine**. It helps you become eligible for citation by removing ambiguity; it does not make an ineligible page eligible.

## Study 1: Ahrefs — Schema Helps, But Retroactively

Ahrefs' analysis of AI citations found that pages carrying schema are cited more often than pages without it. The nuance is the second half of the finding: retrofitting schema onto pages that were already being cited produced no measurable change. The interpretation that matters — schema correlates with being the kind of page AI engines cite, and it matters most at the point a page is being built or rebuilt, not as a bolt-on after the fact.

## Study 2: Princeton-Adjacent Research — A Lift on Non-Google Engines

Independent testing around the Princeton GEO line of research reported that source citation improves by roughly 30% when schema markup is included, with the effect concentrated on ChatGPT and Perplexity rather than Google. The mechanism makes sense: ChatGPT routes through Bing's index and Perplexity through its own, and both parse structured data more aggressively than Google's native systems. If your AI citation strategy is focused on non-Google engines, schema moves the needle more than it does in Google AI Overviews.

## Study 3: Google's Official Position (May 2026)

Google's guide "Optimizing your website for generative AI features on Google Search," published May 15, 2026, was explicit: special schema or Markdown versions of pages are not required for inclusion in Google's generative AI features. AI Overviews and AI Mode draw from the same index and quality systems as core search. Google's point is that schema is not a key you can insert to unlock AI visibility.

## Why All Three Studies Are True

| Claim | True because |
|---|---|
| Schema pages get cited more | Schema correlates with well-structured, entity-resolved sites — the kind AI trusts |
| Retroactive schema changes nothing | The page was already eligible; schema was never the blocker |
| Schema adds +30% on ChatGPT/Perplexity | Non-Google engines parse structured data more aggressively |
| Schema is not required for Google genAI | Google uses the same core ranking and quality systems for AI features |

The pattern: schema is infrastructure. It clears ambiguity and makes your entity resolvable, which is a prerequisite for trust. It does not manufacture trust where none exists. A thin page with perfect schema is still a thin page.

## A Schema Priority List for AI Visibility

Work down this list in order. Each item removes a specific source of ambiguity rather than adding decoration.

- **Organization** — the anchor of your entity graph. It should carry a stable @id, sameAs links, and a publisher relationship to every article.
- **Person (author)** — every article should reference the same author @id so authorship is unambiguous. This is an E-E-A-T signal that carries into AI citation decisions.
- **Article / TechArticle** — defines the piece itself: headline, datePublished, dateModified, author, publisher. This is the container AI engines use to place your content in time and context.
- **BreadcrumbList** — defines where the page sits in your site structure, which supports topical context.
- **FAQPage** — maps explicit question-answer pairs, the same shape retrieval systems build answers from.
- **LocalBusiness** (for local sites) — resolves location as an entity attribute; Google's 2026 guide explicitly calls out Google Business Profile as a local AI signal.

Skip self-serving Review and AggregateRating markup on your own organization — Google's policy forbids it, and a manual action strips more value than the markup ever added.

## Schema Hygiene Rules That Matter

- **Use one @graph.** A single script block with Organization, WebSite, Person, and Article nodes connected by @id is clearer than scattered blocks.
- **Keep @id values stable.** The same URI coordinate across pages is what connects your entity graph.
- **Validate everything.** Invalid JSON-LD is worse than none — it can be dropped silently and can trigger review.
- **Do not schema-stuff.** Adding HowTo schema to a page that is not a how-to risks rich-result policy issues.

## The Practical Synthesis

Build schema at the same time you build the page, tie every node back to a stable entity graph, and treat it as the documentation of your entity rather than an SEO trick. If you are starting from an existing site, the highest-return schema work is Organization + Person + Article connected by @id — the three nodes that make your author and publisher unambiguous. That is where entity resolution, E-E-A-T, and AI trust overlap.

## The Bottom Line

The contradiction dissolves once you separate eligibility from ranking. Schema makes your content resolvable and your entity trustworthy — it earns you a seat at the citation table. It does not decide whether you are chosen. Build it correctly, tie it to a connected graph, and let content quality do the rest. For the entity-graph blueprint behind this, the schema strategy for growth brands covers the full pattern.`,
    relatedArticleIds: ["ins-03","entity-first-geo","ins-05"],
    relatedServicePath: "/services/semantic-seo",
    relatedServiceName: "Semantic SEO & Topical Authority",
    relatedCaseStudyPath: "/case-studies/windcave",
    relatedCaseStudyName: "Windcave: Semantic SEO Structuring & Entity Clustering"
  },
  {
    id: "content-freshness-ai-search",
    title: "The Freshness Advantage: Why AI Systems Prefer Newer Content and How to Build a Refresh Pipeline",
    category: "Topical Authority",
    readTime: "8 min read",
    date: "August 7, 2026",
    summary: "Ahrefs found AI-cited content is 25.7% fresher than what ranks organically. Freshness is not a tip — it is a system. Here is a refresh pipeline tied to a topical map that keeps every node current.",
    metaTitle: "Content Freshness for AI Search: The 25.7% Edge",
    metaDescription: "AI-cited content is 25.7% fresher than organic results. How to build a measurable refresh pipeline instead of vague 'keep it updated' advice.",
    contentMarkdown: `## The Short Version

Ahrefs' research into AI citations produced a number most teams have not acted on: content cited by AI assistants is **25.7% fresher** than content ranking in organic Google results. AI engines weight recency when they select sources, and a 2024 guide with no updates loses ground to a 2026 article on the same topic. Freshness is not a content tip. It is a system — and in a topical map, it is a property of every node, not a monthly chore.

## The Data: AI Rewards Recency

Two findings define the freshness problem in 2026:

- **AI-cited content is 25.7% fresher than organic results** (Ahrefs AI search research, 2026). The gap between what ranks and what gets cited is a recency gap.
- **Fresh information wins retrieval.** Ahrefs' research found AI assistants favor fresh information and recommended keeping claims and product details current across every owned profile.

This is not speculation about a future ranking factor. It is a measured property of which sources get selected today. Recency is part of the retrieval decision, not a signal you can earn later.

## Freshness Is a Topical Map Problem, Not a Calendar Problem

Most teams treat freshness as "update the blog sometimes." That produces random edits and no measurable outcome. In Koray Tuğbuerk Gübür's Topical Authority framework, freshness is a property of the topical map: every node (page) has a relationship to time, and a source that keeps its nodes current compounds Historical Data. His formula is direct — Topical Authority = Topical Coverage x Historical Data — and recency is part of Historical Data.

The practical translation: freshness decisions should be made node by node, against the map, not page by page against a feeling.

## Koray's "Momentum": Frequency as a Signal

Koray calls the publishing-and-refresh cadence "momentum." Publishing frequency helps attract search engine attention, but the value comes from timing — knowing when to start publishing and at what cadence. For AI search, momentum has a second role: a site that consistently refreshes its nodes signals an active, maintained source, which supports the trust decision AI engines make when selecting between equivalent sources.

## A Four-Column Refresh Pipeline

| Column | What you track | Example |
|---|---|---|
| Node | The page and its place in the topical map | "Answer capsules" node under GEO cluster |
| Last updated | The date the page was last materially changed | 2026-02-10 |
| Freshness triggers | Signals that a refresh is due | New platform update, new study, client question, ranking decay |
| Cadence | How often this node genuinely needs review | Quarterly, half-yearly, or event-driven |

Build the table for every node in your core section first — that is where ranking signals and monetization live. Outer-section nodes can run on longer cadences.

## What "Fresh" Actually Means for an Article

A refresh is not changing a date. It is a material update a search engine can detect and a reader can benefit from:

- **Add current statistics.** Replace a 2023 stat with a 2026 figure from a dated, citable source. Two dated facts per section is the working minimum.
- **Update product, pricing, and platform facts.** AI assistants favor current details; a stale price or a discontinued feature actively damages trust.
- **Add new examples and answers.** If new sub-questions appeared in your follow-up inventory, answer them.
- **Change the dateModified field** and, if substantial, the published date. Structured data and visible timestamps should agree.
- **Re-evaluate the heading vector.** If the query network shifted, update question headings to match.

## The Thirty-Minute Refresh Workflow

1. Pull the nodes in your pipeline that are due this week.
2. Check AI engines: prompt ChatGPT and Perplexity with the node's primary question and note what they currently cite.
3. Diff the cited sources against your page — what facts or angles are they using that you are not?
4. Update your page with the missing facts, a current statistic, and a new example.
5. Update dateModified, re-validate schema, and re-submit the URL in Search Console.
6. Log the refresh in the pipeline table with a new trigger date.

## Measuring Freshness ROI

- Use Search Console date filtering to compare impressions before and after a refresh window.
- Track citation rate per query in your GEO measurement routine before and after the update.
- Watch for the lag: refresh effects typically show in AI citations within a few weeks, not days.
- Log every refresh so you can correlate content changes with traffic and citation movement instead of guessing.

## The Bottom Line

Freshness is a measured, repeatable advantage — a 25.7% recency edge over organic results that you control entirely. Put your core nodes on a cadence, tie triggers to real signals, and treat a refresh as a content event, not a date change. The site that keeps its authority nodes current is the site AI engines keep selecting.`,
    relatedArticleIds: ["topical-authority-core-update","ins-05","geo-measurement-stack"],
    relatedServicePath: "/services/semantic-seo",
    relatedServiceName: "Semantic SEO & Topical Authority",
    relatedCaseStudyPath: "/case-studies/windcave",
    relatedCaseStudyName: "Windcave: Semantic SEO Structuring & Entity Clustering"
  },
  {
    id: "topical-authority-core-update",
    title: "Topical Authority vs. the October 2025 Core Update: What Koray's Model Predicted and Why It Held",
    category: "Topical Authority",
    readTime: "9 min read",
    date: "August 8, 2026",
    summary: "After the October 2025 core update, sites built around coherent topical networks won while keyword-scattered sites collapsed. That outcome was predicted years earlier by Koray Tuğberk Gübür's Topical Authority formula. Here is what the model says and how to apply it now that AI search amplifies it.",
    metaTitle: "Oct 2025 Core Update: Koray's Topical Authority Predicted It",
    metaDescription: "The October 2025 core update rewarded entity networks and punished keyword-scattered sites — exactly what Koray's topical authority model predicted.",
    contentMarkdown: `## The Short Version

The October 2025 core update was the first large-scale, public confirmation of a shift Koray Tuğbuerk Gübür's Topical Authority methodology had been describing for years: Google moved from rewarding keyword coverage to rewarding **entity-level authority**. Sites organized as coherent topical networks held or gained while keyword-scattered sites lost ground. The model behind that outcome is a formula, not a vibe — and it is the same model AI search amplifies today.

## What the October 2025 Core Update Actually Rewarded

Post-update analyses across the industry converged on one pattern: depth and interconnection of content mattered more than raw volume. Sites built around coherent topical networks outperformed thin, keyword-scattered sites in every niche measured. The documented case studies around Koray's methodology make the scale concrete — a law firm directory site reached $150,000 in traffic value by leaning on a semantic content network built around a topical map, and a SaaS client saw 9x traffic growth in a single year driven largely by outer-section expansion.

The lesson practitioners took away was not new in theory but was newly enforced: if your informational layer is thin, your money pages are building on sand.

## The Formula: Topical Authority = Topical Coverage x Historical Data

Koray's formula separates the two inputs that most content plans conflate:

**Topical Coverage** is the complete, structured processing of every factual attribute of your central entity within a defined border. It is not keyword density and not page count — it is whether the full attribute space of your subject is covered, each attribute on its own page, each page linked in context.

**Historical Data** is the accumulated quality of engagement and trust signals over time. It compounds — which is why a site that has covered a topic deeply for years beats a site that produced the same pages this quarter.

Coverage without history is a new site that ranks for a while. History without coverage is a site that ranks for one thing and nothing adjacent. The October 2025 update penalized exactly the sites that chased one without the other.

## Why Coverage Without Structure Fails

Publishing fifty articles on a topic does not create topical authority. Publishing fifty articles never planned against a shared structure creates fifty disconnected pages that compete for the same crawl budget and dilute the same entity signals. This is the cannibalization problem the update made expensive.

The fix is structural: assign each page a unique Entity-Attribute-Value signature before writing it. If two planned pages resolve to the same EAV — same entity, same attribute — they are the same page wearing two URLs, and they will split the same ranking intent. The topical map catches this at planning time, not after the damage.

## Core Section and Outer Section

Every topical map splits into two structural roles, and the October 2025 update made the cost of skipping either one visible:

| Section | Covers | Job |
|---|---|---|
| Core Section | The main attributes of the central entity that exist because of your source context | Where ranking signals flow and monetization happens |
| Outer Section | Minor attributes that round out coverage | Builds historical data, breadth, and the trust signals that feed the core |

The update punished sites with a thick commercial core and a nonexistent outer layer. Ranking signals flow inward from the outer section; without it, the core pages have no supporting network to consolidate. The full framework — Central Entity, Source Context, Core, Outer, EAV signatures, and contextual bridges — is the subject of the complete topical map guide.

## Quality Nodes and Trending Nodes

Two node types translate the model into action:

- **Quality Nodes** — your strongest informational pages, linked from the homepage or top navigation. They route authority back into the map and anchor the entity.
- **Trending Nodes** — timely pieces that create query spikes. Even one well-timed piece per quarter signals topical freshness to search engines and gives AI engines a recent source to cite.

Link your strongest informational pages prominently; that is where the entity's authority is concentrated, and routing internal signals toward the core section is how a semantic content network compounds.

## How AI Search Amplifies the Same Signal

The shift toward LLM-driven retrieval makes the model stricter, not looser. AI systems reward content networks over isolated posts: a sparse outer section is a gap that compounds over time because an AI engine building an answer about a topic checks whether one source covers the surrounding concepts too. Entity clarity — which the model is built around — is also the top structural trait of brands consistently cited by AI engines. The same structure that survived the October 2025 update is the structure AI search selects.

## Building Your Authority Thesis in One Paragraph

Before any content work, write a single paragraph that answers: what is this site the authoritative source for, and which entity does every page serve? If the site cannot answer that question, no tactical SEO compensates. The topical map is how you answer it structurally; the October 2025 update is the enforcement; AI search is the amplification.

## The Bottom Line

The October 2025 core update did not invent topical authority — it enforced it. Coverage plus history, structure over volume, entity over keyword. The sites that survive algorithm updates and win AI citations are the ones organized as networks. Sort the foundation first: central entity, source context, core and outer sections. Then every page you publish compounds instead of competing.`,
    relatedArticleIds: ["ins-05","content-freshness-ai-search","ins-02"],
    relatedServicePath: "/services/semantic-seo",
    relatedServiceName: "Semantic SEO & Topical Authority",
    relatedCaseStudyPath: "/case-studies/windcave",
    relatedCaseStudyName: "Windcave: Semantic SEO Structuring & Entity Clustering"
  },
  {
    id: "reddit-youtube-co-citation-geo",
    title: "Reddit, YouTube, and the Co-Citation Web: Off-Site Signals That Get You Cited by AI",
    category: "AI Search",
    readTime: "7 min read",
    date: "August 9, 2026",
    summary: "AI engines do not only read your site — Reddit appears in roughly 68% of AI responses and YouTube holds 29.5% of AI Overview citation share. Here is the co-citation playbook for solo consultants that makes AI name you.",
    metaTitle: "Off-Site Signals That Get You Cited by AI (Data)",
    metaDescription: "Reddit appears in ~68% of AI answers and YouTube is 29.5% of AI Overview citation share. The off-site co-citation playbook for solo consultants.",
    contentMarkdown: `## The Short Version

The most underweighted fact in GEO is that AI engines do not build answers from your website alone. They synthesize from YouTube, Reddit, LinkedIn, forums, review platforms, and industry publications. Reddit appears in roughly 68% of AI responses across ChatGPT, Perplexity, and Google AI Overviews. YouTube holds 29.5% of AI Overview citation share — the single most-cited domain type. If your GEO plan only touches your own domain, you are optimizing half the system.

## The Data That Makes Off-Site Non-Negotiable

- **Reddit appears in approximately 68% of AI responses** across ChatGPT, Perplexity, and Google AI Overviews (2026 platform studies). It is the number one cited social platform for Perplexity at 6.6% of all citations and for Google AI Overviews at 2.2%.
- **YouTube is 29.5% of AI Overview citation share**, cited 200x more than other video platforms, and is the strongest single platform correlation with AI Overview visibility in Ahrefs' brand factor research.
- **Reddit and LinkedIn are the two most-cited domains** across ChatGPT, Perplexity, and Google AI Mode in Semrush's January 2026 data.
- **Podcast transcripts are beginning to surface in AI results**, especially in Gemini — an open door most brands ignore.

The pattern: AI engines lean on user-generated and community content for the "human perspective" and on video for the instructional perspective. Neither exists on your website.

## Why Co-Citation Works

Co-citation is how association weight shifts. When your brand appears alongside your service category on platforms AI engines trust — a forum discussion about SEO tools where someone mentions your work, a YouTube tutorial that references your framework, a LinkedIn post that names your method — the model's association between your name and the category strengthens. The co-citation footprint was a core strategy of the original GEO playbook, and the 2026 citation data confirms it is now a primary signal, not an accent.

For a solo consultant this is the leverage point: you cannot win a backlink war with Ahrefs, but you can control where your name appears in the communities and platforms AI engines actually cite.

## A 90-Day Off-Site Playbook for Solo Operators

#### Weeks 1-4: Pick Two Platforms and Resolve the Entity

Choose the two platforms where your audience actually discusses your topic — for most B2B consultants that is LinkedIn plus one community (a subreddit, a niche forum, or a Slack). Before posting anything, make your profiles consistent: same name, same description, same category language across LinkedIn, the community, your Google Business Profile, and your site. This is entity consistency applied off-site.

#### Weeks 5-8: Answer Questions, Don't Promote

Spend a month answering questions in your chosen communities without linking to your site. AI engines favor genuinely useful community answers, and the utility-first behavior is exactly what Reddit's algorithm and AI extraction both reward. Note the questions that come up repeatedly — they are your follow-up inventory and your content gaps.

#### Weeks 9-12: Build Video and Transcript Surfaces

Create one 5-7 minute explainer video per month and publish it on YouTube. The reasons are specific: YouTube is 29.5% of AI Overview citation share, and YouTube mentions show the strongest correlation with AI Overview visibility in Ahrefs' brand factor study. Do not stop at the video — the transcript is the citable text. Post a summary on LinkedIn with the same framework language, so the same entity story appears in text form on a second cited platform.

## The Rules of Engagement

- **Useful first, always.** Reddit and LinkedIn reward genuine answers; promotion is filtered out and, worse, excluded from AI retrieval.
- **Repeat your category language.** The phrase "semantic SEO for AI search" should appear consistently in your bios, answers, and transcripts — that is the association you want AI to learn.
- **Never fake mentions.** Google's 2026 generative AI guidance explicitly says seeking inauthentic mentions is not helpful. Co-citation is earned by showing up where the conversation already is.
- **Let it compound.** Off-site authority lags on-site work by weeks or months. Track mentions, then watch citations follow.

## What to Track

Keep a simple mention log: platform, date, what you said, and which platform category you reinforced. Monthly, check whether your citation rate on the queries around those topics moved in your GEO measurement routine. The correlation between your off-site activity and your citation share of voice is the metric that tells you this is working.

## The Bottom Line

Your website is one source among many in an AI answer. Reddit, YouTube, LinkedIn, podcasts, and forums are where the association weights get built. A solo consultant does not need a PR budget — they need consistent, genuinely useful presence on the two platforms their audience already uses. That presence is the co-citation footprint that makes AI name you, and it compounds exactly like topical authority does on-site.`,
    relatedArticleIds: ["entity-first-geo","ins-01","original-data-solo-seo"],
    relatedServicePath: "/services/ai-seo-consulting",
    relatedServiceName: "AI SEO Consulting",
    relatedCaseStudyPath: "/case-studies/azuno",
    relatedCaseStudyName: "Azuno: Semantic SEO & AI/LLM Alignment"
  },
  {
    id: "original-data-solo-seo",
    title: "Original Data Without a Data Team: How Solo SEOs and Small Brands Get Cited as Primary Sources",
    category: "Topical Authority",
    readTime: "8 min read",
    date: "August 10, 2026",
    summary: "Pages with original data tables earn 4.1x more AI citations, and original research becomes a primary source other publications cite. Big teams get that with big budgets. Here is how solo operators produce credible, citable data with free tools.",
    metaTitle: "Original Data for Solo SEOs: Get Cited 4.1x More",
    metaDescription: "Pages with original data tables earn 4.1x more AI citations. How one-person operations produce citable research without a data team.",
    contentMarkdown: `## The Short Version

Original data is the highest-leverage GEO tactic available in 2026, and it is not locked behind enterprise budgets. Pages with original data tables earn 4.1x more AI citations than pages without them. Once you publish a piece of original research, you become a primary source — other publications cite it, AI engines cite those publications, and the original report accumulates citation authority across a long tail of queries. The barrier is not data infrastructure; it is knowing what counts as original data and how to run a small research sprint.

## Why Original Data Compounds

The compounding mechanic is what makes original research different from every other content type. A statistical claim with a named source gets attributed back to that source. When your page publishes numbers no one else has — a survey, an audit, an observed measurement — AI engines must cite you for those numbers. Secondary articles then cite your numbers and your publication, and the AI engines that cite those articles inherit the chain. One data asset becomes a citation engine for years.

## The 4.1x Data Table Signal

Two findings frame the opportunity:

- **Original data tables earn 4.1x more AI citations** than pages without them (2026 citation studies across ChatGPT, Google AI Mode, and Perplexity).
- **Original research and data attract citations disproportionately** — surveys, platform data, and observed measurements become primary sources that secondary coverage spreads.

The table format matters as much as the data. AI engines extract structured numbers cleanly from semantic HTML tables, which is why raw tables outperform the same facts buried in prose.

## What Counts as Original Data for a Small Operator

You do not need a survey of 10,000 people. Four realistic sources fit a solo operation:

- **Audits you already run.** Every Screaming Frog crawl, Search Console export, and site audit is a dataset. Aggregate anonymized findings across clients or your own site and publish the pattern: "We audited 40 service-business sites; here is how often schema failed." Nobody else has that file.
- **Small surveys with free tools.** Typeform and Google Forms handle a few hundred responses. A focused question on a relevant community plus your email list is enough for a defensible finding if you state the sample honestly.
- **Public datasets re-analyzed.** Common Crawl, Google's published research, and open datasets can be re-analyzed from an angle nobody took — the manual for making content visible to AI engines is itself a public corpus you can test against.
- **Anonymized client benchmarks.** Aggregate your own client results with identities stripped: median time-to-first-ranking, common technical failures, average citation lift. Permissioned and anonymized client data is genuinely unique — nobody else has your case files.

## A Repeatable Five-Step Research Sprint

#### Step 1: Choose a Question a Publisher Would Cite

Pick one question your audience asks repeatedly that has no definitive published answer — "how common is X in our industry." The absence of a citable answer is your opening.

#### Step 2: Collect With a Documented Method

Use free tools, keep the raw file, and write the methodology down: sample size, source, date range, filters. Methodology is what separates research from anecdote.

#### Step 3: Analyze for One Clean Finding

Resist the urge to publish everything. One defensible number with a clear implication outperforms ten shaky ones. State the finding as a sentence a journalist could quote.

#### Step 4: Publish With a Table and a Date

Present the data in a semantic HTML table, name the study, and date it. A named, dated, table-based study is what makes the finding citable — this is the same discipline as the research-fed article format used in authority content.

#### Step 5: Pitch the Finding, Then Let It Spread

Share the finding with relevant communities and journalists once. The primary-source mechanic does the rest: each citation of your number references you.

## How to Present Data So AI Extracts It

- **Use real tables**, not screenshots — AI engines parse HTML tables, not images.
- **Name the study** in a way that can be quoted: "The 2026 Semantic SEO Audit."
- **State the sample and date** next to every headline number.
- **Put the number in the first sentence** of the section so the passage is self-contained.
- **Add two dated facts per section** — the standard for research-fed content.

## Compliance and Ethics

Anonymize client data completely and get permission before publishing anything sourced from engagements. Report sample sizes honestly — a small sample is fine as long as you say it is small. Fabricated or inflated data destroys the primary-source mechanic permanently; one exposed faked study ends the compounding for good.

## The Bottom Line

Original data is the one GEO asset that compounds like a backlink but is fully under your control. You already generate datasets — audits, Search Console exports, anonymized client results. Turn one of them into a dated, table-based study with a clean finding, and you become the primary source AI engines must cite. That is the whole strategy, and it fits entirely inside a solo operator's toolset.`,
    relatedArticleIds: ["topical-authority-core-update","reddit-youtube-co-citation-geo","content-freshness-ai-search"],
    relatedServicePath: "/services/semantic-seo",
    relatedServiceName: "Semantic SEO & Topical Authority",
    relatedCaseStudyPath: "/case-studies/azuno",
    relatedCaseStudyName: "Azuno: Semantic SEO & AI/LLM Alignment"
  },
  {
    id: "local-businesses-ai-search",
    title: "Local Businesses in AI Search: Being the Entity AI Names for 'Best Plumber Near Me'",
    category: "Local SEO",
    readTime: "7 min read",
    date: "August 11, 2026",
    summary: "Google's 2026 guide says optimizing your Google Business Profile improves AI responses for local queries — and AI Overviews now trigger on commercial searches. Here is how local businesses get named in AI answers, not just the map pack.",
    metaTitle: "Local Businesses in AI Search: The 2026 Playbook",
    metaDescription: "AI Overviews are moving into local commercial queries. How Google Business Profile, NAP consistency, and local schema make AI name your business.",
    contentMarkdown: `## The Short Version

AI Overviews are no longer an informational feature. Since Google began triggering them on commercial and transactional queries, the share of informational triggers dropped from 91.3% in January 2025 to 57.1% by October 2025 — and local decision queries are squarely in the new territory. Google's official 2026 guide adds the local layer explicitly: optimizing your Google Business Profile improves AI responses for local queries. The winning position for a local business is no longer just the map pack. It is being the entity an AI answer names when someone asks which plumber, roofer, or salon to call.

## The Shift: AI Answers Are Now Buying Decisions

For years, AI Overviews mostly answered informational questions — "what is X." The 2026 data shows the trigger mix moving toward decision support: "best X for Y" and "what should I buy" queries now regularly surface AI answers. Local searches sit at the center of this shift because they are high-intent and concrete. When AI Mode users ask "which" questions — the query type growing 40% faster than average — a local business wants to be the named answer, not a blue link on page two.

## What Google's Guide Says About Local

Google's May 2026 generative AI guidance ("Optimizing your website for generative AI features on Google Search") names local optimization directly: for local businesses, Google explicitly recommends optimizing your Google Business Profile, stating that it improves AI responses for local queries. This is the first time the local entity profile has been tied to AI visibility in official documentation. The map pack is no longer the only Google surface that reads your business profile — the generative engine does too.

## The Local Entity Pack: Six Signals AI Checks

#### 1. Google Business Profile Completeness

Every field filled: category, description, service area, hours, attributes, photos, and consistent business name. Google's generative systems draw on the same profile the map pack reads. A half-complete profile is a half-resolved entity.

#### 2. NAP Consistency Across the Web

Name, Address, and Phone must match character-for-character across your site, your profile, and every directory. A single "St." versus "Street" mismatch creates two candidate entities — and AI engines skip ambiguous entities. This is the same local entity discipline from the local entity SEO framework, now applied to AI retrieval.

#### 3. LocalBusiness Schema, Correctly Nested

A LocalBusiness schema block with address, geo-coordinates, service area, hours, and price range, linked back to your Organization @id, resolves "this page" and "this business" as one entity. For multi-service-area businesses, nested schema that defines each service area explicitly gives the engine concrete facts to extract.

#### 4. Service-Area Entities

AI answers about "who serves my neighborhood" need a service-area fact, not a guess. Define the areas you actually serve, in schema and in content, and let the engine resolve your coverage instead of assuming it.

#### 5. Reviews on Verified Platforms

Reviews on Google Business Profile and industry-specific directories function as external validation of the entity's existence and category. Consistency matters more than volume: the same category language reinforced across sources builds a clearer entity profile than one glowing review.

#### 6. Neighborhood-Level Content Specificity

Generic city-wide pages compete against thousands of identical templates. Content structured around specific neighborhoods, landmarks, or service zones — with real operational details like response times and local project examples — gives AI systems differentiated facts to extract rather than boilerplate to skip.

## Writing Local Content for AI Answers

For every service and area you cover, write the content as an answer to the question a person actually asks: "Who provides emergency roof repair in [neighborhood]?" Lead with the direct answer, then the evidence — response time, licensing, service area, examples. This is the answer-capsule structure applied to local search: the passage an AI engine extracts should stand alone with everything the decision needs.

## A Local GEO Quick-Win Checklist

- Complete every field on your Google Business Profile, including service areas and attributes.
- Match NAP exactly across your site, profile, and top five directories.
- Implement LocalBusiness schema linked to a stable Organization @id graph.
- Publish neighborhood-specific service pages that answer questions directly.
- Add real operational detail: response times, areas served, licensing, local examples.
- Encourage and respond to reviews with consistent category language.
- Re-check your business name in AI engines monthly — accuracy is your first visibility metric.

## The Bottom Line

The local search surface has expanded from the map pack to the AI answer, and the input data is largely the same: a complete, consistent, schema-clean entity profile. Google's own guidance now says the Google Business Profile affects AI responses for local queries. Fix the entity, structure the content as direct answers, and a local business can be the name an AI engine gives to a neighbor who asks which plumber to call.`,
    relatedArticleIds: ["ins-04","schema-as-citation-signal","ins-05"],
    relatedServicePath: "/services/local-seo",
    relatedServiceName: "Local SEO Services",
    relatedCaseStudyPath: "/case-studies/local-seo-systems",
    relatedCaseStudyName: "Local SEO Systems: US Service Niches"
  },
  {
    id: "geo-measurement-stack",
    title: "The GEO Measurement Stack: Citation SOV, Answer Share, and the 50-Run Method",
    category: "AI Search",
    readTime: "8 min read",
    date: "August 11, 2026",
    summary: "Fewer than 15% of teams measure GEO properly, and single-run checks lie. Here is a free, repeatable protocol for citation rate, share of voice, and sentiment using the 50-run sampling method.",
    metaTitle: "How to Measure GEO: Citation SOV and the 50-Run Method",
    metaDescription: "Fewer than 15% of teams run a formal GEO program. A free, repeatable protocol: citation rate, share of voice, sentiment, and the 50-run method.",
    contentMarkdown: `## The Short Version

GEO is the least-measured discipline in search marketing. Fewer than 15% of marketing teams run a formal GEO program in 2026 — defined as citation tracking, regular measurement cadences, and content strategy shaped by AI citation goals. Most teams are stuck in "we check ChatGPT sometimes." That is not measurement; that is anecdote. A single check of whether ChatGPT mentions your brand tells you almost nothing, because AI responses are volatile — the same prompt returns different answers run to run. The fix is sampling, and it is free: the 50-run method.

## Why Measurement Is the Biggest Gap

AI search breaks the attribution model SEO teams spent a decade building. Traditional metrics — rankings, clicks, bounce rate — are still tracked, but they do not capture the two things that matter in an AI answer: whether your brand appears, and how it is framed. The volatility makes it worse. When Semrush tracked 2,500 prompts across Google AI Mode and ChatGPT, the first observation was variability. Meaningful citation data requires systematic sampling, not single checks.

## The Three Metrics That Matter

#### 1. Citation Rate

The percentage of AI responses that name your brand, for each target query. The number only becomes stable with enough samples — the working standard is **a minimum of 50 runs per query, per engine**. Below that, a single volatile answer can move your rate by double digits.

#### 2. Share of Voice (SOV)

Your citation count as a percentage of total brand citations in your category, per engine. This is the competitive metric: it answers "compared to who else is AI recommending for this topic." The benchmark bands from the 2026 data are practical:

| Citation SOV | Status |
|---|---|
| Above 30% | Strong — consistently present across category queries |
| 10-30% | Present but not dominant — real upside |
| Below 10% | Effectively invisible |
| 0% | No GEO presence |

Most brands starting a GEO program measure below 5% citation SOV — not because the content is bad, but because nothing was structured or measured for it.

#### 3. Sentiment Framing

How the AI frames your brand: positive, neutral, or with caveats. "X is good for Y but may not suit Z" is a different outcome than "X is a leader in Y." A high SOV with negative framing is worse than a modest SOV with clean framing, because the framing is what users repeat.

## The 50-Run Method: A Free, Repeatable Protocol

#### Step 1: Choose 10 Queries

Pick ten queries that define your category — the ones your customers actually ask AI. Mix your primary terms, comparison queries, and one "best X" query per engine.

#### Step 2: Run 50 Times Per Query, Per Engine

This is the part that feels wasteful and is not. Run each query 50 times on each engine you track — the minimum practical set is ChatGPT, Perplexity, and Google AI Overviews. Log whether your brand appears, whether the URL is linked or just name-dropped, and the framing.

#### Step 3: Score the Runs

For each query: citation rate (appearances / 50), SOV (your citations / all category citations), and average framing score. Separate mentions from citations — being name-dropped and being linked are different wins.

#### Step 4: Record the Date

AI systems change constantly. Store the date with every batch so you can compare like-for-like across months instead of across model updates.

#### Step 5: Repeat Monthly

One 50-run batch per query per engine per month is 1,500 samples a year per query. That is a real dataset, and it costs nothing but time.

## How to Turn Results Into a Content Backlog

The measurement is only worth the to-do list it generates. From each batch, extract:

- **Prompts where competitors get cited and you do not** — these are your content gaps.
- **Topic segments where you are absent entirely** — these are your missing topical map nodes.
- **Third-party pages that misrepresent your brand** — these are your correction list.
- **Pages AI cites whose content is outdated** — these are your refresh queue.

Each finding becomes a work item, so the dashboard is never just monitoring — it is a backlog with a reason.

## Tools: Free vs Paid

The free tier is the protocol above plus Search Console and a spreadsheet. For automation, the purpose-built tools do the sampling for you: Semrush's AI Visibility Toolkit and Enterprise AIO track citations, SOV, sentiment, and competitive benchmarks across ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews; Ahrefs' Brand Radar tracks your brand across AI platforms and competitors. Start free, and graduate to a paid tool once the protocol proves your queries and cadence are stable.

## Cadence and Reporting

Report monthly, engine by engine, with three lines per query: citation rate, SOV, and framing. Track one aggregate number — average citation SOV across your ten queries — as the KPI leadership can follow. Refresh the batch at the same point in the model cycle where possible, so changes reflect your work, not a model update.

## The Bottom Line

GEO cannot be optimized until it is measured, and the measurement standard is higher than most teams assume — 50 runs per query per engine to beat the volatility. The entire stack fits in a spreadsheet. Name ten queries, sample them fifty times a month on three engines, and turn every gap into a work item. That is the discipline that turns GEO from a vague ambition into a tracked, compounding channel.`,
    relatedArticleIds: ["entity-first-geo","answer-capsules-ai-extraction","ins-01"],
    relatedServicePath: "/services/ai-seo-consulting",
    relatedServiceName: "AI SEO Consulting",
    relatedCaseStudyPath: "/case-studies/azuno",
    relatedCaseStudyName: "Azuno: Semantic SEO & AI/LLM Alignment"
  }
];

// Real, permissioned client testimonials.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-01",
    quote: "I own a coffee shop in Austin, Texas, and we were buried on page three of Google. Farrukh helped us show up in the local pack within weeks. Now new customers literally tell us they found us online. He's approachable, explains things clearly, and delivers results.",
    name: "Sarah M.",
    role: "Owner, Coffee Shop",
    company: "Austin, TX"
  },
  {
    id: "testimonial-02",
    quote: "Running a small law firm in Chicago, I needed someone who understood how clients search locally. Farrukh rebuilt our SEO strategy from the ground up. Calls from local leads have doubled, and our site finally feels professional. He's the kind of specialist you want in your corner.",
    name: "David R.",
    role: "Attorney, Law Firm",
    company: "Chicago, IL"
  },
  {
    id: "testimonial-03",
    quote: "I manage a boutique hotel in Miami, and competition here is fierce. Farrukh's geo-targeted SEO gave us visibility in exactly the neighborhoods we wanted. Bookings through organic search are up 35%. He's responsive, detail-oriented, and genuinely cares about outcomes.",
    name: "Elena P.",
    role: "Manager, Boutique Hotel",
    company: "Miami, FL"
  },
  {
    id: "testimonial-04",
    quote: "Our e-commerce store in Denver was struggling to get traction. Farrukh spotted technical issues and optimized our product pages with semantic SEO. Within three months, organic sales became our main revenue stream. He's not just an SEO guy — he's a strategist.",
    name: "Mark T.",
    role: "Owner, E-Commerce Store",
    company: "Denver, CO"
  },
  {
    id: "testimonial-05",
    quote: "I run a fitness studio in Seattle, and Farrukh helped us dominate local search. We're now consistently in the top three results, which brought in a steady stream of new members. What I appreciated most was how he explained everything in plain English. Highly recommend.",
    name: "Jessica L.",
    role: "Owner, Fitness Studio",
    company: "Seattle, WA"
  },
  {
    id: "testimonial-06",
    quote: "As a tech startup founder in San Francisco, I was fascinated by how Farrukh connected semantic SEO with the latest advances in AI. He showed us how search engines increasingly rely on language models to interpret intent, and then tailored our content so it aligned perfectly with those signals. On top of that, his geo-targeting strategy helped us capture local visibility in the Bay Area. The combination of semantic precision and geo focus gave us a real competitive edge.",
    name: "Michael K.",
    role: "Founder, Tech Startup",
    company: "San Francisco, CA"
  },
  {
    id: "testimonial-07",
    quote: "Farrukh showed us how semantic SEO and geo-targeting could work hand-in-hand with the way AI and language models interpret search intent. His strategy didn't just boost our rankings, it made our content future-proof in an AI-first world.",
    name: "Margaret Genet",
    role: "Head of Marketing",
    company: "Azuno, San Francisco, CA",
    linkedCaseStudyPath: "/case-studies/azuno"
  }
];
