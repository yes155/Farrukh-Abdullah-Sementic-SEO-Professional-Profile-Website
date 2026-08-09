import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { PERSON_SCHEMA, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from "@/lib/schemas";
import { SpeedInsights } from '@vercel/speed-insights/next';

const SITE_URL = "https://farrukh.top";
const SITE_TITLE = "Farrukh Abdullah | Semantic SEO & GEO Strategist";
const SITE_DESCRIPTION =
  "Semantic SEO specialist helping growing brands and local businesses get found — and cited — by Google, AI Overviews, ChatGPT Search, and Perplexity.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Farrukh Abdullah",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Farrukh Abdullah — Semantic SEO & GEO",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen font-sans selection:bg-cyan-400 selection:text-black flex flex-col">
        {/* Sitewide / Homepage Core JSON-LD Schemas */}
        <JsonLd id="schema-person" data={PERSON_SCHEMA} />
        <JsonLd id="schema-organization" data={ORGANIZATION_SCHEMA} />
        <JsonLd id="schema-website" data={WEBSITE_SCHEMA} />

        {/* Sticky Translucent Navbar with integrated Top Banner */}
        <Navbar />

        <main className="min-h-[60vh] flex-grow pt-20">
          {children}
        </main>

        {/* Compact Corporate Footer */}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
