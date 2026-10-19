import type { Metadata } from "next";
import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseContent } from "@/lib/caseContent";
const study=getCaseContent("south-seattle-womens-fitness")!;
export const metadata: Metadata = { title: study.title, description: study.summary, alternates: { canonical: "/case-studies/south-seattle-womens-fitness" } };
export default function Page(){ return <CaseStudyPage slug="south-seattle-womens-fitness" />; }
