import { motion } from "framer-motion";
import { ArrowRight, Clock3, Mail, Phone, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type {
  DirectoryCategory,
  DirectoryService,
  EmergencyContact,
} from "@/features/contact-directory/communalDirectoryData";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function normalizePhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function categoryTone(category: string) {
  const tones: Record<string, string> = {
    administration: "bg-prilly-coal text-white",
    population: "bg-prilly-green/12 text-prilly-green",
    social: "bg-prilly-red/10 text-prilly-red",
    finances: "bg-[rgba(12,95,135,0.1)] text-[#0c5f87]",
    culture: "bg-prilly-yellow/25 text-prilly-coal",
    "enfance-jeunesse": "bg-prilly-soft text-prilly-coal",
    technique: "bg-prilly-coal/10 text-prilly-coal",
    urbanisme: "bg-prilly-green/8 text-prilly-coal",
    informatique: "bg-[rgba(12,95,135,0.1)] text-[#0c5f87]",
  };

  return tones[category] ?? "bg-prilly-soft text-prilly-coal";
}

export function DirectoryHero({
  shortcuts,
  onShortcut,
}: {
  shortcuts: DirectoryService[];
  onShortcut: (service: DirectoryService) => void;
}) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-prilly-coal bg-mesh text-white shadow-soft">
      <div className="grid gap-8 px-6 py-8 md:px-8 md:py-10 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-5">
          <span className="eyebrow border-white/10 bg-white/10 text-white">Contact</span>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Annuaire communal</h1>
            <p className="max-w-2xl text-base leading-7 text-white/82">
              Trouvez rapidement le bon service, ses coordonnees, ses horaires et ses demarches.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {shortcuts.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => onShortcut(service)}
                className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/16"
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[260px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/8">
          <img
            src="/images/contact/annuaire-chateau-facade.jpg"
            alt="Facade du batiment communal de Prilly"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(21,27,34,0.2)_0%,rgba(21,27,34,0.05)_42%,rgba(21,27,34,0.28)_100%)]" />
        </div>
      </div>
    </section>
  );
}

export function DirectorySearch({
  value,
  onChange,
  onClear,
}: {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}) {
  return (
    <div className="rounded-[1.75rem] border border-black/8 bg-white p-4 shadow-soft md:p-5">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-prilly-coal/45" />
        <Input
          id="directory-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Rechercher un service, un contact ou une demarche"
          className="h-14 rounded-[1.2rem] border-black/8 pl-12 pr-12 text-base"
        />
        {value ? (
          <button
            type="button"
            onClick={onClear}
            className="focus-ring absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-prilly-coal/55 transition hover:bg-prilly-soft hover:text-prilly-coal"
            aria-label="Effacer la recherche"
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export function DirectoryFilters({
  categories,
  activeCategory,
  onChange,
}: {
  categories: DirectoryCategory[];
  activeCategory: string;
  onChange: (categoryId: string) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-max gap-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = category.id === activeCategory;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onChange(category.id)}
              className={cn(
                "focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition",
                isActive
                  ? "bg-[#0c5f87] text-white shadow-soft"
                  : "border border-black/8 bg-white text-prilly-coal hover:border-[#0c5f87]/20 hover:text-[#0c5f87]",
              )}
            >
              <Icon className="h-4 w-4" />
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function DirectoryAlphabetNav({
  letters,
  availableLetters,
}: {
  letters: string[];
  availableLetters: string[];
}) {
  return (
    <div className="overflow-x-auto rounded-[1.5rem] border border-black/8 bg-white p-3 shadow-soft">
      <div className="flex min-w-max gap-2">
        {letters.map((letter) => {
          const enabled = availableLetters.includes(letter);
          return enabled ? (
            <a
              key={letter}
              href={`#directory-letter-${letter}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white text-sm font-semibold text-prilly-coal transition hover:border-[#0c5f87]/20 hover:text-[#0c5f87]"
            >
              {letter}
            </a>
          ) : (
            <span
              key={letter}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/6 bg-prilly-soft/60 text-sm font-semibold text-prilly-coal/35"
            >
              {letter}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function DirectoryAlphabetSidebar({
  letters,
  availableLetters,
}: {
  letters: string[];
  availableLetters: string[];
}) {
  return (
    <aside className="hidden lg:block lg:self-start">
      <div className="sticky top-32 max-h-[calc(100vh-10rem)] overflow-auto rounded-[1.6rem] border border-black/8 bg-white/98 p-5 shadow-[0_16px_40px_rgba(31,34,35,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/56">
          Index alphabetique
        </p>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {letters.map((letter) => {
            const enabled = availableLetters.includes(letter);

            return enabled ? (
              <a
                key={letter}
                href={`#directory-letter-${letter}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white text-sm font-semibold text-prilly-coal transition hover:border-[#0c5f87]/20 hover:text-[#0c5f87]"
              >
                {letter}
              </a>
            ) : (
              <span
                key={letter}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/6 bg-prilly-soft/60 text-sm font-semibold text-prilly-coal/35"
              >
                {letter}
              </span>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export function DirectoryHours({ hours }: { hours: string[] }) {
  return (
    <div className="rounded-[1.3rem] border border-black/8 bg-white p-4">
      <div className="flex items-start gap-3">
        <Clock3 className="mt-0.5 h-4 w-4 text-prilly-red" />
        <div className="w-full">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Horaires</p>
          <div className="mt-3 grid gap-2">
            {hours.map((hour) => (
              <div
                key={hour}
                className="rounded-[1rem] bg-prilly-soft/70 px-3 py-2 text-sm leading-6 text-prilly-coal/78"
              >
                {hour}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DirectoryCard({
  service,
  searchQuery,
  relatedServiceName,
}: {
  service: DirectoryService;
  searchQuery: string;
  relatedServiceName?: string;
}) {
  const isReferral = Boolean(service.relatedService);
  const isHighlighted = Boolean(searchQuery.trim());

  const content = (
    <>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge className={categoryTone(service.category)}>{service.category}</Badge>
            {isReferral ? <Badge className="bg-prilly-yellow/25 text-prilly-coal">Renvoi</Badge> : null}
            {isHighlighted ? (
              <Badge className="bg-[rgba(12,95,135,0.1)] text-[#0c5f87]">Resultat</Badge>
            ) : null}
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">{service.name}</h3>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{service.description}</p>
          </div>
        </div>
      </div>

      {service.note ? (
        <p className="mt-4 rounded-[1.2rem] border border-prilly-yellow/35 bg-prilly-yellow/12 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
          {service.note}
          {relatedServiceName ? ` Renvoi vers ${relatedServiceName}.` : ""}
        </p>
      ) : null}

      <div className="mt-5 grid gap-3 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.3rem] bg-prilly-soft p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Adresse</p>
          <p className="mt-3 text-sm leading-6 text-prilly-coal">{service.address}</p>
          <div className="mt-4 space-y-2">
            {service.phone ? (
              <a
                href={normalizePhoneHref(service.phone)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-prilly-coal transition hover:text-prilly-red"
              >
                <Phone className="h-4 w-4 text-prilly-red" />
                {service.phone}
              </a>
            ) : null}
            {service.email ? (
              <a
                href={`mailto:${service.email}`}
                className="flex items-center gap-2 text-sm font-semibold text-prilly-coal transition hover:text-prilly-red"
              >
                <Mail className="h-4 w-4 text-prilly-red" />
                {service.email}
              </a>
            ) : null}
          </div>
        </div>

        <DirectoryHours hours={service.hours} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {service.phone ? (
          <a href={normalizePhoneHref(service.phone)} className="inline-flex">
            <Button size="sm">
              <Phone className="h-4 w-4" />
              Appeler
            </Button>
          </a>
        ) : null}
        {service.email ? (
          <a href={`mailto:${service.email}`} className="inline-flex">
            <Button variant="secondary" size="sm">
              <Mail className="h-4 w-4" />
              Envoyer un e-mail
            </Button>
          </a>
        ) : null}
        {isExternalHref(service.href) ? (
          <a href={service.href} target="_blank" rel="noreferrer" className="inline-flex">
            <Button variant="ghost" size="sm" className="border border-black/8 bg-white">
              Voir la page
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        ) : (
          <Link to={service.href} className="inline-flex">
            <Button variant="ghost" size="sm" className="border border-black/8 bg-white">
              Voir la page
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </>
  );

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={cn(
        "surface h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float md:p-6",
        isHighlighted ? "ring-2 ring-[#0c5f87]/12" : "",
      )}
    >
      {content}
    </motion.article>
  );
}

export function DirectorySection({
  letter,
  services,
  searchQuery,
  resolveRelatedServiceName,
}: {
  letter: string;
  services: DirectoryService[];
  searchQuery: string;
  resolveRelatedServiceName: (id?: string) => string | undefined;
}) {
  return (
    <section id={`directory-letter-${letter}`} className="space-y-4 scroll-mt-32">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(12,95,135,0.1)] text-xl font-semibold text-[#0c5f87]">
          {letter}
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-prilly-coal">Lettre {letter}</h2>
          <p className="text-sm text-prilly-coal/62">{services.length} service(s)</p>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        {services.map((service) => (
          <DirectoryCard
            key={service.id}
            service={service}
            searchQuery={searchQuery}
            relatedServiceName={resolveRelatedServiceName(service.relatedService)}
          />
        ))}
      </div>
    </section>
  );
}

export function DirectoryEmergencyPanel({ items }: { items: EmergencyContact[] }) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-prilly-red/20 bg-prilly-coal text-white shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="bg-gradient-to-br from-prilly-coal via-[#424242] to-prilly-red p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/62">
            Urgences / acces directs
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Les contacts a activer sans passer par l'annuaire
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/82">
            Police de l'Ouest et Service du feu sont volontairement separes du reste des services
            pour rester visibles immediatement.
          </p>
        </div>
        <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
          {items.map((item) => (
            <article key={item.id} className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-white/10 text-white">{item.name}</Badge>
                {item.urgency ? (
                  <Badge className="bg-prilly-yellow/25 text-prilly-coal">Urgence {item.urgency}</Badge>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-white/78">{item.description}</p>
              <div className="mt-5 space-y-2">
                {item.phone ? (
                  <a
                    href={normalizePhoneHref(item.phone)}
                    className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-white"
                  >
                    <Phone className="h-4 w-4 text-prilly-yellow" />
                    {item.phone}
                  </a>
                ) : null}
                {item.urgency ? <p className="text-sm font-medium text-white/82">Urgences : {item.urgency}</p> : null}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.phone ? (
                  <a href={normalizePhoneHref(item.phone)} className="inline-flex">
                    <Button size="sm">Appeler</Button>
                  </a>
                ) : null}
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className="inline-flex">
                    <Button variant="secondary" size="sm">
                      Site web
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DirectoryEmptyState({ reset }: { reset: () => void }) {
  return (
    <div className="surface p-8 text-center">
      <h3 className="text-2xl font-semibold text-prilly-coal">Aucun service trouve</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">
        Essayez un autre mot-cle ou revenez a la vue complete de l'annuaire.
      </p>
      <button type="button" onClick={reset} className="mt-5 inline-flex">
        <Button variant="secondary">Reinitialiser la recherche</Button>
      </button>
    </div>
  );
}
