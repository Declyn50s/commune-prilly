import type { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Download,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  Search,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type {
  AudienceItem,
  DocumentItem,
  FacilityItem,
  FreeActivity,
  HighlightActivity,
  LocalClub,
  PoolRate,
  SportsQuickaccèssItem,
  YouthCenterActivity,
} from "@/features/sports-loisirs/data";

export function SportsPageHero({
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
  ctas?: Array<{ label: string; href: string }>;
}) {
  return (
    <PageHero
      eyebrow={eyebrow}
      title={title}
      description={description}
      tone="warm"
      aside={
        <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white/92 shadow-soft">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
          </div>
          {ctas?.length ? (
            <div className="grid gap-3 p-5 md:grid-cols-3">
              {ctas.map((cta, index) => (
                <a key={cta.href} href={cta.href} className="inline-flex">
                  <Button variant={index === 0 ? "primary" : index === 1 ? "soft" : "ghost"} className="w-full border border-black/8">
                    {cta.label}
                  </Button>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      }
    />
  );
}

export function QuickaccèssCard({ item }: { item: SportsQuickaccèssItem }) {
  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface group block h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-float"
    >
      <div className="aspect-[16/10] overflow-hidden bg-prilly-soft">
        <img src={item.imageSrc} alt={item.imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="space-y-4 p-5 md:p-6">
        <Badge className="bg-prilly-soft text-prilly-coal">{item.label}</Badge>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
          <p className="text-sm leading-6 text-prilly-coal/72">{item.description}</p>
        </div>
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
          Ouvrir
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </motion.a>
  );
}

export function AudienceCard({ item }: { item: AudienceItem }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface h-full p-5 md:p-6"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
      <div className="mt-5 space-y-3">
        {item.points.map((point) => (
          <div key={point} className="rounded-[1.25rem] border border-black/8 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
            {point}
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export function ActivityHighlightCard({ item }: { item: HighlightActivity }) {
  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface group block h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-float"
    >
      <div className="aspect-[6/5] overflow-hidden bg-prilly-soft">
        <img src={item.imageSrc} alt={item.imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
      </div>
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap gap-2">
          <Badge>{item.label}</Badge>
          <Badge className="bg-prilly-yellow/22 text-prilly-coal">{item.audience}</Badge>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
          <p className="text-sm leading-6 text-prilly-coal/72">{item.description}</p>
        </div>
      </div>
    </motion.a>
  );
}

export function FacilityCard({ item }: { item: FacilityItem }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface group h-full overflow-hidden"
    >
      <div className="aspect-[16/10] overflow-hidden bg-prilly-soft">
        <img src={item.imageSrc} alt={item.imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="space-y-4 p-5 md:p-6">
        <Badge className="bg-prilly-soft text-prilly-coal">{item.category}</Badge>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
          <p className="text-sm leading-6 text-prilly-coal/72">{item.description}</p>
        </div>
        <div className="space-y-2">
          {item.details.map((detail) => (
            <div key={detail} className="rounded-[1.15rem] border border-black/8 px-4 py-3 text-sm text-prilly-coal/74">
              {detail}
            </div>
          ))}
        </div>
        {item.href ? (
          <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} className="inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
            {item.external ? "Voir le site" : "Voir le detail"}
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

export function InfoNotice({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-prilly-yellow/18 via-white to-prilly-red/8 p-6 shadow-soft md:p-8">
      <div className="space-y-3">
        <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
        <p className="max-w-3xl text-sm leading-7 text-prilly-coal/74">{description}</p>
      </div>
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}

export function StatGrid({ items }: { items: Array<{ label: string; value: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-[1.5rem] bg-white p-5 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">{item.label}</p>
          <p className="mt-3 text-xl font-semibold text-prilly-coal">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export function PoolChoiceCard({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <a href={href} className="surface block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{description}</p>
    </a>
  );
}

export function PoolInfoSection({
  title,
  imageSrc,
  imageAlt,
  address,
  facts,
  links,
}: {
  title: string;
  imageSrc: string;
  imageAlt: string;
  address?: string;
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
          <div className="space-y-3">
            <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
            {address ? (
              <div className="flex items-center gap-2 text-sm text-prilly-coal/72">
                <MapPin className="h-4 w-4 text-prilly-red" />
                {address}
              </div>
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

export function PoolPricingCard({ item }: { item: PoolRate }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface h-full p-5 md:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">{item.price}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.note}</p>
      <div className="mt-5 space-y-3">
        {item.details.map((detail) => (
          <div key={detail} className="rounded-[1.25rem] border border-black/8 px-4 py-3 text-sm text-prilly-coal/76">
            {detail}
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export function FreeActivityCard({ item, id }: { item: FreeActivity; id?: string }) {
  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface overflow-hidden"
    >
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="aspect-[4/3] overflow-hidden bg-prilly-soft">
          <img src={item.imageSrc} alt={item.imageAlt} className="h-full w-full object-cover" />
        </div>
        <div className="space-y-5 p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Badge key={tag} className="bg-prilly-soft text-prilly-coal">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-prilly-red">{item.subtitle}</p>
            <p className="text-sm leading-7 text-prilly-coal/74">{item.description}</p>
          </div>
          <div className="space-y-3">
            {item.details.map((detail) => (
              <div key={detail} className="rounded-[1.25rem] border border-black/8 px-4 py-3 text-sm text-prilly-coal/76">
                {detail}
              </div>
            ))}
          </div>
          {item.href && item.cta ? (
            <a href={item.href} target="_blank" rel="noreferrer" className="inline-flex">
              <Button>{item.cta}</Button>
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export function YouthCenterCard({ item }: { item: YouthCenterActivity }) {
  return (
    <article className="surface h-full p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-red">{item.when}</p>
      <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
    </article>
  );
}

export function DocumentCard({ item }: { item: DocumentItem }) {
  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="surface block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Badge className="bg-prilly-soft text-prilly-coal">Document</Badge>
          <h3 className="mt-3 text-xl font-semibold text-prilly-coal">{item.title}</h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
          <Download className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        {item.cta}
        <ArrowRight className="h-4 w-4" />
      </div>
    </a>
  );
}

export function CategoryFilterBar({
  categories = [],
  activeCategory,
  onCategoryChange,
}: {
  categories?: ReadonlyArray<{ id: string; label: string }>;
  activeCategory: string;
  onCategoryChange: (value: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onCategoryChange(category.id)}
          className={`focus-ring inline-flex rounded-full px-4 py-2.5 text-sm font-medium transition ${
            activeCategory === category.id ? "bg-prilly-coal text-white shadow-soft" : "border border-black/8 bg-white text-prilly-coal hover:border-prilly-red/25 hover:text-prilly-red"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

export function DirectorySearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="relative block">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-prilly-coal/45" />
      <Input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Rechercher un club, une activité ou un mot-cle..." className="pl-11" />
    </label>
  );
}

export function ClubDirectoryCard({ club }: { club: LocalClub }) {
  const categoryLabel =
    club.category === "musique-chorales" ? "Musique / chorales" : club.category === "sports" ? "Sports" : "Sociétés et associations";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="surface h-full p-5"
    >
      <Badge className="bg-prilly-soft text-prilly-coal">{categoryLabel}</Badge>
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{club.name}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{club.blurb}</p>
      <div className="mt-5 space-y-3 text-sm text-prilly-coal/78">
        {club.contact ? (
          <div className="flex items-start gap-3">
            <Users className="mt-1 h-4 w-4 shrink-0 text-prilly-red" />
            <span>{club.contact}</span>
          </div>
        ) : null}
        {club.email ? (
          <a href={`mailto:${club.email}`} className="flex items-start gap-3 transition hover:text-prilly-red">
            <Mail className="mt-1 h-4 w-4 shrink-0 text-prilly-red" />
            <span>{club.email}</span>
          </a>
        ) : null}
        {club.phone ? (
          <a href={`tel:${club.phone.replace(/[^\d+]/g, "")}`} className="flex items-start gap-3 transition hover:text-prilly-red">
            <Phone className="mt-1 h-4 w-4 shrink-0 text-prilly-red" />
            <span>{club.phone}</span>
          </a>
        ) : null}
        {club.website ? (
          <a href={club.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-prilly-red">
            Voir le site
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

export function ContactPanel({
  title,
  address,
  email,
  phone,
  secondaryPhone,
}: {
  title: string;
  address: string[];
  email: string;
  phone: string;
  secondaryPhone?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-prilly-coal shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-gradient-to-br from-prilly-coal via-[#565656] to-prilly-red p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Contact</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">Pour les informations pratiques, les activités et l'accompagnement des usagers.</p>
        </div>
        <div className="grid gap-4 p-6 md:grid-cols-3 md:p-8">
          <div className="rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Adresse</span>
            </div>
            <div className="mt-4 space-y-1 text-sm text-prilly-coal/78">
              {address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Mail className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Email</span>
            </div>
            <a href={`mailto:${email}`} className="mt-4 inline-flex text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
              {email}
            </a>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <PhoneCall className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Telephone</span>
            </div>
            <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="mt-4 inline-flex text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
              {phone}
            </a>
            {secondaryPhone ? (
              <a href={`tel:${secondaryPhone.replace(/[^\d+]/g, "")}`} className="mt-2 inline-flex text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
                {secondaryPhone}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PracticalInfoGrid({
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

export function ScheduleCard({
  day,
  hours,
}: {
  day: string;
  hours: string;
}) {
  return (
    <div className="surface h-full p-5">
      <div className="flex items-center gap-3 text-prilly-red">
        <Clock3 className="h-5 w-5" />
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">{day}</span>
      </div>
      <p className="mt-4 text-xl font-semibold text-prilly-coal">{hours}</p>
    </div>
  );
}
