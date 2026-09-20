import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { SITE_DATA } from "@/content/siteData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";

export function ServicesSection() {
  return (
    <section
      id="layanan"
      className="relative py-[var(--section-y)] overflow-hidden"
    >
      {/* Subtle Supergraphic background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="relative w-full h-full opacity-10">
          <Image
            src={ASSETS.supergraphics.pattern}
            alt=""
            fill
            className="object-cover object-bottom"
          />
        </div>
      </div>

      <div className="container-fluid relative z-10">
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow={SITE_DATA.servicesSection.eyebrow}
            title={SITE_DATA.servicesSection.title}
            align="center"
            className="mb-[var(--space-xl)]"
          />
        </Reveal>

        {/* 4 Image Service Tiles */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-m)]">
          {SITE_DATA.servicesSection.items.map((service) => (
            <StaggerItem key={service.id}>
              <div className="group relative rounded-2xl overflow-hidden bg-[#2F0D0B]/60 border border-[rgba(253,176,63,0.2)] shadow-xl transition-all duration-300 hover:border-[rgba(253,176,63,0.5)] hover:-translate-y-1.5 flex flex-col h-full">
                {/* Tile Image */}
                <div className="relative w-full aspect-[424/431] overflow-hidden bg-black/40">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>

                {/* Content Caption */}
                <div className="p-[var(--space-s)] flex flex-col flex-grow justify-between bg-gradient-to-b from-transparent to-black/50">
                  <div>
                    <h3 className="font-serif italic text-2xl text-[#FDB03F] group-hover:text-[#F3EDC8] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm text-[#E7DFCC]/85 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[rgba(253,176,63,0.15)] flex items-center justify-between">
                    <span className="text-xs text-[#E7DFCC]/70 font-sans">
                      Bogor • Tangsel • Jkt
                    </span>
                    <span className="text-xs text-[#FDB03F] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Pesan →
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA Button */}
        <Reveal delay={0.2} className="mt-[var(--space-xl)] text-center">
          <Button
            href={SITE_DATA.whatsappUrl}
            variant="maroon"
            className="!px-[var(--space-xl)]"
          >
            {SITE_DATA.servicesSection.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
