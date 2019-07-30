import { all, put, takeLatest } from 'redux-saga/effects';
import { getToken } from '../helpers';
import * as types from '../types/user';
import * as actions from '../actions/user';
import { baseURL } from '../../core/constants/baseURL'
import axios from 'axios'

export function* getUserInfoSaga(id) {
    console.log('saga ID',id)

    const token = getToken()
    try {
        const data = yield axios.get(`${baseURL}/ru/api/v1/users/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then(response => {
                return response.data;
            })
        console.log(data)
        yield put(actions.getUserInfo(data))
    } catch (error) {
        yield put(actions.setError(error.message));
    }
}




export default function* () {
    yield all([
        yield takeLatest(types.GET_USER_ID, ({ id }) => getUserInfoSaga(id)),
    ])
}