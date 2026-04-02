import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { AlertNotice } from "@/features/dechets/components";
import { IndustrialContactPanel, IndustrialNoticeCard, KeyFigureCard } from "@/features/services-industriels/components";
import { gasInfo } from "@/features/services-industriels/data";

export default function GasPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Services industriels", href: "/services/services-industriels" }, { label: "Gaz" }]} />

      <PageHero eyebrow="Réseau et dépannage" title="Gaz" description="Réseau, distribution, dépannage et contacts du service du gaz à Prilly." tone="light" />

      <section className="space-y-8">
        <SectionHeader eyebrow="Le gaz à Prilly" title="Un service géré par les SiL" description="La page va droit au but pour expliquer qui gère le réseau et dans quels usages le gaz est principalement utilisé." />
        <div className="grid gap-4 md:grid-cols-3">
          <IndustrialNoticeCard title="Gestion du réseau" description={gasInfo.intro} />
          <IndustrialNoticeCard title="Usages courants" description="Le gaz naturel est utilisé principalement pour le chauffage et la cuisine, avec aussi certains usages industriels." />
          <IndustrialNoticeCard title="Logique de service" description="En cas de besoin, les numéros sont organisés par fonction pour éviter les erreurs d'aiguillage." />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Dépannage et interventions" title="Le bon numéro selon votre besoin" description="Permanence, bureau technique, contact clients et dépannage hors horaires sont hiérarchisés dans un format simple à scanner." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {gasInfo.interventions.map((item) => (
            <KeyFigureCard key={item.title} label={item.title} value={item.value} note={item.note} />
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-4 md:grid-cols-2">
          {gasInfo.officeHours.map((item) => (
            <IndustrialNoticeCard key={item} title="Disponibilité" description={item} />
          ))}
        </div>
        <AlertNotice title="Dépannage gaz" tone="yellow">
          Le dépannage est disponible 24h/24, 7j/7. Pendant les heures de bureau, privilégiez le bon numéro selon votre besoin pour gagner du temps.
        </AlertNotice>
      </section>

      <IndustrialContactPanel {...gasInfo.contact} />
    </section>
  );
}
