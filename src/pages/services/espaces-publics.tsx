import {
  ArrowRight,
  BadgeInfo,
  Building2,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Trees,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import {
  publicForestBehavior,
  publicForestFacts,
  publicGardenConditions,
  publicGardenHowTo,
  publicGardenKeyFacts,
  publicNatureDocuments,
  publicSpacesContact,
  publicSpaceCards,
  publicSpacesHero,
  publicVineFacts,
  publicVineHighlights,
} from "@/features/espaces-publics/data";

const heroStats = [
  { value: "125", label: "jardins à Sous-Cery" },
  { value: "7 ha", label: "de forêts communales" },
  { value: "2'032 m2", label: "de vigne communale" },
];

const leisureCards = [
  {
    ...publicSpaceCards[0],
    icon: Building2,
    imageSrc: "/images/sports-loisirs/complexe-fleur-de-lys.jpg",
    imageAlt: "Équipements sportifs à Prilly",
    points: ["Terrains et salles", "Piscines", "Fitness outdoor"],
  },
  {
    ...publicSpaceCards[1],
    icon: Users,
    imageSrc: "/images/sports-loisirs/fontadel-entree.jpg",
    imageAlt: "Espaces de jeux et de loisirs à Prilly",
    points: ["Espaces familiaux", "Jeu de proximité", "Accès libre"],
  },
];

const sectionLinks = publicSpacesHero.ctas.map((cta) => ({
  ...cta,
  href: cta.href,
}));

const gardenHighlights = [
  {
    title: "Informations utiles",
    icon: BadgeInfo,
    items: publicGardenKeyFacts,
    tone: "from-prilly-green/14 via-white to-prilly-green/5",
  },
  {
    title: "Demande de location",
    icon: Mail,
    items: publicGardenHowTo,
    tone: "from-prilly-yellow/20 via-white to-prilly-yellow/5",
  },
];

const forestGuideLinks = publicNatureDocuments.filter((doc) =>
  ["/docs/domaine-communal/en-foret-le-respect-s-impose.pdf", "/docs/domaine-communal/bienvenue-dans-les-bois.pdf"].includes(doc.href),
);

const pageSections: PageSideNavSection[] = [
  { id: "introduction", label: "Introduction" },
  { id: "espaces-loisirs", label: "Espaces publics" },
  { id: "jardins-familiaux", label: "Jardins" },
  { id: "nature-patrimoine", label: "Nature et patrimoine" },
  { id: "contact", label: "Contact" },
];

function AnchorButton({
  href,
  label,
  variant = "dark",
}: {
  href: string;
  label: string;
  variant?: "light" | "dark" | "soft";
}) {
  const variants = {
    dark: "bg-prilly-coal text-white hover:-translate-y-0.5 hover:bg-prilly-coal/92",
    light: "bg-white text-prilly-coal hover:-translate-y-0.5 hover:bg-white/92",
    soft: "bg-prilly-red text-white hover:-translate-y-0.5 hover:bg-prilly-red/92",
  };

  const external = href.startsWith("http") || href.startsWith("/docs/");
  const className =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${className} ${variants[variant]}`}>
        {label}
        <ArrowRight className="h-4 w-4" />
      </a>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link to={href} className={`${className} ${variants[variant]}`}>
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <a href={href} className={`${className} ${variants[variant]}`}>
      {label}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

export default function PublicSpacesPage() {
  return (
    <section className="container space-y-10 py-8 md:space-y-12 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Espaces publics" },
        ]}
      />

      <section id="introduction" className="scroll-mt-32 overflow-hidden rounded-[2rem] bg-prilly-coal bg-mesh text-white shadow-soft">
        <div className="grid gap-10 px-6 py-8 md:px-8 md:py-10 xl:grid-cols-[1.08fr_0.92fr] xl:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <span className="eyebrow border-white/10 bg-white/10 text-white">Services</span>
              <div className="space-y-3">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                  {publicSpacesHero.title}
                </h1>
                <p className="max-w-2xl text-base leading-7 text-white/80">
                  {publicSpacesHero.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {sectionLinks.map((cta, index) => (
                <motion.div
                  key={cta.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 + index * 0.04 }}
                >
                  <AnchorButton href={cta.href} label={cta.label} variant={index === 0 ? "soft" : "light"} />
                </motion.div>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.16 + index * 0.05 }}
                  className="rounded-[1.5rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="mt-1 text-sm leading-6 text-white/72">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            className="grid gap-4"
          >
            <div className="rounded-[1.9rem] border border-white/10 bg-gradient-to-br from-white/12 via-white/6 to-transparent p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/64">
                En un coup d'œil
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">
                Espaces de loisirs, jardins et patrimoine naturel communal
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Accès directs vers les équipements sportifs et les places de jeux.",
                  "Informations utiles pour les jardins familiaux et leur location.",
                  "Repères sur la forêt communale, la vigne et les documents à consulter.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-white/10 bg-black/10 px-4 py-3 text-sm leading-6 text-white/78"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <PageSideNav sections={pageSections} title="Sur cette page" />

        <div className="space-y-10 md:space-y-12">
      <Reveal>
        <section id="espaces-loisirs" className="scroll-mt-32 space-y-6">
          <SectionHeader
            eyebrow="Espaces publics et équipements"
            title="Lieux de loisirs et aménagements communaux"
            description="Retrouvez les principaux espaces de loisirs et les équipements ouverts au public."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {leisureCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.06}>
                <article className="group overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-float">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-prilly-coal/82 via-prilly-coal/20 to-transparent" />
                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-prilly-coal shadow-soft">
                      <card.icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold tracking-tight text-prilly-coal">{card.title}</h2>
                      <p className="text-sm leading-6 text-prilly-coal/72">{card.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {card.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-prilly-coal/10 bg-prilly-coal/4 px-3 py-1 text-xs font-medium text-prilly-coal/72"
                        >
                          {point}
                        </span>
                      ))}
                    </div>

                    <AnchorButton href={card.href} label="Voir les lieux" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="jardins-familiaux" className="scroll-mt-32 space-y-6">
          <SectionHeader
            eyebrow="Jardins familiaux"
            title="Conditions de location et informations utiles"
            description="Informations utiles pour la location d’un jardin familial à Sous-Cery."
            action={
              <AnchorButton
                href="/docs/domaine-communal/reglement-jardins-familiaux.pdf"
                label="Télécharger le règlement"
                variant="soft"
              />
            }
          />

          <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
            <div className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                {gardenHighlights.map((block, index) => (
                  <Reveal key={block.title} delay={index * 0.05}>
                    <article className={`rounded-[1.8rem] border border-black/6 bg-gradient-to-br ${block.tone} p-6 shadow-soft`}>
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-prilly-coal shadow-soft">
                          <block.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-prilly-coal">{block.title}</h3>
                      </div>
                      <div className="mt-5 grid gap-3">
                        {block.items.map((item) => (
                          <div
                            key={item}
                            className="rounded-[1.15rem] border border-black/6 bg-white/88 px-4 py-3 text-sm leading-6 text-prilly-coal/76"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.08}>
                <article className="rounded-[1.8rem] border border-prilly-red/12 bg-gradient-to-br from-prilly-red/8 via-white to-prilly-yellow/10 p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-red text-white shadow-soft">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-prilly-coal">Conditions importantes</h3>
                  </div>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {publicGardenConditions.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.2rem] border border-black/6 bg-white/92 px-4 py-4 text-sm leading-6 text-prilly-coal/76"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <aside className="rounded-[1.8rem] border border-black/6 bg-prilly-coal p-6 text-white shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Contact</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                  Exploitation et gérance
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  Les demandes se font par mail ou par courrier auprès du service Exploitation et
                  Gérance, qui renseigne sur les disponibilités et la procédure.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={`mailto:${publicSpacesContact.email}`}
                    className="flex items-center gap-3 rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-sm font-medium text-white transition hover:bg-white/12"
                  >
                    <Mail className="h-4 w-4 text-prilly-yellow" />
                    {publicSpacesContact.email}
                  </a>
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-sm leading-7 text-white/78">
                    Réservé aux habitantes et habitants domiciliés à Prilly depuis au moins 2 ans.
                  </div>
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-sm leading-7 text-white/78">
                    Garantie financière demandée : CHF 500.
                  </div>
                </div>

                <div className="mt-6">
                  <AnchorButton
                    href="/docs/domaine-communal/reglement-jardins-familiaux.pdf"
                    label="Télécharger le règlement"
                    variant="light"
                  />
                </div>
              </aside>
            </Reveal>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="nature-patrimoine" className="scroll-mt-32 space-y-6">
          <SectionHeader
            eyebrow="Nature et patrimoine"
            title="Forêt communale et vigne locale"
            description="Repères utiles sur le patrimoine naturel communal et les règles de bon comportement."
          />

          <div className="grid gap-5 xl:grid-cols-2">
            <Reveal delay={0.02}>
              <article className="overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-soft">
                <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[260px]">
                    <img
                      src="/images/domaine-communal/foret-montolivet.jpg"
                      alt="Forêt communale de Prilly"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-6 p-6">
                    <div className="space-y-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-green/12 text-prilly-green">
                        <Trees className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">Forêts</h3>
                      <p className="text-sm leading-6 text-prilly-coal/72">
                        Des espaces naturels accessibles à toutes et tous, qui participent à la
                        détente, à la biodiversité et à la qualité de vie.
                      </p>
                    </div>

                    <div className="grid gap-3">
                      {publicForestFacts.map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.15rem] border border-black/6 bg-prilly-green/5 px-4 py-3 text-sm leading-6 text-prilly-coal/76"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-soft">
                <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[260px]">
                    <img
                      src="/images/domaine-communal/vins-prilly.jpg"
                      alt="Vins de Prilly sur un tonneau"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-6 p-6">
                    <div className="space-y-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-red/10 text-prilly-red">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">Vigne communale</h3>
                      <p className="text-sm leading-6 text-prilly-coal/72">
                        Une production locale qui relie patrimoine, vendanges d’automne et transmission.
                      </p>
                    </div>

                    <div className="grid gap-3">
                      {publicVineFacts.map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.15rem] border border-black/6 bg-prilly-red/5 px-4 py-3 text-sm leading-6 text-prilly-coal/76"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {publicVineHighlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-prilly-red/15 bg-prilly-red/8 px-3 py-1 text-xs font-medium text-prilly-coal/76"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <AnchorButton href="/services/domaine-communal#espaces-publics" label="Voir le domaine communal" variant="soft" />
                  </div>
                </div>
              </article>
            </Reveal>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.02fr_0.98fr]">
            <Reveal delay={0.04}>
              <article className="rounded-[2rem] border border-black/6 bg-gradient-to-br from-prilly-green/10 via-white to-prilly-yellow/10 p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-prilly-green text-white shadow-soft">
                    <Search className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-green">
                      Comportement en forêt
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-prilly-coal">
                      Règles de bon usage
                    </h3>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {publicForestBehavior.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.2rem] border border-black/6 bg-white/88 px-4 py-4 text-sm leading-6 text-prilly-coal/76"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <AnchorButton href="/docs/domaine-communal/en-foret-le-respect-s-impose.pdf" label="Voir les règles en forêt" variant="soft" />
                  {forestGuideLinks.map((doc) => (
                    <AnchorButton key={doc.href} href={doc.href} label={doc.label} variant="light" />
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.09}>
              <article className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/56">
                  Documents utiles
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-prilly-coal">
                  Documents à consulter
                </h3>
                <div className="mt-6 grid gap-3">
                  {publicNatureDocuments.map((doc) => (
                    <a
                      key={doc.href}
                      href={doc.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-[1.2rem] border border-black/6 bg-prilly-coal/2 px-4 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-prilly-coal/12 hover:bg-prilly-coal/4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="rounded-full bg-prilly-yellow/24 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-prilly-coal">
                            {doc.tag}
                          </span>
                          <h4 className="mt-3 text-base font-semibold text-prilly-coal">{doc.title}</h4>
                          <p className="mt-1 text-sm leading-6 text-prilly-coal/68">{doc.description}</p>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-prilly-coal/48 transition group-hover:translate-x-0.5 group-hover:text-prilly-coal" />
                      </div>
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="contact" className="scroll-mt-32 rounded-[2rem] border border-black/6 bg-white p-6 shadow-soft md:p-8">
          <SectionHeader
            eyebrow="Contact"
            title={publicSpacesContact.title}
            description={publicSpacesContact.role}
          />

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.4rem] bg-prilly-coal/4 px-5 py-5">
              <p className="text-sm font-semibold text-prilly-coal">Adresse</p>
              <div className="mt-3 space-y-2 text-sm leading-6 text-prilly-coal/72">
                {publicSpacesContact.address.map((line) => (
                  <p key={line} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-prilly-red" />
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${publicSpacesContact.email}`}
              className="rounded-[1.4rem] bg-prilly-coal px-5 py-5 text-white transition duration-200 hover:-translate-y-0.5 hover:bg-prilly-coal/94"
            >
              <p className="text-sm font-semibold text-white/70">Email</p>
              <p className="mt-3 flex items-center gap-2 text-sm leading-6">
                <Mail className="h-4 w-4 text-prilly-yellow" />
                {publicSpacesContact.email}
              </p>
            </a>

            <a
              href={`tel:${publicSpacesContact.phone.replace(/\s/g, "")}`}
              className="rounded-[1.4rem] bg-prilly-yellow/18 px-5 py-5 transition duration-200 hover:-translate-y-0.5 hover:bg-prilly-yellow/24"
            >
              <p className="text-sm font-semibold text-prilly-coal">Téléphone</p>
              <p className="mt-3 flex items-center gap-2 text-sm leading-6 text-prilly-coal/78">
                <Phone className="h-4 w-4 text-prilly-red" />
                {publicSpacesContact.phone}
              </p>
            </a>

            <div className="rounded-[1.4rem] bg-gradient-to-br from-prilly-green/14 via-white to-prilly-green/5 px-5 py-5">
              <p className="text-sm font-semibold text-prilly-coal">Renseignements</p>
              <p className="mt-3 text-sm leading-6 text-prilly-coal/76">
                Jardins familiaux, forêt communale, vigne communale et informations sur les espaces
                publics exploités par la Ville.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
        </div>
      </div>
    </section>
  );
}
