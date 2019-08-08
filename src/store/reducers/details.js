import * as types from '../types/details';

const initState = {
    info: [],
    error: '',
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.SET_ADVERT_DETAILS:
            return {
                ...state,
                info: action.info
            }
        case types.SET_ERROR:
            return {
                ...state,
                error: action.error
            };

        default:
            return state;
    };
};
