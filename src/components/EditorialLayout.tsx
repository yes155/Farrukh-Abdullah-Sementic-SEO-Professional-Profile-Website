import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import JsonLd from './JsonLd';
import { getBreadcrumbSchema } from '@/lib/schemas';
import { getPageUpdated, displayDate } from '@/lib/contentMetadata';

type EditorialProps = {
  title: string; intro: string; path: string; parent?: { name: string; url: string }; children: ReactNode;
  attributes?: string[]; overview?: { title: string; items: string[] }; action?: { label: string; href: string };
};
export default function EditorialLayout({ title, intro, path, parent, children, attributes, overview, action }: EditorialProps) {
  const updated = getPageUpdated(path);
  const crumbs = [{ name: 'Home', url: '/' }, ...(parent ? [parent] : []), { name: title, url: path }];
  return <div className="site-shell py-10 md:py-16">
    <JsonLd id="page-breadcrumb" data={getBreadcrumbSchema(crumbs)} />
    <header className={`pb-10 md:pb-14 mb-10 md:mb-14 border-b border-neutral-200 ${overview ? 'grid lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start' : ''}`}>
      <div>
        {parent && <Link href={parent.url} className="inline-block text-sm text-cyan-800 hover:underline underline-offset-4 mb-5">{parent.name}</Link>}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] text-black max-w-4xl">{title}</h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed mt-6">{intro}</p>
        {attributes?.length ? <ul aria-label="Service details" className="flex flex-wrap gap-2 mt-6">{attributes.map(item => <li key={item} className="text-xs font-medium px-3 py-2 border border-neutral-200 bg-neutral-50 text-neutral-700">{item}</li>)}</ul> : null}
        {action && <Link href={action.href} className="inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-black border border-black px-5 py-3 font-semibold text-sm mt-7">{action.label}<ArrowRight size={16} aria-hidden="true" /></Link>}
        <p className="text-xs text-neutral-500 mt-6">By <Link href="/about" className="underline underline-offset-4">Farrukh Abdullah</Link> · Updated <time dateTime={updated}>{displayDate(updated)}</time></p>
      </div>
      {overview && <aside className="border border-black bg-neutral-50 p-6 md:p-8 shadow-[4px_4px_0px_#00d3f2]" aria-label={overview.title}>
        <h2 className="text-lg font-semibold mb-5">{overview.title}</h2>
        <ol className="divide-y divide-neutral-200">{overview.items.map((item, i) => <li key={item} className="flex gap-3 py-4 first:pt-0 last:pb-0 text-sm leading-relaxed text-neutral-700"><span className="font-mono text-cyan-800 shrink-0">0{i + 1}</span><span>{item}</span></li>)}</ol>
      </aside>}
    </header>
    <div className="space-y-10 md:space-y-14">{children}</div>
  </div>;
}
export function ContentSection({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return <section id={id} className={`content-section space-y-5${id ? ' scroll-mt-28' : ''}`}>
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">{title}</h2>
    <div className="text-base text-neutral-700 leading-[1.8] space-y-4">{children}</div>
  </section>;
}
export function ContactAction({ text = 'Discuss your website' }: { text?: string }) {
  return <section className="bg-neutral-950 text-white p-7 md:p-10 grid md:grid-cols-[minmax(0,1fr)_auto] gap-7 items-center">
    <div><h2 className="text-2xl md:text-3xl font-bold tracking-tight">{text}</h2><p className="text-base text-neutral-300 leading-relaxed mt-4 max-w-2xl">Tell me about your business, your customers, and what you want to improve. We’ll identify a useful starting point.</p></div>
    <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-4 font-semibold text-sm">Discuss your project<ArrowRight size={16} aria-hidden="true" /></Link>
  </section>;
}
