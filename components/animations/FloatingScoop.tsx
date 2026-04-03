"use client";

import { useMemo } from "react";

const SCOOP_COLORS = ["#F5E6C8", "#93C572", "#E30B5C", "#6F4E37", "#FBCEB1", "#C67B30"];

export function FloatingScoop({ className = "" }: { className?: string }) {
  const scoops = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: 30 + Math.random() * 50,
      x: 5 + Math.random() * 90,
      y: 10 + Math.random() * 80,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 4,
      color: SCOOP_COLORS[i % SCOOP_COLORS.length],
      opacity: 0.12 + Math.random() * 0.12,
    }));
  }, []);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {scoops.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full animate-float"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
            backgroundColor: s.color,
            opacity: s.opacity,
            "--float-duration": `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            filter: "blur(1px)",
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
