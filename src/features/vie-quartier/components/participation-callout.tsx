export function ParticipationCallout({ items }: { items: string[] }) {
  return (
    <div className="rounded-[2rem] border border-black/8 bg-gradient-to-br from-prilly-coal to-[#595959] p-6 text-white shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-yellow">
        Participer à la vie du quartier
      </p>
      <h2 className="mt-3 text-3xl font-semibold">Chaque voix compte pour faire évoluer Prilly</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-2xl bg-white/10 px-4 py-4 text-sm leading-6 text-white/88">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
