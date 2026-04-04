"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Drip {
  cx: number;
  bodyW: number;
  dropR: number;
  height: number;
  delay: number;
}

const DRIPS: Drip[] = [
  { cx: 4, bodyW: 3, dropR: 4.5, height: 18, delay: 0.1 },
  { cx: 14, bodyW: 2, dropR: 3, height: 10, delay: 0.3 },
  { cx: 26, bodyW: 3.5, dropR: 5, height: 22, delay: 0 },
  { cx: 40, bodyW: 2.5, dropR: 3.5, height: 12, delay: 0.4 },
  { cx: 52, bodyW: 3, dropR: 4, height: 16, delay: 0.15 },
  { cx: 65, bodyW: 2, dropR: 3, height: 9, delay: 0.35 },
  { cx: 76, bodyW: 4, dropR: 5.5, height: 24, delay: 0.05 },
  { cx: 88, bodyW: 2.5, dropR: 3.5, height: 13, delay: 0.25 },
  { cx: 96, bodyW: 3, dropR: 4.5, height: 19, delay: 0.2 },
];

function dripPath(cx: number, bodyW: number, dropR: number, height: number) {
  const top = 0;
  const neckY = height - dropR * 1.5;
  return [
    `M ${cx - bodyW} ${top}`,
    `L ${cx - bodyW} ${neckY}`,
    `Q ${cx - bodyW} ${neckY + dropR * 0.5} ${cx - dropR} ${neckY + dropR * 0.7}`,
    `A ${dropR} ${dropR} 0 1 0 ${cx + dropR} ${neckY + dropR * 0.7}`,
    `Q ${cx + bodyW} ${neckY + dropR * 0.5} ${cx + bodyW} ${neckY}`,
    `L ${cx + bodyW} ${top}`,
    `Z`,
  ].join(" ");
}

export function IceCreamDrip({
  color = "#D4883C",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 100 35"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: "80px" }}
      >
        {DRIPS.map((drip, i) => (
          <motion.path
            key={i}
            d={dripPath(drip.cx, drip.bodyW, drip.dropR, drip.height)}
            fill={color}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={
              isInView
                ? { scaleY: 1, opacity: 1 }
                : { scaleY: 0, opacity: 0 }
            }
            transition={{
              duration: 1.2,
              delay: drip.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: `${drip.cx}px 0px` }}
          />
        ))}
      </svg>
    </div>
  );
}
