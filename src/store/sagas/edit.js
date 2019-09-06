import { all, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { removeToken, removeInfo } from '../helpers/localStorage';
import * as types from '../types/edit';
import * as actions from '../actions/edit';
import { baseURL } from '../../core/constants/baseURL'
import axios from 'axios'

export function* sendEditData(id, data) {
    const token = localStorage.getItem('firm-token');
    const lang = localStorage.getItem('i18nextLng')
    console.log(id + ": " + data)

    try {
        const response = yield axios.patch(
            `${baseURL}${lang}/api/v1/posts/${id}`,

            data
            ,
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(response => {
                return response;
            })
        yield put(actions.getStatusResponse(response, response.status));

    } catch (error) {
        yield put(actions.setError(error.message));
    }
}

export default function* () {
    yield all([
        yield takeEvery(types.SEND_EDIT_DATA, ({ id, data }) => sendEditData(id, data)),
    ])
}