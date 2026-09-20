import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { SITE_DATA } from "@/content/siteData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { Reveal } from "@/components/motion/Reveal";

export function StorySection() {
  return (
    <section
      id="tentang-kami"
      className="relative py-[var(--section-y)] overflow-hidden"
    >
      {/* Decorative Pempek Supergraphic 1 (Continuous Palembang motif backdrop) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="relative w-full h-full opacity-25 mix-blend-screen filter contrast-150 brightness-125">
          <Image
            src={ASSETS.supergraphics.pattern}
            alt=""
            fill
            className="object-cover object-center scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-transparent via-[var(--bg-top)]/60 to-[var(--bg-top)] pointer-events-none" />
      </div>

      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-l)] items-center">
          {/* Left Column: Brand Story Image with "Berdiri Sejak 2017" badge */}
          <div className="lg:col-span-6 flex justify-center">
            <Reveal yOffset={30} className="w-full max-w-[620px]">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[rgba(253,176,63,0.25)] aspect-[895/856] group">
                <Image
                  src={ASSETS.story.main}
                  alt="Pempek Ibu Mike Berdiri Sejak 2017"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                />
                {/* Subtle sheen highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/10 opacity-70" />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative and Certifications */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow={SITE_DATA.storySection.eyebrow}
                title={SITE_DATA.storySection.title}
                align="left"
                className="mb-[var(--space-m)]"
              />
            </Reveal>

            {/* Story Paragraphs */}
            <div className="flex flex-col gap-[var(--space-m)] font-sans text-[length:var(--text-body)] text-[#E7DFCC] opacity-90 leading-relaxed mb-[var(--space-l)] max-w-[60ch]">
              {SITE_DATA.storySection.paragraphs.map((p, idx) => (
                <Reveal key={idx} delay={0.2 + idx * 0.1}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            {/* Certifications Trust Badges (NIB, P-IRT, HALAL MUI) */}
            <Reveal delay={0.5} className="w-full">
              <div className="pt-4 border-t border-[rgba(253,176,63,0.2)]">
                <span className="block font-sans text-xs uppercase tracking-wider text-[#FDB03F] mb-3 font-semibold">
                  Legalitas & Standar Mutu Terjamin
                </span>
                <div className="flex flex-wrap gap-3">
                  {SITE_DATA.storySection.certifications.map((cert) => (
                    <TrustBadge
                      key={cert.id}
                      title={cert.title}
                      subtitle={cert.subtitle}
                      badge={cert.badge}
                      iconSrc={cert.icon}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
