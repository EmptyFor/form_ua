import { all, call, put, takeLatest } from 'redux-saga/effects';
import { setToken, removeToken } from '../helpers';
import * as types from '../types/authorise';
import * as actions from '../actions/authorise';
import api from '../helpers/api'

export function* authorise(email, password) {
    console.log('saga', email, password)
    try {
      const { token } = yield call(api(), { email, password});
      yield put(actions.setAuthData(token));
      yield setToken(token);

    } catch(error) {
      yield put(actions.setError(error.message));
      yield removeToken();
    }
    // yield put(actions.setLoadingStatus(false));
}

export function* logout() {
    try {
      yield removeToken();
    } catch(error) {
      console.error('some error happened', error);
    }
  }


export default function* () {
    yield all([
      yield takeLatest(types.LOGIN, ({ email, password }) => authorise(email, password)),
      yield takeLatest(types.LOGOUT, logout),

    ])
  }