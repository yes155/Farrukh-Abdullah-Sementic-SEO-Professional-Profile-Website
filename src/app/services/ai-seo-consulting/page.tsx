import type { Metadata } from "next";
import CoreServicePage from "@/components/CoreServicePage";
import {CORE_SERVICES} from "@/lib/serviceContent";
const service=CORE_SERVICES.find(s=>s.slug==="ai-seo-consulting")!;
export const metadata:Metadata={title:service.title,description:service.intro,alternates:{canonical:"/services/ai-seo-consulting"}};
export default function Page(){return <CoreServicePage slug="ai-seo-consulting" />;}
