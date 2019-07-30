import { all, fork } from 'redux-saga/effects';
import authoriseSaga from './authorise';
import registrationSaga from './registration';

export default function* rootSaga() {
  yield all([
    fork(authoriseSaga),
    fork(registrationSaga)
  ]);
}