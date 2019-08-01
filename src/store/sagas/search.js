import { all, put, takeEvery } from 'redux-saga/effects';
// import { getToken } from '../helpers';
import * as types from '../types/search';
import * as actions from '../actions/search';
import { baseURL } from '../../core/constants/baseURL'
import axios from 'axios'

export function* getCurrentPagePosts(current_page) {
    const token = yield localStorage.getItem('firm-token');
    const options = { 
        current_page: current_page 
    }
    const auth = {
        headers: { "Authorization": `Bearer ${token}` }
    }
    try {
        const data = yield axios.post(`${baseURL}ru/api/v1/posts`, options , auth)
            .then(response => {
                return response.data;
            })
        yield put(actions.getPagePosts(data))
    } catch (error) {
        yield put(actions.setError(error.message));
    }
}


export default function* () {
    yield all([
        yield takeEvery(types.POST_CURRENT_PAGE, ({ current_page }) => getCurrentPagePosts(current_page)),
    ])
}