"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { ASSETS } from "@/lib/assets";
import { SITE_DATA } from "@/content/siteData";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const lenis = useLenis();

  const handleScrollToMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (lenis) {
      const headerHeight = document.querySelector("header")?.offsetHeight ?? 80;
      lenis.scrollTo("#menu", { offset: -headerHeight, duration: 1.2 });
    } else {
      document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] md:min-h-screen flex items-center pt-[var(--nav-h)] pb-[var(--space-2xl)] overflow-hidden"
    >
      {/* Background food photo with multiply overlay - layered at z-0 */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <m.div
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src={ASSETS.hero.bg}
            alt="Authentic Palembang Pempek Spread"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center md:object-right-top"
          />
        </m.div>

        {/* Dark directional & multiply overlays matching Figma #1:75 & #1:76 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40 md:via-black/75 md:to-transparent mix-blend-multiply z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-top)] via-transparent to-[var(--bg-top)] opacity-90 z-[2]" />
      </div>

      {/* Hero Content - Layered at z-20 for guaranteed visibility above background & overlays */}
      <div className="container-fluid relative z-20 py-[var(--space-m)]">
        <div className="max-w-[850px] flex flex-col items-start text-left">
          {/* Eyebrow */}
          <div className="mb-[var(--space-xs)]">
            <span className="inline-block font-serif italic text-[#FDB03F] text-[length:var(--text-eyebrow)] drop-shadow-sm">
              {SITE_DATA.hero.eyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif italic text-[length:var(--text-hero)] leading-[1.05] tracking-tight text-gradient-cream shadow-title">
            {SITE_DATA.hero.headlinePart1}
            <span className="text-gradient-gold not-italic font-serif italic">
              {SITE_DATA.hero.headlineAccent}
            </span>
            {SITE_DATA.hero.headlinePart2}
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="font-sans text-[length:var(--text-body)] text-[#E7DFCC] leading-relaxed max-w-[58ch] mt-[var(--space-m)] mb-[var(--space-l)] opacity-95 text-pretty">
            {SITE_DATA.hero.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-[var(--space-s)] w-full sm:w-auto mt-[var(--space-xs)]">
            <Button
              href="#menu"
              variant="cream"
              onClick={handleScrollToMenu}
              className="w-full sm:w-auto"
            >
              {SITE_DATA.hero.ctaMenu}
            </Button>

            <Button
              href={SITE_DATA.whatsappUrl}
              variant="maroon"
              className="w-full sm:w-auto"
            >
              {SITE_DATA.hero.ctaOrder}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Wave Transition (SUPERGRAPHIC 2 - Figma #1:120) seamlessly overlaying bottom of hero */}
      <div className="absolute bottom-0 inset-x-0 w-full overflow-hidden pointer-events-none select-none z-10 flex justify-center">
        <div className="relative w-[130vw] min-w-[1500px] max-w-[2600px] h-28 sm:h-36 md:h-48 lg:h-56 translate-y-1">
          <Image
            src={ASSETS.supergraphics.scallop}
            alt=""
            fill
            priority
            className="object-cover object-bottom opacity-85"
          />
        </div>
      </div>
    </section>
  );
}
