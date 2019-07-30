import { all, fork } from 'redux-saga/effects';
import authoriseSaga from './authorise';
// import registrationSaga from './registration';
import advertSaga from './advert';

export default function* rootSaga() {
  yield all([
    fork(authoriseSaga),
    // fork(registrationSaga),
    fork(advertSaga)
  ]);
}