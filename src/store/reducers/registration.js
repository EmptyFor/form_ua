import * as types from '../types/registration';
// import { getToken } from '../helpers/localStorage';


const initState = {
  login: '',
  phone: '',
  email: '',
  password: '',
  confirm: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.FIRST_PAGE_DATA:
      return {
        ...state,
        login: action.login,
        phone: action.phone
      };
    case types.CONFIRM_REGISTRATION:
      return {
        confirm: action.status
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
