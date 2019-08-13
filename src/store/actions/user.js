import * as types from '../types/user';

export const getUserId = (id) => ({
    type: types.GET_USER_ID,
    id
});

export const getUserInfo = (user) => ({
    type: types.GET_USER_INFO,
    user
});

export const getProfileInfo = (current_page) => ({
    type: types.GET_PROFILE_INFO,
    current_page
})

export const setProfileInfo = (data) => ({
    type: types.SET_PROFILE_INFO,
    data
})

export const deletUserInfo = () => ({
    type: types.DELETE_USER_INFO,
    user: {}
})

export const setError = (error) => ({
    type: types.SET_ERROR,
    error
});