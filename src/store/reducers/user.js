import * as types from '../types/user';


const initState = {
    user: {},
    data: {},
    error: ''
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.GET_USER_INFO:
            return {
                ...state,
                user: action.user
            }

        case types.SET_PROFILE_INFO:
            return {
                ...state,
                data: action.data
            }
        case types.DELETE_USER_INFO:
            return {
                ...state,
                user: action.user
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