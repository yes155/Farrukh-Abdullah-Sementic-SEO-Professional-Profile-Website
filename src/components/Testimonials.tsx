import Link from 'next/link';
import { TESTIMONIALS } from '@/data';
export default function Testimonials() {
  return <section className="site-shell py-12 md:py-16 border-t border-neutral-200"><h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-9">What clients say</h2><div className="grid md:grid-cols-3 gap-8">{TESTIMONIALS.slice(0, 3).map(item => <figure key={item.id} className="border-l-2 border-cyan-400 pl-6"><blockquote className="text-base text-neutral-700 leading-[1.8]">“{item.quote}”</blockquote><figcaption className="text-sm mt-5"><span className="font-semibold block">{item.name}</span><span className="text-neutral-500 block mt-1">{item.role}</span>{item.linkedCaseStudyPath && <Link href={item.linkedCaseStudyPath} className="inline-block underline underline-offset-4 text-cyan-800 mt-3">Read the case study</Link>}</figcaption></figure>)}</div></section>;
}
