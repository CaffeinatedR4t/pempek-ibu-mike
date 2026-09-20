import Image from "next/image";

interface TrustBadgeProps {
  title: string;
  subtitle: string;
  badge?: string;
  iconSrc?: string;
  className?: string;
}

export function TrustBadge({
  title,
  subtitle,
  badge,
  iconSrc,
  className = "",
}: TrustBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-[var(--radius-btn)] bg-gradient-to-r from-[rgba(102,9,3,0.7)] to-[rgba(80,16,11,0.85)] border border-[rgba(253,176,63,0.35)] shadow-md backdrop-blur-sm ${className}`}
    >
      {iconSrc && (
        <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
          <Image
            src={iconSrc}
            alt={title}
            width={32}
            height={32}
            className="w-full h-full object-contain filter brightness-110"
          />
        </div>
      )}
      <div className="flex flex-col text-left">
        <span className="font-serif italic font-medium text-[#FDB03F] text-base leading-tight">
          {title}
        </span>
        <span className="font-sans text-xs text-[#E7DFCC] opacity-80 leading-tight">
          {subtitle}
        </span>
        {badge && (
          <span className="text-[10px] text-[#F3EDC8] font-semibold tracking-wider uppercase opacity-90 mt-0.5">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}
