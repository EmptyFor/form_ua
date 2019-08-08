import * as types from '../types/details';

export const setAdvertDetails = (info) =>({
    type: types.SET_ADVERT_DETAILS,
    info
}) 

export const getAdvertDetails = (advertid) =>({
    type: types.GET_ADVERT_DETAILS,
    advertid
}) 

export const setError = (error) => ({
    type: types.SET_ERROR,
    error
});