import { all, call, put, takeLatest } from 'redux-saga/effects';
import { setToken, removeToken } from '../helpers';
import * as types from '../types/authorise';
import * as actions from '../actions/authorise';
import fetchSome from '../helpers/fetchJSON'
import { options } from '../helpers/options'


export function* authorise(email, password) {
  options.GET.body = { email, password }
  try {
    const someData = yield fetchSome('https://jsonplaceholder.typicode.com/posts', options.GET)
  } catch (error) {
    yield put(actions.setError(error.message));
    // yield removeToken();
  }
}

export function* logout() {
  try {
    yield removeToken();
  } catch (error) {
    console.error('some error happened', error);
  }
}


export default function* () {
  yield all([
    yield takeLatest(types.LOGIN, ({ email, password }) => authorise(email, password)),
    yield takeLatest(types.LOGOUT, logout),

  ])
}