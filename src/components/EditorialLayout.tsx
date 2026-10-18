import type { ReactNode } from "react";
import Link from "next/link";
import JsonLd from "./JsonLd";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { EDITORIAL_UPDATED, displayDate } from "@/lib/contentMetadata";

export default function EditorialLayout({ title, intro, path, parent, children }: { title: string; intro: string; path: string; parent?: { name: string; url: string }; children: ReactNode }) {
  const crumbs = [{ name: "Home", url: "/" }, ...(parent ? [parent] : []), { name: title, url: path }];
  return <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
    <JsonLd id="page-breadcrumb" data={getBreadcrumbSchema(crumbs)} />
    <header className="border-b-2 border-black pb-8 space-y-4">
      {parent && <Link href={parent.url} className="text-xs font-mono uppercase underline">{parent.name}</Link>}
      <h1 className="text-3xl md:text-5xl font-black tracking-tight text-black">{title}</h1>
      <p className="text-base md:text-lg text-neutral-700 max-w-3xl leading-relaxed">{intro}</p>
      <p className="text-xs text-neutral-500">By <Link href="/about" className="underline">Farrukh Abdullah</Link> · Updated <time dateTime={EDITORIAL_UPDATED}>{displayDate(EDITORIAL_UPDATED)}</time></p>
    </header>
    {children}
  </div>;
}

export function ContentSection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="border-2 border-black p-6 md:p-8 bg-white space-y-4 shadow-[3px_3px_0px_black]">
    <h2 className="text-xl md:text-2xl font-bold text-black">{title}</h2>
    <div className="text-sm md:text-base text-neutral-700 leading-relaxed space-y-4">{children}</div>
  </section>;
}

export function ContactAction({ text = "Discuss your website" }: { text?: string }) {
  return <section className="border-2 border-black p-6 md:p-8 bg-neutral-50 space-y-4">
    <h2 className="text-xl font-bold">{text}</h2>
    <p className="text-sm text-neutral-700">Share your website, target customers, and the outcome you want to improve. I’ll review the scope before proposing work.</p>
    <Link href="/contact" className="inline-block bg-cyan-400 border-2 border-black px-5 py-3 font-bold text-sm">Request a consultation</Link>
  </section>;
}
