import { combineReducers } from 'redux';
import advert from './advert';
import authorise from './authorise';
import search from './search';
import registration from './registration';
import user from './user'


export default combineReducers({
  advert,
  auth: authorise,
  sch: search,
  usr: user,
  reg:registration
});