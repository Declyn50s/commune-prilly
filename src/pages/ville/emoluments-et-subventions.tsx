import {
  ArrowRight,
  BadgeInfo,
  CheckCircle2,
  Download,
  Home,
  Mail,
  MapPin,
  Phone,
  Recycle,
  ShieldCheck,
  Sparkles,
  TramFront,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { RubricLayout } from "@/components/common/rubric-layout";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const needCards = [
  {
    title: "Population",
    description: "Les attestations et taxes de population les plus demandees.",
    href: "#tarifs",
    icon: Users,
    accent: "bg-prilly-red/10 text-prilly-red",
    items: [
      { label: "Attestation d'etablissement", amount: "CHF 10" },
      { label: "Certificat de vie", amount: "CHF 5" },
      { label: "Taxe d'arrivee", amount: "CHF 15 / famille" },
      { label: "Changement d'adresse dans la commune", amount: "Gratuit" },
    ],
  },
  {
    title: "Chiens",
    description: "Les frais recurrents et la démarche a ne pas oublier.",
    href: "/demarches/chiens",
    icon: ShieldCheck,
    accent: "bg-prilly-yellow/25 text-prilly-coal",
    items: [
      { label: "Annonce du chien", amount: "Sous 14 jours" },
      { label: "Impot annuel", amount: "CHF 220" },
      { label: "Exonérations", amount: "Selon situation" },
      { label: "Annonce de deces ou vente", amount: "A signaler" },
    ],
  },
  {
    title: "Logement",
    description: "Les aides et contrôles communaux lies au logement.",
    href: "/vivre/logement",
    icon: Home,
    accent: "bg-prilly-green/12 text-prilly-green",
    items: [
      { label: "Demande de subside logement", amount: "Gratuit" },
      { label: "Renouvellement du dossier", amount: "Gratuit" },
      { label: "Enquete locataires", amount: "Gratuit" },
      { label: "Situation d'insalubrite", amount: "Gratuit" },
    ],
  },
  {
    title: "Stationnement",
    description: "Les macarons et autorisations les plus fréquents.",
    href: "/services/mobilite/stationnement",
    icon: TramFront,
    accent: "bg-[rgba(12,95,135,0.12)] text-[#0c5f87]",
    items: [
      { label: "Habitant", amount: "CHF 360 / an" },
      { label: "Pendulaire", amount: "CHF 600 / an" },
      { label: "Ecole < 50%", amount: "CHF 250 / an" },
      { label: "Ecole > 50%", amount: "CHF 500 / an" },
    ],
  },
  {
    title: "Energie",
    description: "Les aides visibles tout de suite pour renover et mieux equiper son logement.",
    href: "#subventions",
    icon: Sparkles,
    accent: "bg-prilly-soft text-prilly-coal",
    items: [
      { label: "Fenetres performantes", amount: "CHF 50 / m2" },
      { label: "CECB Plus", amount: "max. CHF 1'000" },
      { label: "Photovoltaique", amount: "CHF 300 / kWc" },
      { label: "PAC air/eau", amount: "CHF 400 / kWth max." },
    ],
  },
] as const;

const subsidyFamilies = [
  {
    title: "Energie",
    description: "Un resume des aides qui concernent la renovation, les installations renouvelables et l'efficacite energetique.",
    icon: Sparkles,
    points: [
      "Fenetre, porte, toiture ou dalle: CHF 50 / m2 dans le document 2025.",
      "CECB Plus: reste a charge subventionne, max. CHF 1'000.",
      "Photovoltaique: CHF 300 / kWc jusqu'a 30 kWc, puis forfait.",
      "Chauffage a distance: 20% sur la taxe de raccordement, jusqu'a CHF 9'000.",
    ],
    ctaLabel: "Voir les aides energie detaillees",
    ctaHref: "/services/environnement#subventions",
  },
  {
    title: "Mobilite",
    description: "Des aides concrètes pour rouler autrement et limiter le cout d'un changement d'usage.",
    icon: TramFront,
    points: [
      "Velo classique ou electrique: 20% du prix, max. CHF 300.",
      "Velo cargo electrique: 20%, max. CHF 1'000.",
      "Remorque ou batterie: 20%, max. CHF 300.",
      "FlexiAbo, Mobilis jeune, Interrail ou SwissPass velo: aides prevues selon le cas.",
    ],
    ctaLabel: "Explorer la mobilite à Prilly",
    ctaHref: "/services/mobilite",
  },
  {
    title: "Ecologie",
    description: "Une lecture plus simple des soutiens lies  à la biodiversite, a l'eau et aux espaces extérieurs.",
    icon: Recycle,
    points: [
      "Nichoirs et ruches: 30%, max. CHF 300.",
      "Haies vives, jardins partages, biotopes: jusqu'a CHF 5'000 selon le projet.",
      "Toiture vegetalisée: CHF 40 / m2, max. CHF 10'000.",
      "Recuperation d'eau de pluie: 30%, max. CHF 6'000.",
    ],
    ctaLabel: "Voir la page environnement",
    ctaHref: "/services/environnement",
  },
] as const;

const examples = [
  {
    title: "Remplacer vos fenetres",
    description: "Le document 2025 prevoit une aide de CHF 50 par m2 de vide de maconnerie pour des fenetres performantes.",
    highlight: "Aide visible tout de suite",
    amount: "CHF 50 / m2",
    href: "/services/environnement#subventions",
  },
  {
    title: "Acheter un velo",
    description: "Pour un trajet domicile-travail, un velo classique ou electrique peut être soutenu a hauteur de 20% du prix d'achat.",
    highlight: "Mobilite douce",
    amount: "max. CHF 300",
    href: "/services/mobilite/velos",
  },
  {
    title: "Installer des panneaux",
    description: "Le solaire photovoltaique est subventionne au kWc, avec un forfait au-dela des grandes installations.",
    highlight: "Projet energie",
    amount: "CHF 300 / kWc",
    href: "/services/environnement/solaire",
  },
] as const;

const contactFacts = [
  "Document officiel adopte le 11 novembre 2024",
  "Tarifs et aides valables des le 1er janvier 2025",
  "Le PDF complet reste la reference pour les cas particuliers",
] as const;

export default function EmolumentsSubventionsPage() {
  return (
    <RubricLayout
      breadcrumb={[
        { label: "Accueil", href: "/" },
        { label: "Ville", href: "/ville" },
        { label: "Emoluments et subventions" },
      ]}
      eyebrow="Tarifs communaux"
      title="Emoluments et subventions"
      description="Tous les tarifs et aides de la Ville de Prilly."
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-black/8 bg-white/92 p-5 shadow-soft">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-prilly-red/12 text-prilly-red">Tarifs utiles</Badge>
              <Badge className="bg-prilly-yellow/25 text-prilly-coal">Aides communales</Badge>
              <Badge className="bg-prilly-soft text-prilly-coal">PDF 2025</Badge>
            </div>
            <p className="mt-4 text-sm leading-6 text-prilly-coal/76">
              Cette page simplifie le document officiel pour repondre vite a trois questions: combien ca coute, quelles aides existent et ou agir ensuite.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href="#tarifs" className="inline-flex">
              <Button className="w-full justify-center">Voir les tarifs</Button>
            </a>
            <a href="/docs/ville/emoluments-subventions/emoluments-communaux-2025.pdf" target="_blank" rel="noreferrer" className="inline-flex">
              <Button variant="secondary" className="w-full justify-center">
                Télécharger PDF
              </Button>
            </a>
          </div>
        </div>
      }
    >
      <section id="tarifs" className="space-y-8">
        <SectionHeader
          eyebrow="accès rapide par besoin"
          title="Cinq catégories pour trouver tout de suite le bon ordre de grandeur"
          description="Chaque carte reprend les montants ou aides les plus utiles a lire sur mobile, sans obliger à parcourir le PDF complet."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {needCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <a href={item.href} className="group block h-full">
                  <div className="surface h-full p-5 transition duration-200 group-hover:-translate-y-1">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.accent}`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
                    <div className="mt-4 space-y-2">
                      {item.items.map((detail) => (
                        <div key={detail.label} className="rounded-[1.1rem] bg-prilly-soft px-3 py-3">
                          <p className="text-xs uppercase tracking-[0.14em] text-prilly-coal/55">{detail.label}</p>
                          <p className="mt-1 text-sm font-semibold text-prilly-coal">{detail.amount}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
                      Ouvrir
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="subventions" className="space-y-8">
        <SectionHeader
          eyebrow="Subventions"
          title="Les aides les plus lisibles, regroupees par usage"
          description="Le PDF 2025 melange tarifs et subventions. Ici, les soutiens sont ressortis a part pour que l'on voie plus vite ce qui peut reduire le cout d'un projet."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {subsidyFamilies.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <div className="rounded-[1.9rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-red/10 text-prilly-red">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
                <div className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-start gap-3 rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-prilly-green" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <a href={item.ctaHref} className="mt-6 inline-flex">
                  <Button variant="secondary">
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
          eyebrow="Exemples concrets"
          title="Trois cas pour se projeter rapidement"
          description="Cette section transforme des lignes techniques du PDF en situations de vie plus faciles a comprendre."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {examples.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <div className="rounded-[1.9rem] border border-black/8 bg-gradient-to-br from-white via-white to-prilly-soft p-6 shadow-soft md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">{item.highlight}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-prilly-coal/74">{item.description}</p>
                <div className="mt-5 inline-flex rounded-full bg-prilly-yellow/25 px-4 py-2 text-sm font-semibold text-prilly-coal">
                  {item.amount}
                </div>
                <a href={item.href} className="mt-6 inline-flex">
                  <Button>
                    Voir comment agir
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
          eyebrow="PDF complet"
          title="Le document officiel reste disponible"
          description="La page simplifie l'essentiel, mais le PDF complet reste utile pour les cas particuliers, les tarifs moins fréquents ou la reference administrative."
        />
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.9rem] border border-black/8 bg-prilly-coal p-6 text-white shadow-soft md:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-prilly-yellow">
              <Download className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">Emoluments et subventions communaux 2025</h3>
            <p className="mt-4 text-sm leading-7 text-white/82">
              Le fichier reprend l'ensemble des tarifs et aides adoptes par la Municipalite, avec les details complets par service.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge className="bg-white/10 text-white">26 pages</Badge>
              <Badge className="bg-white/10 text-white">Version officielle</Badge>
              <Badge className="bg-white/10 text-white">Des le 1er janvier 2025</Badge>
            </div>
            <a href="/docs/ville/emoluments-subventions/emoluments-communaux-2025.pdf" target="_blank" rel="noreferrer" className="mt-6 inline-flex">
              <Button variant="secondary">
                Ouvrir le PDF
                <Download className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="rounded-[1.9rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">A retenir</p>
            <div className="mt-5 space-y-3">
              {contactFacts.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">
                  <BadgeInfo className="mt-0.5 h-4 w-4 shrink-0 text-prilly-red" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href="/contact/services-communaux" className="mt-6 inline-flex">
              <Button variant="ghost">
                Trouver le bon service
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Contact"
          title="Administration communale"
          description="Un point d'entrée simple si vous hesitez entre un tarif, une aide ou le bon service pour deposer votre demande."
        />
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.9rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.25rem] bg-prilly-soft p-4">
                <MapPin className="h-5 w-5 text-prilly-red" />
                <p className="mt-3 text-sm leading-6 text-prilly-coal/76">Route de Cossonay 40, 1008 Prilly</p>
              </div>
              <div className="rounded-[1.25rem] bg-prilly-soft p-4">
                <Phone className="h-5 w-5 text-prilly-red" />
                <p className="mt-3 text-sm leading-6 text-prilly-coal/76">+41 21 622 72 11</p>
              </div>
              <div className="rounded-[1.25rem] bg-prilly-soft p-4">
                <Mail className="h-5 w-5 text-prilly-red" />
                <p className="mt-3 text-sm leading-6 text-prilly-coal/76">info@prilly.ch</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:info@prilly.ch" className="inline-flex">
                <Button>Contacter</Button>
              </a>
              <a href="tel:+41216227211" className="inline-flex">
                <Button variant="secondary">Appeler</Button>
              </a>
            </div>
          </div>

          <div className="rounded-[1.9rem] border border-black/8 bg-gradient-to-br from-prilly-yellow/18 via-white to-prilly-soft p-6 shadow-soft md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Pour aller plus loin</p>
            <div className="mt-5 grid gap-3">
              <a href="/demarches/attestations" className="rounded-[1.15rem] bg-white px-4 py-4 text-sm text-prilly-coal/76 transition hover:-translate-y-0.5">
                Attestations et documents de population
              </a>
              <a href="/demarches/chiens" className="rounded-[1.15rem] bg-white px-4 py-4 text-sm text-prilly-coal/76 transition hover:-translate-y-0.5">
                Chiens: annonce, impôt et obligations
              </a>
              <a href="/services/environnement#subventions" className="rounded-[1.15rem] bg-white px-4 py-4 text-sm text-prilly-coal/76 transition hover:-translate-y-0.5">
                Toutes les subventions energie, mobilite et durabilite
              </a>
              <a href="/services/mobilite/stationnement" className="rounded-[1.15rem] bg-white px-4 py-4 text-sm text-prilly-coal/76 transition hover:-translate-y-0.5">
                Stationnement et autorisations
              </a>
            </div>
          </div>
        </div>
      </section>
    </RubricLayout>
  );
}
