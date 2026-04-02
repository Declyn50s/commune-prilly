import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { ProjectHighlight } from "@/features/vie-quartier/types";

export function ProjectHighlightCard({ item }: { item: ProjectHighlight }) {
  const toneClass = {
    red: "from-prilly-red/10 via-white to-white",
    yellow: "from-prilly-yellow/25 via-white to-white",
    green: "from-prilly-green/10 via-white to-white",
    coal: "from-prilly-soft via-white to-white",
  }[item.tone];

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.18, ease: "easeOut" }}>
      <Link to={item.href} className="block h-full">
        <div className={cn("surface h-full bg-gradient-to-br p-6", toneClass)}>
          <h3 className="text-2xl font-semibold text-prilly-coal">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.summary}</p>
          <div className="mt-5 rounded-2xl bg-white/80 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-red">Objectif</p>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/74">{item.goal}</p>
          </div>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
            Découvrir
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
