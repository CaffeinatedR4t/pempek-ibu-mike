"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function Reveal({ children, className = "", delay = 0, yOffset = 24 }: RevealProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay,
        },
      }}
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </m.div>
  );
}
