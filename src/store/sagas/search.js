import { all, put, takeEvery } from 'redux-saga/effects';
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
                console.log(response)
                return response.data;
            })
        yield put(actions.getPagePosts(data))
    } catch (error) {
        yield put(actions.setError(error.message));
    }
}

export function* getFoundPagePosts(search_args) {
    const token = yield localStorage.getItem('firm-token');
    const options = {
        headers: { "Authorization": `Bearer ${token}` }
    }
    console.log(search_args)
    try {
        const data = axios.get(`${baseURL}/ru/api/v1/posts/${search_args}`, options)
        .then (response => {
            console.log(response.data)
        })
    }
    catch (error) {
        yield put(actions.setError(error.message));
    }
}

export default function* () {
    yield all([
        yield takeEvery(types.POST_CURRENT_PAGE, ({ current_page }) => getCurrentPagePosts(current_page)),
        yield takeEvery(types.GET_FOUND_POSTS, ({ search_args }) => getFoundPagePosts(search_args))
    ])
}