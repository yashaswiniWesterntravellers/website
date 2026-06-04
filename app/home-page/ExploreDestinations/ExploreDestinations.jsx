import Link from "next/link";
import DestinationGrid from "../shared/DestinationGrid/DestinationGrid";
import { DESTINATIONS, DOMESTIC_DESTINATIONS } from "../destinations/destinations";
import styles from "./ExploreDestinations.module.css";

export default function ExploreDestinations({ region, packageType }) {
  const normalizedPackage = typeof packageType === "string" ? packageType.trim().toLowerCase() : undefined;
  const normalized = typeof region === "string" ? region.trim() : undefined;

  let list = DESTINATIONS;
  let title = "All destinations";
  let description = "Browse regions from the menu above, or explore everywhere below.";

  if (normalizedPackage === "domestic") {
    const domesticFiltered = normalized
      ? DOMESTIC_DESTINATIONS.filter(
          (d) => d.name.toLowerCase() === normalized.toLowerCase()
        )
      : DOMESTIC_DESTINATIONS;
    list = domesticFiltered.length ? domesticFiltered : DOMESTIC_DESTINATIONS;
    title = normalized
      ? `Domestic — ${normalized.charAt(0).toUpperCase()}${normalized.slice(1)}`
      : "Domestic destinations";
    description = normalized
      ? `Holiday tours in ${normalized.charAt(0).toUpperCase()}${normalized.slice(1)}.`
      : "Holiday tours across India — beaches, hills, and heritage.";
  } else if (normalizedPackage === "international") {
    const filtered = normalized
      ? DESTINATIONS.filter((d) => d.region.toLowerCase() === normalized.toLowerCase())
      : DESTINATIONS;
    list = filtered.length ? filtered : DESTINATIONS;
    title = normalized ? `International — ${normalized}` : "International destinations";
    description = normalized
      ? `Places we love in ${normalized}.`
      : "Explore the world with curated international packages.";
  } else {
    const filtered = normalized
      ? DESTINATIONS.filter((d) => d.region.toLowerCase() === normalized.toLowerCase())
      : DESTINATIONS;
    list = filtered.length ? filtered : DESTINATIONS;
    title = normalized ? `Destinations — ${normalized}` : "All destinations";
    description = normalized
      ? `Places we love in ${normalized}.`
      : "Browse regions from the menu above, or explore everywhere below.";
  }

  return (
    <section id="destinations" className={styles.section}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link href="/#destinations">Destinations</Link>
        {normalized ? (
          <>
            <span aria-hidden="true"> / </span>
            <span>{normalized}</span>
          </>
        ) : null}
      </nav>

      <header className={styles.pageHeader}>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <DestinationGrid title="Explore destinations" destinations={list} variant="package" />
    </section>
  );
}
