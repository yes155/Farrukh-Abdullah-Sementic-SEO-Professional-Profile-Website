import { ContentSection } from './EditorialLayout';
import styles from './ElectricianLanding.module.css';

const auditChecks = [
  { check: 'Search access and indexing', record: 'Important page status codes, indexing directives, canonical URLs, and available Search Console inspection evidence. Record confirmed barriers and affected URLs.' },
  { check: 'Business Profile accuracy', record: 'Eligibility, business name, categories, hours, contact details, and actual operating coverage checked against the contractor’s records.' },
  { check: 'Service and availability information', record: 'Services accepted, emergency contact availability, and coverage statements that need confirmation or correction.' },
  { check: 'Distinct service-page purposes', record: 'Which pages answer urgent repairs, planned upgrades, installations, or commercial work; where explanations overlap or a useful service is missing.' },
  { check: 'Project and credential evidence', record: 'Genuine project descriptions, approved photographs, and substantiated qualifications that help a customer assess the business.' },
  { check: 'Internal links and page usability', record: 'Crawlable routes from the service overview and relevant projects, clear headings, mobile usability, and observed loading problems.' },
  { check: 'Contact routes', record: 'Phone links, form behaviour, service-area qualification, and handoff to the right team. Agree any test submissions with the business first.' },
  { check: 'Inquiry measurement', record: 'Available records for form submissions, answered calls, qualified inquiries, appointments, and completed work; identify reporting gaps and owners.' },
];

const engagementTypes = [
  { scope: 'Initial SEO audit', includes: 'A review of agreed pages, profiles, search data, and contact routes, followed by a prioritized action list.', drivers: 'Number of pages and profiles, access available, and depth of technical or market review.' },
  { scope: 'Implementation project', includes: 'The agreed corrections, page briefs, content changes, internal links, and measurement setup, with acceptance checks.', drivers: 'Backlog size, website complexity, evidence or writing needed, and work assigned to your team.' },
  { scope: 'Ongoing support', includes: 'Agreed reporting, query and inquiry review, and a defined allowance for further improvements.', drivers: 'Reporting depth, implementation capacity, service coverage, and the review frequency in the proposal.' },
];

export function ElectricianSeoAudit() {
  return <ContentSection id="electrician-seo-audit" title="Electrician SEO audit checklist">
    <p>The audit connects each finding to evidence and a next action. We agree the pages, profiles, and access in scope before the review.</p>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm md:text-base">
        <thead><tr><th scope="col" className="border border-neutral-300 bg-neutral-50 p-4 text-left font-semibold text-black">Check</th><th scope="col" className="border border-neutral-300 bg-neutral-50 p-4 text-left font-semibold text-black">What I record</th></tr></thead>
        <tbody>{auditChecks.map(item => <tr key={item.check}><th scope="row" className="min-w-44 border border-neutral-300 p-4 text-left align-top font-medium text-black">{item.check}</th><td className="border border-neutral-300 p-4 align-top">{item.record}</td></tr>)}</tbody>
      </table>
    </div>
    <p>You receive an action list with the affected page or profile, the observed issue, its supporting evidence, priority, implementation owner, and acceptance check.</p>
    <p className="text-sm">Review references: <a className="underline text-cyan-800" href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide">Google’s SEO Starter Guide</a> and <a className="underline text-cyan-800" href="https://support.google.com/business/answer/7091?hl=en">local ranking guidance</a>.</p>
  </ContentSection>;
}

export function ElectricianKeywordMethod() {
  return <ContentSection id="electrician-seo-keywords" title="How I choose SEO keywords for electricians">
    <ol className="list-decimal pl-6 space-y-4">
      <li><strong className="text-black">Start with accepted work.</strong> Confirm residential and commercial services, planned installations, urgent work, capacity, and the customer areas the team can serve.</li>
      <li><strong className="text-black">Use actual search and inquiry evidence.</strong> Review available Search Console queries, customer questions, and dated keyword research for the target market. Record geography, device, and intent alongside estimated volume.</li>
      <li><strong className="text-black">Group searches by the customer’s task.</strong> Close wording variants can share a page. Repair and planned-installation searches may need different explanations and contact routes. Review the ranking pages to understand the question each search represents.</li>
      <li><strong className="text-black">Prioritize useful, deliverable improvements.</strong> Match the opportunity to an existing page where possible. Weigh relevant inquiries, job fit, current visibility, available evidence, and implementation effort alongside search demand.</li>
    </ol>
    <p>The output is a keyword-to-page map with page purpose, supporting questions, evidence needed, internal links, and the next action. The customer-search examples above illustrate that map; final choices follow your business review.</p>
  </ContentSection>;
}

export function ElectricianSeoScope() {
  return <ContentSection id="electrician-seo-cost" title="Electrician SEO cost: compare the scope first">
    <p>An audit, an implementation project, and ongoing support involve different work. I prepare a written quote after reviewing your website, service coverage, priorities, and who will carry out the changes.</p>
    <div className={styles.scopeGrid}>{engagementTypes.map((item, index) => <section key={item.scope} className={styles.scopeCard}>
      <span className={styles.stepNumber}>0{index + 1}</span><h3>{item.scope}</h3><p>{item.includes}</p><div><h4>What changes the fee</h4><p>{item.drivers}</p></div>
    </section>)}</div>
    <p>The proposal identifies the fee, included pages and profiles, deliverables, required access, approval responsibilities, reporting period, and any separate writing, development, or tool costs. We agree how additional work will be priced.</p>
  </ContentSection>;
}
