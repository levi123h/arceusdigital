"use client";

import { motion } from "framer-motion";

export const MotionDiv = motion.div;

export const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const },
};

