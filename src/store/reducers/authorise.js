import * as types from '../types/authorise';
import { getToken } from '../helpers/localStorage';


const initState = {
  token: getToken() || null,
  error: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.SET_AUTH_DATA:
      return {
        ...state,
        token: action.token,
        error: ''
      };
    case types.SET_ERROR:
      return {
        ...state,
        error: action.error
      };
    // case types.RESET_ERROR:
    //   return {
    //     ...state,
    //     error: ''
    //   };
    case types.LOGOUT:
      return {
        ...initState,
        token: null
      };
    // case types.SET_LOADING_STATUS:
    //   return {
    //     ...state,
    //     isLoading: action.status
    //   };
    default:
      return state;
  };
};
