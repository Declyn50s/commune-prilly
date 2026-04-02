import type { ComponentType } from "react";
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/common/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function EmployerHero({
  eyebrow,
  title,
  description,
  ctas,
  highlight,
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctas: Array<{ label: string; href: string }>;
  highlight: string;
}) {
  return (
    <PageHero
      eyebrow={eyebrow}
      title={title}
      description={description}
      tone="warm"
      aside={
        <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
          <div className="space-y-4 p-6 md:p-7">
            <div className="rounded-[1.35rem] bg-prilly-soft/70 p-4 text-sm leading-6 text-prilly-coal/76">{highlight}</div>
            <div className="grid gap-3 sm:grid-cols-2">
              {ctas.map((cta, index) => {
                const isMail = cta.href.startsWith("mailto:");
                const content = (
                  <Button variant={index === 0 ? "primary" : "soft"} className="w-full border border-black/8">
                    {cta.label}
                  </Button>
                );

                return isMail ? (
                  <a key={cta.href} href={cta.href} className="inline-flex">
                    {content}
                  </a>
                ) : (
                  <Link key={cta.href} to={cta.href} className="inline-flex">
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      }
    />
  );
}

export function EmployerStatCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">{value}</p>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{note}</p>
    </article>
  );
}

export function EmployerValueCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
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

export function EmployerInfoBlock({
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

export function EmployerSectionCard({
  eyebrow,
  title,
  description,
  items,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  cta?: { label: string; href: string };
}) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-white p-6 shadow-soft md:p-8">
      <Badge className="bg-prilly-soft text-prilly-coal">{eyebrow}</Badge>
      <h3 className="mt-4 text-3xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-prilly-coal/74">{description}</p>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-[1.25rem] border border-black/8 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
            {item}
          </div>
        ))}
      </div>
      {cta ? (
        <div className="mt-6">
          <Link to={cta.href} className="inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : null}
    </section>
  );
}

export function EmployerContactPanel({
  title,
  address,
  email,
  recruitmentEmail,
  phone,
  generalPhone,
  charterHref,
}: {
  title: string;
  address: string[];
  email: string;
  recruitmentEmail: string;
  phone: string;
  generalPhone: string;
  charterHref: string;
}) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-prilly-coal shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-gradient-to-br from-prilly-coal via-[#565656] to-prilly-red p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">Contact</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">
            Pour les questions RH, les candidatures, les opportunites et la charte de valeurs.
          </p>
          <div className="mt-5">
            <a href={charterHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white">
              <Download className="h-4 w-4" />
              Consulter la charte de valeurs
            </a>
          </div>
        </div>
        <div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-4 md:p-8">
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
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">RH</span>
            </div>
            <a href={`mailto:${email}`} className="mt-4 block text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
              {email}
            </a>
            <a href={`mailto:${recruitmentEmail}`} className="mt-2 block text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
              {recruitmentEmail}
            </a>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Telephone</span>
            </div>
            <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="mt-4 block text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
              {phone}
            </a>
            <a href={`tel:${generalPhone.replace(/[^\d+]/g, "")}`} className="mt-2 block text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
              {generalPhone}
            </a>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <Badge className="bg-prilly-soft text-prilly-coal">CTA</Badge>
            <div className="mt-4 space-y-3">
              <Link to="/ville/offres-emploi" className="block text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
                Voir les offres d'emploi
              </Link>
              <a href={`mailto:${recruitmentEmail}`} className="block text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
                Envoyer une candidature
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
