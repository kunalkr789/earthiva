"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  Leaf,
  ShoppingBag,
  X,
} from "lucide-react";
import type { Product } from "../constants/products";

type ProductCardProps = { product: Product; index: number };

export function ProductCard({ product, index }: ProductCardProps) {
  const views = useMemo(() => {
    const allViews = [
      { src: product.stageImage ?? product.image, alt: `${product.name} staged view` },
      { src: product.image, alt: `${product.name} front pouch` },
      { src: product.backImage, alt: `${product.name} back pouch` },
    ];

    return allViews.filter((view, i, arr) => arr.findIndex((v) => v.src === view.src) === i);
  }, [product.backImage, product.image, product.name, product.stageImage]);

  const [activeView, setActiveView] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goToNext = () => setActiveView((prev) => (prev + 1) % views.length);
  const goToPrev = () => setActiveView((prev) => (prev - 1 + views.length) % views.length);
  const activeSrc = views[activeView]?.src ?? product.image;
  const isStageView = activeSrc === (product.stageImage ?? product.image);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const diff = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
    if (Math.abs(diff) > 36) {
      if (diff < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    touchStartX.current = null;
  };

  useEffect(() => {
    if (!isDetailOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDetailOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isDetailOpen]);

  return (
    <>
      <motion.article
        id={`product-${product.slug}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: Math.min(index * 0.04, 0.28) }}
        whileHover={{ y: -6 }}
        className="group overflow-hidden rounded-[1.8rem] border border-bark/10 bg-white/84 shadow-soft"
      >
        <div
          className="relative aspect-[4/5] overflow-hidden border-b border-bark/8 bg-[#f6efe5] sm:aspect-[4/5.5]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSrc}
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.015 }}
            transition={{ duration: 0.34, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={activeSrc}
              alt={views[activeView]?.alt ?? `${product.name} product view`}
              fill
              sizes="(min-width: 1280px) 23vw, (min-width: 768px) 33vw, 50vw"
              quality={72}
              className={
                isStageView
                  ? "object-cover object-[center_42%] scale-[1.04]"
                  : "object-contain p-2"
              }
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0)_38%,rgba(72,47,28,0.12)_100%)]" />
          <div className="absolute left-3 top-3 z-10 rounded-full bg-white/92 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-bark shadow-soft">
            {product.netWeight}
          </div>

          {views.length > 1 && (
            <>
              <button
                type="button"
                aria-label={`Previous ${product.name} image`}
                onClick={goToPrev}
                className="absolute left-2.5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/70 bg-white/80 p-1.5 text-bark/72 backdrop-blur-sm transition hover:bg-white"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                aria-label={`Next ${product.name} image`}
                onClick={goToNext}
                className="absolute right-2.5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/70 bg-white/80 p-1.5 text-bark/72 backdrop-blur-sm transition hover:bg-white"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </>
          )}

          {views.length > 1 && (
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {views.map((view, idx) => (
                <button
                  key={`${view.src}-${idx}`}
                  type="button"
                  aria-label={`Show ${product.name} image ${idx + 1}`}
                  onClick={() => setActiveView(idx)}
                  className={`h-1.5 rounded-full transition ${
                    idx === activeView ? "w-5 bg-leaf" : "w-2 bg-white/82"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2.5 p-3 sm:space-y-3 sm:p-4">
          <div className="flex items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-bark/58 sm:text-[0.62rem] sm:tracking-[0.16em]">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: product.accent }} />
            <span>{product.category}</span>
          </div>
          <h3 className="line-clamp-2 min-h-[2.2rem] font-serif text-[0.9rem] leading-[1.05] text-leaf sm:text-[1.4rem]">
            {product.name}
          </h3>
          <p className="line-clamp-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-bark/58 sm:text-xs sm:tracking-[0.16em]">
            {product.ritual}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsDetailOpen(true)}
              aria-label={`Quick view ${product.name}`}
              title="Quick View"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-leaf/14 bg-white text-leaf transition hover:bg-cream sm:h-auto sm:w-auto sm:px-4 sm:py-2 sm:text-[0.66rem] sm:font-bold sm:uppercase sm:tracking-[0.16em]"
            >
              <Eye className="h-4 w-4 sm:hidden" />
              <span className="hidden sm:inline">Quick View</span>
            </button>
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${product.name} on Amazon`}
              title="Amazon"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-leaf text-cream transition hover:bg-leafDark sm:h-auto sm:w-auto sm:px-4 sm:py-2 sm:text-[0.66rem] sm:font-bold sm:uppercase sm:tracking-[0.16em]"
            >
              <ShoppingBag className="h-4 w-4 sm:hidden" />
              <span className="hidden sm:inline">Amazon</span>
            </a>
          </div>
        </div>
      </motion.article>

      {isDetailOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-bark/50 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setIsDetailOpen(false)}
        >
          <div
            className="relative max-h-[92vh] w-full overflow-hidden rounded-[1.9rem] border border-bark/10 bg-[#faf5ee] shadow-[0_28px_80px_rgba(40,29,20,0.34)] sm:max-w-5xl sm:rounded-[2rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label={`Close ${product.name} detail`}
              onClick={() => setIsDetailOpen(false)}
              className="absolute right-4 top-4 z-30 rounded-full border border-bark/10 bg-white/88 p-2 text-bark/70 hover:bg-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="max-h-[92vh] overflow-y-auto">
              <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
                <div className="relative border-b border-bark/8 bg-[#f6efe5] md:border-b-0 md:border-r">
                  <div
                    className="relative aspect-[4/4.25] overflow-hidden sm:aspect-[4/4.6] md:aspect-[4/5]"
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={`${activeSrc}-modal`}
                        initial={{ opacity: 0, scale: 1.01 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.01 }}
                        transition={{ duration: 0.34, ease: [0.33, 1, 0.68, 1] }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={activeSrc}
                          alt={views[activeView]?.alt ?? `${product.name} product view`}
                          fill
                          sizes="(min-width: 768px) 45vw, 100vw"
                          quality={74}
                          className={
                            isStageView
                              ? "object-cover object-[center_44%] scale-[1.03]"
                              : "object-contain p-3"
                          }
                        />
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0)_40%,rgba(72,47,28,0.12)_100%)]" />

                    {views.length > 1 && (
                      <>
                        <button
                          type="button"
                          aria-label={`Previous ${product.name} image`}
                          onClick={goToPrev}
                          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/70 bg-white/84 p-2 text-bark/72 backdrop-blur-sm transition hover:bg-white"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          aria-label={`Next ${product.name} image`}
                          onClick={goToNext}
                          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/70 bg-white/84 p-2 text-bark/72 backdrop-blur-sm transition hover:bg-white"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </>
                    )}

                    {views.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                        {views.map((view, idx) => (
                          <button
                            key={`${view.src}-${idx}-modal`}
                            type="button"
                            aria-label={`Show ${product.name} image ${idx + 1}`}
                            onClick={() => setActiveView(idx)}
                            className={`h-1.5 rounded-full transition ${
                              idx === activeView ? "w-6 bg-leaf" : "w-2 bg-white/85"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-5 p-5 sm:p-6">
                  <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-bark/58">
                      {product.category}
                    </p>
                    <h3 className="mt-2 font-serif text-[2rem] leading-none text-leaf">{product.name}</h3>
                    <p
                      className="mt-3 inline-flex rounded-full px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-white"
                      style={{ backgroundColor: product.accent }}
                    >
                      {product.ritual}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-bark/72">{product.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="rounded-full border border-bark/8 bg-cream px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-bark/72"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <div className="rounded-[1.2rem] border border-bark/8 bg-white/70 p-4 text-sm text-bark/74">
                    <div className="flex items-start gap-2.5">
                      <Leaf className="mt-0.5 h-4 w-4 text-olive" />
                      <div>
                        <p className="font-bold uppercase tracking-[0.16em] text-bark/62">Best for</p>
                        <p className="mt-1 leading-6">{product.bestFor}</p>
                      </div>
                    </div>
                    <div className="mt-3 border-t border-bark/10 pt-3">
                      <p className="font-bold uppercase tracking-[0.16em] text-bark/62">Mix with</p>
                      <p className="mt-1 leading-6">{product.mixWith}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-bark/58">
                      How to use
                    </p>
                    <ul className="space-y-1 text-sm leading-6 text-bark/74">
                      {product.howToUse.slice(0, 4).map((step) => (
                        <li key={step}>- {step}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cream transition hover:bg-leafDark"
                    >
                      View On Amazon <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsDetailOpen(false)}
                      className="inline-flex items-center justify-center rounded-full border border-leaf/14 bg-white px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-leaf transition hover:bg-cream"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
