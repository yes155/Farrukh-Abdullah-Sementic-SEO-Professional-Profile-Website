export interface LocalFact { label: string; detail: string }
export interface City {
 slug: string; name: string; state: string; stateName: string; region: string; latitude: string; longitude: string;
 blurb: string; neighborhoods: string[]; zipCodes: string[]; landmarks: string[]; streets: string[]; directories: string[];
 localFacts: LocalFact[]; industries: string[]; relatedCities: string[]; relatedNiches: string[]; relatedInsight: string;
 relatedCaseStudyPath: string; relatedCaseStudyName: string; planningExample: string;
}
export const CITIES: City[] = [
  {
    "slug": "austin",
    "name": "Austin",
    "state": "TX",
    "stateName": "Texas",
    "region": "Central Texas",
    "latitude": "",
    "longitude": "",
    "blurb": "Remote SEO consulting for Austin businesses: review the actual customer journey, service coverage, public information, and inquiry measurement before agreeing implementation.",
    "neighborhoods": [
      "Zilker",
      "Barton Hills",
      "South Congress"
    ],
    "zipCodes": [],
    "landmarks": [],
    "streets": [],
    "directories": [],
    "localFacts": [
      {
        "label": "Planning example",
        "detail": "For a retailer or local service provider, distinguish the actual customer visit or delivery area from a broad Austin metro label. A project or customer example should reflect where the business really operates."
      }
    ],
    "industries": [],
    "relatedCities": [],
    "relatedNiches": [
      "seo-for-dentists",
      "seo-for-landscapers",
      "seo-for-roofers"
    ],
    "relatedInsight": "us-cities-local-seo-opportunity",
    "relatedCaseStudyPath": "/case-studies/armadillo-coffee-roasters",
    "relatedCaseStudyName": "Armadillo Coffee Roasters",
    "planningExample": "For a retailer or local service provider, distinguish the actual customer visit or delivery area from a broad Austin metro label. A project or customer example should reflect where the business really operates."
  },
  {
    "slug": "chicago",
    "name": "Chicago",
    "state": "IL",
    "stateName": "Illinois",
    "region": "Chicago area",
    "latitude": "",
    "longitude": "",
    "blurb": "Remote SEO consulting for Chicago businesses: review the actual customer journey, service coverage, public information, and inquiry measurement before agreeing implementation.",
    "neighborhoods": [
      "The Loop",
      "Lincoln Park",
      "River North"
    ],
    "zipCodes": [],
    "landmarks": [],
    "streets": [],
    "directories": [],
    "localFacts": [
      {
        "label": "Planning example",
        "detail": "Define whether a business serves Chicago itself or a particular suburb. The law-firm example on this site is described as Homewood/Chicago-area work; it is not a downtown office claim."
      }
    ],
    "industries": [],
    "relatedCities": [],
    "relatedNiches": [
      "seo-for-plumbers",
      "seo-for-electricians",
      "seo-for-contractors"
    ],
    "relatedInsight": "us-cities-local-seo-opportunity",
    "relatedCaseStudyPath": "/case-studies/reese-law-centre",
    "relatedCaseStudyName": "The Reese Law Center",
    "planningExample": "Define whether a business serves Chicago itself or a particular suburb. The law-firm example on this site is described as Homewood/Chicago-area work; it is not a downtown office claim."
  },
  {
    "slug": "denver",
    "name": "Denver",
    "state": "CO",
    "stateName": "Colorado",
    "region": "Denver area",
    "latitude": "",
    "longitude": "",
    "blurb": "Remote SEO consulting for Denver businesses: review the actual customer journey, service coverage, public information, and inquiry measurement before agreeing implementation.",
    "neighborhoods": [
      "Capitol Hill",
      "Cherry Creek",
      "Highlands"
    ],
    "zipCodes": [],
    "landmarks": [],
    "streets": [],
    "directories": [],
    "localFacts": [
      {
        "label": "Planning example",
        "detail": "Separate local-service acquisition from an ecommerce business that happens to be based in Denver. The Swag Pro example concerns merchandise/product-page work, not a universal local-map playbook."
      }
    ],
    "industries": [],
    "relatedCities": [],
    "relatedNiches": [
      "seo-for-roofers",
      "seo-for-hvac",
      "seo-for-contractors"
    ],
    "relatedInsight": "us-cities-local-seo-opportunity",
    "relatedCaseStudyPath": "/case-studies/swag-pro",
    "relatedCaseStudyName": "Swag Pro",
    "planningExample": "Separate local-service acquisition from an ecommerce business that happens to be based in Denver. The Swag Pro example concerns merchandise/product-page work, not a universal local-map playbook."
  },
  {
    "slug": "houston",
    "name": "Houston",
    "state": "TX",
    "stateName": "Texas",
    "region": "Houston area",
    "latitude": "",
    "longitude": "",
    "blurb": "Remote SEO consulting for Houston businesses: review the actual customer journey, service coverage, public information, and inquiry measurement before agreeing implementation.",
    "neighborhoods": [
      "The Heights",
      "Montrose",
      "Midtown"
    ],
    "zipCodes": [],
    "landmarks": [],
    "streets": [],
    "directories": [],
    "localFacts": [
      {
        "label": "Planning example",
        "detail": "Confirm which parts of the Houston area a client can serve, which jobs it accepts, and how inquiries are routed. A general city page must not imply a local consultant office or a Houston-specific campaign result."
      }
    ],
    "industries": [],
    "relatedCities": [],
    "relatedNiches": [
      "seo-for-fence-contractors",
      "seo-for-hvac",
      "seo-for-contractors",
      "seo-for-plumbers"
    ],
    "relatedInsight": "us-cities-local-seo-opportunity",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "planningExample": "Confirm which parts of the Houston area a client can serve, which jobs it accepts, and how inquiries are routed. A general city page must not imply a local consultant office or a Houston-specific campaign result."
  },
  {
    "slug": "dallas",
    "name": "Dallas",
    "state": "TX",
    "stateName": "Texas",
    "region": "Dallas–Fort Worth area",
    "latitude": "",
    "longitude": "",
    "blurb": "Remote SEO consulting for Dallas businesses: review the actual customer journey, service coverage, public information, and inquiry measurement before agreeing implementation.",
    "neighborhoods": [
      "Uptown",
      "Oak Lawn",
      "Deep Ellum"
    ],
    "zipCodes": [],
    "landmarks": [],
    "streets": [],
    "directories": [],
    "localFacts": [
      {
        "label": "Planning example",
        "detail": "Specify whether the actual service area is Dallas, a surrounding municipality, or a wider DFW footprint. Plan pages only when the business has distinct operational information for that coverage."
      }
    ],
    "industries": [],
    "relatedCities": [],
    "relatedNiches": [
      "seo-for-real-estate-agents",
      "seo-for-contractors",
      "seo-for-electricians"
    ],
    "relatedInsight": "us-cities-local-seo-opportunity",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "planningExample": "Specify whether the actual service area is Dallas, a surrounding municipality, or a wider DFW footprint. Plan pages only when the business has distinct operational information for that coverage."
  },
  {
    "slug": "phoenix",
    "name": "Phoenix",
    "state": "AZ",
    "stateName": "Arizona",
    "region": "Phoenix area",
    "latitude": "",
    "longitude": "",
    "blurb": "Remote SEO consulting for Phoenix businesses: review the actual customer journey, service coverage, public information, and inquiry measurement before agreeing implementation.",
    "neighborhoods": [
      "Downtown Phoenix",
      "Arcadia",
      "Encanto"
    ],
    "zipCodes": [],
    "landmarks": [],
    "streets": [],
    "directories": [],
    "localFacts": [
      {
        "label": "Planning example",
        "detail": "Check actual service capacity and job types before assuming that HVAC or pest-control demand follows a particular pattern. Validate market and seasonal assumptions using the client’s inquiry and operating data."
      }
    ],
    "industries": [],
    "relatedCities": [],
    "relatedNiches": [
      "seo-for-pest-control",
      "seo-for-hvac",
      "seo-for-landscapers"
    ],
    "relatedInsight": "us-cities-local-seo-opportunity",
    "relatedCaseStudyPath": "/case-studies/local-seo-systems",
    "relatedCaseStudyName": "General local lead-generation portfolio",
    "planningExample": "Check actual service capacity and job types before assuming that HVAC or pest-control demand follows a particular pattern. Validate market and seasonal assumptions using the client’s inquiry and operating data."
  },
  {
    "slug": "miami",
    "name": "Miami",
    "state": "FL",
    "stateName": "Florida",
    "region": "Miami area",
    "latitude": "",
    "longitude": "",
    "blurb": "Remote SEO consulting for Miami businesses: review the actual customer journey, service coverage, public information, and inquiry measurement before agreeing implementation.",
    "neighborhoods": [
      "Downtown Miami",
      "Brickell",
      "Wynwood"
    ],
    "zipCodes": [],
    "landmarks": [],
    "streets": [],
    "directories": [],
    "localFacts": [
      {
        "label": "Planning example",
        "detail": "Keep Miami and Miami Beach locations precise. The hotel example is described as Miami Beach work. Choose languages and service information from actual customers and staffing, not a blanket bilingual ranking claim."
      }
    ],
    "industries": [],
    "relatedCities": [],
    "relatedNiches": [
      "seo-for-orthodontists",
      "seo-for-salons",
      "seo-for-dentists"
    ],
    "relatedInsight": "us-cities-local-seo-opportunity",
    "relatedCaseStudyPath": "/case-studies/hotel-circa-39",
    "relatedCaseStudyName": "Hotel Circa 39",
    "planningExample": "Keep Miami and Miami Beach locations precise. The hotel example is described as Miami Beach work. Choose languages and service information from actual customers and staffing, not a blanket bilingual ranking claim."
  },
  {
    "slug": "seattle",
    "name": "Seattle",
    "state": "WA",
    "stateName": "Washington",
    "region": "Seattle area",
    "latitude": "",
    "longitude": "",
    "blurb": "Remote SEO consulting for Seattle businesses: review the actual customer journey, service coverage, public information, and inquiry measurement before agreeing implementation.",
    "neighborhoods": [
      "Beacon Hill",
      "Capitol Hill",
      "Ballard"
    ],
    "zipCodes": [],
    "landmarks": [],
    "streets": [],
    "directories": [],
    "localFacts": [
      {
        "label": "Planning example",
        "detail": "Define the neighborhood or actual travel area relevant to a single-site business. The studio example describes South Seattle work; it does not establish conditions or results across the whole metro."
      }
    ],
    "industries": [],
    "relatedCities": [],
    "relatedNiches": [
      "seo-for-therapists",
      "seo-for-electricians",
      "seo-for-contractors"
    ],
    "relatedInsight": "us-cities-local-seo-opportunity",
    "relatedCaseStudyPath": "/case-studies/south-seattle-womens-fitness",
    "relatedCaseStudyName": "South Seattle Women’s Fitness",
    "planningExample": "Define the neighborhood or actual travel area relevant to a single-site business. The studio example describes South Seattle work; it does not establish conditions or results across the whole metro."
  },
  {
    "slug": "san-francisco",
    "name": "San Francisco",
    "state": "CA",
    "stateName": "California",
    "region": "San Francisco Bay Area",
    "latitude": "",
    "longitude": "",
    "blurb": "Remote SEO consulting for San Francisco businesses: review the actual customer journey, service coverage, public information, and inquiry measurement before agreeing implementation.",
    "neighborhoods": [
      "SoMa",
      "Mission District",
      "Financial District"
    ],
    "zipCodes": [],
    "landmarks": [],
    "streets": [],
    "directories": [],
    "localFacts": [
      {
        "label": "Planning example",
        "detail": "Distinguish a local operating footprint from a technology business serving broader customers. Record whether the objective is qualified local inquiries, national discovery, or platform visibility before choosing pages and metrics."
      }
    ],
    "industries": [],
    "relatedCities": [],
    "relatedNiches": [
      "seo-for-dermatologists",
      "seo-for-real-estate-agents",
      "seo-for-dentists"
    ],
    "relatedInsight": "us-cities-local-seo-opportunity",
    "relatedCaseStudyPath": "/case-studies/azuno",
    "relatedCaseStudyName": "Azuno",
    "planningExample": "Distinguish a local operating footprint from a technology business serving broader customers. Record whether the objective is qualified local inquiries, national discovery, or platform visibility before choosing pages and metrics."
  }
];
export function getCityBySlug(slug: string) { return CITIES.find(c=>c.slug===slug); }
