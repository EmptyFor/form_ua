import i18n from "i18next";
import translationUKR from './assets/db/locales/ukr/translation.json'
import translationRU from './assets/db/locales/ru/translation.json'
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// the translations
const resources = {
    ukr: {
        translation: translationUKR
    },
    ru: {
        translation: translationRU
    }
};

i18n
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem('localHaste'),
        keySeparator: false, // we do not use keys in form messages.welcome

        // interpolation: {
        //     escapeValue: false // react already safes from xss
        // }
    });

export default i18n