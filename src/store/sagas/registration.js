import { all, call, put, takeLatest } from 'redux-saga/effects';
import { setToken, removeToken } from '../helpers';
import * as types from '../types/registration';
import * as actions from '../actions/registration';
import fetchSome from '../helpers/fetchJSON'
import { options } from '../helpers/options'


export function* registrationSaga(login, phone, email, password) {
    console.log('saga')
    try {
        // const someData = yield fetchSome('https://jsonplaceholder.typicode.com/posts', options.POST)
        // console.log(someData)
    } catch (error) {
        yield put(actions.setError(error.message));
        // yield removeToken();
    }
}




export default function* () {
    yield all([
        yield takeLatest(types.FIRST_PAGE_DATA, ({ login, phone }) => registrationSaga(login, phone)),
    ])
}