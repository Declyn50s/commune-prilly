import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function InfoBox({
  title,
  children,
  tone = "soft",
}: {
  title: string;
  children: ReactNode;
  tone?: "soft" | "red" | "green" | "yellow";
}) {
  const toneClasses = {
    soft: "border-black/8 bg-prilly-soft",
    red: "border-prilly-red/15 bg-prilly-red/5",
    green: "border-prilly-green/15 bg-prilly-green/5",
    yellow: "border-prilly-yellow/30 bg-prilly-yellow/20",
  };

  return (
    <div className={cn("rounded-3xl border p-5", toneClasses[tone])}>
      <h3 className="text-lg font-semibold text-prilly-coal">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-prilly-coal/70">{children}</div>
    </div>
  );
}
