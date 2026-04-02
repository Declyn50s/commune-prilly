import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { QuickLink } from "@/types/content";

const themeClasses = {
  red: "from-prilly-red/14 to-white",
  yellow: "from-prilly-yellow/20 to-white",
  green: "from-prilly-green/20 to-white",
  coal: "from-prilly-coal/10 to-white",
};

export function QuickLinks({ items }: { items: QuickLink[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <Link
              to={item.href}
              className={`group surface grid h-full grid-rows-[auto_1fr_auto] gap-4 bg-gradient-to-br ${themeClasses[item.theme]} p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-prilly-red shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-black/5 bg-white/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-prilly-coal/60">
                  Priorité
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold leading-tight text-prilly-coal">{item.title}</h3>
                <p className="text-sm leading-6 text-prilly-coal/70">{item.description}</p>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
                Accéder
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
