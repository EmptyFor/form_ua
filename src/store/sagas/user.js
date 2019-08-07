import { all, put, takeEvery } from 'redux-saga/effects';
// import { getToken } from '../helpers';
import * as types from '../types/user';
import * as actions from '../actions/user';
import { baseURL } from '../../core/constants/baseURL'
import axios from 'axios'



export function* getUserInfoSaga(id) {
    const token = localStorage.getItem('firm-token')
    try {
        const { user } = yield axios.get(`${baseURL}/ru/api/v1/users/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then(response => {
                return response.data.data;
            })
        yield put(actions.getUserInfo(user))
    } catch (error) {
        yield put(actions.setError(error.message));
    }
}

export function* getUserInfoPosts(current_page) {
    const token = localStorage.getItem('firm-token')
    try {
        const { data } = yield axios.get(`${baseURL}ru/api/v1/my_posts?page=${current_page}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then(response => {
                console.log('RESPONSE', response)
                return response.data;
            })
        yield put(actions.setProfileInfo(data))
    } catch (error) {
        yield put(actions.setError(error.message));
    }
}


export default function* () {
    yield all([
        yield takeEvery(types.GET_USER_ID, ({ id }) => getUserInfoSaga(id)),
        yield takeEvery(types.GET_PROFILE_INFO, ({current_page}) => getUserInfoPosts(current_page)),
    ])
}