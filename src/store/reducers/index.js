import { combineReducers } from 'redux';
import advert from './advert';
import edit from './edit';
import authorise from './authorise';
import search from './search';
import registration from './registration';
import user from './user';
import details from './details';
import profile from './profile';
import language from './language'


export default combineReducers({
  advert,
  edit,
  auth: authorise,
  search,
  usr: user,
  details,
  profile,
  reg: registration,
  language
});