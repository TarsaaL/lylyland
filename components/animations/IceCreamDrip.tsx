"use client";

import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";

// Each drip: [leftPercent, size(px), dropLength(px)]
type DripDef = [number, number, number];

const VARIATIONS: DripDef[][] = [
  [[5, 28, 50], [16, 18, 28], [30, 34, 68], [44, 20, 35], [58, 28, 55], [72, 16, 24], [84, 32, 62], [95, 22, 40]],
  [[4, 20, 30], [13, 24, 42], [23, 16, 24], [34, 30, 58], [45, 18, 28], [55, 26, 48], [65, 14, 20], [76, 28, 52], [87, 20, 34], [96, 16, 22]],
  [[15, 40, 80], [43, 46, 92], [72, 38, 76], [93, 26, 44]],
  [[6, 22, 34], [20, 28, 50], [35, 18, 26], [50, 36, 70], [65, 22, 36], [80, 28, 52], [94, 18, 26]],
  [[12, 26, 46], [32, 34, 64], [52, 22, 38], [72, 40, 82], [90, 24, 42]],
  [[3, 16, 22], [15, 34, 66], [28, 18, 28], [42, 26, 46], [56, 42, 88], [70, 22, 34], [82, 28, 52], [95, 16, 22]],
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

  return (
    <div ref={ref} className={`w-full pointer-events-none ${className}`}>
      {/* Hidden SVG for goo filter definition */}
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
        style={{ height: 100, filter: `url(#${filterId})` }}
      >
        {/* Top bar */}
        <div
          className="absolute top-0 left-0 w-full"
          style={{ height: BAR_HEIGHT, backgroundColor: color }}
        />
        {/* Drip circles — animate top position when in view to "drip down" */}
        {drips.map(([leftPct, size, dropLen], i) => {
          // Final position: partially overlapping the bar, extended by dropLen
          const finalTop = BAR_HEIGHT - size * 0.35 + dropLen * 0.3;
          // Start position: tucked inside the bar (invisible behind it)
          const startTop = BAR_HEIGHT - size;
          // Stagger each drip slightly for organic feel
          const delay = 0.05 + (i % 3) * 0.08 + Math.random() * 0.1;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${leftPct}%`,
                width: size,
                height: size,
                marginLeft: -size / 2,
                backgroundColor: color,
              }}
              initial={{ top: startTop, opacity: 0 }}
              animate={
                isInView
                  ? { top: finalTop, opacity: 1 }
                  : { top: startTop, opacity: 0 }
              }
              transition={{
                top: {
                  duration: 0.7 + (dropLen / 180),
                  delay,
                  ease: [0.16, 0.84, 0.24, 1], // strong ease-out - fast start, hard deceleration
                },
                opacity: {
                  duration: 0.2,
                  delay,
                },
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
