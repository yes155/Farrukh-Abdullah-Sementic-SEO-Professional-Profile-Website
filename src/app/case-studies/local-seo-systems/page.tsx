import type { Metadata } from "next";
import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseContent } from "@/lib/caseContent";
const study=getCaseContent("local-seo-systems")!;
export const metadata: Metadata = { title: study.title, description: "Reported SEO engagement, work description, outcomes, and evidence limits for "+study.name+".", alternates: { canonical: "/case-studies/local-seo-systems" } };
export default function Page(){ return <CaseStudyPage slug="local-seo-systems" />; }
