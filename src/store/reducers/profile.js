import * as types from '../types/profile';


const initState = {
    error: '',
    id: '',
    type: ''
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.GET_ADVERT_ID:
            return {
                ...state,
                id: action.id,
                type: action.type
            };
        case types.SET_ERROR:
            return {
                ...state,
                error: action.error
            };

        default:
            return state;
    };
};
