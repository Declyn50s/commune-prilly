import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { EnfanceAgeGroup, EnfanceLinkCard } from "@/features/enfance-ecoles/types";
import { ServiceCard } from "@/features/enfance-ecoles/components/service-card";

export function AgeGroupSelector({
  groups,
  selected,
  onSelect,
  relatedCards,
}: {
  groups: EnfanceAgeGroup[];
  selected: string;
  onSelect: (id: string) => void;
  relatedCards: EnfanceLinkCard[];
}) {
  const activeGroup = groups.find((group) => group.id === selected) ?? groups[0];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {groups.map((group) => (
          <Button
            key={group.id}
            type="button"
            variant={group.id === selected ? "primary" : "ghost"}
            className={group.id === selected ? "" : "border border-black/8 bg-white"}
            onClick={() => onSelect(group.id)}
          >
            {group.label}
          </Button>
        ))}
      </div>
      <motion.div
        key={activeGroup.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="rounded-[2rem] border border-black/6 bg-white p-5 shadow-soft"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">
          {activeGroup.label}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-prilly-coal/72">{activeGroup.summary}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {relatedCards.map((item) => (
            <ServiceCard key={item.slug} item={item} compact />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
