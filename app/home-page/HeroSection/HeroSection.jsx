"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import { TRAVEL_QUOTE, TRAVEL_QUOTE_ARIA } from "../../data/travelQuote";
import styles from "./HeroSection.module.css";

const HERO_BACKGROUND = "/Background%202.jpg";

const HERO_QUICK_LINKS = [
  { label: "Bali", href: "/balii", icon: "🏝️" },
  { label: "Thailand", href: "/?region=thailand", icon: "🇹🇭" },
  { label: "Singapore", href: "/?region=singapore", icon: "🇸🇬" },
  { label: "Honeymoon", href: "/balii#bali-trip-styles", icon: "♥" },
  { label: "Visa-free", href: "/#destinations", icon: "✦" },
];

/* ── Destination strip icons ── */

function StripIconShell({ children }) {
  return (
    <svg className={styles.stripDestIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </svg>
  );
}

function ThailandIcon() {
  return (
    <StripIconShell>
      <path d="M24 8v28" />
      <path d="M18 14h12l-2 4H20l-2 4h12l-2 4H20l-2 4h12" />
      <path d="M20 8c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5" />
      <path d="M16 36h16" />
    </StripIconShell>
  );
}

function VietnamIcon() {
  return (
    <StripIconShell>
      <path d="M10 32h28" />
      <path d="M14 32c2-4 6-8 10-8s8 4 10 8" />
      <path d="M22 20c0-3 1.5-5 4-5" />
      <path d="M26 15c2 0 3.5 1.5 3.5 3.5S28 22 26 22" />
      <path d="M20 15l6-3 4 2" />
    </StripIconShell>
  );
}

function NorwayIcon() {
  return (
    <StripIconShell>
      <path d="M10 30V18l6-6 6 6v12" />
      <path d="M20 30V14l5-5 5 5v16" />
      <path d="M30 30V20l4-4 4 4v10" />
      <path d="M8 30h32" />
      <path d="M13 22h2M23 18h2M33 24h2" />
    </StripIconShell>
  );
}

function RajasthanIcon() {
  return (
    <StripIconShell>
      <path d="M12 36V16c0-2 2.5-4 6-4h12c3.5 0 6 2 6 4v20" />
      <path d="M15 36V22h3v14M21 36V18h6v18M30 36V26h3v10" />
      <path d="M12 16h24" />
    </StripIconShell>
  );
}

function BaliIcon() {
  return (
    <StripIconShell>
      <path d="M24 10v28" />
      <path d="M14 14h20" />
      <path d="M12 14l-3 6h6l-3-6zM36 14l3 6h-6l3-6z" />
      <path d="M16 38h16" />
      <path d="M18 10c0-2.5 2-4.5 6-4.5s6 2 6 4.5" />
    </StripIconShell>
  );
}

function KeralaIcon() {
  return (
    <StripIconShell>
      <path d="M8 34h32" />
      <path d="M12 34c2-6 6-10 12-10s10 4 12 10" />
      <path d="M14 28h20v6H14z" />
      <path d="M34 18c0-3 1.5-5 4-5 1 0 2 .5 2.5 1.5" />
      <path d="M36 14v8" />
    </StripIconShell>
  );
}

function LadakhIcon() {
  return (
    <StripIconShell>
      <path d="M6 34L18 14l6 8 6-8 12 20" />
      <path d="M6 34h36" />
      <path d="M22 18h4v8h-4zM20 26h8" />
    </StripIconShell>
  );
}

function KashmirIcon() {
  return (
    <StripIconShell>
      <path d="M8 30h32" />
      <path d="M14 30c1-5 4-9 10-9s9 4 10 9" />
      <path d="M18 26h12l-2 4H20z" />
      <path d="M22 22v4M26 20v6" />
    </StripIconShell>
  );
}

function USAIcon() {
  return (
    <StripIconShell>
      <path d="M24 10v24" />
      <path d="M20 14h8M19 18h10M18 22h12M17 26h14M16 30h16" />
      <path d="M20 10c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5" />
      <path d="M22 34h4" />
    </StripIconShell>
  );
}

function BhutanIcon() {
  return (
    <StripIconShell>
      <path d="M14 36V18l10-8 10 8v18" />
      <path d="M14 36h20" />
      <path d="M20 28h8M22 22h4" />
      <path d="M18 18h12" />
    </StripIconShell>
  );
}

function SpitiValleyIcon() {
  return (
    <StripIconShell>
      <path d="M18 14c0-3 2.5-5 6-5s6 2 6 5v4c0 2-1.5 3.5-3.5 4.5" />
      <path d="M24 23v13" />
      <path d="M18 32c2 2 4 3 6 3s4-1 6-3" />
      <path d="M14 36h20" />
    </StripIconShell>
  );
}

const HERO_DESTINATION_STRIP = [
  { id: "thailand", label: "Thailand", Icon: ThailandIcon },
  { id: "vietnam", label: "Vietnam", Icon: VietnamIcon },
  { id: "norway", label: "Norway", Icon: NorwayIcon },
  { id: "rajasthan", label: "Rajasthan", Icon: RajasthanIcon },
  { id: "bali", label: "Bali", Icon: BaliIcon },
  { id: "kerala", label: "Kerala", Icon: KeralaIcon },
  { id: "ladakh", label: "Ladakh", Icon: LadakhIcon },
  { id: "kashmir", label: "Kashmir", Icon: KashmirIcon },
  { id: "usa", label: "USA", Icon: USAIcon },
  { id: "bhutan", label: "Bhutan", Icon: BhutanIcon },
  { id: "spiti", label: "Spiti Valley", Icon: SpitiValleyIcon },
];

function StripDestinationItem({ Icon, label }) {
  return (
    <div className={styles.stripItem}>
      <div className={styles.stripIconWrap}>
        <Icon />
      </div>
      <span className={styles.stripLabel}>{label}</span>
    </div>
  );
}

function HeroDestinationStrip({ direction = "up" }) {
  const loopItems = [...HERO_DESTINATION_STRIP, ...HERO_DESTINATION_STRIP];
  const trackClass = direction === "down" ? styles.stripTrackDown : styles.stripTrackUp;

  return (
    <div className={styles.stripViewport} aria-hidden="true">
      <div className={`${styles.stripTrack} ${trackClass}`}>
        {loopItems.map((dest, index) => (
          <StripDestinationItem key={`${dest.id}-${index}`} Icon={dest.Icon} label={dest.label} />
        ))}
      </div>
    </div>
  );
}

/* ── Quote border decor ── */

function QuoteIconShell({ className, children }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </svg>
  );
}

function HeroQuoteDecor() {
  return (
    <div className={styles.quoteDecorLayer} aria-hidden="true">
      <span className={`${styles.quoteSplash} ${styles.quoteSplash1}`} />
      <span className={`${styles.quoteSplash} ${styles.quoteSplash2}`} />
      <span className={`${styles.quoteSplash} ${styles.quoteSplash3}`} />
      <QuoteIconShell className={`${styles.quoteDecorIcon} ${styles.quoteIconL1}`}>
        <path d="M20 6v26M14 12h12M12 16h16M10 20h20M8 24h24M8 30h24" />
        <path d="M16 6c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5" />
      </QuoteIconShell>
      <QuoteIconShell className={`${styles.quoteDecorIcon} ${styles.quoteIconL2}`}>
        <path d="M20 8v24" />
        <path d="M12 14h16M10 20h20M8 26h24" />
        <path d="M14 8l6-4 6 4" />
      </QuoteIconShell>
      <QuoteIconShell className={`${styles.quoteDecorIcon} ${styles.quoteIconL3}`}>
        <rect x="10" y="8" width="20" height="26" rx="2" />
        <circle cx="20" cy="18" r="4" />
        <path d="M14 28h12" />
      </QuoteIconShell>
      <QuoteIconShell className={`${styles.quoteDecorIcon} ${styles.quoteIconR1}`}>
        <path d="M6 22l14-6 4 2 10-3-4 8-4-1-6 4-10-3z" />
      </QuoteIconShell>
      <QuoteIconShell className={`${styles.quoteDecorIcon} ${styles.quoteIconR2}`}>
        <circle cx="20" cy="20" r="12" />
        <path d="M20 12v16M12 20h16" />
        <path d="M20 14l3 6-6-1 6-1-3 6z" fill="currentColor" stroke="none" opacity="0.5" />
      </QuoteIconShell>
      <QuoteIconShell className={`${styles.quoteDecorIcon} ${styles.quoteIconR3}`}>
        <path d="M20 34V18" />
        <path d="M20 18c-6-4-10-2-12 2M20 18c6-4 10-2 12 2M20 22c-5-2-8 0-9 4M20 22c5-2 8 0 9 4" />
      </QuoteIconShell>
    </div>
  );
}

function HeroQuoteBorder() {
  return (
    <aside className={styles.quoteBorder} aria-label={TRAVEL_QUOTE_ARIA}>
      <div className={styles.quoteShimmer} aria-hidden="true" />
      <div className={styles.quoteGloss} aria-hidden="true" />
      <HeroQuoteDecor />
      <p className={styles.quoteStatic}>{TRAVEL_QUOTE}</p>
      <div className={styles.quoteMarqueeMask} aria-hidden="true">
        <div className={styles.quoteMarqueeTrack}>
          <span className={styles.quoteMarqueeChunk}>{TRAVEL_QUOTE}</span>
          <span className={styles.quoteMarqueeChunk}>{TRAVEL_QUOTE}</span>
        </div>
      </div>
    </aside>
  );
}

function HeroSearchForm() {
  return (
    <form className={styles.searchForm} role="search" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        name="destination"
        placeholder="Where do you want to go?"
        className={styles.searchInput}
        aria-label="Search destinations"
      />
      <button type="submit" className={styles.searchBtn} aria-label="Search">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className={styles.searchBtnText}>Explore</span>
      </button>
    </form>
  );
}

/* ── Hero section ── */

export default function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.heroMedia}>
        <Image
          src={HERO_BACKGROUND}
          alt=""
          fill
          priority
          className={styles.heroBg}
          sizes="100vw"
        />
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.ambientGlow} aria-hidden="true">
          <span className={styles.glowOrb1} />
          <span className={styles.glowOrb2} />
          <span className={styles.glowOrb3} />
        </div>
        <p className={styles.heroWatermark} aria-hidden="true">
          WORLD
        </p>
        <div className={styles.heroMediaCaption} aria-hidden="true">
          <span className={styles.heroDiscover}>Let&apos;s travel the</span>
          <span className={styles.heroTitleLarge}>world</span>
        </div>
      </div>

      <Navbar variant="overlay" />

      <div className={styles.heroInner}>
        <div className={styles.heroMain}>
          <p className={styles.heroKicker}>
            <span className={styles.heroKickerLine} aria-hidden="true" />
            <span className={styles.heroKickerBrand}>Western Travellers</span>
            <span className={styles.heroKickerRest}> · Explore</span>
          </p>
          <h1 className={styles.heroTitleMobile}>
            <span className={styles.heroDiscover}>Let&apos;s travel the</span>
            <span className={styles.heroTitleLarge}>world</span>
          </h1>
          <p className={styles.heroLead}>
            <span className={styles.heroLeadAccent}>Your next adventure starts here</span>
            <span className={styles.heroLeadRest}>
              {" "}
              — curated packages, visa-free gems &amp; unforgettable getaways.
            </span>
          </p>
          <HeroSearchForm />
          <ul className={styles.heroSpots} aria-label="Popular destinations">
            {HERO_QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.heroSpotChip}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.heroActions}>
            <Link href="/#destinations" className={styles.heroBtnPrimary}>
              Explore destinations
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.heroDesktop}>
        <div className={styles.heroLayout}>
          <div className={styles.collageLeft}>
            <HeroDestinationStrip direction="up" />
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Let&apos;s travel the{" "}
              <span className={styles.heroTitleAccent}>world</span>
            </h1>

            <HeroSearchForm />

            <div className={styles.heroChips} role="list" aria-label="Popular destinations">
              {HERO_QUICK_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className={styles.heroChip} role="listitem">
                  <span className={styles.heroChipIcon} aria-hidden="true">
                    {link.icon}
                  </span>
                  {link.label}
                </Link>
              ))}
            </div>

            <ul className={styles.heroStats} aria-label="Highlights">
              <li>
                <strong>50+</strong>
                <span>Destinations</span>
              </li>
              <li>
                <strong>24/7</strong>
                <span>Travel support</span>
              </li>
              <li>
                <strong>Best</strong>
                <span>Price deals</span>
              </li>
            </ul>
          </div>

          <div className={styles.collageRight}>
            <HeroDestinationStrip direction="down" />
          </div>
        </div>
      </div>

      <HeroQuoteBorder />
    </div>
  );
}
