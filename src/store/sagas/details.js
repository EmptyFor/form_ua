import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../types/details';
import * as actions from '../actions/details';
import { baseURL } from '../../core/constants/baseURL'
import axios from 'axios'

export function* getAdvertDetailsInfo(advertid) {
    const lang = localStorage.getItem('i18nextLng')
    try {
        const info = yield axios.get(`${baseURL}${lang}/api/v1/posts/${advertid}`)
            .then(response => {
                console.log('DETAILS INFO ->>>>>',response)
                return response.data;
            })
        yield put(actions.setAdvertDetails(info))
    } catch (error) {
    }
}

export default function* () {
    yield all([
        yield takeEvery(types.GET_ADVERT_DETAILS, ({ advertid }) => getAdvertDetailsInfo(advertid)),
    ])
}