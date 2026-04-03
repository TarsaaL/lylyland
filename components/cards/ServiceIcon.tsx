"use client";

import { motion } from "framer-motion";
import { bounceIn } from "@/lib/animations";
import {
  Sun,
  Truck,
  Baby,
  Wifi,
  Accessibility,
  ShoppingBag,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Sun,
  Truck,
  Baby,
  Wifi,
  Accessibility,
  ShoppingBag,
};

interface ServiceIconProps {
  icon: string;
  label: string;
  description: string;
}

export function ServiceIcon({ icon, label, description }: ServiceIconProps) {
  const IconComp = ICON_MAP[icon] || Sun;

  return (
    <motion.div
      variants={bounceIn}
      whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } }}
      className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/60 border border-chocolate/5 hover:border-waffle/20 transition-colors cursor-default"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-waffle/10 text-waffle">
        <IconComp className="w-6 h-6" />
      </div>
      <div className="text-center">
        <p className="font-[family-name:var(--font-heading)] text-sm font-medium text-chocolate">
          {label}
        </p>
        <p className="font-[family-name:var(--font-body)] text-xs text-chocolate-mid/60 mt-0.5">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
