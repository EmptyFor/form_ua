import * as types from '../types/search';
import { stat } from 'fs';

const initState = {
    organisationName: '',
    EDRPOYCode: '',
    purchasePrice: '',
    purchasePriceFrom: '',
    purchasePriceTo: '',
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
        case types.MAIN_PAGE_FORM:
            return {
                ...state,
                legalForm: action.legalForm,
                mainEconomicActivityType: action.mainEconomicActivityType,
                location: action.location,
                taxationForm: action.taxationForm,
                purchasePriceFrom: action.purchasePriceFrom,
                purchasePriceTo: action.purchasePriceTo,
                isPDVPayer: action.isPDVPayer
            }
        default:
            return state
    }
}