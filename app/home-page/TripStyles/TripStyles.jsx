"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./TripStyles.module.css";

const HERO_IMAGE = "/HeroImage.png";
const HERO_FALLBACK = "https://images.unsplash.com/photo-1523987355523-c7bae5e99d71?auto=format&fit=crop&w=800&q=80";

const leftCategories = [
  { id: "couple", title: "Couple" },
  { id: "family", title: "Family" },
];

const rightCategories = [
  { id: "friends", title: "Friends" },
  { id: "solo", title: "Solo" },
];

const overlayChips = [
  { id: "dest", label: "Destinations", icon: "✈" },
  { id: "loc", label: "Location", icon: "📍" },
  { id: "date", label: "Date", icon: "📅" },
  { id: "price", label: "Prices", icon: "$" },
];

const TripStyles = () => {
  const [heroSrc, setHeroSrc] = useState(HERO_IMAGE);
  const [revealed, setRevealed] = useState(false);
  const [zoomed, setZoomed] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setRevealed(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const zoomProps = (id) => ({
    onMouseEnter: () => setZoomed(id),
    onMouseLeave: () => setZoomed(null),
    onTouchStart: () => setZoomed(id),
    onTouchEnd: () => setTimeout(() => setZoomed(null), 350),
  });

  return (
    <section ref={sectionRef} className={styles.outer}>
      <div className={styles.panel}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleWhite}>Choose Your </span>
          <span className={styles.titleGradient}>Trip Style</span>
        </h2>

        <div className={styles.layout}>
          <div className={`${styles.sideColumn} ${styles.leftColumn}`}>
            {leftCategories.map((cat, i) => (
              <article
                key={cat.id}
                {...zoomProps(cat.id)}
                className={[styles.categoryBlock, revealed ? styles.slideInLeft : styles.hidden, zoomed === cat.id ? styles.zoomed : ""].join(" ")}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <h3 className={styles.categoryTitle}>{cat.title}</h3>
                <p className={styles.categoryDesc}>We provide the best travel services for you</p>
                <div className={`${styles.detailsRow} ${styles.detailsRowEnd}`}>
                  <span className={styles.detailsLink}>Details</span>
                  <button type="button" className={styles.arrowCircle} aria-label={`${cat.title} details`}>→</button>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.centerColumn}>
            <div className={styles.imageFrame}>
              <img
                className={styles.heroImage}
                src={heroSrc}
                alt="Travel trip style"
                width={700}
                height={875}
                loading="eager"
                decoding="async"
                onError={() => setHeroSrc((prev) => (prev === HERO_FALLBACK ? prev : HERO_FALLBACK))}
              />
              <div className={styles.overlayChips} aria-hidden="true">
                {overlayChips.map((chip) => (
                  <div key={chip.id} className={styles.chip}>
                    <span className={styles.chipIcon}>{chip.icon}</span>
                    <span className={styles.chipLabel}>{chip.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`${styles.sideColumn} ${styles.rightColumn}`}>
            {rightCategories.map((cat, i) => (
              <article
                key={cat.id}
                {...zoomProps(cat.id)}
                className={[styles.categoryBlock, revealed ? styles.slideInRight : styles.hidden, zoomed === cat.id ? styles.zoomed : ""].join(" ")}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <h3 className={styles.categoryTitle}>{cat.title}</h3>
                <p className={styles.categoryDesc}>We provide the best travel services for you</p>
                <div className={`${styles.detailsRow} ${styles.detailsRowStart}`}>
                  <span className={styles.detailsLink}>Details</span>
                  <button type="button" className={styles.arrowCircle} aria-label={`${cat.title} details`}>→</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripStyles;
