"use client";

import { IceCreamDrip } from "@/components/animations/IceCreamDrip";

export function SectionDivider({
  dripColor,
  bgColor,
  variant = 0,
  className = "",
}: {
  dripColor: string;
  bgColor: string;
  variant?: number;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`} style={{ backgroundColor: bgColor, marginTop: -1 }}>
      <IceCreamDrip color={dripColor} variant={variant} />
    </div>
  );
}
