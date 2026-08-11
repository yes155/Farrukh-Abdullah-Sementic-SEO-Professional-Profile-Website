export interface NicheFaq {
  q: string;
  a: string;
}

export interface NicheStrategy {
  title: string;
  body: string;
}

export interface NicheKeyword {
  question: string;
  answer: string;
}

export interface Niche {
  slug: string;
  industry: string;
  singular: string;
  schemaType: string;
  eyebrow: string;
  headline: string;
  intro: string;
  deliverables: string[];
  strategies: NicheStrategy[];
  faqs: NicheFaq[];
  keywords: NicheKeyword[];
}

export const LOCAL_NICHES: Niche[] = [
  {
    slug: "seo-for-dentists",
    industry: "Dentists",
    singular: "Dental Practice",
    schemaType: "Dentist",
    eyebrow: "Local SEO for Dental Practices",
    headline: "SEO for Dentists",
    intro:
      "Dental searches are overwhelmingly local — new patients look for a dentist near them with availability today or this week. I build local search systems for dental practices that rank in the Google map pack, appear in AI answers about local dentists, and convert searchers into booked appointments.",
    deliverables: [
      "Google Business Profile optimization with dental categories, service areas, and booking links",
      "Dentist schema.org markup (LocalBusiness → Dentist) nested across service pages",
      "Localized landing pages for each treatment and service area you actually serve",
      "Procedure-led content structured around intent (emergency, cosmetic, orthodontics, implants)",
      "Consistent NAP and dental directory citation alignment (healthgrades, Zocdoc, Yelp)",
      "Appointment and call tracking so you know exactly which pages generate new patients"
    ],
    strategies: [
      {
        title: "Rank for the treatments patients search, not just 'dentist near me'",
        body: "Patients search for 'emergency dentist open now,' 'Invisalign provider,' or 'teeth whitening cost.' Each of those is a different entity with different intent. I structure your practice site so every treatment is a distinct, crawlable topic node that resolves to your practice as the local authority."
      },
      {
        title: "Build local entity trust for both Google and AI search",
        body: "Map pack rankings and AI-assistant recommendations both reward consistent, verified local entities. I align your Google Business Profile, website schema, and citation network into one unambiguous practice entity — so Google's local algorithm and generative answer engines both identify you as the reliable dentist in each neighborhood you serve."
      }
    ],
    faqs: [
      {
        q: "How long does local SEO take to show results for a dental practice?",
        a: "Most dental practices see Google Business Profile and citation improvements within the first 4–6 weeks. Meaningful map pack movement and new patient calls typically build between month two and three, depending on how competitive your city is and the current state of your online presence."
      },
      {
        q: "Can you help a multi-location dental group?",
        a: "Yes. Multi-location dental groups need a nested schema strategy that keeps each location a separate, verifiable entity while linking them to one parent brand. That prevents the internal cannibalization that makes location pages compete against each other in local results."
      }
    ],
    keywords: [
      {
        question: "What does local SEO for dentists involve?",
        answer: "Local SEO for dentists combines Google Business Profile optimization with dental categories and booking links, Dentist schema markup, treatment-led pages for emergency, cosmetic, orthodontics, and implants, and consistent NAP across directories like Healthgrades and Zocdoc — so new patients find you for the treatment they're searching, not just 'dentist near me.'"
      },
      {
        question: "How do dental practices rank in AI search results?",
        answer: "AI answer engines recommend dentists they can verify as consistent local entities. I keep your profile, website schema, and citation network aligned into one unambiguous practice entity, so generative search reliably identifies your practice as the trusted provider in each neighborhood you serve."
      }
    ]
  },
  {
    slug: "seo-for-plumbers",
    industry: "Plumbers",
    singular: "Plumbing Business",
    schemaType: "Plumber",
    eyebrow: "Local SEO for Plumbing Businesses",
    headline: "SEO for Plumbers",
    intro:
      "Plumbing leads are time-critical — when a pipe bursts, the customer searches for whoever is open and nearby right now. I build local SEO systems for plumbing companies that win the map pack for emergency and service queries, keep NAP data consistent across the web, and turn local searches into answered phones.",
    deliverables: [
      "Google Business Profile optimization built around 24/7 emergency and service-hour availability",
      "Plumber schema.org markup (HomeAndConstructionBusiness → Plumber) across service pages",
      "Service-area landing pages mapped to the specific zones and neighborhoods you dispatch to",
      "Service-led content architecture for repairs, installations, emergency calls, and water heaters",
      "Plumbing-specific citation building and review-velocity strategy for local trust signals",
      "Call tracking with per-page phone numbers so every lead is attributable to a service page"
    ],
    strategies: [
      {
        title: "Win emergency demand before competitors answer the phone",
        body: "Emergency plumbing queries spike with zero warning and convert fastest. I structure your site so your practice areas, response times, and on-call availability are explicit, machine-readable facts — making your business the most obvious answer for both the map pack and AI assistants when someone needs a plumber now."
      },
      {
        title: "Turn service pages into distinct local entities",
        body: "'Water heater replacement' and 'sewer line repair' are different jobs searched in different service areas. I treat each as its own entity with its own landing page, coordinates, and local schema — so you rank for the specific services people search, not a generic 'plumber' page competing with every other plumber in town."
      }
    ],
    faqs: [
      {
        q: "What makes emergency plumbing SEO different from standard local SEO?",
        a: "Emergency queries have urgent, high-converting intent but fierce competition from call centers. Winning them requires explicit after-hours signals, fast-loading pages, service-area precision, and review strength on verified platforms — all of which I engineer into the site structure rather than layering on as an afterthought."
      },
      {
        q: "Do you handle plumbers who serve multiple cities?",
        a: "Yes. For multi-city plumbing companies I build a parent-brand entity with per-city service pages, each with its own LocalBusiness schema and citation profile, so you rank in every market you actually dispatch to without cannibalizing your own pages."
      }
    ],
    keywords: [
      {
        question: "What should a plumber SEO company do for your business?",
        answer: "A plumber SEO company builds the systems that get your company into the Google map pack and AI search results when homeowners search 'plumber near me,' 'emergency plumber,' or specific services like water heater replacement. That means Google Business Profile optimization, Plumber schema markup, service-area landing pages, citation consistency, and call tracking that proves where every lead came from — not a generic 'we do SEO' retainer."
      },
      {
        question: "What does a full plumber SEO service include?",
        answer: "A complete plumber SEO service covers Google Business Profile optimization tuned to 24/7 emergency availability, Plumber schema.org markup across service pages, service-area landing pages for each zone you dispatch to, plumbing-industry citations, review velocity, and per-page call tracking so every booked job is attributable to the page that generated it."
      },
      {
        question: "How does plumber local SEO differ from standard SEO?",
        answer: "Plumber local SEO is focused on winning map pack and 'near me' rankings for the specific service areas you serve. Where standard SEO chases broad keywords, local plumbing SEO builds one consistent local entity — matching name, address, and phone across your profile, site, and citations — so Google and AI assistants confidently recommend your company for time-critical plumbing jobs in your city."
      },
      {
        question: "How does content marketing for plumbers work?",
        answer: "Content marketing for plumbers turns high-intent searches into structured pages: water heater repair, sewer line replacement, emergency plumbing in specific neighborhoods. Each service becomes a distinct, geo-targeted entity with its own schema and local relevance signals, so you capture the steady stream of homeowners researching plumbing problems before they call."
      }
    ]
  },
  {
    slug: "seo-for-salons",
    industry: "Hair & Beauty Salons",
    singular: "Salon",
    schemaType: "BeautySalon",
    eyebrow: "Local SEO for Salons",
    headline: "SEO for Salons",
    intro:
      "Salon customers book by browsing — they compare stylists, prices, and availability before picking up the phone or clicking book. I build local search visibility for hair and beauty salons that puts you in front of high-intent local searchers, syncs your Google Business Profile with real-time booking, and turns Google searches into chairs filled.",
    deliverables: [
      "Google Business Profile optimization with service categories, price ranges, and booking integration",
      "BeautySalon schema.org markup with opening hours, price range, and service menus",
      "Service-led landing pages for haircuts, color, extensions, brows, lashes, and bridal packages",
      "Stylist-level content that builds local brand authority and E-E-A-T for your team",
      "Review-generation strategy timed to appointments for consistent local validation",
      "Booking and phone tracking to attribute every client to the service that brought them"
    ],
    strategies: [
      {
        title: "Optimize for how salon customers actually choose",
        body: "Salon searches are exploratory — 'balayage near me,' 'best lash tech,' 'bridal hair and makeup.' Customers shortlist from the map pack and local results, then check reviews and pricing. I structure your presence so your services, prices, and stylists are explicit, consistent facts across your site, profile, and booking links."
      },
      {
        title: "Make every service a findable entity",
        body: "Color services, extensions, brows, and bridal are different purchase intents with different search journeys. I treat each as a distinct service entity with its own page, schema, and local relevance signals, so you show up for the specific treatments people search in your area rather than one generic salon page."
      }
    ],
    faqs: [
      {
        q: "Can salon SEO help without a big advertising budget?",
        a: "Yes — that's the point. Local search and map pack visibility are earned, not bought. Once your salon ranks for the services you offer in your neighborhoods, you capture steady, high-intent demand without paying per click or per impression."
      },
      {
        q: "Do you work with single-stylist and small salons?",
        a: "Yes. A single-stylist suite competes against chains by owning its niche — the specific services, style, and neighborhood it serves. The same entity and schema discipline that wins for multi-location groups applies, scaled to one precise local brand."
      }
    ],
    keywords: [
      {
        question: "What does local SEO for salons include?",
        answer: "Local SEO for salons covers Google Business Profile optimization with service categories and booking integration, BeautySalon schema markup, service-led pages for haircuts, color, extensions, brows, and bridal, and a review-generation strategy timed to appointments — so you show up for how customers actually search: 'balayage near me,' 'best lash tech,' 'bridal hair and makeup.'"
      },
      {
        question: "How do salons get booked from Google search?",
        answer: "Salon customers shortlist from the map pack, then check prices and reviews before booking. I make your services, prices, and stylists explicit, consistent facts across your site, profile, and booking links, and pair it with appointment-timed review requests so search systems trust you as the local choice."
      }
    ]
  },
  {
    slug: "seo-for-pest-control",
    industry: "Pest Control Companies",
    singular: "Pest Control Business",
    schemaType: "LocalBusiness",
    eyebrow: "Local SEO for Pest Control",
    headline: "SEO for Pest Control",
    intro:
      "Pest control is one of the most seasonal and competitive local niches on the map. I build local SEO systems for pest control companies that win recurring and emergency demand — termites, rodents, ants, bed bugs — with service-area precision, strong local schema, and call tracking that proves where every job came from.",
    deliverables: [
      "Google Business Profile optimization with pest control categories and service-area setup",
      "LocalBusiness schema markup with the specific pests and treatments you handle",
      "Pest-by-pest landing pages (termites, rodents, ants, bed bugs, wildlife) mapped to service zones",
      "Seasonal content and offer pages aligned to local pest cycles for year-round visibility",
      "Consistent NAP and pest-industry directory citations (Angi, HomeAdvisor, BBB)",
      "Call tracking to attribute every service call to the pest and area that generated it"
    ],
    strategies: [
      {
        title: "Own the specific pest searches in your service areas",
        body: "Someone with termites searches 'termite treatment near me' — not 'pest control.' Each pest is a distinct problem with its own urgency and price point. I structure your site so every pest and treatment you offer is a dedicated, geo-targeted entity that resolves to your company in local and AI search."
      },
      {
        title: "Win seasonal spikes with structured local intent",
        body: "Pest demand swings with the seasons. I align your site architecture, service-area pages, and profile updates so you're positioned before each seasonal spike, capturing the search surge when it hits rather than playing catch-up."
      }
    ],
    faqs: [
      {
        q: "How is pest control SEO different from other local businesses?",
        a: "Pest control is highly seasonal and heavily targeted by national call centers that bid on the same keywords. Winning locally requires pest-specific landing pages, verified service-area data, and strong citation and review consistency so search systems trust your company as the real local provider."
      },
      {
        q: "Can you handle a pest control company in multiple states?",
        a: "Yes. I build a parent brand entity with per-location and per-service-area entities, each with its own schema and citation profile, so each branch ranks in its own market without the locations competing against one another."
      }
    ],
    keywords: [
      {
        question: "What does local SEO for pest control companies include?",
        answer: "Local SEO for pest control covers Google Business Profile optimization with pest control categories, LocalBusiness schema for each pest you handle, pest-by-pest landing pages mapped to service zones, and citations across Angi, HomeAdvisor, and BBB — so you rank for 'termite treatment near me,' not just a generic 'pest control' page."
      },
      {
        question: "How do pest control companies win seasonal demand?",
        answer: "Pest demand swings with the seasons, and national call centers chase the same searches. I align your site architecture, service-area pages, and profile freshness so you're positioned before each seasonal spike, capturing the surge when it hits instead of playing catch-up."
      }
    ]
  },
  {
    slug: "seo-for-roofers",
    industry: "Roofing Companies",
    singular: "Roofing Contractor",
    schemaType: "RoofingContractor",
    eyebrow: "Local SEO for Roofing Contractors",
    headline: "SEO for Roofers",
    intro:
      "Roofing is a high-ticket, high-trust purchase — homeowners research, compare contractors, and only call the few they trust. I build local SEO systems for roofing companies that rank for storm and repair demand, present you as the credible local contractor in Google and AI search, and generate calls worth thousands each.",
    deliverables: [
      "Google Business Profile optimization with roofing categories, service areas, and gallery-driven trust signals",
      "RoofingContractor schema.org markup across service and project pages",
      "Service-area landing pages for repairs, replacements, storm damage, and insurance claims",
      "Project-gallery and before/after content structured for local E-E-A-T",
      "Roofing directory and citation alignment for local trust and map pack consistency",
      "Call tracking so every estimate request is attributed to the area and service that drove it"
    ],
    strategies: [
      {
        title: "Win high-ticket jobs with trust-structured content",
        body: "Roof replacements are expensive decisions. Homeowners search multiple times — 'roof repair cost,' 'best roofer near me,' 'storm damage roof replacement.' I structure your site so every service, service area, and proof point is a verifiable local entity, making your contractor the obvious trusted answer."
      },
      {
        title: "Capture storm-driven surge demand",
        body: "After a hailstorm, roofing demand spikes overnight in specific neighborhoods. I keep your service-area pages, schema, and profile always warm so you're the contractor search engines and AI assistants recommend when the surge hits."
      }
    ],
    faqs: [
      {
        q: "Why do roofers need such strong reviews and citations?",
        a: "Roofing is a considered purchase with real financial risk for the homeowner. Google and AI answer engines weight review consistency, verified licensing signals, and directory alignment heavily for contractors, so a strong, consistent local entity profile is the difference between being recommended and being invisible."
      },
      {
        q: "Can you help a roofer targeting multiple counties?",
        a: "Yes. I map each county and service area to its own landing page with local schema and citation signals, so you rank across the full region you cover while keeping the parent brand entity unified and authoritative."
      }
    ],
    keywords: [
      {
        question: "What does local SEO for roofing companies include?",
        answer: "Local SEO for roofing companies centers on the map pack and AI recommendations: Google Business Profile optimization with roofing categories, RoofingContractor schema markup, service-area pages for every county you cover, storm and repair content, roofing directory citations, and call tracking that attributes each estimate request to the area and service that drove it."
      },
      {
        question: "How do roofing companies win after a storm?",
        answer: "When hail or wind damage hits a neighborhood, roofing demand surges overnight. Roofing companies that already have warm service-area pages, up-to-date profiles, and verified schema get recommended first — so I keep those signals always current, letting you capture surge demand the moment it appears instead of scrambling after competitors do."
      }
    ]
  },
  {
    slug: "seo-for-hvac",
    industry: "HVAC Companies",
    singular: "HVAC Company",
    schemaType: "HVACBusiness",
    eyebrow: "Local SEO for HVAC Contractors",
    headline: "SEO for HVAC",
    intro:
      "Heating and cooling is the most seasonal home-services category on the map — demand spikes when temperatures do, and it's a repair homeowners can't defer. I build local SEO systems for HVAC companies that rank in the map pack and AI search for repair, replacement, and tune-up queries, keep your service-area and after-hours facts consistent, and convert seasonal search surges into booked service calls.",
    deliverables: [
      "Google Business Profile optimization with HVAC categories, service areas, and seasonal availability",
      "HVACBusiness schema.org markup across service and financing pages",
      "Service-area landing pages for every city and county your technicians actually cover",
      "Service-led content for repairs, replacements, tune-ups, and seasonal readiness (AC, furnace, heat pump)",
      "HVAC directory and citation alignment for consistent local entity trust",
      "Call tracking so every service request is attributed to the season, service, and area that generated it"
    ],
    strategies: [
      {
        title: "Be positioned before the season flips",
        body: "AC demand spikes in June, furnace demand in November — and search engines start recommending providers weeks earlier. I align your site architecture, service-area pages, and profile freshness so you're the recommended local HVAC company as each seasonal surge builds, not after it peaks."
      },
      {
        title: "Win tune-up and replacement intent separately",
        body: "'AC tune-up cost' and 'furnace replacement near me' are different jobs at different price points searched at different times. I structure each as its own geo-targeted entity with its own page and schema, so you capture both the steady maintenance demand and the high-ticket replacement demand in every market you serve."
      }
    ],
    faqs: [
      {
        q: "How is HVAC SEO different from other home services?",
        a: "HVAC demand is tightly seasonal and split between two major systems (heating and cooling). Winning consistently means structuring the site around both seasonal cycles, keeping service-area and availability facts machine-readable, and building entity trust through citations and reviews so you're recommended before and during each peak."
      },
      {
        q: "Can you help an HVAC company with multiple service areas?",
        a: "Yes. I build a parent brand entity with per-city and per-county service pages, each carrying its own LocalBusiness schema and citation profile, so each market you dispatch to ranks independently without your own pages competing."
      }
    ],
    keywords: [
      {
        question: "What does local SEO for HVAC contractors cover?",
        answer: "Local SEO for HVAC contractors covers Google Business Profile optimization, HVACBusiness schema markup, service-area landing pages for every zone your technicians cover, seasonal content for AC and furnace demand, industry citations, and call tracking that attributes every service request to the page and season that drove it."
      },
      {
        question: "How do HVAC companies rank for seasonal search spikes?",
        answer: "Cooling demand peaks in late spring and heating demand in late fall. HVAC companies that keep service-area pages, profiles, and schema warm through the off-season get recommended first when the spike hits — so I structure the site to be always-current rather than scrambling during peak weeks."
      }
    ]
  }
];

export function getNicheBySlug(slug: string): Niche | undefined {
  return LOCAL_NICHES.find((n) => n.slug === slug);
}
