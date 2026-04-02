import { motion } from "framer-motion";
import { CheckCircle2, Mail, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { FetonsPrillyHighlight, FetonsPrillySummaryItem } from "@/features/fetons-prilly/data";

export function EventSummaryCard({ item }: { item: FetonsPrillySummaryItem }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface h-full p-5 md:p-6"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/60">{item.title}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-prilly-coal">{item.value}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
    </motion.article>
  );
}

export function HighlightCard({ item }: { item: FetonsPrillyHighlight }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="surface h-full p-5 transition duration-300 hover:-translate-y-1 hover:shadow-float"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-prilly-soft text-prilly-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-prilly-coal">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{item.description}</p>
    </motion.article>
  );
}

export function ParticipationCallout({
  title,
  description,
  points,
  email,
}: {
  title: string;
  description: string;
  points: string[];
  email: string;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-prilly-coal shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-gradient-to-br from-prilly-coal via-[#555555] to-prilly-red p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Appel a participation</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">{description}</p>
          <a href={`mailto:${email}`} className="mt-6 inline-flex">
            <Button variant="secondary">
              <Mail className="h-4 w-4" />
              Proposer un stand
            </Button>
          </a>
        </div>
        <div className="grid gap-3 p-6 md:p-8">
          {points.map((point) => (
            <div key={point} className="flex gap-3 rounded-[1.5rem] bg-white px-4 py-4 text-sm leading-6 text-prilly-coal/78">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-prilly-green" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function InfoNotice({ title, description }: { title: string; description: string }) {
  return (
    <article className="surface h-full p-5 md:p-6">
      <div className="flex items-center gap-3 text-prilly-red">
        <Sparkles className="h-5 w-5" />
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/65">A venir</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-prilly-coal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-prilly-coal/72">{description}</p>
    </article>
  );
}

export function ContactPanel({ email }: { email: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-prilly-coal shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-gradient-to-br from-prilly-coal via-[#555555] to-prilly-red p-6 text-white md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Contact</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">Le bon contact pour les stands et l'organisation</h3>
          <p className="mt-3 text-sm leading-6 text-white/82">Le greffe centralise les demandes liees a l'appel a candidature et aux informations generales sur la manifestation.</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="rounded-[1.5rem] bg-white p-5">
            <div className="flex items-center gap-3 text-prilly-red">
              <Mail className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-coal/65">Email</span>
            </div>
            <a href={`mailto:${email}`} className="mt-4 inline-flex text-lg font-semibold text-prilly-coal transition hover:text-prilly-red">
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ClosingSection({ title, description }: { title: string; description: string }) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-prilly-yellow/18 via-white to-prilly-red/8 p-6 shadow-soft md:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-coal/62">Rendez-vous communal</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-prilly-coal">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-prilly-coal/74">{description}</p>
        </div>
        <div className="rounded-[1.5rem] border border-prilly-yellow/40 bg-white/92 px-5 py-4 text-sm font-medium text-prilly-coal shadow-soft">
          Les infos complementaires arriveront en début d'annee.
        </div>
      </div>
    </section>
  );
}
