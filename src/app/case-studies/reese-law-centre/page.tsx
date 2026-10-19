import type { Metadata } from "next";
import CaseStudyPage from "@/components/CaseStudyPage";
import { getCaseContent } from "@/lib/caseContent";
const study=getCaseContent("reese-law-centre")!;
export const metadata: Metadata = { title: study.title, description: study.summary, alternates: { canonical: "/case-studies/reese-law-centre" } };
export default function Page(){ return <CaseStudyPage slug="reese-law-centre" />; }
