import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { EnfanceLinkCard, EnfanceServiceCard } from "@/features/enfance-ecoles/types";

type Props =
  | { item: EnfanceLinkCard; compact?: boolean; service?: never }
  | { service: EnfanceServiceCard; compact?: boolean; item?: never };

function CardLink({ href, children }: { href?: string; children: ReactNode }) {
  if (!href) {
    return <div>{children}</div>;
  }

  const isInternal = href.startsWith("/vivre");
  if (isInternal) {
    return <Link to={href}>{children}</Link>;
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function ServiceCard(props: Props) {
  const accent = props.item?.accent ?? "coal";
  const accentClasses = {
    red: "from-prilly-red/10 to-white text-prilly-red",
    yellow: "from-prilly-yellow/30 to-white text-prilly-coal",
    green: "from-prilly-green/12 to-white text-prilly-green",
    coal: "from-prilly-coal/8 to-white text-prilly-coal",
  }[accent];

  const title = props.item?.title ?? props.service?.title ?? "";
  const description = props.item?.description ?? props.service?.description ?? "";
  const href = props.item?.href ?? props.service?.href;
  const meta = props.service?.meta ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <CardLink href={href}>
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className={cn("surface h-full overflow-hidden p-5", props.compact ? "rounded-[1.5rem]" : "")}
        >
          <div className={cn("h-1 rounded-full bg-gradient-to-r", accentClasses)} />
          <div className="mt-4 space-y-3">
            {props.item?.badge ? (
              <span className="inline-flex rounded-full bg-prilly-soft px-3 py-1 text-xs font-semibold text-prilly-coal/70">
                {props.item.badge}
              </span>
            ) : null}
            <h3 className="text-xl font-semibold text-prilly-coal">{title}</h3>
            <p className="text-sm leading-6 text-prilly-coal/72">{description}</p>
            {meta.length ? (
              <div className="flex flex-wrap gap-2">
                {meta.map((entry) => (
                  <span
                    key={entry}
                    className="rounded-full border border-black/8 bg-white px-3 py-1.5 text-xs text-prilly-coal/68"
                  >
                    {entry}
                  </span>
                ))}
              </div>
            ) : null}
            {href ? (
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
                Ouvrir
                <ArrowRight className="h-4 w-4" />
              </span>
            ) : null}
          </div>
        </motion.div>
      </CardLink>
    </motion.div>
  );
}
