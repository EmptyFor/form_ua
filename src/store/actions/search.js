import * as types from '../types/search';

export const setMainPageFormInfo = (

    legal_form,
    kved_name,
    city,
    region,
    tax_form,
    price_from,
    price_to,
    pda,
    extra_kved_name,
    license,
    have_activity,
    no_debt

) => ({

    type: types.MAIN_PAGE_FORM,
    legal_form,
    kved_name,
    city,
    region,
    tax_form,
    price_from,
    price_to,
    pda,
    extra_kved_name,
    license,
    have_activity,
    no_debt
})

export const clearAllInfo = (clear) => ({
    type: types.CLEAR_FORM,
    clear
})
