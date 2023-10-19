import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguaeDetector from "i18next-browser-languagedetector";

import HomeKo from "./ko/home.json";
import ProductKo from "./ko/product.json";

import HomeEn from "./en/home.json";
import ProductEn from "./en/product.json";

const resources = {
  ko: {
    home: HomeKo,
    product: ProductKo
  },
  en: {
    home: HomeEn,
    product: ProductEn
  },
};

i18n
  .use(LanguaeDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
  })

export default i18n;