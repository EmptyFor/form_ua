import * as types from '../types/profile';

export const deleteAdvert = (id) => ({
    type: types.DELETE_ADVERT,
    id
});

export const getAdvertId = (id,type) => ({
    type: types.GET_ADVERT_ID,
    id,
    type
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
