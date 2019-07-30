import * as types from '../types/user';

export const getUserId = (id) => ({
    type: types.GET_USER_ID,
    id
});

export const getUserInfo = (data) => ({
    type: types.GET_USER_INFO,
    data
});

export const setError = (error) => ({
    type: types.SET_ERROR,
    error
});