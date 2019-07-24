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
    clear: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case types.GENERAL_INFO:
            return {
                ...state,
                organisationName: action.organisationName,
                EDRPOYCode: action.EDRPOYCode,
                purchasePrice: action.purchasePrice,
            };
        case types.DOCUMENT_PHOTO:
            return {
                ...state,
                documentPhoto: action.payload
            };
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
            };
        case types.OWNER_INFO:
            return {
                ...state,
                ownerName: action.ownerName,
                phoneNumbers: action.phoneNumbers
            }
        case types.CLEAR_FORM:
            return {
                ...state,
                clear: action.clear
            }
        default:
            return state
    }
}