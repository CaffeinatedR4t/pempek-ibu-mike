"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

interface ParallaxProps {
  children: ReactNode;
  distance?: number;
  className?: string;
}

export function Parallax({ children, distance = 40, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <m.div style={{ y }} className="w-full h-full">
        {children}
      </m.div>
    </div>
  );
}
