export function ProcedureStepper({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, index) => (
        <li key={step} className="surface flex gap-4 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-prilly-red text-sm font-semibold text-white">
            {index + 1}
          </div>
          <p className="pt-2 text-sm leading-6 text-prilly-coal/70">{step}</p>
        </li>
      ))}
    </ol>
  );
}
