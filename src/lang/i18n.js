import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguaeDetector from "i18next-browser-languagedetector";

import HomeKo from "./ko/home.json";
import ProductKo from "./ko/product.json";
import ContactKo from "./ko/contact.json";
import FooterKo from "./ko/footer.json";
import RecruitKo from "./ko/recruit.json";

import HomeEn from "./en/home.json";
import ProductEn from "./en/product.json";
import ContactEn from "./en/contact.json";
import FooterEn from "./en/footer.json";
import RecruitEn from "./en/recruit.json";

const resources = {
  ko: {
    home: HomeKo,
    product: ProductKo,
    contact: ContactKo,
    footer: FooterKo,
    recruit: RecruitKo
  },
  en: {
    home: HomeEn,
    product: ProductEn,
    contact: ContactEn,
    footer: FooterEn,
    recruit: RecruitEn
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