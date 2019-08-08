import { all, put, takeLatest, call } from 'redux-saga/effects';
import * as types from '../types/advert';
import * as actions from '../actions/advert';
import fetchSome from '../helpers/fetchJSON';
import { options } from '../helpers/options';
import { baseURL } from '../../core/constants/baseURL';
import { getToken } from '../helpers/localStorage';
import axios from 'axios'

export function* advert(data) {
    let post = {'post':data}
    console.log(post)
    // const data = {
    //     name,
    //     code,
    //     price,
    //     image,
    //     legal_form,
    //     kved_code,
    //     kved_name,
    //     extra_kved_name,
    //     tax_form,
    //     license,
    //     city,
    //     region,
    //     registered_at,
    //     pda,
    //     have_activity,
    //     no_debt,
    //     capital,
    //     owner_data,
    //     tel
    // }

    try {
        let selt = this
        const response = yield axios({ method: 'post', url: `${baseURL}ru/api/v1/posts/`, data, headers: { "Authorization": `Bearer ${getToken()}`, 'Content-Type': 'multipart/form-data'} })
            .then(response => {
                console.log(response)
                return response;
            })
        yield put(actions.getStatusResponse(response, response.status));

    } catch (error) {
        yield put(actions.setError(error.message));
        // yield removeToken();
    }
}

export default function* () {
    yield takeLatest(types.SEND_ADVERT_DATA, ({
        name,
        code,
        price,
        legal_form,
        kved_code,
        kved_name,
        extra_kved_name,
        tax_form,
        license,
        city,
        region,
        registered_at,
        pda,
        have_activity,
        no_debt,
        capital,
        owner_data,
        tel,
        image,
        data
    }) =>
        advert(
            name,
            code,
            price,
            legal_form,
            kved_code,
            kved_name,
            extra_kved_name,
            tax_form,
            license,
            city,
            region,
            registered_at,
            pda,
            have_activity,
            no_debt,
            capital,
            owner_data,
            tel,
            image,
            data
        ))
}