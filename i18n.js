import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

// Import translation files
import en from './locales/en.json';
import ar from './locales/ar.json';

// Set the key-value pairs for the supported languages
const i18n = new I18n({
    ar: ar,
    en: en,
  });

// Set the locale once at the beginning of your app
i18n.locale = 'ar';
i18n.enableFallback = true;

export default i18n;