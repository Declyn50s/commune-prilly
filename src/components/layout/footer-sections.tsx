import type { ReactNode } from "react";
import { ArrowRight, CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PrillyLogo } from "@/components/branding/prilly-logo";
import type { NavSection } from "@/types/content";

export function FooterCTA() {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-prilly-yellow/22 via-white to-prilly-red/10 p-6 text-prilly-coal shadow-float md:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">
            Besoin d'une demarche ?
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Trouver vite la bonne action et le bon interlocuteur.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-prilly-coal/72">
            Accedez rapidement aux demarches administratives les plus courantes, contactez la commune
            ou trouvez les horaires et numeros utiles.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/demarches"
            className="focus-ring inline-flex h-12 items-center justify-center rounded-full bg-prilly-red px-6 text-sm font-semibold text-white transition hover:bg-prilly-red/90"
          >
            Faire une demarche
          </Link>
          <Link
            to="/contact/services-communaux"
            className="focus-ring inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-prilly-coal transition hover:border-prilly-red/20 hover:text-prilly-red"
          >
            Contacter la commune
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FooterNav({ sections }: { sections: NavSection[] }) {
  return (
    <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {sections.map((section) => (
        <div key={section.label} className="space-y-4">
          <div>
            <Link to={section.href} className="text-base font-semibold text-white transition hover:text-prilly-yellow">
              {section.label}
            </Link>
            <p className="mt-2 text-sm leading-6 text-white/58">{section.description}</p>
          </div>
          <div className="grid gap-3">
            {section.groups
              .flatMap((group) => group.links)
              .slice(0, 5)
              .map((child) => (
                <Link
                  key={`${section.label}-${child.label}-${child.href}`}
                  to={child.href}
                  className="group inline-flex items-start gap-2 text-sm text-white/74 transition hover:text-white"
                >
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-prilly-yellow transition group-hover:translate-x-0.5" />
                  <span>{child.label}</span>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export function FooterContact() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/58">Contact</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[1.5rem] bg-white/6 p-4">
          <div className="flex items-center gap-3 text-prilly-yellow">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Adresse</span>
          </div>
          <div className="mt-4 space-y-1 text-sm text-white/82">
            <p>Hotel de Ville</p>
            <p>Route de Cossonay 40</p>
            <p>1008 Prilly</p>
          </div>
        </div>
        <div className="rounded-[1.5rem] bg-white/6 p-4">
          <div className="flex items-center gap-3 text-prilly-yellow">
            <Phone className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Telephone</span>
          </div>
          <a href="tel:+41216227200" className="mt-4 inline-flex text-sm font-semibold text-white transition hover:text-prilly-yellow">
            +41 21 622 72 00
          </a>
        </div>
        <div className="rounded-[1.5rem] bg-white/6 p-4">
          <div className="flex items-center gap-3 text-prilly-yellow">
            <Mail className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Email</span>
          </div>
          <a href="mailto:info@prilly.ch" className="mt-4 inline-flex text-sm font-semibold text-white transition hover:text-prilly-yellow">
            info@prilly.ch
          </a>
        </div>
        <div className="rounded-[1.5rem] bg-white/6 p-4">
          <div className="flex items-center gap-3 text-prilly-yellow">
            <CalendarDays className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Horaires</span>
          </div>
          <div className="mt-4 space-y-1 text-sm text-white/82">
            <p>Lun-mer 08:00-11:45 / 13:30-16:30</p>
            <p>Jeu 08:00-11:45 / 13:30-18:00</p>
            <p>Ven 08:00-14:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const quickLinks = [
  { title: "Faire une demarche", href: "/demarches", description: "Accéder aux parcours prioritaires." },
  { title: "Prendre rendez-vous", href: "/contact/services-communaux", description: "Trouver le bon service avant de venir." },
  { title: "Acheter abonnement piscine", href: "/loisirs/sports-et-loisirs/piscines#abonnements", description: "Voir les formules AquaPass et la vente en ligne." },
  { title: "Signaler un probleme", href: "/services/travaux-domaine-public", description: "Voirie, chantier ou domaine public." },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.1-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v2.8h2.5V21h3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.6 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M21.6 8.4a2.9 2.9 0 0 0-2-2C17.9 6 12 6 12 6s-5.9 0-7.6.4a2.9 2.9 0 0 0-2 2A30.7 30.7 0 0 0 2 12a30.7 30.7 0 0 0 .4 3.6 2.9 2.9 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.9 2.9 0 0 0 2-2A30.7 30.7 0 0 0 22 12a30.7 30.7 0 0 0-.4-3.6ZM10.2 15.3V8.7l5.7 3.3-5.7 3.3Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M6.4 8.4A1.4 1.4 0 1 1 6.4 5.6a1.4 1.4 0 0 1 0 2.8ZM5.2 9.8h2.4V18H5.2V9.8Zm4 0h2.3v1.1h.03c.32-.6 1.1-1.23 2.27-1.23 2.43 0 2.88 1.6 2.88 3.68V18h-2.4v-4.13c0-.99-.02-2.26-1.38-2.26-1.38 0-1.6 1.08-1.6 2.2V18H9.2V9.8Z" />
    </svg>
  );
}

const socialLinks: Array<{ label: string; href: string; icon: ReactNode }> = [
  { label: "Facebook", href: "https://www.facebook.com/VilledePrilly/", icon: <FacebookIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/ville_de_prilly", icon: <InstagramIcon /> },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCHyWT3JRYIGChnVt3qa2f9Q", icon: <YouTubeIcon /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ville-de-prilly/", icon: <LinkedInIcon /> },
];

const appLinks: Array<{ label: string; href: string; icon: ReactNode }> = [
  {
    label: "App Info Ouest",
    href: "https://www.prilly.ch/index.php?id=1719&L=0",
    icon: <Phone className="h-4 w-4" />,
  },
];

export function FooterQuickLinks() {
  return (
    <section className="space-y-5">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/58">Acces rapides</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
          Les actions les plus utiles en fin de navigation
        </h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {quickLinks.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="group rounded-[1.5rem] border border-white/10 bg-white/6 p-5 transition duration-300 hover:-translate-y-1 hover:border-prilly-yellow/35 hover:bg-white/8"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-prilly-yellow">
              <ArrowRight className="h-4 w-4" />
            </div>
            <h4 className="mt-4 text-lg font-semibold text-white">{item.title}</h4>
            <p className="mt-2 text-sm leading-6 text-white/68">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function FooterBottom() {
  return (
    <section className="flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-end md:justify-between">
      <div className="space-y-4">
        <div className="inline-flex rounded-[1.5rem] bg-white px-5 py-4 shadow-soft">
          <PrillyLogo className="h-10 w-auto md:h-12" />
        </div>
        <p className="max-w-md text-sm leading-6 text-white/68">
          Bienvenue à Prilly - trouvez rapidement l'information, la demarche et
          le contact dont vous avez besoin.
        </p>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/74 transition hover:border-prilly-yellow/35 hover:text-white"
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {appLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/74 transition hover:border-prilly-yellow/35 hover:text-white"
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-3 text-sm text-white/62 md:text-right">
        <p>© 2026 Commune de Prilly. Tous droits reserves.</p>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link to="/contact" className="transition hover:text-white">
            Contact
          </Link>
          <Link to="/contact/securite-prevention" className="transition hover:text-white">
            Securite
          </Link>
          <Link to="/home/accès-rapides" className="transition hover:text-white">
            Plan du site
          </Link>
        </div>
      </div>
    </section>
  );
}
