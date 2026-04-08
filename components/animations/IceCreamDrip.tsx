"use client";

import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";

// Each drip is composed of 3 stacked circles forming an organic varying-width shape:
// - Top: largest (where it connects to the bar)
// - Middle: smaller (the narrowing neck)
// - Tip: small bulge at the end
// [leftPercent, topSize, midSize, tipSize, dropLength]
type DripDef = [number, number, number, number, number];

const VARIATIONS: DripDef[][] = [
  // A: mixed organic
  [
    [5, 32, 18, 22, 55],
    [16, 22, 12, 14, 30],
    [30, 38, 22, 26, 75],
    [44, 24, 14, 16, 38],
    [58, 32, 18, 22, 60],
    [72, 20, 12, 14, 28],
    [84, 36, 20, 24, 68],
    [95, 26, 14, 18, 44],
  ],
  // B: rhythmic
  [
    [4, 24, 14, 16, 32],
    [13, 28, 16, 20, 46],
    [23, 20, 12, 14, 26],
    [34, 34, 18, 22, 62],
    [45, 22, 12, 14, 30],
    [55, 30, 16, 20, 52],
    [65, 18, 10, 12, 22],
    [76, 32, 18, 22, 56],
    [87, 24, 14, 16, 36],
    [96, 20, 12, 14, 24],
  ],
  // C: dramatic
  [
    [15, 44, 24, 30, 86],
    [43, 50, 28, 34, 100],
    [72, 42, 22, 28, 82],
    [93, 30, 16, 20, 48],
  ],
  // D: gentle
  [
    [6, 26, 14, 18, 36],
    [20, 32, 18, 22, 54],
    [35, 22, 12, 14, 28],
    [50, 40, 22, 26, 76],
    [65, 26, 14, 18, 38],
    [80, 32, 18, 22, 56],
    [94, 22, 12, 14, 28],
  ],
  // E: elegant
  [
    [12, 30, 16, 20, 50],
    [32, 38, 20, 26, 70],
    [52, 26, 14, 18, 42],
    [72, 44, 24, 30, 90],
    [90, 28, 16, 20, 46],
  ],
  // F: playful
  [
    [3, 20, 12, 14, 24],
    [15, 38, 20, 26, 72],
    [28, 22, 12, 14, 30],
    [42, 30, 16, 20, 50],
    [56, 46, 24, 30, 96],
    [70, 26, 14, 18, 38],
    [82, 32, 18, 22, 56],
    [95, 20, 12, 14, 24],
  ],
];

const BAR_HEIGHT = 24;

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
  const isInView = useInView(ref, { once: true, margin: "100px" });
  const drips = VARIATIONS[variant % VARIATIONS.length];
  const filterId = useMemo(
    () => `goo-${variant}-${Math.random().toString(36).slice(2, 6)}`,
    [variant]
  );

  // Stable per-drip random delay (computed once)
  const delays = useMemo(
    () => drips.map((_, i) => 0.05 + (i % 3) * 0.06 + Math.random() * 0.12),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [variant]
  );

  return (
    <div ref={ref} className={`w-full pointer-events-none ${className}`}>
      <svg className="absolute w-0 h-0" aria-hidden>
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
              result="goo"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="relative w-full overflow-hidden"
        style={{ height: 120, filter: `url(#${filterId})` }}
      >
        {/* Top bar */}
        <div
          className="absolute top-0 left-0 w-full"
          style={{ height: BAR_HEIGHT, backgroundColor: color }}
        />

        {/* Drips — each one has 3 circles of varying sizes */}
        {drips.map(([leftPct, topSize, midSize, tipSize, dropLen], i) => {
          const delay = delays[i];

          // Final positions: top circle near bar, middle in the neck zone, tip at the end
          const topFinal = BAR_HEIGHT - topSize * 0.5;
          const midFinal = BAR_HEIGHT + dropLen * 0.4 - midSize * 0.5;
          const tipFinal = BAR_HEIGHT + dropLen - tipSize * 0.5;

          // Hidden start positions (tucked behind the bar)
          const topStart = BAR_HEIGHT - topSize;
          const midStart = BAR_HEIGHT - midSize;
          const tipStart = BAR_HEIGHT - tipSize;

          const sharedTransition = {
            duration: 0.7 + dropLen / 180,
            delay,
            ease: [0.16, 0.84, 0.24, 1] as [number, number, number, number],
          };

          return (
            <div key={i}>
              {/* Top circle (largest — connects to bar) */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  left: `${leftPct}%`,
                  width: topSize,
                  height: topSize,
                  marginLeft: -topSize / 2,
                  backgroundColor: color,
                }}
                initial={{ top: topStart }}
                animate={isInView ? { top: topFinal } : { top: topStart }}
                transition={sharedTransition}
              />
              {/* Middle circle (smaller — the neck) */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  left: `${leftPct}%`,
                  width: midSize,
                  height: midSize,
                  marginLeft: -midSize / 2,
                  backgroundColor: color,
                }}
                initial={{ top: midStart, opacity: 0 }}
                animate={
                  isInView
                    ? { top: midFinal, opacity: 1 }
                    : { top: midStart, opacity: 0 }
                }
                transition={{
                  ...sharedTransition,
                  delay: delay + 0.05,
                  opacity: { duration: 0.2, delay: delay + 0.05 },
                }}
              />
              {/* Tip circle (small bulge at the end) */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  left: `${leftPct}%`,
                  width: tipSize,
                  height: tipSize,
                  marginLeft: -tipSize / 2,
                  backgroundColor: color,
                }}
                initial={{ top: tipStart, opacity: 0 }}
                animate={
                  isInView
                    ? { top: tipFinal, opacity: 1 }
                    : { top: tipStart, opacity: 0 }
                }
                transition={{
                  ...sharedTransition,
                  delay: delay + 0.1,
                  opacity: { duration: 0.2, delay: delay + 0.1 },
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
