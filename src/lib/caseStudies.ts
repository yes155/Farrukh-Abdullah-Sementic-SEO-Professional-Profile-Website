export interface NicheCaseStudyMetric {
  value: string;
  label: string;
}

export interface NicheCaseStudy {
  slug: string;
  nicheSlug: string;
  eyebrow: string;
  headline: string;
  clientName?: string;
  ownerName?: string;
  city: string;
  state: string;
  zipCode: string;
  neighborhoods: string[];
  challenge: string;
  strategy: string;
  execution: string[];
  results: string[];
  technologies: string[];
  metrics: NicheCaseStudyMetric[];
  published: boolean;
}

/**
 * Registry for niche-specific local SEO case studies.
 *
 * Each entry carries real market data (verified city, ZIP, neighborhoods,
 * directories) so the page is structurally ready for real client details.
 * `clientName`, `ownerName`, `challenge`, `strategy`, `execution`, `results`
 * and `metrics` are populated from verified client data before `published`
 * is flipped to true. Entries with `published: false` are never built.
 */
export const NICHE_CASE_STUDIES: NicheCaseStudy[] = [
  {
    slug: "local-seo-dentists",
    nicheSlug: "seo-for-dentists",
    eyebrow: "LOCAL SEO FOR DENTAL PRACTICES",
    headline: "Dental Practice Local SEO Case Study",
    city: "Austin",
    state: "TX",
    zipCode: "78704",
    neighborhoods: ["Zilker", "Barton Hills", "Travis Heights", "Bouldin Creek", "South Congress"],
    challenge: "",
    strategy: "",
    execution: [],
    results: [],
    technologies: ["Google Business Profile", "Dentist Schema", "Service-Area Pages", "Call Tracking"],
    metrics: [],
    published: false
  },
  {
    slug: "local-seo-plumbers",
    nicheSlug: "seo-for-plumbers",
    eyebrow: "LOCAL SEO FOR PLUMBING BUSINESSES",
    headline: "Plumbing Local SEO Case Study",
    city: "Chicago",
    state: "IL",
    zipCode: "60601",
    neighborhoods: ["The Loop", "Lincoln Park", "Wicker Park", "Old Town", "River North"],
    challenge: "",
    strategy: "",
    execution: [],
    results: [],
    technologies: ["Google Business Profile", "Plumber Schema", "Emergency Service Pages", "Call Tracking"],
    metrics: [],
    published: false
  },
  {
    slug: "local-seo-roofers",
    nicheSlug: "seo-for-roofers",
    eyebrow: "LOCAL SEO FOR ROOFING CONTRACTORS",
    headline: "Roofing Contractor Local SEO Case Study",
    city: "Denver",
    state: "CO",
    zipCode: "80202",
    neighborhoods: ["LoDo", "Capitol Hill", "Five Points", "Cherry Creek", "Highlands"],
    challenge: "",
    strategy: "",
    execution: [],
    results: [],
    technologies: ["Google Business Profile", "RoofingContractor Schema", "Storm Response Pages", "Call Tracking"],
    metrics: [],
    published: false
  },
  {
    slug: "local-seo-pest-control",
    nicheSlug: "seo-for-pest-control",
    eyebrow: "LOCAL SEO FOR PEST CONTROL COMPANIES",
    headline: "Pest Control Local SEO Case Study",
    city: "Phoenix",
    state: "AZ",
    zipCode: "85004",
    neighborhoods: ["Downtown Phoenix", "Arcadia", "Biltmore", "Encanto", "Roosevelt Row"],
    challenge: "",
    strategy: "",
    execution: [],
    results: [],
    technologies: ["Google Business Profile", "LocalBusiness Schema", "Pest-Specific Pages", "Seasonal Content"],
    metrics: [],
    published: false
  },
  {
    slug: "local-seo-hvac",
    nicheSlug: "seo-for-hvac",
    eyebrow: "LOCAL SEO FOR HVAC COMPANIES",
    headline: "HVAC Local SEO Case Study",
    city: "Houston",
    state: "TX",
    zipCode: "77007",
    neighborhoods: ["The Heights", "Rice Military", "Memorial Park", "Washington Avenue"],
    challenge: "",
    strategy: "",
    execution: [],
    results: [],
    technologies: ["Google Business Profile", "HVACBusiness Schema", "Seasonal Service Pages", "Call Tracking"],
    metrics: [],
    published: false
  },
  {
    slug: "local-seo-salons",
    nicheSlug: "seo-for-salons",
    eyebrow: "LOCAL SEO FOR HAIR & BEAUTY SALONS",
    headline: "Salon Local SEO Case Study",
    city: "Miami",
    state: "FL",
    zipCode: "33133",
    neighborhoods: ["Coconut Grove", "Brickell", "Wynwood", "Design District", "Little Havana"],
    challenge: "",
    strategy: "",
    execution: [],
    results: [],
    technologies: ["Google Business Profile", "BeautySalon Schema", "Service-Led Pages", "Booking Tracking"],
    metrics: [],
    published: false
  }
];

export function getNicheCaseStudyBySlug(slug: string): NicheCaseStudy | undefined {
  return NICHE_CASE_STUDIES.find((c) => c.slug === slug);
}

export function getPublishedNicheCaseStudies(): NicheCaseStudy[] {
  return NICHE_CASE_STUDIES.filter((c) => c.published);
}
