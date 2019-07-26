import * as types from '../types/search';

export const setMainPageFormInfo = (legalForm, mainEconomicActivityType, location, taxationForm, purchasePriceFrom, purchasePriceTo, isPDVPayer) => ({
    type: types.MAIN_PAGE_FORM,
    legalForm,
    mainEconomicActivityType,
    location,
    taxationForm,
    purchasePriceFrom,
    purchasePriceTo,
    isPDVPayer
})