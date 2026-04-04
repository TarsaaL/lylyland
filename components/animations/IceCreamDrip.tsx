"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Drip {
  cx: number;
  width: number;
  height: number;
  delay: number;
}

const DRIPS: Drip[] = [
  { cx: 6, width: 2.5, height: 6, delay: 0 },
  { cx: 14, width: 1.8, height: 4, delay: 0.2 },
  { cx: 25, width: 3, height: 8, delay: 0.1 },
  { cx: 38, width: 2, height: 5, delay: 0.35 },
  { cx: 50, width: 2.8, height: 7, delay: 0.05 },
  { cx: 63, width: 2.2, height: 5.5, delay: 0.25 },
  { cx: 75, width: 3.2, height: 9, delay: 0.15 },
  { cx: 86, width: 1.6, height: 3.5, delay: 0.3 },
  { cx: 95, width: 2.4, height: 6.5, delay: 0.18 },
];

function dripPath(cx: number, w: number, h: number) {
  const left = cx - w;
  const right = cx + w;
  const bulge = w * 1.3;
  const bulgeY = h - bulge;
  return `M ${left} 0 L ${left} ${bulgeY * 0.6} Q ${left} ${bulgeY} ${cx - bulge} ${bulgeY} Q ${cx - bulge * 0.4} ${h + bulge * 0.2} ${cx} ${h + bulge * 0.5} Q ${cx + bulge * 0.4} ${h + bulge * 0.2} ${cx + bulge} ${bulgeY} Q ${right} ${bulgeY} ${right} ${bulgeY * 0.6} L ${right} 0 Z`;
}

export function IceCreamDrip({
  color = "#FFF8F0",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  return (
    <div ref={ref} className={`w-full overflow-hidden pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 100 18"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: "60px" }}
      >
        {/* Base bar connecting all drips */}
        <rect x="0" y="0" width="100" height="2" fill={color} />
        {DRIPS.map((drip, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={
              isInView
                ? { opacity: 1, scaleY: 1 }
                : { opacity: 0, scaleY: 0 }
            }
            transition={{
              duration: 1.4,
              delay: drip.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: `${drip.cx}px 0px` }}
          >
            <path d={dripPath(drip.cx, drip.width, drip.height)} fill={color} />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
