import Link from 'next/link';
import { PUBLIC_WORK } from '@/lib/publicWork';
import { displayDate } from '@/lib/contentMetadata';

export default function PublicWorkCards({ compact = false, implementationLinks = false }: { compact?: boolean; implementationLinks?: boolean }) {
  return <div className={compact ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-4' : 'grid md:grid-cols-2 xl:grid-cols-3 gap-6'}>
    {PUBLIC_WORK.map(work => <article key={work.id} className={`min-w-0 border border-neutral-300 bg-white flex flex-col ${compact ? 'p-5' : 'p-6 md:p-7'}${compact && work.id === 'implementation' ? ' md:col-span-2 lg:col-span-1' : ''}`}>
      <p className={`text-xs font-mono uppercase tracking-wider text-cyan-800 ${compact ? 'mb-3' : 'mb-4'}`}>{work.kind}</p>
      <h3 className="text-lg font-semibold text-black leading-snug">{work.title}</h3>
      {'date' in work && <p className={`text-sm ${compact ? 'text-neutral-600 mt-3' : 'text-neutral-500 mt-4'}`}>Farrukh Abdullah · <time dateTime={work.date}>{displayDate(work.date)}</time> · {work.publisher}</p>}
      <p className={`text-base text-neutral-700 leading-relaxed ${compact ? 'mt-3 mb-4' : 'mt-4 mb-5'}`}>{work.summary}</p>
      {'doi' in work && <p className={compact ? 'text-sm text-neutral-600 break-all mb-4' : 'text-xs text-neutral-500 break-all mb-5'}>DOI: {work.doi}</p>}
      <a href={work.url} className="mt-auto inline-block text-sm font-semibold underline underline-offset-4 text-cyan-800">{work.action}</a>
      {implementationLinks && work.id === 'implementation' && <div id="implementation" className="scroll-mt-28 border-t border-neutral-200 pt-3 mt-3 text-sm space-y-2">
        <p className="text-neutral-600">Inspect specific changes:</p>
        <ul className="space-y-2">
          <li><a href={work.url+'/pull/9'} className="underline text-cyan-800">Electrician page implementation</a></li>
          <li><a href={work.url+'/pull/12'} className="underline text-cyan-800">Sitewide identity graph</a></li>
          <li><a href={work.url+'/actions'} className="underline text-cyan-800">Automated checks</a> · <Link href="/services/seo-for-electricians" className="underline text-cyan-800">Live page</Link></li>
        </ul>
      </div>}
    </article>)}
  </div>;
}
