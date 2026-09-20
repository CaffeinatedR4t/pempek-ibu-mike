import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center"
      ? "text-center items-center mx-auto"
      : "text-left items-start";

  return (
    <div className={`flex flex-col gap-[var(--space-xs)] ${alignClasses} ${className}`}>
      {eyebrow && (
        <span className="font-serif italic font-normal text-[#FDB03F] text-[length:var(--text-eyebrow)] tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif italic font-normal text-gradient-cream text-[length:var(--text-title)] leading-tight max-w-[28ch] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans font-normal text-[#E7DFCC] text-[length:var(--text-body)] leading-relaxed max-w-[65ch] text-pretty mt-[var(--space-xs)] opacity-90">
          {subtitle}
        </p>
      )}
    </div>
  );
}
