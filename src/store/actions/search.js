import * as types from '../types/search';

export const setMainPageFormInfo = (

    legal_form,
    kved_code,
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
    kved_code,
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

export const postCurrentPage = (current_page) => ({
    type: types.POST_CURRENT_PAGE,
    current_page
})

export const getPagePosts = (data) =>({
    type: types.GET_SEARCH_POSTS,
    data
})

export const setSearchArgs = (search_args) => ({
    type: types.GET_FOUND_POSTS,
    search_args
})

export const setError = (error) => ({
    type: types.SET_ERROR,
    error
});