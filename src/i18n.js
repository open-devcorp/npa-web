import { createI18n } from "vue-i18n";
import es from "./locales/es.json"; // Preload default locale only

// Keep track of which locales have been loaded
export const loadedLanguages = new Set(['es']);

const i18n = createI18n({
  legacy: false,
  locale: "es",
  globalInjection: true,
  messages: { es },
});

async function loadLocaleMessages(locale) {
  if (loadedLanguages.has(locale)) return;
  let messages;
  if (locale === 'en') {
    messages = (await import('./locales/en.json')).default;
  } else if (locale === 'es') {
    messages = es;
  }
  if (messages) {
    i18n.global.setLocaleMessage(locale, messages);
    loadedLanguages.add(locale);
  }
}

export async function setLocale(locale) {
  await loadLocaleMessages(locale);
  i18n.global.locale.value = locale;
}

export default i18n;
