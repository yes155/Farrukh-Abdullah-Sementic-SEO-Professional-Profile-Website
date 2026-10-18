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
  { label: "Moz SEO Certified", iconName: "ShieldCheck", badge: "Moz" },
  { label: "BrightLocal Certified", iconName: "MapPin", badge: "Local" }
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
    "value": "Content",
    "title": "Architecture and implementation",
    "description": "Page inventories, useful topic plans, and implementation-ready changes.",
    "tags": [
      "Semantic SEO"
    ]
  },
  {
    "value": "Local",
    "title": "Profiles and customer journeys",
    "description": "Accurate operating information, service pages, and qualified-inquiry measurement.",
    "tags": [
      "Local SEO"
    ]
  },
  {
    "value": "AI search",
    "title": "Access and measurement",
    "description": "Documented access checks, source observations, and factual corrections.",
    "tags": [
      "AI visibility"
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    "id": "case-01",
    "title": "Semantic SEO structuring & entity clustering",
    "industry": "FinTech & Payments",
    "challenge": "The client windcave.com faced severe search visibility plateau and fragmented domain equity across its payment product categories, with search crawlers failing to associate their pages with core payment entities.",
    "strategy": "Reported work combined a content inventory, page consolidation, topic planning, internal links, and structured-data implementation for payment-related content.",
    "execution": [
      "Reviewed payment-category content and overlapping page purposes.",
      "Planned consolidated pages and useful internal relationships.",
      "Implemented content and structured-data changes as described in the engagement.",
      "Reviewed visibility and lead-registration changes over the reported period."
    ],
    "results": [
      "+112% increase in organic lead registrations within 9 months of semantic launch",
      "First-page visibility established for high-intent payment solutions and direct AI-search citations",
      "Resolved internal topical cannibalization issues, recapturing lost keyword authority"
    ],
    "technologies": [
      "Wikidata",
      "JSON-LD Schema",
      "Semantic SEO",
      "Ahrefs",
      "Google Search Console"
    ],
    "imageSrc": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "ctaText": "Examine semantic strategy",
    "methodology": [
      "Reviewed payment-category content and overlapping page purposes.",
      "Planned consolidated pages and useful internal relationships.",
      "Implemented content and structured-data changes as described in the engagement.",
      "Reviewed visibility and lead-registration changes over the reported period."
    ],
    "keyLearnings": [
      "Several changes were combined; this account does not isolate their causal effects.",
      "The baseline, comparison window, attribution, and implementation role are needed to evaluate reported outcomes."
    ]
  },
  {
    "id": "case-02",
    "title": "Local SEO systems for competitive service niches",
    "industry": "US Service Niches",
    "challenge": "New brand entrants in hyper-competitive local service niches (Junk Removal, RV Repair) needed rapid localized SERP traction with low advertising spend.",
    "strategy": "Reported work combined local profile information, relevant service pages, operating-area content, and call-attribution setup across a mixed portfolio.",
    "execution": [
      "Reviewed actual business/profile details and service coverage.",
      "Planned distinct service and location explanations.",
      "Implemented relevant profile, content, and citation corrections.",
      "Configured inquiry tracking for the portfolio account."
    ],
    "results": [
      "Generated 1,200+ inbound calls with direct attribution tracking",
      "Ranked 12 distinct regional assets inside the Google local map pack",
      "Achieved average 340% ROI across the active local SEO system portfolio"
    ],
    "technologies": [
      "Google Business Profile",
      "Local Citation Building",
      "Nested Schemas",
      "Analytics Mapping",
      "Local SEO Systems"
    ],
    "imageSrc": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    "ctaText": "Review local lead architecture",
    "methodology": [
      "Reviewed actual business/profile details and service coverage.",
      "Planned distinct service and location explanations.",
      "Implemented relevant profile, content, and citation corrections.",
      "Configured inquiry tracking for the portfolio account."
    ],
    "keyLearnings": [
      "Several changes were combined; this account does not isolate their causal effects.",
      "The baseline, comparison window, attribution, and implementation role are needed to evaluate reported outcomes."
    ]
  },
  {
    "id": "case-03",
    "title": "Semantic SEO and AI/LLM alignment for a SaaS analytics platform",
    "industry": "SaaS / AI Solutions",
    "challenge": "Azuno, a fast-growing SaaS company specializing in AI-driven analytics, struggled to gain organic traction despite an innovative product. Its content lacked the semantic depth for search engines and AI systems to interpret intent, geo-targeting was weak, and potential customers in its core San Francisco market were missing the brand entirely.",
    "strategy": "Reported work combined content planning, customer-question coverage, technical corrections, and observations of search visibility for an analytics business.",
    "execution": [
      "Reviewed customer questions and existing page purposes.",
      "Planned relevant content and internal links.",
      "Implemented website and factual business-information changes.",
      "Compared reported traffic and lead observations."
    ],
    "results": [
      "+120% increase in organic traffic within 4 months",
      "Top 3 local search rankings for \"AI analytics San Francisco\" and related geo-keywords",
      "35% growth in qualified leads from Bay Area businesses",
      "Improved discoverability across AI-driven search platforms, positioning Azuno as a thought leader in the AI/LLM space"
    ],
    "technologies": [
      "Semantic SEO",
      "Entity Optimization",
      "Local SEO",
      "Google Business Profile",
      "LLM Content Alignment"
    ],
    "imageSrc": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "ctaText": "Explore the semantic + AI alignment strategy",
    "methodology": [
      "Reviewed customer questions and existing page purposes.",
      "Planned relevant content and internal links.",
      "Implemented website and factual business-information changes.",
      "Compared reported traffic and lead observations."
    ],
    "keyLearnings": [
      "Several changes were combined; this account does not isolate their causal effects.",
      "The baseline, comparison window, attribution, and implementation role are needed to evaluate reported outcomes."
    ]
  }
];

export const SERVICES: Service[] = [
  {
    "id": "srv-01",
    "title": "Semantic SEO & Topical Authority",
    "description": "Plan useful content, clarify page purposes, and repair overlapping information.",
    "deliverables": [
      "Observed review findings",
      "A written scope and implementation owner",
      "A defined measurement and review plan"
    ],
    "ctaText": "Start with an authority audit"
  },
  {
    "id": "srv-02",
    "title": "Generative Engine Optimization (GEO)",
    "description": "Review AI search access and representation using a documented measurement method.",
    "deliverables": [
      "Observed review findings",
      "A written scope and implementation owner",
      "A defined measurement and review plan"
    ],
    "ctaText": "Get cited by AI search"
  }
];

export const PHILOSOPHY_STATEMENTS = [
  {
    "lead": "Start with the customer decision.",
    "body": "Use the language customers understand and explain the actual service, conditions, and next step."
  },
  {
    "lead": "Support important claims with evidence.",
    "body": "Separate primary sources, practical examples, reported outcomes, and interpretations. Accurate markup should describe the same facts as the page."
  },
  {
    "lead": "Measure the outcome that matters.",
    "body": "Track visibility, referrals, qualified inquiries, and engagements separately so the work can be assessed against a clear goal."
  }
];

export const WORKING_PROCESS: ProcessStep[] = [
  {
    "number": "1",
    "title": "Topical discovery and entity mapping",
    "description": "Review the actual site and business objective.",
    "details": [
      "Wikidata & Entity ID validation",
      "Semantic competitor gap audits",
      "AI citation current share of voice check"
    ]
  },
  {
    "number": "2",
    "title": "Conceptual content restructuring",
    "description": "Agree scope, responsibilities, and acceptance criteria.",
    "details": [
      "Conceptual cluster design",
      "Search intent gap analysis",
      "Topical matrix roadmap"
    ]
  },
  {
    "number": "3",
    "title": "Programmatic schema strategy",
    "description": "Implement and validate the agreed changes.",
    "details": [
      "Nested JSON-LD organizational schema",
      "Hyper-local coordinates structuring",
      "Entity relational tagging models"
    ]
  },
  {
    "number": "4",
    "title": "Content optimization & citation alignment",
    "description": "Compare documented observations and business outcomes.",
    "details": [
      "Generative Engine Optimization formatting",
      "High-density editorial updates",
      "Expert authority reference linking"
    ]
  },
  {
    "number": "5",
    "title": "Continuous evaluation & ROI mapping",
    "description": "We constantly audit how search models answer industry-relevant queries, refining schema coordinates and content assets to defend your visibility.",
    "details": [
      "ChatGPT & Perplexity citation audits",
      "GSC search volume attribution checks",
      "Topical expansion recommendations"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-01",
    title: "Search Engine Optimization and Content Marketing",
    organization: "IBM (Coursera)",
    year: "2026",
    credentialId: "7JIZ8N7TW3JB",
    credentialUrl: "https://coursera.org/share/73cfe74f0d961e405bd0e6c291fa266d",
    iconColor: "#0f62fe"
  },
  {
    id: "cert-02",
    title: "Search Engine Optimization Professional Certificate",
    organization: "Moz (LinkedIn Learning)",
    year: "2026",
    credentialId: "cabd29ba74e5629692dc3e1e1bfb454a64d01860cef7360594fb6fa7f8fee16d",
    credentialUrl: "https://www.linkedin.com/learning/certificates/cabd29ba74e5629692dc3e1e1bfb454a64d01860cef7360594fb6fa7f8fee16d",
    iconColor: "#328aff"
  },
  {
    id: "cert-03",
    title: "Marketing Strategy: SEO Content Writing",
    organization: "Moz (LinkedIn Learning)",
    year: "2026",
    credentialId: "82eede6ecba75e8604bd67e9b49d2ccc2b63c52f651379c54679f72cbbcde50a",
    iconColor: "#328aff"
  },
  {
    id: "cert-04",
    title: "How to Create, Optimize, and Manage Google Business Profiles",
    organization: "BrightLocal",
    year: "2025",
    credentialUrl: "https://academy.brightlocal.com/certificate_v2/66ab42287074f2d15d09e088/user/693af0d22a6d366ba9029353",
    iconColor: "#e6194b"
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

export { EDITORIAL_ARTICLES as INSIGHTS_ARTICLES } from "./lib/articles";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-01",
    quote: "I own a coffee roaster in Austin, Texas, and we were buried on page three of Google. Farrukh helped us show up in the local pack within weeks. Now new customers literally tell us they found us online. He's approachable, explains things clearly, and delivers results.",
    name: "Andrew",
    role: "Manager, Armadillo Coffee Roasters",
    company: "Austin, TX",
    linkedCaseStudyPath: "/case-studies/armadillo-coffee-roasters"
  },
  {
    id: "testimonial-02",
    quote: "Running a small law firm in the Chicago area, I needed someone who understood how clients search locally. Farrukh rebuilt our SEO strategy from the ground up. Calls from local leads have doubled, and our site finally feels professional. He's the kind of specialist you want in your corner.",
    name: "Derrick Reese",
    role: "Managing Attorney, The Reese Law Center LLC",
    company: "Homewood, IL",
    linkedCaseStudyPath: "/case-studies/reese-law-centre"
  },
  {
    id: "testimonial-03",
    quote: "I oversee a hotel in Miami Beach, and competition here is fierce. Farrukh's geo-targeted SEO gave us visibility in exactly the neighborhoods we wanted. Bookings through organic search are up 35%. He's responsive, detail-oriented, and genuinely cares about outcomes.",
    name: "Jessica Santiago",
    role: "Director of Sales & Marketing, Hotel Circa 39",
    company: "Miami Beach, FL",
    linkedCaseStudyPath: "/case-studies/hotel-circa-39"
  },
  {
    id: "testimonial-04",
    quote: "Our swag and merchandise business in Denver was struggling to get traction online. Farrukh spotted technical issues and optimized our product pages with semantic SEO. Within three months, organic sales became our main revenue stream. He's not just an SEO guy — he's a strategist.",
    name: "Kyle Tudor",
    role: "Sales Leader, Swag Pro",
    company: "Denver, CO",
    linkedCaseStudyPath: "/case-studies/swag-pro"
  },
  {
    id: "testimonial-05",
    quote: "I run a personal training and fitness studio in Seattle, and Farrukh helped us dominate local search. We're now consistently in the top three results, which brought in a steady stream of new members. What I appreciated most was how he explained everything in plain English. Highly recommend.",
    name: "Caitlin",
    role: "Personal Trainer & Fitness Instructor, South Seattle Women's Fitness",
    company: "Seattle, WA",
    linkedCaseStudyPath: "/case-studies/south-seattle-womens-fitness"
  },
  {
    id: "testimonial-06",
    quote: "As co-founder of a fast-growing tech company, I was fascinated by how Farrukh connected semantic SEO with the latest advances in AI. He showed us how search engines increasingly rely on language models to interpret intent, and then tailored our content so it aligned perfectly with those signals. The combination of semantic precision and geo focus gave us a real competitive edge.",
    name: "Satyam Singh",
    role: "Co-founder, Simulithic",
    company: "YC-backed tech startup",
    linkedCaseStudyPath: "/case-studies/simulithic"
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
