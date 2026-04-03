"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface DripShape {
  x: number;
  width: number;
  height: number;
  delay: number;
}

const DRIP_CONFIGS: DripShape[] = [
  { x: 5, width: 18, height: 45, delay: 0 },
  { x: 15, width: 12, height: 30, delay: 0.2 },
  { x: 30, width: 20, height: 55, delay: 0.1 },
  { x: 48, width: 14, height: 35, delay: 0.3 },
  { x: 62, width: 22, height: 60, delay: 0.05 },
  { x: 78, width: 16, height: 40, delay: 0.25 },
  { x: 90, width: 13, height: 28, delay: 0.15 },
];

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
        viewBox="0 0 100 70"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: "70px" }}
      >
        <rect x="0" y="0" width="100" height="10" fill={color} />
        {DRIP_CONFIGS.map((drip, i) => (
          <motion.rect
            key={i}
            x={drip.x}
            y="0"
            width={drip.width}
            rx={drip.width / 2}
            ry={drip.width / 2}
            fill={color}
            initial={{ height: 10 }}
            animate={isInView ? { height: drip.height } : { height: 10 }}
            transition={{
              duration: 1.2,
              delay: drip.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </svg>
    </div>
  );
}
