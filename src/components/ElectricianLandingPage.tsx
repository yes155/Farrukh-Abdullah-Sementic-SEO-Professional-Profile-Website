import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, FileText, Wrench, BarChart3, Check, ArrowUpRight } from 'lucide-react';
import type { Niche } from '@/lib/localNiches';
import { getPriorityServiceContent } from '@/lib/priorityServiceContent';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schemas';
import { getPageUpdated, displayDate } from '@/lib/contentMetadata';
import JsonLd from './JsonLd';
import PageQuestions from './PageQuestions';
import { ElectricianSeoAudit, ElectricianKeywordMethod, ElectricianSeoScope } from './ElectricianSeoDetails';
import ElectricianBreakEven from './ElectricianBreakEven';
import ElectricianInquiry from './ElectricianInquiry';
import styles from './ElectricianLanding.module.css';

const path = '/services/seo-for-electricians';
const services = [
  { icon: MapPin, label: '01 / Local visibility', title: 'Make your business information work together', detail: 'Review your Business Profile, categories, hours, coverage, and relevant listings against the way your electrical business operates.', output: 'Profile corrections and a service-area action list.' },
  { icon: FileText, label: '02 / Service pages', title: 'Give each important job a clear route', detail: 'Plan useful pages for emergency work, panel upgrades, EV charger installation, and commercial services you actually offer.', output: 'A keyword-to-page map and prioritized page briefs.' },
  { icon: Wrench, label: '03 / Technical fixes', title: 'Remove barriers to discovery and contact', detail: 'Check indexing, overlapping pages, internal links, mobile usability, and the steps between a search visit and an inquiry.', output: 'An implementation backlog with owners and acceptance checks.' },
  { icon: BarChart3, label: '04 / Measurement', title: 'Understand which inquiries fit your business', detail: 'Agree how to distinguish phone clicks, relevant calls, assessments, and completed work using records your team can supply.', output: 'A reporting plan tied to service, coverage, and job quality.' },
];
const steps = [
  { title: 'Review & prioritize', text: 'Confirm your services, coverage, website access, and baseline. Agree the problems worth fixing first.', output: 'Prioritized audit and written scope.' },
  { title: 'Build & connect', text: 'Implement the agreed corrections, improve service pages, and connect relevant project evidence and contact routes.', output: 'Completed changes checked against the brief.' },
  { title: 'Measure & refine', text: 'Review query visibility and qualified inquiries. Use available job records to decide what to improve next.', output: 'A progress review and the next agreed actions.' },
];

export default function ElectricianLandingPage({ niche }: { niche: Niche }) {
  const content = getPriorityServiceContent(niche.slug)!;
  const updated = getPageUpdated(path);
  return <div className={styles.page}>
    <JsonLd id="page-breadcrumb" data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Local SEO services', url: '/services/local-seo' }, { name: niche.headline, url: path }])} />
    <JsonLd id="industry-service-schema" data={getServiceSchema(path, niche.headline, niche.intro)} />
    <header className={styles.hero}>
      <div className={styles.container}>
        <Link href="/services/local-seo" className={styles.breadcrumb}>Local SEO services <span aria-hidden="true">/</span> Electrical contractors</Link>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.eyebrow}>Independent consultant. Practical implementation.</p>
            <h1>{niche.headline}</h1>
            <p className={styles.heroStatement}>Be found for the work<br className={styles.desktopBreak} /> you want to take on.</p>
            <p className={styles.heroIntro}>I help electrical contractors improve local visibility, build clearer service pages, and measure qualified inquiries for emergency calls, panel upgrades, EV installations, and commercial work.</p>
            <div className={styles.actions}><a href="#electrician-inquiry" className={styles.primaryButton}>Discuss my electrician website <ArrowUpRight size={18} aria-hidden="true" /></a><a href="#electrician-sample-audit" className={styles.heroSecondary}>View a sample audit <ArrowRight size={16} aria-hidden="true" /></a></div>
            <ul className={styles.heroChecks}><li><Check size={16} aria-hidden="true" /> Written scope</li><li><Check size={16} aria-hidden="true" /> Direct collaboration</li><li><Check size={16} aria-hidden="true" /> Remote delivery</li></ul>
          </div>
          <aside className={styles.auditPreview} aria-label="Illustrative SEO review deliverable">
            <div className={styles.previewTop}><span className={styles.eyebrow}>Inside the review</span><span className={styles.sampleBadge}>Sample deliverable</span></div>
            <h2>A clear route from<br />search to inquiry.</h2>
            <p>Find the gaps. Assign the work. Check what changed.</p>
            <ol className={styles.previewList}>
              <li><span>01</span><div><strong>Match the customer’s search</strong><p>EV charger installation [city]</p></div></li>
              <li><span>02</span><div><strong>Build a useful service page</strong><p>Coverage, assessment, evidence, next step</p></div></li>
              <li><span>03</span><div><strong>Qualify the inquiry</strong><p>Service requested + area + assessment</p></div></li>
            </ol>
            <div className={styles.previewBottom}><FileText size={20} aria-hidden="true" /><p>Your action list includes evidence, priority, an owner, and an acceptance check.</p></div>
          </aside>
        </div>
        <div className={styles.heroMeta}>By <Link href="/about">Farrukh Abdullah</Link><span aria-hidden="true">·</span> Updated <time dateTime={updated}>{displayDate(updated)}</time></div>
      </div>
    </header>

    <div className={styles.trustBand}>
      <div className={`${styles.container} ${styles.trustGrid}`}>
        <div className={styles.author}><Image src="/farrukh-photo-final.jpg" alt="Farrukh Abdullah" width={64} height={64} className={styles.portrait} /><div><strong>Work directly with Farrukh Abdullah</strong><p>Independent SEO consultant · Faisalabad, Pakistan</p><Link href="/about">Meet your consultant <ArrowUpRight size={14} aria-hidden="true" /></Link></div></div>
        <div className={styles.experience}><span className={styles.eyebrow}>Related project experience</span><Link href="/case-studies/local-seo-systems">Local lead-generation portfolio <ArrowUpRight size={17} aria-hidden="true" /></Link><p>Profiles, service pages, listings, and inquiry tracking across service businesses. The portfolio covers multiple industries.</p></div>
      </div>
    </div>

    <nav className={`${styles.container} ${styles.sectionNav}`} aria-label="Electrician SEO page sections">
      {[['electrician-services', 'Services'], ['electrician-sample-audit', 'Sample audit'], ['electrician-seo-keywords', 'Keywords'], ['electrician-seo-cost', 'Scope & cost'], ['electrician-seo-break-even', 'Break-even calculator']].map(([id, label]) => <a key={id} href={`#${id}`}>{label}<span aria-hidden="true">↗</span></a>)}
    </nav>

    <section id="electrician-services" className={`${styles.container} ${styles.section}`}>
      <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>What I work on</p><h2>Local SEO for electricians,<br />with tangible deliverables.</h2></div><p>My SEO for electrical contractors connects profiles, service pages, technical fixes, and inquiry measurement. We choose tasks around your services, market, and capacity.</p></div>
      <div className={styles.serviceGrid}>{services.map(({ icon: Icon, label, title, detail, output }) => <section key={label} className={styles.serviceCard}><div className={styles.cardTop}><span className={styles.eyebrow}>{label}</span><Icon size={24} aria-hidden="true" /></div><h3>{title}</h3><p>{detail}</p><div className={styles.cardOutput}><strong>You receive</strong><p>{output}</p></div></section>)}</div>
      <p className={styles.referenceNote}>For map-pack visibility, relevance, distance, and prominence matter. Accurate coverage supports a useful profile; adding city names does not create a new location. <a href="https://support.google.com/business/answer/7091?hl=en">Google’s local ranking guidance <span aria-hidden="true">↗</span></a></p>
    </section>

    <section className={`${styles.journeySection} ${styles.section}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Start with the customer’s job</p><h2>{content.journeyTitle}</h2></div><p>These are illustrative searches. The final page map follows research into your market and the work your team accepts.</p></div>
        <div className={styles.journeyGrid}>{content.journeys.map((item, index) => <section key={item.search} className={styles.journeyCard}><span className={styles.stepNumber}>0{index + 1}</span><h3>{item.search}</h3><p>{item.destination}</p><div><ArrowRight size={17} aria-hidden="true" /><span>{item.nextStep}</span></div></section>)}</div>
      </div>
    </section>

    <section id="electrician-sample-audit" className={`${styles.container} ${styles.section}`}>
      <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>See the thinking behind the work</p><h2>Public-site walkthrough: Mr. Electric</h2></div><p className={styles.exampleLabel}>Independent public example · Reviewed 22 October 2026 · Not a client case study</p></div>
      <p className={styles.readable}>The public EV charger page illustrates three useful decisions. Below, I connect each observation to an action I would consider for an electrical contractor’s site.</p>
      <div className={styles.observationGrid}>{content.publicExample.observations.map((item, index) => <section key={item.observed} className={styles.observation}><span className={styles.annotation}>0{index + 1}</span><h3>{['One service, one purpose', 'Separate urgent and planned work', 'Qualify by location'][index]}</h3><p><strong>Observed:</strong> {item.observed}</p><p><strong>My recommendation:</strong> {item.application}</p></section>)}</div>
      <div className={styles.sourceNote}><p>Public content and contact paths only; no access to the business’s analytics or performance data. The layout below is my proposed outline, not a reproduction of its website.</p><a href={content.publicExample.sources[0].url}>View the source page <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      <div className={styles.briefGrid}>
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
        <div className={styles.briefCopy}><p className={styles.eyebrow}>Sample deliverable</p><h3>{content.brief.title}</h3><p>{content.brief.task}</p><p className={styles.small}>Illustrative URL on your business website:<br /><code>{content.brief.path}</code></p><h4>What the brief specifies</h4><ol className={styles.checkList}>{content.brief.headings.map(item => <li key={item}>{item}</li>)}</ol><details className={styles.briefDetails}><summary>Evidence and acceptance checks</summary><h4>Evidence to collect</h4><ul>{content.brief.evidence.map(item => <li key={item}>{item}</li>)}</ul><h4>Acceptance checks before publication</h4><ul>{content.brief.acceptance.map(item => <li key={item}>{item}</li>)}</ul></details></div>
      </div>
    </section>

    <section className={`${styles.processSection} ${styles.section}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>How we work together</p><h2>A practical sequence.<br />A written scope at each step.</h2></div><p>The proposal sets timing, access, responsibilities, and fees. Implementation milestones describe the work; search performance is reviewed separately.</p></div>
        <ol className={styles.processGrid}>{steps.map((step, index) => <li key={step.title}><span className={styles.stepNumber}>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p><strong>{step.output}</strong></li>)}</ol>
        <a href="#electrician-inquiry" className={styles.primaryButton}>Talk through your priorities <ArrowUpRight size={18} aria-hidden="true" /></a>
      </div>
    </section>

    <div className={`${styles.container} ${styles.section} ${styles.supportingDetails}`}>
      <section className="border border-neutral-300 bg-cyan-50 p-6 md:p-8"><h2>Try the review method on your own site</h2><p className="mt-4">Use the <Link href="/tools/local-seo-audit-workbook" className="underline text-cyan-800">free local SEO audit workbook</Link> to record findings and evidence, then export an action list. Choose the electrical contractor context.</p><p className="mt-4 text-sm"><Link href="/evidence" className="underline text-cyan-800">Inspect the implementation records and project evidence</Link>.</p></section>
      <ElectricianKeywordMethod />
      <details className={styles.auditDetails}><summary>Explore the full electrician SEO audit checklist <span aria-hidden="true">+</span></summary><ElectricianSeoAudit /></details>
      <ElectricianSeoScope />
    </div>

    <section id="electrician-seo-break-even" className={`${styles.calculatorSection} ${styles.section}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Put the scope in business terms</p><h2>When does electrician SEO break even?</h2></div><p>Estimate the additional completed and paid jobs needed to cover campaign cost. Use contribution after direct delivery costs.</p></div>
        <ElectricianBreakEven />
        <details className={styles.calculatorNotes}><summary>Worked example and calculation assumptions</summary><p><strong>Illustrative business example:</strong> $1,500 campaign cost ÷ ($1,000 collected revenue − $600 direct job cost) = 3.75, rounded up to 4 additional paid jobs. Four jobs contribute $1,600, leaving $100 after campaign cost, before fixed overhead and tax.</p><p>The sample amounts are hypothetical, not my fees or a client result. The calculator estimates a cost threshold, not future inquiries, revenue, or the time required. Use the same period for spending and contribution; consider seasonality, capacity, repeat customers, and other channels when assessing whether work is additional.</p></details>
      </div>
    </section>

    <section className={`${styles.container} ${styles.section}`}>
      <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Measurement that follows the work</p><h2>Measure inquiries and booking outcomes</h2></div><p>Rankings help explain discovery. Your team’s records help establish whether inquiries became relevant work.</p></div>
      <ol className={styles.measurement}>{content.measurement.map((item, index) => <li key={item.stage}><span className={styles.stepNumber}>0{index + 1}</span><h3>{item.stage}</h3><p>{item.record}</p><span className={styles.small}>{item.meaning}</span></li>)}</ol>
      <p className={styles.referenceNote}>{content.measurementNote}</p>
    </section>

    <div className={`${styles.container} ${styles.faqSection}`}><PageQuestions title="Electrician SEO questions, answered" items={[...niche.faqs, ...niche.keywords.map(item => ({ q: item.question, a: item.answer }))]} /></div>

    <section id="electrician-inquiry" className={`${styles.inquirySection} ${styles.section}`}>
      <div className={`${styles.container} ${styles.inquiryGrid}`}>
        <div><p className={styles.eyebrow}>Your next step</p><h2>Let’s look at your<br />electrician website.</h2><p>Share your site, service area, and the work you want more inquiries for. I’ll review the context so we can discuss a useful scope and a proposed fee.</p><h3>What we’ll discuss</h3><ul className={styles.inquiryChecks}><li><Check size={18} aria-hidden="true" /> Your services, coverage, and priorities</li><li><Check size={18} aria-hidden="true" /> The pages and profiles worth reviewing</li><li><Check size={18} aria-hidden="true" /> Deliverables, access, responsibilities, and fees</li></ul><div className={styles.directContact}><p>Prefer to contact me directly?</p><a href="mailto:f.abdullah79@gmail.com">f.abdullah79@gmail.com <ArrowUpRight size={16} aria-hidden="true" /></a><a href="https://wa.me/923346536393">Message on WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a></div><p className={styles.small}>Working remotely from Faisalabad, Pakistan. Communication and implementation arrangements are agreed in the proposal.</p></div>
        <ElectricianInquiry />
      </div>
    </section>
    <aside className={`${styles.container} ${styles.relatedLinks}`} aria-label="Related services and resources"><Link href="/services/local-seo">Local SEO consulting</Link><Link href="/case-studies/local-seo-systems">Related project experience</Link><Link href="/insights/local-entity-seo-ai-search">Supporting implementation guide</Link><Link href="/tools/seo-project-planner">Free project planner</Link></aside>
  </div>;
}
