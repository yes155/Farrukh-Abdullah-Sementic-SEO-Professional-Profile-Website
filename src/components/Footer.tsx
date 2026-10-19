import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
export default function Footer() {
  const groups = [
    { title: 'Explore', links: [['About Farrukh', '/about'], ['Case studies', '/case-studies'], ['Insights', '/insights'], ['Project planner', '/tools/seo-project-planner']] },
    { title: 'SEO services', links: [['Semantic SEO', '/services/semantic-seo'], ['Local SEO', '/services/local-seo'], ['AI SEO consulting', '/services/ai-seo-consulting'], ['Services by industry', '/services'], ['Remote service areas', '/locations']] },
  ];
  return <footer className="border-t border-black bg-white">
    <div className="site-shell py-12 md:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] gap-9 lg:gap-10">
        <div><Link href="/" className="inline-flex items-center gap-3"><span className="bg-black text-white w-10 h-10 flex items-center justify-center font-bold">FA</span><span className="font-semibold">Farrukh Abdullah</span></Link><p className="mt-5 text-sm leading-relaxed text-neutral-600 max-w-xs">Independent SEO consulting: content, local discovery, and practical implementation.</p><p className="mt-4 text-sm text-neutral-500">Faisalabad, Pakistan<br />Working remotely</p></div>
        {groups.map(group => <nav key={group.title} aria-label={`Footer ${group.title}`}><h2 className="text-sm font-semibold mb-5">{group.title}</h2><ul className="space-y-3">{group.links.map(([label, href]) => <li key={href}><Link href={href} className="text-sm text-neutral-600 hover:text-black hover:underline underline-offset-4">{label}</Link></li>)}</ul></nav>)}
        <div><h2 className="text-sm font-semibold mb-5">Get in touch</h2><ul className="space-y-3 text-sm text-neutral-600"><li><a href="mailto:f.abdullah79@gmail.com" className="hover:underline break-all">f.abdullah79@gmail.com</a></li><li><a href="https://wa.me/923346536393" className="hover:underline">WhatsApp: +92 334 6536393</a></li><li><a href="https://www.linkedin.com/in/farrukh-abdullah-5a218424/" className="hover:underline">LinkedIn profile</a></li><li><Link href="/contact" className="text-cyan-800 font-semibold hover:underline">Discuss your project</Link></li></ul><p className="text-xs text-neutral-500 mt-5">09:00–18:00 PKT · UTC+5</p></div>
      </div>
      <div className="border-t border-neutral-200 mt-10 pt-7 flex flex-wrap items-center justify-between gap-5 text-xs text-neutral-500"><p>© 2026 Farrukh Abdullah. All rights reserved.</p><div className="flex flex-wrap gap-5"><Link href="/privacy" className="hover:underline">Privacy policy</Link><Link href="/terms" className="hover:underline">Terms of advisory</Link><a href="#top" className="inline-flex gap-2 items-center hover:underline">Back to top<ArrowUp size={14} aria-hidden="true" /></a></div></div>
    </div>
  </footer>;
}
