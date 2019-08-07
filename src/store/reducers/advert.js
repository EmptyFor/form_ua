import * as types from '../types/advert';
// import { stat } from 'fs';

const initState = {
    name: '',
    code: 0,
    price: 0,
    image: undefined,
    legal_form: '',
    kved_code: '',
    kved_name: '',
    extra_kved_name: [],
    tax_form: '',
    license: [],
    city: '',
    region: '',
    registered_at: '',
    pda: false,
    have_activity: false,
    no_debt: false,
    capital: 0,
    owner_data: '',
    tel: [],
    clear: false,
    response: [],
    status:''
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
                kved_code: action.kved_code,
                kved_name: action.kved_name,
                extra_kved_name: action.extra_kved_name,
                tax_form: action.tax_form,
                license: action.license,
                city: action.city,
                region: action.region,
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
            
            case types.GET_STATUS_RESPONSE:
            return {
                ...state,
                response: action.response,
                status: action.status
            }

            case types.SET_CLEAR_STATUS:
            return {
                ...state,
                status: action.clearStatus
            }

        default:
            return state
    }
}