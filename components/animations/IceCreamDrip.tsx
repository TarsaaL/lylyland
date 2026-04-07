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

  // Connected melting path — a continuous wavy bar with drips hanging down
  // ViewBox is 200x60, rendered at full width and 120px height
  // Aspect ratio: 200/60 = 3.33, rendered: ~1260/120 = 10.5
  // So horizontal is ~3.15x more stretched than vertical
  // We compensate by making drips NARROW in the viewBox (they'll get stretched wide)
  const meltPath = [
    "M 0 0",
    "L 200 0",
    "L 200 8",
    // Right side — gentle wave going left
    "C 195 8, 192 9, 190 8",
    // small drip
    "C 188 8, 187 10, 186 14",
    "C 185.5 18, 185 20, 184.5 18",
    "C 184 14, 183 10, 181 8",
    // wave
    "C 178 7, 174 8, 170 8",
    // medium drip
    "C 167 8, 165 10, 164 16",
    "C 163 24, 162.5 30, 162 34",
    "C 161.5 37, 161 38, 160.5 37",
    "C 160 34, 159.5 30, 159 24",
    "C 158 16, 157 10, 155 8",
    // wave
    "C 151 7, 146 8, 142 8.5",
    "C 138 9, 135 8, 132 8",
    // tall drip
    "C 130 8, 128 11, 127 18",
    "C 126 28, 125.5 38, 125 44",
    "C 124.7 48, 124.3 50, 124 48",
    "C 123.5 44, 123 38, 122 28",
    "C 121 18, 120 11, 118 8",
    // wave
    "C 115 7, 111 8, 107 8",
    // small drip
    "C 105 8, 104 10, 103.5 13",
    "C 103 16, 102.7 17, 102.3 16",
    "C 102 13, 101 10, 99 8",
    // wave
    "C 96 7, 92 8.5, 88 8",
    // medium-tall drip
    "C 86 8, 84 11, 83 19",
    "C 82 30, 81.5 36, 81 40",
    "C 80.7 43, 80.3 44, 80 43",
    "C 79.5 40, 79 36, 78 30",
    "C 77 19, 76 11, 74 8",
    // wave
    "C 71 7, 67 8, 63 8",
    "C 60 8, 57 8.5, 54 8",
    // drip
    "C 52 8, 51 10, 50 15",
    "C 49 22, 48.5 26, 48 29",
    "C 47.7 31, 47.3 32, 47 31",
    "C 46.5 29, 46 26, 45 22",
    "C 44 15, 43 10, 41 8",
    // wave
    "C 38 7, 34 8, 30 8.5",
    // small drip
    "C 28 9, 27 10, 26.5 13",
    "C 26 16, 25.7 17, 25.3 16",
    "C 25 13, 24 10, 22 8.5",
    // wave
    "C 19 7.5, 15 8.5, 12 8",
    // last drip
    "C 10 8, 9 11, 8 17",
    "C 7 26, 6.5 32, 6 36",
    "C 5.7 39, 5.3 40, 5 39",
    "C 4.5 36, 4 32, 3 26",
    "C 2 17, 1 11, 0 8",
    "Z",
  ].join(" ");

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden pointer-events-none ${className}`}
    >
      <motion.svg
        viewBox="0 0 200 55"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: "120px" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
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
