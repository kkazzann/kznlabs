"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

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
    if (detected !== language) {
      setLanguageState(detected);
    }
    document.documentElement.lang = detected;
    setIsReady(true);
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    }
  }, []);

  const value = useMemo(
    () => ({ language, setLanguage, isReady }),
    [language, setLanguage, isReady]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
