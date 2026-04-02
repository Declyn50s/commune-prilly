import type { MethodItem } from "@/features/vie-quartier/types";

export function MethodCard({ item }: { item: MethodItem }) {
  return (
    <div className="surface p-5">
      <h3 className="text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/74">{item.description}</p>
    </div>
  );
}
