"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Helper: generate a single drip drop shape as SVG path commands
// cx = center x, neckW = neck width, bulgeW = bulge width, h = total height
function drop(cx: number, neckW: number, bulgeW: number, h: number) {
  const neckH = h * 0.55;
  const bulgeH = h - neckH;
  const left = cx - neckW;
  const right = cx + neckW;
  return [
    // Narrow down into the neck
    `C ${left + 2} 14, ${left} 18, ${left} ${neckH}`,
    // Bulge out into a round drop
    `C ${left} ${neckH + bulgeH * 0.3}, ${cx - bulgeW} ${neckH + bulgeH * 0.5}, ${cx - bulgeW} ${neckH + bulgeH * 0.7}`,
    // Round bottom
    `C ${cx - bulgeW} ${h - 2}, ${cx - bulgeW * 0.5} ${h}, ${cx} ${h}`,
    `C ${cx + bulgeW * 0.5} ${h}, ${cx + bulgeW} ${h - 2}, ${cx + bulgeW} ${neckH + bulgeH * 0.7}`,
    // Back up through bulge to neck
    `C ${cx + bulgeW} ${neckH + bulgeH * 0.5}, ${right} ${neckH + bulgeH * 0.3}, ${right} ${neckH}`,
    // Back up to the base
    `C ${right} 18, ${right - 2} 14,`,
  ].join(" ");
}

// Each variation defines drip positions: [cx, neckWidth, bulgeWidth, height]
type DripDef = [number, number, number, number];

const VARIATIONS: DripDef[][] = [
  // A: asymmetric, big left, mix of sizes
  [[70, 8, 16, 72], [220, 5, 10, 38], [420, 10, 20, 85], [600, 6, 12, 45], [780, 8, 16, 65], [950, 5, 10, 35], [1120, 9, 18, 78]],
  // B: many small-medium rhythmic drips
  [[60, 6, 12, 42], [180, 7, 14, 52], [310, 5, 10, 34], [440, 8, 16, 60], [560, 6, 11, 40], [690, 7, 14, 55], [820, 5, 10, 32], [940, 8, 15, 58], [1080, 6, 12, 44], [1160, 5, 9, 30]],
  // C: few big dramatic drips
  [[200, 12, 24, 90], [550, 14, 26, 95], [900, 12, 22, 88], [1100, 8, 16, 55]],
  // D: wavy organic medium drips
  [[80, 6, 12, 42], [260, 8, 16, 58], [430, 6, 11, 38], [600, 10, 20, 72], [770, 6, 12, 40], [940, 8, 16, 60], [1130, 6, 11, 36]],
  // E: elegant spaced drips
  [[150, 8, 16, 58], [380, 10, 20, 75], [620, 8, 15, 55], [850, 12, 22, 85], [1060, 7, 14, 48]],
  // F: playful irregular
  [[50, 5, 10, 32], [170, 10, 20, 78], [340, 6, 11, 38], [490, 8, 16, 60], [650, 12, 24, 92], [830, 6, 12, 40], [970, 8, 15, 55], [1140, 5, 10, 34]],
];

function buildFullPath(drips: DripDef[]) {
  const sorted = [...drips].sort((a, b) => a[0] - b[0]);
  let d = "M 0 0 L 1200 0 L 1200 12";

  // Walk right to left, creating waves and drops
  let x = 1200;
  for (let i = sorted.length - 1; i >= 0; i--) {
    const [cx, neckW, bulgeW, h] = sorted[i];
    const entryX = cx + neckW + 12;
    // Wave to approach the drip
    d += ` C ${x - 10} 12, ${entryX + 20} 12, ${entryX} 12`;
    // The drop
    d += ` ${drop(cx, neckW, bulgeW, h)}`;
    // Exit point
    x = cx - neckW - 12;
    d += ` ${x} 12`;
  }
  // Close back to origin
  d += ` C ${x - 10} 12, 10 12, 0 12 Z`;
  return d;
}

function buildHighlightPath(drips: DripDef[]) {
  // A thin white stroke following the top-left edge of each drip for a shine effect
  const sorted = [...drips].sort((a, b) => a[0] - b[0]);
  const segments: string[] = [];
  for (const [cx, neckW, bulgeW, h] of sorted) {
    const left = cx - neckW;
    const neckH = h * 0.55;
    const bulgeH = h - neckH;
    segments.push(
      `M ${left + 8} 13 C ${left + 4} 16, ${left + 1} 22, ${left + 1} ${neckH * 0.8} C ${left} ${neckH + bulgeH * 0.2}, ${cx - bulgeW + 2} ${neckH + bulgeH * 0.4}, ${cx - bulgeW + 2} ${neckH + bulgeH * 0.6}`
    );
  }
  return segments.join(" ");
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
  const mainPath = buildFullPath(drips);
  const highlightPath = buildHighlightPath(drips);

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden pointer-events-none ${className}`}
    >
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
          <path d={mainPath} fill={color} />
          <path
            d={highlightPath}
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
