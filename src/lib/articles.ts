import type { Insight } from "@/types";

// Approved factual corrections; newer CMS edits can supersede these records.
export const EDITORIAL_ARTICLES: Insight[] = [
  {
    "id": "geo-chatgpt-search-perplexity",
    "title": "Generative Engine Optimization: A Practical, Evidence-Based Approach",
    "category": "AI Search",
    "readTime": "2 min read",
    "date": "June 24, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Understand AI search visibility, separate access from citation outcomes, and plan measurable improvements.",
    "metaTitle": "Generative Engine Optimization: A Practical, Evidence-Based Approach",
    "metaDescription": "Understand AI search visibility, separate access from citation outcomes, and plan measurable improvements.",
    "contentMarkdown": "## What GEO work can actually improve\n\nGenerative engine optimization describes work intended to improve how a business is discovered and represented in AI-assisted search. Start with accessible pages, accurate information, and evidence that helps a reader evaluate the answer. A citation is a possible outcome, not a deliverable that a consultant can guarantee.\n\nGoogle's AI search features use its search and quality systems. Other engines have their own retrieval and presentation behavior. Treat each platform separately rather than treating every language model as one ranking algorithm.\n\n## A practical review sequence\n\n1. Identify a real customer question and the page intended to answer it.\n2. Check the returned HTML, status code, indexing directives, and internal links.\n3. Verify the business name, service, author, location, and date against reliable records.\n4. Improve the actual explanation with a worked example, comparison, or documented result.\n5. Observe whether the engine links to or describes the business, recording the query, date, country, and cited URL.\n\n## Worked example: choosing an SEO service\n\nA service page should explain its audience, deliverables, access requirements, measurement, and limits. An annotated content inventory is useful evidence of a content-planning service. An invented citation probability is not. A table is helpful when it makes the scope easier to compare; it is not a required AI ranking format.\n\n## What the research does and does not establish\n\nThe KDD 2024 GEO paper tested interventions such as source citations, quotations, statistics, and fluency in a particular experimental setting. Its visibility metrics are not equivalent to guaranteed traffic, leads, or a universal commercial-engine ranking formula. Repeating an experimental percentage without its setting obscures that distinction.\n\n## Define a useful outcome\n\nTrack attributed inquiries and referrals alongside observations of citations. When a page improves, record all substantive changes so an observed result is not automatically attributed to schema or one writing technique.\n\n## Sources and scope\n\n- [Google AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)\n- [GEO research paper](https://arxiv.org/html/2311.09735v3)\n- [OpenAI crawler roles](https://developers.openai.com/api/docs/bots)",
    "relatedServicePath": "/services/ai-seo-consulting",
    "relatedServiceName": "AI SEO consulting",
    "relatedArticleIds": [
      "chatgpt-seo-optimization",
      "answer-capsules-ai-extraction",
      "geo-measurement-stack"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "entity-based-content-architecture",
    "title": "Entity-Based Content Architecture: A Worked Planning Method",
    "category": "Semantic SEO",
    "readTime": "2 min read",
    "date": "May 12, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Map concepts, buyer tasks, and page relationships without creating a URL for every keyword variation.",
    "metaTitle": "Entity-Based Content Architecture: A Worked Planning Method",
    "metaDescription": "Map concepts, buyer tasks, and page relationships without creating a URL for every keyword variation.",
    "contentMarkdown": "## Start with a visitor task\n\nEntity-aware architecture organizes information about identifiable people, organizations, products, services, and places. It complements query research; it does not replace the words customers use or make links irrelevant. The useful question is whether the site explains the subject and the relationships a visitor needs.\n\n## Example: a home-service business\n\nA contractor can have one parent service directory, a page for each meaningfully distinct service, examples of completed projects, and location information that reflects where the business actually works. A repair page answers a different need from a replacement page. Two pages that only swap nearby town names may add little useful information.\n\n| Page | Main visitor task | Useful next step |\n|---|---|---|\n| Service overview | Decide whether the business handles the job | Specific service |\n| Repair service | Understand fit, process, and exclusions | Relevant project example |\n| Project example | Evaluate actual experience | Quote request |\n\n## Build the inventory\n\nRecord the current URL, main topic, intended customer, question answered, evidence, and next action. Mark overlapping pages for review. Decide whether to improve, combine, or retain them based on their purpose rather than a target word count.\n\n## Link relationships in context\n\nUse descriptive anchors that explain the destination. A link labeled as a city-specific fencing service should not silently land on an unrelated general page. Navigation helps discovery; a relevant link inside an explanation helps the reader understand why another page matters.\n\n## Check the implementation\n\nCheck real HTML headings, lists, links, canonicals, and status codes. Structured data should describe the same service and provider as the visible page. A valid JSON block does not establish that its geographic claims are true.\n\n## Sources and scope\n\n- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)\n- [Crawlable links guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)\n- [Structured-data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)",
    "relatedServicePath": "/services/semantic-seo",
    "relatedServiceName": "Semantic SEO consulting",
    "relatedArticleIds": [
      "how-to-build-topical-authority-for-ai-seo"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "schema-strategy-growth-brands",
    "title": "Schema Strategy: Connect Your Business, Authors, and Services",
    "category": "Entity SEO",
    "readTime": "2 min read",
    "date": "April 8, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Use stable identifiers and accurate relationships to describe a business without promising rankings or a Knowledge Panel.",
    "metaTitle": "Schema Strategy: Connect Your Business, Authors, and Services",
    "metaDescription": "Use stable identifiers and accurate relationships to describe a business without promising rankings or a Knowledge Panel.",
    "contentMarkdown": "## Model facts before markup\n\nStructured data describes what a page is about. It should match the visible content and the real business. Before adding properties, confirm the business name, actual address, service areas, author, contact details, and relevant external profiles.\n\n## Use stable identifiers\n\nGive the business and author stable identifiers, then reference them from service and article records. Separate script blocks can reference the same identifiers; nesting everything into one graph is not a prerequisite for correctness.\n\n| Relationship | Meaning |\n|---|---|\n| Service → provider | Who delivers the work |\n| Service → areaServed | Where the service is available |\n| Article → author | Who wrote the material |\n| Person → sameAs | Another profile for the same person |\n\n## Geographic example\n\nA consultant based in Faisalabad who works remotely with a Houston business can describe Houston as a service area. That does not create a Houston office. Use the actual provider address; do not assign a city-center coordinate as a substitute business location.\n\n## Keep article records aligned\n\nUse the same resolved record for the visible title, publication date, modification date, author, and JSON-LD. A later editorial change should update the modification date, not silently rewrite the original publication date. Optional word counts should be computed or omitted rather than maintained as guesses.\n\n## Validate meaning and syntax\n\nParse the JSON and review the relationships. Use the appropriate validation tools for eligible search features, then check the output in the real page. Correct markup does not guarantee a Knowledge Panel, a rich result, a ranking, or an AI citation.\n\n## Sources and scope\n\n- [Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)\n- [Schema.org areaServed](https://schema.org/areaServed)\n- [Google Article documentation](https://developers.google.com/search/docs/appearance/structured-data/article)",
    "relatedServicePath": "/services/semantic-seo",
    "relatedServiceName": "Semantic SEO consulting",
    "relatedArticleIds": [
      "schema-as-citation-signal"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "local-entity-seo-ai-search",
    "title": "Local Entity SEO: Accurate Business Information and Useful Service Pages",
    "category": "Local SEO",
    "readTime": "2 min read",
    "date": "July 14, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Connect accurate profiles, service information, reviews, and measurement without overstating the role of schema.",
    "metaTitle": "Local Entity SEO: Accurate Business Information and Useful Service Pages",
    "metaDescription": "Connect accurate profiles, service information, reviews, and measurement without overstating the role of schema.",
    "contentMarkdown": "## Local relevance starts with the real business\n\nGoogle describes local ranking primarily through relevance, distance, and prominence. Complete information helps it understand a business, but schema or a collection of neighborhood names cannot eliminate distance or guarantee a map position.\n\nKeep business identity, phone numbers, hours, and location information accurate across the website and important profiles. Correct material discrepancies. Do not turn a formatting variation such as an abbreviated street suffix into a claimed ranking penalty without evidence.\n\n## Match the page to the job\n\nFor a [fence contractor](/services/seo-for-fence-contractors), distinguish an installation quote from material research. For an [electrician](/services/seo-for-electricians), distinguish an emergency call from a planned panel upgrade. The page should explain the actual work, service coverage, contact route, and relevant evidence.\n\nFor an [orthodontic practice](/services/seo-for-orthodontists), explain the consultation process and provide accurate practice and treatment information. Search visibility alone does not establish clinical suitability or appointment availability.\n\n## An illustrative audit record\n\n| Item | Observation to record | Possible action |\n|---|---|---|\n| Profile | Correct category and real hours | Correct inaccurate fields |\n| Service page | Work described matches what is offered | Clarify scope and exclusions |\n| Contact flow | Calls reach the right team | Fix routing and track qualified inquiries |\n| Project or case study | Outcome has dates and a definition | Add supporting evidence |\n\nThis is a review template, not findings about a particular business.\n\n## Connect the information carefully\n\nUse a stable provider identity and truthful service-area information. Separate locations only when they represent actual operating facts or useful delivery information. Plan local content around customer needs; do not generate a page for every neighborhood by default.\n\n## Measure business outcomes\n\nTrack calls, quote requests, bookings, and qualified opportunities where the business can do so responsibly. Record how a call is attributed and distinguish inquiries from jobs or revenue.\n\n## Sources and scope\n\n- [Google local ranking factors](https://support.google.com/business/answer/7091?hl=en)\n- [Google business information guidelines](https://support.google.com/business/answer/3038177?hl=en)\n- [Google AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)",
    "relatedServicePath": "/services/local-seo",
    "relatedServiceName": "Local SEO services",
    "relatedArticleIds": [
      "local-businesses-ai-search",
      "us-cities-local-seo-opportunity"
    ],
    "relatedIndustrySlugs": [
      "seo-for-fence-contractors",
      "seo-for-electricians",
      "seo-for-orthodontists",
      "seo-for-plumbers"
    ]
  },
  {
    "id": "topical-map-framework",
    "title": "How to Build a Topical Map Around Customer Decisions",
    "category": "Topical Authority",
    "readTime": "2 min read",
    "date": "July 17, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Create a practical topic and URL plan with distinct page purposes, evidence, and useful internal links.",
    "metaTitle": "How to Build a Topical Map Around Customer Decisions",
    "metaDescription": "Create a practical topic and URL plan with distinct page purposes, evidence, and useful internal links.",
    "contentMarkdown": "## A map is a planning document\n\nA topical map records which subjects a site should explain, why those subjects matter to its audience, and where each explanation belongs. It is not a disclosed Google score or proof that publishing more pages creates authority.\n\n## Define the business and audience\n\nWrite down what the business offers, who buys it, and what decisions those buyers make. For a consultant, the person is the author and service provider; the commercial subjects are the actual services. Repeating the consultant's name in every paragraph is unnecessary.\n\n## Build a small intent inventory\n\nList the customer question, existing URL, primary purpose, evidence, and next step. A page can cover several related questions when that is useful. Do not split every entity attribute or query wording into another URL.\n\n| Customer decision | Page purpose | Evidence |\n|---|---|---|\n| Is this service suitable? | Explain scope and fit | Sample deliverable |\n| Can this provider do the work? | Demonstrate experience | Documented case study |\n| What happens next? | Explain inquiry and delivery | Process and access requirements |\n\n## Identify overlap before expanding\n\nTwo articles can use similar terminology while answering different questions. Compare the actual audience, information, and outcome before consolidating. If the same task is repeated, combine the useful content and plan a relevant permanent redirect.\n\n## Plan the bridges\n\nConnect an explanation to the service it supports and a relevant example. The anchor should describe the actual destination. There is no universal requirement for exactly three links or a fixed number of pages per cluster.\n\n## Review the map over time\n\nUse query and conversion data to see which tasks the site serves. Missing evidence can be more important than a missing article. Maintain an owner and review date for each important page.\n\n## Sources and scope\n\n- [Google helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)\n- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)\n- [Crawlable links guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)",
    "relatedServicePath": "/services/semantic-seo",
    "relatedServiceName": "Semantic SEO consulting",
    "relatedArticleIds": [
      "how-to-build-topical-authority-for-ai-seo",
      "entity-based-content-architecture",
      "content-freshness-ai-search"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "entity-first-geo",
    "title": "Entity Clarity for AI Search: Facts, Profiles, and Evidence",
    "category": "AI Search",
    "readTime": "2 min read",
    "date": "August 3, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Make your business easy to identify while keeping observations separate from claims about proprietary AI algorithms.",
    "metaTitle": "Entity Clarity for AI Search: Facts, Profiles, and Evidence",
    "metaDescription": "Make your business easy to identify while keeping observations separate from claims about proprietary AI algorithms.",
    "contentMarkdown": "## Clarify who is making the claim\n\nA business page should make its provider, offer, audience, location, and author easy to identify. That helps readers judge relevance and verify information. It does not establish a universal entity score that every AI engine uses.\n\n## A practical identity checklist\n\n- Use the real professional and business names consistently.\n- Link genuine profiles belonging to the same person or organization.\n- Explain the actual service and delivery area.\n- Attribute articles to their author and link to a useful biography.\n- Support outcome claims with dates, definitions, and evidence.\n\n## Worked example\n\nA consultant serving US businesses remotely can publish a service page, a biography, and a case study with a clear role. The provider is the consultant's real business; the client's city is not automatically another office. A city name should change the delivery explanation or example, not merely the heading.\n\n## Verify before restructuring\n\nCompare visible copy, profile information, schema, and contact details. A mismatch may be a genuine error or simply a different description of the same entity. Resolve factual errors without inventing affiliations, profiles, or database entries.\n\n## Understand the limits\n\nGoogle's AI guidance says that special schema is not required for its generative search features. Use markup as part of a clear site implementation, not as a substitute for original content. Evaluate other engines with their own documentation and observations.\n\n## Record an observation\n\nFor a relevant query, record the engine, date, country, answer, cited URL, and whether the claim accurately represents the business. Keep citation presence separate from referral visits and qualified inquiries.\n\n## Sources and scope\n\n- [Google AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)\n- [Structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)\n- [Google ProfilePage documentation](https://developers.google.com/search/docs/appearance/structured-data/profile-page)",
    "relatedServicePath": "/services/ai-seo-consulting",
    "relatedServiceName": "AI SEO consulting",
    "relatedArticleIds": [
      "geo-chatgpt-search-perplexity",
      "answer-capsules-ai-extraction",
      "ai-mode-search-language"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "answer-capsules-ai-extraction",
    "title": "Answer-First Writing: Clear Passages Without a Fixed Word Count",
    "category": "AI Search",
    "readTime": "2 min read",
    "date": "August 4, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Write self-contained answers for readers without claiming a universal 120–150-word rule or unsupported research results.",
    "metaTitle": "Answer-First Writing: Clear Passages Without a Fixed Word Count",
    "metaDescription": "Write self-contained answers for readers without claiming a universal 120–150-word rule or unsupported research results.",
    "contentMarkdown": "## Answer the question directly\n\nA self-contained answer states the main point before developing its explanation. It can help a visitor scanning a service page or guide. Its useful length depends on the question; there is no universal 120–150-word rule for AI visibility.\n\n## An editorial example\n\nQuestion: What should a local SEO review include?\n\nAn initial review can check the business profile, website accessibility, service coverage, contact flow, and lead measurement. The output should distinguish confirmed problems from recommendations and explain which changes require access or further evidence. It should not promise a map position.\n\nThat answer is an illustrative writing example, not a tested ranking intervention.\n\n## Build the passage\n\n1. Give the direct answer.\n2. State important conditions or exceptions.\n3. Supply the evidence or a practical example.\n4. Link to supporting detail when the reader needs it.\n5. Remove claims that cannot be supported.\n\nA table suits a comparison. A paragraph suits a nuanced explanation. Choose the structure that makes the information understandable rather than forcing every section into the same template.\n\n## Correctly interpret GEO research\n\nAggarwal and colleagues tested methods including source citation, statistics, quotations, and fluency. Their paper does not establish an answer-capsule treatment or a standard paragraph length. Experimental visibility metrics should not be relabeled as commercial traffic or conversion improvements.\n\n## Evaluate the result\n\nAsk whether the section can be understood without hidden context, whether its evidence supports its conclusion, and whether any link accurately describes its destination. Evaluate search outcomes separately over a documented period.\n\n## Sources and scope\n\n- [Google AI optimization guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)\n- [Aggarwal et al., GEO paper](https://arxiv.org/html/2311.09735v3)",
    "relatedServicePath": "/services/ai-seo-consulting",
    "relatedServiceName": "AI SEO consulting",
    "relatedArticleIds": [
      "geo-chatgpt-search-perplexity",
      "entity-first-geo",
      "ai-mode-search-language"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "ai-mode-search-language",
    "title": "Plan Content for Questions and Follow-Ups in AI Search",
    "category": "AI Search",
    "readTime": "2 min read",
    "date": "August 5, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Use realistic customer questions and useful follow-ups without abandoning query research or inventing platform statistics.",
    "metaTitle": "Plan Content for Questions and Follow-Ups in AI Search",
    "metaDescription": "Use realistic customer questions and useful follow-ups without abandoning query research or inventing platform statistics.",
    "contentMarkdown": "## Begin with the customer's decision\n\nA visitor may ask a short query or describe a problem in detail. Both can express the same underlying need. Build content around that need, using words customers understand, rather than assuming every page must use a conversational title.\n\n## A service-page example\n\nA contractor researching SEO may need to know what the consultant changes, which access is required, how calls are measured, and how scope affects cost. Answer those questions on a coherent service page. Repeating a separate article for every wording is unnecessary.\n\n## Build a follow-up map\n\n| Initial question | Useful follow-up | Evidence or output |\n|---|---|---|\n| Can you improve my visibility? | What is wrong today? | Observed review findings |\n| What will you do? | Who implements changes? | Scope and responsibilities |\n| Is it working? | Which inquiries became customers? | Attribution and qualification |\n\n## Use query fan-out carefully\n\nGoogle describes query fan-out as one technique used in its AI features to seek related information. That is not an instruction to generate a URL for every possible fan-out. A useful page may satisfy several related questions.\n\n## Evaluate changes\n\nRecord the page and query set before editing. Improve missing explanations and evidence, then compare the same tasks over time. Do not attribute changes to a new question heading alone when the offer, links, and underlying content changed too.\n\n## Keep claims proportional\n\nDo not infer a platform's secret ranking factors from a handful of answers. If discussing a published behavior study, link the original source and state its dates, population, and limits. Otherwise describe the proposed content approach as your own practical method.\n\n## Sources and scope\n\n- [Google AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)\n- [Helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)",
    "relatedServicePath": "/services/ai-seo-consulting",
    "relatedServiceName": "AI SEO consulting",
    "relatedArticleIds": [
      "geo-chatgpt-search-perplexity",
      "entity-first-geo",
      "answer-capsules-ai-extraction"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "schema-as-citation-signal",
    "title": "Schema and AI Citations: Separate Evidence from Assumptions",
    "category": "Entity SEO",
    "readTime": "2 min read",
    "date": "August 6, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Evaluate schema claims by engine, intervention, and measurement instead of assuming markup guarantees citations.",
    "metaTitle": "Schema and AI Citations: Separate Evidence from Assumptions",
    "metaDescription": "Evaluate schema claims by engine, intervention, and measurement instead of assuming markup guarantees citations.",
    "contentMarkdown": "## Three different questions\n\nDoes schema describe the page accurately? Does it qualify for a supported search feature? Did changing it affect a measured outcome? These questions need different evidence. Passing a validator does not answer the last one.\n\n## Evaluate a study before applying it\n\nRecord the engine, collection dates, sample, intervention, outcome metric, and comparison group. A study showing that cited pages often have schema is an association; it does not prove that adding schema caused the citations.\n\n| Observation | What it supports | What it does not prove |\n|---|---|---|\n| JSON parses | Syntax can be read | Facts are accurate |\n| Markup matches the page | Consistent description | Guaranteed search feature |\n| Citations changed after editing | A change worth investigating | Schema was the sole cause |\n\n## Google's stated position\n\nGoogle does not require special schema for generative AI search. Its structured-data documentation also explains that correctly implemented markup does not guarantee a rich result. Keep these statements separate from speculation about other systems.\n\n## A useful implementation experiment\n\nChoose a real inconsistency, such as an author identity that differs between page and schema. Correct it because it is inaccurate. Record the deployment and observe indexed output and relevant citations over a defined period. If several changes ship together, report them together rather than attributing everything to markup.\n\n## What to publish\n\nDescribe the actual change, measurement, and limits. Avoid vague citations to unnamed or Princeton-adjacent research. A sourced implementation note with modest conclusions is more useful than an unsupported percentage lift.\n\n## Sources and scope\n\n- [Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)\n- [Google AI optimization guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)\n- [GEO research methods](https://arxiv.org/html/2311.09735v3)",
    "relatedServicePath": "/services/semantic-seo",
    "relatedServiceName": "Semantic SEO consulting",
    "relatedArticleIds": [
      "schema-strategy-growth-brands",
      "faq-schema-ai-overviews",
      "entity-first-geo"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "content-freshness-ai-search",
    "title": "Content Maintenance: Update Facts, Examples, and Dates Honestly",
    "category": "Topical Authority",
    "readTime": "2 min read",
    "date": "August 7, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Prioritize meaningful revisions and keep visible dates, article schema, and sitemap records consistent.",
    "metaTitle": "Content Maintenance: Update Facts, Examples, and Dates Honestly",
    "metaDescription": "Prioritize meaningful revisions and keep visible dates, article schema, and sitemap records consistent.",
    "contentMarkdown": "## Freshness means the information is maintained\n\nA current date is useful when it reflects a significant change to the information. Replacing a year in a heading without checking the claims does not make an article reliable. Some questions need recent data; other explanations remain useful for longer.\n\n## Build a review register\n\nRecord the page, owner, evidence sources, last substantive revision, and what would trigger another review. A software guide may need a review when its interface changes. A case study may need a correction when attribution or client permission changes.\n\n| Trigger | Substantive action | Date handling |\n|---|---|---|\n| Official guidance changes | Revise the affected recommendation | Update modified date |\n| Original research added | Publish method and results | Preserve original publication date |\n| Typo corrected | Correct the text | No artificial freshness campaign |\n\n## Review the claims first\n\nOpen the sources and check whether they still support the wording. Replace unsupported guarantees with a bounded explanation. Update screenshots or examples only when they represent actual observations.\n\n## Keep the implementation consistent\n\nVisible modification dates, article JSON-LD, and sitemap lastmod should describe the same substantive revision. Store that date in the content record. A deployment timestamp is not a content update date.\n\n## Choose priorities\n\nStart with commercially important pages and articles containing time-sensitive claims. Use search and conversion evidence to identify neglected information, but do not refresh a page solely to make it look newer than competitors. Track what changed so later observations can be interpreted responsibly.\n\n## Sources and scope\n\n- [Google sitemap lastmod guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)\n- [Google helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)\n- [Article dates](https://developers.google.com/search/docs/appearance/structured-data/article)",
    "relatedServicePath": "/services/semantic-seo",
    "relatedServiceName": "Semantic SEO consulting",
    "relatedArticleIds": [
      "topical-map-framework",
      "topical-authority-core-update",
      "original-data-solo-seo"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "topical-authority-core-update",
    "title": "Topical Authority and Core Updates: Evaluate Evidence Before Drawing Conclusions",
    "category": "Topical Authority",
    "readTime": "2 min read",
    "date": "August 8, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Use official update dates and stable page/query comparisons rather than attributing rankings to an imagined update or one framework.",
    "metaTitle": "Topical Authority and Core Updates: Evaluate Evidence Before Drawing Conclusions",
    "metaDescription": "Use official update dates and stable page/query comparisons rather than attributing rankings to an imagined update or one framework.",
    "contentMarkdown": "## Correction to the earlier article\n\nAn earlier version referred to an October 2025 Google core update. Google's official history lists March, June, and December core updates for 2025, not October. The earlier interpretation has been withdrawn. A practitioner framework should not be presented as proof of what an unannounced update rewarded.\n\n## Start with the actual event\n\nConfirm the update name and rollout dates in Google's dashboard. Then identify which pages and queries changed. A site-wide average can move because the site appeared for new lower-ranking queries, even while established queries stayed stable.\n\n## Compare useful cohorts\n\n1. Choose the same pages and query groups before and after the event.\n2. Keep country, device, and search type consistent.\n3. Account for seasonality and substantial site changes.\n4. Inspect affected pages for accessibility, accuracy, usefulness, and overlap.\n5. Record what remains uncertain.\n\n## Evaluate topical coverage as a planning method\n\nA coherent topic plan can help a site explain a subject and guide readers. It is not a published formula that lets you calculate Google's trust score. The term topical authority should describe demonstrated subject expertise, not a guaranteed numerical ranking mechanism.\n\n## Worked interpretation\n\nSuppose impressions increase while average position worsens. Check whether new query exposure accounts for the change before declaring a penalty. If clicks fall for a stable set of useful pages, examine those pages and the competitive results. The same aggregate pattern can have several explanations.\n\n## Act on confirmed problems\n\nFix misleading claims, missing content, broken navigation, and genuine duplication. Document changes and wait for enough comparable observations. Avoid mass deletion merely because an update happened near a traffic change.\n\n## Sources and scope\n\n- [Google official ranking-update history](https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history)\n- [Google helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)",
    "relatedServicePath": "/services/semantic-seo",
    "relatedServiceName": "Semantic SEO consulting",
    "relatedArticleIds": [
      "topical-map-framework",
      "content-freshness-ai-search",
      "original-data-solo-seo"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "reddit-youtube-co-citation-geo",
    "title": "Off-Site Visibility: Useful Participation and Verifiable Profiles",
    "category": "AI Search",
    "readTime": "2 min read",
    "date": "August 9, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Build a credible off-site presence without turning correlations, mentions, or platform participation into ranking guarantees.",
    "metaTitle": "Off-Site Visibility: Useful Participation and Verifiable Profiles",
    "metaDescription": "Build a credible off-site presence without turning correlations, mentions, or platform participation into ranking guarantees.",
    "contentMarkdown": "## Be useful where the audience already is\n\nIndustry communities, professional profiles, videos, and publications can help people discover a business and evaluate its expertise. Choose channels because they fit the audience, not because an unsupported citation percentage promises a shortcut.\n\n## A manageable participation plan\n\nStart with one professional profile and one relevant publication or community. Explain your actual role and services consistently. Answer questions within your experience and disclose commercial relationships where relevant. Respect each platform's rules.\n\n## Create an evidence asset\n\nAn annotated implementation example, a documented experiment, or a clear walkthrough gives an external reader something concrete to evaluate. A video can show a real process; a transcript can improve access. Neither format guarantees citation by an AI engine.\n\n## Measure separately\n\n| Outcome | What to record |\n|---|---|\n| Profile accuracy | Correct identity, offer, and links |\n| Audience response | Relevant questions and qualified inquiries |\n| Referral visits | Source and landing page |\n| Search citation | Query, engine, date, and cited page |\n\nDo not combine all of these into an invented authority score.\n\n## Distinguish correlation from intervention\n\nA study may observe that well-known brands appear on certain platforms and in AI answers. That alone cannot show that posting on a platform caused the search outcome. Use the original study's method and time window when discussing such findings.\n\n## Avoid inauthentic signals\n\nDo not buy fabricated testimonials, manufacture mentions, or create profiles that imply affiliations you do not have. Google's AI guidance specifically warns against inauthentic mentions. Build assets that are useful even when no search engine cites them.\n\n## Sources and scope\n\n- [Google AI optimization guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)\n- [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)",
    "relatedServicePath": "/services/ai-seo-consulting",
    "relatedServiceName": "AI SEO consulting",
    "relatedArticleIds": [
      "geo-chatgpt-search-perplexity",
      "entity-first-geo",
      "answer-capsules-ai-extraction"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "original-data-solo-seo",
    "title": "Original Research for Small Businesses: A Reproducible Workflow",
    "category": "Topical Authority",
    "readTime": "2 min read",
    "date": "August 10, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Publish a modest original dataset with a clear question, method, limits, and downloadable evidence instead of unsupported citation multipliers.",
    "metaTitle": "Original Research for Small Businesses: A Reproducible Workflow",
    "metaDescription": "Publish a modest original dataset with a clear question, method, limits, and downloadable evidence instead of unsupported citation multipliers.",
    "contentMarkdown": "## Choose a question you can answer honestly\n\nOriginal research can be small. It might examine a set of your own service pages, customer questions you have permission to analyze, or a documented implementation test. The value is an observation others can inspect, not a claim that a table automatically multiplies citations.\n\n## Define the method first\n\nWrite down the question, sample-selection rule, collection date, measurement, exclusions, and intended comparison. Keep the raw observations. Avoid collecting personal or confidential information without an appropriate basis and permission.\n\n## An illustrative page audit\n\n| Field | Example of what to record |\n|---|---|\n| URL | The exact page reviewed |\n| Intended task | What the visitor should be able to decide |\n| Observation | A specific missing or incorrect fact |\n| Evidence | HTML excerpt, record, or source |\n| Action | A change connected to the observation |\n\nThis is a template, not a completed research dataset. Do not fill it with plausible numbers and publish them as findings.\n\n## Analyze one defensible result\n\nState the denominator and limits. If a sample is small or selected for convenience, say so. A relationship does not establish causation. Distinguish a measured result from a recommendation based on professional judgment.\n\n## Publish the evidence\n\nInclude the date, method, definitions, relevant source links, and an anonymized data file when appropriate. Explain missing observations instead of treating them as zeros. Give readers enough context to assess whether the result applies to them.\n\n## Maintain the asset\n\nCorrect errors visibly. If you repeat the study, keep earlier versions identifiable and explain changes to the sample or method. Measure useful references and business inquiries without promising that AI systems must cite your findings.\n\n## Sources and scope\n\n- [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)\n- [GEO paper and its experimental limits](https://arxiv.org/html/2311.09735v3)",
    "relatedServicePath": "/services/semantic-seo",
    "relatedServiceName": "Semantic SEO consulting",
    "relatedArticleIds": [
      "topical-map-framework",
      "content-freshness-ai-search",
      "topical-authority-core-update"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "local-businesses-ai-search",
    "title": "Local Businesses in AI Search: Profile Accuracy and Customer Decisions",
    "category": "Local SEO",
    "readTime": "2 min read",
    "date": "August 11, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Improve accurate local information and buyer guidance while measuring AI visibility separately from map rankings and bookings.",
    "metaTitle": "Local Businesses in AI Search: Profile Accuracy and Customer Decisions",
    "metaDescription": "Improve accurate local information and buyer guidance while measuring AI visibility separately from map rankings and bookings.",
    "contentMarkdown": "## Make the operating facts clear\n\nA local business should state what it does, where it actually operates, how to contact it, and when it is available. Google recommends maintaining relevant business information for its local and generative search experiences. That is not a guarantee that a complete profile will be cited.\n\n## Match information to the decision\n\nA [dental practice](/services/seo-for-dentists) needs accurate treatment, office, and booking information. A [therapy practice](/services/seo-for-therapists) may need to distinguish in-person availability from remote appointments. A [salon](/services/seo-for-salons) should explain services, appointment routes, and actual opening hours.\n\nFor a [dermatology practice](/services/seo-for-dermatologists), marketing explanations must stay within verified practice information. A search result is not evidence of clinical suitability.\n\n## Review the same facts across surfaces\n\nCompare the website, primary business profile, and relevant directories. Correct real contradictions in identity, hours, services, and contact routes. Do not create another physical location merely to target a city.\n\n## Answer useful questions\n\nExplain service fit, appointment or quote process, realistic coverage, and common limitations. Use a project or case study when there is a genuine relationship. An unsupported statement that a business is the best or always available is less useful than a clear operational fact.\n\n## Keep measurements separate\n\nObserve map visibility, AI citations, website referrals, inquiries, and bookings as different outcomes. Record the query, location, engine, and date when reviewing search results. A business may improve one outcome without improving another.\n\n## Prioritize corrections\n\nFix incorrect public facts and failed contact paths before adding more city pages. Then improve the service information customers need and document any new work so the evidence can be reviewed later.\n\n## Sources and scope\n\n- [Google local ranking factors](https://support.google.com/business/answer/7091?hl=en)\n- [Google AI optimization guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)\n- [Business Profile guidelines](https://support.google.com/business/answer/3038177?hl=en)",
    "relatedServicePath": "/services/local-seo",
    "relatedServiceName": "Local SEO services",
    "relatedArticleIds": [
      "local-entity-seo-ai-search",
      "us-cities-local-seo-opportunity"
    ],
    "relatedIndustrySlugs": [
      "seo-for-dentists",
      "seo-for-salons",
      "seo-for-therapists",
      "seo-for-dermatologists"
    ]
  },
  {
    "id": "geo-measurement-stack",
    "title": "Measure AI Search Visibility with a Documented Query Sample",
    "category": "AI Search",
    "readTime": "2 min read",
    "date": "August 11, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Define citations, share of voice, and business outcomes with a repeatable sample and explicit uncertainty.",
    "metaTitle": "Measure AI Search Visibility with a Documented Query Sample",
    "metaDescription": "Define citations, share of voice, and business outcomes with a repeatable sample and explicit uncertainty.",
    "contentMarkdown": "## Define what you are measuring\n\nA brand mention, a source citation, a referral visit, and an inquiry are different observations. Record them separately. An engine may name a business without linking to its website, or cite a page that produces no useful visit.\n\n## Build a sampling plan\n\nChoose a set of customer questions and record country, language, platform, account context, date, and whether web search was used. Repeat observations consistently enough to understand variation. No single sample size, including 50 runs, is a universal industry standard.\n\n| Field | Meaning |\n|---|---|\n| Citation presence | Whether the answer links to the intended source |\n| Description accuracy | Whether the answer represents the business correctly |\n| Share of voice | Your stated proportion within a defined comparison set |\n| Referral outcome | Visits and qualified inquiries attributed to the source |\n\n## An illustrative calculation\n\nIf a source is cited in 3 of 10 observations, its observed citation frequency in that sample is 30%. That is not a 30% probability of being cited for all users. The sample may vary by time, engine, location, and personalization.\n\n## Turn observations into work\n\nIf an answer repeats an outdated fact, correct the underlying page and profile. If the source cannot access the page, inspect status and access rules. If competitors provide more useful evidence, improve the substance rather than inventing another markup field.\n\n## Report uncertainty\n\nKeep missing results and failed requests visible. Record simultaneous site changes and platform changes. Use permitted interfaces and collection methods. Explain the cost and feasibility of repeated sampling before treating a large run count as mandatory.\n\n## Connect to business value\n\nCompare referral visits, inquiry quality, and engagements over time. A citation count without a defined query set or outcome is too ambiguous to serve as the only performance measure.\n\n## Sources and scope\n\n- [Google AI optimization and measurement guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)\n- [GEO visibility metric definitions](https://arxiv.org/html/2311.09735v3)\n- [OpenAI search crawler documentation](https://developers.openai.com/api/docs/bots)",
    "relatedServicePath": "/services/ai-seo-consulting",
    "relatedServiceName": "AI SEO consulting",
    "relatedArticleIds": [
      "geo-chatgpt-search-perplexity",
      "entity-first-geo",
      "answer-capsules-ai-extraction"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "us-cities-local-seo-opportunity",
    "title": "Compare Local SEO Markets with a Documented Research Plan",
    "category": "Local SEO",
    "readTime": "2 min read",
    "date": "August 11, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Assess a city using relevant customer demand, actual operating coverage, competitor evidence, and lead quality; no unsupported city ranking index.",
    "metaTitle": "Compare Local SEO Markets with a Documented Research Plan",
    "metaDescription": "Assess a city using relevant customer demand, actual operating coverage, competitor evidence, and lead quality; no unsupported city ranking index.",
    "contentMarkdown": "## A city name is not a difficulty score\n\nA previous version published numerical city-opportunity scores without a reproducible dataset. Those scores have been removed. A useful market decision needs evidence about a particular service, customer, operating area, and business model—not a universal ranking of cities.\n\n## Define a comparison\n\nChoose the service, buyer task, actual coverage, and observation method before comparing competitors. A [roofing contractor](/services/seo-for-roofers), [HVAC business](/services/seo-for-hvac), and [landscaper](/services/seo-for-landscapers) can face different demand and capacity constraints in the same city. [Pest-control work](/services/seo-for-pest-control) also requires service-specific planning.\n\n| Input | What to verify | Why it changes the plan |\n|---|---|---|\n| Operating coverage | Where jobs can actually be served | Prevents irrelevant leads |\n| Customer demand | Relevant queries and real inquiries | Separates research from buying intent |\n| Competitive evidence | Dated observations for a defined task | Avoids broad agency-count proxies |\n| Capacity and economics | Accepted jobs, margins, and schedule | Connects visibility to viable work |\n\n## Use cities as delivery contexts\n\nFor [Houston](/locations/houston), clarify which parts of the metro the client actually serves before writing location content. For [Austin](/locations/austin) or [Seattle](/locations/seattle), a relevant local engagement can illustrate the work, but does not establish current conditions for every industry.\n\n## Separate observations from assumptions\n\nRecord where and when a search was reviewed, which device or tool was used, and what the observation can support. A review-count comparison is not proof of the exact threshold needed to rank. Directory presence is not a guaranteed ranking intervention.\n\n## Make the next decision\n\nStart with an audit of an existing market or a carefully scoped test. Improve service information, profiles, and conversion paths before generating more city pages. Revisit the decision when real lead quality and job data are available.\n\n## Sources and scope\n\n- [Google local ranking factors](https://support.google.com/business/answer/7091?hl=en)\n- [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)",
    "relatedServicePath": "/services/local-seo",
    "relatedServiceName": "Local SEO services",
    "relatedArticleIds": [
      "local-entity-seo-ai-search",
      "local-businesses-ai-search"
    ],
    "relatedIndustrySlugs": [
      "seo-for-roofers",
      "seo-for-hvac",
      "seo-for-landscapers",
      "seo-for-pest-control",
      "seo-for-contractors"
    ]
  },
  {
    "id": "chatgpt-seo-optimization",
    "title": "ChatGPT Search Visibility: Access, Accurate Content, and Measurement",
    "category": "AI Search",
    "readTime": "2 min read",
    "date": "August 12, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Check search access and useful source content, then measure citations and referrals without claiming access to ChatGPT ranking weights.",
    "metaTitle": "ChatGPT Search Visibility: Access, Accurate Content, and Measurement",
    "metaDescription": "Check search access and useful source content, then measure citations and referrals without claiming access to ChatGPT ranking weights.",
    "contentMarkdown": "## Separate search access from model training\n\nOpenAI documents OAI-SearchBot for search discovery and GPTBot for content that may be used in model training. Their robots settings are independent. A policy choice about training should not be confused with a search visibility setting.\n\n## Check accessibility first\n\nReview returned status codes, robots rules, public HTML, canonical URLs, and internal links. Access is a necessary practical check, not a guarantee that a platform will select the page. Private or failed pages should not be assumed to be available because the homepage loads.\n\n## Make the page useful\n\nState the real offer, provider, customer, and relevant conditions. Answer the visitor's task with supporting evidence. A service page might explain deliverables, access requirements, and scope; a case study should define the outcome and measurement period.\n\n## Keep the language grounded\n\nThere is no public formula in the cited documentation that lets a consultant compute a page's citation probability from schema density, paragraph length, or Wikidata links. Do not present a proprietary-weighting claim as established fact.\n\n## An observation log\n\n| Record | Example of the information needed |\n|---|---|\n| Prompt | Exact question and follow-up context |\n| Environment | Date, country, account context, and search mode |\n| Source | Cited URL and the claim it supports |\n| Outcome | Referral visit, inquiry, or no observed action |\n\n## Evaluate improvements responsibly\n\nRecord changes, repeat a defined set of observations, and compare like-for-like results. If several changes ship together, avoid claiming one caused all improvements. The practical goal is accurate discovery and useful business outcomes, not a simulated score.\n\n## Sources and scope\n\n- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots)\n- [OpenAI publisher FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)\n- [Google guidance for its own AI search features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)",
    "relatedServicePath": "/services/ai-seo-consulting",
    "relatedServiceName": "AI SEO consulting",
    "relatedArticleIds": [
      "ai-mode-search-language",
      "geo-measurement-stack",
      "llms-txt-ai-crawlers"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "llms-txt-ai-crawlers",
    "title": "llms.txt: An Optional Convention, Not a Search Ranking Requirement",
    "category": "AI Search",
    "readTime": "2 min read",
    "date": "August 12, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Understand the limits of llms.txt and distinguish optional documentation aids from robots, indexing, and search crawler access.",
    "metaTitle": "llms.txt: An Optional Convention, Not a Search Ranking Requirement",
    "metaDescription": "Understand the limits of llms.txt and distinguish optional documentation aids from robots, indexing, and search crawler access.",
    "contentMarkdown": "## What the file is\n\nllms.txt is a proposed convention for providing a concise overview and links to useful documentation. Its presence does not prove that an engine reads or prioritizes it. Support must be established for a particular consumer rather than assumed for all AI systems.\n\n## Google's documented position\n\nGoogle says that it does not use llms.txt files for Search and that maintaining such a file neither helps nor harms visibility or rankings there. This includes its generative search features. Do not describe the file as a Google ranking factor.\n\n## What it does not replace\n\n| Mechanism | Actual role |\n|---|---|\n| robots.txt | Communicates crawler access rules |\n| Public HTML and links | Make content accessible and discoverable |\n| Canonical and status handling | Describe preferred and available pages |\n| Sitemap | Lists URLs for discovery |\n| llms.txt | Optional overview for consumers that choose to use it |\n\n## Search and training are separate\n\nOAI-SearchBot and GPTBot have distinct documented purposes. A file listing pages does not override access rules or establish whether material can appear in search. Check the crawler's actual documentation.\n\n## When maintaining it can be reasonable\n\nA documentation publisher may find a concise index useful for a known consumer or internal workflow. Keep links current, avoid publishing private material, and treat the file as an additional representation of existing information. Do not promise citation lift or claim its link order controls a search engine.\n\n## What to fix first\n\nIf an important page returns an error, lacks usable HTML, or is isolated from navigation, address that problem. An optional text overview is not a substitute for a useful, technically accessible page.\n\n## Sources and scope\n\n- [Google AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)\n- [OpenAI crawler roles](https://developers.openai.com/api/docs/bots)\n- [llms.txt proposal](https://llmstxt.org/)",
    "relatedServicePath": "/services/ai-seo-consulting",
    "relatedServiceName": "AI SEO consulting",
    "relatedArticleIds": [
      "geo-chatgpt-search-perplexity",
      "entity-first-geo",
      "answer-capsules-ai-extraction"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "faq-schema-ai-overviews",
    "title": "Useful FAQ Content: Answers, Evidence, and Schema Limits",
    "category": "AI Search",
    "readTime": "2 min read",
    "date": "July 15, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Write clear questions and answers without promising FAQ rich results or automatic inclusion in AI Overviews.",
    "metaTitle": "Useful FAQ Content: Answers, Evidence, and Schema Limits",
    "metaDescription": "Write clear questions and answers without promising FAQ rich results or automatic inclusion in AI Overviews.",
    "contentMarkdown": "## Begin with questions customers actually ask\n\nAn FAQ is useful when it resolves a real uncertainty: scope, timing, access, price, eligibility, or an important limitation. It should not be a container for every keyword variation or an assertion that markup will force an AI system to quote the business.\n\n## A useful answer structure\n\nGive the direct answer, state relevant conditions, and provide evidence or a next step. The length depends on the question. Avoid numerical claims unless they can be supported.\n\n### Example: how is an SEO engagement scoped?\n\nThe scope depends on the website, target customers, implementation responsibilities, and measurement needs. An initial review identifies the deliverables and access required before a proposal is agreed. This is an illustrative explanation, not a published price or promise of results.\n\n## Keep visible content and schema consistent\n\nIf you include FAQ markup, it must describe the questions and answers readers can access on the page. A syntactically valid block does not prove the advice is accurate or guarantee a search feature.\n\n## Current Google feature limits\n\nGoogle's documentation changelog says its FAQ rich-result feature stopped appearing from May 2026. Google's AI guidance does not require special schema for generative search. Useful Q&A content remains a reader-focused choice, not a shortcut to an enhanced result.\n\n## Review the output\n\nCheck that headings contain only headings, answers are paragraphs, and links render as links. Link primary sources where an answer relies on external rules or research. Update the content when the source changes and retain a truthful modification date.\n\n## Sources and scope\n\n- [Google documentation changelog](https://developers.google.com/search/updates)\n- [Structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)\n- [Google AI guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)",
    "relatedServicePath": "/services/ai-seo-consulting",
    "relatedServiceName": "AI SEO consulting",
    "relatedArticleIds": [
      "geo-chatgpt-search-perplexity",
      "entity-first-geo",
      "answer-capsules-ai-extraction"
    ],
    "relatedIndustrySlugs": []
  },
  {
    "id": "how-to-build-topical-authority-for-ai-seo",
    "title": "Build Topical Coverage with an Evidence-Based Content Inventory",
    "category": "Semantic SEO",
    "readTime": "2 min read",
    "date": "July 16, 2026",
    "modifiedDate": "2026-10-18T18:18:45Z",
    "summary": "Audit page purposes, supporting evidence, and internal relationships without treating practitioner formulas or leaked terminology as confirmed ranking rules.",
    "metaTitle": "Build Topical Coverage with an Evidence-Based Content Inventory",
    "metaDescription": "Audit page purposes, supporting evidence, and internal relationships without treating practitioner formulas or leaked terminology as confirmed ranking rules.",
    "contentMarkdown": "## Define a bounded subject\n\nChoose the audience and decision the site serves. Topical coverage is useful when it helps visitors understand that subject and evaluate the provider. There is no public trust-score formula in the sources below that turns page counts, a three-link rule, or named practitioner concepts into guaranteed rankings.\n\n## Inventory existing pages\n\nRecord each URL, audience, main task, content owner, evidence, next step, and revision date. Start with what exists rather than generating new pages from keyword variations. One page may answer several closely connected questions.\n\n## Review an illustrative service cluster\n\n| Page | Distinct purpose | Evidence to supply |\n|---|---|---|\n| Service | Explain the offer and boundaries | Sample deliverable |\n| Implementation guide | Teach a specific method | Worked example and sources |\n| Case study | Show what changed | Dates, baselines, and role |\n| Biography | Identify the author | Real experience and credentials |\n\n## Improve weak relationships\n\nA service explanation can link to an implementation guide; a case study can link back to the actual service used. Link by meaning and usefulness. Do not insert a fixed number of links or repeat the same anchor everywhere merely to meet a formula.\n\n## Distinguish frameworks from search documentation\n\nPractitioner frameworks can be useful planning tools. Patents, leaked field names, and commentary do not by themselves establish how a live ranking system uses a signal today. Label inference clearly and provide the original material when discussing it.\n\n## Check the publishing layer\n\nConfirm the actual rendered headings, links, dates, canonicals, and article/author records. A good plan can be weakened by a renderer that turns paragraphs into headings or a CMS that drops relationship fields.\n\n## Measure a defined change\n\nKeep country, device, pages, and query groups comparable. Record implementation dates and business outcomes. Low-volume observations need time and careful interpretation; do not declare success from one citation or impression.\n\n## Sources and scope\n\n- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)\n- [Helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)\n- [Google AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)",
    "relatedServicePath": "/services/semantic-seo",
    "relatedServiceName": "Semantic SEO consulting",
    "relatedArticleIds": [
      "entity-based-content-architecture"
    ],
    "relatedIndustrySlugs": []
  }
];
