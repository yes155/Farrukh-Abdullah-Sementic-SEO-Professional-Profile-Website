import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/** Shared visual grammar; page content and task-specific components stay independent. */
export function PageFrame({ children, as: Tag = 'div' }: { children: ReactNode; as?: 'div' | 'article' }) {
  return <Tag className="site-shell page-frame site-stack">{children}</Tag>;
}

export type PageHeaderProps = {
  title: string; intro?: string; eyebrow?: string; parent?: { name: string; url: string };
  attributes?: string[]; action?: { label: string; href: string }; aside?: ReactNode;
  metadata?: ReactNode; children?: ReactNode; portrait?: boolean;
};
export function PageHeader({ title, intro, eyebrow, parent, attributes, action, aside, metadata, children, portrait }: PageHeaderProps) {
  return <header className={`page-header${aside ? ' page-header-grid' : ''}${portrait ? ' page-header-portrait' : ''}`}>
    <div className="min-w-0">
      {parent && <Link href={parent.url} className="page-parent">{parent.name}</Link>}
      {eyebrow && <p className="site-eyebrow mb-3">{eyebrow}</p>}
      <h1 className="page-title">{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
      {attributes?.length ? <ul className="page-attributes" aria-label="Page details">{attributes.map(item => <li key={item}>{item}</li>)}</ul> : null}
      {action && <Link href={action.href} className="site-button mt-5">{action.label}<ArrowRight size={16} aria-hidden="true" /></Link>}
      {children}
      {metadata && <div className="page-meta">{metadata}</div>}
    </div>
    {aside}
  </header>;
}

export function PagePanel({ title, children }: { title: string; children: ReactNode }) {
  return <aside className="site-panel" aria-label={title}><h2 className="text-xl font-semibold mb-4">{title}</h2>{children}</aside>;
}

export function PageNavigation({ title = 'Explore this section', items }: { title?: string; items: { label: string; href: string }[] }) {
  return <PagePanel title={title}><nav aria-label={title}><ul className="divide-y divide-neutral-200">{items.map(item => <li key={item.href}><Link href={item.href} className="flex items-center justify-between gap-3 py-3 text-sm font-semibold text-cyan-800 underline-offset-4 hover:underline">{item.label}<ArrowRight size={15} aria-hidden="true" /></Link></li>)}</ul></nav></PagePanel>;
}
