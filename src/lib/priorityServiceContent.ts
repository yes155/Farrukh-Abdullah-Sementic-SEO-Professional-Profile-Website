export interface PriorityServiceContent {
  slug: string;
  journeyTitle: string;
  journeys: { search: string; destination: string; nextStep: string }[];
  packages: { title: string; detail: string }[];
  publicExample: {
    business: string;
    sources: { label: string; url: string }[];
    observations: { observed: string; application: string }[];
  };
  brief: { title: string; path: string; task: string; headings: string[]; evidence: string[]; acceptance: string[] };
  measurement: { stage: string; record: string; meaning: string }[];
  measurementNote: string;
}

export const PRIORITY_SERVICE_CONTENT: PriorityServiceContent[] = [
  {
    slug: 'seo-for-electricians',
    journeyTitle: 'Different electrical jobs need different search journeys',
    journeys: [
      { search: 'emergency electrician [city]', destination: 'An emergency-service page with actual coverage, availability, and a clear call route.', nextStep: 'A relevant call answered by the service team.' },
      { search: 'electrical panel upgrade [city]', destination: 'A planned-upgrade page explaining the assessment and estimate process.', nextStep: 'A qualified assessment or estimate request.' },
      { search: 'EV charger installation [city]', destination: 'An installation page covering the information needed before an electrician can assess the job.', nextStep: 'An installation inquiry for the actual customer area.' },
      { search: 'commercial electrician [city]', destination: 'A commercial-service page describing the business customers and work actually accepted.', nextStep: 'A relevant commercial inquiry.' },
    ],
    packages: [
      { title: 'Service and coverage review', detail: 'Inventory the electrical services actually offered, the operating area, contact routes, and existing page purposes. Identify overlap, missing explanations, and misleading availability statements.' },
      { title: 'Page briefs and implementation', detail: 'Prepare distinct briefs for the agreed services, connect relevant project evidence, and specify headings, internal links, contact actions, and business information. Assign each change to me, your writer, or your developer.' },
      { title: 'Inquiry-quality reporting', detail: 'Define urgent versus planned work, relevant service area, answered calls, qualified estimates, and booked jobs. The reporting plan identifies which records your team can reliably supply.' },
    ],
    publicExample: {
      business: 'Mr. Electric',
      sources: [{ label: 'EV charger installation page', url: 'https://mrelectric.com/residential/electric-vehicles/ev-charger-installation-replacement' }],
      observations: [
        { observed: 'The public site has a dedicated EV charger installation page.', application: 'Give a planned installation its own useful explanation when it represents a distinct service and customer decision.' },
        { observed: 'Its navigation separates emergency work, charger installation, and charger repair.', application: 'Review whether each service leads to the appropriate response route, rather than sending every visitor through one generic page.' },
        { observed: 'The booking area requests a ZIP or postal code.', application: 'Use actual coverage when qualifying inquiries; a phone-link click alone does not establish that a caller is in the service area.' },
      ],
    },
    brief: {
      title: 'EV charger installation page brief',
      path: '/services/ev-charger-installation',
      task: 'Help a homeowner understand the next assessment step and request an installation estimate from a business that serves the property.',
      headings: ['Installation service and actual coverage', 'What the electrician needs to assess', 'How the visit and estimate work', 'Relevant completed work and installer credentials', 'Request an installation assessment'],
      evidence: ['Contractor-approved service and qualification details', 'Genuine project photographs or an approved installation example', 'Actual estimate process and contact availability'],
      acceptance: ['The page describes a service the contractor actually provides.', 'The contact route records the service requested and supports coverage checks.', 'Technical and safety claims are approved by the contractor.'],
    },
    measurement: [
      { stage: 'Contact interest', record: 'Phone-link clicks or successful inquiry-form submissions.', meaning: 'An interaction, not yet a qualified lead.' },
      { stage: 'Relevant inquiry', record: 'Answered calls or forms matched to the accepted service and operating area.', meaning: 'A lead the electrical business can assess.' },
      { stage: 'Assessment booked', record: 'Appointments confirmed in the business’s scheduling records.', meaning: 'A scheduled opportunity, not completed work.' },
      { stage: 'Job booked', record: 'Accepted work linked to the original inquiry where attribution is available.', meaning: 'A business outcome reviewed separately from rankings.' },
    ],
    measurementNote: 'Deduplicate inquiries and separate emergency requests from planned installations. Agree the source, comparison period, and lead definition before reporting a conversion rate.',
  },
  {
    slug: 'seo-for-fence-contractors',
    journeyTitle: 'Connect fence research to the right estimate request',
    journeys: [
      { search: 'wood fence installation [city]', destination: 'A material-and-installation page with relevant projects and the actual estimate process.', nextStep: 'An installation estimate request.' },
      { search: 'vinyl fence contractor [city]', destination: 'A distinct vinyl page when the contractor offers it and can explain the relevant options.', nextStep: 'A material-specific inquiry.' },
      { search: 'fence repair [city]', destination: 'A repair page explaining accepted work and how damage is assessed.', nextStep: 'A repair assessment, rather than a new-installation-only form.' },
      { search: 'commercial security fencing [city]', destination: 'A commercial page describing the sites and project types actually served.', nextStep: 'A relevant commercial project inquiry.' },
    ],
    packages: [
      { title: 'Material and service map', detail: 'Map installation, replacement, repairs, and material research to the pages already on the site. Combine close wording variants and propose new pages only for distinct work the business can explain well.' },
      { title: 'Project-led page briefs', detail: 'Specify where genuine project photographs, material descriptions, actual coverage, and estimate steps belong. Identify the business information needed before publishing cost, permit, or boundary-related claims.' },
      { title: 'Estimate and sales tracking', detail: 'Connect qualified requests to scheduled site visits, estimates issued, and accepted jobs where the contractor’s records allow it. Keep residential and commercial inquiries distinguishable.' },
    ],
    publicExample: {
      business: 'Long Fence',
      sources: [
        { label: 'Residential fencing overview', url: 'https://www.longfence.com/residential/fence/' },
        { label: 'Fence repair page', url: 'https://www.longfence.com/repair/' },
      ],
      observations: [
        { observed: 'The residential overview links to separate material pages.', application: 'Use a service overview to help visitors compare relevant options, then link to a material page with its own useful content.' },
        { observed: 'Repair information is published on a separate page.', application: 'A repair request has a different starting question from a new installation. Check that both can reach the right estimate process.' },
        { observed: 'The residential estimate form includes location details and a comments field.', application: 'Define which details qualify an inquiry and which belong in a later site assessment. Test the handoff with the contractor’s team.' },
      ],
    },
    brief: {
      title: 'Wood fence installation page brief',
      path: '/fencing/wood-fence-installation',
      task: 'Help a homeowner evaluate the contractor’s relevant work and understand how to request an installation estimate.',
      headings: ['Wood fence work the company actually offers', 'Styles and site considerations supplied by the contractor', 'Genuine local project examples', 'Site visit, estimate, and installation process', 'Request a fencing estimate'],
      evidence: ['Approved project photographs with accurate descriptions', 'Actual materials, finishes, and work accepted', 'The business’s process for confirming site conditions and estimate scope'],
      acceptance: ['Installation and repair routes are distinguishable.', 'Material and coverage information matches the contractor’s actual operation.', 'Price, permit, boundary, and project claims have an identified business source.'],
    },
    measurement: [
      { stage: 'Estimate request', record: 'A successful form submission or answered estimate call.', meaning: 'An inquiry, before service-area and job-fit checks.' },
      { stage: 'Qualified project', record: 'A request matched to the contractor’s material, project type, and operating area.', meaning: 'An opportunity the business can quote.' },
      { stage: 'Site visit booked', record: 'A confirmed assessment in the business’s scheduling records.', meaning: 'A scheduled estimate step.' },
      { stage: 'Estimate accepted', record: 'Accepted work linked to a qualified inquiry where records permit.', meaning: 'A sales outcome distinct from form volume.' },
    ],
    measurementNote: 'Count unique projects, not repeated calls about the same fence. Compare installation, replacement, and repair requests separately before drawing conclusions about lead quality.',
  },
  {
    slug: 'seo-for-orthodontists',
    journeyTitle: 'Make the route from treatment research to consultation clear',
    journeys: [
      { search: 'orthodontist [city]', destination: 'Practice and location information with the orthodontist’s credentials and actual appointment route.', nextStep: 'A consultation request at the correct practice.' },
      { search: 'braces consultation [city]', destination: 'A practice-approved braces page explaining the consultation process.', nextStep: 'A relevant braces consultation inquiry.' },
      { search: 'clear aligner consultation [city]', destination: 'A clear-aligner page that separates general information from individual clinical assessment.', nextStep: 'An assessment request without a suitability promise.' },
      { search: 'orthodontic payment options', destination: 'A practice-approved explanation of available payment information and its conditions.', nextStep: 'An informed conversation with the practice team.' },
    ],
    packages: [
      { title: 'Practice and treatment-page review', detail: 'Review practice locations, clinician information, treatment-page purposes, consultation routes, and Business Profile details. Distinguish orthodontic consultations from unrelated general-dentistry inquiries.' },
      { title: 'Consultation-focused content briefs', detail: 'Prepare outlines for the services actually offered, identify missing patient questions, and connect approved clinician, location, and payment information. The practice approves clinical and financial statements.' },
      { title: 'Booking-quality measurement', detail: 'Agree how aggregate consultation requests, confirmed bookings, and attended appointments can be reviewed. Keep appointment outcomes separate from rankings and avoid putting patient health information into analytics events.' },
    ],
    publicExample: {
      business: 'Diamond Braces',
      sources: [
        { label: 'Clear-aligner treatment page', url: 'https://www.diamondbraces.com/pages/invisalign-treatment' },
        { label: 'Virtual consultation page', url: 'https://www.diamondbraces.com/pages/free-virtual-consultation' },
        { label: 'Payment-information page', url: 'https://www.diamondbraces.com/pages/dental-financing' },
      ],
      observations: [
        { observed: 'The practice publishes a dedicated clear-aligner treatment page.', application: 'Keep a treatment explanation focused on the patient’s question and connect it to a relevant consultation route.' },
        { observed: 'Virtual consultations have their own explanation and route.', application: 'If the practice offers different consultation modes, describe the actual options rather than promising a service it does not provide.' },
        { observed: 'Payment information is available on a separate page.', application: 'Link approved cost and payment explanations where they help the consultation decision. Keep eligibility conditions under the practice’s control.' },
      ],
    },
    brief: {
      title: 'Clear-aligner consultation page brief',
      path: '/treatments/clear-aligner-consultation',
      task: 'Explain the practice’s consultation process and help a prospective patient reach the right team for an individual assessment.',
      headings: ['Clear-aligner consultations at the practice', 'What the consultation involves', 'The treating orthodontist and practice location', 'Approved payment information and conditions', 'Request a consultation'],
      evidence: ['Practice-approved clinician names and qualifications', 'Accurate location, hours, and appointment process', 'Approved treatment, payment, image, and consent information'],
      acceptance: ['The page describes the practice’s actual service and assessment process.', 'No individual treatment suitability or outcome is promised.', 'The inquiry route works without exposing health information in analytics.'],
    },
    measurement: [
      { stage: 'Consultation request', record: 'A successful appointment inquiry through a confirmed contact route.', meaning: 'Interest, not yet a booked appointment.' },
      { stage: 'Relevant consultation', record: 'An inquiry matched to the treatment inquiry and the practice location.', meaning: 'A request the team can review.' },
      { stage: 'Consultation booked', record: 'A confirmed booking from aggregate scheduling records.', meaning: 'A scheduled appointment.' },
      { stage: 'Consultation attended', record: 'An aggregate attendance count supplied by the practice where available.', meaning: 'A completed appointment, not a treatment-outcome claim.' },
    ],
    measurementNote: 'Use aggregate appointment counts and a consistent reporting period. The practice retains clinical records; reporting should distinguish consultations from general questions, cancellations, and repeat contacts.',
  },
];

export function getPriorityServiceContent(slug: string) {
  return PRIORITY_SERVICE_CONTENT.find(item => item.slug === slug);
}
