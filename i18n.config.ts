export const i18n = {
  defaultLocale: "en",
  locales: ["en", "de"],
} as const;

export const MAP_LANGUAGES = {
  en: "English",
  de: "Germain",
} as const;

export type Locale = (typeof i18n)["locales"][number];
