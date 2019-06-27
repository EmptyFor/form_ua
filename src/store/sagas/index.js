import { all, fork } from 'redux-saga/effects';
import authoriseSaga from './authorise';

export default function* rootSaga() {
  yield all([
    fork(authoriseSaga),
  ]);
}