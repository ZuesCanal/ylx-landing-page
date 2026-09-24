import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.phylx.ai"),
  title: "Refrnce — Control Layer for Institutional Digital Assets",
  description:
    "Refrnce standardizes digital asset vault infrastructure into Sight, Flow, Trace, and Guard — a control layer institutions can safely allocate through.",
  icons: { icon: "/favicon.png" },
  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    url: "https://www.phylx.ai/",
    siteName: "Refrnce",
    title: "Refrnce — Control Layer for Institutional Digital Assets",
    description:
      "Turn your mandate into policy, evidence, approvals, and an audit trail — standardized ratings for digital assets across Sight, Flow, Trace, and Guard.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refrnce — Control Layer for Institutional Digital Assets",
    description:
      "Turn your mandate into policy, evidence, approvals, and an audit trail — standardized ratings for digital assets.",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Refrnce",
    url: "https://www.phylx.ai/",
    logo: "https://www.phylx.ai/refrnce-logo.png",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Refrnce",
    url: "https://www.phylx.ai/",
  },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-white font-sans text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
