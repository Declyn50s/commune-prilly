import { useState } from "react";
import { AlertTriangle, ArrowRight, BadgeInfo, CheckCircle2, FileText, Mail, MapPin, Phone, Search, ShieldCheck, Trees } from "lucide-react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { ContactPanel, DocumentCard } from "@/features/domaine-communal/components";
import { cn } from "@/lib/utils";

type ResultKind = "sans" | "simple" | "enquete";
type ProjectTypeId = "habitation" | "activite" | "terrain";

type WorkOption = {
  id: string;
  label: string;
  description: string;
  result: ResultKind;
  summary: string;
  nextSteps: string[];
};

type ProjectType = {
  id: ProjectTypeId;
  label: string;
  description: string;
  options: WorkOption[];
};

const resultConfig = {
  sans: {
    label: "Sans autorisation",
    title: "Vous pouvez probablement avancer sans permis",
    icon: CheckCircle2,
    badgeClass: "bg-emerald-500/15 text-emerald-700",
    panelClass: "border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/60",
    accentClass: "bg-emerald-600 text-white",
  },
  simple: {
    label: "Autorisation simple",
    title: "Une demande communale est probablement necessaire",
    icon: FileText,
    badgeClass: "bg-orange-500/15 text-orange-700",
    panelClass: "border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-100/70",
    accentClass: "bg-orange-500 text-white",
  },
  enquete: {
    label: "Enquete publique",
    title: "Votre projet entre probablement dans une procedure avec mise a l'enquete",
    icon: AlertTriangle,
    badgeClass: "bg-rose-500/15 text-rose-700",
    panelClass: "border-rose-200 bg-gradient-to-br from-rose-50 via-white to-red-100/70",
    accentClass: "bg-rose-600 text-white",
  },
} satisfies Record<ResultKind, { label: string; title: string; icon: typeof CheckCircle2; badgeClass: string; panelClass: string; accentClass: string }>;

const projectTypes: ProjectType[] = [
  {
    id: "habitation",
    label: "Maison ou immeuble",
    description: "Travaux sur un logement existant, une facade, une toiture ou un volume bati.",
    options: [
      {
        id: "entretien-leger",
        label: "Entretien interieur leger",
        description: "Peinture, revetements, cuisine ou salle de bain sans modifier la structure ni l'aspect extérieur.",
        result: "sans",
        summary: "Les travaux d'entretien courant, sans impact sur le volume, la facade ou l'affectation, ne demandent en principe pas de permis.",
        nextSteps: ["Verifier que la structure et l'aspect extérieur restent inchanges.", "Contacter le service si le bien est dans un cas particulier.", "Conserver plans et photos en cas de doute."],
      },
      {
        id: "modification-visible",
        label: "Facade, fenetres, toiture ou installation visible",
        description: "Ouverture, velux, modification de facade, panneaux visibles, element technique extérieur.",
        result: "simple",
        summary: "Une demande doit en general être deposee lorsque le projet modifie l'apparence extérieure du batiment.",
        nextSteps: ["Preparer descriptif, plans et visuels du projet.", "Confirmer la bonne procedure avec le service.", "Attendre l'accord communal avant le début des travaux."],
      },
      {
        id: "agrandissement",
        label: "Agrandissement, surlevation ou nouvelle construction",
        description: "Extension, nouveau volume ou transformation lourde du bati.",
        result: "enquete",
        summary: "Les projets qui modifient le volume bati ou la destination du bien relevent en general d'une mise a l'enquete publique.",
        nextSteps: ["Prendre contact tres tot avec le service.", "Prevoir un dossier complet avec plans et pieces techniques.", "Ne pas engager les travaux avant la décision formelle."],
      },
    ],
  },
  {
    id: "activite",
    label: "Commerce ou activite",
    description: "Projet lie à un local commercial, un etablissement ou un changement d'usage.",
    options: [
      {
        id: "amenagement-interieur",
        label: "Amenagement interieur sans changement d'usage",
        description: "Reorganisation legere sans facade ni accueil modifie.",
        result: "sans",
        summary: "Un amenagement interieur purement fonctionnel peut parfois se faire sans permis s'il ne change ni l'usage ni l'enveloppe du local.",
        nextSteps: ["Verifier que l'activite autorisée reste la meme.", "Confirmer qu'aucun element extérieur n'est modifie.", "Envoyer un descriptif au service en cas de doute."],
      },
      {
        id: "enseigne-devanture",
        label: "Devanture, enseigne ou adaptation visible",
        description: "Modification de vitrine, enseigne, terrasse ou amenagement visible depuis l'espace public.",
        result: "simple",
        summary: "Une autorisation est generalement necessaire des qu'un changement est visible de l'espace public.",
        nextSteps: ["Rassembler croquis, dimensions et visuels.", "Verifier aussi les regles sur les procedes de reclame.", "Deposer le dossier avant toute pose ou transformation."],
      },
      {
        id: "changement-affectation",
        label: "Changement d'affectation ou extension",
        description: "Passage d'un usage à un autre, extension importante ou projet recevant du public.",
        result: "enquete",
        summary: "Un changement d'affectation ou une extension importante implique souvent une procedure plus complete avec mise a l'enquete.",
        nextSteps: ["Faire valider la faisabilite en amont.", "Preparer un dossier complet avec plans et infos d'exploitation.", "Anticiper les délais avant toute ouverture ou travaux."],
      },
    ],
  },
  {
    id: "terrain",
    label: "Terrain, extérieur ou arbres",
    description: "Amenagements extérieurs, annexes, clotures, piscine, terrasse ou interventions sur les arbres.",
    options: [
      {
        id: "petit-amenagement",
        label: "Petit amenagement extérieur reversible",
        description: "Mobilier leger, entretien courant ou adaptation mineure sans ouvrage fixe.",
        result: "sans",
        summary: "Les interventions legeres et reversibles ne demandent en principe pas de permis si elles ne creent pas d'ouvrage durable.",
        nextSteps: ["Verifier que l'amenagement reste ponctuel et sans fondation importante.", "Contrôler les limites de propriété.", "Reevaluer le besoin d'autorisation si l'installation devient permanente."],
      },
      {
        id: "piscine-cloture-arbres",
        label: "Cloture, piscine, couvert, terrasse ou abattage d'arbre",
        description: "Ouvrage extérieur courant ou intervention sur un arbre protege ou important.",
        result: "simple",
        summary: "Ces projets passent le plus souvent par une demande simple ou une autorisation specifique.",
        nextSteps: ["Choisir le bon formulaire selon le projet.", "Pour les arbres, lire les directives communales avant toute intervention.", "Ne rien commencer avant le retour du service."],
      },
      {
        id: "annexe-importante",
        label: "Nouvelle annexe, parking, mur important ou gros remaniement",
        description: "Garage, annexe, ouvrage fixe d'ampleur, terrassement ou transformation lourde du terrain.",
        result: "enquete",
        summary: "Un nouvel ouvrage durable ou un remaniement significatif du terrain releve en general d'une mise a l'enquete.",
        nextSteps: ["Prendre rendez-vous avec le service avant de finaliser le projet.", "Preparer plans, implantations et descriptif technique.", "Integrer les délais d'enquete publique dans le planning."],
      },
    ],
  },
];

const processSteps = [
  { title: "1. Verifier le type de procedure", description: "Utilisez le parcours pour vous orienter rapidement entre absence de permis, demande simple ou enquete publique." },
  { title: "2. Preparer le dossier", description: "Rassemblez formulaire, plans, photos et descriptif avant le depot." },
  { title: "3. Deposer avant de commencer", description: "Aucun chantier ne doit commencer tant que l'autorisation requise n'a pas été obtenue." },
  { title: "4. Suivre la suite adaptee", description: "Soit vous pouvez avancer, soit vous deposez une demande simple, soit vous entrez dans une procedure d'enquete publique." },
];

const treeDocuments = [
  { title: "Formulaire de demande d'abattage ou d'elagage", description: "Le point d'entrée a utiliser pour une intervention sur un arbre lorsque l'autorisation est requise.", href: "/docs/urbanisme/formulaire-demande-abattage-elagage.pdf", label: "Ouvrir le formulaire", tag: "Arbres" },
  { title: "Directives communales sur les arbres", description: "Le document a lire avant toute intervention pour comprendre les cas autorises, limites et precautions.", href: "/docs/urbanisme/directives-communales-arbres.pdf", label: "Lire les directives", tag: "Directives" },
  { title: "Guide des procedures d'autorisation", description: "Le guide utile pour comprendre la logique generale des procedures et mieux situer votre projet.", href: "/docs/urbanisme/guide-procedures-autorisation-2018.pdf", label: "Consulter le guide", tag: "Guide" },
];

const contact = {
  title: "Urbanisme et Constructions",
  role: "Police des constructions, permis, autorisations simples, enquêtes publiques et questions sur les arbres.",
  address: ["Route de Cossonay 40", "1008 Prilly"],
  email: "urbanisme@prilly.ch",
  phone: "+41 21 622 72 70",
};

function StatusPill({ kind }: { kind: ResultKind }) {
  return <Badge className={resultConfig[kind].badgeClass}>{resultConfig[kind].label}</Badge>;
}

export default function PoliceDesConstructionsPage() {
  const [projectTypeId, setProjectTypeId] = useState<ProjectTypeId>("habitation");
  const [workOptionId, setWorkOptionId] = useState(projectTypes[0].options[0].id);
  const selectedProjectType = projectTypes.find((item) => item.id === projectTypeId) ?? projectTypes[0];
  const selectedWork = selectedProjectType.options.find((item) => item.id === workOptionId) ?? selectedProjectType.options[0];
  const selectedResult = resultConfig[selectedWork.result];
  const ResultIcon = selectedResult.icon;

  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Police des constructions" }]} />

      <PageHero
        eyebrow="Urbanisme et constructions"
        title="Police des constructions"
        description="En 5 secondes, verifiez si votre projet demande un permis et quoi faire ensuite. Le parcours ci-dessous vous oriente entre absence d'autorisation, demande simple et enquete publique."
        tone="warm"
        aside={
          <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
            <div className="space-y-4 p-6 md:p-7">
              <div className="grid gap-3">
                <div className="rounded-[1.25rem] bg-emerald-50 px-4 py-3 text-sm text-emerald-800">Vert: pas de permis dans les cas courants</div>
                <div className="rounded-[1.25rem] bg-orange-50 px-4 py-3 text-sm text-orange-800">Orange: demande simple a deposer</div>
                <div className="rounded-[1.25rem] bg-rose-50 px-4 py-3 text-sm text-rose-800">Rouge: projet probablement soumis a enquete publique</div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a href="#parcours" className="rounded-full bg-prilly-red px-5 py-3 text-center text-sm font-semibold text-white">Demarrer le parcours</a>
                <a href="#contact" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal">Contacter le service</a>
              </div>
              <p className="text-sm leading-6 text-prilly-coal/70">Parcours indicatif: en cas de doute, un message au service permet de confirmer la bonne procedure avant depot.</p>
            </div>
          </div>
        }
      />

      <section id="parcours" className="space-y-8 scroll-mt-24">
        <SectionHeader eyebrow="Parcours interactif" title="Quel type de projet avez-vous ?" description="Choisissez d'abord votre situation, puis le type de travaux. Le résultat s'affiche immediatement avec la suite a donner." />
        <div className="grid gap-4 md:grid-cols-3">
          {projectTypes.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.03}>
              <button
                type="button"
                onClick={() => {
                  setProjectTypeId(item.id);
                  setWorkOptionId(item.options[0].id);
                }}
                className={cn("text-left rounded-[1.7rem] border p-5 shadow-soft transition duration-300 hover:-translate-y-1", item.id === selectedProjectType.id ? "border-prilly-red/30 bg-gradient-to-br from-prilly-red/8 via-white to-prilly-yellow/10" : "border-black/8 bg-white")}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Type de projet</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-prilly-coal">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="surface p-6 md:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Type de travaux</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight text-prilly-coal">{selectedProjectType.label}</h3>
              </div>
              <StatusPill kind={selectedWork.result} />
            </div>
            <div className="mt-6 grid gap-3">
              {selectedProjectType.options.map((option) => (
                <button key={option.id} type="button" onClick={() => setWorkOptionId(option.id)} className={cn("rounded-[1.3rem] border px-4 py-4 text-left transition", option.id === selectedWork.id ? "border-prilly-red/22 bg-prilly-soft" : "border-black/8 bg-white hover:border-prilly-red/20 hover:bg-prilly-soft/55")}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-prilly-coal">{option.label}</p>
                      <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{option.description}</p>
                    </div>
                    <StatusPill kind={option.result} />
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className={cn("rounded-[2rem] border p-6 shadow-soft md:p-8", selectedResult.panelClass)}>
            <div className="flex flex-wrap items-center gap-3">
              <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", selectedResult.accentClass)}>
                <ResultIcon className="h-5 w-5" />
              </div>
              <StatusPill kind={selectedWork.result} />
            </div>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-prilly-coal">{selectedResult.title}</h3>
            <p className="mt-3 text-base leading-7 text-prilly-coal/74">{selectedWork.summary}</p>
            <div className="mt-6 grid gap-3">
              {selectedWork.nextSteps.map((step, index) => (
                <div key={step} className="rounded-[1.2rem] border border-black/8 bg-white/84 px-4 py-3 text-sm leading-6 text-prilly-coal/76">
                  <span className="mr-2 font-semibold text-prilly-red">{index + 1}.</span>
                  {step}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#process" className="inline-flex items-center gap-2 rounded-full bg-prilly-coal px-5 py-3 text-sm font-semibold text-white">Voir le process<ArrowRight className="h-4 w-4" /></a>
              <a href={selectedWork.result === "simple" ? "/docs/urbanisme/guide-procedures-autorisation-2018.pdf" : "#contact"} target={selectedWork.result === "simple" ? "_blank" : undefined} rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-5 py-3 text-sm font-semibold text-prilly-coal">
                {selectedWork.result === "simple" ? "Ouvrir le guide" : "Parler au service"}
              </a>
            </div>
          </section>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Résultats possibles" title="Trois suites tres lisibles" description="Le site ne vous laisse pas dans le flou: chaque projet debouche sur une suite concrete." />
        <div className="grid gap-4 md:grid-cols-3">
          {(["sans", "simple", "enquete"] as ResultKind[]).map((kind, index) => {
            const config = resultConfig[kind];
            const Icon = config.icon;
            return (
              <Reveal key={kind} delay={index * 0.03}>
                <article className={cn("h-full rounded-[1.7rem] border p-5 shadow-soft md:p-6", config.panelClass)}>
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", config.accentClass)}><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 text-2xl font-semibold text-prilly-coal">{config.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-prilly-coal/74">
                    {kind === "sans" ? "Pour l'entretien courant ou les adaptations legeres sans effet sur le volume, la facade ou l'usage." : kind === "simple" ? "Pour les travaux visibles, les amenagements extérieurs fréquents et les cas specifiques comme certains arbres." : "Pour les projets qui modifient le volume bati, le terrain ou l'affectation et demandent une procedure plus complete."}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="process" className="space-y-8 scroll-mt-24">
        <SectionHeader eyebrow="Process" title="Quoi faire ensuite" description="Une fois votre cas repere, la suite est simple: verifier, preparer, deposer, attendre la validation adaptee." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <article className="surface h-full p-5 md:p-6">
                <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="arbres" className="space-y-8 scroll-mt-24">
        <SectionHeader eyebrow="Cas specifiques" title="Arbres: un cas a traiter a part" description="L'abattage ou l'elagage important ne se gère pas comme un simple entretien. Cette section regroupe directement les bons documents." />
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
            <div className="grid gap-0 lg:grid-cols-[0.96fr_1.04fr]">
              <div className="bg-gradient-to-br from-prilly-green via-[#4a7f5f] to-prilly-coal p-6 text-white md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">Arbres et patrimoine vegetal</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">Avant d'abattre ou d'elaguer fortement, je verifie toujours</h3>
                <div className="mt-5 grid gap-3">
                  {["Si l'intervention depasse un simple entretien, une autorisation peut être requise.", "Les directives communales permettent de distinguer les cas admis, sensibles ou soumis a demande.", "Le formulaire specifique doit être utilise avant toute intervention concernee."].map((item) => (
                    <div key={item} className="rounded-[1.15rem] border border-white/12 bg-white/8 px-4 py-3 text-sm leading-6 text-white/82">{item}</div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 p-6 md:p-8">
                <div className="rounded-[1.4rem] border border-black/8 bg-prilly-soft/65 p-4">
                  <div className="flex items-center gap-3 text-prilly-green"><Trees className="h-5 w-5" /><p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">Cas fréquents</p></div>
                  <p className="mt-3 text-sm leading-6 text-prilly-coal/74">Abattage, elagage important, arbre protege ou intervention proche de l'espace public.</p>
                </div>
                <div className="rounded-[1.4rem] border border-black/8 bg-white p-4">
                  <div className="flex items-center gap-3 text-prilly-red"><BadgeInfo className="h-5 w-5" /><p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/70">Bon reflexe</p></div>
                  <p className="mt-3 text-sm leading-6 text-prilly-coal/74">Commencer par les directives, puis ouvrir le formulaire si votre cas entre dans une demande d'autorisation.</p>
                </div>
              </div>
            </div>
          </section>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            {treeDocuments.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.03}>
                <DocumentCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enquetes-publiques" className="space-y-8 scroll-mt-24">
        <SectionHeader eyebrow="Enquètes publiques" title="Quand la procedure devient plus complete" description="Un projet plus important implique generalement un dossier plus technique, des délais plus longs et une mise a l'enquete publique." />
        <div className="grid gap-4 md:grid-cols-3">
          <article className="surface h-full p-5 md:p-6"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red"><Search className="h-5 w-5" /></div><h3 className="mt-4 text-xl font-semibold text-prilly-coal">Dossier plus complet</h3><p className="mt-3 text-sm leading-6 text-prilly-coal/72">Plans, coupes, facades, implantation, pieces techniques et descriptif du projet sont en general attendus.</p></article>
          <article className="surface h-full p-5 md:p-6"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red"><ShieldCheck className="h-5 w-5" /></div><h3 className="mt-4 text-xl font-semibold text-prilly-coal">Instruction et verification</h3><p className="mt-3 text-sm leading-6 text-prilly-coal/72">Le projet est verifie plus en profondeur, avec une attention particuliere a l'insertion, aux regles et aux impacts.</p></article>
          <article className="surface h-full p-5 md:p-6"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red"><FileText className="h-5 w-5" /></div><h3 className="mt-4 text-xl font-semibold text-prilly-coal">délais a anticiper</h3><p className="mt-3 text-sm leading-6 text-prilly-coal/72">Le calendrier du projet doit integrer le temps de depot, de verification et de procedure avant tout demarrage de chantier.</p></article>
        </div>
      </section>

      <section id="contact" className="space-y-8 scroll-mt-24">
        <SectionHeader eyebrow="Contact" title="Un doute sur votre cas ?" description="Le plus efficace reste d'envoyer un descriptif bref, l'adresse du projet et, si possible, un plan ou une photo." />
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactPanel contact={contact} />
          <section className="surface p-6 md:p-7">
            <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">A envoyer dans votre premier message</h3>
            <div className="mt-5 grid gap-3">
              {[{ icon: MapPin, text: "Adresse exacte du projet" }, { icon: FileText, text: "Description simple des travaux envisages" }, { icon: Search, text: "Plan, croquis ou photo si disponible" }, { icon: Mail, text: "Coordonnées pour être recontacte" }, { icon: Phone, text: "Numero joignable en cas de question" }].map((item) => {
                const Icon = item.icon;
                return <div key={item.text} className="rounded-[1.2rem] border border-black/8 px-4 py-3 text-sm leading-6 text-prilly-coal/76"><span className="inline-flex items-center gap-3"><Icon className="h-4 w-4 text-prilly-red" />{item.text}</span></div>;
              })}
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
