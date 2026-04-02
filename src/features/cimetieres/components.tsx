import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/common/page-hero";
import { AccordionItem } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type {
  BurialType,
  CemeteryContact,
  CemeteryDocument,
  CemeteryPlace,
  PriorityItem,
  TariffGuide,
} from "@/features/cimetieres/data";

export function CemeteryHero({
  eyebrow,
  title,
  description,
  ctas,
  keyFacts,
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctas: Array<{ label: string; href: string }>;
  keyFacts: string[];
}) {
  return (
    <PageHero
      eyebrow={eyebrow}
      title={title}
      description={description}
      tone="light"
      aside={
        <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
          <div className="space-y-4 p-6 md:p-7">
            <div className="space-y-3">
              {keyFacts.map((fact) => (
                <div key={fact} className="rounded-[1.25rem] border border-black/8 bg-prilly-soft/55 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
                  {fact}
                </div>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {ctas.map((cta, index) => (
                <a key={cta.href} href={cta.href} className="inline-flex">
                  <Button variant={index === 0 ? "primary" : "soft"} className="w-full border border-black/8">
                    {cta.label}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}

export function PriorityActionCard({ item }: { item: PriorityItem }) {
  const Icon = item.icon;

  return (
    <article className="surface h-full p-5 md:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
    </article>
  );
}

export function CemeteryCard({ item }: { item: CemeteryPlace }) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <Badge className="bg-prilly-soft text-prilly-coal">Cimetiere</Badge>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
      <div className="mt-3 flex items-center gap-2 text-sm text-prilly-coal/68">
        <MapPin className="h-4 w-4 text-prilly-red" />
        {item.location}
      </div>
      <p className="mt-4 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5 space-y-3">
        {item.notes.map((note) => (
          <div key={note} className="rounded-[1.15rem] border border-black/8 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
            {note}
          </div>
        ))}
      </div>
    </article>
  );
}

export function BurialTypeCard({ item }: { item: BurialType }) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5 space-y-3">
        {item.details.map((detail) => (
          <div key={detail} className="rounded-[1.15rem] border border-black/8 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
            {detail}
          </div>
        ))}
      </div>
    </article>
  );
}

export function TariffGuideCard({ item }: { item: TariffGuide }) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Tarifs simplifies</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.summary}</p>
      <div className="mt-5 space-y-3">
        {item.details.map((detail) => (
          <div key={detail} className="rounded-[1.15rem] border border-black/8 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
            {detail}
          </div>
        ))}
      </div>
    </article>
  );
}

export function InfoListBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="surface h-full p-6 md:p-7">
      <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item} className="rounded-[1.25rem] border border-black/8 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export function CemeteryDocumentCard({ item }: { item: CemeteryDocument }) {
  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="surface group block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float md:p-6">
      <Badge className="bg-prilly-soft text-prilly-coal">{item.tag}</Badge>
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        {item.label}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </a>
  );
}

export function AccessInfoCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: PriorityItem["icon"];
}) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{description}</p>
    </article>
  );
}

export function ContactSplitCard({ item }: { item: CemeteryContact }) {
  return (
    <article className="overflow-hidden rounded-[2rem] bg-prilly-coal shadow-soft">
      <div className="bg-gradient-to-br from-prilly-coal via-[#565656] to-prilly-red p-6 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/66">Contact</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/82">{item.role}</p>
      </div>
      <div className="grid gap-4 p-6 md:grid-cols-3">
        <div className="rounded-[1.5rem] bg-white p-5">
          <div className="flex items-center gap-3 text-prilly-red">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Adresse</span>
          </div>
          <div className="mt-4 space-y-1 text-sm text-prilly-coal/78">
            {item.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <div className="rounded-[1.5rem] bg-white p-5">
          <div className="flex items-center gap-3 text-prilly-red">
            <Mail className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Email</span>
          </div>
          <a href={`mailto:${item.email}`} className="mt-4 inline-flex text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
            {item.email}
          </a>
        </div>
        <div className="rounded-[1.5rem] bg-white p-5">
          <div className="flex items-center gap-3 text-prilly-red">
            <Phone className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Telephone</span>
          </div>
          <a href={`tel:${item.phone.replace(/[^\d+]/g, "")}`} className="mt-4 block text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
            {item.phone}
          </a>
          {item.secondary ? (
            <a href={`tel:${item.secondary.replace(/[^\d+]/g, "")}`} className="mt-2 block text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
              {item.secondary}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function FaqSection({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <AccordionItem key={item.question} title={item.question}>
          <p>{item.answer}</p>
        </AccordionItem>
      ))}
    </div>
  );
}

export function RelatedDeathAction() {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-prilly-yellow/18 via-white to-prilly-red/8 p-6 shadow-soft md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">Demarche prioritaire</p>
      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">Besoin d'un parcours plus administratif ?</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-prilly-coal/74">
        La page démarche permet de retrouver l'entrée administrative liee aux inhumations si vous cherchez d'abord un parcours de formalites.
      </p>
      <div className="mt-5">
        <Link to="/demarches/inhumations" className="inline-flex">
          <Button className="border border-black/8">Ouvrir la démarche inhumations</Button>
        </Link>
      </div>
    </div>
  );
}
