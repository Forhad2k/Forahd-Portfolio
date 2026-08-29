import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/store/Providers";
import ThemeInitializer from "@/components/ui/ThemeInitializer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import Spotlight from "@/components/ui/Spotlight";
import CommandPalette from "@/components/ui/CommandPalette";
import { site } from "@/data/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Forhad Hossain — Full-Stack Developer | Next.js, Shopify & Squarespace",
  description:
    "Forhad Hossain is a Full-Stack Developer specializing in Next.js, React, Node.js, PostgreSQL, Prisma, Squarespace and Shopify development.",
  keywords: [
    "Forhad Hossain",
    "Full-Stack Developer",
    "Next.js Developer",
    "Shopify Developer",
    "Squarespace Developer",
    "React Developer Dhaka",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: "Forhad Hossain — Full-Stack Developer",
    description:
      "Full-stack developer specializing in Next.js, Node.js, PostgreSQL and Prisma — with production experience on Squarespace and Shopify.",
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forhad Hossain — Full-Stack Developer",
    description:
      "Full-stack developer specializing in Next.js, Node.js, PostgreSQL and Prisma — with production experience on Squarespace and Shopify.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.name,
      jobTitle: site.role,
      email: site.email,
      url: site.url,
      sameAs: [site.github, site.linkedin],
      address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
    },
    {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        <Providers>
          <ThemeInitializer />
          <div className="grain" />
          <Spotlight />
          <ScrollProgress />
          <CustomCursor />
          <CommandPalette />
          {children}
        </Providers>
      </body>
    </html>
  );
}
