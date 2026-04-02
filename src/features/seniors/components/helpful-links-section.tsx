import type { HelpfulLink } from "@/features/seniors/types";

export function HelpfulLinksSection({ items }: { items: HelpfulLink[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="surface block p-5 transition duration-200 hover:-translate-y-1 hover:shadow-float">
          <h3 className="text-lg font-semibold text-prilly-coal">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
        </a>
      ))}
    </div>
  );
}
