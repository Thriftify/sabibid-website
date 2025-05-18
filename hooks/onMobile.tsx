import { useEffect, useState } from "react";

export default function useResponsive(): { isMobile: boolean } {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Avoid hydration mismatch: only run this on client
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    // Set initial value
    updateIsMobile();

    // Add event listener
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
    } else {
      mediaQuery.addListener(handler); // Legacy
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handler);
      } else {
        mediaQuery.removeListener(handler); // Legacy
      }
    };
  }, []);

  return { isMobile };
}
