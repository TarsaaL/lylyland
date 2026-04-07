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
  const isInView = useInView(ref, { once: true, margin: "200px" });

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
          <path
            d={[
              "M 0 0 L 1200 0 L 1200 12",
              // Wave + drip 1
              "C 1160 12, 1140 14, 1120 12",
              "C 1100 10, 1090 12, 1085 18 C 1082 28, 1080 38, 1078 44 C 1076 50, 1074 52, 1072 50 C 1070 44, 1068 34, 1066 24 C 1063 16, 1058 12, 1050 11",
              // Wave
              "C 1030 10, 1010 13, 990 12",
              // Small drip 2
              "C 980 12, 975 14, 972 20 C 970 24, 969 26, 968 24 C 966 20, 964 14, 958 12",
              // Wave
              "C 940 10, 920 13, 900 12",
              // Tall drip 3
              "C 890 12, 882 14, 878 22 C 874 36, 871 50, 868 60 C 866 66, 864 68, 862 66 C 860 60, 857 46, 854 34 C 850 22, 846 14, 838 12",
              // Wave
              "C 820 10, 800 13, 780 12",
              // Medium drip 4
              "C 770 12, 764 15, 760 22 C 756 32, 754 40, 752 44 C 750 48, 748 48, 746 44 C 744 38, 742 30, 738 22 C 734 15, 728 12, 718 12",
              // Wave
              "C 700 11, 680 13, 660 12",
              // Small drip 5
              "C 652 12, 648 14, 645 19 C 643 23, 642 25, 641 23 C 639 19, 636 14, 630 12",
              // Wave
              "C 610 10, 590 13, 570 12",
              // Tall drip 6
              "C 560 12, 554 15, 550 24 C 546 38, 543 52, 540 62 C 538 70, 536 72, 534 70 C 532 64, 529 50, 526 38 C 522 24, 518 15, 508 12",
              // Wave
              "C 490 10, 470 13, 450 12",
              // Small drip 7
              "C 442 12, 438 15, 435 20 C 433 24, 432 25, 431 24 C 429 20, 426 15, 420 12",
              // Wave
              "C 400 10, 380 13, 360 12",
              // Medium drip 8
              "C 350 12, 344 15, 340 24 C 336 36, 334 44, 332 50 C 330 54, 328 55, 326 53 C 324 48, 322 40, 318 30 C 314 20, 308 13, 298 12",
              // Wave
              "C 280 10, 260 14, 240 12",
              // Drip 9
              "C 232 12, 226 14, 222 20 C 218 30, 216 38, 214 42 C 212 46, 210 46, 208 42 C 206 36, 204 28, 200 20 C 196 14, 190 12, 180 12",
              // Wave
              "C 160 10, 140 13, 120 12",
              // Last drip 10
              "C 112 12, 106 16, 102 26 C 98 40, 96 52, 94 58 C 92 62, 90 63, 88 60 C 86 54, 84 44, 80 32 C 76 20, 70 13, 60 12",
              // Final wave
              "C 40 10, 20 13, 0 12",
              "Z",
            ].join(" ")}
            fill={color}
          />
        </svg>
      </motion.div>
    </div>
  );
}
