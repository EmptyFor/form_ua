import { all, fork } from 'redux-saga/effects';
import authoriseSaga from './authorise';
import registrationSaga from './registration';
import advertSaga from './advert';
import editSaga from './edit';
import userSaga from './user'
import getSearchPostsSaga from './search'
import detailsSaga from './details'
import profileActionsSaga from './profile'

export default function* rootSaga() {
  yield all([
    fork(authoriseSaga),
    fork(registrationSaga),
    fork(advertSaga),
    fork(editSaga),
    fork(userSaga), 
    fork(getSearchPostsSaga),
    fork(profileActionsSaga),
    fork(detailsSaga),
  ]);
}