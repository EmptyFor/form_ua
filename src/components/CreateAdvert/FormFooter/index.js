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
        this.setState(prevState => ({test: !prevState.test}))
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
        organisationName: state.advert.organisationName,
        EDRPOYCode: state.advert.EDRPOYCode,
        purchasePrice: state.advert.purchasePrice,
        documentPhoto: state.advert.documentPhoto,
        legalForm: state.advert.legalForm,
        mainEconomicActivityType: state.advert.mainEconomicActivityType,
        additionalEconomicActivityType: state.advert.additionalEconomicActivityType,
        taxationForm: state.advert.taxationForm,
        license: state.advert.license,
        location: state.advert.location,
        registrationDate: state.advert.registrationDate,
        isPDVPayer: state.advert.isPDVPayer,
        broughtEconomicActivity: state.advert.broughtEconomicActivity,
        hasDebt: state.advert.hasDebt,
        shareCapital: state.advert.shareCapital,
        ownerName: state.advert.ownerName,
        phoneNumbers: state.advert.phoneNumbers,
        clear: state.advert.clear
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(FormFooter);