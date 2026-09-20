import type { Variants, Transition } from "framer-motion";

export const EASING_DEFAULT = [0.22, 1, 0.36, 1] as const;

export const TRANSITION_DEFAULT: Transition = {
  duration: 0.75,
  ease: EASING_DEFAULT,
};

export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_DEFAULT,
  },
};

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: EASING_DEFAULT,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    transition: { duration: 0.3, ease: EASING_DEFAULT },
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3, ease: EASING_DEFAULT },
  },
};

export const buttonTapMotion = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.97 },
};
