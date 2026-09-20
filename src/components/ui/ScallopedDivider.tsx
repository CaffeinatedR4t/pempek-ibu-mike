import Image from "next/image";
import { ASSETS } from "@/lib/assets";

interface ScallopedDividerProps {
  className?: string;
  flip?: boolean;
  scale?: "standard" | "large";
}

export function ScallopedDivider({
  className = "",
  flip = false,
  scale = "standard",
}: ScallopedDividerProps) {
  const heightClass =
    scale === "large"
      ? "h-20 sm:h-28 md:h-36 lg:h-44"
      : "h-14 sm:h-20 md:h-24 lg:h-28";

  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden pointer-events-none select-none relative z-20 flex justify-center items-center ${className}`}
    >
      <div
        className={`relative w-[135vw] min-w-[1600px] max-w-[2800px] flex-shrink-0 ${heightClass} ${
          flip ? "rotate-180" : ""
        }`}
      >
        <Image
          src={ASSETS.supergraphics.scallop}
          alt=""
          fill
          priority
          className="object-cover object-center filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] opacity-95"
        />
      </div>
    </div>
  );
}
