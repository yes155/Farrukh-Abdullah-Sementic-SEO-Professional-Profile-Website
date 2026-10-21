export interface NicheFaq { q: string; a: string }
export interface NicheStrategy { title: string; body: string }
export interface NicheKeyword { question: string; answer: string }
export interface Niche {
 slug: string; industry: string; singular: string; schemaType: string; eyebrow: string; headline: string; intro: string;
 deliverables: string[]; strategies: NicheStrategy[]; faqs: NicheFaq[]; keywords: NicheKeyword[]; focusKeywords: string[];
 relatedCities: string[]; relatedInsight: string; relatedCaseStudyPath: string; relatedCaseStudyName: string;
 example: string; measurement: string; limitations: string; metaTitle?: string; metaDescription?: string;
}
export const LOCAL_NICHES: Niche[] = [
  {
    "slug": "seo-for-dentists",
    "industry": "Dentists",
    "singular": "Dental Practice",
    "schemaType": "Dentist",
    "eyebrow": "Local SEO consulting",
    "headline": "SEO for Dentists",
    "intro": "A new patient choosing a local practice needs treatment availability, actual office details, and a clear booking route. I review the website, business profile, and contact journey, then agree the work needed for the actual market.",
    "deliverables": [
      "Service and intent map for routine care, emergency dentistry, implants",
      "Accurate business/profile and service-coverage review",
      "Page briefs, useful internal links, and implementation responsibilities",
      "Qualified appointment requests and booked visits, when the practice can share aggregate outcomes."
    ],
    "strategies": [
      {
        "title": "Plan around the buying decision",
        "body": "Separate an urgent appointment request from elective treatment research. Keep clinician credentials and treatment claims supplied by the practice."
      },
      {
        "title": "Measure relevant inquiries",
        "body": "Qualified appointment requests and booked visits, when the practice can share aggregate outcomes."
      }
    ],
    "faqs": [
      {
        "q": "What makes SEO for dentists different?",
        "a": "A new patient choosing a local practice needs treatment availability, actual office details, and a clear booking route. Treatment content needs practice approval; do not infer medical suitability from a search ranking."
      },
      {
        "q": "What does the initial review produce?",
        "a": "A prioritized list of observed problems, recommended changes, required access, and a scope for implementation. Ranking and lead-volume outcomes are not guaranteed."
      }
    ],
    "keywords": [
      {
        "question": "How is the work scoped and priced?",
        "answer": "The proposal defines the pages, profiles, measurement, implementation responsibilities, and fees. It follows a review of the actual website and business rather than a universal monthly price."
      }
    ],
    "focusKeywords": [
      "seo for dentists"
    ],
    "relatedCities": [
      "austin"
    ],
    "relatedInsight": "local-businesses-ai-search",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "example": "Separate an urgent appointment request from elective treatment research. Keep clinician credentials and treatment claims supplied by the practice.",
    "measurement": "Qualified appointment requests and booked visits, when the practice can share aggregate outcomes.",
    "limitations": "Treatment content needs practice approval; do not infer medical suitability from a search ranking."
  },
  {
    "slug": "seo-for-plumbers",
    "industry": "Plumbers",
    "singular": "Plumbing Business",
    "schemaType": "Plumber",
    "eyebrow": "Local SEO consulting",
    "headline": "SEO for Plumbers",
    "intro": "A caller with an active leak has a different task from a homeowner researching a planned replacement. I review the website, business profile, and contact journey, then agree the work needed for the actual market.",
    "deliverables": [
      "Service and intent map for emergency repairs, drain services, water-heater work",
      "Accurate business/profile and service-coverage review",
      "Page briefs, useful internal links, and implementation responsibilities",
      "Qualified calls, accepted jobs, and estimated versus realized job value."
    ],
    "strategies": [
      {
        "title": "Plan around the buying decision",
        "body": "Map urgent and planned jobs to the correct service pages and phone routing. State after-hours coverage only when it is actually staffed."
      },
      {
        "title": "Measure relevant inquiries",
        "body": "Qualified calls, accepted jobs, and estimated versus realized job value."
      }
    ],
    "faqs": [
      {
        "q": "What makes SEO for plumbers different?",
        "a": "A caller with an active leak has a different task from a homeowner researching a planned replacement. Do not advertise emergency response times or towns the business cannot reliably serve."
      },
      {
        "q": "What does the initial review produce?",
        "a": "A prioritized list of observed problems, recommended changes, required access, and a scope for implementation. Ranking and lead-volume outcomes are not guaranteed."
      }
    ],
    "keywords": [
      {
        "question": "How is the work scoped and priced?",
        "answer": "The proposal defines the pages, profiles, measurement, implementation responsibilities, and fees. It follows a review of the actual website and business rather than a universal monthly price."
      }
    ],
    "focusKeywords": [
      "seo for plumbers"
    ],
    "relatedCities": [
      "chicago"
    ],
    "relatedInsight": "local-entity-seo-ai-search",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "example": "Map urgent and planned jobs to the correct service pages and phone routing. State after-hours coverage only when it is actually staffed.",
    "measurement": "Qualified calls, accepted jobs, and estimated versus realized job value.",
    "limitations": "Do not advertise emergency response times or towns the business cannot reliably serve."
  },
  {
    "slug": "seo-for-salons",
    "industry": "Hair & Beauty Salons",
    "singular": "Salon",
    "schemaType": "BeautySalon",
    "eyebrow": "Local SEO consulting",
    "headline": "SEO for Hair & Beauty Salons",
    "intro": "Customers need to choose a service, practitioner, and suitable appointment before booking. I review the website, business profile, and contact journey, then agree the work needed for the actual market.",
    "deliverables": [
      "Service and intent map for hair services, beauty appointments, specialist treatments",
      "Accurate business/profile and service-coverage review",
      "Page briefs, useful internal links, and implementation responsibilities",
      "Appointment requests, completed bookings, and relevant repeat inquiries."
    ],
    "strategies": [
      {
        "title": "Plan around the buying decision",
        "body": "Link service descriptions to the right booking option, verified hours, and current practitioner availability."
      },
      {
        "title": "Measure relevant inquiries",
        "body": "Appointment requests, completed bookings, and relevant repeat inquiries."
      }
    ],
    "faqs": [
      {
        "q": "What makes SEO for hair & beauty salons different?",
        "a": "Customers need to choose a service, practitioner, and suitable appointment before booking. Keep service menus and availability accurate; confirm image and customer-story permission."
      },
      {
        "q": "What does the initial review produce?",
        "a": "A prioritized list of observed problems, recommended changes, required access, and a scope for implementation. Ranking and lead-volume outcomes are not guaranteed."
      }
    ],
    "keywords": [
      {
        "question": "How is the work scoped and priced?",
        "answer": "The proposal defines the pages, profiles, measurement, implementation responsibilities, and fees. It follows a review of the actual website and business rather than a universal monthly price."
      }
    ],
    "focusKeywords": [
      "seo for hair & beauty salons"
    ],
    "relatedCities": [
      "miami"
    ],
    "relatedInsight": "local-businesses-ai-search",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "example": "Link service descriptions to the right booking option, verified hours, and current practitioner availability.",
    "measurement": "Appointment requests, completed bookings, and relevant repeat inquiries.",
    "limitations": "Keep service menus and availability accurate; confirm image and customer-story permission."
  },
  {
    "slug": "seo-for-pest-control",
    "industry": "Pest Control Companies",
    "singular": "Pest-Control Business",
    "schemaType": "HomeAndConstructionBusiness",
    "eyebrow": "Local SEO consulting",
    "headline": "SEO for Pest Control Companies",
    "intro": "A one-off pest problem and a recurring maintenance contract have different buyer questions. I review the website, business profile, and contact journey, then agree the work needed for the actual market.",
    "deliverables": [
      "Service and intent map for pest identification inquiries, treatment services, ongoing plans",
      "Accurate business/profile and service-coverage review",
      "Page briefs, useful internal links, and implementation responsibilities",
      "Qualified inspection requests and accepted treatment plans."
    ],
    "strategies": [
      {
        "title": "Plan around the buying decision",
        "body": "Group pages by services actually offered, describe inspection and quote processes, and verify seasonal claims before using them."
      },
      {
        "title": "Measure relevant inquiries",
        "body": "Qualified inspection requests and accepted treatment plans."
      }
    ],
    "faqs": [
      {
        "q": "What makes SEO for pest control companies different?",
        "a": "A one-off pest problem and a recurring maintenance contract have different buyer questions. Operational and product claims must be supplied by the licensed business; avoid unsupported safety assurances."
      },
      {
        "q": "What does the initial review produce?",
        "a": "A prioritized list of observed problems, recommended changes, required access, and a scope for implementation. Ranking and lead-volume outcomes are not guaranteed."
      }
    ],
    "keywords": [
      {
        "question": "How is the work scoped and priced?",
        "answer": "The proposal defines the pages, profiles, measurement, implementation responsibilities, and fees. It follows a review of the actual website and business rather than a universal monthly price."
      }
    ],
    "focusKeywords": [
      "seo for pest control companies"
    ],
    "relatedCities": [
      "phoenix"
    ],
    "relatedInsight": "us-cities-local-seo-opportunity",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "example": "Group pages by services actually offered, describe inspection and quote processes, and verify seasonal claims before using them.",
    "measurement": "Qualified inspection requests and accepted treatment plans.",
    "limitations": "Operational and product claims must be supplied by the licensed business; avoid unsupported safety assurances."
  },
  {
    "slug": "seo-for-roofers",
    "industry": "Roofing Companies",
    "singular": "Roofing Contractor",
    "schemaType": "RoofingContractor",
    "eyebrow": "Local SEO consulting",
    "headline": "SEO for Roofing Companies",
    "intro": "A repair inquiry differs from replacement research and from a storm-related inspection request. I review the website, business profile, and contact journey, then agree the work needed for the actual market.",
    "deliverables": [
      "Service and intent map for roof repairs, roof replacements, inspection requests",
      "Accurate business/profile and service-coverage review",
      "Page briefs, useful internal links, and implementation responsibilities",
      "Qualified inspection or quote requests and accepted projects."
    ],
    "strategies": [
      {
        "title": "Plan around the buying decision",
        "body": "Use real project examples and a clear inspection route. Document the business service radius before expanding location coverage."
      },
      {
        "title": "Measure relevant inquiries",
        "body": "Qualified inspection or quote requests and accepted projects."
      }
    ],
    "faqs": [
      {
        "q": "What makes SEO for roofing companies different?",
        "a": "A repair inquiry differs from replacement research and from a storm-related inspection request. Do not imply insurance approval, guaranteed storm demand, or service in areas outside the real operating radius."
      },
      {
        "q": "What does the initial review produce?",
        "a": "A prioritized list of observed problems, recommended changes, required access, and a scope for implementation. Ranking and lead-volume outcomes are not guaranteed."
      }
    ],
    "keywords": [
      {
        "question": "How is the work scoped and priced?",
        "answer": "The proposal defines the pages, profiles, measurement, implementation responsibilities, and fees. It follows a review of the actual website and business rather than a universal monthly price."
      }
    ],
    "focusKeywords": [
      "seo for roofing companies"
    ],
    "relatedCities": [
      "denver"
    ],
    "relatedInsight": "us-cities-local-seo-opportunity",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "example": "Use real project examples and a clear inspection route. Document the business service radius before expanding location coverage.",
    "measurement": "Qualified inspection or quote requests and accepted projects.",
    "limitations": "Do not imply insurance approval, guaranteed storm demand, or service in areas outside the real operating radius."
  },
  {
    "slug": "seo-for-hvac",
    "industry": "HVAC Companies",
    "singular": "HVAC Business",
    "schemaType": "HVACBusiness",
    "eyebrow": "Local SEO consulting",
    "headline": "SEO for HVAC Companies",
    "intro": "An urgent breakdown needs different information from comparing a replacement or maintenance contract. I review the website, business profile, and contact journey, then agree the work needed for the actual market.",
    "deliverables": [
      "Service and intent map for system repairs, replacement planning, maintenance plans",
      "Accurate business/profile and service-coverage review",
      "Page briefs, useful internal links, and implementation responsibilities",
      "Qualified calls, booked visits, and accepted work by service category."
    ],
    "strategies": [
      {
        "title": "Plan around the buying decision",
        "body": "Separate repair, installation, and maintenance pages; verify actual hours, supported systems, and scheduling before promotion."
      },
      {
        "title": "Measure relevant inquiries",
        "body": "Qualified calls, booked visits, and accepted work by service category."
      }
    ],
    "faqs": [
      {
        "q": "What makes SEO for hvac companies different?",
        "a": "An urgent breakdown needs different information from comparing a replacement or maintenance contract. Capacity and seasonal assumptions require business data; marketing cannot guarantee dispatch availability."
      },
      {
        "q": "What does the initial review produce?",
        "a": "A prioritized list of observed problems, recommended changes, required access, and a scope for implementation. Ranking and lead-volume outcomes are not guaranteed."
      }
    ],
    "keywords": [
      {
        "question": "How is the work scoped and priced?",
        "answer": "The proposal defines the pages, profiles, measurement, implementation responsibilities, and fees. It follows a review of the actual website and business rather than a universal monthly price."
      }
    ],
    "focusKeywords": [
      "seo for hvac companies"
    ],
    "relatedCities": [
      "houston"
    ],
    "relatedInsight": "us-cities-local-seo-opportunity",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "example": "Separate repair, installation, and maintenance pages; verify actual hours, supported systems, and scheduling before promotion.",
    "measurement": "Qualified calls, booked visits, and accepted work by service category.",
    "limitations": "Capacity and seasonal assumptions require business data; marketing cannot guarantee dispatch availability."
  },
  {
    "slug": "seo-for-electricians",
    "industry": "Electricians",
    "singular": "Electrical Contractor",
    "schemaType": "Electrician",
    "eyebrow": "Local SEO consulting",
    "headline": "SEO for Electricians",
    "intro": "I help electrical contractors organize local search around the jobs they want to accept: emergency calls, panel upgrades, EV charger installations, and commercial work. The scope covers accurate service information, useful pages, and measurement of qualified inquiries.",
    "deliverables": [
      "Electrical-service and coverage review",
      "Distinct briefs for urgent and planned work",
      "Qualified-call and booked-job measurement"
    ],
    "strategies": [
      {
        "title": "Plan around the buying decision",
        "body": "Separate emergency call routing from planned upgrades. An EV charger page can explain inspection and quote steps without promising installation eligibility."
      },
      {
        "title": "Measure relevant inquiries",
        "body": "Qualified calls and estimate requests, separated into urgent and planned work."
      }
    ],
    "faqs": [
      {
        "q": "How do you approach electrician map-pack SEO?",
        "a": "I first review Business Profile eligibility, the selected categories, services, hours, contact details, and the actual operating area against the electrical business’s records. I then review the linked website and how a caller reaches the team. Relevance, distance, and prominence affect local results; adding more city names does not create a new service location."
      },
      {
        "q": "Should emergency work and EV charger installations have separate pages?",
        "a": "They can when the contractor offers both and each page answers a distinct customer task. Emergency visitors need actual availability and a call route; planned installations need assessment and estimate information. Wording variants for the same job can stay on one page."
      },
      {
        "q": "What do you need from the electrical contractor?",
        "a": "An approved service list, genuine operating area, licensing information the business can substantiate, contact availability, and existing project evidence. Search Console, Business Profile, website, and aggregate inquiry records help define the implementation scope."
      },
      {
        "q": "How will I know whether SEO is bringing useful jobs?",
        "a": "We compare relevant inquiries, assessments, and completed jobs where your records can connect them to search. Phone-link clicks are interactions; calls need a service and coverage check before counting as qualified leads. To assess business value, compare campaign costs with contribution from additional completed and paid work over the same period, accounting for seasonality and other channels."
      }
    ],
    "keywords": [
      {
        "question": "How much does electrician SEO cost?",
        "answer": "I quote the work after reviewing your website, profiles, service coverage, and implementation responsibilities. An initial audit, an implementation project, and ongoing support have different deliverables. The proposal identifies the fee, included work, reporting period, and any separate writing, development, or tool costs."
      }
    ],
    "focusKeywords": [
      "seo for electricians"
    ],
    "relatedCities": [
      "chicago"
    ],
    "relatedInsight": "local-entity-seo-ai-search",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "example": "Separate emergency call routing from planned upgrades. An EV charger page can explain inspection and quote steps without promising installation eligibility.",
    "measurement": "Qualified calls and estimate requests, separated into urgent and planned work.",
    "limitations": "Verify licensing and hours with the contractor. SEO content must not replace electrical safety advice.",
    "metaTitle": "SEO for Electricians: Local Search & Job Inquiries",
    "metaDescription": "Local SEO for electrical contractors: service and coverage reviews, EV charger page briefs, practical examples, and qualified-call measurement. Work with Farrukh."
  },
  {
    "slug": "seo-for-contractors",
    "industry": "Contractors",
    "singular": "Contracting Business",
    "schemaType": "GeneralContractor",
    "eyebrow": "Local SEO consulting",
    "headline": "SEO for Contractors",
    "intro": "A general contractor must explain project scope, trade coordination, service area, and project evidence. I review the website, business profile, and contact journey, then agree the work needed for the actual market.",
    "deliverables": [
      "Service and intent map for general contracting, renovation projects, multi-trade work",
      "Accurate business/profile and service-coverage review",
      "Page briefs, useful internal links, and implementation responsibilities",
      "Qualified project inquiries, estimates, and accepted work rather than every form submission."
    ],
    "strategies": [
      {
        "title": "Plan around the buying decision",
        "body": "Use this parent offering for general and multi-trade businesses. Specialist pages cover narrower plumbing, roofing, fencing, or electrical journeys."
      },
      {
        "title": "Measure relevant inquiries",
        "body": "Qualified project inquiries, estimates, and accepted work rather than every form submission."
      }
    ],
    "faqs": [
      {
        "q": "What makes SEO for contractors different?",
        "a": "A general contractor must explain project scope, trade coordination, service area, and project evidence. Do not copy every town or trade into another page; each page needs a distinct customer task and operating basis."
      },
      {
        "q": "What does the initial review produce?",
        "a": "A prioritized list of observed problems, recommended changes, required access, and a scope for implementation. Ranking and lead-volume outcomes are not guaranteed."
      }
    ],
    "keywords": [
      {
        "question": "How is the work scoped and priced?",
        "answer": "The proposal defines the pages, profiles, measurement, implementation responsibilities, and fees. It follows a review of the actual website and business rather than a universal monthly price."
      }
    ],
    "focusKeywords": [
      "seo for contractors"
    ],
    "relatedCities": [
      "houston"
    ],
    "relatedInsight": "us-cities-local-seo-opportunity",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "example": "Use this parent offering for general and multi-trade businesses. Specialist pages cover narrower plumbing, roofing, fencing, or electrical journeys.",
    "measurement": "Qualified project inquiries, estimates, and accepted work rather than every form submission.",
    "limitations": "Do not copy every town or trade into another page; each page needs a distinct customer task and operating basis."
  },
  {
    "slug": "seo-for-therapists",
    "industry": "Therapists",
    "singular": "Therapy Practice",
    "schemaType": "LocalBusiness",
    "eyebrow": "Local SEO consulting",
    "headline": "SEO for Therapists",
    "intro": "Prospective clients need to understand the type of practice, appointment format, and eligibility before making contact. I review the website, business profile, and contact journey, then agree the work needed for the actual market.",
    "deliverables": [
      "Service and intent map for in-person appointments, remote consultations, specialist services",
      "Accurate business/profile and service-coverage review",
      "Page briefs, useful internal links, and implementation responsibilities",
      "Aggregate relevant inquiries and booked consultations where appropriate."
    ],
    "strategies": [
      {
        "title": "Plan around the buying decision",
        "body": "Explain actual practitioner credentials, appointment routes, and location or remote-service boundaries using practice-approved information."
      },
      {
        "title": "Measure relevant inquiries",
        "body": "Aggregate relevant inquiries and booked consultations where appropriate."
      }
    ],
    "faqs": [
      {
        "q": "What makes SEO for therapists different?",
        "a": "Prospective clients need to understand the type of practice, appointment format, and eligibility before making contact. Protect sensitive inquiry information; remote-practice and eligibility claims need practitioner review."
      },
      {
        "q": "What does the initial review produce?",
        "a": "A prioritized list of observed problems, recommended changes, required access, and a scope for implementation. Ranking and lead-volume outcomes are not guaranteed."
      }
    ],
    "keywords": [
      {
        "question": "How is the work scoped and priced?",
        "answer": "The proposal defines the pages, profiles, measurement, implementation responsibilities, and fees. It follows a review of the actual website and business rather than a universal monthly price."
      }
    ],
    "focusKeywords": [
      "seo for therapists"
    ],
    "relatedCities": [
      "seattle"
    ],
    "relatedInsight": "local-businesses-ai-search",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "example": "Explain actual practitioner credentials, appointment routes, and location or remote-service boundaries using practice-approved information.",
    "measurement": "Aggregate relevant inquiries and booked consultations where appropriate.",
    "limitations": "Protect sensitive inquiry information; remote-practice and eligibility claims need practitioner review."
  },
  {
    "slug": "seo-for-real-estate-agents",
    "industry": "Real Estate Agents",
    "singular": "Real Estate Business",
    "schemaType": "RealEstateAgent",
    "eyebrow": "Local SEO consulting",
    "headline": "SEO for Real Estate Agents",
    "intro": "A seller choosing representation needs different information from a buyer reviewing listings or neighborhoods. I review the website, business profile, and contact journey, then agree the work needed for the actual market.",
    "deliverables": [
      "Service and intent map for seller inquiries, buyer guidance, neighborhood information",
      "Accurate business/profile and service-coverage review",
      "Page briefs, useful internal links, and implementation responsibilities",
      "Qualified buyer or seller inquiries and booked consultations."
    ],
    "strategies": [
      {
        "title": "Plan around the buying decision",
        "body": "Build useful market/service explanations from real agent expertise. US real-estate and estate-agency terminology share this offering."
      },
      {
        "title": "Measure relevant inquiries",
        "body": "Qualified buyer or seller inquiries and booked consultations."
      }
    ],
    "faqs": [
      {
        "q": "What makes SEO for real estate agents different?",
        "a": "A seller choosing representation needs different information from a buyer reviewing listings or neighborhoods. Market data and listing facts need dates and sources; do not imply an office or licensing jurisdiction that does not exist."
      },
      {
        "q": "What does the initial review produce?",
        "a": "A prioritized list of observed problems, recommended changes, required access, and a scope for implementation. Ranking and lead-volume outcomes are not guaranteed."
      }
    ],
    "keywords": [
      {
        "question": "How is the work scoped and priced?",
        "answer": "The proposal defines the pages, profiles, measurement, implementation responsibilities, and fees. It follows a review of the actual website and business rather than a universal monthly price."
      }
    ],
    "focusKeywords": [
      "seo for real estate agents"
    ],
    "relatedCities": [
      "dallas"
    ],
    "relatedInsight": "entity-based-content-architecture",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "example": "Build useful market/service explanations from real agent expertise. US real-estate and estate-agency terminology share this offering.",
    "measurement": "Qualified buyer or seller inquiries and booked consultations.",
    "limitations": "Market data and listing facts need dates and sources; do not imply an office or licensing jurisdiction that does not exist."
  },
  {
    "slug": "seo-for-landscapers",
    "industry": "Landscapers",
    "singular": "Landscaping Business",
    "schemaType": "HomeAndConstructionBusiness",
    "eyebrow": "Local SEO consulting",
    "headline": "SEO for Landscapers",
    "intro": "An installation project, regular maintenance request, and commercial contract require different scope and quote information. I review the website, business profile, and contact journey, then agree the work needed for the actual market.",
    "deliverables": [
      "Service and intent map for landscape installation, maintenance work, commercial contracts",
      "Accurate business/profile and service-coverage review",
      "Page briefs, useful internal links, and implementation responsibilities",
      "Qualified site visits, quote requests, and accepted projects by service line."
    ],
    "strategies": [
      {
        "title": "Plan around the buying decision",
        "body": "Separate the work the team actually accepts. Use documented project scope, service radius, and inquiry qualification before expanding coverage."
      },
      {
        "title": "Measure relevant inquiries",
        "body": "Qualified site visits, quote requests, and accepted projects by service line."
      }
    ],
    "faqs": [
      {
        "q": "What makes SEO for landscapers different?",
        "a": "An installation project, regular maintenance request, and commercial contract require different scope and quote information. Do not assume landscaping is easy to rank in every market; assess actual service-specific competition."
      },
      {
        "q": "What does the initial review produce?",
        "a": "A prioritized list of observed problems, recommended changes, required access, and a scope for implementation. Ranking and lead-volume outcomes are not guaranteed."
      }
    ],
    "keywords": [
      {
        "question": "How is the work scoped and priced?",
        "answer": "The proposal defines the pages, profiles, measurement, implementation responsibilities, and fees. It follows a review of the actual website and business rather than a universal monthly price."
      }
    ],
    "focusKeywords": [
      "seo for landscapers"
    ],
    "relatedCities": [
      "austin"
    ],
    "relatedInsight": "us-cities-local-seo-opportunity",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "example": "Separate the work the team actually accepts. Use documented project scope, service radius, and inquiry qualification before expanding coverage.",
    "measurement": "Qualified site visits, quote requests, and accepted projects by service line.",
    "limitations": "Do not assume landscaping is easy to rank in every market; assess actual service-specific competition."
  },
  {
    "slug": "seo-for-orthodontists",
    "industry": "Orthodontists",
    "singular": "Orthodontic Practice",
    "schemaType": "Dentist",
    "eyebrow": "Local SEO consulting",
    "headline": "SEO for Orthodontists",
    "intro": "I help orthodontic practices connect local discovery and treatment research to a clear consultation route. The work reviews practice information, braces and clear-aligner page purposes, clinician evidence, and how appointment inquiries become confirmed bookings.",
    "deliverables": [
      "Practice and treatment-page review",
      "Consultation briefs with practice approval",
      "Aggregate booking-quality measurement"
    ],
    "strategies": [
      {
        "title": "Plan around the buying decision",
        "body": "Separate consultation questions from general dental care. Describe braces, aligners, and financing only from practice-approved material, then connect to the correct booking route."
      },
      {
        "title": "Measure relevant inquiries",
        "body": "Relevant consultation requests, bookings, and attended appointments if aggregate data is available."
      }
    ],
    "faqs": [
      {
        "q": "What does local SEO for orthodontists include?",
        "a": "The initial scope reviews actual practice locations, Business Profile information, clinician details, treatment-page purposes, internal links, and consultation routes. The deliverable identifies the pages and business information to improve, who approves the content, and how implementation will be checked."
      },
      {
        "q": "Should braces and clear aligners have separate pages?",
        "a": "They can if the practice offers both and can answer meaningfully different patient questions. Each page should explain the actual consultation process and link to the relevant practice and clinician information. Individual treatment suitability remains a clinical assessment."
      },
      {
        "q": "Who approves treatment and payment information?",
        "a": "The practice approves clinician qualifications, treatment descriptions, photographs, consent requirements, and payment statements before publication. My role is to organize and implement useful content from confirmed practice information."
      },
      {
        "q": "How do you measure orthodontic consultation quality?",
        "a": "Where the practice can supply aggregate records, we distinguish consultation inquiries, relevant requests, confirmed bookings, and attended appointments. We agree the reporting period and attribution limits, and keep patient health information out of website analytics events."
      }
    ],
    "keywords": [
      {
        "question": "How is the work scoped and priced?",
        "answer": "The proposal defines the pages, profiles, measurement, implementation responsibilities, and fees. It follows a review of the actual website and business rather than a universal monthly price."
      }
    ],
    "focusKeywords": [
      "seo for orthodontists"
    ],
    "relatedCities": [
      "miami"
    ],
    "relatedInsight": "local-entity-seo-ai-search",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "example": "Separate consultation questions from general dental care. Describe braces, aligners, and financing only from practice-approved material, then connect to the correct booking route.",
    "measurement": "Relevant consultation requests, bookings, and attended appointments if aggregate data is available.",
    "limitations": "Do not promise treatment eligibility, financing approval, clinical outcomes, or acquisition results from another industry.",
    "metaTitle": "Local SEO for Orthodontists: Consultation Journeys",
    "metaDescription": "Local SEO for orthodontic practices: treatment-page planning, accurate practice information, consultation routes, and booking-quality measurement. View example briefs."
  },
  {
    "slug": "seo-for-dermatologists",
    "industry": "Dermatologists",
    "singular": "Dermatology Practice",
    "schemaType": "MedicalBusiness",
    "eyebrow": "Local SEO consulting",
    "headline": "SEO for Dermatologists",
    "intro": "A medical consultation and an elective cosmetic inquiry can require different information and appointment routes. I review the website, business profile, and contact journey, then agree the work needed for the actual market.",
    "deliverables": [
      "Service and intent map for medical consultations, cosmetic inquiries, follow-up appointments",
      "Accurate business/profile and service-coverage review",
      "Page briefs, useful internal links, and implementation responsibilities",
      "Qualified appointment requests and bookings, separated by the real service categories."
    ],
    "strategies": [
      {
        "title": "Plan around the buying decision",
        "body": "Clarify the actual practice services, clinician credentials, and booking process using approved factual material."
      },
      {
        "title": "Measure relevant inquiries",
        "body": "Qualified appointment requests and bookings, separated by the real service categories."
      }
    ],
    "faqs": [
      {
        "q": "What makes SEO for dermatologists different?",
        "a": "A medical consultation and an elective cosmetic inquiry can require different information and appointment routes. Clinical claims, eligibility, and images need practice approval; do not collect health details for marketing analysis."
      },
      {
        "q": "What does the initial review produce?",
        "a": "A prioritized list of observed problems, recommended changes, required access, and a scope for implementation. Ranking and lead-volume outcomes are not guaranteed."
      }
    ],
    "keywords": [
      {
        "question": "How is the work scoped and priced?",
        "answer": "The proposal defines the pages, profiles, measurement, implementation responsibilities, and fees. It follows a review of the actual website and business rather than a universal monthly price."
      }
    ],
    "focusKeywords": [
      "seo for dermatologists"
    ],
    "relatedCities": [
      "san-francisco"
    ],
    "relatedInsight": "local-businesses-ai-search",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "example": "Clarify the actual practice services, clinician credentials, and booking process using approved factual material.",
    "measurement": "Qualified appointment requests and bookings, separated by the real service categories.",
    "limitations": "Clinical claims, eligibility, and images need practice approval; do not collect health details for marketing analysis."
  },
  {
    "slug": "seo-for-fence-contractors",
    "industry": "Fence Contractors",
    "singular": "Fencing Business",
    "schemaType": "HomeAndConstructionBusiness",
    "eyebrow": "Local SEO consulting",
    "headline": "SEO for Fence Contractors",
    "intro": "I help fence contractors connect material research, installation questions, and repair searches to the right estimate process. The work starts with the fencing services you actually offer, your project evidence, and the areas your team can serve.",
    "deliverables": [
      "Material, installation, and repair page map",
      "Project-led content and implementation briefs",
      "Qualified estimates and accepted-job tracking"
    ],
    "strategies": [
      {
        "title": "Plan around the buying decision",
        "body": "Separate material explanations from installation and repair quote routes. Show genuine project photographs, actual coverage, and the site-visit/estimate process."
      },
      {
        "title": "Measure relevant inquiries",
        "body": "Qualified estimate requests, booked site visits, and accepted installation or repair jobs."
      }
    ],
    "faqs": [
      {
        "q": "Do fence company SEO and fence contractor SEO need separate pages?",
        "a": "Usually they describe the same service buyer and belong on one useful page. Separate pages are justified by different customer tasks, such as comparing materials, requesting a repair, or planning a commercial project—not a swap between company and contractor."
      },
      {
        "q": "Should every fence material have its own page?",
        "a": "Only when the contractor offers it and can give a useful, distinct explanation supported by accurate service details and project evidence. A short material mention can remain on the main fencing page. Thin pages that repeat the same text do not help a homeowner choose."
      },
      {
        "q": "What project evidence should a fencing page include?",
        "a": "Genuine photographs with accurate descriptions, the material and work completed, relevant site considerations supplied by the contractor, and the actual estimate process. I identify missing evidence in the brief; your team confirms what can be published."
      },
      {
        "q": "Can you improve the quality of fence estimate requests?",
        "a": "The review checks whether installation, repair, material, project type, and operating-area information are clear before a visitor contacts you. We agree a qualification definition and review unique projects, booked site visits, and accepted estimates where records are available. Results depend on demand, competition, the offer, and implementation."
      }
    ],
    "keywords": [
      {
        "question": "How is the work scoped and priced?",
        "answer": "The proposal defines the pages, profiles, measurement, implementation responsibilities, and fees. It follows a review of the actual website and business rather than a universal monthly price."
      }
    ],
    "focusKeywords": [
      "seo for fence contractors"
    ],
    "relatedCities": [
      "houston"
    ],
    "relatedInsight": "local-entity-seo-ai-search",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "example": "Separate material explanations from installation and repair quote routes. Show genuine project photographs, actual coverage, and the site-visit/estimate process.",
    "measurement": "Qualified estimate requests, booked site visits, and accepted installation or repair jobs.",
    "limitations": "Do not invent material prices, permit rules, local projects, or fencing outcomes from a mixed-industry portfolio.",
    "metaTitle": "Fence Contractor SEO: Local Search & Estimate Requests",
    "metaDescription": "SEO for fence contractors covering material and service pages, genuine project evidence, repair inquiries, and qualified estimate tracking. See sample deliverables."
  }
];
export function getNicheBySlug(slug: string) { return LOCAL_NICHES.find(n => n.slug === slug); }
