"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { epicerie } from "@/data/content";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { Leaf, Wine, Coffee, CandyOff } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  bio: <Leaf className="w-4 h-4 text-pistache" />,
  chocolat: <CandyOff className="w-4 h-4 text-chocolate" />,
  patisserie: <Coffee className="w-4 h-4 text-caramel" />,
};

export function EpicerieSection() {
  return (
    <section id="epicerie" className="relative py-20 sm:py-28 bg-cream-dark">
      <Container>
        <SectionHeading
          title="Épicerie Fine & Cave à Vins"
          subtitle="Des produits sélectionnés avec soin"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Epicerie Fine */}
          <ScrollReveal variants={slideInLeft}>
            <div className="p-8 rounded-3xl bg-white/60 border border-chocolate/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-pistache/10">
                  <Leaf className="w-6 h-6 text-pistache" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-chocolate">
                  Épicerie Fine
                </h3>
              </div>

              <p className="font-[family-name:var(--font-body)] text-sm text-chocolate-mid mb-6 leading-relaxed">
                Des produits bio et artisanaux sélectionnés pour leur qualité
                exceptionnelle. Du café bio aux chocolats Valrhona, chaque
                produit raconte une histoire.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {epicerie.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={fadeInUp}
                    className="flex items-center gap-3 p-3 rounded-xl bg-cream/80 hover:bg-cream transition-colors"
                  >
                    {categoryIcons[item.category]}
                    <span className="font-[family-name:var(--font-body)] text-sm text-chocolate">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Cave a Vins */}
          <ScrollReveal variants={slideInRight}>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-myrtille/5 to-framboise/5 border border-chocolate/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-myrtille/10">
                  <Wine className="w-6 h-6 text-myrtille" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-chocolate">
                  Cave à Vins
                </h3>
              </div>

              <p className="font-[family-name:var(--font-body)] text-sm text-chocolate-mid mb-6 leading-relaxed">
                Une sélection de nectars issus de caves coopératives du Sud,
                choisie avec passion. Des vins qui accompagnent parfaitement
                un après-midi gourmand.
              </p>

              <div className="space-y-4">
                {epicerie.wines.map((wine) => (
                  <div
                    key={wine.name}
                    className="p-4 rounded-xl bg-white/40 border border-myrtille/10 hover:border-myrtille/20 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Wine className="w-4 h-4 text-myrtille/60" />
                      <h4 className="font-[family-name:var(--font-heading)] font-medium text-chocolate">
                        {wine.name}
                      </h4>
                    </div>
                    <p className="mt-1 font-[family-name:var(--font-body)] text-xs text-chocolate-mid/60">
                      {wine.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
