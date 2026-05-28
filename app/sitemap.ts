import type { MetadataRoute } from "next";
import { products } from "@/src/constants/products";
import { getSiteUrl } from "@/src/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const productAnchors: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/#product-${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...productAnchors,
  ];
}
