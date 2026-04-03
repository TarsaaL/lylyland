"use client";

import { motion } from "framer-motion";
import { FloatingScoop } from "@/components/animations/FloatingScoop";
import { letterStagger, letterChild, fadeInUp, bounceIn } from "@/lib/animations";
import { ChevronDown } from "lucide-react";

const TITLE = "LYLYLAND";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-cream to-cream-dark">
      <FloatingScoop />

      {/* Mountain silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: "180px" }}
        >
          <path
            d="M0,200 L0,120 Q120,40 240,100 Q360,160 480,80 Q560,30 640,70 Q720,110 800,50 Q900,0 1000,60 Q1100,120 1200,70 Q1300,20 1440,80 L1440,200 Z"
            fill="#3D1E0E"
            opacity="0.06"
          />
          <path
            d="M0,200 L0,140 Q180,70 320,120 Q460,170 600,100 Q700,50 800,90 Q900,130 1040,70 Q1160,30 1300,100 Q1380,130 1440,110 L1440,200 Z"
            fill="#3D1E0E"
            opacity="0.03"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Animated title */}
        <motion.h1
          variants={letterStagger}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-script)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-chocolate mb-4"
        >
          {TITLE.split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterChild}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Decorative drips under title */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center gap-4 mb-6 origin-top"
        >
          {[40, 25, 50, 20, 35].map((h, i) => (
            <div
              key={i}
              className="rounded-full bg-waffle/30"
              style={{ width: 6, height: h }}
            />
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl md:text-3xl text-chocolate-mid mb-2"
        >
          Glacier & Salon de The Artisanal
        </motion.p>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="font-[family-name:var(--font-body)] text-base sm:text-lg text-chocolate-mid/70 mb-8"
        >
          Au coeur du Vercors, des glaces faites avec amour
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={bounceIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#glaces"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-waffle text-white font-[family-name:var(--font-heading)] font-medium text-lg hover:bg-waffle-dark transition-colors animate-gentle-pulse"
          >
            Decouvrir nos parfums
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-chocolate/20 text-chocolate font-[family-name:var(--font-heading)] font-medium text-lg hover:border-waffle hover:text-waffle transition-colors"
          >
            Nous trouver
          </a>
        </motion.div>

        {/* Reopening badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 15 }}
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pistache/15 border border-pistache/30"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-pistache animate-pulse" />
          <span className="font-[family-name:var(--font-body)] text-sm font-medium text-chocolate-mid">
            Ouvert depuis le 4 avril !
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-chocolate/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
