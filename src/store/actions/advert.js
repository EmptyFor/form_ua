import * as types from '../types/advert';

export const setGeneralInfo = (organisationName, EDRPOYCode, purchasePrice, documentPhoto) => ({
    type: types.GENERAL_INFO,
    organisationName,
    EDRPOYCode,
    purchasePrice,
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

export const setOwnerInfo = (ownerName, phoneNumber) => ({
    type: types.OWNER_INFO,
    ownerName,
    phoneNumber
});

export const setOrganizationName = (payload) => ({
    type: types.ORGANIZATION_NAME,
    payload
});

export const setEDRPOYCode = (payload) => ({
    type: types.EDRPOY_CODE,
    payload
});

export const setPhurchasePrice = (payload) => ({
    type: types.PURCHASE_PRICE,
    payload
});

export const setDocumentPhoto = (payload) => ({
    type: types.DOCUMENT_PHOTO,
    payload
});

export const setLegalForm = (payload) => ({
    type: types.LEGAL_FORM,
    payload
});

export const setMainEconomicActivityType = (payload) => ({
    type: types.MAIN_ECONOMIC_ACTIVITY_TYPE,
    payload
});

export const setAdditionalEconomicActivityType = (payload) => ({
    type: types.ADDITIONAL_ECONOMIC_ACTIVITY_TYPE,
    payload
});

export const setTaxationForm = (payload) => ({
    type: types.TAXATION_FORM,
    payload
});

export const setLicense = (payload) => ({
    type: types.LICENSE,
    payload
});

export const setLocation = (payload) => ({
    type: types.LOCATION,
    payload
});

export const setRegistrationDate = (payload) => ({
    type: types.REGISTRATION_DATE,
    payload
});

export const setIsPDVPayer = (payload) => ({
    type: types.IS_PDV_PAYER,
    payload
});

export const setBroughtEconomicActivity = (payload) => ({
    type: types.BROUGHT_ECONOMIC_ACTIVITY,
    payload
});

export const setHasDebt = (payload) => ({
    type: types.HAS_DEBT,
    payload
});

export const setShareCapital = (payload) => ({
    type: types.SHARE_CAPITAL,
    payload
});

export const setOwnerName = (payload) => ({
    type: types.OWNER_NAME,
    payload
});

export const setPhoneNumber = (payload) => ({
    type: types.PHONE_NUMBER,
    payload
});