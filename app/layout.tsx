import type { Metadata } from "next";
import { getSiteUrl } from "@/src/lib/seo";
import "./globals.css";

const siteUrl = getSiteUrl();
const siteName = "Earthiva";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Earthiva | Rooted In Nature",
    template: "%s | Earthiva",
  },
  description:
    "Earthiva herbal powders for skin and hair rituals, presented through an earthy, ingredient-first shopping experience.",
  keywords: [
    "Earthiva",
    "herbal powders",
    "ayurvedic skincare",
    "natural hair care",
    "face care powders",
    "herbal rituals",
    "orange peel powder",
    "neem powder",
    "rose powder",
    "amla powder",
  ],
  alternates: {
    canonical: "/",
  },
  category: "health",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName,
    url: "/",
    title: "Earthiva | Rooted In Nature",
    description:
      "Explore Earthiva's earthy collection of herbal powders for glow, balance, and hair rituals.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Earthiva herbal powder collection banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Earthiva | Rooted In Nature",
    description:
      "Explore Earthiva's earthy collection of herbal powders for glow, balance, and hair rituals.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
