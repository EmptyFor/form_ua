import * as types from '../types/registration';
// import { getToken } from '../helpers/localStorage';


const initState = {
  first_name: '',
  phone: '',
  email: '',
  password: '',
  data: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.FIRST_PAGE_DATA:
      return {
        ...state,
        first_name: action.first_name,
        phone: action.phone
      };
    case types.CONFIRM_REGISTRATION:
      return {
        data: action.data
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
