import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import { AppShell } from "@/components/layout/app-shell";
import AgendaPage from "@/pages/agenda";
import AgendaDetailPage from "@/pages/agenda/detail";
import NewsPage from "@/pages/actualites";
import NewsDetailPage from "@/pages/actualites/detail";
import ContactIndexPage from "@/pages/contact";
import CommunalDirectoryPage from "@/pages/contact/annuaire";
import ContactDetailPage from "@/pages/contact/pages/detail-page";
import SecurityPreventionPage from "@/pages/contact/securite-prevention";
import ServicesCommunauxPage from "@/pages/contact/services-communaux";
import SearchPage from "@/pages/recherche";
import DemarchesIndexPage from "@/pages/demarches";
import CertificatesPage from "@/pages/demarches/attestations";
import CffCardsPage from "@/pages/demarches/cartes-cff";
import DecheterieCardPage from "@/pages/demarches/carte-decheterie";
import DechetsHubPage from "@/pages/demarches/dechets";
import DogsPage from "@/pages/demarches/chiens";
import NaturalisationPage from "@/pages/demarches/naturalisation";
import WasteCalendarPage from "@/pages/demarches/dechets/pages/calendrier-de-collecte";
import WasteCollectionSitesPage from "@/pages/demarches/dechets/pages/decheteries-et-points-de-collecte";
import WasteContainersPage from "@/pages/demarches/dechets/pages/conteneurs";
import WasteBusinessesPage from "@/pages/demarches/dechets/pages/entreprises";
import WasteBulkyItemsPage from "@/pages/demarches/dechets/pages/encombrants";
import WasteTaxesPage from "@/pages/demarches/dechets/pages/taxes-dechets";
import WasteSortingPage from "@/pages/demarches/dechets/pages/tri-des-dechets";
import DemarcheDetailPage from "@/pages/demarches/pages/detail-page";
import HomePage from "@/pages/home";
import HomeActualitesPage from "@/pages/home/pages/actualites";
import HomeAgendaPage from "@/pages/home/pages/agenda";
import HomeQuickaccèssPage from "@/pages/home/pages/acces-rapides";
import HomeSpotlightsPage from "@/pages/home/pages/a-ne-pas-manquer";
import LoisirsIndexPage from "@/pages/loisirs";
import AgendaCulturelPage from "@/pages/loisirs/agenda-culturel";
import LibraryPage from "@/pages/loisirs/bibliotheque";
import CultureHubPage from "@/pages/loisirs/culture";
import ManifestationsPage from "@/pages/loisirs/manifestations";
import ChristmasMarketPage from "@/pages/loisirs/marche-noel";
import FetonsPrillyPage from "@/pages/loisirs/fetons-prilly";
import CulturalSubsidiesPage from "@/pages/loisirs/subventions";
import FreeActivitiesPage from "@/pages/loisirs/sports-et-loisirs/activites-gratuites";
import YouthCenterPage from "@/pages/loisirs/sports-et-loisirs/centre-de-loisirs";
import SportsFacilitiesPage from "@/pages/loisirs/sports-et-loisirs/equipements-sportifs";
import PoolsPage from "@/pages/loisirs/sports-et-loisirs/piscines";
import SportsLeisureHubPage from "@/pages/loisirs/sports-et-loisirs";
import LocalClubsPage from "@/pages/loisirs/sports-et-loisirs/societes-locales";
import LoisirsDetailPage from "@/pages/loisirs/pages/detail-page";
import ServicesIndexPage from "@/pages/services";
import CemeteryPage from "@/pages/services/cimetieres";
import DomaineCommunalPage from "@/pages/services/domaine-communal";
import MunicipalBuildingsPage from "@/pages/services/batiments-communaux";
import PublicSpacesPage from "@/pages/services/espaces-publics";
import RoomRentalPage from "@/pages/services/location-salles";
import PoliceDesConstructionsPage from "@/pages/services/police-des-constructions";
import AirNoisePage from "@/pages/services/environnement/air-bruit";
import DrainagePage from "@/pages/services/environnement/assainissement";
import GardenCharterPage from "@/pages/services/environnement/charte-des-jardins";
import BiodiversityPage from "@/pages/services/environnement/biodiversite";
import ForestPage from "@/pages/services/environnement/foret";
import EnvironmentHubPage from "@/pages/services/environnement";
import InvasiveSpeciesPage from "@/pages/services/environnement/especes-invasives";
import SolarPage from "@/pages/services/environnement/solaire";
import ServicesDetailPage from "@/pages/services/pages/detail-page";
import IndustrialServicesHubPage from "@/pages/services/services-industriels";
import DistrictHeatingPage from "@/pages/services/services-industriels/pages/chauffage-distance";
import GasPage from "@/pages/services/services-industriels/pages/gaz";
import WaterPage from "@/pages/services/services-industriels/pages/eau-potable";
import ClimatePlanPage from "@/pages/services/plan-climat";
import CffDayPassPage from "@/pages/services/mobilite/cartes-journalieres-cff";
import MobilityHubPage from "@/pages/services/mobilite";
import RidesharingPage from "@/pages/services/mobilite/covoiturage-et-transports-de-personnes";
import ParkingPage from "@/pages/services/mobilite/stationnement";
import PublicTransportPage from "@/pages/services/mobilite/transports-publics";
import BikesPage from "@/pages/services/mobilite/velos";
import WalkingLeisurePage from "@/pages/services/mobilite/pietons-et-loisirs";
import PublicWorksPage from "@/pages/services/travaux-domaine-public";
import ConseilCommunalPage from "@/pages/ville/conseil-communal";
import VilleIndexPage from "@/pages/ville";
import JobOfferDetailPage from "@/pages/ville/offres-emploi-detail";
import JobsPage from "@/pages/ville/offres-emploi";
import JournalCommunalPage from "@/pages/ville/journal-communal";
import MunicipalitePage from "@/pages/ville/municipalite";
import FinancesImpotsPage from "@/pages/ville/finances-impots";
import CommunalArchivesPage from "@/pages/ville/archives-communales";
import EmolumentsSubventionsPage from "@/pages/ville/emoluments-et-subventions";
import VilleDetailPage from "@/pages/ville/pages/detail-page";
import HumanResourcesPage from "@/pages/ville/ressources-humaines";
import VotationsElectionsPage from "@/pages/ville/votations-elections";
import VivreIndexPage from "@/pages/vivre";
import EnfanceEcolesHubPage from "@/pages/vivre/enfance-ecoles";
import EnfanceEcolesDetailPage from "@/pages/vivre/enfance-ecoles/pages/detail-page";
import IntegrationHubPage from "@/pages/vivre/integration";
import ActivitesInterculturellesPage from "@/pages/vivre/integration/pages/activites-interculturelles";
import BienvenueAdressesUtilesPage from "@/pages/vivre/integration/pages/bienvenue-et-adresses-utiles";
import CommissionIntegrationCisipPage from "@/pages/vivre/integration/pages/commission-integration-cisip";
import CoursFrancaisPage from "@/pages/vivre/integration/pages/cours-de-francais";
import NationalitesReligionsPage from "@/pages/vivre/integration/pages/nationalites-et-religions";
import VieQuartierHubPage from "@/pages/vivre/vie-quartier";
import ActivitesQuartierPage from "@/pages/vivre/vie-quartier/pages/activites-de-quartier";
import FemmesEspacesPublicsPage from "@/pages/vivre/vie-quartier/pages/femmes-et-espaces-publics";
import MonQuartierMaVoixPage from "@/pages/vivre/vie-quartier/pages/mon-quartier-ma-voix";
import SeniorsHubPage from "@/pages/vivre/seniors";
import CentreMedicoSocialPage from "@/pages/vivre/seniors/pages/centre-medico-social";
import ProchesAidantsPage from "@/pages/vivre/seniors/pages/proches-aidants";
import ProSenectutePage from "@/pages/vivre/seniors/pages/pro-senectute";
import QuartiersSolidairesPage from "@/pages/vivre/seniors/pages/quartiers-solidaires";
import ServicesSolidaritePage from "@/pages/vivre/seniors/pages/services-solidarite";
import VivreDetailPage from "@/pages/vivre/pages/detail-page";
import HousingPage from "@/pages/vivre/pages/logement";
import InstallingPage from "@/pages/vivre/pages/sinstaller";
import { contactRoutes } from "@/features/contact/data/routes";
import { demarchesRoutes } from "@/features/demarches/data/routes";
import { loisirsRoutes } from "@/features/loisirs/data/routes";
import { servicesRoutes } from "@/features/services/data/routes";
import { villeRoutes } from "@/features/ville/data/routes";
import { vivreRoutes } from "@/features/vivre/data/routes";

export default function App() {
  return (
    <BrowserRouter basename="/commune-prilly">
      <ScrollToTop />
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/agenda/:slug" element={<AgendaDetailPage />} />
          <Route path="/actualites" element={<NewsPage />} />
          <Route path="/actualites/:slug" element={<NewsDetailPage />} />
          <Route path="/home/actualites" element={<HomeActualitesPage />} />
          <Route path="/home/agenda" element={<HomeAgendaPage />} />
          <Route path="/home/accès-rapides" element={<HomeQuickaccèssPage />} />
          <Route path="/home/a-ne-pas-manquer" element={<HomeSpotlightsPage />} />
          <Route path="/vivre" element={<VivreIndexPage />} />
          <Route path="/vivre/sinstaller-a-prilly" element={<Navigate to="/vivre/sinstaller" replace />} />
          <Route path="/vivre/sinstaller" element={<InstallingPage />} />
          <Route path="/vivre/logement" element={<HousingPage />} />
          <Route path="/vivre/enfance-ecoles" element={<EnfanceEcolesHubPage />} />
          <Route path="/vivre/enfance-ecoles/:pageSlug" element={<EnfanceEcolesDetailPage />} />
          <Route path="/vivre/integration" element={<IntegrationHubPage />} />
          <Route path="/vivre/integration/bienvenue-et-adresses-utiles" element={<BienvenueAdressesUtilesPage />} />
          <Route path="/vivre/integration/cours-de-francais" element={<CoursFrancaisPage />} />
          <Route path="/vivre/integration/commission-integration-cisip" element={<CommissionIntegrationCisipPage />} />
          <Route path="/vivre/integration/nationalites-et-religions" element={<NationalitesReligionsPage />} />
          <Route path="/vivre/integration/activites-interculturelles" element={<ActivitesInterculturellesPage />} />
          <Route path="/vivre/seniors" element={<SeniorsHubPage />} />
          <Route path="/vivre/seniors/centre-medico-social" element={<CentreMedicoSocialPage />} />
          <Route path="/vivre/seniors/proches-aidants" element={<ProchesAidantsPage />} />
          <Route path="/vivre/seniors/pro-senectute" element={<ProSenectutePage />} />
          <Route path="/vivre/seniors/quartiers-solidaires" element={<QuartiersSolidairesPage />} />
          <Route path="/vivre/seniors/services-solidarite" element={<ServicesSolidaritePage />} />
          <Route path="/vivre/vie-quartier" element={<VieQuartierHubPage />} />
          <Route path="/vivre/vie-quartier/mon-quartier-ma-voix" element={<MonQuartierMaVoixPage />} />
          <Route path="/vivre/vie-quartier/femmes-et-espaces-publics" element={<FemmesEspacesPublicsPage />} />
          <Route path="/vivre/vie-quartier/activites-de-quartier" element={<ActivitesQuartierPage />} />
          {vivreRoutes
            .filter((item) => !["sinstaller", "logement", "enfance-ecoles", "seniors", "integration", "vie-quartier", "annuaire"].includes(item.slug))
            .map((item) => (
              <Route key={item.path} path={item.path} element={<VivreDetailPage />} />
            ))}
          <Route path="/vivre/annuaire" element={<Navigate to="/contact/annuaire" replace />} />

          <Route path="/demarches" element={<DemarchesIndexPage />} />
          <Route path="/demarches/arrivee-a-prilly" element={<Navigate to="/demarches/arrivee" replace />} />
          <Route path="/demarches/depart-de-prilly" element={<Navigate to="/demarches/depart" replace />} />
          <Route path="/demarches/attestations-documents" element={<Navigate to="/demarches/attestations" replace />} />
          <Route path="/demarches/attestations" element={<CertificatesPage />} />
          <Route path="/demarches/chiens" element={<DogsPage />} />
          <Route path="/demarches/cartes-cff" element={<CffCardsPage />} />
          <Route path="/demarches/carte-decheterie" element={<DecheterieCardPage />} />
          <Route path="/demarches/naturalisation" element={<NaturalisationPage />} />
          <Route path="/demarches/inhumations" element={<Navigate to="/services/cimetieres" replace />} />
          <Route path="/demarches/dechets" element={<DechetsHubPage />} />
          <Route path="/demarches/dechets/calendrier-de-collecte" element={<WasteCalendarPage />} />
          <Route path="/demarches/dechets/decheteries-et-points-de-collecte" element={<WasteCollectionSitesPage />} />
          <Route path="/demarches/dechets/tri-des-dechets" element={<WasteSortingPage />} />
          <Route path="/demarches/dechets/conteneurs" element={<WasteContainersPage />} />
          <Route path="/demarches/dechets/taxes-dechets" element={<WasteTaxesPage />} />
          <Route path="/demarches/dechets/entreprises" element={<WasteBusinessesPage />} />
          <Route path="/demarches/dechets/encombrants" element={<WasteBulkyItemsPage />} />
          <Route path="/demarches/calendrier-collecte" element={<Navigate to="/demarches/dechets/calendrier-de-collecte" replace />} />
          <Route path="/demarches/decheteries" element={<Navigate to="/demarches/dechets/decheteries-et-points-de-collecte" replace />} />
          <Route path="/demarches/points-collecte" element={<Navigate to="/demarches/dechets/decheteries-et-points-de-collecte" replace />} />
          {demarchesRoutes.filter((item) => !["attestations", "chiens", "carte-decheterie", "cartes-cff", "naturalisation", "inhumations", "dechets", "calendrier-collecte", "decheteries", "points-collecte"].includes(item.slug)).map((item) => (
            <Route key={item.path} path={item.path} element={<DemarcheDetailPage />} />
          ))}

          <Route path="/services" element={<ServicesIndexPage />} />
          <Route path="/services/batiments-communaux" element={<MunicipalBuildingsPage />} />
          <Route path="/services/cimetieres" element={<CemeteryPage />} />
          <Route path="/services/domaine-communal" element={<DomaineCommunalPage />} />
          <Route path="/services/location-salles" element={<RoomRentalPage />} />
          <Route path="/services/police-des-constructions" element={<PoliceDesConstructionsPage />} />
          <Route path="/services/mobilite" element={<MobilityHubPage />} />
          <Route path="/services/mobilite/pietons-et-loisirs" element={<WalkingLeisurePage />} />
          <Route path="/services/mobilite/velos" element={<BikesPage />} />
          <Route path="/services/mobilite/transports-publics" element={<PublicTransportPage />} />
          <Route path="/services/mobilite/cartes-journalieres-cff" element={<CffDayPassPage />} />
          <Route path="/services/mobilite/stationnement" element={<ParkingPage />} />
          <Route path="/services/mobilite/covoiturage-et-transports-de-personnes" element={<RidesharingPage />} />
          <Route path="/services/travaux-domaine-public" element={<PublicWorksPage />} />
          <Route path="/services/espaces-publics" element={<PublicSpacesPage />} />
          <Route path="/services/jardins" element={<Navigate to="/services/espaces-publics#jardins-familiaux" replace />} />
          <Route path="/services/environnement" element={<EnvironmentHubPage />} />
          <Route path="/services/environnement/plan-climat" element={<ClimatePlanPage />} />
          <Route path="/services/environnement/biodiversite" element={<BiodiversityPage />} />
          <Route path="/services/environnement/foret" element={<ForestPage />} />
          <Route path="/services/environnement/especes-invasives" element={<InvasiveSpeciesPage />} />
          <Route path="/services/environnement/charte-des-jardins" element={<GardenCharterPage />} />
          <Route path="/services/environnement/assainissement" element={<DrainagePage />} />
          <Route path="/services/environnement/air-bruit" element={<AirNoisePage />} />
          <Route path="/services/environnement/solaire" element={<SolarPage />} />
          <Route path="/services/plan-climat" element={<Navigate to="/services/environnement/plan-climat" replace />} />
          <Route path="/services/biodiversite" element={<Navigate to="/services/environnement/biodiversite" replace />} />
          <Route path="/services/assainissement" element={<Navigate to="/services/environnement/assainissement" replace />} />
          <Route path="/services/air-bruit" element={<Navigate to="/services/environnement/air-bruit" replace />} />
          <Route path="/services/services-industriels" element={<IndustrialServicesHubPage />} />
          <Route path="/services/services-industriels/eau-potable" element={<WaterPage />} />
          <Route path="/services/services-industriels/gaz" element={<GasPage />} />
          <Route path="/services/services-industriels/chauffage-distance" element={<DistrictHeatingPage />} />
          <Route path="/services/pietons" element={<Navigate to="/services/mobilite/pietons-et-loisirs" replace />} />
          <Route path="/services/velos" element={<Navigate to="/services/mobilite/velos" replace />} />
          <Route path="/services/transports-publics" element={<Navigate to="/services/mobilite/transports-publics" replace />} />
          <Route path="/services/voitures" element={<Navigate to="/services/mobilite/stationnement" replace />} />
          <Route path="/services/eau-potable" element={<Navigate to="/services/services-industriels/eau-potable" replace />} />
          <Route path="/services/gaz" element={<Navigate to="/services/services-industriels/gaz" replace />} />
          <Route path="/services/chauffage-distance" element={<Navigate to="/services/services-industriels/chauffage-distance" replace />} />
          {servicesRoutes.filter((item) => !["batiments-communaux", "espaces-publics", "jardins", "cimetieres", "domaine-communal", "location-salles", "police-des-constructions", "mobilite", "transports-publics", "velos", "voitures", "pietons", "travaux-domaine-public", "environnement", "plan-climat", "biodiversite", "especes-invasives", "charte-des-jardins", "assainissement", "air-bruit", "solaire", "services-industriels", "eau-potable", "gaz", "chauffage-distance"].includes(item.slug)).map((item) => (
            <Route key={item.path} path={item.path} element={<ServicesDetailPage />} />
          ))}

          <Route path="/loisirs" element={<LoisirsIndexPage />} />
          <Route path="/loisirs/culture" element={<CultureHubPage />} />
          <Route path="/loisirs/agenda-culturel" element={<AgendaCulturelPage />} />
          <Route path="/loisirs/bibliotheque" element={<LibraryPage />} />
          <Route path="/loisirs/fetons-prilly" element={<FetonsPrillyPage />} />
          <Route path="/loisirs/subventions" element={<CulturalSubsidiesPage />} />
          <Route path="/loisirs/manifestations" element={<ManifestationsPage />} />
          <Route path="/loisirs/marche-noel" element={<ChristmasMarketPage />} />
          <Route path="/loisirs/sports-et-loisirs" element={<SportsLeisureHubPage />} />
          <Route path="/loisirs/sports-et-loisirs/equipements-sportifs" element={<SportsFacilitiesPage />} />
          <Route path="/loisirs/sports-et-loisirs/piscines" element={<PoolsPage />} />
          <Route path="/loisirs/sports-et-loisirs/piscines/fleur-de-lys" element={<Navigate to="/loisirs/sports-et-loisirs/piscines#fleur-de-lys" replace />} />
          <Route path="/loisirs/sports-et-loisirs/piscines/fontadel" element={<Navigate to="/loisirs/sports-et-loisirs/piscines#fontadel" replace />} />
          <Route path="/loisirs/sports-et-loisirs/activites-gratuites" element={<FreeActivitiesPage />} />
          <Route path="/loisirs/sports-et-loisirs/centre-de-loisirs" element={<YouthCenterPage />} />
          <Route path="/loisirs/sports-et-loisirs/societes-locales" element={<LocalClubsPage />} />
          <Route path="/loisirs/sports" element={<Navigate to="/loisirs/sports-et-loisirs" replace />} />
          <Route path="/loisirs/equipements-sportifs" element={<Navigate to="/loisirs/sports-et-loisirs/equipements-sportifs" replace />} />
          <Route path="/loisirs/activites" element={<Navigate to="/loisirs/sports-et-loisirs/activites-gratuites" replace />} />
          <Route path="/loisirs/urban-training" element={<Navigate to="/loisirs/sports-et-loisirs/activites-gratuites#urban-training" replace />} />
          <Route path="/loisirs/associations" element={<Navigate to="/loisirs/sports-et-loisirs/societes-locales" replace />} />
          {loisirsRoutes.filter((item) => !["culture", "agenda-culturel", "bibliotheque", "marche-noel", "fetons-prilly", "subventions", "manifestations", "sports-et-loisirs", "equipements-sportifs", "activites-gratuites", "centre-de-loisirs", "societes-locales"].includes(item.slug)).map((item) => (
            <Route key={item.path} path={item.path} element={<LoisirsDetailPage />} />
          ))}

          <Route path="/ville" element={<VilleIndexPage />} />
          <Route path="/ville/conseil-communal" element={<ConseilCommunalPage />} />
          <Route path="/ville/municipalite" element={<MunicipalitePage />} />
          <Route path="/ville/finances-impots" element={<FinancesImpotsPage />} />
          <Route path="/ville/archives-communales" element={<CommunalArchivesPage />} />
          <Route path="/ville/emoluments-et-subventions" element={<EmolumentsSubventionsPage />} />
          <Route path="/ville/taxes" element={<Navigate to="/ville/finances-impots#taxe-séjour" replace />} />
          <Route path="/ville/budget" element={<Navigate to="/ville/finances-impots#comptes-budget" replace />} />
          <Route path="/ville/stationnement" element={<Navigate to="/services/mobilite/stationnement" replace />} />
          <Route path="/ville/journal-communal" element={<JournalCommunalPage />} />
          <Route path="/ville/prillheraut" element={<Navigate to="/ville/journal-communal" replace />} />
          <Route path="/ville/votations-elections" element={<VotationsElectionsPage />} />
          <Route path="/ville/prochains-scrutins" element={<Navigate to="/ville/votations-elections#prochains-scrutins" replace />} />
          <Route path="/ville/résultats" element={<Navigate to="/ville/votations-elections#résultats" replace />} />
          <Route path="/ville/mode-emploi" element={<Navigate to="/ville/votations-elections#comment-voter" replace />} />
          <Route path="/ville/ressources-humaines" element={<HumanResourcesPage />} />
          <Route path="/ville/offres-emploi" element={<JobsPage />} />
          <Route path="/ville/offres-emploi/:offerSlug" element={<JobOfferDetailPage />} />
          {villeRoutes.filter((item) => !["ressources-humaines", "offres-emploi", "conseil-communal", "municipalite", "finances-impots", "archives-communales", "emoluments-et-subventions", "taxes", "budget", "stationnement", "journal-communal", "votations-elections", "prochains-scrutins", "résultats", "mode-emploi"].includes(item.slug)).map((item) => (
            <Route key={item.path} path={item.path} element={<VilleDetailPage />} />
          ))}

          <Route path="/contact" element={<ContactIndexPage />} />
          <Route path="/contact/annuaire" element={<CommunalDirectoryPage />} />
          <Route path="/contact/general" element={<Navigate to="/contact" replace />} />
          <Route path="/contact/horaires" element={<Navigate to="/contact/services-communaux" replace />} />
          <Route path="/contact/urgences" element={<Navigate to="/contact/securite-prevention" replace />} />
          <Route path="/contact/plan-ville" element={<Navigate to="/contact" replace />} />
          <Route path="/contact/securite-prevention" element={<SecurityPreventionPage />} />
          <Route path="/contact/services-communaux" element={<ServicesCommunauxPage />} />
          <Route path="/contact/annuaire-administration" element={<Navigate to="/contact/annuaire" replace />} />
          {contactRoutes.filter((item) => !["general", "horaires", "urgences", "plan-ville", "securite-prevention", "services-communaux", "annuaire"].includes(item.slug)).map((item) => (
            <Route key={item.path} path={item.path} element={<ContactDetailPage />} />
          ))}
          <Route path="/recherche" element={<SearchPage />} />
          <Route
            path="*"
            element={
              <div className="container py-16 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-prilly-red">
                  Erreur 404
                </p>
                <h1 className="mt-4 text-4xl font-semibold text-prilly-coal">
                  Page introuvable
                </h1>
                <p className="mt-4 text-base text-prilly-coal/70">
                  La page que vous cherchez n’existe pas ou a été déplacée.
                </p>
                <a
                  href="/commune-prilly/"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-prilly-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-prilly-red/90"
                >
                  Retour à l’accueil
                </a>
              </div>
            }
          />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
