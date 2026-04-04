"use client";

import { IceCreamDrip } from "@/components/animations/IceCreamDrip";

export function SectionDivider({
  dripColor,
  bgColor,
  className = "",
}: {
  dripColor: string;
  bgColor: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`} style={{ backgroundColor: bgColor, marginTop: -1 }}>
      <IceCreamDrip color={dripColor} />
    </div>
  );
}
