import type { Metadata } from "next";
import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseContent } from "@/lib/caseContent";
const study=getCaseContent("armadillo-coffee-roasters")!;
export const metadata: Metadata = { title: study.title, description: "Reported SEO engagement, work description, outcomes, and evidence limits for "+study.name+".", alternates: { canonical: "/case-studies/armadillo-coffee-roasters" } };
export default function Page(){ return <CaseStudyPage slug="armadillo-coffee-roasters" />; }
