import { Link, Navigate, useParams } from "react-router-dom";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { formatNewsDate, getNewsArticleBySlug } from "@/features/actualites/data";

export default function NewsDetailPage() {
  const { slug = "" } = useParams();
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/actualites" replace />;
  }

  return (
    <section className="container space-y-8 py-8 md:space-y-10 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Actualites", href: "/actualites" },
          { label: article.title },
        ]}
      />

      <header className="space-y-4 border-b border-black/8 pb-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-prilly-coal/64">
          <span className="font-medium text-prilly-coal">{article.category}</span>
          <span aria-hidden="true" className="text-prilly-coal/36">
            ·
          </span>
          <time dateTime={article.date}>{formatNewsDate(article.date)}</time>
        </div>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-prilly-coal md:text-5xl">
          {article.title}
        </h1>
        <p className="max-w-3xl text-base leading-7 text-prilly-coal/72">{article.summary}</p>
      </header>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
        <article className="rounded-[1.6rem] border border-black/8 bg-white p-6 md:p-8">
          <div className="space-y-5 text-base leading-8 text-prilly-coal/78">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <aside className="space-y-5">
          <section className="rounded-[1.5rem] border border-black/8 bg-white p-5">
            <h2 className="text-lg font-semibold text-prilly-coal">Publication</h2>
            <dl className="mt-4 space-y-3 text-sm text-prilly-coal/72">
              <div>
                <dt className="font-medium text-prilly-coal">Categorie</dt>
                <dd className="mt-1">{article.category}</dd>
              </div>
              <div>
                <dt className="font-medium text-prilly-coal">Date</dt>
                <dd className="mt-1">{formatNewsDate(article.date)}</dd>
              </div>
            </dl>
          </section>

          <section className="rounded-[1.5rem] border border-black/8 bg-white p-5">
            <h2 className="text-lg font-semibold text-prilly-coal">Archives</h2>
            <p className="mt-4 text-sm leading-6 text-prilly-coal/72">
              L'ensemble des publications recentes peut etre consulte dans la rubrique des actualites.
            </p>
            <Link
              to="/actualites"
              className="focus-ring mt-4 inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-prilly-coal transition hover:border-prilly-red/24 hover:text-prilly-red"
            >
              Retour aux actualites
            </Link>
          </section>
        </aside>
      </div>
    </section>
  );
}
