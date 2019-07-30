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

    handleClick = () => {
        const {name, code, price, image, legal_form, type_activity, extra_type_activity, tax_form, license, location, registered_at, pda, have_activity, no_debt, capital, owner_data, tel} = this.props

        this.setState(prevState => ({test: !prevState.test}))
        this.props.actions.setAdvertData(name, code, price, image, legal_form, type_activity, extra_type_activity, tax_form, license, location, registered_at, pda, have_activity, no_debt, capital, owner_data, tel)
    }

    clearAllFields = () => {
        this.props.actions.clearAllInfo(true)
    }

    render() {
        console.log(this.props)
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
        type_activity: state.advert.type_activity,
        extra_type_activity: state.advert.extra_type_activity,
        tax_form: state.advert.tax_form,
        license: state.advert.license,
        location: state.advert.location,
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