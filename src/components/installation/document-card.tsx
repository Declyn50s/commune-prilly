import { Download, FileText } from "lucide-react";
import type { InstallationDocument } from "@/types/content";

export function DocumentCard({ document }: { document: InstallationDocument }) {
  return (
    <article className="group rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
          <FileText className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-prilly-yellow/20 px-3 py-1 text-xs font-semibold text-prilly-coal">PDF</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-prilly-coal">{document.title}</h3>
      <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{document.description}</p>
      <div className="mt-4 space-y-2 text-sm text-prilly-coal/75">
        <p><span className="font-semibold text-prilly-coal">Pour qui:</span> {document.audience}</p>
        <p><span className="font-semibold text-prilly-coal">Quand:</span> {document.timing}</p>
      </div>
      <a
        href={document.href}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-prilly-red px-4 py-2 text-sm font-semibold text-white transition hover:bg-prilly-red/90"
      >
        <Download className="h-4 w-4" />
        {document.ctaLabel}
      </a>
    </article>
  );
}
