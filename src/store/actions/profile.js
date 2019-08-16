import * as types from '../types/profile';

export const deleteAdvert = (id) => ({
    type: types.DELETE_ADVERT,
    id
});

export const getAdvertId = (id, tupe, active) => ({
    type: types.GET_ADVERT_ID,
    id,
    tupe,
    active
});

export const clearAdvertId = () => ({
    type: types.CLEAR_ADVERT_ID,
});

export const checkAdvertStatus = (status) => ({
    type: types.CHECK_STATUS,
    status
});

export const deactivateAdvert = (id, active) => ({
    type: types.DEACTIVATE_ADVERT,
    id,
    active
});


export const editAdvert = (id) => ({
    type: types.EDIT_ADVERT,
    id
});

export const setError = (error) => ({
    type: types.SET_ERROR,
    error
});
