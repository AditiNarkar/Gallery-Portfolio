'use client'

import "./globals.css";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import BackgroundSaman from "../components/BackgroundSaman.js"

export default function RootLayout({ children }) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const pos = document.documentElement;
      const mouseMoveHandler = (e) => {
        pos.style.setProperty('--x', e.clientX + 'px');
        pos.style.setProperty('--y', e.clientY + 'px');
      };
      pos.addEventListener('mousemove', mouseMoveHandler);


      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint
      };

      checkMobile();
      window.addEventListener('resize', checkMobile);

      return () => {
        pos.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('resize', checkMobile);
      };
    }
  }, [])


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>ADT's Gallery</title>
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      </head>
      <body>
        <BackgroundSaman />
        {!isMobile && <div className={styles.torch}></div>}
        {children}
      </body>
    </html>
  );
}
