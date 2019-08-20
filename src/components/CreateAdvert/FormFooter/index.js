import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../store/actions/advert';
import Button from '../../common/Button';
import './style.modules.scss';
import './style.modules.media.scss';

export class FormFooter extends Component {

    state = {
        test: false
    }

    setFormData = (name, code, price, legal_form, kved_code, kved_name, extra_kved_name, tax_form, licenses, city, region, registered_at, pda, have_activity, no_debt, capital, owner_data, tel, image) => {

        let data = new FormData()

        let post = {
            name,
            code,
            price,
            legal_form,
            kved_code,
            kved_name,
            extra_kved_name,
            tax_form,
            licenses,
            city,
            region,
            registered_at,
            pda,
            have_activity,
            no_debt,
            capital,
            owner_data,
            tel,
            image
        }
        console.log(post)

        for (let key in post) {
            // Array.isArray(post[key]) ? data.set(`post[${key}]`, JSON.stringify(post[key]))  : data.set(`post[${key}]`, post[key])

            Array.isArray(post[key]) ? post[key].map((item, index) => data.append(`post[${key}][]`, item))  : data.set(`post[${key}]`, post[key])

        }
        this.props.actions.setAdvertData(data)
    }

    handleClick = () => {
        const { name, code, price, image, legal_form, kved_code, kved_name, extra_kved_name, tax_form, licenses, city, region, registered_at, pda, have_activity, no_debt, capital, owner_data, tel } = this.props

        this.setState(prevState => ({ test: !prevState.test }))

        let data = [name, code, price, image, legal_form, kved_code, kved_name, extra_kved_name, tax_form, licenses, city, region, registered_at, pda, have_activity, no_debt, capital, owner_data, tel]
        console.log(data)
        name.length > 0 &&
            code.length === 8 &&
            price.length > 0 &&
            legal_form.length > 0 &&
            image !== '' &&
            kved_name.length > 0 &&
            extra_kved_name.length <= 10 &&
            tax_form.length > 0 &&
            licenses.length <= 5 &&
            city.length > 0 &&
            region.length > 0 &&
            registered_at.length === 10 &&
            pda.toString().length > 0 &&
            owner_data.length > 0 &&
            tel[0].length === 24 ?
            this.setFormData(name, code, price, legal_form, kved_code, kved_name, extra_kved_name, tax_form, licenses, city, region, registered_at, pda, have_activity, no_debt, capital, owner_data, tel, image)
            : alert('Заповніть обов’язкові поля')

    }

    clearAllFields = () => {
        this.props.actions.clearAllInfo(true)
    }

    render() {
        return (
            <div className="form_footer" >
                <Button className="clear_btn grey_btn" text="Очистити дані" onClick={this.clearAllFields} />
                <Button className="publish_btn" text="Опублікувати" onClick={this.handleClick} />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        name: state.advert.name,
        code: state.advert.code,
        price: state.advert.price,
        image: state.advert.image,
        legal_form: state.advert.legal_form,
        kved_code: state.advert.kved_code,
        kved_name: state.advert.kved_name,
        extra_kved_name: state.advert.extra_kved_name,
        tax_form: state.advert.tax_form,
        licenses: state.advert.license,
        city: state.advert.city,
        region: state.advert.region,
        registered_at: state.advert.registered_at,
        pda: state.advert.pda,
        have_activity: state.advert.have_activity,
        no_debt: state.advert.no_debt,
        capital: state.advert.capital,
        owner_data: state.advert.owner_data,
        tel: state.advert.tel,
        clear: state.advert.clear
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(FormFooter);