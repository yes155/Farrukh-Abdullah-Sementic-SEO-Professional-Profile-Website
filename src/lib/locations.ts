export interface City {
  slug: string;
  name: string;
  state: string;
  stateName: string;
  region: string;
  latitude: string;
  longitude: string;
  blurb: string;
  neighborhoods: string[];
  industries: string[];
}

export const CITIES: City[] = [
  {
    slug: "austin",
    name: "Austin",
    state: "TX",
    stateName: "Texas",
    region: "Central Texas",
    latitude: "30.2672",
    longitude: "-97.7431",
    blurb:
      "Austin is a booming market where local service businesses compete against both established firms and a wave of fast-growing newcomers. I help Austin-area businesses win the map pack for high-intent local searches — from dental care and pest control to roofing after storm season.",
    neighborhoods: ["Downtown Austin", "Round Rock", "Georgetown"],
    industries: ["Dentists", "Pest Control", "Roofers"]
  },
  {
    slug: "chicago",
    name: "Chicago",
    state: "IL",
    stateName: "Illinois",
    region: "Cook County",
    latitude: "41.8781",
    longitude: "-87.6298",
    blurb:
      "Chicago's dense, neighborhood-based search landscape means generic city-wide pages don't cut it. I build local SEO systems for Chicago businesses that rank at the neighborhood level, where local customers actually search and choose.",
    neighborhoods: ["Lincoln Park", "Wicker Park", "The Loop"],
    industries: ["Plumbers", "Salons", "Dentists"]
  },
  {
    slug: "denver",
    name: "Denver",
    state: "CO",
    stateName: "Colorado",
    region: "Front Range",
    latitude: "39.7392",
    longitude: "-104.9903",
    blurb:
      "Denver and the Front Range have seen explosive growth and equally explosive competition. I help local service providers in the metro establish clear, verified local entities so search engines and AI assistants recommend them over the crowd.",
    neighborhoods: ["Downtown Denver", "Lakewood", "Aurora"],
    industries: ["Roofers", "Pest Control", "Plumbers"]
  },
  {
    slug: "houston",
    name: "Houston",
    state: "TX",
    stateName: "Texas",
    region: "Greater Houston",
    latitude: "29.7604",
    longitude: "-95.3698",
    blurb:
      "Houston's sprawling, multi-county footprint makes service-area precision essential. I build local search systems for Houston businesses that cover the neighborhoods and satellite cities they actually serve — without diluting their local relevance.",
    neighborhoods: ["The Heights", "Sugar Land", "Katy"],
    industries: ["Plumbers", "Pest Control", "Roofers"]
  },
  {
    slug: "dallas",
    name: "Dallas",
    state: "TX",
    stateName: "Texas",
    region: "Dallas–Fort Worth",
    latitude: "32.7767",
    longitude: "-96.7970",
    blurb:
      "DFW is one of the most competitive local search markets in the country. I help Dallas businesses dominate map pack results with hyper-local landing pages, consistent citation networks, and entity-grade Google Business Profiles.",
    neighborhoods: ["Uptown", "Plano", "Irving"],
    industries: ["Dentists", "Roofers", "Plumbers"]
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    state: "AZ",
    stateName: "Arizona",
    region: "Phoenix Metro",
    latitude: "33.4484",
    longitude: "-112.0740",
    blurb:
      "Phoenix's year-round pest and home-service demand is enormous, and the map pack is crowded. I build local SEO systems for Phoenix businesses that win recurring and seasonal searches with precise service-area entity structure.",
    neighborhoods: ["Scottsdale", "Tempe", "Glendale"],
    industries: ["Pest Control", "Roofers", "Salons"]
  },
  {
    slug: "miami",
    name: "Miami",
    state: "FL",
    stateName: "Florida",
    region: "Miami–Fort Lauderdale",
    latitude: "25.7617",
    longitude: "-80.1918",
    blurb:
      "Miami is a fast-moving, competitive market where local customers research hard before they book. I help Miami businesses rank for the services and neighborhoods that drive real revenue, backed by geo-targeted content and strong local schema.",
    neighborhoods: ["Brickell", "Coral Gables", "Doral"],
    industries: ["Salons", "Dentists", "Pest Control"]
  },
  {
    slug: "seattle",
    name: "Seattle",
    state: "WA",
    stateName: "Washington",
    region: "Puget Sound",
    latitude: "47.6062",
    longitude: "-122.3321",
    blurb:
      "Seattle's steep terrain and distinctive neighborhoods create fragmented local search behavior. I build local visibility systems for Seattle businesses that rank at the neighborhood level and stay visible through the rainy-season service surge.",
    neighborhoods: ["Capitol Hill", "Ballard", "Bellevue"],
    industries: ["Plumbers", "Roofers", "Dentists"]
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    state: "CA",
    stateName: "California",
    region: "Bay Area",
    latitude: "37.7749",
    longitude: "-122.4194",
    blurb:
      "San Francisco businesses compete in one of the most sophisticated local markets in the world. I help SF service businesses rank for local intent while staying visible to the AI-driven search tools this market adopts first.",
    neighborhoods: ["SoMa", "Marina District", "Mission District"],
    industries: ["Dentists", "Plumbers", "Salons"]
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
