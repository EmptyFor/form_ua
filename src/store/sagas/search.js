import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../types/search';
import * as actions from '../actions/search';
import { baseURL } from '../../core/constants/baseURL'
import axios from 'axios'

export function* getCurrentPagePosts(current_page) {
   const token = yield localStorage.getItem('firm-token');
    const options = {
        current_page: current_page,
        headers: { "Authorization": `Bearer ${token}` }
    }
    try {
        const data = yield axios.get(`${baseURL}/ru/api/v1/posts`, options)
            .then(response => {
                console.log('RESPONSE',response)
                return response.data;
            })
        yield put(actions.getPagePosts(data))
    } catch (error) {
        yield put(actions.setError(error.message));
    }
}

export function* getAdvertDetailsInfo(advertid) {
    // const token = yield localStorage.getItem('firm-token');
    // const options = {
    //     headers: { "Authorization": `Bearer ${token}` }
    // }
    // try {
    //     const info = yield axios.get(`${baseURL}/ru/api/v1/posts/${advertid}`, options)
    //         .then(response => {
    //             return response.data;
    //         })
    //     yield put(actions.setAdvertDetails(info))
    // } catch (error) {
    //     yield put(actions.setError(error.message));
    // }
}


export default function* () {
    yield all([
        yield takeLatest(types.POST_CURRENT_PAGE, ({ current_page }) => getCurrentPagePosts(current_page)),
        yield takeLatest(types.GET_ADVERT_DETAILS, ({ advertid }) => getAdvertDetailsInfo(advertid)),
        
    ])
}