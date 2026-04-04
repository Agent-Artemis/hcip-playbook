import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "How to Put an AI Agent to Work in Healthcare | Augeo Health",
  description: "A practical playbook for healthcare practices, billing companies, and consultants. CCM/RPM automation, billing AI, HIPAA compliance. $49.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#0a0a0a] text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
