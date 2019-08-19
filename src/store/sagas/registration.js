import { all, put, takeLatest } from 'redux-saga/effects';
// import { setToken, removeToken } from '../helpers';
import * as types from '../types/registration';
import * as actions from '../actions/registration';
import {setAuthData} from '../actions/authorise'
// import fetchSome from '../helpers/fetchJSON'
// import { options } from '../helpers/options'
import { baseURL } from '../../core/constants/baseURL'
import axios from 'axios'

export function* registrationSaga(first_name, phone, email, password) {
    const user = {
        first_name: first_name,
        phone: phone,
        email: email,
        password: password
    }
    const lang = localStorage.getItem('i18nextLng')

    try {
        const { data }  = yield axios.post(`${baseURL}${lang}/api/v1/users`, { user })
            .then(response => {
                return response.data;
            })
        yield put(setAuthData(data.user.auth_token))
        yield put(actions.confirmReg(data))

    } catch (error) {
        yield put(actions.setError(error.message));
    }
}




export default function* () {
    yield all([
        yield takeLatest(types.TWICE_PAGE_DATA, ({ first_name, phone, email, password }) => registrationSaga(first_name, phone, email, password)),
    ])
}