import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CalendarDays,
  Building2,
  CheckCircle2,
  Download,
  FileCheck2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { RubricLayout } from "@/components/common/rubric-layout";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const subsidyTypes = [
  {
    title: "Subvention ponctuelle",
    badge: "Projet unique",
    description:
      "Pour un évènement, une creation, une action culturelle ou socio-culturelle qui n'a pas vocation a être reconduite automatiquement.",
    points: ["Pour un projet date", "Non reconductible", "Instruction par la Commission culturelle"],
    href: "/docs/loisirs/subventions-culturelles/formulaire-subvention-culturelle-ponctuelle-2026.docx",
    cta: "Télécharger le formulaire ponctuel",
  },
  {
    title: "Subvention annuelle",
    badge: "Partenaire régulier",
    description:
      "Pour une association, une institution ou un partenaire qui porte une activité culturelle suivie et renouvelle sa demande chaque annee.",
    points: ["Pour une activité recurrente", "Renouvellement annuel", "Instruction par le Service culture et integration"],
    href: "/docs/loisirs/subventions-culturelles/formulaire-subvention-culturelle-annuelle-2026.docx",
    cta: "Télécharger le formulaire annuel",
  },
] as const;

const eligibilityCards = [
  {
    title: "Associations",
    description: "Structures locales ou partenaires qui proposent des activités culturelles ou socio-culturelles utiles  à la vie prillerane.",
    icon: Users,
  },
  {
    title: "Artistes",
    description: "Personnes porteuses d'un projet de creation, de diffusion ou de mediation avec un ancrage local clair.",
    icon: Sparkles,
  },
  {
    title: "Institutions",
    description: "Acteurs culturels installes ou invites a contribuer durablement au rayonnement culturel de Prilly.",
    icon: Building2,
  },
] as const;

const criteria = [
  { icon: Sparkles, text: "Projet culturel, artistique ou socioculturel" },
  { icon: MapPin, text: "Projet à Prilly ou avec un rayonnement local identifiable" },
  { icon: FileCheck2, text: "Dossier clair, complet et solide" },
  { icon: ShieldCheck, text: "Interet du projet pour le public et la vie locale" },
  { icon: CheckCircle2, text: "Attention portée au developpement durable" },
] as const;

const acceptedProfiles = ["Associations locales", "Artistes", "Compagnies", "Institutions culturelles"] as const;
const aidTypes = ["Subvention financiere", "Garantie de deficit", "Soutien en communication", "Mise a disposition de salles"] as const;

const processSteps = [
  {
    number: "1",
    title: "Reserver une salle",
    highlight: "Obligatoire avant la demande",
    description:
      "Si votre projet implique un lieu communal, commencez par verifier la disponibilite et obtenir une confirmation de location. Cette etape peut être anticipee jusqu'a 1 an avant.",
    points: ["Passage conseille par la page Organiser une manifestation", "Confirmation a joindre au dossier"],
  },
  {
    number: "2",
    title: "Preparer le dossier",
    highlight: "Le coeur de la demande",
    description:
      "Rassemblez un descriptif simple, un budget detaille, un plan de financement, vos statuts et le bon formulaire selon le type de soutien vise.",
    points: ["Projet explique en quelques paragraphes", "Budget coherent", "Pieces administratives a jour"],
  },
  {
    number: "3",
    title: "Deposer la demande",
    highlight: "Au moins 4 mois avant",
    description:
      "Anticipez le calendrier de commission. Un depot trop tardif fragilise l'instruction et peut repousser l'examen du dossier.",
    points: ["Verifier la séance cible", "Envoyer le formulaire et les annexes ensemble"],
  },
  {
    number: "4",
    title: "Attendre la décision",
    highlight: "Compter environ 3 mois",
    description:
      "La ville analyse le dossier, verifie les pieces et rend sa décision apres la commission ou l'examen du service selon le type de subvention.",
    points: ["Rester joignable pour completer le dossier", "Ne pas engager le projet en pensant la subvention acquise"],
  },
] as const;

const documentsChecklist = [
  "Descriptif du projet",
  "Budget detaille",
  "Plan de financement",
  "Statuts",
  "Confirmation de location",
  "Formulaire officiel",
] as const;

const timeline = [
  { meeting: "31 mars", deadline: "15 mars" },
  { meeting: "11 juin", deadline: "29 mai" },
  { meeting: "10 septembre", deadline: "31 aout" },
  { meeting: "19 novembre", deadline: "31 octobre" },
] as const;

const postProjectChecklist = [
  "Resume du projet",
  "Objectifs atteints",
  "Public touche",
  "Analyse du deroulement",
  "Actions de communication",
  "Bilan financier",
  "Perspectives",
] as const;

const downloads = [
  {
    title: "Formulaire subvention ponctuelle",
    type: "Formulaire",
    description: "A utiliser pour un projet unique, une action datée ou un évènement non reconductible.",
    href: "/docs/loisirs/subventions-culturelles/formulaire-subvention-culturelle-ponctuelle-2026.docx",
  },
  {
    title: "Formulaire subvention annuelle",
    type: "Formulaire",
    description: "Pour les associations et partenaires qui deposent une demande a renouveler chaque annee.",
    href: "/docs/loisirs/subventions-culturelles/formulaire-subvention-culturelle-annuelle-2026.docx",
  },
  {
    title: "Exemple de budget",
    type: "Exemple",
    description: "Un support concret pour présenter un budget lisible et un plan de financement crédible.",
    href: "/docs/loisirs/subventions-culturelles/exemple-budget.pdf",
  },
  {
    title: "Canevas bilan",
    type: "Bilan",
    description: "Le modele a reprendre pour cloturer votre projet dans les 3 mois suivant sa realisation.",
    href: "/docs/loisirs/subventions-culturelles/canevas-bilan.pdf",
  },
  {
    title: "Criteres officiels",
    type: "Reference",
    description: "Le document de cadrage qui precise l'esprit des soutiens accordes par la Ville de Prilly.",
    href: "/docs/loisirs/subventions-culturelles/criteres-officiels.pdf",
  },
] as const;

function HeroAside() {
  return (
    <div className="space-y-4">
      <div className="rounded-[1.75rem] border border-prilly-yellow/35 bg-white/92 p-5 shadow-soft">
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-prilly-red/10 text-prilly-red">Projets culturels</Badge>
          <Badge className="bg-prilly-yellow/20 text-prilly-coal">Associations & artistes</Badge>
          <Badge className="bg-prilly-green/12 text-prilly-green">Aides financieres</Badge>
        </div>
        <p className="mt-4 text-sm leading-6 text-prilly-coal/76">
          En moins de 10 secondes, cette page doit vous aider a verifier votre eligibilite, choisir le bon dispositif et preparer un dossier solide.
        </p>
      </div>
      <div className="rounded-[1.75rem] border border-black/8 bg-prilly-coal p-5 text-white shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Parcours complet</p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-white/82">
          <span className="rounded-full bg-white/10 px-3 py-2">Organiser</span>
          <ArrowRight className="h-4 w-4" />
          <span className="rounded-full bg-white/10 px-3 py-2">Financer</span>
          <ArrowRight className="h-4 w-4" />
          <span className="rounded-full bg-white/10 px-3 py-2">Realiser</span>
          <ArrowRight className="h-4 w-4" />
          <span className="rounded-full bg-white/10 px-3 py-2">Cloturer</span>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <a href="#deposer-une-demande" className="inline-flex">
          <Button className="w-full justify-center">Deposer une demande</Button>
        </a>
        <a href="#criteres" className="inline-flex">
          <Button variant="secondary" className="w-full justify-center">
            Voir les criteres
          </Button>
        </a>
        <a href="/loisirs/manifestations" className="inline-flex">
          <Button variant="soft" className="w-full justify-center">
            Organiser un évènement
          </Button>
        </a>
      </div>
    </div>
  );
}

function InfoCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <div className="surface p-5 md:p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-red/10 text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{description}</p>
    </div>
  );
}

function ChecklistCard({ title, items, tone = "light" }: { title: string; items: readonly string[]; tone?: "light" | "dark" }) {
  const baseClass =
    tone === "dark"
      ? "rounded-[1.75rem] border border-white/10 bg-prilly-coal p-6 text-white shadow-soft"
      : "rounded-[1.75rem] border border-black/8 bg-white p-6 shadow-soft";

  return (
    <div className={baseClass}>
      <h3 className={`text-xl font-semibold tracking-tight ${tone === "dark" ? "text-white" : "text-prilly-coal"}`}>{title}</h3>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className={`flex items-start gap-3 rounded-[1.1rem] px-4 py-3 text-sm leading-6 ${
              tone === "dark" ? "bg-white/8 text-white/84" : "bg-prilly-soft text-prilly-coal/76"
            }`}
          >
            <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${tone === "dark" ? "text-prilly-yellow" : "text-prilly-green"}`} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DownloadCard({ title, type, description, href }: { title: string; type: string; description: string; href: string }) {
  return (
    <div className="surface flex h-full flex-col p-5 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <Badge className="bg-prilly-soft text-prilly-coal">{type}</Badge>
        <Download className="h-4 w-4 text-prilly-coal/45" />
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-prilly-coal/74">{description}</p>
      <a href={href} target="_blank" rel="noreferrer" className="mt-6 inline-flex">
        <Button variant="secondary" className="w-full justify-center">
          Télécharger
        </Button>
      </a>
    </div>
  );
}

export default function CulturalSubsidiesPage() {
  return (
    <RubricLayout
      breadcrumb={[
        { label: "Accueil", href: "/" },
        { label: "Loisirs", href: "/loisirs" },
        { label: "Subventions culturelles" },
      ]}
      eyebrow="Culture & accompagnement"
      title="Subventions culturelles"
      description="Un soutien pour vos projets artistiques, culturels et socio-culturels à Prilly."
      tone="warm"
      aside={<HeroAside />}
    >
      <section className="space-y-8">
        <SectionHeader
          eyebrow="Comprendre les subventions"
          title="La ville soutient les projets qui font vivre la culture à Prilly"
          description="La logique est simple: aider la creation artistique, les projets culturels et les initiatives socio-culturelles qui ont un vrai sens pour le territoire et ses publics."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {eligibilityCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <InfoCard title={item.title} description={item.description} icon={item.icon} />
            </Reveal>
          ))}
        </div>
        <div className="rounded-[1.75rem] border border-black/8 bg-gradient-to-r from-prilly-soft via-white to-prilly-yellow/15 px-5 py-5 text-sm leading-7 text-prilly-coal/78 shadow-soft md:px-6">
          Les subventions peuvent être ponctuelles ou annuelles. Le bon choix depend surtout du rythme de votre projet et du lien que vous entretenez avec la ville dans la duree.
        </div>
      </section>

      <section id="choisir" className="space-y-8">
        <SectionHeader
          eyebrow="Choisir le bon type"
          title="Deux portes d'entrée, selon votre projet"
          description="L'objectif est d'eviter l'hesitation administrative: si vous portez un projet unique, partez sur le ponctuel. Si vous êtes un partenaire recurrent, partez sur l'annuel."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {subsidyTypes.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="surface h-full p-5 md:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className={index === 0 ? "bg-prilly-red/10 text-prilly-red" : "bg-prilly-yellow/25 text-prilly-coal"}>{item.badge}</Badge>
                  <Badge className="bg-prilly-soft text-prilly-coal">Aide culturelle</Badge>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
                <div className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="rounded-[1.15rem] bg-prilly-soft px-4 py-3 text-sm text-prilly-coal/76">
                      {point}
                    </div>
                  ))}
                </div>
                <a href={item.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex">
                  <Button className="w-full justify-center">{item.cta}</Button>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="criteres" className="space-y-8">
        <SectionHeader
          eyebrow="Conditions & criteres"
          title="Les points qui comptent vraiment dans l'examen du dossier"
          description="Plutot qu'une liste abstraite, cette section aide a verifier si votre demande est dans le bon cadre avant de constituer un dossier complet."
        />
        <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-black/8 bg-white p-6 shadow-soft">
            <div className="grid gap-3 sm:grid-cols-2">
              {criteria.map((item) => (
                <div key={item.text} className="rounded-[1.2rem] bg-prilly-soft px-4 py-4">
                  <item.icon className="h-5 w-5 text-prilly-red" />
                  <p className="mt-3 text-sm leading-6 text-prilly-coal/78">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <ChecklistCard title="Projets concernes" items={acceptedProfiles} />
            <ChecklistCard title="Aides possibles" items={aidTypes} />
          </div>
        </div>
      </section>

      <section id="deposer-une-demande" className="space-y-8">
        <SectionHeader
          eyebrow="Comment faire une demande"
          title="Un parcours clair en 4 etapes"
          description="Le point critique est simple: si votre projet passe par une salle communale, il faut commencer par la reservation avant meme de finaliser la demande de subvention."
          action={
            <a href="/loisirs/manifestations">
              <Button variant="soft">Organiser un évènement</Button>
            </a>
          }
        />
        <div className="grid gap-4 xl:grid-cols-4">
          {processSteps.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <div className="surface h-full p-5 md:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-red text-lg font-semibold text-white">{item.number}</span>
                  <Badge className="bg-prilly-yellow/25 text-prilly-coal">{item.highlight}</Badge>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-prilly-coal">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
                <div className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="rounded-[1.1rem] bg-prilly-soft px-4 py-3 text-sm text-prilly-coal/76">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Documents a fournir"
          title="La checklist qui evite les dossiers incomplets"
          description="Rassemblez ces pieces avant l'envoi. C'est le moyen le plus simple de gagner du temps de part et d'autre."
          action={
            <a href="/docs/loisirs/subventions-culturelles/subventions-culturelles-documents.zip" target="_blank" rel="noreferrer">
              <Button variant="secondary">Télécharger tous les documents</Button>
            </a>
          }
        />
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <ChecklistCard title="Pieces a joindre" items={documentsChecklist} />
          <div className="rounded-[1.75rem] border border-black/8 bg-gradient-to-br from-prilly-yellow/20 via-white to-prilly-green/10 p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/60">Bon reflexe</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">Commencer par le lieu, puis finaliser le financement</h3>
            <p className="mt-4 text-sm leading-7 text-prilly-coal/74">
              Si vous organisez une manifestation, votre confirmation de location ou votre cadre logistique renforce immediatement la credibilite du dossier.
            </p>
            <a href="/loisirs/manifestations" className="mt-6 inline-flex">
              <Button className="justify-center">Voir le parcours manifestation</Button>
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Calendrier & délais"
          title="La bonne séance depend de votre date de depot"
          description="Reperez d'abord la commission visée, puis remontez au délai de depot correspondant pour ne pas manquer le bon train."
        />
        <div className="grid gap-4 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <Reveal key={item.meeting} delay={index * 0.03}>
              <div className="surface h-full p-5 md:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-coal text-white">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Commission</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-prilly-coal">{item.meeting}</h3>
                <div className="mt-5 rounded-[1.15rem] bg-prilly-soft px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Depot jusqu'au</p>
                  <p className="mt-2 text-lg font-semibold text-prilly-red">{item.deadline}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Apres la subvention"
          title="Apres votre projet"
          description="Cette etape est souvent oubliee alors qu'elle conditionne une relation de confiance avec la ville: un bilan doit être transmis dans les 3 mois apres la realisation."
        />
        <div className="grid gap-4 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-[1.75rem] border border-prilly-yellow/35 bg-gradient-to-br from-prilly-red/6 via-white to-prilly-yellow/18 p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/60">Cloture du projet</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-prilly-coal">Un bilan dans les 3 mois</h3>
            <p className="mt-4 text-sm leading-7 text-prilly-coal/74">
              Le bilan n'est pas qu'une formalite. Il permet de montrer ce qui a été realise, l'effet du soutien recu et les suites envisagées pour votre projet ou votre structure.
            </p>
            <a href="/docs/loisirs/subventions-culturelles/canevas-bilan.pdf" target="_blank" rel="noreferrer" className="mt-6 inline-flex">
              <Button variant="secondary">Ouvrir le canevas bilan</Button>
            </a>
          </div>
          <ChecklistCard title="Contenu attendu du bilan" items={postProjectChecklist} tone="dark" />
        </div>
      </section>

      <section id="telechargements" className="space-y-8">
        <SectionHeader
          eyebrow="Telechargements"
          title="Les bons documents, au bon moment"
          description="Chaque support est replace dans son usage pour eviter la bibliotheque de PDF sans contexte."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {downloads.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <DownloadCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Contact"
          title="Service culture et integration"
          description="Pour verifier un cas particulier, clarifier le type de soutien ou savoir a quelle séance viser."
        />
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.9rem] border border-black/8 bg-prilly-coal p-6 text-white shadow-soft md:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <MapPin className="h-5 w-5 text-prilly-yellow" />
                <p className="mt-3 text-sm leading-6 text-white/84">Route de Cossonay 40<br />1008 Prilly</p>
              </div>
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <Mail className="h-5 w-5 text-prilly-yellow" />
                <p className="mt-3 text-sm leading-6 text-white/84">sci@prilly.ch</p>
              </div>
              <div className="rounded-[1.25rem] bg-white/8 p-4">
                <Phone className="h-5 w-5 text-prilly-yellow" />
                <p className="mt-3 text-sm leading-6 text-white/84">+41 21 622 74 40</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href="mailto:sci@prilly.ch" className="inline-flex">
                <Button className="w-full justify-center">Ecrire</Button>
              </a>
              <a href="tel:+41216227440" className="inline-flex">
                <Button variant="secondary" className="w-full justify-center">
                  Appeler
                </Button>
              </a>
            </div>
          </div>
          <div className="rounded-[1.9rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Parcours recommande</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-prilly-coal">Organiser - Financer - Realiser - Cloturer</h3>
            <p className="mt-4 text-sm leading-7 text-prilly-coal/74">
              Commencez par cadrer votre manifestation ou votre lieu, passez ensuite par la demande de subvention, puis gardez en tete le bilan final des la conception du projet.
            </p>
            <div className="mt-6 space-y-3">
              <a href="/loisirs/manifestations" className="inline-flex w-full">
                <Button variant="soft" className="w-full justify-center">
                  Organiser une manifestation
                </Button>
              </a>
              <a href="/services/location-salles" className="inline-flex w-full">
                <Button variant="ghost" className="w-full justify-center border border-black/8 bg-white">
                  Reserver une salle
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </RubricLayout>
  );
}
