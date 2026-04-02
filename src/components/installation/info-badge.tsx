import { cn } from "@/lib/utils";

export function InfoBadge({
  label,
  tone = "coal",
}: {
  label: string;
  tone?: "red" | "yellow" | "green" | "coal";
}) {
  const toneClasses = {
    red: "bg-prilly-red/10 text-prilly-red border-prilly-red/10",
    yellow: "bg-prilly-yellow/25 text-prilly-coal border-prilly-yellow/30",
    green: "bg-prilly-green/10 text-prilly-green border-prilly-green/10",
    coal: "bg-prilly-soft text-prilly-coal border-black/5",
  };

  return <span className={cn("inline-flex rounded-full border px-3 py-1 text-xs font-semibold", toneClasses[tone])}>{label}</span>;
}
