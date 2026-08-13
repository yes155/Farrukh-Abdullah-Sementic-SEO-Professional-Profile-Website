import type { Metadata } from "next";
import ClientCaseStudyPageClient from "@/components/ClientCaseStudyPageClient";
import { getClientCaseStudyBySlug } from "@/lib/clientCaseStudies";

const study = getClientCaseStudyBySlug("swag-pro")!;

export const metadata: Metadata = {
  title: study.metaTitle,
  description: study.metaDescription,
  alternates: {
    canonical: `/case-studies/${study.slug}`,
  },
  openGraph: {
    title: study.metaTitle,
    description: study.metaDescription,
    url: `/case-studies/${study.slug}`,
  },
  twitter: {
    card: "summary_large_image",
    title: study.metaTitle,
    description: study.metaDescription,
  },
};

export default function Page() {
  return <ClientCaseStudyPageClient study={study} />;
}