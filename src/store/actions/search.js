import * as types from '../types/search';

export const setMainPageFormInfo = (legalForm, mainEconomicActivityType, location, taxationForm, purchasePriceFrom, purchasePriceTo, isPDVPayer, additionalEconomicActivityType, license, broughtEconomicActivity, hasDebt) => ({
    type: types.MAIN_PAGE_FORM,
    legalForm,
    mainEconomicActivityType,
    location,
    taxationForm,
    purchasePriceFrom,
    purchasePriceTo,
    isPDVPayer,
    additionalEconomicActivityType,
    license,
    broughtEconomicActivity,
    hasDebt
})

export const clearAllInfo = (clear) => ({
    type: types.CLEAR_FORM,
    clear
})
