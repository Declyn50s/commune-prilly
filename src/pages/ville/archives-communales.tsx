import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeInfo,
  Building2,
  Home,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Trees,
} from "lucide-react";
import { RubricLayout } from "@/components/common/rubric-layout";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const officialPrilly360Href = "https://www.prilly.ch/Découvrir-prilly/prilly-360.html";

const anchorLinks = [
  { label: "Histoire", href: "#histoire" },
  { label: "Visites 360°", href: "#prilly-360" },
  { label: "Contact", href: "#contact" },
] as const;

const timeline = [
  {
    year: "976",
    title: "Premiere mention de Prilly",
    description:
      "Le territoire apparait dans les sources medieevales et ancre dejà Prilly dans l'histoire regionale.",
  },
  {
    year: "Moyen Age",
    title: "Une seigneurie et des terres cultivees",
    description:
      "Le paysage se structure autour de domaines, d'exploitations agricoles, d'axes de passage et de lieux de pouvoir.",
  },
  {
    year: "1850",
    title: "309 habitantes et habitants",
    description:
      "Prilly reste encore un village de petite taille, compose de hameaux et d'une vie locale tres proche de la campagne.",
  },
  {
    year: "1950-1970",
    title: "Une croissance qui transforme la commune",
    description:
      "L'urbanisation, les equipements publics et l'arrivée de nouveaux quartiers changent rapidement l'echelle de Prilly.",
  },
  {
    year: "Aujourd'hui",
    title: "Une commune urbaine de l'Ouest lausannois",
    description:
      "Prilly conjugue memoire locale, vie de quartier, infrastructures publiques et connexions directes avec l'agglomeration.",
  },
] as const;

const historySections = [
  {
    id: "origines",
    eyebrow: "Origines",
    title: "Un territoire ancien entre campagne, passages et voisinage lausannois",
    description:
      "La premiere mention de Prilly remonte a l'an 976. Longtemps, le territoire s'organise autour de terres cultivees, de chemins et de petites implantations qui vivent en relation etroite avec Lausanne et les campagnes voisines.",
    highlight: "Le nom de Prilly s'inscrit tres tot dans l'histoire regionale et rappelle l'anciennete du peuplement local.",
    icon: BadgeInfo,
  },
  {
    id: "seigneurie",
    eyebrow: "La Seigneurie de Prilly",
    title: "Un cadre feodal qui structure durablement le paysage",
    description:
      "Comme d'autres localites vaudoises, Prilly connait l'organisation seigneuriale. Les propriétés, les droits et les batiments de pouvoir marquent durablement le territoire, dont le Chateau reste l'un des repères patrimoniaux les plus visibles.",
    highlight: "Le patrimoine bati raconte encore aujourd'hui les strates successives de la commune, du domaine ancien aux usages publics contemporains.",
    icon: Building2,
  },
  {
    id: "hameaux",
    eyebrow: "Des hameaux au village",
    title: "Une commune faite de noyaux de vie progressivement relies entre eux",
    description:
      "Avant la forte urbanisation du XXe siecle, Prilly se compose de plusieurs noyaux d'habitat et d'activites. Les hameaux, les exploitations et les chemins dessinent une commune encore largement villageoise, avec des sociabilites de proximite.",
    highlight: "Cette histoire explique la diversite des ambiances prilleranes et la place toujours importante des quartiers dans l'identite locale.",
    icon: Trees,
  },
  {
    id: "croissance",
    eyebrow: "Une croissance qui s'accelere",
    title: "Le XXe siecle change l'echelle de Prilly",
    description:
      "Au milieu du XXe siecle, la population augmente fortement. Les logements, les ecoles, les equipements sportifs et les infrastructures accompagnent cette mutation rapide, qui fait passer Prilly d'un village à une commune urbaine pleinement integrée a l'agglomeration lausannoise.",
    highlight: "Entre 1950 et 1970, la croissance transforme non seulement le bati, mais aussi les usages, les mobilites et les services publics.",
    icon: Sparkles,
  },
  {
    id: "aujourdhui",
    eyebrow: "Prilly aujourd'hui",
    title: "Une commune reliee, habitée et attentive a son patrimoine",
    description:
      "Prilly fait aujourd'hui partie de l'Ouest lausannois. Son histoire reste pourtant lisible dans ses lieux emblematiques, ses batiments publics, ses espaces ouverts et la memoire de ses quartiers. La page invite a les relire, puis a les parcourir autrement grace aux visites virtuelles.",
    highlight: "Le patrimoine prilleran n'est pas fige: il continue de vivre dans les usages quotidiens, les ecoles, les lieux de loisirs et les espaces publics.",
    icon: Trees,
  },
] as const;

const keyFigures = [
  { label: "Premiere mention", value: "976", note: "Une présence attestée des le haut Moyen Age." },
  { label: "Population", value: "309", note: "Habitantes et habitants recenses en 1850." },
  { label: "Grand tournant", value: "1950-1970", note: "Periode de forte croissance urbaine et demographique." },
  { label: "Territoire vecu", value: "Ouest lausannois", note: "Prilly s'inscrit aujourd'hui dans une dynamique d'agglomeration." },
] as const;

const visits = [
  {
    title: "Cour du Chateau",
    description: "Le coeur patrimonial de l'administration communale et l'un des repères historiques majeurs de Prilly.",
    image: "/images/prilly-360/cour-chateau.png",
    badge: "patrimoine",
    icon: BadgeInfo,
    href: officialPrilly360Href,
  },
  {
    title: "Temple de Broye",
    description: "Un lieu de culte classe qui marque le paysage prilleran par sa silhouette et sa sobriete.",
    image: "/images/prilly-360/temple-broye.png",
    badge: "patrimoine",
    icon: Home,
    href: officialPrilly360Href,
  },
  {
    title: "Piscine de la Fleur-de-Lys",
    description: "Un site de loisirs tres apprecie, ouvert sur un cadre de detente et de saison estivale.",
    image: "/images/prilly-360/piscine-fleur-de-lys.png",
    badge: "loisirs",
    icon: Trees,
    href: officialPrilly360Href,
  },
  {
    title: "Place du marche",
    description: "Un point de centralite quotidienne, entre commerces, passages et vie locale.",
    image: "/images/prilly-360/place-marche.png",
    badge: "administration",
    icon: MapPin,
    href: officialPrilly360Href,
  },
  {
    title: "Prairie fleurie du centre",
    description: "Une respiration paysagere qui rappelle la place du vegetal au coeur de la commune.",
    image: "/images/prilly-360/prairie-fleurie-centre.png",
    badge: "nature",
    icon: Trees,
    href: officialPrilly360Href,
  },
  {
    title: "College de Jolimont",
    description: "Un site scolaire qui raconte l'ancrage des equipements publics dans les quartiers.",
    image: "/images/prilly-360/college-jolimont.png",
    badge: "ecole",
    icon: Building2,
    href: officialPrilly360Href,
  },
  {
    title: "College du Centre",
    description: "Une adresse historique de l'enseignement prilleran, au coeur de la vie communale.",
    image: "/images/prilly-360/college-centre.png",
    badge: "ecole",
    icon: Building2,
    href: officialPrilly360Href,
  },
  {
    title: "College de Sous-Mont",
    description: "Un batiment scolaire de proximite insere dans un environnement habite et vegetalise.",
    image: "/images/prilly-360/college-sous-mont.png",
    badge: "ecole",
    icon: Building2,
    href: officialPrilly360Href,
  },
  {
    title: "College du Grand-Pre",
    description: "Un lieu d'apprentissage et de quartier qui illustre la croissance des equipements communaux.",
    image: "/images/prilly-360/college-grand-pre.png",
    badge: "ecole",
    icon: Building2,
    href: officialPrilly360Href,
  },
  {
    title: "Terrain de sport du Grand-Pre",
    description: "Une infrastructure de plein air qui souligne l'importance du sport dans la vie locale.",
    image: "/images/prilly-360/terrain-grand-pre.png",
    badge: "sport",
    icon: Sparkles,
    href: officialPrilly360Href,
  },
  {
    title: "Esplanade de Mont-Goulin",
    description: "Un espace ouvert qui relie paysages de quartier, deplacements et points de vue sur Prilly.",
    image: "/images/prilly-360/mont-goulin.png",
    badge: "nature",
    icon: MapPin,
    href: officialPrilly360Href,
  },
  {
    title: "Complexe sportif de la Fleur-de-Lys",
    description: "Une adresse majeure pour les pratiques sportives et les rencontres locales.",
    image: "/images/prilly-360/complexe-fleur-de-lys.png",
    badge: "sport",
    icon: Sparkles,
    href: officialPrilly360Href,
  },
  {
    title: "Terrain du complexe sportif de la Fleur-de-Lys",
    description: "Le prolongement extérieur du complexe, pense pour les activités de terrain et les usages collectifs.",
    image: "/images/prilly-360/terrain-complexe-fleur-de-lys.png",
    badge: "sport",
    icon: Sparkles,
    href: officialPrilly360Href,
  },
  {
    title: "Cour du batiment Le Tilleul",
    description: "Un lieu de proximite lie  à la vie quotidienne, aux services et aux parcours des familles.",
    image: "/images/prilly-360/cour-le-tilleul.png",
    badge: "administration",
    icon: Building2,
    href: officialPrilly360Href,
  },
] as const;

export default function CommunalArchivesPage() {
  return (
    <RubricLayout
      breadcrumb={[
        { label: "Accueil", href: "/" },
        { label: "Ville", href: "/ville" },
        { label: "Histoire & Prilly 360°" },
      ]}
      eyebrow="Patrimoine prilleran"
      title="Histoire & Prilly 360°"
      description="Decouvrez les origines de Prilly, son evolution au fil des siecles et explorez ses lieux emblematiques en visite virtuelle."
      tone="warm"
      aside={
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden rounded-[1.8rem] border border-black/8 bg-white shadow-soft">
              <img
                src="/images/prilly-360/cour-chateau.png"
                alt="Apercu de la cour du Chateau de Prilly"
                className="h-52 w-full object-cover"
              />
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[1.6rem] border border-black/8 bg-white shadow-soft">
                <img
                  src="/images/prilly-360/temple-broye.png"
                  alt="Apercu du Temple de Broye"
                  className="h-24 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[1.6rem] border border-black/8 bg-white shadow-soft">
                <img
                  src="/images/prilly-360/place-marche.png"
                  alt="Apercu de la place du marche"
                  className="h-24 w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-black/8 bg-white/92 p-5 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <a href="#histoire" className="inline-flex">
                <Button className="w-full justify-center">
                  Lire l'histoire
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#prilly-360" className="inline-flex">
                <Button variant="secondary" className="w-full justify-center">
                  Explorer Prilly 360°
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.2rem] bg-prilly-soft px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Repere</p>
                <p className="mt-2 text-2xl font-semibold text-prilly-coal">976</p>
                <p className="mt-1 text-sm leading-6 text-prilly-coal/70">Premiere mention de Prilly.</p>
              </div>
              <div className="rounded-[1.2rem] bg-prilly-soft px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Parcours</p>
                <p className="mt-2 text-2xl font-semibold text-prilly-coal">14</p>
                <p className="mt-1 text-sm leading-6 text-prilly-coal/70">Lieux a explorer en visite virtuelle.</p>
              </div>
              <div className="rounded-[1.2rem] bg-prilly-soft px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Regard</p>
                <p className="mt-2 text-2xl font-semibold text-prilly-coal">1 page</p>
                <p className="mt-1 text-sm leading-6 text-prilly-coal/70">Pour relier memoire locale et lieux vecus.</p>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <section className="sticky top-20 z-20 -mx-1 overflow-x-auto pb-2">
        <div className="inline-flex min-w-full gap-3 rounded-full border border-black/8 bg-white/88 px-3 py-3 shadow-soft backdrop-blur">
          {anchorLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex shrink-0 items-center rounded-full px-4 py-2 text-sm font-semibold text-prilly-coal transition hover:bg-prilly-soft hover:text-prilly-red"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      <section id="histoire" className="grid gap-8 lg:grid-cols-[0.3fr_minmax(0,1fr)] lg:gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-40 rounded-[1.9rem] border border-black/8 bg-prilly-coal p-6 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Sommaire</p>
            <div className="mt-5 space-y-2">
              {historySections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block rounded-[1rem] px-3 py-3 text-sm text-white/82 transition hover:bg-white/10 hover:text-white"
                >
                  {section.eyebrow}
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-8">
          <SectionHeader
            eyebrow="Histoire de Prilly"
            title="Une lecture editoriale pour suivre l'evolution de la commune"
            description="Le texte historique est recompose en sequences courtes et lisibles, pour faire ressortir les grands mouvements qui relient le Prilly ancien, le village en croissance et la commune contemporaine."
          />

          <div className="grid gap-4 md:grid-cols-4">
            {keyFigures.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="surface p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-prilly-coal/50">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.note}</p>
              </motion.article>
            ))}
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-gradient-to-br from-prilly-yellow/18 via-white to-prilly-green/10 p-6 shadow-soft md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/55">Repere historique</p>
            <blockquote className="mt-4 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-prilly-coal md:text-3xl">
              "Relire Prilly, c'est voir comment des lieux du quotidien portent encore la memoire des siecles."
            </blockquote>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-prilly-coal/74">
              La page met en relation le patrimoine bati, les quartiers, les equipements publics et les parcours 360° pour offrir une vraie experience de decouverte.
            </p>
          </div>

          <div className="space-y-5">
            {historySections.map((section, index) => (
              <motion.article
                id={section.id}
                key={section.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.42, delay: index * 0.04 }}
                className={`grid gap-5 rounded-[2rem] border border-black/8 p-6 shadow-soft md:p-8 ${
                  index % 2 === 0 ? "bg-white" : "bg-prilly-soft/80"
                } lg:grid-cols-[0.82fr_1.18fr]`}
              >
                <div className="rounded-[1.6rem] bg-prilly-coal p-5 text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-prilly-yellow">
                    <section.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/58">{section.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{section.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/80">{section.highlight}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-base leading-8 text-prilly-coal/78">{section.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-soft md:p-8">
            <SectionHeader
              eyebrow="repères chronologiques"
              title="Quelques dates pour situer les grandes transformations"
              description="Une timeline courte met en evidence les points de passage les plus utiles pour comprendre l'evolution de Prilly."
            />
            <div className="mt-8 space-y-6">
              {timeline.map((item, index) => (
                <div key={`${item.year}-${item.title}`} className="grid gap-4 md:grid-cols-[120px_minmax(0,1fr)]">
                  <div className="flex items-start gap-3">
                    <div className="mt-2 h-3 w-3 rounded-full bg-prilly-red" />
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/55">{item.year}</p>
                  </div>
                  <div className="relative rounded-[1.4rem] bg-prilly-soft px-5 py-5">
                    {index < timeline.length - 1 ? (
                      <div className="absolute left-[-58px] top-9 hidden h-[calc(100%+1.5rem)] w-px bg-prilly-coal/14 md:block" />
                    ) : null}
                    <h3 className="text-lg font-semibold text-prilly-coal">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-prilly-coal/72">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="prilly-360" className="space-y-8">
        <SectionHeader
          eyebrow="Prilly 360°"
          title="Une galerie immersive pour parcourir les lieux emblematiques"
          description="Chaque carte met en valeur un lieu, son ambiance et son role dans la commune. Les visites s'ouvrent dans un nouvel onglet, sans afficher de liens bruts dans la page."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visits.map((visit, index) => (
            <motion.article
              key={visit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.38, delay: index * 0.03 }}
              className="group overflow-hidden rounded-[1.9rem] border border-black/8 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-float"
            >
              <div className="relative overflow-hidden">
                <img
                  src={visit.image}
                  alt={`Apercu 360 de ${visit.title}`}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-prilly-coal/35 via-prilly-coal/5 to-transparent" />
                <Badge className="absolute left-4 top-4 border-0 bg-white/94 text-prilly-coal shadow-sm">{visit.badge}</Badge>
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-prilly-coal">{visit.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-prilly-coal/74">{visit.description}</p>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-prilly-red/10 text-prilly-red">
                    <visit.icon className="h-5 w-5" />
                  </div>
                </div>

                <a href={visit.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full">
                  <Button variant="secondary" className="w-full justify-center">
                    Explorer en 360°
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="space-y-8">
        <SectionHeader
          eyebrow="Contact"
          title="Une question sur Prilly ?"
          description="Pour toute demande generale, la commune reste votre point d'entrée principal."
        />

        <div className="rounded-[2rem] border border-black/8 bg-prilly-coal p-6 text-white shadow-soft md:p-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/58">Administration communale</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">Parlons patrimoine, histoire locale ou informations communales</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82">
                Ce bloc final garde un accès direct aux coordonnées essentielles, dans une presentation simple, lisible et institutionnelle.
              </p>
            </div>
            <a href="mailto:prilly@prilly.ch" className="inline-flex">
              <Button variant="secondary">Ecrire  à la commune</Button>
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.35rem] bg-white/8 p-5">
              <Mail className="h-5 w-5 text-prilly-yellow" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Email</p>
              <a href="mailto:prilly@prilly.ch" className="mt-2 block text-lg font-semibold text-white hover:text-prilly-yellow">
                prilly(at)prilly.ch
              </a>
            </div>
            <div className="rounded-[1.35rem] bg-white/8 p-5">
              <Phone className="h-5 w-5 text-prilly-yellow" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Telephone</p>
              <a href="tel:+41216227211" className="mt-2 block text-lg font-semibold text-white hover:text-prilly-yellow">
                +41 21 622 72 11
              </a>
            </div>
          </div>
        </div>
      </section>
    </RubricLayout>
  );
}
