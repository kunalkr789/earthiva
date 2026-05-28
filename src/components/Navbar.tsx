"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Ritual", href: "#rituals" },
  { label: "Why Earthiva", href: "#why-earthiva" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-bark/10 bg-cream/80 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-2">
        <a href="#home" className="flex items-center gap-3" aria-label="Earthiva home">
          <Image
            src="/images/brand/earthiva-logo-leaf-transparent.png"
            alt="Earthiva"
            width={700}
            height={400}
            priority
            className="h-12 w-auto sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.26em] text-bark/70 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-leaf">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#products" className="leaf-button">
            Explore Collection
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-bark/10 bg-white/60 text-leaf md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-bark/10 bg-white/80 md:hidden">
          <div className="section-shell flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-bark/8 bg-cream px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-bark/80"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#products"
              className="leaf-button"
              onClick={() => setIsOpen(false)}
            >
              Explore Collection
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
