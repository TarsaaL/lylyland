"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function SectionHeading({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-chocolate">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 font-[family-name:var(--font-script)] text-xl sm:text-2xl text-chocolate-mid">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
