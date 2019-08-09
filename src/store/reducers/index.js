import { combineReducers } from 'redux';
import advert from './advert';
import authorise from './authorise';
import search from './search';
import registration from './registration';
import user from './user';
import details from './details';
import profile from './profile';



export default combineReducers({
  advert,
  auth: authorise,
  search,
  usr: user,
  details,
  profile,
  reg: registration
});