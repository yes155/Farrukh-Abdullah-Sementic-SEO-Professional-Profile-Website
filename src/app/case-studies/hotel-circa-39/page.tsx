import type { Metadata } from "next";
import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseContent } from "@/lib/caseContent";
const study=getCaseContent("hotel-circa-39")!;
export const metadata: Metadata = { title: study.title, description: study.summary, alternates: { canonical: "/case-studies/hotel-circa-39" } };
export default function Page(){ return <CaseStudyPage slug="hotel-circa-39" />; }
