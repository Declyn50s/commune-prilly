import { BadgeInfo } from "lucide-react";
import type { EnfancePoster } from "@/features/enfance-ecoles/types";

export function ActivityPosterCard({ item }: { item: EnfancePoster }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
      <div className="aspect-[4/5] overflow-hidden bg-prilly-soft">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-prilly-yellow/25 text-prilly-coal">
            <BadgeInfo className="h-4 w-4" />
          </div>
        </div>
        <a href={item.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-prilly-red">
          {item.ctaLabel}
        </a>
      </div>
    </div>
  );
}
