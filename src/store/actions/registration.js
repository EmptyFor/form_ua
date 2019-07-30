import * as types from '../types/registration';

export const firstPage = (login, phone) => ({
    type: types.FIRST_PAGE_DATA,
    login,
    phone
});

export const twicePage = (login, phone, email, password) => ({
    type: types.TWICE_PAGE_DATA,
    email,
    password,
    login,
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
