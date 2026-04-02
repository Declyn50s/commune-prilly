import type { ComponentType } from "react";
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type {
  BookingStep,
  DownloadDocument,
  PracticalNotice,
  RoomCard,
  RoomDetail,
} from "@/features/location-salles/data";

export function RentalHero({
  eyebrow,
  title,
  description,
  ctas,
  notes,
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctas: Array<{ label: string; href: string }>;
  notes: string[];
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
            <div className="space-y-3">
              {notes.map((note) => (
                <div key={note} className="rounded-[1.25rem] border border-black/8 bg-prilly-soft/55 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
                  {note}
                </div>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {ctas.map((cta, index) => {
                const isPdf = cta.href.endsWith(".pdf");
                return (
                  <a key={cta.href} href={cta.href} target={isPdf ? "_blank" : undefined} rel={isPdf ? "noreferrer" : undefined} className="inline-flex">
                    <Button variant={index === 0 ? "primary" : "soft"} className="w-full border border-black/8">
                      {cta.label}
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      }
    />
  );
}

export function RoomCardView({ item }: { item: RoomCard }) {
  const imageContent = item.imageSrc ? (
    <img src={item.imageSrc} alt={item.imageAlt} className="h-full w-full object-cover" />
  ) : (
    <div className="flex h-full w-full items-end bg-gradient-to-br from-prilly-coal via-[#5e5e5e] to-prilly-red p-5 text-white">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">{item.label}</p>
        <p className="mt-2 text-2xl font-semibold tracking-tight">{item.title}</p>
      </div>
    </div>
  );

  return (
    <article className="surface group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="aspect-[16/10] overflow-hidden bg-prilly-soft">{imageContent}</div>
      <div className="space-y-4 p-5 md:p-6">
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-prilly-soft text-prilly-coal">{item.label}</Badge>
          <Badge className="bg-prilly-yellow/22 text-prilly-coal">{item.audience}</Badge>
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.summary}</p>
        </div>
        <div className="grid gap-3 text-sm text-prilly-coal/76">
          <div className="rounded-[1.1rem] border border-black/8 px-4 py-3">
            <span className="font-semibold text-prilly-coal">Capacite:</span> {item.capacity}
          </div>
          <div className="rounded-[1.1rem] border border-black/8 px-4 py-3">
            <span className="font-semibold text-prilly-coal">Tarif:</span> {item.price}
          </div>
          <div className="rounded-[1.1rem] border border-black/8 px-4 py-3">
            <span className="font-semibold text-prilly-coal">Usage:</span> {item.use}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={item.detailHref} className="inline-flex">
            <Button variant="soft" className="border border-black/8">
              Voir details
            </Button>
          </a>
          <a href={item.reserveHref} target={item.reserveExternal ? "_blank" : undefined} rel={item.reserveExternal ? "noreferrer" : undefined} className="inline-flex">
            <Button>Reserver</Button>
          </a>
        </div>
      </div>
    </article>
  );
}

export function BookingStepCard({ item }: { item: BookingStep }) {
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

export function NoticeCard({
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

export function RoomDetailSection({ item }: { item: RoomDetail }) {
  return (
    <section id={item.id} className="surface overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-gradient-to-br from-prilly-coal via-[#5e5e5e] to-prilly-red p-6 text-white md:p-8">
          <Badge className="border border-white/12 bg-white/10 text-white">{item.use}</Badge>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight">{item.title}</h3>
          <div className="mt-4 space-y-3 text-sm leading-6 text-white/82">
            <p><span className="font-semibold text-white">Adresse:</span> {item.location}</p>
            <p><span className="font-semibold text-white">Capacite:</span> {item.capacity}</p>
            <p><span className="font-semibold text-white">Tarif:</span> {item.price}</p>
            <p><span className="font-semibold text-white">Public:</span> {item.audience}</p>
          </div>
          <div className="mt-6">
            <a href={item.reserveHref} target={item.reserveExternal ? "_blank" : undefined} rel={item.reserveExternal ? "noreferrer" : undefined} className="inline-flex">
              <Button variant="soft" className="border border-white/14 bg-white/10 text-white hover:bg-white/18">
                {item.reserveLabel}
              </Button>
            </a>
          </div>
        </div>
        <div className="space-y-3 p-6 md:p-8">
          {item.details.map((detail) => (
            <div key={detail} className="rounded-[1.15rem] border border-black/8 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
              {detail}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DownloadCard({ item }: { item: DownloadDocument }) {
  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="surface group block h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float md:p-6">
      <Badge className="bg-prilly-soft text-prilly-coal">{item.tag}</Badge>
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        <Download className="h-4 w-4" />
        {item.label}
      </div>
    </a>
  );
}

export function RentalContactPanel({
  title,
  address,
  email,
  phone,
  officeHours,
}: {
  title: string;
  address: string[];
  email: string;
  phone: string;
  officeHours: string[];
}) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-prilly-coal shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-gradient-to-br from-prilly-coal via-[#565656] to-prilly-red p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">Contact unique</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">
            Pour choisir une salle, verifier la disponibilite, transmettre une demande et coordonner l'intendance.
          </p>
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
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Email</span>
            </div>
            <a href={`mailto:${email}`} className="mt-4 inline-flex text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
              {email}
            </a>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Phone className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Telephone</span>
            </div>
            <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="mt-4 inline-flex text-sm font-semibold text-prilly-coal transition hover:text-prilly-red">
              {phone}
            </a>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Horaires</p>
            <div className="mt-4 space-y-2 text-sm text-prilly-coal/78">
              {officeHours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
