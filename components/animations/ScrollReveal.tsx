"use client";

import { motion, type Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function ScrollReveal({
  children,
  variants = fadeInUp,
  className = "",
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
