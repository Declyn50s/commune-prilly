import { cn } from "@/lib/utils";

type PrillyLogoProps = {
  className?: string;
  mode?: "default" | "light";
  compact?: boolean;
};

export function PrillyLogo({ className, mode = "default", compact = false }: PrillyLogoProps) {
  return (
    <img
      src="/images/prilly-logo.svg"
      alt="Ville de Prilly"
      className={cn(
        "h-auto w-auto object-contain",
        compact ? "max-w-[3.25rem]" : "",
        mode === "light" ? "brightness-0 invert" : "",
        className,
      )}
    />
  );
}
