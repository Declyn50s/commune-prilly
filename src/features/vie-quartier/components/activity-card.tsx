import { CalendarDays, MapPin } from "lucide-react";
import type { ActivityItem } from "@/features/vie-quartier/types";

export function ActivityCard({ item }: { item: ActivityItem }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-black/8 bg-white shadow-soft">
      <div className="bg-gradient-to-r from-prilly-yellow/30 to-prilly-green/10 px-5 py-4">
        <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
      </div>
      <div className="space-y-3 p-5 text-sm text-prilly-coal/74">
        <p className="rounded-2xl bg-prilly-soft px-4 py-3">{item.audience}</p>
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-0.5 h-4 w-4 text-prilly-red" />
          <span>{item.schedule}</span>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 text-prilly-red" />
          <span>{item.location}</span>
        </div>
        <div className="rounded-2xl border border-black/8 px-4 py-3">{item.contact}</div>
      </div>
    </div>
  );
}
