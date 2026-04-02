import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { EventItem, NewsItem } from "@/types/content";

export function NewsCard({ item, index = 0 }: { item: NewsItem; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="surface flex h-full flex-col p-5"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <Badge>{item.category}</Badge>
        <span className="text-sm text-prilly-coal/60">{item.date}</span>
      </div>
      <h3 className="text-lg font-semibold leading-tight text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/70">{item.excerpt}</p>
      <Link to={item.href} className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        Lire l’actualité
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}

export function EventCard({ item, index = 0 }: { item: EventItem; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="surface flex h-full flex-col p-5"
    >
      <Badge className="bg-prilly-green/10 text-prilly-green">{item.category}</Badge>
      <h3 className="mt-4 text-lg font-semibold leading-tight text-prilly-coal">{item.title}</h3>
      <div className="mt-4 space-y-2 text-sm text-prilly-coal/70">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-prilly-red" />
          {item.dateLabel}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-prilly-red" />
          {item.location}
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-prilly-coal/70">{item.description}</p>
      <Link to={item.href} className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        Voir l’événement
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}

export function GenericCard({
  title,
  description,
  href,
  accent = "red",
  badgeLabel = "Explorer",
  ctaLabel = "Ouvrir",
  hideBadge = false,
}: {
  title: string;
  description: string;
  href: string;
  accent?: "red" | "yellow" | "green" | "coal";
  badgeLabel?: string;
  ctaLabel?: string;
  hideBadge?: boolean;
}) {
  const accentClass = {
    red: "bg-prilly-red/10 text-prilly-red",
    yellow: "bg-prilly-yellow/20 text-prilly-coal",
    green: "bg-prilly-green/10 text-prilly-green",
    coal: "bg-prilly-coal/10 text-prilly-coal",
  }[accent];

  return (
    <Link to={href} className="group surface flex h-full flex-col gap-3 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float">
      {hideBadge ? null : (
        <div className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${accentClass}`}>{badgeLabel}</div>
      )}
      <h3 className="text-lg font-semibold leading-tight text-prilly-coal">{title}</h3>
      <p className="text-sm leading-6 text-prilly-coal/70">{description}</p>
      <div className="mt-auto pt-2 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        {ctaLabel}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
