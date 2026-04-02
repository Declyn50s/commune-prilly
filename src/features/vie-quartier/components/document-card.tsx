import { FileText } from "lucide-react";
import type { DocumentItem } from "@/features/vie-quartier/types";

export function DocumentCard({ item }: { item: DocumentItem }) {
  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="block h-full">
      <div className="surface h-full p-5 transition duration-200 hover:-translate-y-1 hover:shadow-float">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full bg-prilly-soft px-3 py-1 text-xs font-semibold text-prilly-coal/70">
              {item.meta}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-prilly-coal">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-prilly-yellow/25 text-prilly-coal">
            <FileText className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-4 rounded-2xl bg-prilly-soft px-4 py-3 text-sm text-prilly-coal/72">
          {item.context}
        </div>
      </div>
    </a>
  );
}
