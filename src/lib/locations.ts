export interface LocalFact {
  label: string;
  detail: string;
}

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
  zipCodes: string[];
  landmarks: string[];
  streets: string[];
  directories: string[];
  localFacts: LocalFact[];
  industries: string[];
  relatedCities: string[];
  relatedNiches: string[];
  relatedInsight: string;
  relatedCaseStudyPath: string;
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
    neighborhoods: ["Zilker", "Barton Hills", "Travis Heights", "Bouldin Creek", "South Congress"],
    zipCodes: ["78704", "78703", "78730"],
    landmarks: ["Lady Bird Lake", "Barton Springs Pool", "South Congress Avenue", "Zilker Park"],
    streets: ["South Congress Avenue (SoCo)", "South Lamar Boulevard", "West 6th Street"],
    directories: ["Austin Chronicle", "Austin Business Journal", "Yelp Austin"],
    localFacts: [
      {
        label: "Zilker cluster",
        detail: "78704 — the Zilker, Barton Hills, Travis Heights and Bouldin Creek pocket south of Lady Bird Lake is where Austin's densest service-area searches originate."
      },
      {
        label: "SoCo corridor",
        detail: "South Congress Avenue anchors the city's most search-dense retail corridor, with thousands of map queries around Zilker Park and Barton Springs Pool every season."
      },
      {
        label: "Storm-season roof demand",
        detail: "Central Texas hail events concentrate roof-repair searches into specific ZIP clusters overnight — a pattern I map into service-area landing pages before storms hit."
      }
    ],
    industries: ["Dentists", "Pest Control", "Roofers"],
    relatedCities: ["houston", "dallas", "denver"],
    relatedNiches: ["seo-for-dentists", "seo-for-pest-control", "seo-for-roofers"],
    relatedInsight: "us-cities-local-seo-opportunity",
    relatedCaseStudyPath: "/case-studies/local-seo-systems"
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
    neighborhoods: ["The Loop", "Lincoln Park", "Wicker Park", "Old Town", "River North"],
    zipCodes: ["60601", "60611", "60614"],
    landmarks: ["333 N Michigan", "Chicago Theatre", "Millennium Park", "Historic Michigan Boulevard District"],
    streets: ["Michigan Avenue", "State Street", "Wacker Drive"],
    directories: ["Chicago Tribune", "Chicago Reader", "Yelp Chicago"],
    localFacts: [
      {
        label: "The Loop (60601)",
        detail: "Chicago's 60601 covers the Loop — 333 N Michigan, the Chicago Theatre, Millennium Park and the Historic Michigan Boulevard District draw constant local and tourist map queries."
      },
      {
        label: "Neighborhood-by-neighborhood search",
        detail: "Lincoln Park, Old Town, Wicker Park and River North each behave like a separate market; I build per-neighborhood entities instead of one city-wide page."
      },
      {
        label: "High-density service demand",
        detail: "Cook County's condominium and townhome stock keeps HVAC, plumbing and electrical searches concentrated and recurring year-round."
      }
    ],
    industries: ["Plumbers", "Salons", "Dentists"],
    relatedCities: ["denver", "seattle", "san-francisco"],
    relatedNiches: ["seo-for-plumbers", "seo-for-salons", "seo-for-dentists", "seo-for-hvac"],
    relatedInsight: "local-businesses-ai-search",
    relatedCaseStudyPath: "/case-studies/local-seo-systems"
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
    neighborhoods: ["LoDo", "Capitol Hill", "Five Points", "Cherry Creek", "Highlands"],
    zipCodes: ["80202", "80206", "80209"],
    landmarks: ["16th Street Mall", "Union Station", "Denver Art Museum", "Larimer Square"],
    streets: ["16th Street", "Colfax Avenue", "Larimer Street"],
    directories: ["Westword", "Denver Business Journal", "Yelp Denver"],
    localFacts: [
      {
        label: "16th Street Mall",
        detail: "Denver's 16th Street Mall reopened in October 2025 after reconstruction, re-concentrating foot traffic and local map queries along the Union Station corridor."
      },
      {
        label: "78 official neighborhoods",
        detail: "The City of Denver recognizes 78 neighborhoods; LoDo, Capitol Hill, Five Points, Cherry Creek and the Highlands each resolve to distinct local search intent."
      },
      {
        label: "Front Range growth",
        detail: "Rapid metro growth keeps service providers in roofing, pest control and plumbing competing against a fast-growing review base in the map pack."
      }
    ],
    industries: ["Roofers", "Pest Control", "Plumbers"],
    relatedCities: ["austin", "chicago", "seattle"],
    relatedNiches: ["seo-for-roofers", "seo-for-pest-control", "seo-for-plumbers", "seo-for-landscapers"],
    relatedInsight: "ins-04",
    relatedCaseStudyPath: "/case-studies/local-seo-systems"
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
    neighborhoods: ["The Heights", "Rice Military", "Memorial Park", "Katy", "Sugar Land"],
    zipCodes: ["77007", "77008", "77019"],
    landmarks: ["Memorial Park", "Buffalo Bayou", "White Oak Bayou", "Washington Avenue corridor"],
    streets: ["Washington Avenue", "19th Street", "Westheimer Road"],
    directories: ["Houston Chronicle", "Houston Press", "Yelp Houston"],
    localFacts: [
      {
        label: "Heights / Rice Military (77007)",
        detail: "77007 covers The Heights and Rice Military — restored bungalows and new townhomes keep plumbers, roofers and HVAC companies in near-constant service-area demand around Memorial Park and Buffalo Bayou."
      },
      {
        label: "Washington Avenue corridor",
        detail: "The Washington Avenue entertainment corridor draws heavy evening and weekend map traffic, making service businesses that cover it stand out in local results."
      },
      {
        label: "Multi-county footprint",
        detail: "Greater Houston spans several counties; service-area pages must map each satellite city separately or local relevance dilutes across the region."
      }
    ],
    industries: ["Plumbers", "Pest Control", "Roofers"],
    relatedCities: ["austin", "dallas", "phoenix"],
    relatedNiches: ["seo-for-plumbers", "seo-for-pest-control", "seo-for-roofers", "seo-for-hvac"],
    relatedInsight: "us-cities-local-seo-opportunity",
    relatedCaseStudyPath: "/case-studies/local-seo-systems"
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
    neighborhoods: ["Deep Ellum", "Uptown", "Katy Trail", "Bishop Arts", "Plano"],
    zipCodes: ["75204", "75206", "75219"],
    landmarks: ["Katy Trail", "Klyde Warren Park", "American Airlines Center", "Deep Ellum"],
    streets: ["McKinney Avenue", "Elm Street", "Henderson Avenue"],
    directories: ["Dallas Morning News", "D Magazine", "Yelp Dallas"],
    localFacts: [
      {
        label: "Deep Ellum / Uptown (75204)",
        detail: "75204 spans Deep Ellum, Uptown and the Katy Trail — a mixed residential and entertainment pocket where home services and retail both generate high-intent local queries."
      },
      {
        label: "Klyde Warren Park traffic",
        detail: "Klyde Warren Park and the American Airlines Center drive dense, recurring foot traffic that rewards businesses with complete, photo-rich Google Business Profiles."
      },
      {
        label: "DFW review pressure",
        detail: "DFW competitors hold among the highest review counts in the Sun Belt; winning the pack requires review velocity and citation consistency, not just pages."
      }
    ],
    industries: ["Dentists", "Roofers", "Plumbers"],
    relatedCities: ["houston", "austin", "phoenix"],
    relatedNiches: ["seo-for-dentists", "seo-for-roofers", "seo-for-plumbers", "seo-for-real-estate-agents"],
    relatedInsight: "local-businesses-ai-search",
    relatedCaseStudyPath: "/case-studies/local-seo-systems"
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
    neighborhoods: ["Downtown Phoenix", "Arcadia", "Biltmore", "Scottsdale", "Tempe"],
    zipCodes: ["85004", "85003", "85007", "85018"],
    landmarks: ["Chase Field", "Footprint Center", "Roosevelt Row", "Camelback Mountain", "ASU Downtown"],
    streets: ["Central Avenue", "Washington Street", "Van Buren Street", "Camelback Road"],
    directories: ["Arizona Republic", "Phoenix New Times", "AZ Charged"],
    localFacts: [
      {
        label: "Downtown core (85004)",
        detail: "85004 holds the Downtown Phoenix core — Roosevelt Row, ASU Downtown, Chase Field and Footprint Center — the Valley's only walkable, transit-served local search district."
      },
      {
        label: "Historic districts (85003)",
        detail: "85003 covers Willo, F.Q. Story and Encanto-Palmcroft, where older housing stock generates steady plumbing, HVAC and electrical service-area demand."
      },
      {
        label: "Year-round pest season",
        detail: "Phoenix's climate means pest-control demand never goes dormant, and the metro's hot-zip growth keeps new neighborhoods coming online for service businesses."
      }
    ],
    industries: ["Pest Control", "Roofers", "Salons"],
    relatedCities: ["dallas", "houston", "miami"],
    relatedNiches: ["seo-for-pest-control", "seo-for-roofers", "seo-for-salons", "seo-for-hvac"],
    relatedInsight: "ins-04",
    relatedCaseStudyPath: "/case-studies/local-seo-systems"
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
    neighborhoods: ["Brickell", "Coconut Grove", "Wynwood", "Design District", "Little Havana"],
    zipCodes: ["33131", "33132", "33133", "33127"],
    landmarks: ["Brickell City Centre", "Wynwood Walls", "Vizcaya Museum", "CocoWalk"],
    streets: ["Brickell Avenue", "Biscayne Boulevard", "Calle Ocho (SW 8th Street)", "Mary Street"],
    directories: ["Miami Herald", "New Times Miami", "Coconut Grove BID"],
    localFacts: [
      {
        label: "Brickell financial district (33131)",
        detail: "Brickell — zip 33131, the financial core — is one of the densest neighborhoods in the US, with high-rise residents generating constant home-service and salon searches."
      },
      {
        label: "Coconut Grove (33133)",
        detail: "33133 is the Grove, Miami's oldest continuously inhabited neighborhood, anchored by CocoWalk and Vizcaya Museum with heavy pedestrian map traffic."
      },
      {
        label: "Wynwood / Design District",
        detail: "Wynwood (33127) and the Design District resolve to distinct retail and hospitality entities, each needing its own local landing page to rank separately."
      }
    ],
    industries: ["Salons", "Dentists", "Pest Control"],
    relatedCities: ["phoenix", "seattle", "chicago"],
    relatedNiches: ["seo-for-salons", "seo-for-dentists", "seo-for-pest-control", "seo-for-real-estate-agents"],
    relatedInsight: "local-businesses-ai-search",
    relatedCaseStudyPath: "/case-studies/local-seo-systems"
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
    neighborhoods: ["Ballard", "Capitol Hill", "Pike/Pine Corridor", "Belltown", "Bellevue"],
    zipCodes: ["98107", "98117", "98122"],
    landmarks: ["Pike Place Market", "Ballard Locks", "Space Needle", "Pike/Pine Corridor"],
    streets: ["Market Street", "Pike Street", "Pine Street", "15th Avenue E"],
    directories: ["Seattle Times", "Pike/Pine Social", "Ballard Alliance"],
    localFacts: [
      {
        label: "Ballard (98107 / 98117)",
        detail: "Ballard's two ZIPs split cleanly — 98107 covers Market Street, Old Town Ballard and Salmon Bay; 98117 covers Loyal Heights and Whittier Heights — each with its own local business district."
      },
      {
        label: "Pike/Pine corridor",
        detail: "Capitol Hill's Pike/Pine corridor hosts 200+ creative businesses and arts venues, tracked by the Pike/Pine Social directory — a dense, competitive local entity cluster."
      },
      {
        label: "Rainy-season surge",
        detail: "Pacific Northwest weather drives seasonal plumbing and roof-repair searches; service businesses need warm service-area pages before each wet-season spike."
      }
    ],
    industries: ["Plumbers", "Roofers", "Dentists"],
    relatedCities: ["chicago", "denver", "san-francisco"],
    relatedNiches: ["seo-for-plumbers", "seo-for-roofers", "seo-for-dentists", "seo-for-contractors"],
    relatedInsight: "us-cities-local-seo-opportunity",
    relatedCaseStudyPath: "/case-studies/local-seo-systems"
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
    neighborhoods: ["SoMa", "Mission District", "Marina District", "Potrero Hill", "Nob Hill"],
    zipCodes: ["94103", "94107", "94110"],
    landmarks: ["Oracle Park", "Salesforce Tower", "Moscone Center", "Mission District murals"],
    streets: ["Market Street", "Mission Street", "Folsom Street"],
    directories: ["SF Chronicle", "Yelp SF", "Nextdoor SF"],
    localFacts: [
      {
        label: "SoMa (94103 / 94107)",
        detail: "SoMa spans 94103 and 94107 — Oracle Park, Salesforce Tower and Moscone Center anchor one of the Bay Area's most search-dense service-area clusters."
      },
      {
        label: "Neighborhood resolution",
        detail: "SF splits into sharply distinct neighborhoods (Mission, Marina, Potrero Hill, Nob Hill); each resolves to a separate local entity and needs its own landing page."
      },
      {
        label: "AI-first adopters",
        detail: "SF residents are among the earliest adopters of AI search; a clean, consistent entity profile is the difference between being named and being skipped in AI answers."
      }
    ],
    industries: ["Dentists", "Plumbers", "Salons"],
    relatedCities: ["seattle", "chicago", "miami"],
    relatedNiches: ["seo-for-dentists", "seo-for-plumbers", "seo-for-salons", "seo-for-therapists"],
    relatedInsight: "ins-04",
    relatedCaseStudyPath: "/case-studies/local-seo-systems"
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
