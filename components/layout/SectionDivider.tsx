"use client";

import { IceCreamDrip } from "@/components/animations/IceCreamDrip";

export function SectionDivider({
  color = "#FFF8F0",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div className={`relative -mt-1 ${className}`}>
      <IceCreamDrip color={color} />
    </div>
  );
}
