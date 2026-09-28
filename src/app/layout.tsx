import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { preloaderSkipScript } from "@/components/Preloader";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const description =
  "Madhav M S builds AI infrastructure: capacity governance for self-hosted LLMs, production RAG, vector search from first principles, and memory for coding agents. CS at CIT, Data Science at IIT Madras.";

export const metadata: Metadata = {
  title: "Madhav M S — AI Infrastructure Engineer",
  description,
  authors: [{ name: "Madhav M S", url: "https://github.com/VampiricCyborg" }],
  openGraph: {
    title: "Madhav M S — AI Infrastructure Engineer",
    description,
    type: "website",
  },
  twitter: { card: "summary", title: "Madhav M S — AI Infrastructure Engineer", description },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The inline script and scroll layout add classes to <html> before React hydrates.
    <html lang="en" className={`${interTight.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloaderSkipScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
