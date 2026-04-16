"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./DestinationGrid.module.css";

const DestinationGrid = ({
  title,
  destinations,
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

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => { setReduceMotion(mq.matches); if (mq.matches) setRotateReveal(true); };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!rotateCardsOnOpen || reduceMotion) { setRotateReveal(true); return; }
    const root = sectionRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setRotateReveal(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(root);
    return () => io.disconnect();
  }, [rotateCardsOnOpen, reduceMotion]);

  useEffect(() => {
    if (!rotateCardsOnOpen || reduceMotion || !rotateReveal) return;
    const timer = setTimeout(() => {
      setVibrateOnce(true);
      setTimeout(() => setVibrateOnce(false), 400);
    }, 1200);
    return () => clearTimeout(timer);
  }, [rotateReveal, rotateCardsOnOpen, reduceMotion]);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const canScroll = scrollWidth > clientWidth + 4;
    if (!canScroll) { setAtStart(true); setAtEnd(true); return; }
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
    return () => { el.removeEventListener("scroll", updateScrollState); ro.disconnect(); };
  }, [destinations, updateScrollState, autoSlide]);

  const scrollByDir = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(240, Math.floor(el.clientWidth * 0.85)), behavior: "smooth" });
  };

  const useAutoLoop = autoSlide && !reduceMotion && destinations.length > 0;
  const rowDestinations = useAutoLoop ? [...destinations, ...destinations] : destinations;

  const viewportClass = `${styles.carouselViewport} ${autoSlide ? styles.carouselViewportAuto : ""}`;
  const rowClass = [
    styles.carouselRow,
    useAutoLoop ? styles.carouselRowAuto : "",
    useAutoLoop && slideDirection === "right" ? styles.carouselRowAutoRight : "",
  ].filter(Boolean).join(" ");

  const sectionClass = [
    styles.sectionContainer,
    rotateCardsOnOpen ? styles.rotatePopular : "",
    rotateCardsOnOpen && rotateReveal ? styles.rotatePopularReveal : "",
  ].filter(Boolean).join(" ");

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
            >←</button>
            <button
              type="button"
              className={`${styles.arrowBtn} ${atEnd ? styles.arrowMuted : styles.activeArrow}`}
              aria-label="Next destinations"
              onClick={() => scrollByDir(1)}
              disabled={atStart && atEnd}
            >→</button>
          </div>
        )}
      </div>

      <div className={viewportClass} ref={autoSlide ? undefined : trackRef}>
        <div className={rowClass}>
          {rowDestinations.map((item, index) => (
            <article key={`${item.id}-${index}`} className={`${styles.card} ${rotateCardsOnOpen && vibrateOnce ? styles.vibrateOnce : ""}`}>
              <img src={item.image} alt={item.name} className={styles.cardImg} />
              <div className={styles.cardShade} aria-hidden="true" />
              <div className={styles.centerBadge}>
                <span className={styles.pinIcon} aria-hidden="true">📍</span>
                <span className={styles.locationName}>{item.name}</span>
              </div>
              <p className={styles.tagline}>{item.tagline}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationGrid;
