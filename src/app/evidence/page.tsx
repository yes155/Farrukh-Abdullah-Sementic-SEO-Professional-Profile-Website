import type { Metadata } from 'next';
import Link from 'next/link';
import EditorialLayout, { ContentSection, ContactAction } from '@/components/EditorialLayout';
import Certifications from '@/components/Certifications';
import PublicWorkCards from '@/components/PublicWorkCards';
import JsonLd from '@/components/JsonLd';
import { getPublicWorkSchema } from '@/lib/publicWork';
import { getCaseContent } from '@/lib/caseContent';

export const metadata: Metadata = {
  title: 'Work, Evidence & Public References',
  description: 'Explore Farrukh Abdullah’s selected SEO projects, client feedback, research deposit, authored writing, implementation records, and practical resources.',
  alternates: { canonical: '/evidence' },
};

const selectedCases = ['armadillo-coffee-roasters', 'swag-pro', 'windcave'];
const sections = [
  ['case-evidence', 'Selected projects'],
  ['public-review', 'Client feedback'],
  ['research-and-writing', 'Research and public work'],
  ['original-resources', 'Practical resources'],
  ['credentials', 'Training'],
  ['profiles', 'Profiles and references'],
];

export default function Page() {
  return <>
    <JsonLd id="schema-public-work" data={getPublicWorkSchema()} />
    <EditorialLayout
      compact
      title="Work, evidence, and public references"
      intro="Explore selected project work, client feedback, authored publications, and practical SEO resources."
      path="/evidence"
      parent={{ name: 'About Farrukh', url: '/about' }}
      headerAside={<nav aria-label="Evidence sections" className="border border-neutral-300 bg-neutral-50 p-5 lg:p-6">
        <h2 className="text-lg font-semibold text-black mb-4">Browse the evidence</h2>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">{sections.map(([id,label]) => <li key={id}><a href={'#'+id} className="underline underline-offset-4 text-cyan-800">{label}</a></li>)}</ul>
      </nav>}
    >
      <ContentSection compact id="case-evidence" title="Selected projects and client feedback">
        <p>See the business problem, work delivered, and reported outcomes in each account. Campaign dates and underlying analytics exports are not currently published with these cases.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedCases.map((slug,index) => { const study=getCaseContent(slug)!; return <article key={slug} className={`min-w-0 border border-neutral-300 p-5 flex flex-col ${index===2?'md:col-span-2 lg:col-span-1':''}`}>
            <p className="text-sm text-cyan-800 mb-2">{study.industry}</p>
            <h3 className="text-xl font-semibold text-black">{study.name}</h3>
            <p className="text-base text-neutral-700 mt-3 mb-4">{study.summary}</p>
            <Link href={'/case-studies/'+slug} aria-label={'Read the '+study.name+' case study'} className="mt-auto text-sm font-semibold underline text-cyan-800">Read the case study</Link>
          </article>; })}
        </div>
        <p className="text-sm"><Link href="/case-studies" className="font-semibold underline text-cyan-800">View all nine case studies</Link></p>
        <article id="public-review" className="scroll-mt-28 border-l-4 border-cyan-500 bg-cyan-50 p-5 md:p-6 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-4 lg:gap-6">
          <div><p className="text-sm text-cyan-800 font-semibold mb-2">Client feedback on Clutch</p><h3 className="text-xl font-semibold text-black">Market research for Cookie Digital</h3><p className="text-sm text-neutral-600 mt-3">Published August 3, 2026</p></div>
          <div className="space-y-3"><p>Client-submitted feedback on demand, pricing, and seasonal research for an Etsy consulting firm, including communication and reporting. This review covers that market-research engagement.</p><a href="https://clutch.co/profile/farrukh-abdullah-geo-semantic-seo-consultant" className="inline-block text-sm font-semibold underline text-cyan-800">Read the review and engagement context</a><p className="text-sm text-neutral-600">Source checked October 28, 2026. Clutch maintains the review; the profile’s service description is provider-supplied.</p></div>
        </article>
      </ContentSection>

      <ContentSection compact id="research-and-writing" title="Research, writing, and public work">
        <PublicWorkCards compact implementationLinks />
        <p className="text-sm text-neutral-600">Publication context: <a href="https://api.datacite.org/dois/10.5281/zenodo.23701870" className="underline text-cyan-800">DataCite’s DOI record</a> identifies the Zenodo deposit’s author and issue date; DOI registration does not establish peer review. The Connectively credit is an authored contribution.</p>
      </ContentSection>

      <ContentSection compact id="original-resources" title="Practical resources you can use">
        <div className="grid md:grid-cols-2 gap-4">
          <article className="min-w-0 border border-neutral-300 p-5 space-y-3"><h3 className="text-xl font-semibold text-black">Local SEO audit workbook</h3><p>Record evidence, findings, and next actions across 16 checks for profiles, service pages, technical access, and measurement. This is a manual workbook.</p><Link href="/tools/local-seo-audit-workbook" className="inline-block text-sm font-semibold underline text-cyan-800">Use the free audit workbook</Link></article>
          <article id="ai-measurement" className="min-w-0 scroll-mt-28 border border-neutral-300 p-5 space-y-3"><h3 className="text-xl font-semibold text-black">AI-search observation template</h3><p>Track ten starter questions with the engine, date, context, cited URLs, and answer accuracy. Record referrals and qualified inquiries separately.</p><a href="/resources/ai-search-observation-template.csv" download className="inline-block text-sm font-semibold underline text-cyan-800">Download the observation template (CSV)</a><p className="text-sm text-neutral-600">A blank recording method, without claimed citation results or a visibility score.</p>
            <details className="border-t border-neutral-200 pt-3"><summary className="cursor-pointer text-sm font-semibold text-cyan-800">How to record comparable observations</summary><div className="space-y-3 mt-3 text-sm"><ol className="list-decimal pl-5 space-y-2"><li>Adapt the eight unbranded and two branded questions before establishing a baseline, then keep the questions consistent.</li><li>Record the engine, product, date, country, language, search mode, and session context. Retain a response reference.</li><li>Separate mentions from linked citations, check source support, and report repeat runs and sample size.</li><li>Assess referrals and qualified inquiries in separate analytics and business records over stated date ranges.</li></ol><p>Reference points: <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" className="underline text-cyan-800">Google</a>, <a href="https://developers.openai.com/api/docs/bots" className="underline text-cyan-800">OpenAI</a>, and <a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers" className="underline text-cyan-800">Perplexity</a>.</p><Link href="/services/ai-seo-consulting" className="inline-block underline text-cyan-800">AI-search consulting scope</Link></div></details>
          </article>
        </div>
      </ContentSection>

      <Certifications compact />

      <ContentSection compact id="profiles" title="Profiles and supporting references">
        <dl className="grid md:grid-cols-2 gap-4">
          <div className="border-t border-neutral-300 pt-4"><dt className="font-semibold text-black">Professional identity</dt><dd className="mt-2 text-sm"><a href="https://www.linkedin.com/in/farrukh-abdullah-5a218424/" className="underline text-cyan-800">LinkedIn</a> · <a href="https://orcid.org/0009-0001-9570-3897" className="underline text-cyan-800">ORCID</a> · <a href="https://www.wikidata.org/wiki/Q141886354" className="underline text-cyan-800">Wikidata</a></dd></div>
          <div className="border-t border-neutral-300 pt-4"><dt className="font-semibold text-black">Company listings and client feedback</dt><dd className="mt-2 text-sm"><a href="https://techbehemoths.com/company/farrukh-abdullah-advisory" className="underline text-cyan-800">TechBehemoths company profile</a> · <a href="https://clutch.co/profile/farrukh-abdullah-geo-semantic-seo-consultant" className="underline text-cyan-800">Clutch profile and review</a></dd></div>
        </dl>
        <p id="resource-curation" className="text-sm text-neutral-600 scroll-mt-28">I maintain the <a href="https://github.com/yes155/awesome-geo-seo" className="underline text-cyan-800">GEO and SEO resource collection</a> and submitted it through <a href="https://github.com/serpapi/awesome-seo-tools/pull/534" className="underline text-cyan-800">SerpApi pull request #534</a>. Checked October 29, 2026: open and unmerged. This is a submitted contribution; follow the pull request for its current status.</p>
        <details id="source-types" className="scroll-mt-28 border border-neutral-300 p-4"><summary className="cursor-pointer text-sm font-semibold text-cyan-800">About these sources</summary><div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-neutral-600"><p><strong className="text-neutral-900">Project accounts and reviews.</strong> Read the work, attribution, and evidence notes for the specific engagement.</p><p><strong className="text-neutral-900">Publications and implementation records.</strong> Authored work and inspectable code show an approach; they do not independently establish client performance.</p><p><strong className="text-neutral-900">Profiles and training.</strong> These supply identity or study information. A listing, identifier, or credential is not an endorsement of every project claim.</p><p><strong className="text-neutral-900">Corrections.</strong> Use the <Link href="/contact" className="underline text-cyan-800">contact page</Link> with the page URL, disputed statement, and a supporting source.</p></div></details>
      </ContentSection>

      <ContactAction />
    </EditorialLayout>
  </>;
}
