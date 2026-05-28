import Image from "next/image";
import { ArrowRight, FlaskConical, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const trustBadges = [
  { label: "Natural", icon: Leaf },
  { label: "Chemical-Free", icon: FlaskConical },
  { label: "Cruelty-Free", icon: ShieldCheck },
  { label: "Ayurvedic", icon: Sparkles },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-14 pt-4 lg:pt-4">
      <div className="section-shell">
        <div className="lg:hidden">
          <Reveal className="earth-panel overflow-hidden p-6">
            <p className="section-kicker">Earthiva • Rooted In Nature</p>
            <h1 className="mt-4 max-w-[11ch] font-serif text-[3rem] leading-[0.94] text-leaf">
              Pure. Natural. Real ritual care.
            </h1>
            <p className="mt-5 max-w-md text-base leading-8 text-bark/74">
              Herbal powders for skin and hair care, brought together in a softer botanical world
              that feels warm, premium, and grounded in nature.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a href="#products" className="leaf-button gap-2">
                Explore Collection <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#why-earthiva" className="ghost-button px-3">
                Why Earthiva
              </a>
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/70 shadow-soft">
              <Image
                src="/generated/earthiva-hero-banner-v6.webp"
                alt="Earthiva herbal product campaign banner"
                width={1712}
                height={948}
                sizes="100vw"
                quality={76}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="mt-6 border-t border-bark/10 pt-5">
              <div className="flex flex-wrap gap-x-4 gap-y-3">
                {trustBadges.map(({ label, icon: Icon }) => (
                  <div key={label} className="inline-flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-bark/10 bg-white/68 text-leaf">
                      <Icon className="h-4 w-4" strokeWidth={1.7} />
                    </span>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.17em] text-leaf/76">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="hidden lg:block">
          <div className="relative overflow-hidden rounded-[2.8rem] border border-bark/8 bg-[#f7f0e5] shadow-soft">
            <Image
              src="/generated/earthiva-hero-banner-v6.webp"
              alt="Earthiva herbal product campaign banner"
              width={1712}
              height={948}
              sizes="(min-width: 1280px) 88vw, (min-width: 1024px) 92vw, 100vw"
              quality={78}
              priority
              className="h-auto w-full object-cover"
            />

            <div className="absolute inset-y-0 left-0 w-[43%] bg-[linear-gradient(90deg,rgba(251,247,241,0.84),rgba(251,247,241,0.64)_40%,rgba(251,247,241,0.08)_70%,transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.32),transparent_26%)]" />

            <div className="absolute left-0 top-0 z-10 flex w-[41%] items-start px-9 pt-10 xl:w-[39%] xl:px-11 xl:pt-12">
              <div className="max-w-[25rem]">
                <Reveal>
                  <p className="section-kicker">Earthiva • Rooted In Nature</p>
                  <h1 className="mt-3 max-w-[8ch] font-serif text-[3.05rem] leading-[0.92] text-leaf xl:text-[3.5rem]">
                    Pure. Natural. Real ritual care.
                  </h1>
                </Reveal>

                <Reveal delay={0.08}>
                  <p className="mt-4 max-w-[22rem] text-[0.88rem] leading-[1.8] text-bark/72">
                    Herbal powders for skin and hair care, brought together in a softer botanical
                    world that feels warm, premium, and grounded in nature.
                  </p>
                </Reveal>

                <Reveal delay={0.14}>
                  <div className="mt-6 flex flex-wrap items-center gap-2.5">
                    <a
                      href="#products"
                      className="inline-flex items-center gap-2 rounded-full bg-leaf px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.15em] text-cream transition hover:-translate-y-0.5 hover:bg-leafDark"
                    >
                      Explore Collection <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#why-earthiva"
                      className="inline-flex items-center rounded-full border border-leaf/12 bg-white/72 px-3 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.15em] text-leaf transition hover:-translate-y-0.5 hover:bg-white"
                    >
                      Why Earthiva
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="mt-5 max-w-[22rem] border-t border-white/50 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {trustBadges.map(({ label, icon: Icon }) => (
                        <div
                          key={label}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/45 bg-white/18 px-2.5 py-1.5 backdrop-blur-sm"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/45 text-leaf">
                            <Icon className="h-[11px] w-[11px]" strokeWidth={2} />
                          </span>
                          <p className="text-[0.56rem] font-bold uppercase tracking-[0.14em] text-leaf/80">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
