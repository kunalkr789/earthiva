export type ProductFilter =
  | "Face Rituals"
  | "Hair Rituals"
  | "Glow & Brightening"
  | "Clarifying"
  | "Calm & Balance";

export type Product = {
  slug: string;
  name: string;
  ingredient: string;
  ritual: string;
  category: "Face Care" | "Hair Care";
  accent: string;
  soft: string;
  image: string;
  backImage: string;
  stageImage: string;
  amazonUrl: string;
  description: string;
  benefits: string[];
  bestFor: string;
  mixWith: string;
  howToUse: string[];
  about: string;
  ingredients: string[];
  storage: string;
  caution: string;
  netWeight: string;
  filters: ProductFilter[];
};

export const productFilters: Array<"All" | ProductFilter> = [
  "All",
  "Face Rituals",
  "Hair Rituals",
  "Glow & Brightening",
  "Clarifying",
  "Calm & Balance",
];

export const products: Product[] = [
  {
    slug: "orange-peel",
    name: "Orange Peel Powder",
    ingredient: "Sun-dried orange peel",
    ritual: "Citrus Glow Ritual",
    category: "Face Care",
    accent: "#E9851C",
    soft: "#FFF2DA",
    image: "/products/orange-peel-front.webp",
    backImage: "/products/orange-peel-back.webp",
    stageImage: "/products/main/orange.webp",
    amazonUrl: "https://www.amazon.in/s?k=Earthiva+Orange+Peel+Powder",
    description:
      "A bright, cheerful face pack staple for weekly glow rituals and post-sun refresh routines.",
    benefits: ["Brightening", "Tan care", "Fresh feel"],
    bestFor: "Dull skin, uneven tone, weekend face packs",
    mixWith: "Rose water or curd",
    howToUse: [
      "Mix with rose water or curd",
      "Apply evenly on face",
      "Leave for 10 to 15 minutes",
      "Wash with lukewarm water",
    ],
    about:
      "Earthiva Orange Peel Powder is crafted from naturally dried orange peels to help brighten the look of dull skin and support a fresher weekly glow ritual.",
    ingredients: ["100% pure orange peel powder"],
    storage: "Store in a cool and dry place away from direct sunlight.",
    caution: "For external use only. Patch test recommended before first use.",
    netWeight: "100g",
    filters: ["Face Rituals", "Glow & Brightening"],
  },
  {
    slug: "neem",
    name: "Neem Powder",
    ingredient: "Neem leaf powder",
    ritual: "Pure Balance Ritual",
    category: "Face Care",
    accent: "#738A3C",
    soft: "#EFF5D8",
    image: "/products/neem-front.webp",
    backImage: "/products/neem-back.webp",
    stageImage: "/products/main/neem.webp",
    amazonUrl: "https://www.amazon.in/s?k=Earthiva+Neem+Powder",
    description:
      "An earthy balancing ritual for skin that needs a cleaner, calmer, more clarified weekly reset.",
    benefits: ["Purifying", "Oil balance", "Clear-feeling skin"],
    bestFor: "Oily skin, blemish-prone routines, scalp masks",
    mixWith: "Rose water or plain water",
    howToUse: [
      "Mix with rose water or plain water",
      "Apply evenly to face or scalp",
      "Leave for 10 to 15 minutes",
      "Rinse thoroughly",
    ],
    about:
      "Earthiva Neem Powder is designed for balancing weekly rituals when your skin or scalp needs a cleaner, calmer, and more clarified reset.",
    ingredients: ["100% pure neem leaf powder"],
    storage: "Store sealed in a cool, dry place away from moisture.",
    caution: "For external use only. Avoid contact with eyes.",
    netWeight: "100g",
    filters: ["Face Rituals", "Clarifying", "Calm & Balance"],
  },
  {
    slug: "rose",
    name: "Rose Powder",
    ingredient: "Rose petal powder",
    ritual: "Petal Soft Ritual",
    category: "Face Care",
    accent: "#CB8EA0",
    soft: "#FCE9EF",
    image: "/products/rose-front.webp",
    backImage: "/products/rose-back.webp",
    stageImage: "/products/main/rose.webp",
    amazonUrl: "https://www.amazon.in/s?k=Earthiva+Rose+Powder",
    description:
      "A soft floral ritual that brings a delicate, comforting feel to gentle self-care moments.",
    benefits: ["Soothing", "Soft glow", "Refreshing"],
    bestFor: "Dry skin, sensitive routines, calming masks",
    mixWith: "Milk, aloe vera gel, or rose water",
    howToUse: [
      "Mix with milk, aloe vera gel, or rose water",
      "Apply on clean skin",
      "Relax for 10 to 15 minutes",
      "Rinse gently",
    ],
    about:
      "Earthiva Rose Powder brings a soft floral feel to calming face rituals and helps create a refreshed, comfort-first self-care experience.",
    ingredients: ["100% pure rose petal powder"],
    storage: "Keep tightly closed in a cool and dry place.",
    caution: "For external use only. Patch test before regular use.",
    netWeight: "100g",
    filters: ["Face Rituals", "Calm & Balance"],
  },
  {
    slug: "beetroot",
    name: "Beetroot Powder",
    ingredient: "Beetroot powder",
    ritual: "Rosy Glow Ritual",
    category: "Face Care",
    accent: "#B84C66",
    soft: "#F8DEE4",
    image: "/products/beetroot-front.webp",
    backImage: "/products/beetroot-back.webp",
    stageImage: "/products/main/beetroot.webp",
    amazonUrl: "https://www.amazon.in/s?k=Earthiva+Beetroot+Powder",
    description:
      "A rich rosy ritual that feels vibrant, uplifting, and ideal for glow-focused mask days.",
    benefits: ["Rosy glow", "Skin vitality", "Smooth texture"],
    bestFor: "Glow masks, lip tint DIY, dull skin",
    mixWith: "Curd or honey",
    howToUse: [
      "Mix with curd or honey",
      "Apply evenly on skin",
      "Leave for 10 to 15 minutes",
      "Wash off gently",
    ],
    about:
      "Earthiva Beetroot Powder is made for glow-focused rituals and adds a vibrant botanical touch to weekly skin care routines.",
    ingredients: ["100% pure beetroot powder"],
    storage: "Store in a dry place and keep the pouch sealed after use.",
    caution: "For external use only. Patch test recommended.",
    netWeight: "100g",
    filters: ["Face Rituals", "Glow & Brightening"],
  },
  {
    slug: "amla",
    name: "Amla Powder",
    ingredient: "Amla fruit powder",
    ritual: "Green Vitality Ritual",
    category: "Hair Care",
    accent: "#7E9B3D",
    soft: "#EDF5CB",
    image: "/products/amla-front.webp",
    backImage: "/products/amla-back.webp",
    stageImage: "/products/main/amla.webp",
    amazonUrl: "https://www.amazon.in/s?k=Earthiva+Amla+Powder",
    description:
      "A traditional ritual pick for strengthening hair care blends and botanical scalp routines.",
    benefits: ["Vitality care", "Scalp ritual", "Natural shine"],
    bestFor: "Hair packs, scalp care, strengthening routines",
    mixWith: "Water, curd, or hibiscus",
    howToUse: [
      "Mix with water, curd, or hibiscus powder",
      "Apply from roots to lengths",
      "Leave for 15 to 20 minutes",
      "Rinse thoroughly",
    ],
    about:
      "Earthiva Amla Powder supports traditional hair care rituals with a strengthening, scalp-loving botanical base.",
    ingredients: ["100% pure amla powder"],
    storage: "Keep in a cool, dry place away from humidity.",
    caution: "For external use only. Avoid use on irritated scalp.",
    netWeight: "100g",
    filters: ["Hair Rituals", "Calm & Balance"],
  },
  {
    slug: "multani-mitti",
    name: "Multani Mitti Powder",
    ingredient: "Fuller's earth clay",
    ritual: "Clay Detox Ritual",
    category: "Face Care",
    accent: "#B78E62",
    soft: "#F3E5D3",
    image: "/products/multani-mitti-front.webp",
    backImage: "/products/multani-mitti-back.webp",
    stageImage: "/products/main/multaniMitti.webp",
    amazonUrl: "https://www.amazon.in/s?k=Earthiva+Multani+Mitti+Powder",
    description:
      "A classic cooling clay ritual for deep-cleansing, summer resets, and earthy spa-at-home moments.",
    benefits: ["Oil control", "Cooling feel", "Deep cleansing"],
    bestFor: "Oily skin, heat-prone routines, detox masks",
    mixWith: "Rose water or sandalwood",
    howToUse: [
      "Mix with rose water or sandalwood powder",
      "Apply an even layer on face",
      "Allow to semi-dry",
      "Rinse with cool water",
    ],
    about:
      "Earthiva Multani Mitti Powder is a classic clay ritual for cooling, oil control, and an at-home earthy facial reset.",
    ingredients: ["100% pure multani mitti powder"],
    storage: "Store in a cool, dry place with the pouch tightly sealed.",
    caution: "For external use only. Do not over-dry sensitive skin.",
    netWeight: "100g",
    filters: ["Face Rituals", "Clarifying"],
  },
  {
    slug: "charcoal",
    name: "Charcoal Powder",
    ingredient: "Activated charcoal powder",
    ritual: "Deep Clean Ritual",
    category: "Face Care",
    accent: "#5E5C58",
    soft: "#E9E7E3",
    image: "/products/charcoal-front.webp",
    backImage: "/products/charcoal-back.webp",
    stageImage: "/products/main/charcoal.webp",
    amazonUrl: "https://www.amazon.in/s?k=Earthiva+Charcoal+Powder",
    description:
      "A deeper occasional cleanse for skin that needs a more purifying, city-proof reset.",
    benefits: ["Deep cleanse", "Pollution care", "Fresh skin"],
    bestFor: "Clogged pores, oily skin, detox routines",
    mixWith: "Aloe vera gel or water",
    howToUse: [
      "Mix with aloe vera gel or water",
      "Apply on target areas or full face",
      "Leave briefly",
      "Rinse thoroughly",
    ],
    about:
      "Earthiva Charcoal Powder is intended for occasional deep-cleansing rituals when skin feels congested or exposed to pollution.",
    ingredients: ["100% pure charcoal powder"],
    storage: "Store away from moisture and keep sealed after use.",
    caution: "For external use only. Use sparingly on dry or sensitive skin.",
    netWeight: "100g",
    filters: ["Face Rituals", "Clarifying"],
  },
  {
    slug: "hibiscus",
    name: "Hibiscus Powder",
    ingredient: "Hibiscus flower powder",
    ritual: "Floral Shine Ritual",
    category: "Hair Care",
    accent: "#D95055",
    soft: "#FFE1E3",
    image: "/products/hibiscus-front.webp",
    backImage: "/products/hibiscus-back.webp",
    stageImage: "/products/main/hibiscus.webp",
    amazonUrl: "https://www.amazon.in/s?k=Earthiva+Hibiscus+Powder",
    description:
      "A floral hair ritual that pairs softness with shine for nourishing weekly care.",
    benefits: ["Hair shine", "Soft feel", "Botanical nourishment"],
    bestFor: "Hair masks, dull strands, scalp care",
    mixWith: "Amla or curd",
    howToUse: [
      "Mix with amla powder or curd",
      "Apply on hair and scalp",
      "Leave for 15 to 20 minutes",
      "Rinse well",
    ],
    about:
      "Earthiva Hibiscus Powder brings a floral, nourishing quality to weekly hair masks and shine-focused rituals.",
    ingredients: ["100% pure hibiscus flower powder"],
    storage: "Store in a cool, dry place away from direct heat.",
    caution: "For external use only. Patch test before use on scalp.",
    netWeight: "100g",
    filters: ["Hair Rituals", "Glow & Brightening"],
  },
  {
    slug: "herbal-henna",
    name: "Herbal Henna Powder",
    ingredient: "Henna and herbal blend",
    ritual: "Herbal Hair Ritual",
    category: "Hair Care",
    accent: "#66763D",
    soft: "#E8EDD6",
    image: "/products/herbal-henna-front.webp",
    backImage: "/products/herbal-henna-back.webp",
    stageImage: "/products/main/herbalHenna.webp",
    amazonUrl: "https://www.amazon.in/s?k=Earthiva+Herbal+Henna+Powder",
    description:
      "A traditional conditioning ritual for richer, more grounded herbal hair care days.",
    benefits: ["Conditioned feel", "Traditional care", "Smooth strands"],
    bestFor: "Hair conditioning, herbal blends, natural care",
    mixWith: "Tea water or amla",
    howToUse: [
      "Mix with tea water or amla powder",
      "Apply evenly to hair",
      "Leave for the recommended ritual time",
      "Rinse thoroughly",
    ],
    about:
      "Earthiva Herbal Henna Powder is created for traditional hair-conditioning rituals with a rich herbal character.",
    ingredients: ["Henna powder", "selected herbal blend"],
    storage: "Store sealed in a cool and dry place.",
    caution: "For external use only. Patch test recommended before full application.",
    netWeight: "100g",
    filters: ["Hair Rituals", "Calm & Balance"],
  },
  {
    slug: "sandalwood",
    name: "Sandalwood Powder",
    ingredient: "Sandalwood powder",
    ritual: "Calm Glow Ritual",
    category: "Face Care",
    accent: "#C4945B",
    soft: "#F7E5CF",
    image: "/products/sandalwood-front.webp",
    backImage: "/products/sandalwood-back.webp",
    stageImage: "/products/main/sandalwood.webp",
    amazonUrl: "https://www.amazon.in/s?k=Earthiva+Sandalwood+Powder",
    description:
      "A soft, premium ritual with a calm earthy character for glow-driven face mask moments.",
    benefits: ["Calming", "Glow care", "Smooth feel"],
    bestFor: "Cooling masks, premium rituals, sensitive-looking skin",
    mixWith: "Rose water or milk",
    howToUse: [
      "Mix with rose water or milk",
      "Apply as an even face pack",
      "Leave for 10 to 15 minutes",
      "Rinse gently",
    ],
    about:
      "Earthiva Sandalwood Powder is made for calm, premium self-care rituals with a smoother and more refined earthy feel.",
    ingredients: ["100% pure sandalwood powder"],
    storage: "Store in a cool, dry place away from direct sunlight.",
    caution: "For external use only. Patch test before use on sensitive skin.",
    netWeight: "100g",
    filters: ["Face Rituals", "Calm & Balance", "Glow & Brightening"],
  },
  {
    slug: "shikakai",
    name: "Shikakai Powder",
    ingredient: "Shikakai pod powder",
    ritual: "Root Care Ritual",
    category: "Hair Care",
    accent: "#8FA442",
    soft: "#EEF4CF",
    image: "/products/shikakai-front.webp",
    backImage: "/products/shikakai-back.webp",
    stageImage: "/products/main/shikakai.webp",
    amazonUrl: "https://www.amazon.in/s?k=Earthiva+Shikakai+Powder",
    description:
      "A time-honored root-care ritual designed for gentle cleansing and scalp freshness.",
    benefits: ["Root care", "Natural cleanse", "Scalp freshness"],
    bestFor: "Hair wash rituals, scalp care, weekly hair packs",
    mixWith: "Water, amla, or hibiscus",
    howToUse: [
      "Mix with water, amla, or hibiscus",
      "Apply to scalp and lengths",
      "Leave briefly as desired",
      "Rinse thoroughly",
    ],
    about:
      "Earthiva Shikakai Powder follows a time-honored root-care tradition for gentle cleansing and fresh-feeling scalp rituals.",
    ingredients: ["100% pure shikakai powder"],
    storage: "Keep sealed in a dry place away from moisture.",
    caution: "For external use only. Avoid direct contact with eyes.",
    netWeight: "100g",
    filters: ["Hair Rituals", "Clarifying"],
  },
];
