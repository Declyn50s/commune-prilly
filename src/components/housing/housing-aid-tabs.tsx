import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { HousingAidKey, HousingAidTab } from "@/types/content";
import { Button } from "@/components/ui/button";
import { InfoBadge } from "@/components/installation/info-badge";
import { cn } from "@/lib/utils";

export function HousingAidTabs({ items }: { items: HousingAidTab[] }) {
  const [active, setActive] = useState<HousingAidKey>("family");
  const current = useMemo(() => items.find((item) => item.key === active) ?? items[0], [items, active]);

  return (
    <div className="rounded-[2rem] border border-black/8 bg-white p-5 shadow-soft">
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            className={cn(
              "focus-ring relative rounded-[1.5rem] border px-4 py-4 text-left transition",
              active === item.key ? "border-prilly-red/15 bg-prilly-red/5" : "border-black/8 bg-prilly-soft hover:border-prilly-yellow/40",
            )}
            onClick={() => setActive(item.key)}
          >
            {active === item.key ? (
              <motion.div
                layoutId="housing-aid-tab"
                className="absolute inset-0 rounded-[1.5rem] border border-prilly-red/20"
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            ) : null}
            <div className="relative">
              <p className="text-base font-semibold text-prilly-coal">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{item.audience}</p>
            </div>
          </button>
        ))}
      </div>

      <motion.div
        key={current.key}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.9fr]"
      >
        <div className="space-y-4">
          <div>
            <div className="flex flex-wrap gap-2">
              <InfoBadge label="Rendez-vous nécessaire" tone="red" />
              <InfoBadge label="Aide de 12 mois" tone="yellow" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-prilly-coal">{current.label}</h3>
            <p className="mt-3 text-sm leading-7 text-prilly-coal/75">{current.intro}</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {current.conditions.map((condition) => (
              <div key={condition} className="rounded-2xl bg-prilly-soft p-4 text-sm leading-6 text-prilly-coal/75">
                {condition}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 rounded-[1.75rem] border border-black/8 bg-prilly-soft p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-red">Durée</p>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/75">{current.duration}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-red">Renouvellement</p>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/75">{current.renewal}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-red">Calcul</p>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/75">{current.calculation}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-red">Dépôt du dossier</p>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/75">{current.appointment}</p>
          </div>
          <a href={current.ctaHref}>
            <Button className="mt-3 w-full justify-center">{current.ctaLabel}</Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
