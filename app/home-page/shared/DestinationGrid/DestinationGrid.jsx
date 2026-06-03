"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./DestinationGrid.module.css";
import { enrichDestinationForPackage } from "../../destinations/destinations";

function formatInr(amount) {
  return new Intl.NumberFormat("en-IN").format(amount);
}

const DestinationGrid = ({
  title,
  destinations,
  variant = "portrait",
  autoSlide = false,
  slideDirection = "left",
  rotateCardsOnOpen = false,
}) => {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [rotateReveal, setRotateReveal] = useState(!rotateCardsOnOpen);
  const [vibrateOnce, setVibrateOnce] = useState(false);

  const isPackage = variant === "package";
  const displayDestinations = isPackage
    ? destinations.map(enrichDestinationForPackage)
    : destinations;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduceMotion(mq.matches);
      if (mq.matches) setRotateReveal(true);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!rotateCardsOnOpen || reduceMotion || isPackage) {
      setRotateReveal(true);
      return;
    }
    const root = sectionRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRotateReveal(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(root);
    return () => io.disconnect();
  }, [rotateCardsOnOpen, reduceMotion, isPackage]);

  useEffect(() => {
    if (!rotateCardsOnOpen || reduceMotion || !rotateReveal || isPackage) return;
    const timer = setTimeout(() => {
      setVibrateOnce(true);
      setTimeout(() => setVibrateOnce(false), 400);
    }, 1200);
    return () => clearTimeout(timer);
  }, [rotateReveal, rotateCardsOnOpen, reduceMotion, isPackage]);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const canScroll = scrollWidth > clientWidth + 4;
    if (!canScroll) {
      setAtStart(true);
      setAtEnd(true);
      return;
    }
    setAtStart(scrollLeft <= 2);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 2);
  }, []);

  useEffect(() => {
    if (autoSlide) return;
    const el = trackRef.current;
    if (!el) return;
    queueMicrotask(() => updateScrollState());
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [displayDestinations, updateScrollState, autoSlide]);

  const scrollByDir = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.max(240, Math.floor(el.clientWidth * 0.85)),
      behavior: "smooth",
    });
  };

  const useAutoLoop = autoSlide && !reduceMotion && displayDestinations.length > 0;
  const rowDestinations = useAutoLoop
    ? [...displayDestinations, ...displayDestinations]
    : displayDestinations;

  const viewportClass = `${styles.carouselViewport} ${autoSlide ? styles.carouselViewportAuto : ""} ${isPackage ? styles.carouselViewportPackage : ""}`;
  const rowClass = [
    styles.carouselRow,
    isPackage ? styles.carouselRowPackage : "",
    useAutoLoop ? styles.carouselRowAuto : "",
    useAutoLoop && slideDirection === "right" ? styles.carouselRowAutoRight : "",
  ]
    .filter(Boolean)
    .join(" ");

  const sectionClass = [
    styles.sectionContainer,
    isPackage ? styles.sectionPackage : styles.sectionShowcase,
    rotateCardsOnOpen ? styles.rotatePopular : "",
    rotateCardsOnOpen && rotateReveal ? styles.rotatePopularReveal : "",
  ]
    .filter(Boolean)
    .join(" ");

  const renderPortraitCard = (item, index) => (
    <article
      key={`${item.id}-${index}`}
      className={`${styles.card} ${rotateCardsOnOpen && vibrateOnce ? styles.vibrateOnce : ""}`}
    >
      <img src={item.image} alt={item.name} className={styles.cardImg} />
      <div className={styles.cardShade} aria-hidden="true" />
      <div className={styles.centerBadge}>
        <span className={styles.pinIcon} aria-hidden="true">
          📍
        </span>
        <span className={styles.locationName}>{item.name}</span>
      </div>
      <p className={styles.tagline}>{item.tagline}</p>
    </article>
  );

  const renderPackageCard = (item, index) => (
    <article key={`${item.id}-${index}`} className={styles.packageCard}>
      <div className={styles.packageImageWrap}>
        <img src={item.image} alt={item.name} className={styles.packageImg} />
        <Link href={item.detailHref} className={styles.viewDetails}>
          View more details
        </Link>
        <div className={styles.carouselDots} aria-hidden="true">
          <span className={`${styles.dot} ${styles.dotActive}`} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>

      <div className={styles.packageBody}>
        <div className={styles.packageMeta}>
          <span className={styles.duration}>{item.duration}</span>
          <span className={styles.rating}>
            <span className={styles.starIcon} aria-hidden="true">
              ★
            </span>
            {item.rating.toFixed(1)} ({item.reviewCount})
          </span>
        </div>

        <h3 className={styles.packageTitle}>{item.packageTitle}</h3>

        <p className={styles.itinerary}>{item.itinerary}</p>

        <div className={styles.priceRow}>
          <span className={styles.originalPrice}>
            INR {formatInr(item.originalPrice)}
          </span>
          <span className={styles.saveBadge}>SAVE INR {formatInr(item.saveAmount)}</span>
          <span className={styles.finalPrice}>
            INR {formatInr(item.price)}
            <span className={styles.perAdult}>/Adult</span>
          </span>
        </div>

        <div className={styles.packageActions}>
          <button type="button" className={styles.phoneBtn} aria-label="Call for details">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button type="button" className={styles.callbackBtn}>
            Request Callback
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <section ref={sectionRef} className={sectionClass}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {!autoSlide && (
          <div className={styles.controls}>
            <button
              type="button"
              className={`${styles.arrowBtn} ${atStart ? styles.arrowMuted : ""}`}
              aria-label="Previous destinations"
              onClick={() => scrollByDir(-1)}
              disabled={atStart && atEnd}
            >
              ←
            </button>
            <button
              type="button"
              className={`${styles.arrowBtn} ${atEnd ? styles.arrowMuted : styles.activeArrow}`}
              aria-label="Next destinations"
              onClick={() => scrollByDir(1)}
              disabled={atStart && atEnd}
            >
              →
            </button>
          </div>
        )}
      </div>

      <div className={viewportClass} ref={autoSlide ? undefined : trackRef}>
        <div className={rowClass}>
          {rowDestinations.map((item, index) =>
            isPackage ? renderPackageCard(item, index) : renderPortraitCard(item, index)
          )}
        </div>
      </div>
    </section>
  );
};

export default DestinationGrid;
