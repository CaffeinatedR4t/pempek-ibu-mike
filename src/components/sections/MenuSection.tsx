"use client";

import { useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { ASSETS } from "@/lib/assets";
import { SITE_DATA } from "@/content/siteData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";

export function MenuSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="menu"
      className="relative py-[var(--section-y)] overflow-hidden"
    >
      {/* Decorative Pempek Supergraphic 1 (Visible traditional songket/pempek pattern) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="relative w-full h-full opacity-35 mix-blend-screen filter contrast-150 brightness-125">
          <Image
            src={ASSETS.supergraphics.pattern}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-transparent via-[var(--bg-top)]/50 to-[var(--bg-top)] pointer-events-none" />
      </div>

      <div className="container-fluid relative z-10">
        {/* Section Header */}
        <Reveal>
          <SectionHeading
            eyebrow={SITE_DATA.menuSection.eyebrow}
            title={SITE_DATA.menuSection.title}
            subtitle={SITE_DATA.menuSection.subtitle}
            align="center"
            className="mb-[var(--space-xl)]"
          />
        </Reveal>

        {/* 4 Featured Menu Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-m)]">
          {SITE_DATA.menuSection.featuredItems.map((item) => (
            <StaggerItem key={item.id}>
              <div className="group relative flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-[#4A1411]/40 to-black/60 border border-[rgba(253,176,63,0.18)] shadow-2xl transition-all duration-300 hover:border-[rgba(253,176,63,0.45)] hover:-translate-y-1">
                {/* Product Image Container */}
                <div className="relative w-full aspect-[424/410] overflow-hidden bg-black/40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-106"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badge tag if present */}
                  {item.tag && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-[rgba(102,9,3,0.85)] border border-[rgba(253,176,63,0.4)] text-[#FDB03F] text-xs font-semibold rounded-full backdrop-blur-sm shadow-md">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Card Information */}
                <div className="p-[var(--space-s)] flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif italic text-2xl text-[#FDB03F] group-hover:text-[#F3EDC8] transition-colors mb-1.5">
                      {item.name}
                    </h3>
                    <p className="font-sans text-sm text-[#E7DFCC]/85 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[rgba(231,223,204,0.1)] flex items-center justify-between">
                    <span className="text-xs text-[#E7DFCC]/70 font-sans">
                      100% Tenggiri Murni
                    </span>
                    <Button
                      href={SITE_DATA.whatsappUrl}
                      variant="cream"
                      className="!min-h-[36px] !px-3 !py-1 !text-xs !font-semibold"
                    >
                      Pesan
                    </Button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Menu CTA */}
        <Reveal delay={0.2} className="mt-[var(--space-xl)] text-center">
          <Button
            variant="cream"
            onClick={() => setModalOpen(true)}
            className="!px-[var(--space-xl)]"
          >
            Lihat Semua Menu
          </Button>
        </Reveal>
      </div>

      {/* Full Menu Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div
            data-lenis-prevent
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setModalOpen(false)}
          >
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#2F0D0B] to-[#130304] border border-[rgba(253,176,63,0.3)] rounded-3xl p-6 md:p-10 shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-[#E7DFCC] hover:text-[#FDB03F] transition-colors border border-[rgba(253,176,63,0.2)] focus:outline-none"
                aria-label="Tutup menu"
              >
                ✕
              </button>

              <div className="text-center mb-8">
                <span className="font-serif italic text-[#FDB03F] text-xl">
                  Daftar Lengkap
                </span>
                <h3 className="font-serif italic text-3xl md:text-4xl text-gradient-cream mt-1">
                  Menu Pempek Ibu Mike
                </h3>
                <p className="font-sans text-sm text-[#E7DFCC]/80 mt-2 max-w-lg mx-auto">
                  Semua varian dibuat dari olahan ikan tenggiri asli segar tanpa pengawet. Tersedia siap santap atau frozen pack.
                </p>
              </div>

              {/* Grid of full menu items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {SITE_DATA.menuSection.allMenuItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-black/30 border border-[rgba(253,176,63,0.15)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-serif italic text-lg text-[#FDB03F]">
                          {item.name}
                        </span>
                        <span className="text-xs text-[#E7DFCC]/60">Autentik</span>
                      </div>
                      <p className="font-sans text-xs text-[#E7DFCC]/80 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons in Modal */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-[rgba(253,176,63,0.2)]">
                <Button
                  href={SITE_DATA.whatsappUrl}
                  variant="maroon"
                  className="w-full sm:w-auto"
                >
                  Pesan Sekarang via WhatsApp
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setModalOpen(false)}
                  className="w-full sm:w-auto"
                >
                  Tutup
                </Button>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
