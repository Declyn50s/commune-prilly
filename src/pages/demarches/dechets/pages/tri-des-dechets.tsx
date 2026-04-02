import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeader } from "@/components/common/section-header";
import { Input } from "@/components/ui/input";
import { AlertNotice, WasteTypeAccordion } from "@/features/dechets/components";
import { wasteTypes } from "@/features/dechets/data";

export default function WasteSortingPage() {
  const [query, setQuery] = useState("");

  const filteredTypes = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return wasteTypes;
    return wasteTypes.filter((item) => [item.title, item.what, item.where, item.note, ...item.keywords].some((value) => value.toLowerCase().includes(normalized)));
  }, [query]);

  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Démarches", href: "/demarches" }, { label: "Déchets", href: "/demarches/dechets" }, { label: "Tri des déchets" }]} />

      <PageHero
        eyebrow="Guide pratique"
        title="Tri des déchets"
        description="Un guide pratique pour savoir quoi jeter, où et dans quelles conditions."
        tone="light"
        aside={
          <div className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Recherche rapide</p>
            <div className="relative mt-4">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-prilly-coal/40" />
              <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex. verre, PET, piles, pneus, huiles" className="pl-11" />
            </div>
            <p className="mt-3 text-sm text-prilly-coal/68">{filteredTypes.length} résultat{filteredTypes.length > 1 ? "s" : ""} affiché{filteredTypes.length > 1 ? "s" : ""}.</p>
          </div>
        }
      />

      <section className="space-y-8">
        <SectionHeader eyebrow="Par matière" title="Où jeter ce déchet ?" description="Chaque matière est résumée en trois informations utiles: ce que c'est, où l'apporter et le point d'attention à retenir." />
        <div className="space-y-4">
          {filteredTypes.map((item) => <WasteTypeAccordion key={item.title} item={item} />)}
        </div>
      </section>

      <AlertNotice title="Privilégier le retour en magasin" tone="green">
        Même si certains déchets sont parfois acceptés en déchèterie, la reprise en magasin reste à privilégier pour les piles, le PET, les ampoules, les appareils électriques, les capsules et plusieurs autres filières commerciales.
      </AlertNotice>
    </section>
  );
}
