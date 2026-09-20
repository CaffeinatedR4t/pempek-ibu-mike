"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { ASSETS } from "@/lib/assets";
import { SITE_DATA } from "@/content/siteData";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const lenis = useLenis();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Freeze Lenis scrolling while mobile menu is active
  useEffect(() => {
    if (!lenis) return;
    if (mobileMenuOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [mobileMenuOpen, lenis]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (lenis) {
      const headerHeight = document.querySelector("header")?.offsetHeight ?? 80;
      lenis.scrollTo(targetId, { offset: -headerHeight, duration: 1.2 });
    } else {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(74,20,17,0.85)] backdrop-blur-md shadow-lg border-b border-[rgba(253,176,63,0.15)]"
          : "bg-[rgba(102,9,3,0.58)] backdrop-blur-sm"
      } h-[var(--nav-h)]`}
    >
      <div className="container-fluid h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#beranda"
          onClick={(e) => handleNavClick(e, "#beranda")}
          className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded"
        >
          <div className="relative w-11 h-11 md:w-13 md:h-13 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={ASSETS.logo.svg}
              alt="Pempek Ibu Mike Logo"
              width={52}
              height={52}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif italic font-bold text-lg md:text-xl text-[#FDB03F] tracking-wide leading-tight">
              Pempek Ibu Mike
            </span>
            <span className="font-sans text-[10px] md:text-xs text-[#E7DFCC] opacity-80 tracking-wider uppercase">
              Asli Palembang
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-[var(--space-l)]">
          {SITE_DATA.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-sans text-[length:var(--text-small)] text-[#E7DFCC] hover:text-[#FDB03F] transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded py-1 px-2"
            >
              {link.label}
            </a>
          ))}

          {/* Hubungi Kami CTA */}
          <Button
            href="#kontak"
            onClick={() => {
              if (lenis) {
                const headerHeight = document.querySelector("header")?.offsetHeight ?? 80;
                lenis.scrollTo("#kontak", { offset: -headerHeight });
              }
            }}
            variant="maroon-gradient"
            className="!min-h-[44px] !px-5 !text-sm !font-semibold"
          >
            Hubungi Kami
          </Button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded text-[#E7DFCC] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#E7DFCC] transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#E7DFCC] my-1.5 transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#E7DFCC] transition-transform duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          data-lenis-prevent
          className="md:hidden fixed inset-x-0 top-[var(--nav-h)] bg-[rgba(47,13,11,0.98)] backdrop-blur-xl border-b border-[rgba(253,176,63,0.2)] p-6 shadow-2xl transition-all"
        >
          <nav className="flex flex-col gap-4">
            {SITE_DATA.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-lg text-[#E7DFCC] hover:text-[#FDB03F] py-2 border-b border-[rgba(231,223,204,0.1)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <Button
                href={SITE_DATA.whatsappUrl}
                variant="whatsapp"
                className="w-full"
              >
                Pesan via WhatsApp
              </Button>
              <Button
                href="#kontak"
                variant="maroon"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (lenis) {
                    const headerHeight = document.querySelector("header")?.offsetHeight ?? 80;
                    lenis.scrollTo("#kontak", { offset: -headerHeight });
                  }
                }}
                className="w-full"
              >
                Hubungi Kami
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
