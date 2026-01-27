declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, string | number | boolean>) => void;
    };
  }
}

export const trackEvent = (eventName: string, eventData?: Record<string, string | number | boolean>) => {
  if (typeof window !== "undefined" && window.umami) {
    window.umami.track(eventName, eventData);
  }
};

export const trackLead = (type: "email" | "phone", action: string) => {
  trackEvent("lead", { type, action });
};

export const trackProjectClick = (projectName: string) => {
  trackEvent("project_click", { project: projectName });
};

export const trackLanguageChange = (from: string, to: string) => {
  trackEvent("language_change", { from, to });
};

export const trackExternalLink = (url: string) => {
  trackEvent("external_link", { url });
};
