"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/shared/Container";
import { ServiceIcon } from "@/components/cards/ServiceIcon";
import { services, hours } from "@/data/content";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Clock, AlertCircle } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="infos" className="relative py-20 sm:py-28 bg-cream-dark">
      <Container>
        <SectionHeading
          title="Infos Pratiques"
          subtitle="Tout ce qu'il faut savoir"
        />

        {/* Services grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {services.map((service) => (
            <ServiceIcon key={service.label} {...service} />
          ))}
        </motion.div>

        {/* Opening hours */}
        <ScrollReveal>
          <div className="max-w-lg mx-auto">
            <div className="p-8 rounded-3xl bg-white/60 border border-chocolate/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-waffle/10">
                  <Clock className="w-5 h-5 text-waffle" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-chocolate">
                  Horaires d&apos;ouverture
                </h3>
              </div>

              <div className="space-y-2">
                {hours.schedule.map((day) => (
                  <div
                    key={day.day}
                    className={`flex items-center justify-between py-2 px-3 rounded-lg ${
                      day.open ? "bg-pistache/5" : ""
                    }`}
                  >
                    <span className="font-[family-name:var(--font-body)] text-sm text-chocolate">
                      {day.day}
                    </span>
                    <span
                      className={`font-[family-name:var(--font-body)] text-sm ${
                        day.open ? "text-pistache font-medium" : "text-chocolate-mid/40"
                      }`}
                    >
                      {day.open ? day.hours : "Ferme"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-2 p-3 rounded-lg bg-waffle/5">
                <AlertCircle className="w-4 h-4 text-waffle mt-0.5 flex-shrink-0" />
                <p className="font-[family-name:var(--font-body)] text-xs text-chocolate-mid">
                  {hours.note}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
