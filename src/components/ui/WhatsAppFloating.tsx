"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";
import { SITE_DATA } from "@/content/siteData";

export function WhatsAppFloating() {
  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden md:block"
    >
      <m.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href={SITE_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#E8E0CE] hover:bg-[#F5EFE0] text-[#410704] font-sans font-semibold rounded-full shadow-2xl border border-[rgba(253,176,63,0.3)] group transition-all"
        >
          <div className="relative w-6 h-6 flex-shrink-0">
            <Image
              src={ASSETS.vectors.whatsappSvg}
              alt="WhatsApp"
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-sm font-medium underline underline-offset-4 decoration-[#410704]/40 group-hover:decoration-[#410704]">
            {SITE_DATA.hero.ctaWhatsApp}
          </span>
        </Link>
      </m.div>
    </aside>
  );
}
