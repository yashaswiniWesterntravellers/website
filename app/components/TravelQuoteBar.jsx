import styles from "./TravelQuoteBar.module.css";

const QUOTE_BACKGROUND_IMAGE = null;

const QUOTE = "\u201cWhile many collect passport stamps 🛂, I prefer collecting meaningful moments — the kind that stay long after the journey ends ✨\u201d";
const QUOTE_ARIA = "While many collect passport stamps, I prefer collecting meaningful moments — the kind that stay long after the journey ends.";

export default function TravelQuoteBar() {
  const usePhoto = QUOTE_BACKGROUND_IMAGE != null && QUOTE_BACKGROUND_IMAGE.length > 0;
  const className = usePhoto ? `${styles.wrap} ${styles.wrapWithPhoto}` : styles.wrap;
  const style = usePhoto ? { "--quote-photo": `url("${QUOTE_BACKGROUND_IMAGE}")` } : undefined;

  return (
    <aside className={className} style={style} aria-label={QUOTE_ARIA}>
      <p className={styles.staticFallback}>{QUOTE}</p>
      <div className={styles.marqueeMask} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeChunk}>{QUOTE}</span>
          <span className={styles.marqueeChunk}>{QUOTE}</span>
        </div>
      </div>
    </aside>
  );
}
