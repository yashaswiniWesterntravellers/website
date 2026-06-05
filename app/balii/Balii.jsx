"use client";

import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import TripStylePicker, {
  DEFAULT_TRIP_STYLES,
  tripStyleSectionId,
} from "../components/TripStylePicker/TripStylePicker";
import styles from "./Balii.module.css";

const LOCATION = "Bali";
const TRIP_STYLES_HASH = tripStyleSectionId(LOCATION);

const PHONE = "+918050041118";

const PAGE_HERO = {
  image: "/Balli/main%20image.jpg",
};

const HERO_STATS = [
  { value: "50+", label: "Curated packages" },
  { value: "4.9★", label: "Traveller rated" },
  { value: "From ₹46k", label: "Per person" },
];

const HERO_SPOTS = ["Ubud", "Kuta", "Seminyak", "Nusa Penida", "Uluwatu"];

const HERO_TICKER = [
  "Island of the Gods",
  "Turquoise waters",
  "Rice terraces",
  "Timeless culture",
  "Honeymoon escapes",
  "Family adventures",
];

const BALI_CATEGORIES = [
  {
    id: "honeymoon",
    title: "Bali Honeymoon Packages",
    packages: [
      {
        duration: "7 days & 6 nights",
        rating: 5.0,
        reviews: 21,
        title: "Bali Couple Escape | Sea, Sunsets & Sands",
        route: "3D Ubud • 3D Kuta",
        oldPrice: "INR 57,455",
        price: "INR 46,335",
        saveAmount: "INR 11,120",
        image: "/Balli/bali_honeymoon3.jpg",
      },
      {
        duration: "6 days & 5 nights",
        rating: 4.9,
        reviews: 14,
        title: "Romantic Bali | Private Villa & Candlelight Dinner",
        route: "2D Seminyak • 3D Ubud • 1D Nusa Penida",
        oldPrice: "INR 62,800",
        price: "INR 48,900",
        saveAmount: "INR 13,900",
        image: "/Balli/bali_couple1.webp",
      },
      {
        duration: "5 days & 4 nights",
        rating: 4.8,
        reviews: 9,
        title: "Bali Love Retreat | Beach & Spa for Two",
        route: "2D Kuta • 2D Ubud • 1D Uluwatu",
        oldPrice: "INR 44,200",
        price: "INR 34,500",
        saveAmount: "INR 9,700",
        image: "/Balli/bali_honeymoon1.jpeg",
      },
    ],
  },
  {
    id: "solo",
    title: "Bali Solo Trip Packages",
    packages: [
      {
        duration: "7 days & 6 nights",
        rating: 4.7,
        reviews: 87,
        title: "Bali Retreat | Round Trip Flight Inclusive Deal",
        route: "3D Ubud • 3D Kuta • 1D Denpasar",
        oldPrice: "INR 85,400",
        price: "INR 65,000",
        saveAmount: "INR 20,400",
        image: "/Balli/bali_honeymoon2.jpeg",
        flights: true,
      },
      {
        duration: "5 days & 4 nights",
        rating: 4.6,
        reviews: 42,
        title: "Solo Explorer Bali | Cafes, Temples & Trails",
        route: "2D Canggu • 2D Ubud • 1D Tanah Lot",
        oldPrice: "INR 38,500",
        price: "INR 29,800",
        saveAmount: "INR 8,700",
        image: "/Balli/balli_Page_image.jpg",
      },
      {
        duration: "6 days & 5 nights",
        rating: 4.8,
        reviews: 28,
        title: "Bali Soul Journey | Wellness & Island Hopping",
        route: "3D Ubud • 2D Nusa Lembongan • 1D Kuta",
        oldPrice: "INR 52,000",
        price: "INR 40,200",
        saveAmount: "INR 11,800",
        image: "/Balli/main%20image.jpg",
      },
    ],
  },
  {
    id: "friends",
    title: "Bali Friends Trip Packages",
    packages: [
      {
        duration: "6 days & 5 nights",
        rating: 4.9,
        reviews: 32,
        title: "Bali Squad Break | Beaches, Cafes & Adventure Trails",
        route: "3D Seminyak • 2D Ubud • 1D Nusa Penida",
        oldPrice: "INR 52,700",
        price: "INR 40,500",
        saveAmount: "INR 12,200",
        image: "/Balli/bali_couple1.webp",
      },
      {
        duration: "5 days & 4 nights",
        rating: 4.8,
        reviews: 19,
        title: "Bali Crew Getaway | Surf, Party & Island Hopping",
        route: "2D Kuta • 2D Gili • 1D Ubud",
        oldPrice: "INR 41,000",
        price: "INR 31,800",
        saveAmount: "INR 9,200",
        image: "/Balli/balli_Page_image.jpg",
      },
      {
        duration: "7 days & 6 nights",
        rating: 4.7,
        reviews: 25,
        title: "Friends in Paradise | Bali Highlights Tour",
        route: "3D Canggu • 2D Ubud • 2D Uluwatu",
        oldPrice: "INR 58,000",
        price: "INR 44,900",
        saveAmount: "INR 13,100",
        image: "/Balli/bali_honeymoon3.jpg",
      },
    ],
  },
  {
    id: "family",
    title: "Bali Family Packages",
    packages: [
      {
        duration: "7 days & 6 nights",
        rating: 4.8,
        reviews: 18,
        title: "Uncover Bali | Family Escape From Landscapes to Coasts",
        route: "4D Canggu • 3D Ubud",
        oldPrice: "INR 49,000",
        price: "INR 35,000",
        saveAmount: "INR 14,000",
        image: "/Balli/main%20image.jpg",
      },
      {
        duration: "6 days & 5 nights",
        rating: 4.7,
        reviews: 24,
        title: "Bali Family Fun | Safari, Water Park & Temple Tours",
        route: "2D Kuta • 2D Ubud • 2D Sanur",
        oldPrice: "INR 46,500",
        price: "INR 33,200",
        saveAmount: "INR 13,300",
        image: "/Balli/balli_Page_image.jpg",
      },
      {
        duration: "8 days & 7 nights",
        rating: 4.9,
        reviews: 11,
        title: "Grand Bali Family | Kid-Friendly Resorts & Day Trips",
        route: "3D Nusa Dua • 3D Ubud • 2D Seminyak",
        oldPrice: "INR 68,000",
        price: "INR 49,500",
        saveAmount: "INR 18,500",
        image: "/Balli/bali_honeymoon3.jpg",
      },
    ],
  },
];

function PackageCard({ pkg, onViewMore }) {
  return (
    <article className={styles.packageCard}>
      <div className={styles.packageImageWrap}>
        <img src={pkg.image} alt={pkg.title} className={styles.packageImage} loading="lazy" />
        {pkg.flights ? <span className={styles.flightTag}>Flights included</span> : null}
        <div className={styles.carouselDots} aria-hidden="true">
          <span className={styles.dotActive} />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={styles.packageBody}>
        <p className={styles.packageMeta}>
          <span>{pkg.duration}</span>
          <span className={styles.packageRating}>
            ★ {pkg.rating} <small>({pkg.reviews})</small>
          </span>
        </p>
        <h3 className={styles.packageTitle}>{pkg.title}</h3>
        <p className={styles.itineraryBar}>{pkg.route}</p>
        <div className={styles.priceBlock}>
          <p className={styles.priceTopRow}>
            <span className={styles.oldPrice}>{pkg.oldPrice}</span>
            <span className={styles.saveBadge}>SAVE {pkg.saveAmount}</span>
          </p>
          <p className={styles.priceMainRow}>
            <span className={styles.price}>{pkg.price}</span>
            <span className={styles.perPerson}>/Adult</span>
          </p>
        </div>
        <div className={styles.cardActions}>
          <a href={`tel:${PHONE}`} className={styles.phoneBtn} aria-label="Call us">
            ☎
          </a>
          <button type="button" className={styles.callbackBtn} onClick={onViewMore}>
            View more details
          </button>
        </div>
      </div>
    </article>
  );
}

function splitCategoryTitle(title) {
  if (title.startsWith("Bali ")) {
    return { accent: "Bali", rest: title.slice(4) };
  }
  return { accent: title, rest: "" };
}

function CategorySection({ category, onViewMore }) {
  const { accent, rest } = splitCategoryTitle(category.title);

  return (
    <section className={styles.categorySection} id={category.id} aria-labelledby={`${category.id}-heading`}>
      <div className={styles.categoryBar}>
        <div className={styles.categoryBarInner}>
          <h2 id={`${category.id}-heading`} className={styles.categoryBarTitle}>
            <span className={styles.categoryBarTitleOrange}>{accent}</span>
            {rest ? <span className={styles.categoryBarTitleGrey}>{rest}</span> : null}
          </h2>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.packageGrid}>
          {category.packages.map((pkg) => (
            <PackageCard key={pkg.title} pkg={pkg} onViewMore={onViewMore} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PageHero({ onExplore }) {
  const tickerItems = [...HERO_TICKER, ...HERO_TICKER];

  return (
    <section className={styles.pageHero} aria-label="Bali">
      <div className={styles.pageHeroMedia}>
        <img
          src={PAGE_HERO.image}
          alt="Bali landscape"
          className={styles.pageHeroBg}
          loading="eager"
        />
        <div className={styles.pageHeroOverlay} aria-hidden="true" />
        <div className={styles.pageHeroDiagonal} aria-hidden="true" />
        <p className={styles.pageHeroWatermark} aria-hidden="true">
          BALI
        </p>
        <p className={styles.pageHeroVertical} aria-hidden="true">
          Island of the Gods
        </p>
        <div className={styles.pageHeroMediaCaption} aria-hidden="true">
          <span className={styles.pageHeroDiscover}>Discover</span>
          <span className={styles.pageHeroTitleText}>Bali</span>
        </div>
      </div>

      <div className={styles.pageHeroInner}>
        <div className={styles.pageHeroMain}>
          <p className={styles.pageHeroKicker}>
            <span className={styles.pageHeroKickerLine} aria-hidden="true" />
            Western Travellers · Indonesia
          </p>
          <h1 className={styles.pageHeroTitle}>
            <span className={styles.pageHeroDiscover}>Discover</span>
            <span className={styles.pageHeroTitleText}>Bali</span>
          </h1>
          <p className={styles.pageHeroLead}>
            <span className={styles.pageHeroLeadAccent}>The Island of the Gods</span>
            <span className={styles.pageHeroLeadRest}>
              — where turquoise waters meet lush jungles, sacred temples, and
              sunsets you&apos;ll never forget.
            </span>
          </p>
          <ul className={styles.pageHeroSpots} aria-label="Popular areas in Bali">
            {HERO_SPOTS.map((spot) => (
              <li key={spot}>
                <span className={styles.pageHeroSpotChip}>{spot}</span>
              </li>
            ))}
          </ul>
          <div className={styles.pageHeroActions}>
            <button type="button" className={styles.pageHeroBtnPrimary} onClick={onExplore}>
              Choose your trip style
            </button>
            <a href="#honeymoon" className={styles.pageHeroBtnGhost}>
              Browse packages
            </a>
          </div>
        </div>
      </div>

      <div className={styles.pageHeroStatsBar} aria-label="Bali travel highlights">
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className={styles.pageHeroStat}>
            <span className={styles.pageHeroStatValue}>{stat.value}</span>
            <span className={styles.pageHeroStatLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.pageHeroTicker} aria-hidden="true">
        <div className={styles.pageHeroTickerTrack}>
          {tickerItems.map((text, i) => (
            <span key={`${text}-${i}`} className={styles.pageHeroTickerItem}>
              {text}
              <span className={styles.pageHeroTickerDot}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function BaliIntro({ onExplore }) {
  return (
    <section className={styles.introSection} aria-labelledby="bali-intro-heading">
      <div className={styles.introGlow} aria-hidden="true" />
      <div className={styles.introInner}>
        <p className={styles.introEyebrow}>Western Travellers</p>
        <h2 id="bali-intro-heading" className={styles.introHeading}>
          Your Bali, <span className={styles.introHeadingAccent}>your way</span>
        </h2>
        <p className={styles.introLead}>Pick a trip style — we&apos;ll handle the rest.</p>
        <div className={styles.introGrid}>
          {DEFAULT_TRIP_STYLES.map((item) => (
            <button
              key={item.id}
              type="button"
              className={styles.introCard}
              onClick={onExplore}
            >
              <span className={styles.introCardIcon} aria-hidden="true">
                {item.icon}
              </span>
              <span className={styles.introCardLabel}>{item.label}</span>
              <span className={styles.introCardHint}>{item.hint}</span>
            </button>
          ))}
        </div>
        <button type="button" className={styles.introExploreBtn} onClick={onExplore}>
          Explore Bali packages
        </button>
      </div>
    </section>
  );
}

export default function Balii() {
  const [showStylePicker, setShowStylePicker] = useState(false);

  const openStylePicker = useCallback(() => {
    setShowStylePicker(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `${window.location.pathname}#${TRIP_STYLES_HASH}`);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const openFromHash = () => {
      if (window.location.hash === `#${TRIP_STYLES_HASH}`) {
        setShowStylePicker(true);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar variant="hero" />

      {showStylePicker ? (
        <TripStylePicker
          location={LOCATION}
          sectionId={TRIP_STYLES_HASH}
          interactive={false}
        />
      ) : (
        <>
          <PageHero onExplore={openStylePicker} />
          <BaliIntro onExplore={openStylePicker} />
          {BALI_CATEGORIES.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              onViewMore={openStylePicker}
            />
          ))}
        </>
      )}
    </div>
  );
}
