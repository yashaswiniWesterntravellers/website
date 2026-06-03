"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import styles from "./About.module.css";

const ABOUT_US_IMAGE = "/aboutusmain.webp";
const ABOUT_IMAGE_2 = "/AboutImage2.webp";

const TRAVEL_STATS = [
  { value: 50, suffix: "+", label: "Destinations Covered" },
  { value: 200, suffix: "+", label: "Holiday Packages" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

function useCountUp(target, runKey, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (runKey === 0) return;

    setCount(0);

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setCount(target);
      return;
    }

    let frameId = 0;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration, runKey]);

  return count;
}

function StatCard({ value, suffix, label, runKey }) {
  const count = useCountUp(value, runKey);

  return (
    <div className={styles.statCard}>
      <p className={styles.statValue}>
        <span className={styles.statNumber}>{count}</span>
        <span className={styles.statSuffix}>{suffix}</span>
      </p>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
}

export default function About() {
  const [showTop, setShowTop] = useState(false);
  const [statsRunKey, setStatsRunKey] = useState(1);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={styles.page}>
      <Navbar variant="hero" />

      <main className={styles.main} id="main-content">
        <header className={styles.pageHeader}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">
              /
            </span>
            <span className={styles.breadcrumbCurrent}>About Us</span>
          </nav>
          <h1 className={`${styles.title} wt-heading wt-heading-xl wt-fade-up`}>
            <span className="wt-gradient-fire">About</span>{" "}
            <span className="wt-gradient-sunset">Us</span>
          </h1>
          <span className={`${styles.titleUnderline} wt-shine-line`} aria-hidden="true" />
        </header>

        <div className={styles.introWrap}>
          <p className={styles.intro}>
            <span className={styles.introLine}>
              At Western Travellers, we take pride in delivering memorable holiday experiences across India and abroad.
            </span>
            <span className={styles.introLine}>
              Based in BTM Layout, Bangalore, our approach is rooted in quality service, transparent pricing,
            </span>
            <span className={styles.introLine}>
              and packages tailored to every kind of traveller — from quick getaways to full vacation plans.
            </span>
          </p>
        </div>

        <div className={styles.pageBody}>
          <section
            className={styles.mainContentSection}
            aria-label="About Western Travellers"
          >
            <div className={styles.imageColumn}>
              <div className={`${styles.imageFrame} ${styles.leftImageWrap}`}>
                <img
                  src={ABOUT_US_IMAGE}
                  alt="Western Travellers team"
                  width={760}
                  height={560}
                  className={styles.leftImage}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            <div className={styles.contentColumn}>
              <div className={styles.timeline}>
                <article className={styles.timelineItem}>
                  <span className={`${styles.timelineDot} ${styles.dotApproach}`} aria-hidden="true" />
                  <div>
                    <h2 className={styles.sectionHeading}>Our Approach</h2>
                    <div className={styles.timelineContentBox}>
                      <p className={styles.bodyText}>
                        We follow a traveller-first methodology — listening to your dates, budget, and
                        destinations, then building holiday tour packages that fit. From domestic trips to
                        international tours, we handle planning, bookings, and support so you can focus on
                        the journey.
                      </p>
                      <p className={styles.bodyText}>
                        Visit us at <strong>Ns Palya, BTM Layout 2nd Stage, Bangalore</strong>, or reach
                        out for tour packages across Bangalore and beyond.
                      </p>
                    </div>
                  </div>
                </article>

                <article className={styles.timelineItem}>
                  <span className={`${styles.timelineDot} ${styles.dotMission}`} aria-hidden="true" />
                  <div>
                    <h2 className={styles.sectionHeading}>Mission</h2>
                    <div className={styles.timelineContentBox}>
                      <p className={styles.bodyText}>
                        Our mission is to make holiday travel simple and reliable for families, couples,
                        and groups — offering curated tour packages, visa-friendly destinations, and
                        honest guidance at every step.
                      </p>
                    </div>
                  </div>
                </article>

                <article className={styles.timelineItem}>
                  <span className={`${styles.timelineDot} ${styles.dotVision}`} aria-hidden="true" />
                  <div>
                    <h2 className={styles.sectionHeading}>Vision</h2>
                    <div className={styles.timelineContentBox}>
                      <p className={styles.bodyText}>
                        To be Bangalore&apos;s trusted name in holiday tour packages — known for
                        personalised service, strong partner networks, and journeys that turn into
                        lasting memories.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section
            className={styles.highlightsSection}
            aria-labelledby="travel-highlights-heading"
          >
            <div className={styles.highlightsContent}>
              <div className={styles.contentHighlight}>
                <h2 id="travel-highlights-heading" className={styles.contentHighlightHeading}>
                  <span className={styles.highlightsTitleLead}>Travel with</span>
                  <span className={styles.highlightsTitleBrand}>Western Travellers</span>
                </h2>
                <div className={styles.highlightGrid}>
                  <div className={styles.highlightCard}>
                    <span className={styles.highlightLabel}>Domestic</span>
                    <p>Weekend escapes &amp; India tour packages</p>
                  </div>
                  <div className={styles.highlightCard}>
                    <span className={styles.highlightLabel}>International</span>
                    <p>Europe, Middle East, Asia &amp; beyond</p>
                  </div>
                  <div className={styles.highlightCard}>
                    <span className={styles.highlightLabel}>Visa-free</span>
                    <p>Quick trips with minimal paperwork</p>
                  </div>
                  <div className={styles.highlightCard}>
                    <span className={styles.highlightLabel}>Custom</span>
                    <p>Tailored plans for your dates &amp; budget</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.highlightsImageColumn}>
              <div className={`${styles.imageFrame} ${styles.highlightsImageWrap}`}>
                <img
                  src={ABOUT_IMAGE_2}
                  alt="Travel destinations with Western Travellers"
                  width={520}
                  height={620}
                  className={styles.highlightsImage}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </section>

          <section
            className={styles.ourTravelsSection}
            aria-labelledby="our-travels-heading"
          >
            <div className={styles.ourTravelsGrid}>
              <div className={styles.ourTravelsContent}>
                <div className={styles.contentHighlight}>
                  <h2 id="our-travels-heading" className={styles.contentHighlightHeading}>
                    Our Travels
                  </h2>
                  <p className={styles.highlightBodyText}>
                    Whether you dream of Europe, Asia, Africa, the Americas, or Oceania — we plan flights,
                    stays, and experiences so you travel with confidence. Explore visa-free getaways,
                    honeymoon routes, family holidays, and curated trips from our Bangalore office.
                  </p>
                  <ul className={styles.highlightList}>
                    <li>International &amp; domestic holiday tour packages</li>
                    <li>Dubai, Singapore, Bali, Australia &amp; more popular routes</li>
                    <li>Visa-free destinations, quick getaways &amp; custom itineraries</li>
                    <li>Honeymoon, family, summer &amp; winter vacation plans</li>
                  </ul>
                  <Link href="/#destinations" className={styles.exploreBtn}>
                    Explore destinations →
                  </Link>
                </div>
              </div>

              <div className={styles.statsColumn} aria-label="Travel statistics">
                {TRAVEL_STATS.map((stat) => (
                  <StatCard
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    runKey={statsRunKey}
                  />
                ))}
              </div>
            </div>
          </section>

          <section
            className={styles.servicesSection}
            aria-labelledby="services-heading"
          >
            <div className={styles.contentHighlight}>
              <h2 id="services-heading" className={styles.contentHighlightHeading}>
                What we offer
              </h2>
              <ul className={styles.highlightList}>
                <li>Holiday tour packages — domestic &amp; international</li>
                <li>Custom itineraries for Europe, Asia, Africa, Americas &amp; Oceania</li>
                <li>Visa-free &amp; quick getaway options</li>
                <li>Family, honeymoon, summer &amp; winter vacation plans</li>
              </ul>
            </div>
          </section>

          <p className={styles.sourceNote}>
            <Link href="/">Back to home</Link>
            {" · "}
            <Link href="/#destinations">View destinations</Link>
            {" · "}
            Western Travellers — Tour packages in BTM Layout, Bangalore
          </p>
        </div>
      </main>

      <button
        type="button"
        className={`${styles.scrollTop} ${showTop ? styles.scrollTopVisible : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}
