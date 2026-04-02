import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import {
  ContactPanel,
  MobilityaccèssCard,
  MobilityPageHero,
  ServiceLinkCard,
  TransportModeCard,
} from "@/features/mobilite/components";
import {
  malleyHighlight,
  mobilityContacts,
  mobilityFactCards,
  mobilityHubHero,
  mobilityModes,
  mobilityQuickaccèss,
} from "@/features/mobilite/data";

export default function MobilityHubPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Mobilite" }]} />
      <MobilityPageHero hero={mobilityHubHero} />

      <section className="space-y-8">
        <SectionHeader
          eyebrow="En un coup d'oeil"
          title="Acc?s par th?me"
          description="La rubrique se decoupe en portes d'entrée tres claires pour eviter de melanger transports publics, loisirs, velo, stationnement et mobilites partagees."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mobilityQuickaccèss.map((item) => (
            <MobilityaccèssCard key={item.href} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Malley"
          title={malleyHighlight.title}
          description={malleyHighlight.description}
        />
        <div className="surface overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={malleyHighlight.imageSrc} alt={malleyHighlight.imageAlt} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <p className="text-base leading-7 text-prilly-coal/75">{malleyHighlight.body}</p>
              <a href={malleyHighlight.cta.href} className="mt-6 inline-flex">
                <span className="focus-ring inline-flex h-11 items-center justify-center rounded-full bg-prilly-red px-5 text-sm font-semibold text-white">
                  {malleyHighlight.cta.label}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Modes de d?placement"
          title="Une rubrique organisée par usages reels"
          description="Informations pratiques par mode de d?placement."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {mobilityModes.map((item) => (
            <TransportModeCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Repères"
          title="Chiffres et informations"
          description="Quelques donn?es utiles sur la mobilit? ? Prilly."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {mobilityFactCards.map((item) => (
            <ServiceLinkCard
              key={item.title}
              item={{ title: item.title, description: `${item.value} - ${item.description}`, href: "#", label: "Consulter", eyebrow: "Mobilit?" }}
            />
          ))}
        </div>
      </section>

      <ContactPanel contact={mobilityContacts.common} />
    </section>
  );
}

