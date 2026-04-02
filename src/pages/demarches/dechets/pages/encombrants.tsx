import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { AlertNotice, WasteNoticeCard } from "@/features/dechets/components";
import { encombrantsInfo } from "@/features/dechets/data";

export default function WasteBulkyItemsPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Démarches", href: "/demarches" }, { label: "Déchets", href: "/demarches/dechets" }, { label: "Encombrants" }]} />

      <PageHero eyebrow="Ramassage sur rendez-vous" title="Encombrants" description="Le service pratique pour faire enlever les objets volumineux qui ne peuvent pas être déposés dans les conteneurs." tone="warm" />

      <section className="space-y-8">
        <SectionHeader eyebrow="Comment ça fonctionne" title="Les conditions à connaître avant de réserver" description="Le service est présenté de manière simple pour savoir tout de suite si votre demande entre dans le cadre." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {encombrantsInfo.conditions.map((item) => <WasteNoticeCard key={item} title="Condition" description={item} />)}
        </div>
      </section>

      <AlertNotice title="Seconde vie à privilégier" tone="green">
        Si l'objet est encore utilisable, privilégiez d'abord les associations caritatives et les filières de réemploi avant de demander un enlèvement.
      </AlertNotice>

      <section className="space-y-8">
        <SectionHeader eyebrow="Réemploi" title="Des alternatives utiles avant de jeter" description="La commune encourage les solutions de seconde vie quand les objets sont encore en bon état." />
        <div className="grid gap-4 md:grid-cols-3">
          {encombrantsInfo.reuse.map((item) => <WasteNoticeCard key={item} title="Alternative utile" description={item} />)}
        </div>
      </section>
    </section>
  );
}
