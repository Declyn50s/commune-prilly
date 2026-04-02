import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import type { EnfanceDownload } from "@/features/enfance-ecoles/types";

export function DownloadCard({ item }: { item: EnfanceDownload }) {
  const content = (
    <div className="surface h-full p-5 transition duration-200 hover:-translate-y-1 hover:shadow-float">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full bg-prilly-soft px-3 py-1 text-xs font-semibold text-prilly-coal/70">
            {item.meta}
          </span>
          <h3 className="mt-3 text-lg font-semibold text-prilly-coal">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-yellow/30 text-prilly-coal">
          <Download className="h-4 w-4" />
        </div>
      </div>
    </div>
  );

  if (item.href.endsWith(".txt")) {
    return (
      <div className="block h-full">
        {content}
        <p className="mt-3 inline-flex rounded-full bg-prilly-soft px-3 py-1.5 text-sm font-medium text-prilly-coal/72">
          Document prochainement disponible
        </p>
      </div>
    );
  }

  if (item.href.startsWith("/vivre")) {
    return (
      <Link to={item.href} className="block h-full">
        {content}
      </Link>
    );
  }

  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="block h-full">
      {content}
    </a>
  );
}
