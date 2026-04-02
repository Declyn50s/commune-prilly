import type { ResourceItem } from "@/features/integration/types";

export function ResourceCard({ item }: { item: ResourceItem }) {
  const external = item.href.startsWith("http");
  const unavailable = item.href.endsWith(".txt");
  const common = "surface block h-full p-5 transition duration-200 hover:-translate-y-1 hover:shadow-float";

  const content = (
    <div>
      <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
      {item.address ? <p className="mt-3 text-sm text-prilly-coal/70">{item.address}</p> : null}
      {item.phone ? <p className="mt-1 text-sm text-prilly-coal/70">{item.phone}</p> : null}
      {item.website ? <p className="mt-1 text-sm text-prilly-red">{item.website}</p> : null}
    </div>
  );

  if (unavailable) {
    return (
      <div className={common}>
        {content}
        <p className="mt-4 inline-flex rounded-full bg-prilly-soft px-3 py-1.5 text-sm font-medium text-prilly-coal/70">
          Document prochainement disponible
        </p>
      </div>
    );
  }

  if (external) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className={common}>
        {content}
      </a>
    );
  }

  return (
    <a href={item.href} className={common}>
      {content}
    </a>
  );
}
