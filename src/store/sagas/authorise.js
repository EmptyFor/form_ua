import { all, put, takeLatest, call } from 'redux-saga/effects';
import { setToken, removeToken, setInfo } from '../helpers/localStorage';
import * as types from '../types/authorise';
import * as actions from '../actions/authorise';
// import fetchSome from '../helpers/fetchJSON'
// import { options } from '../helpers/options'
import { baseURL } from '../../core/constants/baseURL'
import axios from 'axios'

export function* authorise(email, password) {
  const user = {
    email: email,
    password: password
  }

  try {
    const { data } = yield axios.post(`${baseURL}ru/api/v1/log_in`, { user })
      .then(response => {
        return response;
      })

    const { id } = data.user
    const { auth_token } = data.user

    yield put(actions.setUserId(id));
    yield put(actions.setAuthData(auth_token));
    yield setInfo(id);
    yield setToken(auth_token);

  } catch (error) {
    yield put(actions.setError(error.message));
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