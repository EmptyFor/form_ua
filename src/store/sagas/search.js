import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../types/search';
import * as actions from '../actions/search';
import { baseURL } from '../../core/constants/baseURL'
import axios from 'axios'


export function* getCurrentPagePosts(current_page) {
    const token = localStorage.getItem('firm-token');
    const options = {
        headers: { "Authorization": `Bearer ${token}` }
    }
    try {
        const posts = yield axios.get(`${baseURL}/ru/api/v1/posts?page=${current_page}`, options)
            .then(response => {
                return response.data;
            })
        yield put(actions.getPagePosts(posts))
    } catch (error) {
        yield put(actions.setError(error.message));
    }
}

export function* getFoundPagePosts(search_args) {
    const token = localStorage.getItem('firm-token');
    const options = {
        headers: { "Authorization": `Bearer ${token}` }
    }
    try {
        const data = yield axios.get(`${baseURL}/ru/api/v1/posts/${search_args}`, options)
            .then(response => {
                return response.data;
            })
        yield put(actions.getPagePosts(data))
    }
    catch (error) {
        yield put(actions.setError(error.message));
    }
}



export default function* () {
    yield all([
        yield takeLatest(types.POST_CURRENT_PAGE, ({ current_page }) => getCurrentPagePosts(current_page)),
        yield takeLatest(types.GET_FOUND_POSTS, ({ search_args }) => getFoundPagePosts(search_args)),
    ])
}

