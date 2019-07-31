import * as types from '../types/user';


const initState = {
    user: {},
    error: ''
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.GET_USER_INFO:
            return {
                user: action.data
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