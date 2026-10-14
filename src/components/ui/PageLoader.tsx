"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./PageLoader.module.css";

export default function PageLoader() {
  const onAnimationComplete = useRef<(() => void) | null>(null);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let active = true;
    let pageLoaded = document.readyState === "complete";
    let animationComplete = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let hideScheduled = false;
    let hideTimeoutId: number | undefined;
    let fallbackTimeoutId: number | undefined;

    const finishLoading = () => {
      if (!active || !pageLoaded || !animationComplete || hideScheduled) return;
      hideScheduled = true;
      if (fallbackTimeoutId !== undefined) window.clearTimeout(fallbackTimeoutId);

      setVisible(false);
      hideTimeoutId = window.setTimeout(() => setMounted(false), 500);
    };

    const handlePageLoad = () => {
      pageLoaded = true;
      finishLoading();
    };

    const handleAnimationEnd = () => {
      animationComplete = true;
      finishLoading();
    };

    onAnimationComplete.current = handleAnimationEnd;
    window.addEventListener("load", handlePageLoad, { once: true });
    fallbackTimeoutId = window.setTimeout(() => {
      console.warn("Page loader timed out before loading completed.");
      pageLoaded = true;
      animationComplete = true;
      finishLoading();
    }, 15000);
    finishLoading();

    return () => {
      active = false;
      onAnimationComplete.current = null;
      window.removeEventListener("load", handlePageLoad);
      if (hideTimeoutId !== undefined) window.clearTimeout(hideTimeoutId);
      if (fallbackTimeoutId !== undefined) window.clearTimeout(fallbackTimeoutId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`${styles.overlay} ${visible ? "" : styles.hidden}`}
      role="status"
      aria-label="Loading page"
      aria-live="polite"
    >
      <div className={styles.loader}>
        <div className={styles.loadingText}>
          Loading<span className={styles.dot}>.</span>
          <span className={styles.dot}>.</span>
          <span className={styles.dot}>.</span>
        </div>
        <div className={styles.loadingBarBackground} aria-hidden="true">
          <div
            className={styles.loadingBar}
            onAnimationEnd={() => onAnimationComplete.current?.()}
          >
            <div className={styles.whiteBarsContainer}>
              {Array.from({ length: 10 }, (_, index) => (
                <div className={styles.whiteBar} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
