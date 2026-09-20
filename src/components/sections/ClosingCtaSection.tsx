import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { SITE_DATA } from "@/content/siteData";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

export function ClosingCtaSection() {
  return (
    <section
      id="pesan"
      className="relative py-[calc(var(--section-y)*1.2)] overflow-hidden flex items-center justify-center min-h-[550px]"
    >
      {/* Full-bleed food photo background with subtle parallax drift */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Parallax distance={50} className="w-full h-full">
          <Image
            src={ASSETS.closing.bg}
            alt="Aneka Pempek Ibu Mike Palembang"
            fill
            sizes="100vw"
            className="object-cover object-center scale-110"
          />
        </Parallax>
        {/* Dark vignette & multiply overlays for optimal readability */}
        <div className="absolute inset-0 bg-black/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-top)] via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="container-fluid relative z-10 text-center">
        <Reveal>
          <div className="max-w-[850px] mx-auto flex flex-col items-center">
            {/* Big Headline */}
            <h2 className="font-serif italic text-[length:var(--text-hero)] leading-[1.05] tracking-tight shadow-title mb-[var(--space-m)] text-balance">
              <span className="text-gradient-gold-cta">
                {SITE_DATA.closingCtaSection.goldWord}
              </span>
              <span className="text-gradient-cream">
                {SITE_DATA.closingCtaSection.whiteText}
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="font-sans text-[length:var(--text-body)] text-[#E7DFCC] leading-relaxed max-w-[56ch] mx-auto mb-[var(--space-l)] opacity-90 text-pretty">
              {SITE_DATA.closingCtaSection.description}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                href={SITE_DATA.whatsappUrl}
                variant="whatsapp"
                className="!px-[var(--space-xl)] !text-base"
              >
                {SITE_DATA.closingCtaSection.cta}
              </Button>
            </div>

            <span className="mt-4 text-xs text-[#E7DFCC]/70 font-sans tracking-wider">
              {SITE_DATA.location} • {SITE_DATA.operatingHours}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
