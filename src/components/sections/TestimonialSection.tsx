import { SITE_DATA } from "@/content/siteData";
import { Reveal } from "@/components/motion/Reveal";

export function TestimonialSection() {
  return (
    <section className="relative py-[var(--section-y)] overflow-hidden">
      {/* Subtle radial glow background */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
        <div className="w-[600px] h-[300px] bg-[rgba(102,9,3,0.35)] blur-[120px] rounded-full" />
      </div>

      <div className="container-fluid relative z-10 text-center">
        <Reveal>
          <div className="max-w-[960px] mx-auto flex flex-col items-center">
            {/* Eyebrow */}
            <span className="font-serif italic font-normal text-[#FDB03F] text-[length:var(--text-eyebrow)] tracking-wide mb-[var(--space-s)]">
              {SITE_DATA.testimonialSection.eyebrow}
            </span>

            {/* Large Vollkorn Italic Quote */}
            <blockquote className="my-[var(--space-s)]">
              <p className="font-serif italic text-gradient-cream text-[length:var(--text-title)] leading-tight tracking-tight max-w-[26ch] mx-auto text-balance">
                {SITE_DATA.testimonialSection.quote}
              </p>
            </blockquote>

            {/* Subtle decorative divider */}
            <div className="flex items-center gap-3 mt-[var(--space-m)]">
              <span className="w-12 h-[1px] bg-[rgba(253,176,63,0.4)]" />
              <span className="font-sans text-xs uppercase tracking-widest text-[#FDB03F] font-semibold">
                Pelanggan Setia Pempek Ibu Mike
              </span>
              <span className="w-12 h-[1px] bg-[rgba(253,176,63,0.4)]" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
