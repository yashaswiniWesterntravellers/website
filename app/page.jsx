"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import DestinationGrid from "./components/DestinationGrid";
import FeaturedTripStyles from "./components/FeaturedTripStyles";
import VisaFreeDestinations from "./components/VisaFreeDestinations";
import YasIslandBanner from "./components/YasIslandBanner";
import { destinationsForGrid, HOME_SHOWCASE } from "./data/destinations";

const HOME_CTA_BANNER_IMAGE = "/yas-island-cta.png";

export default function Home() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);

  const navItems = [
    { label: "Explore Destinations", items: ["Europe", "Asia", "Africa", "Americas", "Oceania"] },
    { label: "Holiday Packages", items: ["Summer Vacation", "Winter Getaway", "Spring Break", "Fall Festival"] },
    { label: "Honeymoon Getaways", items: ["Beach Resorts", "Mountain Retreats", "Island Escapes", "Adventure Tours"] },
    { label: "Exclusive Packages", items: ["Luxury Cruises", "Private Tours", "VIP Experiences", "Custom Itineraries"] },
    { label: "More...", items: ["Travel Guides", "Blog", "Contact Us", "FAQ"] },
  ];

  return (
    <main className={styles.mainWrapper}>
      <div className={styles.container}>
        <video className={styles.video} autoPlay muted loop playsInline>
          <source src="/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <span className={styles.logoMain}>Western</span>
            <span className={styles.logoSub}>Travellers</span>
          </div>

          <ul className={styles.navLinks}>
            {navItems.map((item, index) => (
              <li
                key={index}
                className={styles.navItem}
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.label}
                {openDropdown === index && (
                  <ul className={styles.dropdown}>
                    {item.items.map((subitem, subindex) => (
                      <li key={subindex}>
                        {index === 0 ? (
                          <Link href={`/destinations?region=${encodeURIComponent(subitem)}`} className={styles.dropdownLink}>
                            {subitem}
                          </Link>
                        ) : (
                          <span className={styles.dropdownItem}>{subitem}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <button className={styles.loginBtn}>Login</button>

          <button
            className={styles.hamburger}
            onClick={() => { setMenuOpen(!menuOpen); setMobileSubOpen(null); }}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {menuOpen && (
            <div className={styles.mobileMenu}>
              {navItems.map((item, index) => (
                <div key={index} className={styles.mobileMenuItem}>
                  <div
                    className={styles.mobileMenuLabel}
                    onClick={() => setMobileSubOpen(mobileSubOpen === index ? null : index)}
                  >
                    {item.label} <span>{mobileSubOpen === index ? "▲" : "▼"}</span>
                  </div>
                  {mobileSubOpen === index && (
                    <div className={styles.mobileSubMenu}>
                      {item.items.map((subitem, subindex) => (
                        <div key={subindex} className={styles.mobileSubItem}>
                          {index === 0 ? (
                            <Link href={`/destinations?region=${encodeURIComponent(subitem)}`} onClick={() => setMenuOpen(false)}>
                              {subitem}
                            </Link>
                          ) : (
                            <span>{subitem}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>

        <div className={styles.heroContent}>
          <h1>Let&apos;s travel the world</h1>
          <p>Explore destinations, places, and unforgettable experiences</p>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search destinations..." />
            <button>🔍</button>
          </div>
        </div>

        <div className={styles.heroQuoteBar}>
          <div className={styles.heroQuoteTicker}>
            <p className={styles.heroQuote}>
              &ldquo;many collect passport stamps 🛂, I prefer collecting meaningful moments — the kind that stay long after the journey ends ✨&rdquo;
            </p>
            <p className={styles.heroQuote} aria-hidden="true">
              &ldquo;many collect passport stamps 🛂, I prefer collecting meaningful moments — the kind that stay long after the journey ends ✨&rdquo;
            </p>
          </div>
        </div>
      </div>

      <DestinationGrid title="Popular Destinations" destinations={HOME_SHOWCASE} rotateCardsOnOpen />
      <DestinationGrid title="Quick Getaways" destinations={HOME_SHOWCASE} autoSlide slideDirection="right" />
      <FeaturedTripStyles />
      <VisaFreeDestinations />
      <YasIslandBanner imageSrc={HOME_CTA_BANNER_IMAGE} />
      <DestinationGrid title="Explore Europe" destinations={destinationsForGrid("Europe")} autoSlide slideDirection="right" />
      <DestinationGrid title="Oceania" destinations={destinationsForGrid("Oceania")} autoSlide slideDirection="left" />
      <DestinationGrid title="Explore Asia" destinations={destinationsForGrid("Asia")} autoSlide slideDirection="right" />
    </main>
  );
}
