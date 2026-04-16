"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { useRef, useState } from "react";
import styles from "./YasIslandBanner.module.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500", "600"] });

const DEFAULT_IMAGE = "/yas-island-cta.png";

export default function YasIslandBanner({
  imageSrc = DEFAULT_IMAGE,
  imageAlt = "",
  ctaHref = "/destinations",
}) {
  const bannerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [vibrating, setVibrating] = useState(false);

  const handleMouseMove = (e) => {
    const el = bannerRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20;
    const y = ((e.clientY - top) / height - 0.5) * 12;
    setTilt({ x, y });
    if (!vibrating) {
      setVibrating(true);
      setTimeout(() => setVibrating(false), 400);
    }
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section className={styles.outer} aria-labelledby="yas-island-banner-heading">
      <div ref={bannerRef} className={styles.banner} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`${styles.bannerImg} ${vibrating ? styles.vibrate : ""}`}
          style={{ transform: `scale(1.08) translate(${tilt.x * 0.6}px, ${tilt.y * 0.6}px)` }}
          sizes="(max-width: 1500px) 92vw, 1280px"
          priority={false}
        />
        <div className={styles.overlay} aria-hidden />
        <div className={styles.inner}>
          <div className={styles.leftSide}>
            <h2 id="yas-island-banner-heading" className={`${styles.heading} ${playfair.className}`}>
              Say Yes for a trip to<br />
              <span className={styles.highlight}>Yas Island</span>
            </h2>
            <p className={styles.subtitle}>Kids go free on Yas Island <strong>ABU DHABI</strong></p>
          </div>
          <div className={styles.rightSide}>
            <p className={styles.tagline}>Thrills, fun & unforgettable memories await your family</p>
            <Link href={ctaHref} className={styles.cta}>View Packages</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
