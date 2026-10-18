import type {Metadata} from "next";
import CaseStudiesIndexClient from "./CaseStudiesIndexClient";
export const metadata:Metadata={title:"SEO case studies and reported work",description:"Reported SEO engagements, attributed feedback, outcomes, and evidence limits. Read the work description and measurement context for each account.",alternates:{canonical:"/case-studies"}};
export default function Page(){return <CaseStudiesIndexClient/>;}
