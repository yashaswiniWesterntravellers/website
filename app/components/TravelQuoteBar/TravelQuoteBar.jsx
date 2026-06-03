import { TRAVEL_QUOTE, TRAVEL_QUOTE_ARIA } from "../../data/travelQuote";
import styles from "./TravelQuoteBar.module.css";

const QUOTE_BACKGROUND_IMAGE = null;

export default function TravelQuoteBar() {
  const usePhoto = QUOTE_BACKGROUND_IMAGE != null && QUOTE_BACKGROUND_IMAGE.length > 0;
  const className = usePhoto ? `${styles.wrap} ${styles.wrapWithPhoto}` : styles.wrap;
  const style = usePhoto ? { "--quote-photo": `url("${QUOTE_BACKGROUND_IMAGE}")` } : undefined;

  return (
    <aside className={className} style={style} aria-label={TRAVEL_QUOTE_ARIA}>
      <p className={styles.staticFallback}>{TRAVEL_QUOTE}</p>
      <div className={styles.marqueeMask} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeChunk}>{TRAVEL_QUOTE}</span>
          <span className={styles.marqueeChunk}>{TRAVEL_QUOTE}</span>
        </div>
      </div>
    </aside>
  );
}
