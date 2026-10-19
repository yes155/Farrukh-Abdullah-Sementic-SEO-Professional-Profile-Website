"use client";

import Scheduler from "@/components/Scheduler";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schemas";

export default function ContactPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" }
  ]);

  return (
    <div className="pt-12 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <JsonLd id="schema-breadcrumb-contact" data={breadcrumbs} />

      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="text-[10px] font-mono tracking-widest text-cyan-600 font-bold block uppercase mb-2">
          Project inquiry
        </span>
        <h1 className="text-4xl md:text-5xl font-black font-sans text-black tracking-tight uppercase">
          Discuss your SEO project
        </h1>
        <p className="text-sm text-neutral-600 mt-3 font-semibold leading-relaxed">
          Share your website, customers, and main goal. We’ll discuss a useful starting point, the work involved, and how to assess progress.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Scheduler />
      </div>
    </div>
  );
}
