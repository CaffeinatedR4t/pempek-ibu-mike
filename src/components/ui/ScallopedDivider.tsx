import Image from "next/image";
import { ASSETS } from "@/lib/assets";

interface ScallopedDividerProps {
  className?: string;
  flip?: boolean;
}

export function ScallopedDivider({ className = "", flip = false }: ScallopedDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden pointer-events-none select-none z-20 ${className}`}
    >
      <div
        className={`relative w-[110%] -left-[5%] h-12 md:h-18 lg:h-24 ${
          flip ? "rotate-180" : ""
        }`}
      >
        <Image
          src={ASSETS.supergraphics.scallop}
          alt=""
          fill
          priority
          className="object-cover object-center filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] opacity-90"
        />
      </div>
    </div>
  );
}
