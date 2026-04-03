"use client";

import { useMemo } from "react";

const BUBBLE_COLORS = ["#E8B87A", "#FFF8F0", "#E8789A", "#D4883C", "#A5D46A"];

export function BubbleFloat({
  count = 20,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const bubbles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 8 + Math.random() * 32,
      left: Math.random() * 100,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 5,
      opacity: 0.1 + Math.random() * 0.25,
      drift1: -20 + Math.random() * 40,
      drift2: -20 + Math.random() * 40,
      color: BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)],
    }));
  }, [count]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full animate-bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: "-10%",
            backgroundColor: b.color,
            "--duration": `${b.duration}s`,
            "--delay": `${b.delay}s`,
            "--bubble-opacity": b.opacity,
            "--drift-1": `${b.drift1}px`,
            "--drift-2": `${b.drift2}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
