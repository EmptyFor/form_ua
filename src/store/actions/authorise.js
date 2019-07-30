import * as types from '../types/authorise';

export const login = (email, password) => ({
    type: types.LOGIN,
    email,
    password
});

export const setUserId = (id) => ({
    type:types.SET_USER_DATA,
    id
});

export const setAuthData = (token) => ({
    type: types.SET_AUTH_DATA,
    token
});

export const logout = () => ({
    type: types.LOGOUT
});

export const setError = (error) => ({
    type: types.SET_ERROR,
    error
});
