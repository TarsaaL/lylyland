"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Cookie, CakeSlice, UtensilsCrossed } from "lucide-react";

const ICONS: Record<string, React.ReactNode> = {
  waffle: <Cookie className="w-10 h-10" />,
  crepe: <UtensilsCrossed className="w-10 h-10" />,
  cake: <CakeSlice className="w-10 h-10" />,
};

const BG_COLORS: Record<string, string> = {
  waffle: "from-waffle/10 to-caramel/5",
  crepe: "from-caramel/10 to-waffle/5",
  cake: "from-framboise/10 to-myrtille/5",
};

interface CreationCardProps {
  title: string;
  description: string;
  icon: string;
}

export function CreationCard({ title, description, icon }: CreationCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className={`relative p-8 rounded-3xl bg-gradient-to-br ${BG_COLORS[icon] || "from-waffle/10 to-cream"} border border-chocolate/5 overflow-hidden`}
    >
      <div className="relative z-10">
        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/80 text-waffle mb-5 shadow-sm">
          {ICONS[icon] || ICONS.waffle}
        </div>
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-chocolate mb-3">
          {title}
        </h3>
        <p className="font-[family-name:var(--font-body)] text-sm text-chocolate-mid leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
