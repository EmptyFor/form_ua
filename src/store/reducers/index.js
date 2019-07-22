import { combineReducers } from 'redux';
import advert from './advert';
import authorise from './authorise';
import registration from './registration';

export default combineReducers({
  advert,
  auth: authorise,
  registration
});