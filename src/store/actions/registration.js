import * as types from '../types/registration';

export const firstPage = (first_name, phone) => ({
    type: types.FIRST_PAGE_DATA,
    first_name,
    phone
});

export const twicePage = (first_name, phone, email, password) => ({
    type: types.TWICE_PAGE_DATA,
    email,
    password,
    first_name,
    phone
});
export const confirmReg = (data) => ({
    type: types.CONFIRM_REGISTRATION,
    data
});

export const setError = (error) => ({
    type: types.SET_ERROR,
    error
});
