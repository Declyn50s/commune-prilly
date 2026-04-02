import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        <span className="eyebrow">{eyebrow}</span>
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-prilly-coal md:text-4xl">{title}</h2>
          <p className="text-base leading-7 text-prilly-coal/70">{description}</p>
        </div>
      </div>
      {action}
    </div>
  );
}
