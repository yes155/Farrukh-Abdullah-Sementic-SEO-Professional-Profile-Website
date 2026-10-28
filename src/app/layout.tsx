import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import IdentitySchema from "@/components/IdentitySchema";
import { WEBSITE_SCHEMA } from "@/lib/schemas";
import { Analytics } from '@vercel/analytics/next';

const SITE_URL = "https://farrukh.top";
const SITE_TITLE = "Farrukh Abdullah | Semantic SEO & GEO Strategist";
const SITE_DESCRIPTION =
  "Independent SEO consulting with Farrukh Abdullah: content planning, local business information, implementation, and search visibility measurement.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Farrukh Abdullah",
  },
  description: SITE_DESCRIPTION,
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
      <head>
        <IdentitySchema placement="head" />
      </head>
      <body id="top" className="bg-white text-black min-h-screen font-sans selection:bg-cyan-400 selection:text-black flex flex-col">
        {/* Sitewide / Homepage Core JSON-LD Schemas */}
        <IdentitySchema placement="body" />
        <JsonLd id="schema-website" data={WEBSITE_SCHEMA} />

        {/* Sticky Translucent Navbar with integrated Top Banner */}
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />

        <main id="main-content" tabIndex={-1} className="min-h-[60vh] flex-grow pt-20">
          {children}
        </main>

        {/* Compact Corporate Footer */}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
