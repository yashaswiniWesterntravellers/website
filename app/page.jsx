import styles from "./page.module.css";
import "./home-page/home-mobile.css";
import HeroSection from "./home-page/HeroSection/HeroSection";
import ExploreDestinations from "./home-page/ExploreDestinations/ExploreDestinations";
import YasIsland from "./home-page/YasIsland/YasIsland";
import PopularDestinations from "./home-page/PopularDestinations/PopularDestinations";
import QuickGetaways from "./home-page/QuickGetaways/QuickGetaways";
import TripStyles from "./home-page/TripStyles/TripStyles";
import VisaFreeDestinations from "./home-page/VisaFreeDestinations/VisaFreeDestinations";
import { HOME_SHOWCASE } from "./home-page/destinations/destinations";

const HOME_CTA_BANNER_IMAGE = "/yas-island-cta.png";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const raw = params?.region;
  const region = typeof raw === "string" ? raw : (Array.isArray(raw) ? raw[0] : undefined);
  const rawPackage = params?.package;
  const packageType =
    typeof rawPackage === "string" ? rawPackage : Array.isArray(rawPackage) ? rawPackage[0] : undefined;

  return (
    <main className={`${styles.mainWrapper} home-page-root`}>
      <HeroSection />
      <ExploreDestinations region={region} packageType={packageType} />
      <YasIsland imageSrc={HOME_CTA_BANNER_IMAGE} />
      <PopularDestinations destinations={HOME_SHOWCASE} />
      <QuickGetaways destinations={HOME_SHOWCASE} />
      <TripStyles />
      <VisaFreeDestinations />
    </main>
  );
}
