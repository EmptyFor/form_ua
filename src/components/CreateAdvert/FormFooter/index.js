import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../store/actions/advert';
import Button from '../../common/Button';
import './style.modules.scss';

export class FormFooter extends Component {

    state = {
        test: false
    }

    setFormData = (name, code, price, legal_form, kved_code, kved_name, extra_kved_name, tax_form, license, city, region, registered_at, pda, have_activity, no_debt, capital, owner_data, tel, image) => {

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
            image
        }
        console.log(JSON.stringify(post))

        for( let key in post ) {
            data.append(`post[${key}]`, post[key])
        }
        this.props.actions.setAdvertData(data)
    }

    handleClick = () => {
        const { name, code, price, image, legal_form, kved_code, kved_name, extra_kved_name, tax_form, license, city, region, registered_at, pda, have_activity, no_debt, capital, owner_data, tel } = this.props

        this.setState(prevState => ({ test: !prevState.test }))

        // let data = [name, code, price, image, legal_form, kved_code, kved_name, extra_kved_name, tax_form, license, city, region, registered_at, pda, have_activity, no_debt, capital, owner_data, tel]

        name.length > 0 &&
            code.length === 8 &&
            price.length > 0 &&
            legal_form &&
            kved_name &&
            extra_kved_name.length <= 10 &&
            tax_form &&
            license.length <= 5 &&
            city &&
            region &&
            registered_at.length === 10 &&
            pda &&
            owner_data.length > 0 &&
            tel[0].length ?
            this.setFormData(name, code, price, legal_form, kved_code, kved_name, extra_kved_name, tax_form, license, city, region, registered_at, pda, have_activity, no_debt, capital, owner_data, tel, image)
            : console.log('Fill all required fields')
    }

    clearAllFields = () => {
        this.props.actions.clearAllInfo(true)
    }

    render() {
        return (
            <div className="form_footer" >
                <Button className="clear_btn grey_btn" text="Очистити дані" width="20%" onClick={this.clearAllFields} />
                <Button className="publish_btn" text="Опублікувати" width="20%" onClick={this.handleClick} />
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
        license: state.advert.license,
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