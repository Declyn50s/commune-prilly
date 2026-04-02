import { Breadcrumb } from "@/components/common/breadcrumb";
import { SectionHeader } from "@/components/common/section-header";
import {
  ContactPanel,
  ScheduleCard,
  SportsPageHero,
  YouthCenterCard,
} from "@/features/sports-loisirs/components";
import {
  sportsContacts,
  youthCenterActivities,
  youthCenterInfo,
  youthCenterNews,
  youthCenterSchedule,
} from "@/features/sports-loisirs/data";

export default function YouthCenterPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Loisirs", href: "/loisirs" },
          { label: "Sports et loisirs", href: "/loisirs/sports-et-loisirs" },
          { label: "Centre de loisirs" },
        ]}
      />

      <SportsPageHero
        eyebrow="Jeunesse"
        title="Centre de loisirs Carrefour-Sud"
        description="Un lieu plus clair, plus visible et plus autonome dans la rubrique pour eviter de dupliquer les contenus jeunesse ailleurs."
        imageSrc={youthCenterInfo.imageSrc}
        imageAlt={youthCenterInfo.imageAlt}
      />

      <section className="space-y-8">
        <SectionHeader eyebrow="C'est quoi ?" title="Un espace reserve aux 12-18 ans" description={youthCenterInfo.description} />
        <div className="grid gap-3 md:grid-cols-2">
          {youthCenterInfo.features.map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-black/8 bg-white px-5 py-4 text-sm leading-6 text-prilly-coal/76 shadow-soft">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Horaires"
          title="Des temps d'ouverture faciles a reperer"
          description="Les horaires sont rassembles en bloc pour eviter de chercher dans les textes jeunesse ou les actualités ponctuelles."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {youthCenterSchedule.map((item) => (
            <ScheduleCard key={item.day} day={item.day} hours={item.hours} />
          ))}
        </div>
      </section>

      <section id="activites" className="space-y-8">
        <SectionHeader
          eyebrow="Activites"
          title="Ce qu'on retrouve au Carrefour-Sud"
          description="Le centre n'est pas seulement un local: c'est aussi une programmation concrete, des repas, des pratiques sportives et des projets."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {youthCenterActivities.map((item) => (
            <YouthCenterCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Actualites et reseaux"
          title="Le bon reflexe pour suivre la vraie vie du lieu"
          description={youthCenterNews.description}
        />
        <div className="surface p-6 md:p-8">
          <a href={youthCenterNews.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
            @prilly_jeunesse
          </a>
        </div>
      </section>

      <ContactPanel {...sportsContacts.youth} />
    </section>
  );
}
