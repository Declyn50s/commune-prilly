import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  const hasBackgroundOverride = /\bbg-[^\s]+/.test(className ?? "");
  const hasTextOverride = /\btext-[^\s]+/.test(className ?? "");

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        !hasBackgroundOverride && "bg-prilly-soft",
        !hasTextOverride && "text-prilly-coal",
        className,
      )}
    >
      {children}
    </span>
  );
}
