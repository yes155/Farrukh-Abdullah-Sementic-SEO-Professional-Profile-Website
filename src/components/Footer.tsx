"use client";

import { Mail, Linkedin, ArrowUp } from "lucide-react";
import Link from "next/link";
import { STRATEGIST_NAME, STRATEGIST_TITLE } from "../data";

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t-2 border-black pt-16 pb-8 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Upper Grid: Branding */}
        <div className="border-b border-neutral-200 pb-12">
          {/* Brand Col */}
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black text-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                FA
              </div>
              <div>
                <span className="block text-sm font-black tracking-wider text-black uppercase">
                  {STRATEGIST_NAME}
                </span>
                <span className="block text-[10px] text-neutral-500 tracking-widest uppercase font-bold">
                  {STRATEGIST_TITLE}
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed font-sans font-medium">
              Helping growing businesses, small-to-mid-size B2B companies, and regional service brands establish broader SEO reach — engineering unbreakable topical authority and claiming AI search real estate.
            </p>
          </div>
        </div>

        {/* Lower Grid: Link Columns & Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-sans">
          {/* Business Details */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <span className="text-[9px] font-mono text-neutral-500 font-bold uppercase tracking-wider block">
              Business details
            </span>
            <div className="text-neutral-600 space-y-1 font-mono text-[11px] leading-relaxed font-semibold">
              <div>Farrukh Abdullah Advisory</div>
              <div>Faisalabad, Pakistan</div>
              <div>Global Remote Service</div>
            </div>
          </div>

          {/* Directory */}
          <div className="space-y-3">
            <span className="text-[9px] font-mono text-neutral-500 font-bold uppercase tracking-wider block">
              Pages
            </span>
            <ul className="space-y-1.5">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Case studies", path: "/case-studies" },
                { name: "Insights", path: "/insights" }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-neutral-600 hover:text-black transition-colors cursor-pointer uppercase tracking-tight text-[11px] font-black"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <span className="text-[9px] font-mono text-neutral-500 font-bold uppercase tracking-wider block">
              RESOURCES
            </span>
            <ul className="space-y-1.5 font-bold text-[11px] text-neutral-600 uppercase tracking-tight">
              <li>
                <a
                  href="https://www.linkedin.com/in/farrukh-abdullah-5a218424/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5 text-cyan-600" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:f.abdullah79@gmail.com"
                  className="hover:text-black transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Direct Email</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Core */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <span className="text-[9px] font-mono text-neutral-500 font-bold uppercase tracking-wider block">
              CONTACT
            </span>
            <div className="text-neutral-600 space-y-1 leading-relaxed">
              <a
                href="mailto:f.abdullah79@gmail.com"
                className="hover:text-black text-cyan-600 transition-colors block font-mono text-[11px] font-bold"
              >
                f.abdullah79@gmail.com
              </a>
              <a
                href="https://wa.me/923346536393"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black text-cyan-600 transition-colors block font-mono text-[11px] font-bold"
              >
                WhatsApp: +92 334 6536393
              </a>
              <span className="text-[10px] text-neutral-500 font-mono block font-bold">
                Office Hours: 09:00 - 18:00 PST
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line & triggers */}
        <div className="border-t border-neutral-200 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
          <div className="flex items-center gap-4">
            <span>© 2026 {STRATEGIST_NAME}. ALL RIGHTS RESERVED.</span>
            <span>•</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-black transition-colors">
              Terms of Advisory
            </a>
          </div>

          <button
            onClick={handleBackToTop}
            className="group flex items-center gap-1.5 text-neutral-500 hover:text-black transition-colors uppercase font-black cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
