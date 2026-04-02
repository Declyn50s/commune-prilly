import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowRight,
  BadgeInfo,
  Building2,
  CalendarDays,
  CheckCircle2,
  FileCheck2,
  FileText,
  Home,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/common/reveal";
import { RubricLayout } from "@/components/common/rubric-layout";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stepperSteps = [
  {
    id: "autorisation",
    number: "1",
    title: "Autorisation",
    summary: "Verifier le bon circuit et les délais",
    icon: FileCheck2,
  },
  {
    id: "lieu",
    number: "2",
    title: "Lieu",
    summary: "Choisir et reserver a temps",
    icon: MapPin,
  },
  {
    id: "budget",
    number: "3",
    title: "Budget",
    summary: "Prevoir le financement et les aides",
    icon: BadgeInfo,
  },
  {
    id: "organisation",
    number: "4",
    title: "Organisation",
    summary: "Regler la logistique et la coordination",
    icon: ShieldCheck,
  },
] as const;

const legalItems = [
  {
    title: "Assurance RC",
    description: "Une assurance responsabilite civile est indispensable pour couvrir les risques lies a l'évènement.",
    icon: ShieldCheck,
  },
  {
    title: "SUISA",
    description: "Si vous diffusez de la musique, pensez a clarifier les droits et la déclaration SUISA.",
    icon: Sparkles,
  },
  {
    title: "Gaz",
    description: "Toute installation ou utilisation de gaz doit faire l'objet d'un contrôle obligatoire.",
    icon: AlertTriangle,
  },
  {
    title: "Horaires",
    description: "La limite usuelle est minuit. Une derogation est necessaire pour aller jusqu'a 4h.",
    icon: CalendarDays,
  },
] as const;

const practicalItems: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}> = [
  {
    title: "Materiel",
    description: "Listez tables, chaises, scene, sonorisation, electricite et besoins de montage le plus tot possible.",
    icon: Building2,
  },
  {
    title: "Dechets",
    description: "Anticipez les points de tri, les sacs, le nettoyage et le retour a l'etat propre apres l'évènement.",
    icon: Home,
    href: "/demarches/dechets",
  },
  {
    title: "accèssibilite",
    description: "Prevoir des circulations lisibles, un accueil simple et un accès praticable pour tous les publics.",
    icon: Users,
  },
  {
    title: "Affichage",
    description: "L'affichage et les supports temporaires suivent des regles communales a verifier avant impression.",
    icon: FileText,
    href: "/services/domaine-communal",
  },
] as const;

const securityItems = [
  "Plan d'evacuation clair et partage avec l'equipe",
  "accès secours libre et facilement identifiable",
  "Contact medical ou dispositif BUSAMA selon l'ampleur du projet",
] as const;

function StepperCard({
  step,
}: {
  step: (typeof stepperSteps)[number];
}) {
  const Icon = step.icon;

  return (
    <a href={`#${step.id}`} className="group block h-full">
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.18 }} className="surface h-full p-5 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-red text-lg font-semibold text-white">{step.number}</span>
          <Icon className="h-5 w-5 text-prilly-red" />
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-prilly-coal">{step.title}</h3>
        <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{step.summary}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
          Aller a l'etape
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </motion.div>
    </a>
  );
}

function DetailCard({
  eyebrow,
  title,
  description,
  points,
  ctaLabel,
  ctaHref,
  variant = "primary",
}: {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
  variant?: "primary" | "secondary" | "soft";
}) {
  return (
    <div className="rounded-[1.8rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">{eyebrow}</p>
      <h3 className="mt-4 text-3xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-prilly-coal/74">{description}</p>
      <div className="mt-6 space-y-3">
        {points.map((point) => (
          <div key={point} className="flex items-start gap-3 rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-prilly-green" />
            <span>{point}</span>
          </div>
        ))}
      </div>
      <a href={ctaHref} className="mt-6 inline-flex">
        <Button variant={variant}>
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </a>
    </div>
  );
}

function IconInfoCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <div className="surface h-full p-5 md:p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-red/10 text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{description}</p>
    </div>
  );
}

export default function ManifestationsPage() {
  return (
    <RubricLayout
      breadcrumb={[
        { label: "Accueil", href: "/" },
        { label: "Loisirs", href: "/loisirs" },
        { label: "Organiser une manifestation" },
      ]}
      eyebrow="évènements & organisation"
      title="Organiser une manifestation"
      description="Un parcours guide, clair et actionnable pour savoir quoi faire et a quel moment."
      tone="warm"
      aside={
        <div className="space-y-4">
          <div className="rounded-[1.75rem] border border-prilly-yellow/35 bg-white/92 p-5 shadow-soft">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-prilly-red/10 text-prilly-red">Autorisations</Badge>
              <Badge className="bg-prilly-yellow/20 text-prilly-coal">Lieux & budget</Badge>
              <Badge className="bg-prilly-soft text-prilly-coal">Organisation</Badge>
            </div>
            <p className="mt-4 text-sm leading-6 text-prilly-coal/76">
              En 10 secondes, l'objectif est simple: comprendre les etapes, ouvrir le bon service et lancer l'action suivante sans chercher dans plusieurs pages.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-black/8 bg-prilly-coal p-5 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Parcours</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/82">
              <span className="rounded-full bg-white/10 px-3 py-2">Autorisation</span>
              <ArrowRight className="h-4 w-4" />
              <span className="rounded-full bg-white/10 px-3 py-2">Lieu</span>
              <ArrowRight className="h-4 w-4" />
              <span className="rounded-full bg-white/10 px-3 py-2">Budget</span>
              <ArrowRight className="h-4 w-4" />
              <span className="rounded-full bg-white/10 px-3 py-2">Organisation</span>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href="#stepper" className="inline-flex">
              <Button className="w-full justify-center">Voir les etapes</Button>
            </a>
            <a href="/loisirs/subventions" className="inline-flex">
              <Button variant="secondary" className="w-full justify-center">
                Demander une subvention
              </Button>
            </a>
          </div>
        </div>
      }
    >
      <section id="stepper" className="space-y-8">
        <SectionHeader
          eyebrow="Stepper principal"
          title="4 etapes pour savoir quoi faire tout de suite"
          description="Chaque etape est cliquable et vous emmene directement vers la bonne section. Le but est d'eviter les murs de texte et de rendre la suite evidente."
        />
        <div className="grid gap-4 xl:grid-cols-4">
          {stepperSteps.map((step, index) => (
            <Reveal key={step.id} delay={index * 0.03}>
              <StepperCard step={step} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="autorisation" className="space-y-8">
        <SectionHeader
          eyebrow="Etape 1"
          title="Obtenir les autorisations"
          description="Commencez ici si vous voulez verifier le bon circuit administratif et le bon délai avant toute autre chose."
        />
        <DetailCard
          eyebrow="Autorisation"
          title="Police du commerce et calendrier"
          description="Pour une manifestation courante, comptez un délai minimum de 30 jours. Pour un grand évènement, anticipez jusqu'a 3 mois, notamment lorsque le cadre POCAMA doit être pris en compte."
          points={[
            "Police du commerce: Polouest",
            "délai standard: 30 jours minimum",
            "Grand évènement: anticiper 3 mois",
            "POCAMA: a integrer pour les dispositifs plus lourds",
          ]}
          ctaLabel="Contacter Polouest"
          ctaHref="https://www.polouest.ch/"
        />
      </section>

      <section id="lieu" className="space-y-8">
        <SectionHeader
          eyebrow="Etape 2"
          title="Choisir un lieu"
          description="Le choix du lieu conditionne tres vite la date, la jauge, la logistique et meme votre dossier de subvention."
        />
        <DetailCard
          eyebrow="Lieu"
          title="Salles communales et reservation anticipee"
          description="Verifiez d'abord la disponibilite du lieu. Une reservation anticipee permet de fiabiliser votre projet et de mieux cadrer la suite des demarches."
          points={[
            "Comparer les salles communales selon l'usage",
            "Reserver le plus tot possible",
            "Conserver la confirmation pour votre dossier",
          ]}
          ctaLabel="Voir les salles"
          ctaHref="/services/location-salles"
          variant="secondary"
        />
      </section>

      <section id="budget" className="space-y-8">
        <SectionHeader
          eyebrow="Etape 3"
          title="Planifier votre budget"
          description="Cette etape sert a mettre votre projet en securite: budget, plan de financement et eventuel soutien communal."
        />
        <DetailCard
          eyebrow="Budget"
          title="Financement et subventions"
          description="Preparez un budget lisible, clarifiez vos recettes et depenses, puis verifiez si une subvention culturelle peut accompagner le projet."
          points={[
            "Budget detaille et realiste",
            "Plan de financement coherent",
            "Subventions possibles selon le type de projet",
          ]}
          ctaLabel="Voir les subventions"
          ctaHref="/loisirs/subventions"
          variant="soft"
        />
      </section>

      <section id="organisation" className="space-y-8">
        <SectionHeader
          eyebrow="Etape 4"
          title="Regler l'organisation"
          description="Une fois l'autorisation, le lieu et le budget cadres, il reste a verrouiller les aspects pratiques pour que l'évènement soit fluide."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {practicalItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <div className="surface h-full p-5 md:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-red/10 text-prilly-red">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
                {item.href ? (
                  <a href={item.href} className="mt-5 inline-flex">
                    <Button variant="ghost" className="border border-black/8 bg-white">
                      Ouvrir
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Obligations legales"
          title="Les points a verifier avant validation"
          description="Ce bloc isole les obligations les plus sensibles pour vous aider a eviter les oublis critiques."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {legalItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <IconInfoCard title={item.title} description={item.description} icon={item.icon} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Bloc pratique"
          title="Materiel, déchets, horaires et coordination"
          description="Le but est de reduire les allers-retours: vous voyez ici les repères logistiques utiles avant l'envoi du dossier."
        />
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.8rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
            <div className="space-y-3">
              <div className="rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">Prevoir le materiel et les besoins techniques des le Départ</div>
              <div className="rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">Organiser la gestion des déchets et la remise en etat</div>
              <div className="rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">Verifier les horaires autorises et les besoins de derogation</div>
            </div>
          </div>
          <div className="rounded-[1.8rem] border border-black/8 bg-gradient-to-br from-prilly-yellow/20 via-white to-prilly-green/10 p-6 shadow-soft md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Liens utiles</p>
            <div className="mt-5 space-y-3">
              <a href="/demarches/dechets" className="flex items-center justify-between rounded-[1.15rem] bg-white/90 px-4 py-4 text-sm text-prilly-coal/78 transition hover:text-prilly-red">
                <span>Consulter la page déchets</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/services/domaine-communal" className="flex items-center justify-between rounded-[1.15rem] bg-white/90 px-4 py-4 text-sm text-prilly-coal/78 transition hover:text-prilly-red">
                <span>Voir les regles d'affichage</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/services/gaz" className="flex items-center justify-between rounded-[1.15rem] bg-white/90 px-4 py-4 text-sm text-prilly-coal/78 transition hover:text-prilly-red">
                <span>Contacter le service du gaz</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Securite"
          title="Les indispensables pour accueillir en securite"
          description="Trois points simples a faire remonter tout de suite dans votre organisation."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {securityItems.map((item, index) => (
            <Reveal key={item} delay={index * 0.03}>
              <div className="surface h-full p-5 md:p-6">
                <ShieldCheck className="h-5 w-5 text-prilly-red" />
                <p className="mt-4 text-sm leading-7 text-prilly-coal/76">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="CTA final"
          title="Pret a organiser votre évènement ?"
          description="Quand le lieu, les autorisations et le budget sont clairs, vous pouvez passer a l'action sans perdre le fil."
        />
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-prilly-red/12 via-prilly-yellow/24 to-white shadow-soft">
          <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-prilly-coal">Un dernier bloc pour agir directement</h3>
              <p className="mt-4 text-sm leading-7 text-prilly-coal/76">
                La suite depend surtout de votre avancement: soit vous ouvrez le bon parcours de demande, soit vous enclenchez la recherche de financement.
              </p>
            </div>
            <div className="grid gap-3">
              <a href="https://www.polouest.ch/" className="inline-flex">
                <Button className="w-full justify-center">Faire une demande</Button>
              </a>
              <a href="/loisirs/subventions" className="inline-flex">
                <Button variant="secondary" className="w-full justify-center">
                  Demander une subvention
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Contact"
          title="Service culture et integration"
          description="Pour clarifier un cas particulier, verifier un enchainement ou être oriente vers le bon service."
        />
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.9rem] border border-black/8 bg-prilly-coal p-6 text-white shadow-soft md:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <Phone className="h-5 w-5 text-prilly-yellow" />
                <p className="mt-3 text-sm leading-6 text-white/84">+41 21 622 74 40</p>
              </div>
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <Mail className="h-5 w-5 text-prilly-yellow" />
                <p className="mt-3 text-sm leading-6 text-white/84">sci@prilly.ch</p>
              </div>
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <Search className="h-5 w-5 text-prilly-yellow" />
                <p className="mt-3 text-sm leading-6 text-white/84">Orientation vers le bon interlocuteur</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+41216227440" className="inline-flex">
                <Button>Appeler</Button>
              </a>
              <a href="mailto:sci@prilly.ch" className="inline-flex">
                <Button variant="secondary">Envoyer un mail</Button>
              </a>
            </div>
          </div>
          <div className="rounded-[1.9rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Repere rapide</p>
            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-3 rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-prilly-green" />
                Autorisation d'abord
              </div>
              <div className="flex items-start gap-3 rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-prilly-green" />
                Lieu et budget ensuite
              </div>
              <div className="flex items-start gap-3 rounded-[1.15rem] bg-prilly-soft px-4 py-4 text-sm text-prilly-coal/76">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-prilly-green" />
                Organisation et securite avant validation finale
              </div>
            </div>
          </div>
        </div>
      </section>
    </RubricLayout>
  );
}
