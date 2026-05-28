"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Leaf,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Truck,
} from "lucide-react";
import { productFilters, products } from "../constants/products";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

const featureCards = [
  {
    title: "Single-ingredient purity",
    text: "Each pouch stays close to the ingredient itself, so rituals feel simple, honest, and easy to trust.",
    icon: Leaf,
  },
  {
    title: "Guided everyday rituals",
    text: "Clear mix-ins, benefits, and usage steps help you choose a powder by concern instead of guessing.",
    icon: Sparkles,
  },
  {
    title: "Skin and hair care roots",
    text: "From glow masks to scalp packs, the range supports calm weekly care across both skin and hair rituals.",
    icon: ShieldCheck,
  },
  {
    title: "Made for mindful routines",
    text: "Earthiva is designed for slower, ingredient-led care that feels grounded, botanical, and premium.",
    icon: HeartHandshake,
  },
];

const featurePills = [
  "Ayurvedic-inspired care",
  "Face + hair rituals",
  "Weekly glow and reset",
  "Warm botanical textures",
];

const featureStats = [
  { value: "11", label: "ritual powders" },
  { value: "100%", label: "herbal focus" },
  { value: "2", label: "care categories" },
];

const packagingFacts = ["Natural", "Cruelty Free", "Chemical Free"];

export function FeatureStrip() {
  return (
    <section className="pb-12">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-bark/8 bg-[linear-gradient(135deg,#f7f0e6_0%,#f3eadf_52%,#edf3e2_100%)] shadow-soft">
          <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-[#efd0aa]/26 blur-3xl" />
          <div className="absolute right-10 top-10 h-36 w-36 rounded-full bg-[#dbe7c5]/24 blur-3xl" />
          <div className="absolute bottom-6 left-1/3 h-24 w-40 rounded-full bg-white/30 blur-2xl" />

          <div className="relative grid gap-10 p-7 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start xl:p-12">
            <Reveal>
              <p className="section-kicker">Earthiva Promise</p>
              <h2 className="mt-3 max-w-[11ch] font-serif text-4xl leading-[0.95] text-leaf md:text-5xl">
                Pure powders. Honest rituals.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-bark/72 md:text-[0.98rem] md:leading-8">
                Earthiva brings together herbal powders, product-led ritual guidance, and a warm
                natural mood so each pouch feels rooted in ingredient clarity rather than crowded wellness claims.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {featurePills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-bark/8 bg-white/68 px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-bark/70 backdrop-blur-sm"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                {featureStats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-[1.35rem] border border-white/72 bg-white/56 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="font-serif text-3xl leading-none text-leaf">{value}</p>
                    <p className="mt-2 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-bark/62">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-[1px] overflow-hidden rounded-[2rem] border border-bark/8 bg-bark/8 sm:grid-cols-2">
                {featureCards.map(({ title, text, icon: Icon }) => (
                  <div key={title} className="bg-white/58 p-6 backdrop-blur-sm">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-bark/8 bg-cream/88 text-olive">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-olive">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-bark/70">{text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof productFilters)[number]>("All");
  const visibleProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.filters.includes(activeFilter));

  return (
    <section id="products" className="pb-12">
      <div className="section-shell">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker">Explore Our Natural Powders</p>
            <h2 className="section-title mt-3 max-w-3xl">Find the powder that fits your ritual.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-bark/72">
              Browse by concern, compare the staged product view with the front and back pack,
              and choose a ritual that feels simple to bring into your week.
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={0.08}
          className="mt-10 flex flex-col gap-4 rounded-[1.8rem] border border-bark/8 bg-white/62 p-4 backdrop-blur-sm lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex flex-wrap gap-2.5">
            {productFilters.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={
                    isActive
                      ? "rounded-full bg-leaf px-4 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cream shadow-[0_12px_24px_rgba(35,57,41,0.14)]"
                      : "rounded-full border border-bark/10 bg-white/80 px-4 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-bark/70 transition hover:bg-white"
                  }
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {visibleProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function RitualBanner() {
  const ritualProducts = [
    products.find((product) => product.slug === "amla"),
    products.find((product) => product.slug === "orange-peel"),
    products.find((product) => product.slug === "rose"),
  ].filter(Boolean) as typeof products;

  return (
    <section id="rituals" className="pb-12">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.6rem] border border-bark/8 bg-[linear-gradient(135deg,#f6efe5,#f0e7d9_56%,#e9f0dc)] shadow-soft">
          <div className="absolute right-12 top-10 h-44 w-44 rounded-full bg-[#dce8bf]/35 blur-3xl" />
          <div className="absolute bottom-8 left-12 h-40 w-40 rounded-full bg-[#efcfaa]/30 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="p-8 md:p-14">
              <Reveal>
                <p className="section-kicker">How Earthiva Rituals Work</p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-leaf md:text-6xl">
                  Simple powders, clearer routines.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-bark/72">
                  Every Earthiva pouch is designed to make the ritual easy to understand: what the
                  powder is, what it helps with, how to mix it, and where it fits into a weekly skin
                  or hair care routine.
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: "Choose by concern",
                      text: "Pick a powder for glow, clarifying, calm skin, or hair-care support.",
                    },
                    {
                      title: "Mix simply",
                      text: "Use familiar pairings like rose water, curd, aloe, or plain water.",
                    },
                    {
                      title: "Use weekly",
                      text: "Let the ritual stay gentle, consistent, and easy to repeat at home.",
                    },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-[1.6rem] border border-bark/10 bg-white/66 p-5">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-olive">
                        {title}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-bark/72">{text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {[
                    "Face + hair rituals",
                    "Single-ingredient powders",
                    "Clear usage guidance",
                    "Weekly care friendly",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-bark/8 bg-white/66 px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-bark/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="relative grid min-h-[30rem] place-items-center overflow-hidden px-6 py-2">
              <div className="absolute right-6 top-1 rounded-full border border-bark/10 bg-white/70 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-bark/72">
                Ritual range snapshot
              </div>
              <div className="absolute left-14 top-12 h-40 w-40 rounded-full bg-[#f1c790]/22 blur-3xl" />
              <div className="absolute bottom-8 right-10 h-40 w-40 rounded-full bg-sage/18 blur-3xl" />
              <div className="absolute bottom-10 left-1/2 h-24 w-[76%] -translate-x-1/2 rounded-[999px] bg-[#d7c8b0]/50 blur-xl" />

              <div className="relative w-full max-w-[34rem]">
                <div className="mx-auto grid max-w-[28rem] grid-cols-3 items-end gap-3">
                  {ritualProducts.map((product, index) => (
                    <div
                      key={product.slug}
                      className="rounded-[1.9rem] border border-white/78 px-3 py-3 shadow-[0_18px_50px_rgba(93,69,50,0.08)]"
                      style={{
                        background: `linear-gradient(180deg, ${product.soft}, rgba(255,255,255,0.96))`,
                        transform:
                          index === 0
                            ? "translateY(18px) rotate(-4deg)"
                            : index === 2
                              ? "translateY(18px) rotate(4deg)"
                              : "translateY(0) rotate(0deg)",
                      }}
                    >
                      <Image
                        src={product.stageImage}
                        alt={product.name}
                        width={420}
                        height={560}
                        className="mx-auto h-auto w-full max-w-[9rem] object-contain"
                      />
                    </div>
                  ))}
                </div>

                <div className="mx-auto mt-6 max-w-[24rem] rounded-[1.8rem] border border-white/80 bg-white/74 p-5">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-olive">
                    What every pouch helps clarify
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {packagingFacts.map((fact) => (
                      <span
                        key={fact}
                        className="rounded-full border border-bark/10 bg-cream px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-bark/72"
                      >
                        {fact}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-bark/72">
                    Ingredient, concern, mix-with guidance, and a ritual that feels simple enough to
                    return to each week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyEarthiva() {
  const storyProduct = products.find((product) => product.slug === "orange-peel") ?? products[0];
  const supportProduct = products.find((product) => product.slug === "sandalwood") ?? products[1];
  const supportBadges = [
    "Ingredient-first rituals",
    "Simple mix-with guidance",
    "Face + hair care range",
    "Weekly routine friendly",
  ];

  return (
    <section id="why-earthiva" className="pb-12">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <p className="section-kicker">Why Earthiva</p>
          <h2 className="section-title mt-3 max-w-2xl">
            Herbal care that feels easier to trust.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-bark/72">
            Earthiva keeps the ritual clear: one ingredient, a straightforward use case, simple
            mix-ins, and packaging that helps you understand what belongs in your routine.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Straightforward ingredients", icon: Leaf },
              { label: "Clear ritual guidance", icon: Sparkles },
              { label: "Gentle weekly care", icon: ShieldCheck },
              { label: "Comfort-first self-care", icon: HeartHandshake },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="earth-panel flex items-center gap-3 p-4 text-sm font-bold uppercase tracking-[0.12em] text-leaf"
              >
                <Icon className="h-5 w-5 text-olive" />
                {label}
              </div>
            ))}
          </div>

          <div className="earth-panel mt-8 p-6 text-sm leading-7 text-bark/72">
            <p className="font-bold uppercase tracking-[0.18em] text-olive">
              What makes the range feel usable
            </p>
            <p className="mt-3">
              Instead of crowded wellness claims, the pouches focus on ingredient, concern, and
              how to use the powder. That makes the experience calmer for first-time shoppers and
              easier to come back to for weekly rituals.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="grid gap-5">
            <div className="relative overflow-hidden rounded-[2.3rem] border border-bark/8 bg-[linear-gradient(145deg,#f9f5ef,#f1e7d8_60%,#edf2df)] p-6 shadow-soft">
              <div className="absolute left-8 top-8 h-36 w-36 rounded-full bg-[#efd0aa]/28 blur-3xl" />
              <div className="absolute bottom-6 right-10 h-36 w-36 rounded-full bg-[#dce8bf]/28 blur-3xl" />
              <div className="absolute bottom-8 left-1/2 h-20 w-[78%] -translate-x-1/2 rounded-[999px] bg-[#d7c8b0]/46 blur-xl" />
              <div className="relative grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-end">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-olive">
                    Ritual clarity
                  </p>
                  <h3 className="mt-3 max-w-sm font-serif text-3xl leading-tight text-leaf">
                    Built to explain the ritual without overcomplicating it.
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-bark/72">
                    From the front pouch to the back label, the range is organized so the shopper
                    quickly understands ingredient, benefit, and how the powder fits into everyday care.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {supportBadges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-bark/8 bg-white/68 px-4 py-2 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-bark/70"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-end justify-center gap-4">
                  <div className="earth-panel rounded-[1.8rem] px-4 py-5">
                    <Image
                      src={storyProduct.stageImage}
                      alt={storyProduct.name}
                      width={420}
                      height={560}
                      className="mx-auto h-auto w-full max-w-[8.8rem] object-contain"
                    />
                  </div>
                  <div className="earth-panel rounded-[1.8rem] px-4 py-5">
                    <Image
                      src={supportProduct.stageImage}
                      alt={supportProduct.name}
                      width={420}
                      height={560}
                      className="mx-auto h-auto w-full max-w-[8.8rem] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Ingredient-led",
                  text: "The powder itself stays the main character, so the ritual feels direct and believable.",
                },
                {
                  title: "Easy to follow",
                  text: "Mix-with guidance and concern-led language reduce guesswork for first-time buyers.",
                },
                {
                  title: "Warm and grounded",
                  text: "The overall feel stays calm, earthy, and premium without becoming visually dense.",
                },
              ].map(({ title, text }) => (
                <div key={title} className="earth-panel rounded-[1.8rem] p-5">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-olive">
                    {title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-bark/72">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="contact" className="pb-12">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.6rem] border border-bark/10 bg-[linear-gradient(135deg,#f7f1e6,#f0e8dc_58%,#eaf0e1)] shadow-soft">
          <div className="absolute left-10 top-10 h-36 w-36 rounded-full bg-[#efd0aa]/24 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-[#dce8bf]/26 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div className="p-8 md:p-14">
              <p className="section-kicker">Bring Earthiva Home</p>
              <h2 className="section-title mt-4 max-w-3xl">Choose a ritual that fits your week.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-bark/72">
                Browse the range for glow days, clarifying resets, and calmer self-care moments, then
                pick the pouch that feels right for your skin or hair routine.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.amazon.in/s?k=Earthiva+Powder"
                  target="_blank"
                  rel="noreferrer"
                  className="leaf-button gap-2"
                >
                  Shop Earthiva On Amazon <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#products" className="ghost-button">
                  Browse Rituals
                </a>
              </div>
            </div>

            <div className="p-8 md:p-14 md:pl-0">
              <div className="earth-panel rounded-[2rem] p-6 text-bark/72">
                <div className="flex items-center gap-3 text-leaf">
                  <Truck className="h-5 w-5 text-olive" />
                  <p className="text-sm font-bold uppercase tracking-[0.18em]">Contact Earthiva</p>
                </div>
                <p className="mt-4 text-sm leading-7">
                  Questions about ingredients, ritual pairings, or choosing the right powder for your
                  routine? Reach out and keep the conversation simple.
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  <p>
                    <span className="font-bold text-leaf">Email:</span> hello@earthiva.in
                  </p>
                  <p>
                    <span className="font-bold text-leaf">Location:</span> Agra, Uttar Pradesh
                  </p>
                  <p>
                    <span className="font-bold text-leaf">Availability:</span> Amazon-first ordering with ritual-led browsing here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
