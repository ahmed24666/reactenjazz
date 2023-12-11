import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './Locales/en.json'
import translationAR from './Locales/ar.json'
const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "ar",
    interpolation: {
      escapeValue: false
    },
    react:{
      useSuspence:false
    }
  });

  export default i18n;