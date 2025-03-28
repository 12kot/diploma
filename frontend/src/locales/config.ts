import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import intervalPlural from 'i18next-intervalplural-postprocessor';

import { en } from '.';

const namespaces = Object.keys(en) as Array<keyof typeof en>;

export const resources = {
  en,
} as const;

i18n
  .use(intervalPlural)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    compatibilityJSON: 'v4',
    resources,
    ns: namespaces,
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    defaultNS: 'common',
    fallbackLng: 'en',
  });

i18n.languages = ['en'];

export default i18n;
