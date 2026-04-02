import { ArrowRight } from "lucide-react";

export function CalculationInfoCard() {
  return (
    <div className="rounded-[2rem] border border-black/8 bg-gradient-to-br from-prilly-yellow/20 via-white to-prilly-soft p-6 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-red">Comprendre le calcul</p>
      <h3 className="mt-3 text-2xl font-semibold text-prilly-coal">L’aide dépend de votre situation réelle de logement.</h3>
      <p className="mt-3 text-sm leading-7 text-prilly-coal/75">
        Le montant n’est pas fixe. Il dépend notamment de votre revenu net, du loyer effectif, du nombre de pièces du logement et de la composition du ménage.
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {["Revenu net du ménage", "Loyer pris en compte", "Nombre d’occupants et de pièces"].map((item) => (
          <div key={item} className="rounded-2xl bg-white/85 px-4 py-4 text-sm font-medium text-prilly-coal">
            {item}
          </div>
        ))}
      </div>
      <a href="#contacts" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-prilly-red">
        Voir le barème détaillé
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
