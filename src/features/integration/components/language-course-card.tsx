import { cn } from "@/lib/utils";
import type { FrenchCourse } from "@/features/integration/types";

export function LanguageCourseCard({ item, featured = false }: { item: FrenchCourse; featured?: boolean }) {
  const toneClass = {
    red: "bg-prilly-red/6 border-prilly-red/15",
    yellow: "bg-prilly-yellow/20 border-prilly-yellow/30",
    green: "bg-prilly-green/8 border-prilly-green/18",
    coal: "bg-prilly-soft border-black/8",
  }[item.tone];

  const content = (
    <div className={cn("h-full rounded-[1.75rem] border p-5 shadow-soft", toneClass, featured ? "p-6" : "")}>
      <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
      <p className="mt-4 text-sm font-medium text-prilly-red">{item.audience}</p>
      <div className="mt-4 space-y-2">
        {item.details.map((entry) => (
          <div key={entry} className="rounded-2xl bg-white/80 px-4 py-3 text-sm text-prilly-coal/74">
            {entry}
          </div>
        ))}
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

  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="block h-full">
      {content}
    </a>
  );
}
