"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/shared/Container";
import { FlavorCard } from "@/components/cards/FlavorCard";
import { flavors } from "@/data/content";
import { staggerContainer } from "@/lib/animations";
import { IceCream, Cherry } from "lucide-react";

type Tab = "glaces" | "sorbets";

export function FlavorsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("glaces");

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "glaces", label: "Glaces", icon: <IceCream className="w-4 h-4" /> },
    { key: "sorbets", label: "Sorbets", icon: <Cherry className="w-4 h-4" /> },
  ];

  return (
    <section id="glaces" className="relative py-20 sm:py-28 bg-cream-dark">
      <Container>
        <SectionHeading
          title="Nos Glaces & Sorbets"
          subtitle="25 parfums artisanaux, faits maison !"
        />

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-[family-name:var(--font-heading)] font-medium text-sm transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-waffle text-white shadow-lg shadow-waffle/20"
                  : "bg-white/50 text-chocolate-mid hover:bg-white"
              }`}
            >
              {tab.icon}
              {tab.label}
              {activeTab === tab.key && (
                <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-white/20">
                  {flavors[tab.key].length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Flavor grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {flavors[activeTab].map((flavor) => (
              <FlavorCard key={flavor.name} {...flavor} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note about half-liter */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 font-[family-name:var(--font-script)] text-lg text-chocolate-mid/60"
        >
          Disponibles en pots d&apos;un demi-litre à emporter
        </motion.p>
      </Container>
    </section>
  );
}
