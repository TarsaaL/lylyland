"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/shared/Container";
import { CreationCard } from "@/components/cards/CreationCard";
import { BubbleFloat } from "@/components/animations/BubbleFloat";
import { creations } from "@/data/content";
import { staggerContainer } from "@/lib/animations";

export function CreationsSection() {
  return (
    <section id="creations" className="relative py-20 sm:py-28 bg-cream overflow-hidden">
      {/* Bubbles in background */}
      <BubbleFloat count={15} className="opacity-60" />

      <Container className="relative z-10">
        <SectionHeading
          title="Nos Creations Gourmandes"
          subtitle="Bubble waffles, crepes & patisseries"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {creations.map((creation) => (
            <CreationCard key={creation.title} {...creation} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
