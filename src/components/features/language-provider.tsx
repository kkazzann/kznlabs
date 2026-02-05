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

function setLanguageCookie(language: Language) {
  if (typeof document === "undefined") return;
  document.cookie = `${STORAGE_KEY}=${language}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

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

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguageState] = useState<Language>(() => initialLanguage ?? detectLanguage());

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
    setLanguageCookie(language);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
  }, [language]);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
      setLanguageCookie(next);
    }
  };

  return <LanguageContext.Provider value={{ language, setLanguage, isReady: true }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export const LANGUAGE_STORAGE_KEY = STORAGE_KEY;
