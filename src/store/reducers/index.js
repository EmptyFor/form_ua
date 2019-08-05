import { combineReducers } from 'redux';
import advert from './advert';
import authorise from './authorise';
import search from './search';
import registration from './registration';
import user from './user'


export default combineReducers({
  advert,
  auth: authorise,
<<<<<<< HEAD
   search,
=======
  search,
>>>>>>> 3a06a592e98e9fa443526456c81767be2286c36d
  usr: user,
  reg:registration
});