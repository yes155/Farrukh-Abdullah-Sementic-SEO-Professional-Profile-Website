import { PUBLIC_WORK } from '@/lib/publicWork';
import { displayDate } from '@/lib/contentMetadata';

export default function PublicWorkCards() {
  return <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
    {PUBLIC_WORK.map(work => <article key={work.id} className="min-w-0 border border-neutral-300 bg-white p-6 md:p-7 flex flex-col">
      <p className="text-xs font-mono uppercase tracking-wider text-cyan-800 mb-4">{work.kind}</p>
      <h3 className="text-lg font-semibold text-black leading-snug">{work.title}</h3>
      {'date' in work && <p className="text-sm text-neutral-500 mt-4">Farrukh Abdullah · <time dateTime={work.date}>{displayDate(work.date)}</time> · {work.publisher}</p>}
      <p className="text-base text-neutral-700 leading-relaxed mt-4 mb-5">{work.summary}</p>
      {'doi' in work && <p className="text-xs text-neutral-500 break-all mb-5">DOI: {work.doi}</p>}
      <a href={work.url} className="mt-auto inline-block text-sm font-semibold underline underline-offset-4 text-cyan-800">{work.action}</a>
    </article>)}
  </div>;
}
