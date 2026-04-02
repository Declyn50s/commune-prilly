import { AlertTriangle } from "lucide-react";
import type { HousingWarning } from "@/types/content";

export function AlertNotice({ items }: { items: HousingWarning[] }) {
  return (
    <div className="rounded-[2rem] border border-prilly-red/15 bg-prilly-red/5 p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-prilly-red">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">Attention</p>
          <p className="mt-1 text-sm leading-6 text-prilly-coal/75">Certaines obligations doivent être anticipées avant toute première nuitée ou mise en location.</p>
        </div>
      </div>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl bg-white px-4 py-4 shadow-sm">
            <p className="text-sm font-semibold text-prilly-coal">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
