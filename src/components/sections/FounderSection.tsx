import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { SITE_DATA } from "@/content/siteData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function FounderSection() {
  return (
    <section className="relative py-[var(--section-y)] overflow-hidden">
      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-l)] items-center">
          {/* Left: Founder Photo (Ibu Mike) */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal yOffset={30} className="w-full max-w-[480px]">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[rgba(253,176,63,0.3)] aspect-[706/776] group">
                <Image
                  src={ASSETS.founder.photo}
                  alt="Ibu Mike — Founder Pempek Ibu Mike"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="font-serif italic text-2xl text-[#FDB03F] block">
                    Ibu Mike
                  </span>
                  <span className="font-sans text-xs text-[#E7DFCC] tracking-wider uppercase opacity-80">
                    Founder & Pemilik Resep
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Narrative and Pull-Quote */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow={SITE_DATA.founderSection.eyebrow}
                title={SITE_DATA.founderSection.title}
                align="left"
                className="mb-[var(--space-m)]"
              />
            </Reveal>

            {/* Paragraphs */}
            <div className="flex flex-col gap-[var(--space-m)] font-sans text-[length:var(--text-body)] text-[#E7DFCC] opacity-90 leading-relaxed max-w-[62ch]">
              {SITE_DATA.founderSection.paragraphs.map((p, idx) => (
                <Reveal key={idx} delay={0.2 + idx * 0.1}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            {/* Gold Pull-Quote */}
            <Reveal delay={0.4} className="mt-[var(--space-l)]">
              <blockquote className="relative p-6 rounded-2xl bg-[rgba(102,9,3,0.4)] border-l-4 border-[#F5AB3D] backdrop-blur-sm">
                <p className="font-serif italic text-[#F5AB3D] text-[length:var(--text-body)] leading-snug">
                  {SITE_DATA.founderSection.quote}
                </p>
                <cite className="block mt-3 font-sans text-xs text-[#E7DFCC] opacity-75 not-italic tracking-wider uppercase">
                  — Ibu Mike
                </cite>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
