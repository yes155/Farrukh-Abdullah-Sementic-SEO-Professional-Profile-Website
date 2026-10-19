import type {Metadata} from "next";
import CaseStudiesIndexClient from "./CaseStudiesIndexClient";
export const metadata:Metadata={title:"SEO case studies",description:"Explore SEO projects with Farrukh Abdullah: client challenges, local search and content work, and outcomes described in client feedback.",alternates:{canonical:"/case-studies"}};
export default function Page(){return <CaseStudiesIndexClient/>;}
