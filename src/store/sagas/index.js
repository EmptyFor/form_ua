import { all, fork } from 'redux-saga/effects';
import authoriseSaga from './authorise';
import registrationSaga from './registration';
import advertSaga from './advert';
import userSaga from './user'
import getCurrentPagePosts from './search'

export default function* rootSaga() {
  yield all([
    fork(authoriseSaga),
    fork(registrationSaga),
    fork(advertSaga),
    fork(userSaga),
    fork(getCurrentPagePosts)
  ]);
}