"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent-dismissed")) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    localStorage.setItem("cookie-consent-dismissed", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm px-4 py-3">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          This site uses Google Analytics to collect anonymous usage data to help
          improve the experience. By continuing to use this site, you acknowledge
          this tracking.{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            Learn more
          </a>
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
