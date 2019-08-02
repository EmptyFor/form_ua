import { all, put, takeLatest, call } from 'redux-saga/effects';
import * as types from '../types/advert';
import * as actions from '../actions/advert';
import fetchSome from '../helpers/fetchJSON';
import { options } from '../helpers/options';
import { baseURL } from '../../core/constants/baseURL';
import { getToken } from '../helpers/localStorage';
import axios from 'axios'

export function* advert(name, code, price, image, legal_form, type_activity, extra_type_activity, tax_form, license, location, registered_at, pda, have_activity, no_debt, capital, owner_data, tel) {

    const data = {
        name,
        code,
        price,
        image,
        legal_form,
        type_activity,
        extra_type_activity,
        tax_form,
        license,
        location,
        registered_at,
        pda,
        have_activity,
        no_debt,
        capital,
        owner_data,
        tel
    }

    try {
        yield axios({ method: 'post', url:`${baseURL}ru/api/v1/posts/`, headers: { "Authorization": `Bearer ${getToken()}` }, data })
            .then(response => {
                return console.log(response.data.data.posts);
            })
    } catch (error) {
        yield put(actions.setError(error.message));
        // yield removeToken();
    }
}

export default function* () {
    yield takeLatest(types.SEND_ADVERT_DATA, ({ name,
        code,
        price,
        image,
        legal_form,
        type_activity,
        extra_type_activity,
        tax_form,
        license,
        location,
        registered_at,
        pda,
        have_activity,
        no_debt,
        capital,
        owner_data,
        tel
    }) =>
        advert(name,
            code,
            price,
            image,
            legal_form,
            type_activity,
            extra_type_activity,
            tax_form,
            license,
            location,
            registered_at,
            pda,
            have_activity,
            no_debt,
            capital,
            owner_data,
            tel
        ))
}