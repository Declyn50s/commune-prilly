import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, FileText, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { AccordionItem } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type {
  ContactInfo,
  DocumentItem,
  HeroConfig,
  LeisureRoute,
  MobilityMode,
  PageLink,
  ParkingEligibility,
  ParkingRate,
  ServiceLink,
} from "@/features/mobilite/data";
import { getLinkProps } from "@/features/mobilite/utils";

export function MobilityPageHero({ hero }: { hero: HeroConfig }) {
  return (
    <PageHero
      eyebrow={hero.eyebrow}
      title={hero.title}
      description={hero.description}
      tone="light"
      aside={
        <div className="space-y-4">
          {hero.imageSrc ? (
            <div className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-white shadow-soft">
              <img src={hero.imageSrc} alt={hero.imageAlt ?? hero.title} className="h-full w-full object-cover" />
            </div>
          ) : null}
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {hero.ctas.map((cta, index) => {
              const linkProps = getLinkProps(cta.href);

              return (
                <a key={cta.href} {...linkProps} className="inline-flex">
                  <Button variant={index === 0 ? "primary" : "secondary"} className="w-full justify-center">
                    {cta.label}
                  </Button>
                </a>
              );
            })}
          </div>
        </div>
      }
    />
  );
}

export function MobilityaccèssCard({ item }: { item: PageLink }) {
  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface group flex h-full flex-col gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float"
    >
      {item.eyebrow ? <span className="eyebrow">{item.eyebrow}</span> : null}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
        <p className="text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      </div>
      <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        Ouvrir la page
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </motion.a>
  );
}

export function TransportModeCard({ item }: { item: MobilityMode }) {
  const Icon = item.icon;

  return (
    <article className="surface h-full p-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-4 space-y-2">
        {item.points.map((point) => (
          <div key={point} className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm text-prilly-coal/78">
            {point}
          </div>
        ))}
      </div>
      <a href={item.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        Voir le detail
        <ChevronRight className="h-4 w-4" />
      </a>
    </article>
  );
}

export function LeisureRouteCard({ item }: { item: LeisureRoute }) {
  const linkProps = item.href ? getLinkProps(item.href) : undefined;

  return (
    <article className="surface h-full p-5 md:p-6">
      <div className="flex flex-wrap items-center gap-2">
        {item.level ? <Badge>{item.level}</Badge> : null}
        {item.duration ? <Badge className="bg-prilly-yellow/20 text-prilly-coal">{item.duration}</Badge> : null}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.highlights.map((highlight) => (
          <span key={highlight} className="rounded-full border border-black/8 px-3 py-2 text-sm text-prilly-coal/74">
            {highlight}
          </span>
        ))}
      </div>
      {item.href ? (
        <a {...linkProps} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
          Consulter le document
          <ChevronRight className="h-4 w-4" />
        </a>
      ) : null}
    </article>
  );
}

export function ServiceLinkCard({ item }: { item: ServiceLink }) {
  const linkProps = getLinkProps(item.href);

  return (
    <a {...linkProps} className="surface block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float">
      {item.eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-red">{item.eyebrow}</p> : null}
      <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        {item.label}
        <ArrowRight className="h-4 w-4" />
      </div>
    </a>
  );
}

export function ParkingRateCard({ item }: { item: ParkingRate }) {
  return (
    <article className="surface h-full p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">{item.title}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">{item.price}</p>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.detail}</p>
      <div className="mt-4 space-y-2">
        {item.locations.map((location) => (
          <div key={location} className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm text-prilly-coal/78">
            {location}
          </div>
        ))}
      </div>
    </article>
  );
}

export function ParkingEligibilityCard({ item }: { item: ParkingEligibility }) {
  return (
    <article className="surface h-full p-5">
      <p className="text-xl font-semibold text-prilly-coal">{item.title}</p>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-4 rounded-[1.5rem] bg-prilly-soft px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Repere tarifaire</p>
        <p className="mt-1 text-lg font-semibold text-prilly-coal">{item.rate}</p>
      </div>
      <div className="mt-4 space-y-2">
        {item.notes.map((note) => (
          <div key={note} className="rounded-2xl border border-black/8 px-4 py-3 text-sm text-prilly-coal/78">
            {note}
          </div>
        ))}
      </div>
    </article>
  );
}

export function ProcedureSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step} className="surface flex gap-4 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-prilly-red text-sm font-semibold text-white">
            {index + 1}
          </div>
          <p className="text-sm leading-6 text-prilly-coal/78">{step}</p>
        </li>
      ))}
    </ol>
  );
}

export function ContactPanel({ contact }: { contact: ContactInfo }) {
  return (
    <div className="surface overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="bg-gradient-to-br from-prilly-coal to-[#555555] p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Contact</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{contact.title}</h3>
          {contact.notes?.length ? (
            <p className="mt-3 text-sm leading-6 text-white/82">{contact.notes[0]}</p>
          ) : null}
        </div>
        <div className="grid gap-4 p-6 md:grid-cols-3 md:p-8">
          {contact.address ? (
            <div className="rounded-[1.5rem] bg-prilly-soft p-5">
              <div className="flex items-center gap-3 text-prilly-red">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">Adresse</span>
              </div>
              <div className="mt-3 space-y-1 text-sm leading-6 text-prilly-coal">
                {contact.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ) : null}
          {contact.phone ? (
            <div className="rounded-[1.5rem] bg-prilly-soft p-5">
              <div className="flex items-center gap-3 text-prilly-red">
                <Phone className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">Telephone</span>
              </div>
              <p className="mt-3 text-sm font-semibold text-prilly-coal">{contact.phone}</p>
            </div>
          ) : null}
          {contact.email ? (
            <div className="rounded-[1.5rem] bg-prilly-soft p-5">
              <div className="flex items-center gap-3 text-prilly-red">
                <Mail className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">E-mail</span>
              </div>
              <a href={`mailto:${contact.email}`} className="mt-3 inline-flex text-sm font-semibold text-prilly-coal">
                {contact.email}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function DocumentCard({ item }: { item: DocumentItem }) {
  const linkProps = getLinkProps(item.href);

  return (
    <a {...linkProps} className="surface block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="flex items-start justify-between gap-4">
        <div>
          {item.category ? <Badge>{item.category}</Badge> : null}
          <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{item.title}</h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
          <FileText className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        {item.label}
        <ArrowRight className="h-4 w-4" />
      </div>
    </a>
  );
}

export function RelatedPagesSection({ title = "Autres pages utiles", items }: { title?: string; items: PageLink[] }) {
  return (
    <section className="space-y-8">
      <SectionHeader
        eyebrow="Pour aller plus loin"
        title={title}
        description="La rubrique Mobilite est pensee comme un ensemble coherent. Ces pages permettent de poursuivre directement selon votre besoin."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <MobilityaccèssCard key={item.href} item={item} />
        ))}
      </div>
    </section>
  );
}
