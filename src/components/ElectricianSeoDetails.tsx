import { ContentSection } from './EditorialLayout';

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

export function ElectricianSeoContents() {
  return <nav aria-label="Electrician SEO page sections" className="border-b border-neutral-200 pb-6">
    <p className="text-sm font-semibold text-black mb-3">On this page</p>
    <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-cyan-800">
      <li><a className="underline underline-offset-4" href="#electrician-seo-audit">Audit checklist</a></li>
      <li><a className="underline underline-offset-4" href="#electrician-seo-keywords">Keyword selection</a></li>
      <li><a className="underline underline-offset-4" href="#electrician-seo-cost">Scope and cost</a></li>
      <li><a className="underline underline-offset-4" href="#electrician-seo-break-even">Break-even example</a></li>
    </ul>
  </nav>;
}

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
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm md:text-base">
        <thead><tr>{['Engagement', 'Work to agree', 'What changes the fee'].map(label => <th scope="col" key={label} className="border border-neutral-300 bg-neutral-50 p-4 text-left align-top font-semibold text-black">{label}</th>)}</tr></thead>
        <tbody>{engagementTypes.map(item => <tr key={item.scope}><th scope="row" className="min-w-40 border border-neutral-300 p-4 text-left align-top font-medium text-black">{item.scope}</th><td className="border border-neutral-300 p-4 align-top">{item.includes}</td><td className="border border-neutral-300 p-4 align-top">{item.drivers}</td></tr>)}</tbody>
      </table>
    </div>
    <p>The proposal identifies the fee, included pages and profiles, deliverables, required access, approval responsibilities, reporting period, and any separate writing, development, or tool costs. We agree how additional work will be priced.</p>
  </ContentSection>;
}

export function ElectricianSeoBreakEven() {
  return <ContentSection id="electrician-seo-break-even" title="A worked example: when does electrician SEO break even?">
    <p>Use contribution from additional completed and paid jobs to assess campaign cost. Contribution here means collected job revenue minus the direct costs of delivering that job, before campaign cost, fixed overhead, and tax.</p>
    <div className="border border-neutral-300 bg-neutral-50 p-6 md:p-8 space-y-5">
      <p className="text-sm font-semibold text-cyan-800">Illustrative business example</p>
      <p>Suppose the agreed comparison period has $1,500 in total campaign costs. A completed job brings $1,000 in collected revenue and $600 in direct delivery costs, leaving $400 in contribution.</p>
      <dl className="grid md:grid-cols-2 gap-5">
        <div><dt className="font-semibold text-black">Contribution per completed job</dt><dd className="mt-2 font-mono text-sm text-black">$1,000 − $600 = $400</dd></div>
        <div><dt className="font-semibold text-black">Additional jobs needed to cover campaign cost</dt><dd className="mt-2 font-mono text-sm text-black">$1,500 ÷ $400 = 3.75 → 4 jobs</dd></div>
      </dl>
      <p>Four additional completed and paid jobs would contribute $1,600, leaving $100 after the $1,500 campaign cost, before fixed overhead and tax.</p>
      <p className="text-sm text-neutral-500">All amounts are hypothetical business inputs, not my fees or a client result. This example does not predict lead volume, job value, or the time needed to reach break-even.</p>
    </div>
    <p>For your review, use the same period for campaign costs and realized job contribution. Include agreed consulting, writing, development, and tracking costs. Compare against the baseline and account for seasonality, capacity, repeat customers, and other marketing channels; search attribution alone does not prove every job is additional.</p>
  </ContentSection>;
}
