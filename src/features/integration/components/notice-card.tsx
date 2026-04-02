export function IntegrationNoticeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[1.75rem] border border-prilly-yellow/30 bg-prilly-yellow/22 p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal">{title}</p>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/76">{description}</p>
    </div>
  );
}
