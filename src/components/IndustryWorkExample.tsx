import type { PriorityServiceContent } from '@/lib/priorityServiceContent';
import { ContentSection } from './EditorialLayout';

export default function IndustryWorkExample({ content }: { content: PriorityServiceContent }) {
  return <>
    <ContentSection title={content.journeyTitle}>
      <p>These are illustrative searches by your customers. They show how I would organize the contractor or practice website; they are not search-volume or ranking claims.</p>
      <div className="overflow-x-auto"><table className="w-full border-collapse text-sm md:text-base"><thead><tr>{['Customer search example', 'Page purpose', 'Useful next step'].map(label => <th scope="col" key={label} className="text-left align-top border border-neutral-300 p-4 bg-neutral-50 font-semibold text-black">{label}</th>)}</tr></thead><tbody>{content.journeys.map(item => <tr key={item.search}><th scope="row" className="text-left align-top border border-neutral-300 p-4 font-medium text-black min-w-44">{item.search}</th><td className="border border-neutral-300 p-4 align-top">{item.destination}</td><td className="border border-neutral-300 p-4 align-top">{item.nextStep}</td></tr>)}</tbody></table></div>
    </ContentSection>
    <ContentSection title="What I would deliver for your business">
      <div className="grid md:grid-cols-3 gap-7">{content.packages.map((item, index) => <section key={item.title} className="border-t border-neutral-300 pt-5"><span className="text-sm font-mono text-cyan-800">0{index + 1}</span><h3 className="text-xl font-semibold text-black mt-3 mb-4">{item.title}</h3><p>{item.detail}</p></section>)}</div>
    </ContentSection>
    <ContentSection title={`Public-site walkthrough: ${content.publicExample.business}`}>
      <p className="text-sm text-neutral-500">Independent public example · Reviewed 19 October 2026 · Not a client case study</p>
      <div className="space-y-6">{content.publicExample.observations.map(item => <section key={item.observed} className="grid md:grid-cols-2 gap-4 md:gap-8 border-t border-neutral-200 pt-5"><div><h3 className="text-sm font-semibold text-black mb-2">Observed on the public site</h3><p>{item.observed}</p></div><div><h3 className="text-sm font-semibold text-black mb-2">How I would apply the idea</h3><p>{item.application}</p></div></section>)}</div>
      <p className="text-sm text-neutral-500">This walkthrough examines published content and contact paths. It does not establish search performance, conversion rates, or access to the business’s analytics.</p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">{content.publicExample.sources.map(source => <li key={source.url}><a href={source.url} className="underline underline-offset-4 text-cyan-800">{source.label}</a></li>)}</ul>
    </ContentSection>
    <ContentSection title="An example implementation brief">
      <div className="bg-neutral-50 border border-neutral-300 p-6 md:p-8 space-y-6">
        <div><p className="text-xs font-mono text-cyan-800 uppercase tracking-wider mb-3">Sample deliverable</p><h3 className="text-xl md:text-2xl font-semibold text-black">{content.brief.title}</h3><p className="mt-3 text-sm">Illustrative URL on your business website: <code className="break-all">{content.brief.path}</code></p></div>
        <p>{content.brief.task}</p>
        <div className="grid md:grid-cols-2 gap-7"><section><h4 className="text-base font-semibold text-black mb-4">Proposed page outline</h4><ol className="list-decimal pl-5 space-y-2">{content.brief.headings.map(item => <li key={item}>{item}</li>)}</ol></section><section><h4 className="text-base font-semibold text-black mb-4">Evidence to collect</h4><ul className="list-disc pl-5 space-y-2">{content.brief.evidence.map(item => <li key={item}>{item}</li>)}</ul></section></div>
        <section className="border-t border-neutral-300 pt-5"><h4 className="text-base font-semibold text-black mb-4">Acceptance checks before publication</h4><ul className="list-disc pl-5 space-y-2">{content.brief.acceptance.map(item => <li key={item}>{item}</li>)}</ul></section>
      </div>
    </ContentSection>
    <ContentSection title="Measure the inquiry journey, not just clicks">
      <div className="overflow-x-auto"><table className="w-full border-collapse text-sm md:text-base"><thead><tr>{['Stage', 'Record to use', 'What it tells us'].map(label => <th scope="col" key={label} className="text-left align-top border border-neutral-300 p-4 bg-neutral-50 font-semibold text-black">{label}</th>)}</tr></thead><tbody>{content.measurement.map(item => <tr key={item.stage}><th scope="row" className="text-left align-top border border-neutral-300 p-4 font-medium text-black min-w-36">{item.stage}</th><td className="border border-neutral-300 p-4 align-top">{item.record}</td><td className="border border-neutral-300 p-4 align-top">{item.meaning}</td></tr>)}</tbody></table></div>
      <p>{content.measurementNote}</p>
    </ContentSection>
  </>;
}
