import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export function AccordionItem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="group rounded-2xl border border-black/8 bg-white p-5 shadow-soft">
      <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-prilly-coal">
        <span>{title}</span>
        <ChevronDown className="h-5 w-5 transition group-open:rotate-180" />
      </summary>
      <div className="pt-4 text-sm leading-6 text-prilly-coal/70">{children}</div>
    </details>
  );
}
