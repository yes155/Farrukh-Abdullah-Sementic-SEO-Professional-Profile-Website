import type { Metadata } from "next";
import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseContent } from "@/lib/caseContent";
const study=getCaseContent("simulithic")!;
export const metadata: Metadata = { title: study.title, description: study.summary, alternates: { canonical: "/case-studies/simulithic" } };
export default function Page(){ return <CaseStudyPage slug="simulithic" />; }
