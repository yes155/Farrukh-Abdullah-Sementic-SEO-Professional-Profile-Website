export const AUDIT_STATUSES = ['Not reviewed', 'Needs work', 'Checked', 'Not applicable'] as const;
export type AuditStatus = typeof AUDIT_STATUSES[number];
export const AUDIT_INDUSTRIES = {
  electricians: { name: 'Electrical contractor', service: '/services/seo-for-electricians', examples: 'Emergency calls, panel upgrades, and EV charger assessments.', evidence: 'Use contractor-approved services, coverage, qualifications, and project descriptions.' },
  fencing: { name: 'Fence contractor', service: '/services/seo-for-fence-contractors', examples: 'Material research, new installations, repairs, and estimate requests.', evidence: 'Use genuine material and installation examples, actual coverage, and the contractor’s estimate process.' },
  orthodontists: { name: 'Orthodontic practice', service: '/services/seo-for-orthodontists', examples: 'Treatment research, practice locations, and consultation requests.', evidence: 'Use practice-approved information. Keep patient information out of this workbook and analytics events.' },
} as const;
export type AuditIndustry = keyof typeof AUDIT_INDUSTRIES;
export type AuditEntry = { status: AuditStatus; evidence: string; notes: string; action: string };
export type AuditDraft = { version: 1; industry: AuditIndustry; website: string; reviewDate: string; entries: Record<string, AuditEntry> };
export const AUDIT_CHECKS = [
  { id: 'eligibility', group: 'Business profile', priority: 'Foundation', title: 'Confirm profile eligibility and ownership', review: 'Confirm the actual business model, profile ownership, and the access needed for the agreed review.', action: 'Resolve an eligibility or access question before proposing profile edits.', source: 'https://support.google.com/business/answer/3038177?hl=en' },
  { id: 'business-information', group: 'Business profile', priority: 'Foundation', title: 'Check business details against the business’s records', review: 'Review the business name, categories, hours, contact details, and linked website. Note the source of each correction.', action: 'Prepare a specific list of factual corrections for approval.', source: 'https://support.google.com/business/answer/7091?hl=en' },
  { id: 'coverage', group: 'Business profile', priority: 'Important', title: 'Describe the real operating area', review: 'Compare published service coverage and location statements with where the team actually works.', action: 'Correct unsupported locations and clarify the area accepted for inquiries.', source: 'https://support.google.com/business/answer/3038177?hl=en' },
  { id: 'review-process', group: 'Business profile', priority: 'Important', title: 'Review the customer feedback process', review: 'Check how genuine customers can leave feedback and how the business responds. Record observed gaps, not a guessed review target.', action: 'Agree an honest feedback and response process with the business.', source: 'https://support.google.com/business/answer/7091?hl=en' },
  { id: 'service-map', group: 'Service pages', priority: 'Important', title: 'Map accepted services to useful pages', review: 'List work actually offered. Separate customer tasks that need distinct explanations; combine close wording variants.', action: 'Record a page purpose, relevant customer question, and next action for each priority service.', source: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
  { id: 'decision', group: 'Service pages', priority: 'Important', title: 'Explain the customer’s next decision', review: 'Check whether the page explains coverage, assessment or consultation, and what happens after contact.', action: 'Fill the decision gap with information approved by the business.', source: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
  { id: 'evidence', group: 'Service pages', priority: 'Important', title: 'Connect relevant project and qualification evidence', review: 'Identify accurate project descriptions, approved photographs, and credentials that support the service being offered.', action: 'Request the missing source or approval before adding a claim.', source: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
  { id: 'overlap', group: 'Service pages', priority: 'Important', title: 'Check overlap between pages', review: 'Compare pages answering the same customer task. Record what each contributes before recommending consolidation.', action: 'Retain, improve, combine, or redirect only after reviewing page purpose and available search data.', source: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
  { id: 'access', group: 'Technical access', priority: 'Foundation', title: 'Confirm search access for priority URLs', review: 'Record status codes, indexing directives, canonical URLs, and available Search Console inspection evidence.', action: 'Document the affected URL and the confirmed access or indexing issue.', source: 'https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers' },
  { id: 'internal-links', group: 'Technical access', priority: 'Important', title: 'Connect service overviews, projects, and contact routes', review: 'Follow crawlable links from the main service overview to the relevant page and its next step.', action: 'Repair broken routes and add contextual links that help the visitor choose.', source: 'https://developers.google.com/search/docs/crawling-indexing/links-crawlable' },
  { id: 'mobile', group: 'Technical access', priority: 'Important', title: 'Inspect the mobile reading and contact experience', review: 'Check legibility, navigation, horizontal overflow, phone links, and form controls at an actual phone width.', action: 'Record the device width, affected control, and reproducible problem.', source: 'https://developers.google.com/search/docs/appearance/page-experience' },
  { id: 'form', group: 'Technical access', priority: 'Foundation', title: 'Verify the inquiry handoff', review: 'Check validation, delivery configuration, success and error feedback, and who receives the inquiry. Agree any test submission first.', action: 'Resolve a confirmed delivery or handoff problem before reporting forms as leads.', source: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
  { id: 'definitions', group: 'Measurement', priority: 'Measurement', title: 'Define a qualified inquiry', review: 'Agree service requested, coverage, job fit, and how duplicate inquiries will be handled.', action: 'Write the qualification rule and identify who can confirm it.', source: 'https://support.google.com/analytics/answer/9322688?hl=en' },
  { id: 'outcomes', group: 'Measurement', priority: 'Measurement', title: 'Separate interactions from completed outcomes', review: 'Distinguish phone clicks, answered calls, appointments, and completed work using records the team can supply.', action: 'Choose the available records and report each stage separately.', source: 'https://support.google.com/analytics/answer/9322688?hl=en' },
  { id: 'comparison', group: 'Measurement', priority: 'Measurement', title: 'Record a consistent comparison period', review: 'Note date range, market, device, page and query filters, brand treatment, and tracking changes where relevant.', action: 'Document a baseline and comparison that use the same definitions.', source: 'https://support.google.com/webmasters/answer/7576553?hl=en' },
  { id: 'ownership', group: 'Measurement', priority: 'Measurement', title: 'Assign the next action and its acceptance check', review: 'Give each agreed improvement an owner and an observable completion check. Separate implementation completion from later performance.', action: 'Prepare a prioritized action list with evidence and review responsibilities.', source: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
] as const;
export const emptyAuditEntry = (): AuditEntry => ({ status: 'Not reviewed', evidence: '', notes: '', action: '' });
export const createAuditDraft = (): AuditDraft => ({ version: 1, industry: 'electricians', website: '', reviewDate: '', entries: {} });
export function restoreAuditDraft(value: unknown): AuditDraft | null {
  if (!value || typeof value !== 'object') return null;
  const saved = value as Partial<AuditDraft>;
  if (saved.version !== 1 || typeof saved.industry !== 'string' || !Object.prototype.hasOwnProperty.call(AUDIT_INDUSTRIES,saved.industry) || !saved.entries || typeof saved.entries !== 'object') return null;
  const draft = createAuditDraft(); draft.industry = saved.industry;
  draft.website = typeof saved.website === 'string' ? saved.website.slice(0,400) : '';
  draft.reviewDate = typeof saved.reviewDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(saved.reviewDate) ? saved.reviewDate : '';
  for (const check of AUDIT_CHECKS) {
    const entry = saved.entries[check.id];
    if (!entry || typeof entry !== 'object') continue;
    draft.entries[check.id] = { status: AUDIT_STATUSES.includes(entry.status) ? entry.status : 'Not reviewed', evidence: typeof entry.evidence === 'string' ? entry.evidence.slice(0,1000) : '', notes: typeof entry.notes === 'string' ? entry.notes.slice(0,1500) : '', action: typeof entry.action === 'string' ? entry.action.slice(0,1500) : '' };
  }
  return draft;
}
// Spreadsheet apps must treat user-entered text as text, including formula prefixes.
function csvCell(value: string): string {
  const safe = /^[\s\u0000-\u001f]*[=+@-]/.test(value) ? "'" + value : value;
  return '"' + safe.replaceAll('"','""') + '"';
}
export function exportAuditCsv(draft: AuditDraft): string {
  const rows = [['Website','Review date','Business type','Area','Priority','Check','Status','Evidence URL or reference','Finding','Next action','Review guidance','Source']];
  for (const check of AUDIT_CHECKS) {
    const entry = draft.entries[check.id] || emptyAuditEntry();
    rows.push([draft.website,draft.reviewDate,AUDIT_INDUSTRIES[draft.industry].name,check.group,check.priority,check.title,entry.status,entry.evidence,entry.notes,entry.action,check.review,check.source]);
  }
  return '\ufeff' + rows.map(row => row.map(csvCell).join(',')).join('\r\n') + '\r\n';
}
