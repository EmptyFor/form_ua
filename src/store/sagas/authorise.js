import { all, call, put, takeLatest } from 'redux-saga/effects';
import { setToken, removeToken } from '../helpers';
import * as types from '../types/authorise';
import * as actions from '../actions/authorise';
import * as api from './api/index';
import fetchSome from '../helpers/fetchJSON'



export function* authorise(email, password) {
  try {
    console.log({email, password})
    const someData = yield fetchSome('https://192.168.1.151:3000/api/v1/log_in', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    })
    console.log(someData)
  } catch (error) {
    yield put(actions.setError(error.message));
    // yield removeToken();
  }
  // yield put(actions.setLoadingStatus(false));
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