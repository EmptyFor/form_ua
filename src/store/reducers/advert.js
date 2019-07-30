import * as types from '../types/advert';
// import { stat } from 'fs';

const initState = {
    name: '',
    code: '',
    price: '',
    image: '',
    legal_form: '',
    type_activity: '',
    extra_type_activity: [],
    tax_form: '',
    license: [],
    location: '',
    registered_at: '',
    pda: '',
    have_activity: '',
    no_debt: '',
    capital: '',
    owner_data: '',
    tel: [],
    clear: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case types.GENERAL_INFO:
            return {
                ...state,
                name: action.name,
                code: action.code,
                price: action.price,
            };
        case types.DOCUMENT_PHOTO:
            return {
                ...state,
                image: action.payload
            };
        case types.ADDITIONAL_INFO:
            return {
                ...state,
                legal_form: action.legal_form,
                type_activity: action.type_activity,
                extra_type_activity: action.extra_type_activity,
                tax_form: action.tax_form,
                license: action.license,
                location: action.location,
                registered_at: action.registered_at,
                pda: action.pda,
                have_activity: action.have_activity,
                no_debt: action.no_debt,
                capital: action.capital,
            };
        case types.OWNER_INFO:
            return {
                ...state,
                owner_data: action.owner_data,
                tel: action.tel
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