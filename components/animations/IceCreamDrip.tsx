"use client";

import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";

// Drip definitions per variant: [xPercent, radiusX, radiusY, offsetY]
type DripDef = [number, number, number, number];

const VARIATIONS: DripDef[][] = [
  // A: mixed organic
  [[5, 18, 28, 18], [15, 10, 18, 8], [28, 22, 36, 24], [42, 12, 20, 10], [56, 18, 30, 20], [70, 10, 16, 6], [82, 20, 34, 22], [94, 14, 22, 12]],
  // B: rhythmic
  [[4, 12, 18, 8], [14, 14, 24, 14], [24, 10, 16, 6], [35, 18, 30, 20], [46, 12, 18, 8], [56, 16, 26, 16], [66, 10, 14, 5], [76, 18, 28, 18], [87, 12, 20, 10], [96, 10, 16, 6]],
  // C: dramatic
  [[14, 26, 42, 32], [42, 30, 48, 38], [70, 24, 40, 30], [92, 16, 26, 14]],
  // D: gentle
  [[6, 14, 20, 10], [20, 18, 28, 18], [34, 12, 16, 6], [50, 24, 38, 28], [64, 14, 20, 10], [78, 18, 28, 18], [93, 12, 16, 6]],
  // E: elegant
  [[12, 16, 26, 16], [30, 22, 36, 26], [50, 14, 22, 12], [70, 26, 42, 34], [88, 16, 24, 14]],
  // F: playful
  [[3, 10, 14, 5], [14, 22, 36, 26], [27, 12, 18, 8], [40, 16, 26, 16], [54, 28, 44, 36], [68, 14, 20, 10], [80, 18, 28, 18], [94, 10, 16, 6]],
];

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
  const filterId = useMemo(() => `goo-${variant}-${Math.random().toString(36).slice(2, 6)}`, [variant]);

  return (
    <div ref={ref} className={`w-full overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <svg
          viewBox="0 0 100 60"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "90px" }}
        >
          <defs>
            {/* The goo filter: blur + high-contrast alpha = organic blob merging */}
            <filter id={filterId}>
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
            </filter>
          </defs>
          {/* Apply goo filter to the group */}
          <g filter={`url(#${filterId})`}>
            {/* Top bar — the "shelf" the ice cream drips from */}
            <rect x="0" y="0" width="100" height="10" fill={color} />
            {/* Drip blobs — ellipses that merge with the bar via the goo filter */}
            {drips.map(([xPct, rx, ry, offsetY], i) => (
              <ellipse
                key={i}
                cx={xPct}
                cy={10 + offsetY}
                rx={rx / 10}
                ry={ry / 10}
                fill={color}
              />
            ))}
          </g>
          {/* Subtle highlight — a thinner lighter bar on top */}
          <rect x="0" y="0" width="100" height="3" fill="rgba(255,255,255,0.15)" rx="0.5" />
        </svg>
      </motion.div>
    </div>
  );
}
