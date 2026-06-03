"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import { LOCATION_GROUPS } from "./contactLocations";
import styles from "./Contact.module.css";

const CONTACT_IMAGE = "/AboutImage2.webp";
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.087589776!2d77.6102!3d12.9166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f4f4f4f4f5%3A0x0!2sBTM%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

const FEATURES = [
  { icon: "⏱", label: "24h Response", tone: "yellow" },
  { icon: "✈", label: "Custom Packages", tone: "purple" },
  { icon: "🛡", label: "Travel Support", tone: "blue" },
  { icon: "📍", label: "Bangalore Based", tone: "orange" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <Navbar variant="hero" />

      <main className={styles.main}>
        <header className={`${styles.hero} wt-fade-up`}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Get in touch</p>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine1}>Let&apos;s</span>
              <span className={styles.titleLine2}>connect</span>
            </h1>
            <span className={styles.heroLine} aria-hidden="true" />
            <p className={styles.heroDesc}>
              Plan your next holiday with Western Travellers — from international tour packages
              and visa-friendly getaways to custom itineraries from our Bangalore office.
            </p>
          </div>
          <div className={styles.heroCard} aria-hidden="true">
            <p className={styles.heroCardTitle}>Western Travellers</p>
            <p className={styles.heroCardSub}>Holiday tours · Domestic &amp; international</p>
          </div>
        </header>

        <section className={styles.formSection} aria-labelledby="contact-form-heading">
          <div className={styles.formVisual}>
            <img
              src={CONTACT_IMAGE}
              alt="Travel planning with Western Travellers"
              className={styles.formImage}
              width={560}
              height={640}
            />
          </div>

          <div className={styles.formPanel}>
            <h2 id="contact-form-heading" className={`${styles.formPanelTitle} wt-heading`}>
              Send us your travel plans
            </h2>
            <p className={styles.formPanelSub}>
              Share your dates, destination, and budget — we&apos;ll get back with package options.
            </p>

            {submitted ? (
              <p className={styles.successMsg} role="status">
                Thank you! Our team will contact you within 24 hours.
              </p>
            ) : (
              <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.formRow}>
                  <label className={`${styles.field} ${styles.fieldName}`}>
                    <span className={styles.fieldIconWrap} aria-hidden="true">👤</span>
                    <span className={styles.fieldBody}>
                      <span className={styles.fieldLabel}>Full Name</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={onChange}
                        required
                        autoComplete="name"
                      />
                    </span>
                  </label>
                  <label className={`${styles.field} ${styles.fieldPhone}`}>
                    <span className={styles.fieldIconWrap} aria-hidden="true">📞</span>
                    <span className={styles.fieldBody}>
                      <span className={styles.fieldLabel}>Phone Number</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 00000 00000"
                        value={form.phone}
                        onChange={onChange}
                        required
                        autoComplete="tel"
                      />
                    </span>
                  </label>
                </div>

                <label className={`${styles.field} ${styles.fieldEmail}`}>
                  <span className={styles.fieldIconWrap} aria-hidden="true">✉</span>
                  <span className={styles.fieldBody}>
                    <span className={styles.fieldLabel}>Email Address</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={onChange}
                      required
                      autoComplete="email"
                    />
                  </span>
                </label>

                <label className={`${styles.field} ${styles.fieldLocation}`}>
                  <span className={styles.fieldIconWrap} aria-hidden="true">🌍</span>
                  <span className={styles.fieldBody}>
                    {!form.location && (
                      <span className={styles.fieldLabel}>Select the location</span>
                    )}
                    <select
                      name="location"
                      value={form.location}
                      onChange={onChange}
                      required
                      className={`${styles.select} ${form.location ? styles.selectFilled : styles.selectEmpty}`}
                      aria-label="Select the location"
                    >
                      <option value="" disabled hidden>
                        Select the location
                      </option>
                      {LOCATION_GROUPS.map((group) => (
                        <optgroup key={group.region} label={group.region}>
                          {group.locations.map((loc) => (
                            <option key={loc} value={loc}>
                              {loc}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </span>
                </label>

                <label className={`${styles.field} ${styles.fieldMessage}`}>
                  <span className={styles.fieldIconWrap} aria-hidden="true">📝</span>
                  <span className={styles.fieldBody}>
                    <span className={styles.fieldLabel}>Your requirement</span>
                    <textarea
                      name="message"
                      placeholder="Write your travel plans, dates & budget..."
                      rows={4}
                      value={form.message}
                      onChange={onChange}
                      required
                    />
                  </span>
                </label>

                <div className={styles.formFooter}>
                  <ul className={styles.featurePills}>
                    {FEATURES.map((f) => (
                      <li key={f.label} className={`${styles.pill} ${styles[`pill_${f.tone}`]}`}>
                        <span className={styles.pillIcon} aria-hidden="true">{f.icon}</span>
                        <span className={styles.pillText}>{f.label}</span>
                      </li>
                    ))}
                  </ul>
                  <button type="submit" className={styles.submitBtn}>
                    Send inquiry <span aria-hidden="true">→</span>
                  </button>
                  <ul className={styles.trustList}>
                    <li>Fast response</li>
                    <li>Custom itineraries</li>
                    <li>End-to-end support</li>
                  </ul>
                </div>
              </form>
            )}
          </div>
        </section>

        <section className={styles.infoCards} aria-label="Contact information">
          <article className={`${styles.infoCard} ${styles.cardEmail}`}>
            <span className={styles.infoIcon} aria-hidden="true">@</span>
            <h3>Email</h3>
            <a href="mailto:Info@westerntravellers.com">Info@westerntravellers.com</a>
          </article>
          <article className={`${styles.infoCard} ${styles.cardPhone}`}>
            <span className={styles.infoIcon} aria-hidden="true">☎</span>
            <h3>Call us</h3>
            <a href="tel:+918050041118">+91 80500 41118</a>
          </article>
          <article className={`${styles.infoCard} ${styles.cardSupport}`}>
            <span className={styles.infoIcon} aria-hidden="true">✈</span>
            <h3>Holiday support</h3>
            <p>Domestic &amp; international packages</p>
          </article>
          <article className={`${styles.infoCard} ${styles.cardVisit}`}>
            <span className={styles.infoIcon} aria-hidden="true">📍</span>
            <h3>Visit us</h3>
            <p>Ns Palya, BTM Layout 2nd Stage, Bangalore</p>
          </article>
        </section>

        <section className={styles.mapSection} aria-label="Office location map">
          <div className={styles.mapWrap}>
            <iframe
              title="Western Travellers office location on Google Maps"
              src={MAP_EMBED}
              className={styles.mapFrame}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href="https://maps.google.com/?q=BTM+Layout+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapBtn}
            >
              Open in Maps ↗
            </a>
            <span className={styles.mapBadge}>Visit our office</span>
          </div>
        </section>

        <p className={styles.backLink}>
          <Link href="/">← Back to home</Link>
        </p>
      </main>
    </div>
  );
}
