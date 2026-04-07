"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// A drip: wide at top where it leaves the bar, tapers to a narrow rounded tip
// cx=center, topW=half-width at top, h=height, tipR=radius of tip
function drip(cx: number, topW: number, h: number, tipR: number) {
  const l = cx - topW;
  const r = cx + topW;
  const mid = h * 0.6;
  return [
    // Start from top-left of drip
    `${l} 14`,
    // Left side curves inward as it flows down
    `C ${l} 20, ${l + 2} ${mid * 0.5}, ${cx - tipR * 1.5} ${mid}`,
    // Continue narrowing to the tip
    `C ${cx - tipR} ${mid + (h - mid) * 0.5}, ${cx - tipR} ${h - tipR}, ${cx} ${h}`,
    // Round the tip and come back up the right side
    `C ${cx + tipR} ${h - tipR}, ${cx + tipR} ${mid + (h - mid) * 0.5}, ${cx + tipR * 1.5} ${mid}`,
    // Right side curves back out to the top
    `C ${r - 2} ${mid * 0.5}, ${r} 20, ${r} 14`,
  ].join(" ");
}

// [cx, topHalfWidth, height, tipRadius]
type D = [number, number, number, number];

const VARIATIONS: D[][] = [
  // A: mixed organic
  [[80, 22, 62, 5], [250, 14, 35, 3], [440, 26, 78, 6], [630, 16, 42, 4], [810, 20, 58, 5], [980, 12, 30, 3], [1130, 24, 70, 5]],
  // B: rhythmic small-medium
  [[55, 16, 38, 3], [185, 18, 48, 4], [320, 14, 32, 3], [455, 22, 56, 5], [580, 16, 36, 3], [710, 20, 50, 4], [840, 14, 30, 3], [965, 22, 54, 5], [1090, 16, 40, 4], [1170, 12, 26, 3]],
  // C: dramatic big drips
  [[180, 30, 82, 6], [500, 34, 90, 7], [820, 28, 78, 6], [1080, 20, 52, 4]],
  // D: gentle wave drips
  [[90, 16, 38, 3], [270, 22, 54, 5], [440, 15, 34, 3], [620, 28, 68, 6], [790, 16, 36, 3], [960, 22, 56, 5], [1140, 14, 32, 3]],
  // E: elegant spaced
  [[160, 20, 52, 4], [400, 26, 68, 6], [640, 18, 48, 4], [880, 30, 80, 6], [1080, 18, 44, 4]],
  // F: playful irregular
  [[60, 12, 28, 3], [190, 26, 72, 6], [360, 16, 36, 3], [510, 20, 55, 5], [680, 32, 86, 7], [860, 16, 38, 4], [1000, 22, 52, 5], [1150, 12, 28, 3]],
];

function buildPath(drips: D[]) {
  const sorted = [...drips].sort((a, b) => a[0] - b[0]);

  // Build a continuous path: top bar with drips hanging down
  let d = "M 0 0 L 1200 0 L 1200 14";
  let x = 1200;

  for (let i = sorted.length - 1; i >= 0; i--) {
    const [cx, topW, h, tipR] = sorted[i];
    const dripRight = cx + topW;
    // Gentle wave connecting to next drip
    d += ` C ${x - 8} 13, ${dripRight + 16} 13, ${dripRight} 14`;
    // The drip shape
    d += ` C ${dripRight} 20, ${dripRight - 2} ${h * 0.3}, ${cx + tipR * 1.5} ${h * 0.6}`;
    d += ` C ${cx + tipR} ${h * 0.8}, ${cx + tipR} ${h - tipR}, ${cx} ${h}`;
    d += ` C ${cx - tipR} ${h - tipR}, ${cx - tipR} ${h * 0.8}, ${cx - tipR * 1.5} ${h * 0.6}`;
    d += ` C ${cx - topW + 2} ${h * 0.3}, ${cx - topW} 20, ${cx - topW} 14`;
    x = cx - topW;
  }

  d += ` C ${x - 8} 13, 8 13, 0 14 Z`;
  return d;
}

function buildHighlight(drips: D[]) {
  return drips
    .map(([cx, topW, h]) => {
      const l = cx - topW + 3;
      return `M ${l + 4} 16 C ${l + 2} 24, ${l} ${h * 0.25}, ${cx - 4} ${h * 0.45}`;
    })
    .join(" ");
}

export function IceCreamDrip({
  color = "#E8B87A",
  variant = 0,
  className = "",
}: {
  color?: string;
  variant?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });
  const drips = VARIATIONS[variant % VARIATIONS.length];

  return (
    <div ref={ref} className={`w-full overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "80px" }}
        >
          <path d={buildPath(drips)} fill={color} />
          <path
            d={buildHighlight(drips)}
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
