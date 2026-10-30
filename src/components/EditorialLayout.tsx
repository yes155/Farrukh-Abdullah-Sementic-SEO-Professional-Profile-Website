import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import JsonLd from './JsonLd';
import { PageFrame, PageHeader, PagePanel } from './PageFrame';
import { getBreadcrumbSchema } from '@/lib/schemas';
import { getPageUpdated, displayDate } from '@/lib/contentMetadata';

type EditorialProps = {
  title: string; intro: string; path: string; parent?: { name: string; url: string }; children: ReactNode;
  attributes?: string[]; overview?: { title: string; items: string[] }; action?: { label: string; href: string };
  compact?: boolean; headerAside?: ReactNode;
};
export default function EditorialLayout({ title, intro, path, parent, children, attributes, overview, action, headerAside }: EditorialProps) {
  const updated = getPageUpdated(path);
  const crumbs = [{ name: 'Home', url: '/' }, ...(parent ? [parent] : []), { name: title, url: path }];
  return <PageFrame>
    <JsonLd id="page-breadcrumb" data={getBreadcrumbSchema(crumbs)} />
    <PageHeader title={title} intro={intro} parent={parent} attributes={attributes} action={action}
      metadata={<>By <Link href="/about" className="underline underline-offset-4">Farrukh Abdullah</Link> · Updated <time dateTime={updated}>{displayDate(updated)}</time></>}
      aside={headerAside ?? (overview && <PagePanel title={overview.title}><ol className="divide-y divide-neutral-200">{overview.items.map((item, i) => <li key={item} className="flex gap-3 py-3 first:pt-0 last:pb-0 text-sm leading-relaxed text-neutral-700"><span className="font-mono text-cyan-800 shrink-0">0{i + 1}</span><span>{item}</span></li>)}</ol></PagePanel>)} />
    {children}
  </PageFrame>;
}
export function ContentSection({ title, children, id }: { title: string; children: ReactNode; id?: string; compact?: boolean }) {
  return <section id={id} className="content-section space-y-4">
    <h2 className="section-title">{title}</h2>
    <div className="text-base text-neutral-700 leading-relaxed space-y-3">{children}</div>
  </section>;
}
export function ContactAction({ text = 'Discuss your website' }: { text?: string }) {
  return <section className="contact-action">
    <div><h2 className="section-title">{text}</h2><p className="text-base text-neutral-300 leading-relaxed mt-3 max-w-2xl">Tell me about your business, your customers, and what you want to improve. We’ll identify a useful starting point.</p></div>
    <Link href="/contact" className="site-button">Discuss your project<ArrowRight size={16} aria-hidden="true" /></Link>
  </section>;
}
