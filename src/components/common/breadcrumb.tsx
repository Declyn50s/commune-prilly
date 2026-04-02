import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Breadcrumb({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav aria-label="Fil d’Ariane" className="text-sm text-prilly-coal/60">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="inline-flex items-center gap-2">
            {item.href ? <Link to={item.href} className="hover:text-prilly-red">{item.label}</Link> : <span className="font-medium text-prilly-coal">{item.label}</span>}
            {index < items.length - 1 ? <ChevronRight className="h-4 w-4" /> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
