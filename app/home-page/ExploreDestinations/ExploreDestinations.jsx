import Link from "next/link";
import DestinationGrid from "../shared/DestinationGrid/DestinationGrid";
import { DESTINATIONS } from "../destinations/destinations";
import styles from "./ExploreDestinations.module.css";

export default function ExploreDestinations({ region }) {
  const normalized = typeof region === "string" ? region.trim() : undefined;
  const filtered = normalized
    ? DESTINATIONS.filter((d) => d.region.toLowerCase() === normalized.toLowerCase())
    : DESTINATIONS;
  const list = filtered.length ? filtered : DESTINATIONS;
  const title = normalized ? `Destinations — ${normalized}` : "All destinations";

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
        <p>
          {normalized
            ? `Places we love in ${normalized}.`
            : "Browse regions from the menu above, or explore everywhere below."}
        </p>
      </header>

      <DestinationGrid title="Explore destinations" destinations={list} variant="package" />
    </section>
  );
}
