import type { Metadata } from "next";
import CoreServicePage from "@/components/CoreServicePage";
import {CORE_SERVICES} from "@/lib/serviceContent";
const service=CORE_SERVICES.find(s=>s.slug==="semantic-seo")!;
export const metadata:Metadata={title:service.title,description:service.intro,alternates:{canonical:"/services/semantic-seo"}};
export default function Page(){return <CoreServicePage slug="semantic-seo" />;}
