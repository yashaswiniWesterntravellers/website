import Link from "next/link";
import DestinationGrid from "../components/DestinationGrid";
import { DESTINATIONS } from "../data/destinations";
import styles from "./page.module.css";

export default async function DestinationsPage({ searchParams }) {
  const { region } = await searchParams;
  const normalized = region?.trim();
  const filtered = normalized
    ? DESTINATIONS.filter((d) => d.region.toLowerCase() === normalized.toLowerCase())
    : DESTINATIONS;
  const list = filtered.length ? filtered : DESTINATIONS;
  const title = normalized ? `Destinations — ${normalized}` : "All destinations";

  return (
    <main className={styles.main}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <span>Destinations</span>
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
            : "Browse regions from the menu on the home page, or explore everywhere below."}
        </p>
      </header>

      <DestinationGrid title="Featured places" destinations={list} />
    </main>
  );
}
