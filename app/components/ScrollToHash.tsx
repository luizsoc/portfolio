"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/app/lib/scrollToSection";

// Handles landing directly on a URL like "/#skills" (bookmark, shared link,
// or refresh after an in-page nav click already rewrote the hash) — those
// don't get a native browser scroll-to-anchor in this app, the same reason
// scrollToSection exists for in-page nav clicks in the first place.
export function ScrollToHash() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id || !document.getElementById(id)) return;

    scrollToSection(id);
  }, []);

  return null;
}
