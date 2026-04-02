import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { SeniorQuickaccèss, SeniorSupport } from "@/features/seniors/types";

type Props =
  | { item: SeniorQuickaccèss; support?: never }
  | { support: SeniorSupport; item?: never };

export function SupportCard(props: Props) {
  const tone = props.item?.tone ?? props.support?.tone ?? "coal";
  const toneClass = {
    red: "from-prilly-red/8 to-white",
    yellow: "from-prilly-yellow/24 to-white",
    green: "from-prilly-green/10 to-white",
    coal: "from-prilly-soft to-white",
  }[tone];

  const title = props.item?.title ?? props.support?.title ?? "";
  const description = props.item?.description ?? props.support?.description ?? "";
  const href = props.item?.href ?? props.support?.href;
  const highlights = props.support?.highlights ?? [];

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.18, ease: "easeOut" }}>
      <Link to={href ?? "/vivre/seniors"} className="block h-full">
        <div className={cn("surface h-full bg-gradient-to-br p-5", toneClass)}>
          <h3 className="text-xl font-semibold text-prilly-coal">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{description}</p>
          {highlights.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span key={item} className="rounded-full border border-black/8 bg-white px-3 py-1.5 text-xs text-prilly-coal/70">
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </Link>
    </motion.div>
  );
}
