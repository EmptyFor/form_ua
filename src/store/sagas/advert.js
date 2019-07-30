import { all, put, takeLatest, call } from 'redux-saga/effects';
import * as types from '../types/advert';
import * as actions from '../actions/advert';
import fetchSome from '../helpers/fetchJSON'
import { options } from '../helpers/options'
import { baseURL } from '../../core/constants/baseURL'
import axios from 'axios'

export function* advert(name, code, price, image, legal_form, type_activity, extra_type_activity, tax_form, license, location, registered_at, pda, have_activity, no_debt, capital, owner_data, tel) {

    try {
        yield axios.get(`${baseURL}/ru/api/v1/posts`)
            .then(response => {
                return console.log(response.data);
            })
    } catch (error) {
        yield put(actions.setError(error.message));
        // yield removeToken();
    }
}

export default function* () {
    yield takeLatest(types.SEND_ADVERT_DATA, ({ name, code, price, image, legal_form, type_activity, extra_type_activity, tax_form, license, location, registered_at, pda, have_activity, no_debt, capital, owner_data, tel }) => advert(name, code, price, image, legal_form, type_activity, extra_type_activity, tax_form, license, location, registered_at, pda, have_activity, no_debt, capital, owner_data, tel))
}