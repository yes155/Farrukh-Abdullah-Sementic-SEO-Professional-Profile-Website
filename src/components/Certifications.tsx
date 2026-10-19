import { CERTIFICATIONS } from '@/data';
import { ArrowUpRight } from 'lucide-react';
export default function Certifications() {
  return <section className="site-shell py-12 md:py-16 border-t border-neutral-200"><h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Training and credentials</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{CERTIFICATIONS.map(cert => <article key={cert.id} className="border-t border-neutral-300 pt-5"><p className="text-sm text-neutral-500 mb-3">{cert.organization} · {cert.year}</p><h3 className="text-base font-semibold leading-relaxed">{cert.title}</h3>{cert.credentialUrl && <a href={cert.credentialUrl} className="inline-flex items-center gap-2 text-sm text-cyan-800 hover:underline mt-4">View credential<ArrowUpRight size={14} aria-hidden="true" /></a>}{cert.isSelfDirected && <p className="text-xs text-neutral-500 mt-4">Self-directed learning</p>}</article>)}</div></section>;
}
