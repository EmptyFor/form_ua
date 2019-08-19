import * as types from '../types/language';

const initState = {
    language:'',
    error: '',
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.SET_LANGUAGE:
            return {
                ...state,
                language: action.language
            }

        default:
            return state;
    };
};
