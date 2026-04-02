import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PoolChoice, PoolDocument, PricingCard } from "@/features/piscines/data";

export function PoolsHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  ctas,
}: {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctas: Array<{ label: string; href: string }>;
}) {
  return (
    <PageHero
      eyebrow={eyebrow}
      title={title}
      description={description}
      tone="light"
      aside={
        <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
          </div>
          <div className="grid gap-3 p-5 md:grid-cols-2">
            {ctas.map((cta, index) => (
              <a key={cta.href} href={cta.href} className="inline-flex">
                <Button variant={index === 0 ? "primary" : "soft"} className="w-full">
                  {cta.label}
                </Button>
              </a>
            ))}
          </div>
        </div>
      }
    />
  );
}

export function SeasonBadge({ label, description }: { label: string; description: string }) {
  return (
    <div className="inline-flex flex-col rounded-[1.5rem] border border-prilly-red/12 bg-prilly-red/5 px-5 py-4 shadow-soft">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-red">{label}</span>
      <span className="mt-2 text-sm font-medium text-prilly-coal">{description}</span>
    </div>
  );
}

export function PoolChoiceCard({ item }: { item: PoolChoice }) {
  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface group block h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-float"
    >
      <div className="aspect-[16/10] overflow-hidden bg-prilly-soft">
        <img src={item.imageSrc} alt={item.imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="space-y-4 p-5 md:p-6">
        <div className="flex flex-wrap gap-2">
          <Badge>{item.type}</Badge>
          <Badge className="bg-prilly-soft text-prilly-coal">{item.availability}</Badge>
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
        <div className="rounded-[1.25rem] border border-black/8 px-4 py-3 text-sm text-prilly-coal/76">{item.hours}</div>
        <p className="text-sm leading-6 text-prilly-coal/72">{item.highlight}</p>
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
          Voir les details
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </motion.a>
  );
}

export function PoolInfoSection({
  title,
  imageSrc,
  imageAlt,
  address,
  phone,
  facts,
  links,
}: {
  title: string;
  imageSrc: string;
  imageAlt: string;
  address: string;
  phone?: string;
  facts: string[];
  links?: Array<{ label: string; href: string }>;
}) {
  return (
    <section className="surface overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
        <div className="aspect-[4/3] overflow-hidden">
          <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
        </div>
        <div className="space-y-5 p-6 md:p-8">
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-prilly-coal/72">
              <MapPin className="h-4 w-4 text-prilly-red" />
              {address}
            </div>
            {phone ? (
              <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
                <Phone className="h-4 w-4" />
                {phone}
              </a>
            ) : null}
          </div>
          <div className="space-y-3">
            {facts.map((fact) => (
              <div key={fact} className="rounded-[1.25rem] border border-black/8 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
                {fact}
              </div>
            ))}
          </div>
          {links?.length ? (
            <div className="flex flex-wrap gap-3">
              {links.map((link, index) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex">
                  <Button variant={index === 0 ? "primary" : "ghost"} className="border border-black/8">
                    {link.label}
                  </Button>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function PoolPricingCard({ item }: { item: PricingCard }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface h-full p-5 md:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-red">{item.eyebrow}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
      <div className="mt-5 space-y-3">
        {item.entries.map((entry) => (
          <div key={`${item.title}-${entry.label}`} className="flex items-start justify-between gap-4 rounded-[1.25rem] border border-black/8 px-4 py-3">
            <span className="text-sm text-prilly-coal/76">{entry.label}</span>
            <span className="text-sm font-semibold text-prilly-coal">{entry.price}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-prilly-coal/72">{item.note}</p>
    </motion.article>
  );
}

export function HelpfulNotice({
  title,
  description,
  ctas,
}: {
  title: string;
  description: string;
  ctas: Array<{ label: string; href: string }>;
}) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#e8f8fb] via-white to-prilly-soft p-6 shadow-soft md:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-prilly-coal/74">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {ctas.map((cta, index) => (
            <a key={cta.href} href={cta.href} className="inline-flex">
              <Button variant={index === 0 ? "primary" : "ghost"} className="border border-black/8">
                {cta.label}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PracticalInfoList({
  items,
}: {
  items: Array<{ title: string; description: string; icon: ComponentType<{ className?: string }> }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article key={item.title} className="surface h-full p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}

export function OfficialDocumentCard({ item }: { item: PoolDocument }) {
  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="surface block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float">
      <Badge className="bg-prilly-soft text-prilly-coal">Document</Badge>
      <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        {item.cta}
        <ArrowRight className="h-4 w-4" />
      </div>
    </a>
  );
}

export function PoolContactsPanel({
  items,
}: {
  items: Array<{ title: string; subtitle: string; email: string; phone: string; lines: string[]; icon: ComponentType<{ className?: string }> }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article key={item.title} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <div className="border-b border-black/6 bg-gradient-to-br from-prilly-soft via-white to-[#e8f8fb] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-prilly-red shadow-soft">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">{item.subtitle}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
            </div>
            <div className="space-y-4 p-5">
              <div className="space-y-1 text-sm text-prilly-coal/76">
                {item.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <a href={`mailto:${item.email}`} className="flex items-center gap-2 text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
                <Mail className="h-4 w-4 text-prilly-red" />
                {item.email}
              </a>
              <a href={`tel:${item.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-2 text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
                <Phone className="h-4 w-4 text-prilly-red" />
                {item.phone}
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
