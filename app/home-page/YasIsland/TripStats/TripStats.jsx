"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TripStats.module.css";

const STATS = [
  {
    id: "destinations",
    end: 50,
    suffix: "+",
    label: "Destinations Covered",
  },
  {
    id: "packages",
    end: 200,
    suffix: "+",
    label: "Holiday Packages",
  },
  {
    id: "satisfaction",
    end: 99,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

function StatCard({
  end,
  suffix,
  label,
  started,
  reduceMotion,
  cardClass,
  valueClass,
  labelClass,
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setValue(end);
      return;
    }
    if (!started) return;

    const duration = 2000;
    let frameId;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * end));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started, end, reduceMotion]);

  return (
    <article className={cardClass}>
      <p className={valueClass}>
        {value}
        {suffix}
      </p>
      <p className={labelClass}>{label}</p>
    </article>
  );
}

export default function TripStats({ variant = "standalone" }) {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const isBanner = variant === "banner";

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduceMotion(mq.matches);
      if (mq.matches) setStarted(true);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion]);

  const sectionClass = isBanner ? styles.sectionBanner : styles.section;
  const gridClass = isBanner ? styles.gridBanner : styles.grid;
  const cardClass = isBanner ? styles.cardBanner : styles.card;
  const valueClass = isBanner ? styles.valueBanner : styles.value;
  const labelClass = isBanner ? styles.labelBanner : styles.label;

  return (
    <section
      ref={sectionRef}
      className={sectionClass}
      aria-label="Travel highlights"
    >
      <div className={gridClass}>
        {STATS.map((stat) => (
          <StatCard
            key={stat.id}
            {...stat}
            started={started}
            reduceMotion={reduceMotion}
            cardClass={cardClass}
            valueClass={valueClass}
            labelClass={labelClass}
          />
        ))}
      </div>
    </section>
  );
}
