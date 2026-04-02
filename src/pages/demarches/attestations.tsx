import { ArrowRight, BadgeInfo, CalendarDays, CheckCircle2, FileText, Mail, Phone, Search, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { RubricLayout } from "@/components/common/rubric-layout";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "Attestation d'etablissement",
    description: "Le document le plus utile pour prouver votre inscription dans la commune.",
    useCase: "Utile pour une démarche administrative, scolaire, bancaire ou de residence.",
  },
  {
    title: "Attestation de Départ",
    description: "Confirme votre Départ de la commune une fois la démarche effectuee.",
    useCase: "A utiliser pour une installation ailleurs ou une demande administrative liee au changement de domicile.",
  },
  {
    title: "Attestation d'annonce de Départ",
    description: "Prouve que vous avez annonce votre Départ  à la commune.",
    useCase: "Utile quand une autre administration demande la preuve que la déclaration a bien été faite.",
  },
  {
    title: "Certificat de vie",
    description: "Atteste officiellement que vous êtes en vie  à la date d'emission.",
    useCase: "Souvent demande par une caisse de pension, une assurance ou une administration etrangere.",
  },
] as const;

const channels = [
  {
    title: "En ligne",
    description: "L'attestation d'etablissement peut être demandée a distance.",
    points: ["Attestation d'etablissement uniquement", "Pratique si vous voulez aller vite", "Pas besoin de vous deplacer pour ce cas precis"],
    ctaLabel: "Aller au guichet virtuel",
    ctaHref: "mailto:population@prilly.ch",
  },
  {
    title: "Guichet",
    description: "Toutes les attestations peuvent être obtenues au guichet de l'Office de la population.",
    points: ["Toutes les attestations", "Contact direct avec le service", "Solution a privilegier pour les cas particuliers"],
    ctaLabel: "Contacter l'Office de la population",
    ctaHref: "mailto:population@prilly.ch",
  },
] as const;

export default function CertificatesPage() {
  return (
    <RubricLayout
      breadcrumb={[
        { label: "Accueil", href: "/" },
        { label: "Demarches", href: "/demarches" },
        { label: "Attestations" },
      ]}
      eyebrow="Documents rapides"
      title="Attestations"
      description="Obtenez rapidement l'attestation dont vous avez besoin."
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-black/8 bg-white/92 p-5 shadow-soft">
            <p className="text-sm leading-6 text-prilly-coal/76">
              La page est pensee pour repondre a deux questions en moins de 5 secondes: laquelle choisir et comment l'obtenir.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href="#accès-direct" className="inline-flex">
              <Button className="w-full justify-center">Faire une demande</Button>
            </a>
            <a href="#types" className="inline-flex">
              <Button variant="secondary" className="w-full justify-center">
                Voir les attestations
              </Button>
            </a>
          </div>
        </div>
      }
    >
      <section id="types" className="space-y-8">
        <SectionHeader
          eyebrow="Choisir son attestation"
          title="Quatre documents, quatre usages tres clairs"
          description="L'objectif est d'eviter toute hesitation avant de contacter le service ou de lancer la demande."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {certificates.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <div className="surface h-full p-5 md:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-red/10 text-prilly-red">
                  {index === 0 ? <FileText className="h-5 w-5" /> : index === 1 ? <Users className="h-5 w-5" /> : index === 2 ? <BadgeInfo className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
                <div className="mt-4 rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">{item.useCase}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Comment l'obtenir"
          title="Deux canaux seulement"
          description="La lecture doit être immediate: en ligne pour un seul type de document, au guichet pour tout le reste."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {channels.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <div className={`rounded-[1.85rem] p-6 shadow-soft md:p-8 ${index === 0 ? "border border-black/8 bg-white" : "border border-black/8 bg-gradient-to-br from-prilly-yellow/20 via-white to-prilly-green/10"}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">{item.title}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-prilly-coal">{item.description}</h3>
                <div className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-prilly-green" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <a href={item.ctaHref} className="mt-6 inline-flex">
                  <Button variant={index === 0 ? "primary" : "secondary"}>
                    {item.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Tarifs"
          title="Le prix ressort tout de suite"
          description="Pas de tableau complexe: seulement les deux montants utiles a connaitre."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="surface p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Tarif standard</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight text-prilly-coal">CHF 10</h3>
            <p className="mt-3 text-sm leading-6 text-prilly-coal/74">Pour les attestations courantes.</p>
          </div>
          <div className="surface p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Certificat de vie</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-tight text-prilly-coal">CHF 5</h3>
            <p className="mt-3 text-sm leading-6 text-prilly-coal/74">Tarif specifique pour ce document.</p>
          </div>
        </div>
      </section>

      <section id="accès-direct" className="space-y-8">
        <SectionHeader
          eyebrow="accès direct"
          title="Aller vite vers le bon canal"
          description="La page se termine par deux actions evidentes: guichet virtuel ou contact direct."
        />
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_auto]">
          <a href="mailto:population@prilly.ch" className="inline-flex">
            <Button className="w-full justify-center">Aller au guichet virtuel</Button>
          </a>
          <a href="mailto:population@prilly.ch" className="inline-flex">
            <Button variant="secondary" className="w-full justify-center">
              Contacter
            </Button>
          </a>
          <div className="rounded-[1.5rem] border border-black/8 bg-white px-5 py-4 text-sm text-prilly-coal/72">
            Office de la population
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Contact"
          title="Office de la population"
          description="Le bon point d'entrée pour les attestations, les Départs et les Démarches de population."
        />
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.9rem] border border-black/8 bg-prilly-coal p-6 text-white shadow-soft md:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <Phone className="h-5 w-5 text-prilly-yellow" />
                <p className="mt-3 text-sm leading-6 text-white/84">+41 21 622 73 21</p>
              </div>
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <Mail className="h-5 w-5 text-prilly-yellow" />
                <p className="mt-3 text-sm leading-6 text-white/84">population@prilly.ch</p>
              </div>
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <CalendarDays className="h-5 w-5 text-prilly-yellow" />
                <p className="mt-3 text-sm leading-6 text-white/84">Guichet et horaires de l'Office de la population</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:population@prilly.ch" className="inline-flex">
                <Button>Envoyer un mail</Button>
              </a>
              <a href="tel:+41216227321" className="inline-flex">
                <Button variant="secondary">Appeler</Button>
              </a>
            </div>
          </div>
          <div className="rounded-[1.9rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">A retenir</p>
            <div className="mt-5 space-y-3">
              <div className="rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">Choisir le bon type d'attestation d'abord</div>
              <div className="rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">En ligne uniquement pour l'attestation d'etablissement</div>
              <div className="rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">Guichet pour toutes les autres attestations</div>
            </div>
          </div>
        </div>
      </section>
    </RubricLayout>
  );
}
