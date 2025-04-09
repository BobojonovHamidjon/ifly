import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import uz from "./Locales/uzbek.json";
import ru from "./Locales/russian.json";
import en from "./Locales/english.json";
const savedLang = localStorage.getItem('language') || 'uz';
 
i18n

  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    lng:savedLang,
    resources: { 
      uz: { translation: uz },
      ru: { translation: ru },
      en: { translation: en },
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'language',
    }
  });

export default i18n;
