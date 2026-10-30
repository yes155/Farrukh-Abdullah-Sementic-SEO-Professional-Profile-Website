"use client";
import { PageFrame, PageHeader } from '@/components/PageFrame';

import Scheduler from "@/components/Scheduler";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schemas";

export default function ContactPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" }
  ]);

  return (
    <PageFrame>
      <JsonLd id="schema-breadcrumb-contact" data={breadcrumbs} />

      <PageHeader title="Discuss your SEO project" eyebrow="Project inquiry"
        intro="Share your website, customers, and main goal. We’ll discuss a useful starting point, the work involved, and how to assess progress."
        attributes={['Written scope', 'Remote delivery', 'Direct collaboration']} />

      <div>
        <Scheduler />
      </div>
    </PageFrame>
  );
}
