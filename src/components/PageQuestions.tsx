import JsonLd from './JsonLd';
export type PageQuestion = { q: string; a: string };
export default function PageQuestions({ items, title = 'Questions about the work' }: { items: PageQuestion[]; title?: string }) {
  return <section className="page-questions space-y-6">
    <h2 className="section-title">{title}</h2>
    <JsonLd id="page-questions" data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }} />
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">{items.map(item => <details key={item.q} className="group py-5">
      <summary className="cursor-pointer font-semibold text-base text-black leading-relaxed pr-6">{item.q}</summary>
      <p className="mt-4 text-base text-neutral-700 leading-relaxed max-w-3xl">{item.a}</p>
    </details>)}</div>
  </section>;
}
