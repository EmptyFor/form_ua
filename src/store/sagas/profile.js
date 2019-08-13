import { all, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { removeToken, removeInfo } from '../helpers/localStorage';
import * as types from '../types/profile';
import * as actions from '../actions/profile';
import { baseURL } from '../../core/constants/baseURL'
import axios from 'axios'



export function* deleteAdvert(id) {
    const token = localStorage.getItem('firm-token')

    try {
        const data = yield axios.delete(`${baseURL}ua/api/v1/posts/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then(response => {
                return response;
            })
            yield put(actions.checkAdvertStatus(data.status))
    } catch (error) {
        yield put(actions.setError(error.message));
    }
}



export default function* () {
    yield all([
        yield takeEvery(types.DELETE_ADVERT, ({ id }) => deleteAdvert(id)),
    ])
}