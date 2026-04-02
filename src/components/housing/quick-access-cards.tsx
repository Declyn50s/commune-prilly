import { motion } from "framer-motion";
import type { HousingQuickaccèss } from "@/types/content";
import { GenericCard } from "@/components/common/cards";

export function QuickaccèssCards({ items }: { items: HousingQuickaccèss[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <GenericCard title={item.title} description={item.description} href={item.href} accent={item.accent} />
        </motion.div>
      ))}
    </div>
  );
}
