import { AlertCircle } from "lucide-react";

export function ImportantNotice({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[1.75rem] border border-prilly-yellow/30 bg-prilly-yellow/20 p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-prilly-red">
          <AlertCircle className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">{title}</p>
          <p className="mt-2 text-sm leading-6 text-prilly-coal/80">{description}</p>
        </div>
      </div>
    </div>
  );
}
