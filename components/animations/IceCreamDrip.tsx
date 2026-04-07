"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function IceCreamDrip({
  color = "#E8B87A",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  // One continuous melting path: a wavy base with drips hanging down
  // All connected — like ice cream melting over the edge
  const meltPath = [
    "M 0 0",
    "L 0 6",
    // first small wave + drip
    "Q 2 6, 3 7",
    "Q 4 10, 5 14",
    "Q 5.5 16, 6 14",
    "Q 7 10, 7.5 7",
    "Q 8 6, 10 5.5",
    // gentle wave
    "Q 13 5, 15 6",
    // second drip (taller)
    "Q 17 7, 18 9",
    "Q 19 14, 20 19",
    "Q 20.5 22, 21 19",
    "Q 22 14, 23 9",
    "Q 24 7, 26 6",
    // wave
    "Q 29 5, 32 5.5",
    "Q 34 6, 35 6",
    // third small drip
    "Q 36 7, 37 10",
    "Q 37.5 12, 38 10",
    "Q 39 7, 40 6",
    // long gentle wave
    "Q 43 5, 46 5.5",
    "Q 49 6, 50 7",
    // fourth drip (tallest)
    "Q 51 9, 52 15",
    "Q 53 22, 53.5 26",
    "Q 54 28, 54.5 26",
    "Q 55 22, 56 15",
    "Q 57 9, 58 7",
    // wave
    "Q 60 5.5, 63 5",
    "Q 65 5, 67 6",
    // fifth drip
    "Q 68 8, 69 12",
    "Q 69.5 14, 70 12",
    "Q 71 8, 72 6",
    // wave
    "Q 74 5, 77 5.5",
    "Q 79 6, 80 6.5",
    // sixth drip (medium)
    "Q 81 8, 82 13",
    "Q 82.5 17, 83 20",
    "Q 83.5 22, 84 20",
    "Q 84.5 17, 85 13",
    "Q 86 8, 87 6.5",
    // final wave
    "Q 89 5.5, 91 5",
    "Q 93 5, 95 6",
    // last tiny drip
    "Q 96 8, 96.5 10",
    "Q 97 11, 97.5 10",
    "Q 98 8, 99 6",
    "Q 99.5 5.5, 100 5",
    "L 100 0",
    "Z",
  ].join(" ");

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden pointer-events-none ${className}`}
    >
      <motion.svg
        viewBox="0 0 100 30"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: "50px" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.path
          d={meltPath}
          fill={color}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "center top" }}
        />
      </motion.svg>
    </div>
  );
}
