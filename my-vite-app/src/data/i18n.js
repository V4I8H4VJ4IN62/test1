import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import headerEn from '../locales/en/header.json'
import headerHi from '../locales/hi/header.json'
import headerMa from '../locales/ma/header.json'
import headerBe from '../locales/be/header.json'
import headerTe from '../locales/te/header.json'


import heroEn from '../locales/en/hero.json'
import heroHi from '../locales/hi/hero.json'
import heroMa from '../locales/ma/hero.json'
import heroBe from '../locales/be/hero.json'
import heroTe from '../locales/te/hero.json'


import testimonialEn from '../locales/en/testimonial.json'
import testimonialHi from '../locales/hi/testimonial.json'
import testimonialMa from '../locales/ma/testimonial.json'
import testimonialBe from '../locales/be/testimonial.json'
import testimonialTe from '../locales/te/testimonial.json'


import aboutUsEn from '../locales/en/aboutUs.json'
import aboutUsHi from '../locales/hi/aboutUs.json'
import aboutUsMa from '../locales/ma/aboutUs.json'
import aboutUsBe from '../locales/be/aboutUs.json'
import aboutUsTe from '../locales/te/aboutUs.json'


import footerEn from '../locales/en/footer.json'
import footerHi from '../locales/hi/footer.json'
import footerMa from '../locales/ma/footer.json'
import footerBe from '../locales/be/footer.json'
import footerTe from '../locales/te/footer.json'


import contactUsEn from '../locales/en/contactUs.json'
import contactUsHi from '../locales/hi/contactUs.json'
import contactUsMa from '../locales/ma/contactUs.json'
import contactUsBe from '../locales/be/contactUs.json'
import contactUsTe from '../locales/te/contactUs.json'


import cropPriceEn from '../locales/en/cropPrice.json'
import cropPriceHi from '../locales/hi/cropPrice.json'
import cropPriceMa from '../locales/ma/cropPrice.json'
import cropPriceBe from '../locales/be/cropPrice.json'
import cropPriceTe from '../locales/te/cropPrice.json'


import featuredPostEn from '../locales/en/featuredPost.json'
import featuredPostHi from '../locales/hi/featuredPost.json'
import featuredPostMa from '../locales/ma/featuredPost.json'
import featuredPostBe from '../locales/be/featuredPost.json'
import featuredPostTe from '../locales/te/featuredPost.json'


import homeChartsEn from '../locales/en/homeCharts.json'
import homeChartsHi from '../locales/hi/homeCharts.json'
import homeChartsMa from '../locales/ma/homeCharts.json'
import homeChartsBe from '../locales/be/homeCharts.json'
import homeChartsTe from '../locales/te/homeCharts.json'


import loginEn from '../locales/en/login.json'
import loginHi from '../locales/hi/login.json'
import loginMa from '../locales/ma/login.json'
import loginBe from '../locales/be/login.json'
import loginTe from '../locales/te/login.json'


import registerEn from '../locales/en/register.json'
import registerHi from '../locales/hi/register.json'
import registerMa from '../locales/ma/register.json'
import registerBe from '../locales/be/register.json'
import registerTe from '../locales/te/register.json'


import cropYieldEn from '../locales/en/cropYield.json'
import cropYieldHi from '../locales/hi/cropYield.json'
import cropYieldMa from '../locales/ma/cropYield.json'
import cropYieldBe from '../locales/be/cropYield.json'
import cropYieldTe from '../locales/te/cropYield.json'


import cropRecommEn from '../locales/en/cropRecommendation.json'
import cropRecommHi from '../locales/hi/cropRecommendation.json'
import cropRecommMa from '../locales/ma/cropRecommendation.json'
import cropRecommBe from '../locales/be/cropRecommendation.json'
import cropRecommTe from '../locales/te/cropRecommendation.json'



i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        header: headerEn,
        hero: heroEn,
        testimonial: testimonialEn,
        aboutUs: aboutUsEn,
        footer: footerEn,
        contactUs: contactUsEn,
        cropPrice: cropPriceEn,
        featuredPost: featuredPostEn,
        homeCharts: homeChartsEn,
        login: loginEn,
        register: registerEn,
        cropYield: cropYieldEn,
        cropRecomm: cropRecommEn,
      },
      hi: {
        header: headerHi,
        hero: heroHi,
        testimonial: testimonialHi,
        aboutUs: aboutUsHi,
        footer: footerHi,
        contactUs: contactUsHi,
        cropPrice: cropPriceHi,
        featuredPost: featuredPostHi,
        homeCharts: homeChartsHi,
        login: loginHi,
        register: registerHi,
        cropYield: cropYieldHi,
        cropRecomm: cropRecommHi,
      },
      ma: {
        header: headerMa,
        hero: heroMa,
        testimonial: testimonialMa,
        aboutUs: aboutUsMa,
        footer: footerMa,
        contactUs: contactUsMa,
        cropPrice: cropPriceMa,
        featuredPost: featuredPostMa,
        homeCharts: homeChartsMa,
        login: loginMa,
        register: registerMa,
        cropYield: cropYieldMa,
        cropRecomm: cropRecommMa,
      },
      be: {
        header: headerBe,
        hero: heroBe,
        testimonial: testimonialBe,
        aboutUs: aboutUsBe,
        footer: footerBe,
        contactUs: contactUsBe,
        cropPrice: cropPriceBe,
        featuredPost: featuredPostBe,
        homeCharts: homeChartsBe,
        login: loginBe,
        register: registerBe,
        cropYield: cropYieldBe,
        cropRecomm: cropRecommBe,
      },
      te: {
        header: headerTe,
        hero: heroTe,
        testimonial: testimonialTe,
        aboutUs: aboutUsTe,
        footer: footerTe,
        contactUs: contactUsTe,
        cropPrice: cropPriceTe,
        featuredPost: featuredPostTe,
        homeCharts: homeChartsTe,
        login: loginTe,
        register: registerTe,
        cropYield: cropYieldTe,
        cropRecomm: cropRecommTe,
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    ns: ['header'],
    defaultNS: 'header',
  });

export default i18n;
