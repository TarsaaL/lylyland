"use client";

import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";

interface Drip {
  left: string;
  width: number;
  height: number;
  delay: number;
}

const BASE_DRIPS: Drip[] = [
  { left: "4%", width: 14, height: 55, delay: 0.1 },
  { left: "12%", width: 10, height: 35, delay: 0.3 },
  { left: "24%", width: 16, height: 65, delay: 0 },
  { left: "35%", width: 11, height: 40, delay: 0.4 },
  { left: "48%", width: 14, height: 50, delay: 0.15 },
  { left: "60%", width: 10, height: 30, delay: 0.35 },
  { left: "72%", width: 18, height: 70, delay: 0.05 },
  { left: "83%", width: 12, height: 42, delay: 0.25 },
  { left: "93%", width: 14, height: 55, delay: 0.2 },
];

export function IceCreamDrip({
  color = "#E8B87A",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  const drips = useMemo(() => BASE_DRIPS, []);

  return (
    <div
      ref={ref}
      className={`relative w-full pointer-events-none ${className}`}
      style={{ height: 80 }}
    >
      {drips.map((drip, i) => (
        <motion.div
          key={i}
          className="absolute top-0"
          style={{
            left: drip.left,
            width: drip.width,
            marginLeft: -drip.width / 2,
          }}
          initial={{ height: 0, opacity: 0 }}
          animate={
            isInView
              ? { height: drip.height, opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{
            duration: 1.2,
            delay: drip.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Drip body */}
          <div
            className="w-full h-full relative"
            style={{ backgroundColor: color }}
          >
            {/* Rounded bottom drop */}
            <div
              className="absolute -bottom-1 left-1/2 rounded-full"
              style={{
                width: drip.width * 1.6,
                height: drip.width * 1.6,
                marginLeft: -(drip.width * 1.6) / 2,
                backgroundColor: color,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
