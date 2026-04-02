import type { HousingDocumentGroup } from "@/types/content";

export function DocumentsChecklist({ groups }: { groups: HousingDocumentGroup[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.title} className="rounded-[1.75rem] border border-black/8 bg-white p-5 shadow-soft">
          <h3 className="text-lg font-semibold text-prilly-coal">{group.title}</h3>
          <p className="mt-2 text-sm leading-6 text-prilly-coal/70">{group.description}</p>
          <div className="mt-4 grid gap-3">
            {group.items.map((item) => (
              <div key={item} className="rounded-2xl bg-prilly-soft px-4 py-3 text-sm leading-6 text-prilly-coal/75">
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
