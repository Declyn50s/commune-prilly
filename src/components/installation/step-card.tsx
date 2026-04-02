import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { InfoBadge } from "@/components/installation/info-badge";
import type { InstallationDocument, InstallationStep } from "@/types/content";

export function StepCard({
  step,
  index,
  relatedDocuments,
}: {
  step: InstallationStep;
  index: number;
  relatedDocuments: InstallationDocument[];
}) {
  return (
    <article className="grid gap-4 rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft lg:grid-cols-[auto_1fr_auto] lg:items-start">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-coal text-sm font-semibold text-white">
        {index + 1}
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <InfoBadge label={step.required ? "Obligatoire" : "Selon votre situation"} tone={step.required ? "red" : "yellow"} />
            {step.badges.map((badge) => (
              <InfoBadge key={badge} label={badge} tone={badge === "Famille" ? "green" : "coal"} />
            ))}
          </div>
          <h3 className="text-xl font-semibold text-prilly-coal">{step.title}</h3>
          <p className="text-sm leading-6 text-prilly-coal/70">{step.summary}</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl bg-prilly-soft p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-red">Ce qu’il faut faire</p>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/75">{step.action}</p>
          </div>
          <div className="rounded-2xl bg-prilly-soft p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-red">Pour qui</p>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/75">{step.audience}</p>
          </div>
        </div>
        {relatedDocuments.length ? (
          <div className="rounded-2xl border border-black/6 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prilly-red">Document utile</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {relatedDocuments.map((document) => (
                <a key={document.id} href={document.href} target="_blank" rel="noreferrer" className="rounded-full border border-black/8 px-3 py-2 text-sm font-medium text-prilly-coal transition hover:border-prilly-red/20 hover:text-prilly-red">
                  {document.title}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div className="lg:pt-1">
        <Link to={step.ctaHref} className="inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
          {step.ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
