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
