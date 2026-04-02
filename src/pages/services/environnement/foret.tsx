import { BadgeInfo, CheckCircle2, ShieldCheck, Trees } from "lucide-react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { ContactPanel, DocumentCard, EnvironmentPageHero, ParentSectionLinks } from "@/features/environnement/components";
import { environmentParentLinks, type EnvironmentContact, type EnvironmentDocument } from "@/features/environnement/data";

const pageSections: PageSideNavSection[] = [
  { id: "forets-communales", label: "Les forets communales" },
  { id: "gestion-durable", label: "Gestion durable" },
  { id: "labels", label: "Labels" },
  { id: "montolivet", label: "Forêt de Montolivet" },
  { id: "regles", label: "Regles et recommandations" },
  { id: "documents", label: "A telecharger" },
  { id: "contact", label: "Contact" },
];

const forestHero = {
  title: "Forêt",
  description:
    "Informations relatives aux forets communales de Prilly, a leur gestion durable, aux documents utiles et aux regles de comportement en foret.",
  imageSrc: "/images/domaine-communal/foret-montolivet.jpg",
  imageAlt: "Lisiere de la forêt communale de Montolivet",
  note:
    "Les forets communales de Prilly couvrent environ 7 hectares et s'inscrivent dans un territoire urbanise entre les terrains de sport et les etablissements de Cery.",
};

const communalForestSites = [
  "Montolivet",
  "Ruisseau de Broye",
  "Sous-Cery",
  "Cordon boise des jardins familiaux de Sous-Cery",
];

const sustainableFunctions = [
  {
    title: "Paysage et cadre de vie",
    description:
      "Les massifs forestiers participent a la qualite paysagere du territoire communal et maintiennent une presence boisee dans un environnement urbanise.",
    icon: Trees,
  },
  {
    title: "Refuge pour le vivant",
    description:
      "La forêt offre des habitats a la faune et a la flore et contribue a la diversite biologique locale.",
    icon: BadgeInfo,
  },
  {
    title: "Protection naturelle",
    description:
      "Les peuplements forestiers participent a la stabilite des sols, a la regulation microclimatique et a la protection de certains secteurs sensibles.",
    icon: ShieldCheck,
  },
  {
    title: "Production de bois",
    description:
      "La production de bois est conduite dans le respect du milieu forestier et s'inscrit dans une gestion suivie a long terme.",
    icon: CheckCircle2,
  },
];

const forestGuidelines = [
  "Rester sur les chemins et les sentiers balises.",
  "Ne pas abandonner de dechets et utiliser les equipements prevus a cet effet.",
  "Respecter la tranquillite de la faune, en particulier a la tombee du jour et durant la nuit.",
  "Tenir les chiens sous controle et respecter les prescriptions locales.",
  "Eviter les zones signalees pour des travaux forestiers ou des restrictions temporaires.",
  "Cueillir avec moderation dans le respect de la reglementation en vigueur.",
  "Limiter le bruit et les comportements pouvant deranger les autres usagers.",
  "Ne pas deteriorer la vegetation, les sols, les ouvrages ou le mobilier present en foret.",
];

const forestLabels = [
  {
    title: "FSC",
    imageSrc: "/images/environnement/foret/fsc.png",
    imageAlt: "Logo FSC",
    description: "Certification relative à une gestion responsable des forets.",
  },
  {
    title: "PEFC",
    imageSrc: "/images/environnement/foret/pefc.png",
    imageAlt: "Logo PEFC",
    description: "Certification de gestion forestiere durable et de tracabilite du bois.",
  },
  {
    title: "Bois Garantie",
    imageSrc: "/images/environnement/foret/bois-garantie.jpg",
    imageAlt: "Logo Bois Garantie",
    description: "Identification du bois issu d'une filiere reconnue et tracee.",
  },
];

const forestDocuments: EnvironmentDocument[] = [
  {
    title: "Les forets, une richesse a preserver",
    description: "Depliant d'information generale sur les fonctions de la forêt et sa preservation.",
    href: "/docs/domaine-communal/forets-richesse-a-preserver.pdf",
    label: "Telecharger",
    tag: "PDF | 2.6 Mo",
  },
  {
    title: "Bienvenue dans les bois ! Petit guide du savoir-vivre en foret",
    description: "Petit guide rappelant les bons comportements et les usages en milieu forestier.",
    href: "/docs/domaine-communal/bienvenue-dans-les-bois.pdf",
    label: "Telecharger",
    tag: "PDF | 2.9 Mo",
  },
  {
    title: "En foret, le respect s'impose",
    description: "Flyer de rappel des regles et recommandations a observer en foret.",
    href: "/docs/domaine-communal/en-foret-le-respect-s-impose.pdf",
    label: "Telecharger",
    tag: "PDF | 602 Ko",
  },
];

const forestContact: EnvironmentContact = {
  title: "Exploitation et Gerance",
  description: "Renseignements relatifs aux forets communales, aux documents utiles et aux informations pratiques.",
  address: ["Route de Cossonay 40", "1008 Prilly"],
  email: "exploitation@prilly.ch",
  phones: ["+41 21 622 75 80"],
};

export default function ForestPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Environnement", href: "/services/environnement" },
          { label: "Forêt" },
        ]}
      />

      <ParentSectionLinks links={environmentParentLinks} current="/services/environnement/foret" />

      <EnvironmentPageHero
        eyebrow="Patrimoine forestier"
        title={forestHero.title}
        description={forestHero.description}
        imageSrc={forestHero.imageSrc}
        imageAlt={forestHero.imageAlt}
        note={forestHero.note}
      />

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <div className="space-y-12">
          <section id="forets-communales" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Les forets communales"
              title="Un patrimoine boise de proximite"
              description="Les forets communales de Montolivet, du ruisseau de Broye, de Sous-Cery et le cordon boise situe dans l'enceinte des jardins familiaux de Sous-Cery occupent environ 7 hectares."
            />

            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="space-y-5 rounded-[2rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
                <p className="text-sm leading-7 text-prilly-coal/76">
                  Ces boises sont composes a environ 96% d'essences feuillues, parmi lesquelles figurent
                  principalement le hetre, l'erable, le tilleul, le chene et le frene. Quelques melezes
                  completent cet ensemble.
                </p>
                <p className="text-sm leading-7 text-prilly-coal/76">
                  A long terme, les forestiers veillent a la conservation de ce patrimoine situe entre les
                  terrains de sport et les etablissements de Cery, avec une attention portee a son equilibre
                  ecologique, paysager et recreatif.
                </p>
                <div className="flex flex-wrap gap-2">
                  {communalForestSites.map((site) => (
                    <Badge key={site} className="bg-prilly-green/10 text-prilly-coal">
                      {site}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
                <img
                  src="/images/environnement/foret/foret-montolivet-panneau.jpg"
                  alt="Signalisation en lisiere de la forêt de Montolivet"
                  className="h-full min-h-[360px] w-full object-cover"
                />
              </div>
            </div>
          </section>

          <section id="gestion-durable" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Gestion durable"
              title="Un patrimoine forestier gere dans la duree"
              description="Les forets communales sont gerees dans une logique de preservation, de continute des peuplements et d'equilibre entre les usages."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {sustainableFunctions.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.03}>
                  <article className="surface h-full p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-green/10 text-prilly-green">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="labels" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Patrimoine labellise"
              title="Labels et certifications"
              description="La gestion forestiere s'inscrit dans une demarche de durabilite reconnue par des certifications."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {forestLabels.map((label, index) => (
                <Reveal key={label.title} delay={index * 0.03}>
                  <article className="surface h-full p-6 text-center">
                    <div className="flex min-h-[140px] items-center justify-center rounded-[1.5rem] border border-black/8 bg-white p-4">
                      <img src={label.imageSrc} alt={label.imageAlt} className="max-h-[96px] w-auto object-contain" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{label.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{label.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <p className="text-sm leading-6 text-prilly-coal/70">
              Les certifications sont mises en oeuvre dans le cadre de la filiere romande de certification
              forestiere et des exigences de gestion durable applicables aux forets publiques.
            </p>
          </section>

          <section id="montolivet" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Forêt de Montolivet"
              title="Information pratique"
              description="Information utile relative a l'exploitation communale."
            />

            <article className="rounded-[2rem] border border-black/8 bg-gradient-to-br from-prilly-green/10 via-white to-prilly-yellow/10 p-6 shadow-soft md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-prilly-green text-white shadow-soft">
                  <Trees className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">Forêt de Montolivet</h3>
                  <p className="mt-3 text-sm leading-7 text-prilly-coal/76">
                    La vente de bois de feu n'est pas proposee.
                  </p>
                </div>
              </div>
            </article>
          </section>

          <section id="regles" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Respecter la foret"
              title="Regles et recommandations"
              description="Quelques repères utiles pour frequenter la forêt dans de bonnes conditions et dans le respect du milieu naturel."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {forestGuidelines.map((item, index) => (
                <Reveal key={item} delay={index * 0.02}>
                  <article className="rounded-[1.5rem] border border-black/8 bg-white p-5 shadow-soft">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-prilly-green/10 text-prilly-green">
                        <BadgeInfo className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-6 text-prilly-coal/76">{item}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="documents" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Documents a telecharger"
              title="Documents utiles"
              description="Les depliants et supports d'information relatifs aux forets communales et au comportement en forêt sont disponibles ci-dessous."
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {forestDocuments.map((item, index) => (
                <Reveal key={item.href} delay={index * 0.03}>
                  <DocumentCard item={item} />
                </Reveal>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-black/8 bg-prilly-soft/65 px-5 py-4 text-sm leading-6 text-prilly-coal/72">
              Les fichiers sont proposes au format PDF.
            </div>
          </section>

          <section id="contact" className="scroll-mt-32">
            <ContactPanel contact={forestContact} />
          </section>
        </div>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>
    </section>
  );
}
