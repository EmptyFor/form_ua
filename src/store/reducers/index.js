import { combineReducers } from 'redux';
import advert from './advert';
import authorise from './authorise';
import search from './search';
import registration from './registration';

export default combineReducers({
  advert,
  auth: authorise,
  search,
  registration
});