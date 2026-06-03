"use client";

import Contact from "../Contact";
import styles from "./ContactPage.module.css";

export default function ContactPageView() {
  return (
    <section className={styles.container}>
      <Contact />
    </section>
  );
}
