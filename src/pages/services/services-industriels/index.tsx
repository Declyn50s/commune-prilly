import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { Reveal } from "@/components/common/reveal";
import { SectionHeader } from "@/components/common/section-header";
import { IndustrialContactPanel, IndustrialNoticeCard, UtilityServiceCard } from "@/features/services-industriels/components";
import { industrialIntro, industrialServicesContacts, industrialServicesExplanation, utilityServices } from "@/features/services-industriels/data";

export default function IndustrialServicesHubPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Services industriels" }]} />

      <PageHero
        eyebrow="Réseaux essentiels"
        title={industrialIntro.title}
        description={industrialIntro.description}
        tone="light"
        aside={
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border border-prilly-yellow/35 bg-prilly-yellow/14 p-5 shadow-soft">
              <p className="text-sm leading-6 text-prilly-coal/76">{industrialIntro.body}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link to="/services/services-industriels/eau-potable" className="rounded-full bg-prilly-red px-5 py-3 text-center text-sm font-semibold text-white">Consulter la qualité de l'eau</Link>
              <Link to="/services/services-industriels/gaz" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal">Contacter le service du gaz</Link>
              <Link to="/services/services-industriels/chauffage-distance" className="rounded-full border border-black/8 bg-white px-5 py-3 text-center text-sm font-semibold text-prilly-coal sm:col-span-2">Découvrir le chauffage à distance</Link>
            </div>
          </div>
        }
      />

      <section className="space-y-8">
        <SectionHeader eyebrow="Accès rapides" title="Choisir le bon service" description="Chaque page est dédiée à un besoin précis pour éviter de mélanger qualité de l'eau, dépannage gaz et réseau de chaleur." />
        <div className="grid gap-4 md:grid-cols-3">
          {utilityServices.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <UtilityServiceCard title={item.title} description={item.description} href={item.href} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Services essentiels au quotidien" title="Comprendre qui fait quoi" description="L'eau, le gaz et le chauffage à distance ne relèvent pas exactement des mêmes acteurs. Cette rubrique aide à identifier le bon interlocuteur sans effort." />
        <div className="grid gap-4 md:grid-cols-3">
          {industrialServicesExplanation.map((item) => (
            <IndustrialNoticeCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Contacts rapides" title="Les bons points d'entrée" description="Service de l'eau, service du gaz et CADOUEST SA sont regroupés ici pour réduire la friction." />
        <div className="grid gap-4 md:grid-cols-3">
          {industrialServicesContacts.map((item) => (
            <IndustrialContactPanel key={item.title} title={item.title} addressLines={[item.description]} phone={item.phone} website={item.href} />
          ))}
        </div>
      </section>
    </section>
  );
}
