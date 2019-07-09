// import { select, put as putEffect } from 'redux-saga/effects';
import api from '../../../core/api';
// import * as actions from '../../actions/authorise';


export function * get (pat, query = null) {
  return yield apiCall(pat, 'GET', query);
}

export function * post (pat, query = null, body = null) {
  return yield apiCall(pat, 'POST', body ? query : null, body || query);
}

export function * put (url, query = null, body = null) {
  return yield apiCall(url, 'PUT', body ? query : null, body || query);
}

export function * patch (url, query = null, body = null) {
  return yield apiCall(url, 'PATCH', body ? query : null, body || query);
}

export function * del (url, query = null) {
  return yield apiCall(url, 'DELETE', query);
}


function * apiCall (pat, method, query, body) {
  const apiInstance = api();
  // const { token } = yield select(state => state.auth);
  // const { selectedContract } = yield select(state => state.user);

  // if (token) {
  //   apiInstance.setAuthorization(`Bearer ${token}`);
  // }

  let result;
  try {
    result = yield apiInstance.call(pat, method, query, body);
  } catch (error) {
    // if (apiInstance.response.status === 401) {
    //   yield putEffect(actions.logout());
    // }
    throw error;
  }

  return result;
}
