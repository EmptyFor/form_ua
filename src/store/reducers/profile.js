import * as types from '../types/profile';


const initState = {
    error: '',
    id: '',
    tupe: '',
    status:''
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.GET_ADVERT_ID:
            return {
                ...state,
                id: action.id,
                tupe: action.tupe
            };
            case types.CLEAR_ADVERT_ID:
            return {
                ...state,
                id: '',
                tupe: ''
            };
            case types.CHECK_STATUS:
            return {
                ...state,
                status: action.status
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