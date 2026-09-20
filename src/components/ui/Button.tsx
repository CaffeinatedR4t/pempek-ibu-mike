"use client";

import { m } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";

type ButtonVariant = "cream" | "maroon" | "maroon-gradient" | "whatsapp" | "outline";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "cream",
  href,
  onClick,
  className = "",
  target,
  rel,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-sans font-medium transition-colors cursor-pointer select-none text-center outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]";

  const sizeClasses = "px-[var(--space-l)] py-[var(--space-xs)] min-h-[var(--btn-h)] rounded-[var(--radius-btn)] text-[length:var(--text-body)]";

  const variantStyles: Record<ButtonVariant, string> = {
    cream:
      "bg-[#E7DFCC] hover:bg-[#F3EDC8] text-[#130304] font-semibold shadow-btn border border-transparent",
    maroon:
      "bg-gradient-to-r from-[#660903] to-[#50100B] hover:brightness-110 text-[#F3EDC8] border border-[rgba(253,176,63,0.3)] shadow-btn",
    "maroon-gradient":
      "bg-gradient-to-r from-[#640A04] to-[#510F0B] hover:brightness-110 text-[#F3EDC8] border border-[rgba(253,176,63,0.25)] shadow-btn",
    whatsapp:
      "bg-[#E8E0CE] hover:bg-[#F5EFE0] text-[#410704] font-semibold shadow-btn border border-transparent",
    outline:
      "bg-transparent border border-[#E7DFCC] hover:bg-[rgba(231,223,204,0.1)] text-[#E7DFCC] shadow-btn",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {variant === "whatsapp" && (
        <span className="relative w-5 h-5 flex-shrink-0">
          <Image
            src={ASSETS.vectors.whatsappSvg}
            alt=""
            width={20}
            height={20}
            className="w-full h-full object-contain"
          />
        </span>
      )}
      <span>{children}</span>
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    const finalRel = isExternal ? rel || "noopener noreferrer" : rel;
    const finalTarget = isExternal ? target || "_blank" : target;

    return (
      <m.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
        className="inline-block"
      >
        <Link
          href={href}
          target={finalTarget}
          rel={finalRel}
          onClick={onClick}
          className={combinedClasses}
        >
          {content}
        </Link>
      </m.div>
    );
  }

  return (
    <m.button
      type={type}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={combinedClasses}
    >
      {content}
    </m.button>
  );
}
