"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { fadeInUp, slideInLeft } from "@/lib/animations";
import { Heart } from "lucide-react";

export function StorySection() {
  return (
    <section id="histoire" className="relative py-20 sm:py-28 bg-cream overflow-hidden">
      {/* Subtle mountain backdrop */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-[0.03]">
        <svg viewBox="0 0 1440 300" className="w-full block" preserveAspectRatio="none">
          <path
            d="M0,300 L0,180 Q200,60 400,140 Q600,220 800,100 Q1000,0 1200,120 Q1350,200 1440,150 L1440,300 Z"
            fill="#3D1E0E"
          />
        </svg>
      </div>

      <Container className="relative z-10">
        <SectionHeading title="Notre Histoire" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Pull quote */}
          <ScrollReveal variants={slideInLeft} className="lg:col-span-2">
            <div className="relative p-8">
              <div className="absolute top-0 left-4 font-[family-name:var(--font-script)] text-8xl text-waffle/20 leading-none">
                &ldquo;
              </div>
              <blockquote className="relative z-10 font-[family-name:var(--font-script)] text-2xl sm:text-3xl text-chocolate leading-relaxed rotate-[-1deg]">
                Chaque boule de glace est une invitation au voyage, un moment
                de bonheur simple partage en famille.
              </blockquote>
              <div className="mt-4 flex items-center gap-2">
                <Heart className="w-4 h-4 text-framboise" />
                <span className="font-[family-name:var(--font-script)] text-lg text-chocolate-mid">
                  La famille LYLYLAND
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Story text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="font-[family-name:var(--font-body)] text-base sm:text-lg text-chocolate-mid leading-relaxed">
              Au coeur du Vercors, dans le charmant village de La Chapelle en Vercors,
              LYLYLAND est bien plus qu&apos;un glacier. C&apos;est un lieu de vie ou la
              passion pour les bonnes choses se transmet en famille.
            </p>
            <p className="font-[family-name:var(--font-body)] text-base sm:text-lg text-chocolate-mid leading-relaxed">
              Lydia cree chaque jour des glaces artisanales avec des ingredients
              d&apos;exception : vanille de Madagascar, cafe de Colombie, chocolat Valrhona...
              Chaque parfum est une recette unique, elaboree avec soin et gourmandise.
            </p>
            <p className="font-[family-name:var(--font-body)] text-base sm:text-lg text-chocolate-mid leading-relaxed">
              Le salon est aussi une epicerie fine ou l&apos;on decouvre des thes bio,
              des amandes d&apos;Andalousie, et les vins soigneusement selectionnes par Pascal
              aupres des caves cooperatives du Sud.
            </p>
            <p className="font-[family-name:var(--font-body)] text-base sm:text-lg text-chocolate-mid leading-relaxed">
              Recemment, leur fille a rejoint l&apos;aventure, apportant une energie
              nouvelle a ce projet familial. Ici, on vient pour la glace, on reste
              pour l&apos;accueil.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
