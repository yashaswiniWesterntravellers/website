"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const MAIN_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

const INTERNATIONAL_PACKAGES = [
  { label: "Thailand", href: "/?region=thailand" },
  { label: "Myanmar", href: "/?region=myanmar" },
  { label: "Malaysia", href: "/?region=malaysia" },
  { label: "Singapore", href: "/?region=singapore" },
  { label: "Bali", href: "/balii" },
  { label: "Goa", href: "/?region=goa" },
];

export default function Navbar({ variant = "default" }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = [
    styles.navbar,
    variant === "hero" ? styles.navbarHero : "",
    variant === "overlay" ? styles.navbarOverlay : "",
  ]
    .filter(Boolean)
    .join(" ");

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={navClass}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoIcon} aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 22c4-10 10-14 20-16-2 8-6 14-14 18-2 1-4 1-6-2z"
              fill="#f97316"
            />
            <path
              d="M10 18c3-5 7-8 14-10"
              stroke="#fbbf24"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className={styles.logoText}>westerntravellers</span>
      </Link>

      <ul className={styles.navLinks}>
        {MAIN_LINKS.map((link) => (
          <li key={link.href} className={styles.navItem}>
            <Link
              href={link.href}
              className={`${styles.navLabelLink} ${isActive(link.href) ? styles.navLinkActive : ""}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className={styles.navItem}>
          <span className={styles.navPackageLabel}>
            International Packages <span className={styles.chevron}>▾</span>
          </span>
          <ul className={styles.dropdown}>
            {INTERNATIONAL_PACKAGES.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.dropdownLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className={styles.navItem}>
          <span className={styles.navPackageLabel}>Domestic Packages</span>
        </li>
        <li className={styles.navItem}>
          <span className={styles.navPackageLabel}>Visa-Free Packages</span>
        </li>
      </ul>

      <div className={styles.navActions}>
        <button type="button" className={styles.loginBtn}>
          Login
        </button>

        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {MAIN_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <p className={styles.mobileNavGroupLabel}>International Packages</p>
          {INTERNATIONAL_PACKAGES.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={styles.mobilePackageLabel}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <p className={styles.mobileNavGroupLabel}>Other Packages</p>
          <span className={styles.mobilePackageLabel}>Domestic Packages</span>
          <span className={styles.mobilePackageLabel}>Visa-Free Packages</span>
          <button type="button" className={styles.mobileLoginBtn}>
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
