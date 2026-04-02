import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { AlertNotice, RelatedPagesSection, WasteContactPanel, WasteNoticeCard } from "@/features/dechets/components";
import {
  cardaccèssPoints,
  cardIssueCases,
  decheterieCardContact,
  decheterieCardHighlights,
  decheterieCardIntro,
  decheterieCardProblemNotice,
  decheterieCardUsefulLinks,
} from "@/features/dechets/data/carte-decheterie";

export default function DecheterieCardPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Démarches", href: "/demarches" },
          { label: "Carte de déchèterie" },
        ]}
      />

      <PageHero
        eyebrow={decheterieCardIntro.eyebrow}
        title={decheterieCardIntro.title}
        description={decheterieCardIntro.description}
        tone="light"
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-prilly-yellow/35 bg-prilly-yellow/14 p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal">Résumé</p>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/76">{decheterieCardIntro.summary}</p>
            </div>
            <a
              href={decheterieCardIntro.cta.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/8 bg-white px-5 py-3 text-sm font-semibold text-prilly-coal transition hover:border-prilly-red/20 hover:text-prilly-red"
            >
              {decheterieCardIntro.cta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        }
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="A quoi sert la carte ?"
          title="Un accès simple aux infrastructures de déchèterie"
          description="L'information principale est volontairement donnée tout de suite: une carte par ménage, délivrée automatiquement, pour accéder aux déchèteries concernées."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {decheterieCardHighlights.map((item) => (
            <WasteNoticeCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {cardaccèssPoints.map((item) => (
            <div key={item.title} className="rounded-[1.8rem] border border-black/6 bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Accès autorisé</p>
              <h2 className="mt-3 text-xl font-semibold text-prilly-coal">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <AlertNotice title={decheterieCardProblemNotice.title} tone="yellow">
          {decheterieCardProblemNotice.description}
        </AlertNotice>
        <div className="rounded-[1.8rem] border border-prilly-red/18 bg-prilly-red/7 p-5 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Cas concernés</p>
          <ul className="mt-4 space-y-3 text-sm text-prilly-coal/78">
            {cardIssueCases.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-prilly-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-6 text-prilly-coal/72">
            Dans tous ces cas, il faut contacter l'Office de la population.
          </p>
        </div>
      </section>

      <RelatedPagesSection
        title="Liens utiles"
        description="Deux accès complémentaires suffisent ici: les déchèteries pour le fonctionnement pratique et la base légale cantonale pour le cadre de référence."
        items={decheterieCardUsefulLinks.map((item) => ({
          title: item.title,
          description: item.description,
          href: item.href,
          icon: item.icon,
        }))}
      />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Contact"
          title="Le bon service, tout de suite"
          description="Le contact est volontairement très visible pour éviter une page correcte sur le fond mais pauvre en service."
        />
        <WasteContactPanel contacts={decheterieCardContact} />
      </section>

      <section className="rounded-[1.8rem] border border-black/6 bg-gradient-to-br from-prilly-soft via-white to-prilly-yellow/10 p-5 shadow-soft">
        <a
          href={decheterieCardUsefulLinks[1].href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-prilly-red transition hover:text-prilly-coal"
        >
          Accéder à la base légale cantonale
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>
    </section>
  );
}
