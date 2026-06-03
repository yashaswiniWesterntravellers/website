"use client";

import { useState } from "react";
import styles from "./TripStylePicker.module.css";
import {
  DEFAULT_BRAND,
  DEFAULT_TRIP_STYLES,
  tripStyleDescription,
  tripStyleEyebrow,
  tripStyleSectionId,
} from "./tripStyleContent";

export {
  DEFAULT_BRAND,
  DEFAULT_TRIP_STYLES,
  tripStyleDescription,
  tripStyleEyebrow,
  tripStyleSectionId,
} from "./tripStyleContent";

/**
 * Reusable trip-style picker. Trip cards & layout stay the same; pass `location` to swap copy.
 *
 * @example
 * <TripStylePicker location="Bali" onSelect={(id) => console.log(id)} />
 * <TripStylePicker location="Thailand" />
 */
export default function TripStylePicker({
  location,
  brandName = DEFAULT_BRAND,
  tripStyles = DEFAULT_TRIP_STYLES,
  sectionId,
  eyebrow,
  description,
  selectedStyle: controlledSelected,
  onSelect,
  /** When false, cards are display-only (no click, highlight, or navigation). */
  interactive = true,
  className,
}) {
  const [internalSelected, setInternalSelected] = useState(null);
  const isControlled = controlledSelected !== undefined;
  const selectedStyle = interactive && isControlled ? controlledSelected : interactive ? internalSelected : null;

  const resolvedSectionId = sectionId ?? tripStyleSectionId(location);
  const headingId = `${resolvedSectionId}-heading`;
  const resolvedEyebrow = eyebrow ?? tripStyleEyebrow(location, brandName);
  const resolvedDescription = description ?? tripStyleDescription(location);

  const handleSelect = (styleId) => {
    if (!interactive) return;
    if (!isControlled) {
      setInternalSelected(styleId);
    }
    onSelect?.(styleId);
  };

  return (
    <section
      id={resolvedSectionId}
      className={`${styles.section} ${className ?? ""}`.trim()}
      aria-labelledby={headingId}
    >
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>{resolvedEyebrow}</p>
          <h2 id={headingId} className={styles.heading}>
            Select <span className={styles.headingAccent}>one</span>
          </h2>
          <p className={styles.lead}>{resolvedDescription}</p>
          <span className={styles.divider} aria-hidden="true" />
        </header>

        <div className={styles.grid} role="list">
          {tripStyles.map((item, index) => {
            const isSelected = interactive && selectedStyle === item.id;
            const cardClass = [
              styles.card,
              !interactive && styles.cardStatic,
              isSelected && styles.cardSelected,
            ]
              .filter(Boolean)
              .join(" ");

            const cardContent = (
              <>
                {isSelected ? (
                  <span className={styles.cardCheck} aria-hidden="true">
                    ✓
                  </span>
                ) : null}
                <span className={styles.cardIcon} aria-hidden="true">
                  {item.icon}
                </span>
                <span className={styles.cardLabel}>{item.label}</span>
                <span className={styles.cardHint}>{item.hint}</span>
              </>
            );

            if (!interactive) {
              return (
                <div
                  key={item.id}
                  role="listitem"
                  data-style={item.id}
                  className={cardClass}
                  style={{ animationDelay: `${index * 0.07}s` }}
                >
                  {cardContent}
                </div>
              );
            }

            return (
              <button
                key={item.id}
                type="button"
                data-style={item.id}
                className={cardClass}
                style={{ animationDelay: `${index * 0.07}s` }}
                onClick={() => handleSelect(item.id)}
                aria-pressed={isSelected}
              >
                {cardContent}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
