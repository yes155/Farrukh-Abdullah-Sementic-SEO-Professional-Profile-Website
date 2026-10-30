import Link from 'next/link';
import type { Niche } from '@/lib/localNiches';
import { getPriorityServiceContent } from '@/lib/priorityServiceContent';
import { getServiceSchema } from '@/lib/schemas';
import EditorialLayout, { ContentSection } from './EditorialLayout';
import IndustryWorkExample from './IndustryWorkExample';
import JsonLd from './JsonLd';
import PageQuestions from './PageQuestions';
import { ElectricianSeoAudit, ElectricianKeywordMethod, ElectricianSeoScope } from './ElectricianSeoDetails';
import ElectricianBreakEven from './ElectricianBreakEven';
import ElectricianInquiry from './ElectricianInquiry';
import styles from './ElectricianLanding.module.css';

const path = '/services/seo-for-electricians';

export default function ElectricianLandingPage({ niche }: { niche: Niche }) {
  const content = getPriorityServiceContent(niche.slug)!;
  return <div className={styles.page}>
    <EditorialLayout title={niche.headline}
      intro="I help electrical contractors improve local visibility, build clearer service pages, and measure qualified inquiries for emergency calls, panel upgrades, EV installations, and commercial work."
      path={path} parent={{ name: 'Local SEO services', url: '/services/local-seo' }}
      attributes={['Business Profile review', 'Service-page planning', 'Inquiry measurement']}
      overview={{ title: 'Your project, in brief', items: ['Confirm electrical services and actual coverage', 'Map urgent, planned, and commercial work to useful pages', 'Record relevant inquiries and booked jobs'] }}
      action={{ label: 'Discuss your electrician website', href: '#electrician-inquiry' }}>
      <JsonLd id="industry-service-schema" data={getServiceSchema(path, niche.headline, niche.intro)} />
      <nav aria-label="Electrician SEO page sections" className="flex flex-wrap gap-x-6 gap-y-3 border-b border-neutral-200 pb-5 text-sm">
        <a className="underline text-cyan-800" href="#electrician-services">Work and example</a>
        <a className="underline text-cyan-800" href="#electrician-seo-keywords">Keyword method</a>
        <a className="underline text-cyan-800" href="#electrician-seo-cost">Scope and cost</a>
        <a className="underline text-cyan-800" href="#electrician-seo-break-even">Break-even calculator</a>
      </nav>
      <section id="electrician-services" className="scroll-mt-28 space-y-5">
        <h2 className="section-title">What electrician SEO work includes</h2>
        <p className="text-base text-neutral-700 leading-relaxed">Your scope connects accurate business information, distinct service pages, technical access, and inquiry measurement to the electrical jobs your team accepts.</p>
        <IndustryWorkExample content={content} sampleId="electrician-sample-audit" reviewed="22 October 2026" />
        <ContentSection title="Illustrative EV charger page structure">
          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6 items-start">
            <figure className={styles.wireframe} aria-labelledby="electrician-wireframe-caption">
          <div className={styles.wireframeBar}><span>Proposed service-page structure</span><span aria-hidden="true">● ● ●</span></div>
          <div className={styles.wireframeBody}>
            <div className={styles.wireframeHero}><span className={styles.wireframeMarker}>1</span><p>EV charger installation</p><span>Actual service area · Assessment process</span><div className={styles.mockAction}>Request an assessment <span aria-hidden="true">↗</span></div></div>
            <div className={styles.wireframeRow}><span className={styles.wireframeMarker}>2</span><div><strong>What happens next?</strong><p>Property details → assessment → estimate</p></div></div>
            <div className={styles.wireframeRow}><span className={styles.wireframeMarker}>3</span><div><strong>Evidence for the decision</strong><p>Genuine projects · Verified qualifications</p></div></div>
            <div className={styles.wireframeRow}><span className={styles.wireframeMarker}>4</span><div><strong>Can the team serve this property?</strong><p>Area + service requested + contact route</p></div></div>
          </div>
          <figcaption id="electrician-wireframe-caption">Original illustrative wireframe. Service and technical details require contractor approval.</figcaption>
        </figure>
            <p>The numbered sections connect the service, the assessment process, project evidence, and coverage to a relevant inquiry. This is a proposed structure for a contractor to review, not a client result or a claim about search rankings.</p>
          </div>
        </ContentSection>
      </section>
      <ContentSection title="Agree the scope before work begins">
        <p>We review the website, Business Profile, services, actual coverage, and contact process. The proposal identifies priorities, required access, owners, and fees before implementation.</p>
        <p><Link href="/tools/seo-project-planner" className="underline text-cyan-800">Prepare your project brief</Link> or <Link href="/tools/local-seo-audit-workbook" className="underline text-cyan-800">try the manual local SEO audit workbook</Link>.</p>
      </ContentSection>
      <ElectricianKeywordMethod />
      <details className="border border-neutral-300 p-5 md:p-6"><summary className="cursor-pointer font-semibold text-black">Explore the full electrician SEO audit checklist</summary><div className="pt-5"><ElectricianSeoAudit /></div></details>
      <ElectricianSeoScope />
      <ContentSection id="electrician-seo-break-even" title="When does electrician SEO break even?">
        <p>Estimate the additional completed and paid jobs needed to cover campaign cost. Use contribution after direct delivery costs and amounts from the same comparison period.</p>
        <ElectricianBreakEven />
        <details className="text-sm border-t border-neutral-200 pt-4"><summary className="font-semibold cursor-pointer">Worked example and calculation assumptions</summary><div className="space-y-3 pt-3"><p><strong>Illustrative business example:</strong> $1,500 campaign cost ÷ ($1,000 collected revenue − $600 direct job cost) = 3.75, rounded up to 4 additional paid jobs. Four jobs contribute $1,600, leaving $100 after campaign cost, before fixed overhead and tax.</p><p>The sample amounts are hypothetical, not my fees or a client result. The calculator estimates a cost threshold, not future inquiries, revenue, or the time required. Consider seasonality, capacity, repeat customers, and other channels when assessing whether work is additional.</p></div></details>
      </ContentSection>
      <ContentSection title="Related project experience">
        <p><Link href={niche.relatedCaseStudyPath} className="underline text-cyan-800">{niche.relatedCaseStudyName}</Link> describes work across a service-business portfolio. It covers multiple industries and is not presented as a verified electrician client result.</p>
        <p><Link href="/evidence" className="underline text-cyan-800">Inspect the project evidence and implementation records</Link> · <a href="https://support.google.com/business/answer/7091?hl=en" className="underline text-cyan-800">Google’s local ranking guidance</a></p>
      </ContentSection>
      <PageQuestions title="Electrician SEO questions, answered" items={[...niche.faqs, ...niche.keywords.map(item => ({ q: item.question, a: item.answer }))]} />
      <ContentSection title="Working remotely"><p>I work from Faisalabad, Pakistan, with businesses in their actual customer markets. We agree communication, access, and implementation responsibilities in the proposal.</p></ContentSection>
      <ContentSection title="Related services and resources"><p><Link href="/services/local-seo" className="underline text-cyan-800">Local SEO consulting</Link> · <Link href="/insights/local-entity-seo-ai-search" className="underline text-cyan-800">Supporting method</Link> · <Link href="/services/seo-for-fence-contractors" className="underline text-cyan-800">Fence contractor SEO</Link></p></ContentSection>
      <section id="electrician-inquiry" className="scroll-mt-28 border border-neutral-300 bg-neutral-50 p-5 md:p-8">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-6 lg:gap-8 items-start">
          <div className="space-y-4"><h2 className="section-title">Discuss your electrician website</h2><p className="text-base leading-relaxed text-neutral-700">Share your site, service area, and the work you want more inquiries for. I’ll review the context so we can discuss a useful scope and a proposed fee.</p><p className="text-sm text-neutral-600">Prefer direct contact? <a href="mailto:f.abdullah79@gmail.com" className="underline text-cyan-800">Email me</a> or <a href="https://wa.me/923346536393" className="underline text-cyan-800">message on WhatsApp</a>.</p></div>
          <ElectricianInquiry />
        </div>
      </section>
    </EditorialLayout>
  </div>;
}
