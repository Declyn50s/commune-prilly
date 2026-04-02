import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageSideNav } from "@/components/common/page-side-nav";
import type { PageSideNavSection } from "@/components/common/page-side-nav";
import { SectionHeader } from "@/components/common/section-header";

type BuildingItem = {
  name: string;
  category: string;
  address: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type ExternalLinkItem = {
  label: string;
  href: string;
};

type HeritageItem = {
  name: string;
  note: string;
  status: string;
  summary: string[];
  imageSrc: string;
  imageAlt: string;
};

const pageSections: PageSideNavSection[] = [
  { id: "administratif-divers", label: "Bâtiment administratif et divers" },
  { id: "scolaires", label: "Bâtiments scolaires" },
  { id: "cultes", label: "Lieux de culte" },
  { id: "locatifs", label: "Immeubles locatifs" },
  { id: "patrimoine-classe", label: "Patrimoine communal classé" },
  { id: "contact", label: "Contact" },
];

const administrativeBuildings: BuildingItem[] = [
  {
    name: "Administration communale",
    category: "Bâtiment administratif",
    address: "Route de Cossonay 40, 1008 Prilly",
    description: "Bâtiment administratif principal de la Commune de Prilly.",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_ADMINISTRATION_34106adf8d.jpg",
    imageAlt: "Administration communale de Prilly",
  },
  {
    name: "Castelmont",
    category: "Divers",
    address: "Route de Cossonay 42, 1008 Prilly",
    description: "Bâtiment abritant notamment le siège du Conseil communal et la Bibliothèque communale de Prilly.",
    imageSrc: "/images/batiments-communaux/csm_DBG_CASTELMONT_ETE_01_e855eda6dc.jpg",
    imageAlt: "Bâtiment de Castelmont à Prilly",
  },
  {
    name: "Four à pain",
    category: "Divers",
    address: "Route de Cossonay 40, 1008 Prilly",
    description: "Dépendance historique du Domaine du Château encore utilisée lors de manifestations locales.",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_FOURAPAIN_ETE_01_8ab9609c79.jpg",
    imageAlt: "Four à pain de Prilly",
  },
  {
    name: "La Vague",
    category: "Divers",
    address: "Chemin de la Fleur-de-Lys 4, 1008 Prilly",
    description: "Restaurant de la piscine de L'Almara.",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_LA_VAGUE_015493a8d2.jpg",
    imageAlt: "Restaurant La Vague à Prilly",
  },
  {
    name: "Bâtiment principal",
    category: "Piscine de la Fleur-de-Lys",
    address: "Chemin de la Fleur-de-Lys 2, 1008 Prilly",
    description: "Bâtiment principal de la piscine extérieure de la Fleur-de-Lys.",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_FDELYS_ENTREE_ADMINISTRATION_e62f9f7fb2.jpg",
    imageAlt: "Bâtiment principal de la piscine de la Fleur-de-Lys",
  },
  {
    name: "Bâtiment technique",
    category: "Piscine de la Fleur-de-Lys",
    address: "Chemin de la Fleur-de-Lys 2, 1008 Prilly",
    description: "Bâtiment technique de la piscine extérieure de la Fleur-de-Lys.",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_FDELYS_ENTREE_VOIRIE_928aded284.jpg",
    imageAlt: "Bâtiment technique de la piscine de la Fleur-de-Lys",
  },
  {
    name: "Château 1",
    category: "Divers",
    address: "Avenue du Château 1, 1008 Prilly",
    description: "Bâtiment abritant le jardin d'enfants Amadou, l'Association Familiale de Prilly et Jouxtens-Mézery et la ludothèque L'île aux Trésors.",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_BATIMENT_CHATEAU_d71e17f002.jpg",
    imageAlt: "Bâtiment Château 1 à Prilly",
  },
  {
    name: "Grande Salle",
    category: "Salle et locaux",
    address: "Place du Collège 1, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_EXTERIEUR_GRANDE_SALLE_7b130b3d5d.png",
    imageAlt: "Grande Salle de Prilly",
  },
  {
    name: "Le Tilleul",
    category: "Petite enfance",
    address: "Route des Flumeaux 2, 1008 Prilly",
    description: "Centre de vie enfantine Le Tilleul.",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_PETITE_ENFANCE_TILLEUL_1e03bd1515.png",
    imageAlt: "Centre de vie enfantine Le Tilleul",
  },
  {
    name: "Acacias",
    category: "Petite enfance",
    address: "Avenue des Acacias 7, 1008 Prilly",
    description: "Centre de vie enfantine des Acacias.",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_PETITE_ENFANCE_ACACIA_2a32edb8e5.png",
    imageAlt: "Centre de vie enfantine des Acacias",
  },
  {
    name: "Carrefour-Sud",
    category: "Loisirs",
    address: "Route de Renens 22, 1008 Prilly",
    description: "Centre de loisirs de Prilly.",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_CARREFOUR-SUD_3b207adb19.jpg",
    imageAlt: "Centre de loisirs Carrefour-Sud",
  },
  {
    name: "Refuge communal de Prilly",
    category: "Salle et locaux",
    address: "Route de Neuchâtel, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_REFUGE_bffcd91d22.jpg",
    imageAlt: "Refuge communal de Prilly",
  },
  {
    name: "Propriété de Plan-Sépey",
    category: "Salle et locaux",
    address: "Route des Renards 53, 1882 Gryon",
    description: "Propriété communale située à Gryon.",
  },
  {
    name: "Bâtiment de la Voirie",
    category: "Infrastructure",
    address: "Route de Renens 22, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_LA_VOIRIE_TVX_130c34e86b.jpg",
    imageAlt: "Bâtiment de la Voirie à Prilly",
  },
];

const primarySchools: BuildingItem[] = [
  {
    name: "Collège Centre",
    category: "Établissement primaire",
    address: "Place Catherine Colomb 1, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/csm_DBG_COLLEGE_CENTRE_ETE_01_8c2505503f.jpg",
    imageAlt: "Collège Centre de Prilly",
  },
  {
    name: "Collège de Mont-Goulin",
    category: "Établissement primaire",
    address: "Chemin de Sous-Mont 6-8, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_COLLEGE_DE_MONT-GOULIN_b7b781ec58.png",
    imageAlt: "Collège de Mont-Goulin",
  },
  {
    name: "Pavillon de Sous-Mont",
    category: "Établissement primaire",
    address: "Avenue de la Rapille, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_PAVILLON_DE_SOUS-MONT_d39b27baee.png",
    imageAlt: "Pavillon de Sous-Mont",
  },
  {
    name: "Pavillon de Bel-Orne",
    category: "Établissement primaire",
    address: "Chemin de Bel-Orne, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_PAVILLON_DE_BEL-ORNE_9f0bc3710e.png",
    imageAlt: "Pavillon de Bel-Orne",
  },
  {
    name: "Collège de Jolimont",
    category: "Établissement primaire",
    address: "Avenue de Jolimont 32, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_COLLEGE_DE_JOLIMONT_b3fb0a256f.png",
    imageAlt: "Collège de Jolimont",
  },
  {
    name: "Pavillon de la Grand-Vigne",
    category: "Établissement primaire",
    address: "Chemin de la Grand-Vigne, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_PAVILLON_GRAND-VIGNE_5e800113d1.jpg",
    imageAlt: "Pavillon de la Grand-Vigne",
  },
  {
    name: "Plantinel",
    category: "Établissement primaire",
    address: "Place Catherine Colomb 1, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_PLANTINEL_7c1a056040.jpg",
    imageAlt: "Bâtiment Plantinel",
  },
];

const secondarySchools: BuildingItem[] = [
  {
    name: "Complexe scolaire de l'Union",
    category: "Établissement secondaire",
    address: "Chemin de l'Union 1, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_COLLEGE_DE_UNION_8ac0559914.png",
    imageAlt: "Complexe scolaire de l'Union",
  },
  {
    name: "Collège du Grand-Pré",
    category: "Établissement secondaire",
    address: "Chemin de la Grand-Vigne 3, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_COLLEGE_DU_GRAND-PRE_06d6b02ed9.png",
    imageAlt: "Collège du Grand-Pré",
  },
];

const schoolLinks: ExternalLinkItem[] = [
  { label: "Site web de l'Asigos", href: "https://asigos.ch/" },
  { label: "Site web de l'établissement primaire", href: "https://www.prilly.ch/vivre-a-prilly/enfance-jeunesse-et-ecoles/ecoles" },
  { label: "Site web de l'établissement primaire et secondaire", href: "https://www.ecole-prilly-eps.ch/" },
  { label: "Vaud - Scolarité obligatoire", href: "https://www.vd.ch/formation/scolarite-obligatoire" },
];

const protestantPlaces: BuildingItem[] = [
  {
    name: "Temple de Broye",
    category: "Culte protestant",
    address: "Chemin des Planches 4, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_TEMPLEBROYE_ETE_01_7184b88f9c.jpg",
    imageAlt: "Temple de Broye",
  },
  {
    name: "Complexe de Saint-Étienne",
    category: "Culte protestant",
    address: "Chemin du Vieux-Collège, 1008 Prilly",
    description: "Église, grande salle, locaux paroissiaux et secrétariat.",
    imageSrc: "/images/batiments-communaux/DBG_PHOTO_FACADE_SAINT-ETIENNE.png",
    imageAlt: "Temple et centre paroissial de Saint-Étienne",
  },
  {
    name: "Façade de Saint-Étienne",
    category: "Culte protestant",
    address: "Chemin du Vieux-Collège, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/DBG_FACADE_SAINT-ETIENNE.png",
    imageAlt: "Façade de Saint-Étienne",
  },
];

const catholicPlaces: BuildingItem[] = [
  {
    name: "Paroisse catholique du Bon Pasteur",
    category: "Culte catholique",
    address: "Chemin des Cerisiers 2, 1008 Prilly",
    imageSrc: "/images/batiments-communaux/DBG_PHOTO_PAROISSE_CATHOLIQUE_BON_PASTEUR.jpg",
    imageAlt: "Paroisse catholique du Bon Pasteur",
  },
];

const cultLinks: ExternalLinkItem[] = [
  { label: "Patrimoine communal classé / Temple de Broye", href: "https://www.prilly.ch/vivre-a-prilly/espaces-publics-et-infrastructures/batiments-communaux/patrimoine-communal-classe/temple-de-broye-note-1-monument-dinteret-national" },
  { label: "Églises et cultes", href: "https://www.prilly.ch/vivre-a-prilly/espaces-publics-et-infrastructures/batiments-communaux/lieux-de-culte" },
];

const heritageOverview = [
  "Temple de Broye — note 1, monument d'intérêt national",
  "Le Château — note 2, monument d'intérêt régional",
  "Castelmont — note 2, monument d'intérêt régional",
  "Le Four à pain — note 2, monument d'intérêt régional",
  "Collège Centre — note 2, monument d'intérêt régional",
];

const heritageDetails: HeritageItem[] = [
  {
    name: "Temple de Broye",
    note: "Note 1",
    status: "Monument d'intérêt national",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_TEMPLEBROYE_ETE_01_7184b88f9c.jpg",
    imageAlt: "Temple de Broye à Prilly",
    summary: [
      "Le Temple de Broye a été construit en 1765 selon les plans de l'architecte Gabriel Delagrange, sous la direction de Rodolphe de Crousaz.",
      "Son nom est lié au ruisseau de Broye qui coulait au droit du temple.",
      "Des fresques réalisées en 1927 par Louis Rivier ornent l'intérieur, notamment l'Avènement du Christ.",
      "La propriété du lieu de culte est partagée entre les Communes de Prilly et de Jouxtens-Mézery.",
      "Des travaux de restauration extérieurs et intérieurs ont été entrepris en 2012, avec remplacement de l'orgue et modification de la galerie.",
    ],
  },
  {
    name: "Le Château",
    note: "Note 2",
    status: "Monument d'intérêt régional",
    imageSrc: "/images/batiments-communaux/csm_DBG_CHATEAU_ETE_01_f01937596f.jpg",
    imageAlt: "Le Château de Prilly",
    summary: [
      "Le Château est un assemblage de trois bâtiments d'époques différentes, dont l'origine remonte probablement aux XIIIe et XIVe siècles.",
      "Au fil du temps, il a connu plusieurs propriétaires et affectations.",
      "Au début du XXe siècle, il a notamment été transformé en clinique sous la direction du Dr Léon-Henri Pinard.",
      "La Commune a racheté le Domaine du Château en 1946.",
      "En 2009, une transformation importante a permis de conserver la tour et le corps principal du bâtiment, où des bureaux de l'administration ont été aménagés.",
      "Les salles portent aujourd'hui le nom d'anciens propriétaires de la bâtisse.",
    ],
  },
  {
    name: "Castelmont",
    note: "Note 2",
    status: "Monument d'intérêt régional",
    imageSrc: "/images/batiments-communaux/csm_DBG_CASTELMONT_ETE_01_e855eda6dc.jpg",
    imageAlt: "Castelmont à Prilly",
    summary: [
      "Cette annexe du Domaine du Château servait vraisemblablement de grange à l'origine.",
      "Le bâtiment a successivement accueilli des écuries, des locaux de service, des appartements, des commerces et des ateliers.",
      "La Commune l'a racheté en 1975.",
      "Castelmont a été sauvé de la démolition par référendum.",
      "Il abrite aujourd'hui plusieurs salles, dont la salle du Conseil communal et des espaces utilisés pour les mariages.",
    ],
  },
  {
    name: "Le Four à pain",
    note: "Note 2",
    status: "Monument d'intérêt régional",
    imageSrc: "/images/batiments-communaux/csm_DBG_PHOTO_FOURAPAIN_ETE_01_ca1ea815a7.jpg",
    imageAlt: "Four à pain de Prilly",
    summary: [
      "Le Four à pain de Prilly est une dépendance du Domaine du Château.",
      "Son origine s'inscrit dans l'histoire des fours seigneuriaux, liés à l'usage collectif du four.",
      "Délaissé durant une partie du XXe siècle, il a été sauvé à partir de 1978 par un projet de restauration.",
      "Le bâtiment a été inauguré en 1981 après les travaux conduits par Pierre Delacrétaz.",
      "Il reste utilisé lors de fêtes et animations locales.",
    ],
  },
  {
    name: "Collège Centre",
    note: "Note 2",
    status: "Monument d'intérêt régional",
    imageSrc: "/images/batiments-communaux/csm_DBG_COLLEGE_CENTRE_ETE_01_8c2505503f.jpg",
    imageAlt: "Collège Centre à Prilly",
    summary: [
      "Le projet d'un nouveau collège a été relancé en 1907.",
      "Un concours a été organisé pour l'aménagement de la Place du Tilleul et l'implantation du bâtiment scolaire.",
      "Le projet de l'architecte James Ramelet a été adopté en janvier 1908.",
      "Le Collège Centre a été inauguré en 1910.",
      "Le bâtiment a été agrandi en 1931 tout en conservant la même ligne architecturale.",
      "Il est toujours utilisé pour l'enseignement primaire.",
    ],
  },
];

const heritageLinks: ExternalLinkItem[] = [
  { label: "Archives communales", href: "https://www.prilly.ch/prilly-officiel/archives-communales" },
  { label: "Recensement architectural du canton de Vaud", href: "https://www.vd.ch/monuments-sites/comprendre-le-recensement-architectural" },
];

function BuildingCard({ item }: { item: BuildingItem }) {
  return (
    <article className="overflow-hidden rounded-[1.7rem] border border-black/8 bg-white shadow-[0_16px_36px_rgba(31,34,35,0.06)]">
      {item.imageSrc ? (
        <img src={item.imageSrc} alt={item.imageAlt ?? item.name} className="h-52 w-full object-cover" />
      ) : (
        <div className="flex h-52 items-center justify-center bg-[#f4f1ea] text-prilly-coal/46">
          <Building2 className="h-10 w-10" />
        </div>
      )}
      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-prilly-coal/54">{item.category}</p>
        <h3 className="text-xl font-semibold tracking-tight text-prilly-coal">{item.name}</h3>
        {item.description ? <p className="text-sm leading-6 text-prilly-coal/72">{item.description}</p> : null}
        <p className="flex items-start gap-2 text-sm leading-6 text-prilly-coal/72">
          <MapPin className="mt-1 h-4 w-4 shrink-0 text-prilly-red" />
          <span>{item.address}</span>
        </p>
      </div>
    </article>
  );
}

function DirectLinksCard({
  title,
  links,
}: {
  title: string;
  links: ExternalLinkItem[];
}) {
  return (
    <article className="rounded-[1.7rem] border border-black/8 bg-[#f8f6f1] p-6 shadow-[0_16px_36px_rgba(31,34,35,0.04)]">
      <h3 className="text-lg font-semibold text-prilly-coal">{title}</h3>
      <div className="mt-4 grid gap-3">
        {links.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-[1rem] border border-black/8 bg-white px-4 py-3 text-sm font-medium text-prilly-coal transition hover:border-prilly-red/16 hover:text-prilly-red"
          >
            {item.label}
          </a>
        ))}
      </div>
    </article>
  );
}

function HeritageDetailCard({ item }: { item: HeritageItem }) {
  return (
    <article className="overflow-hidden rounded-[1.8rem] border border-black/8 bg-white shadow-[0_16px_38px_rgba(31,34,35,0.06)]">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <img src={item.imageSrc} alt={item.imageAlt} className="h-full min-h-[260px] w-full object-cover" />
        <div className="space-y-5 p-6 md:p-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-prilly-coal/54">
              {item.note} · {item.status}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">{item.name}</h3>
          </div>
          <div className="space-y-3 text-sm leading-7 text-prilly-coal/74">
            {item.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="rounded-[1.25rem] border border-black/8 bg-[#faf8f4] p-4">
            <p className="text-sm font-semibold text-prilly-coal">Pour en savoir plus</p>
            <p className="mt-2 text-sm leading-6 text-prilly-coal/72">
              Les Archives communales de Prilly peuvent être consultées pour approfondir l'histoire de ce bâtiment.
              Les ouvrages cités sont disponibles auprès du Greffe communal.
            </p>
            <div className="mt-3 space-y-1 text-sm text-prilly-coal/72">
              <p>Greffe communal</p>
              <p>Tél. +41 21 622 72 11</p>
              <p>greffe@prilly.ch</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MunicipalBuildingsPage() {
  return (
    <section className="container space-y-12 py-8 md:py-10">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Bâtiments communaux" },
        ]}
      />

      <header className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_18px_46px_rgba(31,34,35,0.06)]">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 p-7 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prilly-red">Domaines et bâtiments</p>
            <h1 className="text-4xl font-semibold tracking-tight text-prilly-coal md:text-[3.2rem]">
              Bâtiments communaux
            </h1>
            <p className="max-w-3xl text-base leading-8 text-prilly-coal/74">
              Les bâtiments communaux comprennent notamment un bâtiment administratif, des salles et locaux de
              réunion, des établissements scolaires, des lieux de culte, des immeubles locatifs et des bâtiments
              classés.
            </p>
            <p className="max-w-3xl text-base leading-8 text-prilly-coal/74">
              L'entretien et la gestion de ces bâtiments sont assurés par le service des Domaines et Bâtiments.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 bg-[#f5f3ee] p-6 md:p-8">
            <div className="rounded-[1.4rem] border border-black/8 bg-white p-5">
              <Building2 className="h-6 w-6 text-prilly-red" />
              <p className="mt-3 text-sm font-semibold text-prilly-coal">Bâtiment administratif et divers</p>
            </div>
            <div className="rounded-[1.4rem] border border-black/8 bg-white p-5">
              <Building2 className="h-6 w-6 text-prilly-red" />
              <p className="mt-3 text-sm font-semibold text-prilly-coal">Bâtiments scolaires</p>
            </div>
            <div className="rounded-[1.4rem] border border-black/8 bg-white p-5">
              <Building2 className="h-6 w-6 text-prilly-red" />
              <p className="mt-3 text-sm font-semibold text-prilly-coal">Lieux de culte</p>
            </div>
            <div className="rounded-[1.4rem] border border-black/8 bg-white p-5">
              <Building2 className="h-6 w-6 text-prilly-red" />
              <p className="mt-3 text-sm font-semibold text-prilly-coal">Patrimoine communal classé</p>
            </div>
          </div>
        </div>
      </header>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:items-start">
        <main className="space-y-12">
          <section id="administratif-divers" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Bâtiment administratif et divers"
              title="Bâtiments communaux et locaux d'usage"
              description="Cette section réunit le bâtiment administratif, les bâtiments communaux d'usage courant, les salles et plusieurs équipements exploités par la Commune."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {administrativeBuildings.map((item) => (
                <BuildingCard key={item.name} item={item} />
              ))}
            </div>
          </section>

          <section id="scolaires" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Bâtiments scolaires"
              title="Établissements primaires et secondaires"
              description="La Commune entretient les bâtiments scolaires situés sur son territoire, utilisés par les établissements primaires et secondaires."
            />

            <div className="space-y-5">
              <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">Établissements primaires</h3>
              <div className="grid gap-5 md:grid-cols-2">
                {primarySchools.map((item) => (
                  <BuildingCard key={item.name} item={item} />
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">Établissements secondaires</h3>
              <div className="grid gap-5 md:grid-cols-2">
                {secondarySchools.map((item) => (
                  <BuildingCard key={item.name} item={item} />
                ))}
              </div>
            </div>

            <DirectLinksCard title="Accès directs" links={schoolLinks} />
          </section>

          <section id="cultes" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Lieux de culte"
              title="Bâtiments religieux"
              description="La Commune compte plusieurs lieux de culte et bâtiments paroissiaux sur son territoire."
            />

            <div className="space-y-5">
              <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">Culte protestant</h3>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {protestantPlaces.map((item) => (
                  <BuildingCard key={item.name} item={item} />
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-2xl font-semibold tracking-tight text-prilly-coal">Culte catholique</h3>
              <div className="grid gap-5 md:grid-cols-2">
                {catholicPlaces.map((item) => (
                  <BuildingCard key={item.name} item={item} />
                ))}
              </div>
            </div>

            <DirectLinksCard title="Accès directs" links={cultLinks} />
          </section>

          <section id="locatifs" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Immeubles locatifs"
              title="Gestion locative"
              description="La Ville de Prilly loue, par l'intermédiaire de la gérance Publiaz Immobilier SA, des appartements dans quatre immeubles locatifs situés sur son territoire."
            />

            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <article className="rounded-[1.8rem] border border-black/8 bg-white p-6 shadow-[0_16px_38px_rgba(31,34,35,0.05)] md:p-8">
                <h3 className="text-xl font-semibold text-prilly-coal">Publiaz Immobilier SA</h3>
                <div className="mt-5 space-y-3 text-sm leading-7 text-prilly-coal/74">
                  <p>Rue de Lausanne 51, CP</p>
                  <p>1020 Renens</p>
                  <p>
                    Site :
                    {" "}
                    <a href="https://publiaz.ch/" target="_blank" rel="noreferrer" className="font-medium text-prilly-red hover:underline">
                      www.publiaz.ch
                    </a>
                  </p>
                  <p>E-mail : gerance@publiaz.ch</p>
                  <p>Téléphone : +41 21 633 51 51</p>
                </div>
              </article>

              <DirectLinksCard
                title="Accès directs"
                links={[
                  {
                    label: "Logement / appartements à loyer modéré",
                    href: "/vivre/logement",
                  },
                ]}
              />
            </div>
          </section>

          <section id="patrimoine-classe" className="space-y-8 scroll-mt-32">
            <SectionHeader
              eyebrow="Patrimoine communal classé"
              title="Constructions protégées"
              description="À Prilly, plusieurs constructions communales sont classées ou protégées en raison de leur intérêt historique et patrimonial."
            />

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-[1.8rem] border border-black/8 bg-white p-6 shadow-[0_16px_38px_rgba(31,34,35,0.05)] md:p-8">
                <p className="text-sm leading-7 text-prilly-coal/74">
                  Les bâtiments classés ou inscrits à l'inventaire ne peuvent pas être modifiés sans autorisation
                  spéciale. Le recensement architectural du canton de Vaud permet de consulter les constructions
                  concernées et leur niveau de protection.
                </p>
                <div className="mt-6 grid gap-3">
                  {heritageOverview.map((item) => (
                    <div key={item} className="rounded-[1rem] border border-black/8 bg-[#faf8f4] px-4 py-3 text-sm text-prilly-coal/76">
                      {item}
                    </div>
                  ))}
                </div>
              </article>

              <DirectLinksCard title="Accès directs" links={heritageLinks} />
            </div>

            <div className="space-y-6">
              {heritageDetails.map((item) => (
                <HeritageDetailCard key={item.name} item={item} />
              ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-32">
            <article className="rounded-[1.9rem] border border-black/8 bg-white p-6 shadow-[0_18px_40px_rgba(31,34,35,0.06)] md:p-8">
              <SectionHeader
                eyebrow="Contact"
                title="Exploitation et Gérance"
                description="Renseignements relatifs aux bâtiments communaux, aux salles et aux informations pratiques."
              />
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.25rem] border border-black/8 bg-[#faf8f4] p-4">
                  <p className="flex items-start gap-2 text-sm leading-6 text-prilly-coal/74">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-prilly-red" />
                    <span>
                      Route de Cossonay 40
                      <br />
                      1008 Prilly
                    </span>
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-black/8 bg-[#faf8f4] p-4">
                  <p className="flex items-start gap-2 text-sm leading-6 text-prilly-coal/74">
                    <Mail className="mt-1 h-4 w-4 shrink-0 text-prilly-red" />
                    <span>exploitation@prilly.ch</span>
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-black/8 bg-[#faf8f4] p-4">
                  <p className="flex items-start gap-2 text-sm leading-6 text-prilly-coal/74">
                    <Phone className="mt-1 h-4 w-4 shrink-0 text-prilly-red" />
                    <span>+41 21 622 75 80</span>
                  </p>
                </div>
              </div>
            </article>
          </section>
        </main>

        <PageSideNav sections={pageSections} title="Sur cette page" />
      </div>
    </section>
  );
}
