"use client";

import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import TripStylePicker, {
  DEFAULT_TRIP_STYLES,
  tripStyleSectionId,
} from "../components/TripStylePicker/TripStylePicker";
import styles from "./Balii.module.css";

const PHONE = "+918050041118";
const LOCATION = "Bali";
const TRIP_STYLES_HASH = tripStyleSectionId(LOCATION);

const PAGE_HERO = {
  image: "/Balli/main%20image.jpg",
  title: "Bali",
  tagline: "Discover the Island of the Gods — turquoise waters, lush landscapes & timeless culture",
};

const BALI_CATEGORIES = [
  {
    id: "honeymoon",
    title: "Bali Honeymoon Packages",
    heroSubtitle: "Honeymoon Packages",
    heroTagline: "Romantic beaches, private villas & sunsets on the Island of the Gods",
    heroImage: "/Balli/bali_honeymoon3.jpg",
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
    heroSubtitle: "Solo Trip Packages",
    heroTagline: "Explore temples, rice terraces & island life at your own rhythm",
    heroImage: "/Balli/bali_honeymoon2.jpeg",
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
    heroSubtitle: "Friends Trip Packages",
    heroTagline: "Beach clubs, adventure trails & unforgettable group getaways",
    heroImage: "/Balli/bali_couple1.webp",
    packages: [
      {
        duration: "6 days & 5 nights",
        rating: 4.9,
        reviews: 32,
        title: "Bali Squad Break | Beaches, Cafes & Adventure Trails",
        route: "3D Seminyak • 2D Ubud • 1D Nusa Penida",
        oldPrice: "INR 52,700",
        price: "INR 39,500",
        saveAmount: "INR 13,200",
        image: "/Balli/bali_couple1.webp",
      },
      {
        duration: "5 days & 4 nights",
        rating: 4.7,
        reviews: 56,
        title: "Bali Party Pack | Beach Clubs & ATV Adventure",
        route: "2D Kuta • 2D Seminyak • 1D Ubud",
        oldPrice: "INR 41,000",
        price: "INR 31,500",
        saveAmount: "INR 9,500",
        image: "/Balli/bali_honeymoon1.jpeg",
      },
      {
        duration: "7 days & 6 nights",
        rating: 4.8,
        reviews: 19,
        title: "Friends Escape Bali | Rafting, Snorkel & Nightlife",
        route: "3D Kuta • 2D Gili • 2D Ubud",
        oldPrice: "INR 58,900",
        price: "INR 44,800",
        saveAmount: "INR 14,100",
        image: "/Balli/bali_honeymoon2.jpeg",
      },
    ],
  },
  {
    id: "family",
    title: "Bali Family Packages",
    heroSubtitle: "Family Packages",
    heroTagline: "Kid-friendly resorts, culture & coast — holidays the whole family loves",
    heroImage: "/Balli/main%20image.jpg",
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

function CategorySection({ category, onViewMore, onChangeStyle }) {
  return (
    <section className={styles.categorySection} id={category.id} aria-labelledby={`${category.id}-heading`}>
      <div className={styles.categoryHero}>
        <img
          src={category.heroImage}
          alt=""
          className={styles.categoryHeroBg}
          loading="lazy"
        />
        <div className={styles.categoryHeroOverlay} />
        <div className={styles.categoryHeroContent}>
          <p className={styles.categoryHeroBrand}>Bali</p>
          <h2 id={`${category.id}-heading`} className={styles.categoryHeroTitle}>
            {category.heroSubtitle}
          </h2>
          <p className={styles.categoryHeroTagline}>{category.heroTagline}</p>
        </div>
      </div>

      <div className={styles.categoryBar}>
        <div className={styles.categoryBarInner}>
          <p>{category.title}</p>
          {onChangeStyle ? (
            <button type="button" className={styles.changeStyleBtn} onClick={onChangeStyle}>
              ← Change trip style
            </button>
          ) : null}
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

function PageHero() {
  return (
    <section className={styles.pageHero} aria-label="Bali">
      <img
        src={PAGE_HERO.image}
        alt="Bali landscape"
        className={styles.pageHeroBg}
        loading="eager"
      />
      <div className={styles.pageHeroOverlay} />
      <div className={styles.pageHeroContent}>
        <h1 className={styles.heroBrand}>{PAGE_HERO.title}</h1>
        <p className={styles.pageHeroTagline}>{PAGE_HERO.tagline}</p>
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
  const [activeCategory, setActiveCategory] = useState(null);

  const openStylePicker = useCallback(() => {
    setShowStylePicker(true);
    setActiveCategory(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `${window.location.pathname}#${TRIP_STYLES_HASH}`);
    }
  }, []);

  const selectCategory = useCallback((styleId) => {
    setActiveCategory(styleId);
    setShowStylePicker(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `${window.location.pathname}#${styleId}`);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === TRIP_STYLES_HASH) {
        setShowStylePicker(true);
        setActiveCategory(null);
        return;
      }
      const matched = BALI_CATEGORIES.find((c) => c.id === hash);
      if (matched) {
        setShowStylePicker(false);
        setActiveCategory(matched.id);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const categoriesToShow = activeCategory
    ? BALI_CATEGORIES.filter((c) => c.id === activeCategory)
    : BALI_CATEGORIES;

  return (
    <div className={styles.page}>
      <Navbar variant="hero" />

      {showStylePicker ? (
        <TripStylePicker
          location={LOCATION}
          sectionId={TRIP_STYLES_HASH}
          onSelect={selectCategory}
        />
      ) : activeCategory ? (
        categoriesToShow.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            onViewMore={openStylePicker}
            onChangeStyle={openStylePicker}
          />
        ))
      ) : (
        <>
          <PageHero />
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
