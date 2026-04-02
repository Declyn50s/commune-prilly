import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "focus-ring h-12 w-full rounded-full border border-black/10 bg-white px-4 text-sm text-prilly-coal shadow-sm placeholder:text-prilly-coal/50",
        className,
      )}
      {...props}
    />
  );
}
