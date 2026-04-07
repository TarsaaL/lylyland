"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { contact } from "@/data/content";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-cream">
      <Container>
        <SectionHeading
          title="Nous Trouver"
          subtitle="Venez nous voir au cœur du Vercors !"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Map */}
          <ScrollReveal variants={slideInLeft} className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden border border-chocolate/10 shadow-lg shadow-chocolate/5 w-full" style={{ aspectRatio: "4/3" }}>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000!2d${contact.coordinates.lng}!3d${contact.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU4JzAwLjAiTiA1wrAyNScwNS42IkU!5e0!3m2!1sfr!2sfr!4v1`}
                className="w-full h-full block"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LYLYLAND - La Chapelle en Vercors"
              />
            </div>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal variants={slideInRight} className="lg:col-span-2">
            <div className="p-8 rounded-3xl bg-white/60 border border-chocolate/5 h-full flex flex-col justify-center">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-chocolate mb-8">
                Contactez-nous
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <a
                  href={contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-waffle/10 text-waffle flex-shrink-0 group-hover:bg-waffle group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-body)] text-sm font-medium text-chocolate group-hover:text-waffle transition-colors">
                      {contact.address}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-sm text-chocolate-mid">
                      {contact.postalCode} {contact.city}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-pistache/10 text-pistache flex-shrink-0 group-hover:bg-pistache group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-[family-name:var(--font-body)] text-sm font-medium text-chocolate group-hover:text-pistache transition-colors">
                    {contact.phoneDisplay}
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-framboise/10 text-framboise flex-shrink-0 group-hover:bg-framboise group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-[family-name:var(--font-body)] text-sm font-medium text-chocolate group-hover:text-framboise transition-colors">
                    {contact.email}
                  </span>
                </a>
              </div>

              {/* Directions button */}
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-waffle text-white font-[family-name:var(--font-heading)] font-medium text-sm hover:bg-waffle-dark transition-colors w-full"
              >
                Itinéraire
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
