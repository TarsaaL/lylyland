"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface FlavorCardProps {
  name: string;
  color: string;
  origin?: string;
  qualifier?: string;
}

export function FlavorCard({ name, color, origin, qualifier }: FlavorCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex items-center gap-3 p-4 rounded-2xl bg-white/70 border border-chocolate/5 hover:shadow-lg hover:shadow-waffle/10 transition-shadow duration-300 cursor-default"
    >
      {/* Color dot */}
      <div className="relative flex-shrink-0">
        <div
          className="w-8 h-8 rounded-full transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: color }}
        />
        {/* Melt effect on hover */}
        <div
          className="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-0 rounded-full transition-all duration-500 group-hover:h-3 opacity-0 group-hover:opacity-60"
          style={{ backgroundColor: color }}
        />
      </div>

      <div className="min-w-0">
        <p className="font-[family-name:var(--font-heading)] text-sm font-medium text-chocolate truncate">
          {name}
        </p>
        {(origin || qualifier) && (
          <p className="font-[family-name:var(--font-script)] text-xs text-chocolate-mid/60">
            {origin || qualifier}
          </p>
        )}
      </div>
    </motion.div>
  );
}
