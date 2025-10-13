"use client";

import Script from "next/script";
import { useEffect } from "react";

/**
 * Lightweight placeholder for the missing visual edits integration.
 * Keeps the call sites intact while preventing build/runtime failures.
 */
export default function VisualEditsMessenger() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.info("VisualEditsMessenger placeholder mounted");
    }
  }, []);

  return (
    <Script
      id="visual-edits-messenger"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: "window.__VISUAL_EDITS__ = window.__VISUAL_EDITS__ || {};",
      }}
    />
  );
}