export function NewsletterSignupBlock() {
  return (
    <div className="rounded-[2rem] border border-black/8 bg-gradient-to-br from-prilly-coal to-[#5f5f5f] p-6 text-white shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-prilly-yellow">Lettre d’information</p>
      <h2 className="mt-3 text-3xl font-semibold">Recevoir les nouvelles du service culture et intégration</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/82">
        La lettre d’information paraît cinq fois par année. Elle permet de suivre les activités, les
        projets et les ressources utiles du service. Votre adresse e-mail est utilisée uniquement
        pour cet envoi.
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
        <input
          type="email"
          placeholder="Votre adresse e-mail"
          className="focus-ring h-12 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white placeholder:text-white/55"
        />
        <button className="rounded-full bg-prilly-red px-6 py-3 text-sm font-semibold text-white">
          S’abonner
        </button>
      </div>
    </div>
  );
}
