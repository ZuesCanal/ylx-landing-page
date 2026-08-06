import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "YLX — The Trusted Control Layer for Institutional Digital Assets",
  description:
    "YLX standardizes digital asset vault infrastructure into Sight, Flow, Trace, and Guard — a control layer institutions can safely allocate through.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white font-sans text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
