import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "soft";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

const variants = {
  primary: "bg-prilly-red text-white shadow-sm hover:-translate-y-0.5 hover:bg-prilly-red/90",
  secondary: "bg-prilly-yellow text-prilly-coal shadow-sm hover:-translate-y-0.5 hover:bg-prilly-yellow/90",
  ghost: "bg-transparent text-prilly-coal hover:bg-prilly-coal/5",
  soft: "bg-prilly-coal text-white shadow-sm hover:-translate-y-0.5 hover:bg-prilly-coal/90",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({ className, variant = "primary", size = "md", children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
