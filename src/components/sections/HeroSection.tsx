"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { ASSETS } from "@/lib/assets";
import { SITE_DATA } from "@/content/siteData";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const lenis = useLenis();

  const handleScrollToMenu = (e: React.MouseEvent) => {
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
      className="relative min-h-[92vh] md:min-h-screen flex items-center pt-[var(--nav-h)] pb-[var(--space-xl)] overflow-hidden"
    >
      {/* Background food photo with slow scale entrance and multiply overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <m.div
          initial={{ scale: 1.06, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
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

        {/* Dark multiply & directional gradient overlays for crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/30 md:via-black/70 md:to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-top)] via-transparent to-[var(--bg-top)] opacity-80" />
        <div className="absolute inset-0 bg-radial-[at_20%_40%] from-transparent via-black/40 to-black/90" />
      </div>

      {/* Hero Content */}
      <div className="container-fluid relative z-10 py-[var(--space-m)]">
        <div className="max-w-[850px] flex flex-col items-start text-left">
          {/* Eyebrow */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block font-serif italic text-[#FDB03F] text-[length:var(--text-eyebrow)] mb-[var(--space-xs)] drop-shadow-sm">
              {SITE_DATA.hero.eyebrow}
            </span>
          </m.div>

          {/* Main Headline */}
          <m.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic text-[length:var(--text-hero)] leading-[1.05] tracking-tight text-gradient-cream shadow-title"
          >
            {SITE_DATA.hero.headlinePart1}
            <span className="text-gradient-gold not-italic font-serif italic">
              {SITE_DATA.hero.headlineAccent}
            </span>
            {SITE_DATA.hero.headlinePart2}
          </m.h1>

          {/* Subtitle / Paragraph */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[length:var(--text-body)] text-[#E7DFCC] leading-relaxed max-w-[58ch] mt-[var(--space-m)] mb-[var(--space-l)] opacity-90"
          >
            {SITE_DATA.hero.description}
          </m.p>

          {/* Action Buttons */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-[var(--space-s)] w-full sm:w-auto"
          >
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
          </m.div>

          {/* Hero In-place WhatsApp Mulai Chat Pill */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-[var(--space-m)]"
          >
            <Link
              href={SITE_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#E8E0CE] hover:bg-[#F3EDC8] text-[#410704] rounded-full shadow-lg transition-all group"
            >
              <div className="relative w-5 h-5 flex-shrink-0">
                <Image
                  src={ASSETS.vectors.whatsappSvg}
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-semibold underline underline-offset-4 decoration-[#410704]/50 group-hover:decoration-[#410704]">
                {SITE_DATA.hero.ctaWhatsApp}
              </span>
            </Link>
          </m.div>
        </div>
      </div>
    </section>
  );
}
