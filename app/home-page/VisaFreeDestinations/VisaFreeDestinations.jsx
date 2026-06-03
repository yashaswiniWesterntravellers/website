"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { VISA_FREE_CARDS } from "./visaFreeDestinations";
import styles from "./VisaFreeDestinations.module.css";

const slotClass = {
  leftTop: styles.slotLeftTop,
  leftBottom: styles.slotLeftBottom,
  center: styles.slotCenter,
  rightTop: styles.slotRightTop,
  rightBottom: styles.slotRightBottom,
};

function setGlowFromEvent(el, clientX, clientY) {
  const r = el.getBoundingClientRect();
  el.style.setProperty("--gx", `${((clientX - r.left) / r.width) * 100}%`);
  el.style.setProperty("--gy", `${((clientY - r.top) / r.height) * 100}%`);
}

const VisaFreeDestinations = ({ cards = VISA_FREE_CARDS }) => {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);
  const [revealed, setRevealed] = useState(false);

  const updateScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const can = scrollWidth > clientWidth + 4;
    if (!can) { setAtStart(true); setAtEnd(true); return; }
    setAtStart(scrollLeft <= 2);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScroll();
    el.addEventListener("scroll", updateScroll, { passive: true });
    const ro = new ResizeObserver(updateScroll);
    ro.observe(el);
    return () => { el.removeEventListener("scroll", updateScroll); ro.disconnect(); };
  }, [updateScroll]);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); io.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(280, el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section id="visa-free" ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <div className={`${styles.header} ${revealed ? styles.headerRevealed : ""}`}>
          <h2 className={styles.title}>Visa free destinations</h2>
          <div className={styles.controls}>
            <button type="button" className={`${styles.arrow} ${atStart ? styles.arrowMuted : ""}`} aria-label="Previous" onClick={() => scrollBy(-1)} disabled={atStart && atEnd}>←</button>
            <button type="button" className={`${styles.arrow} ${atEnd ? styles.arrowMuted : styles.arrowActive}`} aria-label="Next" onClick={() => scrollBy(1)} disabled={atStart && atEnd}>→</button>
          </div>
        </div>

        <div className={styles.viewport} ref={trackRef}>
          <div className={`${styles.mosaic} ${revealed ? styles.mosaicRevealed : ""}`}>
            {cards.map((card) => (
              <article
                key={card.id}
                className={`${styles.card} ${slotClass[card.slot]}`}
                onMouseMove={(e) => setGlowFromEvent(e.currentTarget, e.clientX, e.clientY)}
                onMouseLeave={(e) => { e.currentTarget.style.removeProperty("--gx"); e.currentTarget.style.removeProperty("--gy"); }}
              >
                <img className={styles.cardImg} src={card.image} alt={card.name} loading="lazy" />
                <div className={styles.cardShade} aria-hidden="true" />
                <div className={styles.pill}>
                  <span className={styles.pin} aria-hidden="true">📍</span>
                  <span className={styles.pillName}>{card.name}</span>
                </div>
                <p className={styles.price}>From ₹{card.priceFrom}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaFreeDestinations;
