import { Navbar } from "@/src/components/Navbar";
import { Hero } from "@/src/components/Hero";
import {
  FeatureStrip,
  ProductsSection,
  RitualBanner,
  WhyEarthiva,
  FinalCTA,
} from "@/src/components/Sections";
import { products } from "@/src/constants/products";
import { getSiteUrl, toAbsoluteUrl } from "@/src/lib/seo";

export default function Home() {
  const siteUrl = getSiteUrl();
  const productList = products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteUrl}/#product-${product.slug}`,
    item: {
      "@type": "Product",
      name: product.name,
      description: product.description,
      category: product.category,
      image: [toAbsoluteUrl(product.stageImage), toAbsoluteUrl(product.image)],
      brand: {
        "@type": "Brand",
        name: "Earthiva",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Ritual",
          value: product.ritual,
        },
        {
          "@type": "PropertyValue",
          name: "Net Weight",
          value: product.netWeight,
        },
      ],
      sameAs: [product.amazonUrl],
    },
  }));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Earthiva",
    url: siteUrl,
    logo: toAbsoluteUrl("/images/brand/earthiva-logo-leaf-transparent.png"),
    description:
      "Earthiva creates herbal powders for skin and hair rituals with an ingredient-first, earthy approach.",
    sameAs: ["https://www.amazon.in/s?k=Earthiva"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Earthiva",
    url: siteUrl,
    description:
      "Explore Earthiva herbal powders for skin and hair rituals, including glow, clarifying, and balance-focused care.",
    inLanguage: "en-IN",
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Earthiva Herbal Powder Collection",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: products.length,
    itemListElement: productList,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="overflow-x-clip">
        <Navbar />
        <Hero />
        <FeatureStrip />
        <ProductsSection />
        <RitualBanner />
        <WhyEarthiva />
        <FinalCTA />
      </main>
    </>
  );
}
