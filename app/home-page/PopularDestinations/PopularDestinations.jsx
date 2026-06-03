import DestinationGrid from "../shared/DestinationGrid/DestinationGrid";
import styles from "./PopularDestinations.module.css";

export default function PopularDestinations({ destinations }) {
  return (
    <section className={styles.section}>
      <DestinationGrid title="Popular Destinations" destinations={destinations} />
    </section>
  );
}
