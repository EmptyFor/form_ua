import { combineReducers } from 'redux';
import authorise from './authorise';

export default combineReducers({
  auth: authorise,
  });