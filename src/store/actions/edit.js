import * as types from '../types/edit';

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

export const setAdditionalInfo = (legal_form, kved_code, kved_name, extra_kved_name, tax_form, license, city, region, registered_at, pda, have_activity, no_debt, capital) => ({
    type: types.ADDITIONAL_INFO,
    legal_form,
    kved_code,
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

export const setEditData = (name, code, price, image, legal_form, kved_code, kved_name, extra_kved_name, tax_form, license, city, region, registered_at, pda, have_activity, no_debt, capital, owner_data, tel) => ({
    type: types.SET_EDIT_DATA,
    name,
    code,
    price,
    image,
    legal_form,
    kved_code,
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

export const sendEditData = (id, data) => ({
    type: types.SEND_EDIT_DATA,
    id,
    data
})

export const clearAllInfo = (clear) => ({
    type: types.CLEAR_FORM,
    clear
})

export const getStatusResponse = (response, status) => ({
    type: types.GET_STATUS_RESPONSE,
    response,
    status
})

export const setClearStatus = (clearStatus) => ({
    type: types.SET_CLEAR_STATUS,
    clearStatus
})

export const setError = (error) => ({
    type: types.SET_ERROR,
    error
});