import { all, put, takeLatest, call } from 'redux-saga/effects';
import { removeToken } from '../helpers';
import * as types from '../types/authorise';
import * as actions from '../actions/authorise';
import fetchSome from '../helpers/fetchJSON'
import { options } from '../helpers/options'
import { baseURL } from '../../core/constants/baseURL'
import axios from 'axios'

export function* authorise(email, password) {
  const user = {
    email: email,
    password: password
  }
  // 'https://jsonplaceholder.typicode.com/users',
  // chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
  try {
    const { token } = yield axios.post(`${baseURL}ru/api/v1/log_in`, { user })
      .then(response => {
         return response.data;
      })
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