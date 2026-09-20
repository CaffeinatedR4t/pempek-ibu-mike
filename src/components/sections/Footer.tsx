"use client";

import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { ASSETS } from "@/lib/assets";
import { SITE_DATA } from "@/content/siteData";

export function Footer() {
  const lenis = useLenis();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    if (lenis) {
      const headerHeight = document.querySelector("header")?.offsetHeight ?? 80;
      lenis.scrollTo(targetId, { offset: -headerHeight, duration: 1.2 });
    } else {
      document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#2F0D0B] to-[#580A0A] text-[#F7E2B5] pt-12 pb-10 overflow-hidden border-t border-[rgba(253,176,63,0.15)]">
      {/* Decorative Scalloped / Wave Top Edge SVG */}
      <div className="absolute top-0 inset-x-0 -translate-y-[98%] pointer-events-none select-none opacity-40">
        <div className="relative w-full h-8 md:h-12">
          <Image
            src={ASSETS.supergraphics.scallop}
            alt=""
            fill
            className="object-cover object-bottom"
          />
        </div>
      </div>

      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[rgba(247,226,181,0.15)]">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              href="#beranda"
              onClick={(e) => handleNavClick(e, "#beranda")}
              className="flex items-center gap-3 mb-5 group"
            >
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src={ASSETS.logo.svg}
                  alt="Pempek Ibu Mike Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif italic font-bold text-2xl text-[#FDB03F]">
                Pempek Ibu Mike
              </span>
            </Link>

            <p className="font-sans text-sm text-[#F7E2B5]/85 leading-relaxed max-w-[38ch]">
              {SITE_DATA.footer.description}
            </p>
          </div>

          {/* Column: Sections */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="font-serif italic text-2xl text-gradient-gold-footer mb-4">
              {SITE_DATA.footer.sectionsTitle}
            </h3>
            <ul className="flex flex-col gap-2.5 font-sans text-sm text-[#F7E2B5]/85">
              <li>
                <a
                  href="#beranda"
                  onClick={(e) => handleNavClick(e, "#beranda")}
                  className="hover:text-[#FDB03F] transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleNavClick(e, "#menu")}
                  className="hover:text-[#FDB03F] transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#tentang-kami"
                  onClick={(e) => handleNavClick(e, "#tentang-kami")}
                  className="hover:text-[#FDB03F] transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#kontak"
                  onClick={(e) => handleNavClick(e, "#kontak")}
                  className="hover:text-[#FDB03F] transition-colors"
                >
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Socials */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="font-serif italic text-2xl text-gradient-gold-footer mb-4">
              {SITE_DATA.footer.socialsTitle}
            </h3>
            <ul className="flex flex-col gap-2.5 font-sans text-sm text-[#F7E2B5]/85">
              {SITE_DATA.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FDB03F] transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Informasi */}
          <div className="lg:col-span-4">
            <h3 className="font-serif italic text-2xl text-gradient-gold-footer mb-4">
              {SITE_DATA.footer.infoTitle}
            </h3>
            <ul className="flex flex-col gap-2 font-sans text-sm text-[#F7E2B5]/85">
              <li>{SITE_DATA.location}</li>
              <li>{SITE_DATA.operatingHours}</li>
              <li>
                Pemesanan:{" "}
                <a
                  href={SITE_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FDB03F] underline underline-offset-2 hover:text-white transition-colors"
                >
                  Via WhatsApp ({SITE_DATA.phone})
                </a>
              </li>
              <li>Wilayah: {SITE_DATA.coverageArea}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F7E2B5]/70 gap-3">
          <p>© {new Date().getFullYear()} {SITE_DATA.name}. Hak Cipta Dilindungi.</p>
          <p className="font-medium tracking-wide text-[#F7E2B5]">
            {SITE_DATA.footer.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
