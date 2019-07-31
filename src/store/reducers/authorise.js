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
    
    case types.LOGOUT:
      return {
        ...initState,
        token: null
      };
    default:
      return state;
  };
};
