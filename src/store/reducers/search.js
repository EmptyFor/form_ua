import * as types from '../types/search';
import { retry } from 'redux-saga/effects';
// import { stat } from 'fs';

const initState = {
    price_from: '',
    price_to: '',
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
    clear: false,
    data: [],
    search_args: ''
}

export default (state = initState, action) => {
    switch (action.type) {
        case types.MAIN_PAGE_FORM:
            return {
                ...state,
                legal_form: action.legal_form,
                kved_code: action.kved_code,
                kved_name: action.kved_name,
                city: action.city,
                region: action.region,
                tax_form: action.tax_form,
                price_from: action.price_from,
                price_to: action.price_to,
                pda: action.pda,
                extra_kved_name: action.extra_kved_name,
                license: action.license,
                have_activity: action.have_activity,
                no_debt: action.no_debt
            }
        case types.CLEAR_FORM:
            return {
                ...state,
                clear: action.clear
            }
        case types.GET_SEARCH_POSTS:
            return {
                ...state,
                data: action.data
            }
        case types.GET_FOUND_POSTS:
            console.log(state)
            return {
                ...state,
                search_args: action.search_args
            }
        case types.SET_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
}