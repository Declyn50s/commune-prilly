import type { CMSItem } from "@/features/seniors/types";

export function CMSSelectorCard({ item }: { item: CMSItem }) {
  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="block h-full">
      <div className="surface h-full p-5 transition duration-200 hover:-translate-y-1 hover:shadow-float">
        <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
        <div className="mt-4 rounded-2xl bg-prilly-soft px-4 py-3 text-sm text-prilly-coal/72">
          {item.area}
        </div>
        <span className="mt-4 inline-flex text-sm font-semibold text-prilly-red">{item.ctaLabel}</span>
      </div>
    </a>
  );
}
