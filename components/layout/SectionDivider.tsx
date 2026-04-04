"use client";

import { IceCreamDrip } from "@/components/animations/IceCreamDrip";

export function SectionDivider({
  fromColor,
  toColor,
  className = "",
}: {
  fromColor: string;
  toColor: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`} style={{ backgroundColor: toColor, marginTop: -1 }}>
      <IceCreamDrip color={fromColor} />
    </div>
  );
}
