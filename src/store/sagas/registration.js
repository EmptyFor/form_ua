import { all, put, takeLatest } from 'redux-saga/effects';
// import { setToken, removeToken } from '../helpers';
import * as types from '../types/registration';
import * as actions from '../actions/registration';
// import fetchSome from '../helpers/fetchJSON'
// import { options } from '../helpers/options'
import { baseURL } from '../../core/constants/baseURL'
import axios from 'axios'

export function* registrationSaga(login, phone, email, password) {
    const user = {
        login: login,
        phone: phone,
        email: email,
        password: password
    }
    console.log('user', user)
    try {
        const data = yield axios.post(`${baseURL}/ru/api/v1/users`, { user })
            .then(response => {
                return response.data;
            })
        yield put(actions.confirmReg(data))

    } catch (error) {
        yield put(actions.setError(error.message));
    }
}




export default function* () {
    yield all([
        yield takeLatest(types.TWICE_PAGE_DATA, ({ login, phone, email, password }) => registrationSaga(login, phone, email, password)),
    ])
}