import * as types from '../types/advert';
import { stat } from 'fs';

const initState = {
    organisationName: '',
    EDRPOYCode: '',
    purchasePrice: '',
    documentPhoto: '',
    legalForm: '',
    mainEconomicActivityType: '',
    additionalEconomicActivityType: [],
    taxationForm: '',
    license: [],
    location: '',
    registrationDate: '',
    isPDVPayer: '',
    broughtEconomicActivity: '',
    hasDebt: '',
    shareCapital: '',
    ownerName: '',
    phoneNumbers: [],
}

export default (state = initState, action) => {
    switch (action.type) {
        case types.GENERAL_INFO:
            return {
                ...state,
                organisationName: action.organisationName,
                EDRPOYCode: action.EDRPOYCode,
                purchasePrice: action.purchasePrice,
            }
        case types.ADDITIONAL_INFO:
            return {
                ...state,
                legalForm: action.legalForm,
                mainEconomicActivityType: action.mainEconomicActivityType,
                additionalEconomicActivityType: action.additionalEconomicActivityType,
                taxationForm: action.taxationForm,
                license: action.license,
                location: action.location,
                registrationDate: action.registrationDate,
                isPDVPayer: action.isPDVPayer,
                broughtEconomicActivity: action.broughtEconomicActivity,
                hasDebt: action.hasDebt,
                shareCapital: action.shareCapital,
            }
        case types.OWNER_INFO:
            return {
                ...state,
                ownerName: action.ownerName,
                phoneNumbers: action.phoneNumbers
            }
        case types.ORGANIZATION_NAME:
            return {
                ...state,
                organisationName: action.payload
            };
        case types.EDRPOY_CODE:
            return {
                ...state,
                EDRPOYCode: action.payload
            };
        case types.PURCHASE_PRICE:
            return {
                ...state,
                purchasePrice: action.payload
            };
        case types.DOCUMENT_PHOTO:
            return {
                ...state,
                documentPhoto: action.payload
            };
        case types.LEGAL_FORM:
            return {
                ...state,
                legalForm: action.payload
            };
        case types.MAIN_ECONOMIC_ACTIVITY_TYPE:
            return {
                ...state,
                mainEconomicActivityType: action.payload
            };
        case types.ADDITIONAL_ECONOMIC_ACTIVITY_TYPE:
            return {
                ...state,
                additionalEconomicActivityType: action.payload
            };
        case types.TAXATION_FORM:
            return {
                ...state,
                taxationForm: action.payload
            };
        case types.LICENSE:
            return {
                ...state,
                license: action.payload
            };
        case types.LOCATION:
            return {
                ...state,
                location: action.payload
            };
        case types.REGISTRATION_DATE:
            return {
                ...state,
                registrationDate: action.payload
            };
        case types.IS_PDV_PAYER:
            return {
                ...state,
                isPDVPayer: action.payload
            };
        case types.BROUGHT_ECONOMIC_ACTIVITY:
            return {
                ...state,
                broughtEconomicActivity: action.payload
            };
        case types.HAS_DEBT:
            return {
                ...state,
                hasDebt: action.payload
            };
        case types.SHARE_CAPITAL:
            return {
                ...state,
                shareCapital: action.payload
            };
        case types.OWNER_NAME:
            return {
                ...state,
                ownerName: action.payload
            };
        case types.PHONE_NUMBER:
            return {
                ...state,
                phoneNumbers: action.payload
            };
        default:
            return state
    }
}