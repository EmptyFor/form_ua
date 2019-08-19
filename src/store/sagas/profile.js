import { all, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { removeToken, removeInfo } from '../helpers/localStorage';
import * as types from '../types/profile';
import * as actions from '../actions/profile';
import { baseURL } from '../../core/constants/baseURL'
import axios from 'axios'



export function* deleteAdvert(id) {
    const token = localStorage.getItem('firm-token')
    const lang = localStorage.getItem('i18nextLng')


    try {
        const data = yield axios.delete(`${baseURL}${lang}/api/v1/posts/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then(response => {
                return response;
            })
        yield put(actions.checkAdvertStatus(data.status))
    } catch (error) {
        yield put(actions.setError(error.message));
    }
}

export function* deactivateAdvert(id, active) {
    const token = localStorage.getItem('firm-token');
    const lang = localStorage.getItem('i18nextLng');
    
    try {
        const data = yield axios.patch(`${baseURL}${lang}/api/v1/posts/${id}`, { active: !active }, { headers: { "Authorization": `Bearer ${token}` } })
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
        yield takeEvery(types.DEACTIVATE_ADVERT, ({ id, active }) => deactivateAdvert(id, active)),
    ])
}