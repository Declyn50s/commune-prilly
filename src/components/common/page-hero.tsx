import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
  tone?: "light" | "dark" | "warm";
}) {
  const toneClass = {
    light: "border border-black/5 bg-white/90",
    dark: "bg-prilly-coal bg-mesh text-white",
    warm: "border border-black/5 bg-gradient-to-br from-prilly-yellow/20 via-white to-prilly-green/10",
  }[tone];

  const descriptionClass = tone === "dark" ? "text-white/80" : "text-prilly-coal/70";

  return (
    <section className={`overflow-hidden rounded-[2rem] px-6 py-7 md:px-8 md:py-8 ${toneClass}`}>
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="space-y-4"
        >
          <span className={`eyebrow ${tone === "dark" ? "border-white/10 bg-white/10 text-white" : ""}`}>{eyebrow}</span>
          <div className="space-y-3">
            <h1 className={`text-4xl font-semibold tracking-tight md:text-5xl ${tone === "dark" ? "text-white" : "text-prilly-coal"}`}>{title}</h1>
            <p className={`max-w-3xl text-base leading-7 ${descriptionClass}`}>{description}</p>
          </div>
        </motion.div>
        {aside ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          >
            {aside}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
