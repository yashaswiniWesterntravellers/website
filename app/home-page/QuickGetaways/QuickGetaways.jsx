import DestinationGrid from "../shared/DestinationGrid/DestinationGrid";
import styles from "./QuickGetaways.module.css";

export default function QuickGetaways({ destinations }) {
  return (
    <section className={styles.section}>
      <DestinationGrid title="Quick Getaways" destinations={destinations} />
    </section>
  );
}
