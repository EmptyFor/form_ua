import * as types from '../types/advert';

export const setGeneralInfo = (organisationName, EDRPOYCode, purchasePrice, documentPhoto) => ({
    type: types.GENERAL_INFO,
    organisationName,
    EDRPOYCode,
    purchasePrice,
});

export const setDocumentPhoto = (payload) => ({
    type: types.DOCUMENT_PHOTO,
    payload
});

export const setAdditionalInfo = (legalForm, mainEconomicActivityType, additionalEconomicActivityType, taxationForm, license, location, registrationDate, isPDVPayer, broughtEconomicActivity, hasDebt, shareCapital ) => ({
    type: types.ADDITIONAL_INFO,
    legalForm,
    mainEconomicActivityType,
    additionalEconomicActivityType,
    taxationForm,
    license,
    location,
    registrationDate,
    isPDVPayer,
    broughtEconomicActivity,
    hasDebt,
    shareCapital,
});

export const setOwnerInfo = (ownerName, phoneNumbers) => ({
    type: types.OWNER_INFO,
    ownerName,
    phoneNumbers
});

export const clearAllInfo = (clear) => ({
    type: types.CLEAR_FORM,
    clear
})