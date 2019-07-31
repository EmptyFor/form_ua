import * as types from '../types/advert';

export const setGeneralInfo = (name, code, price) => ({
    type: types.GENERAL_INFO,
    name,
    code,
    price,
});

export const setDocumentPhoto = (payload) => ({
    type: types.DOCUMENT_PHOTO,
    payload
});

export const setAdditionalInfo = (legal_form, kved_name, extra_kved_name, tax_form, license, city, region, registered_at, pda, have_activity, no_debt, capital) => ({
    type: types.ADDITIONAL_INFO,
    legal_form,
    kved_name,
    extra_kved_name,
    tax_form,
    license,
    city,
    region,
    registered_at,
    pda,
    have_activity,
    no_debt,
    capital,
});

export const setOwnerInfo = (owner_data, tel) => ({
    type: types.OWNER_INFO,
    owner_data,
    tel
});

export const setAdvertData = (name, code, price, image, legal_form, kved_name, extra_kved_name, tax_form, license, city, region, registered_at, pda, have_activity, no_debt, capital, owner_data, tel) => ({
    type: types.SEND_ADVERT_DATA,
    name,
    code,
    price,
    image,
    legal_form,
    kved_name,
    extra_kved_name,
    tax_form,
    license,
    city,
    region,
    registered_at,
    pda,
    have_activity,
    no_debt,
    capital,
    owner_data,
    tel
})

export const clearAllInfo = (clear) => ({
    type: types.CLEAR_FORM,
    clear
})

export const setError = (error) => ({
    type: types.SET_ERROR,
    error
});