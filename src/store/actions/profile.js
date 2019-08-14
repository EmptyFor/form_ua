import * as types from '../types/profile';

export const deleteAdvert = (id) => ({
    type: types.DELETE_ADVERT,
    id
});

export const getAdvertId = (id, tupe) => ({
    type: types.GET_ADVERT_ID,
    id,
    tupe
});

export const clearAdvertId = () => ({
    type: types.CLEAR_ADVERT_ID,
});

export const checkAdvertStatus = (status) => ({
    type: types.CHECK_STATUS,
    status
});

export const deactivateAdvert = (id) => ({
    type: types.DEACTIVATE_ADVERT,
    id
});

export const setStatusDeactivateAdvert = (somethink) => ({
    type: types.SET_STATUS_DEACTIVATE_ADVERT,
    somethink
});

export const editAdvert = (id) => ({
    type: types.EDIT_ADVERT,
    id
});

export const setError = (error) => ({
    type: types.SET_ERROR,
    error
});