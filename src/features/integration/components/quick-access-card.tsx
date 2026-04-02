import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { IntegrationQuickAccess } from "@/features/integration/types";

export function QuickAccessCard({ item }: { item: IntegrationQuickAccess }) {
  const toneClass = {
    red: "from-prilly-red/8 to-white",
    yellow: "from-prilly-yellow/25 to-white",
    green: "from-prilly-green/10 to-white",
    coal: "from-prilly-soft to-white",
  }[item.tone];

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.18, ease: "easeOut" }}>
      <Link to={item.href} className="block h-full">
        <div className={cn("surface h-full bg-gradient-to-br p-5", toneClass)}>
          <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
