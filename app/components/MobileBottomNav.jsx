"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="mobileBottomNav" aria-label="Mobile navigation">
      <Link href="/" className={pathname === "/" ? "navActive" : ""}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 21V12h6v9" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Home
      </Link>
      <Link href="/destinations" className={pathname.startsWith("/destinations") ? "navActive" : ""}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Explore
      </Link>
      <a href="https://wa.me/918050041118" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.34A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.64 13.41c-.2.56-1.18 1.08-1.62 1.14-.41.06-.93.08-1.5-.09-.35-.1-.79-.24-1.36-.48-2.38-1.03-3.93-3.44-4.05-3.6-.12-.16-.97-1.29-.97-2.46 0-1.17.61-1.74.83-1.98.22-.24.48-.3.64-.3h.46c.15 0 .35-.06.55.42.2.48.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.62.99 1.33 1.6.91.8 1.68 1.05 1.92 1.17.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.14 1.14z"/>
        </svg>
        Chat
      </a>
      <a href="tel:+918050041118">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Call
      </a>
    </nav>
  );
}
