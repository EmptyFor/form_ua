import { combineReducers } from 'redux';
import authorise from './authorise';
import registration from './registration';

export default combineReducers({
  auth: authorise,
  registration
});