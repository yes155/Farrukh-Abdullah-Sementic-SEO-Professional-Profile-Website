import type { Metadata } from "next";
import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseContent } from "@/lib/caseContent";
const study=getCaseContent("swag-pro")!;
export const metadata: Metadata = { title: study.title, description: "Reported SEO engagement, work description, outcomes, and evidence limits for "+study.name+".", alternates: { canonical: "/case-studies/swag-pro" } };
export default function Page(){ return <CaseStudyPage slug="swag-pro" />; }
