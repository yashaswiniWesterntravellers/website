import Link from "next/link";
import styles from "./Footer.module.css";

const PACKAGE_LINKS = [
  "International Tour Packages",
  "International Honeymoon Packages",
  "International Family Packages",
  "International Beach Packages",
  "Adventure Packages",
  "Summer Holiday Packages",
  "International Visa on arrival Packages",
  "International Budget Packages",
  "International Luxury Packages",
  "International Solo Travel Packages",
];

const LINK_BANDS = [
  { title: "Themed destinations", id: "themed" },
  { title: "Holiday Destinations", id: "holiday" },
  { title: "International Travel Deals", id: "deals" },
];

const PARTNERS = [
  { name: "Expedia" },
  { name: "Skyscanner" },
  { name: "Turkish Airlines" },
  { name: "SunExpress" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <section className={styles.partners} aria-labelledby="footer-partners-heading">
        <h2 id="footer-partners-heading" className={styles.partnersTitle}>
          Partnered with the best in the industry
        </h2>
        <div className={styles.partnerRow}>
          {PARTNERS.map((p) => (
            <Link key={p.name} href="#" className={styles.partnerLogo}>{p.name}</Link>
          ))}
        </div>
      </section>

      <hr className={styles.rule} />

      {LINK_BANDS.map((band) => (
        <div key={band.id}>
          <section className={styles.linkBand} aria-labelledby={`footer-${band.id}-title`}>
            <h3 id={`footer-${band.id}-title`} className={styles.linkBandTitle}>{band.title}</h3>
            <ul className={styles.linkList}>
              {PACKAGE_LINKS.map((label) => (
                <li key={`${band.id}-${label}`}><Link href="#">{label}</Link></li>
              ))}
            </ul>
          </section>
          <hr className={styles.rule} />
        </div>
      ))}

      <nav className={styles.navGrid} aria-label="Footer">
        <div>
          <h3 className={styles.navColTitle}>Help center</h3>
          <ul className={styles.navColList}>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">Terms of use</Link></li>
            <li><Link href="#">Privacy policy</Link></li>
            <li><Link href="#">Cancellation policy</Link></li>
            <li><Link href="#">Sitemap</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className={styles.navColTitle}>Company</h3>
          <ul className={styles.navColList}>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="#">Career</Link></li>
           <li><Link href="#">Testimonial</Link></li>
            <li><Link href="#">Visa</Link></li>
          </ul>
        </div>
        <div>
          <h3 className={styles.navColTitle}>Talk to us</h3>
          <p className={styles.contactLine}>Email: <a href="mailto:Info@westerntravellers.com">Info@westerntravellers.com</a></p>
          <p className={styles.contactLine}>Phone: <a href="tel:+918050041118">+91-8050041118</a></p>
        </div>
        <div>
          <h3 className={styles.navColTitle}>Social</h3>
          <ul className={styles.navColList}>
            <li><Link href="#" rel="noopener noreferrer">Facebook</Link></li>
            <li><Link href="#" rel="noopener noreferrer">Instagram</Link></li>
            <li><Link href="#" rel="noopener noreferrer">Pinterest</Link></li>
            <li><Link href="#" rel="noopener noreferrer">LinkedIn</Link></li>
            <li><Link href="#" rel="noopener noreferrer">Twitter</Link></li>
          </ul>
        </div>
      </nav>

      <hr className={styles.rule} />
      <p className={styles.copy}>Copyright © {year} Western Travellers. All rights reserved.</p>
    </footer>
  );
}

