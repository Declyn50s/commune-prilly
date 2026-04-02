import { Link } from "react-router-dom";
import type { HousingSupportOrganization } from "@/types/content";
import { InfoBadge } from "@/components/installation/info-badge";

export function SupportOrganizationCard({ item }: { item: HousingSupportOrganization }) {
  return (
    <article className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
      <InfoBadge label={item.tone === "green" ? "Accompagnement" : "Sur rendez-vous"} tone={item.tone} />
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{item.description}</p>
      <div className="mt-4 space-y-2 text-sm text-prilly-coal/75">
        <p><span className="font-semibold text-prilly-coal">Pour qui:</span> {item.audience}</p>
        <p><span className="font-semibold text-prilly-coal">Type d’aide:</span> {item.supportType}</p>
        <p><span className="font-semibold text-prilly-coal">Contact:</span> {item.contactMode}</p>
      </div>
      <Link to={item.ctaHref} className="mt-5 inline-flex text-sm font-semibold text-prilly-red">
        {item.ctaLabel}
      </Link>
    </article>
  );
}
