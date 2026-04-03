"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navLinks } from "@/data/content";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 80;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? "rgba(255, 248, 240, 0.95)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          boxShadow: isScrolled ? "0 2px 20px rgba(61, 30, 14, 0.08)" : "none",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <a
              href="#"
              className="font-[family-name:var(--font-script)] text-2xl sm:text-3xl font-bold text-chocolate hover:text-waffle transition-colors"
            >
              LYLYLAND
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative font-[family-name:var(--font-body)] text-sm font-medium text-chocolate-mid hover:text-waffle transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-waffle transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-chocolate hover:text-waffle transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Drip line when scrolled */}
        {isScrolled && (
          <div className="h-[3px] bg-gradient-to-r from-transparent via-waffle to-transparent opacity-30" />
        )}
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-lg pt-20 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-[family-name:var(--font-heading)] text-2xl font-medium text-chocolate hover:text-waffle transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
