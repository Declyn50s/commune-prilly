import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { IndustrialContactPanel, IndustrialNoticeCard } from "@/features/services-industriels/components";
import { heatingNetworkInfo } from "@/features/services-industriels/data";

export default function DistrictHeatingPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Services industriels", href: "/services/services-industriels" }, { label: "Chauffage à distance" }]} />

      <PageHero eyebrow="Réseau de chaleur" title="Chauffage à distance" description="Un réseau de chaleur géré par CADOUEST SA pour Prilly et Renens." tone="light" />

      <section className="space-y-8">
        <SectionHeader eyebrow="Le chauffage à distance à Prilly" title="Un réseau porté par CADOUEST SA" description="La page explique simplement qui gère le réseau, son rôle et l'intérêt du système pour le territoire." />
        <div className="grid gap-4 md:grid-cols-2">
          <IndustrialNoticeCard title="Le réseau" description={heatingNetworkInfo.intro} />
          <IndustrialNoticeCard title="Le rôle de la société" description={heatingNetworkInfo.role} />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Pourquoi ce système ?" title="Des bénéfices concrets pour la commune" description="Les avantages sont présentés comme des repères simples, pas comme un discours technique." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {heatingNetworkInfo.benefits.map((item) => (
            <IndustrialNoticeCard key={item} title="Bénéfice" description={item} />
          ))}
        </div>
      </section>

      <IndustrialContactPanel {...heatingNetworkInfo.contact} />
    </section>
  );
}
