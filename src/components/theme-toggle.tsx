"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

// Subscribe to changes of the `dark` class on <html> so the button label
// always reflects the live theme (no setState-in-effect needed).
function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function isDark() {
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle() {
  // Server render assumes light (the default); client reads the real class.
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // ignore storage failures (private mode, etc.)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {dark ? "Light mode" : "Dark mode"}
    </button>
  );
}
