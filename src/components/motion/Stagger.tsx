"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainerVariants, fadeInUpVariants } from "@/lib/motion";

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

export function StaggerContainer({ children, className = "" }: StaggerProps) {
  return (
    <m.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <m.div variants={fadeInUpVariants} className={className}>
      {children}
    </m.div>
  );
}
