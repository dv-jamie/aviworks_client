import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguaeDetector from "i18next-browser-languagedetector";

import TranslationHomeKo from "./ko/home.json";
import TranslationHomeEn from "./en/home.json";

const resources = {
  ko: {
    home: TranslationHomeKo,
  },
  en: {
    home: TranslationHomeEn,
  },
};

i18n
  .use(LanguaeDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko",
    ns:['home'],
  })

export default i18n;