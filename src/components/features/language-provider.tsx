"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "pl";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  isReady: boolean;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "kznlabs.language";

function detectLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "pl" || stored === "en") {
    return stored;
  }
  const navigatorLanguage = window.navigator.language.toLowerCase();
  if (navigatorLanguage.startsWith("pl")) {
    return "pl";
  }
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const detected = detectLanguage();
    setLanguageState(detected);
    document.documentElement.lang = detected;
    let isMounted = true;

    const waitForFonts = document.fonts?.ready ?? Promise.resolve();
    const waitForLoad = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
        return;
      }
      const handleLoad = () => resolve();
      window.addEventListener("load", handleLoad, { once: true });
    });

    Promise.all([waitForFonts, waitForLoad]).then(() => {
      if (isMounted) {
        setIsReady(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    }
  };

  if (!isReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--background)]">
        <div className="flex flex-col items-center gap-3 text-[var(--muted)]">
          <div className="size-8 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)]" />
          <span className="text-xs uppercase tracking-[0.3em]">Loading</span>
        </div>
      </div>
    );
  }

  return <LanguageContext.Provider value={{ language, setLanguage, isReady }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
