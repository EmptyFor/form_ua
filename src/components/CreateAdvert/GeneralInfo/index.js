import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../store/actions/advert'
import styles from './style.modules.scss';
import TextArea from '../../common/TextArea';
import Input from '../../common/Input';
import UploadField from '../../common/UploadField';

export class GeneralInfo extends Component {

    state = {
        organisationName: '',
        EDRPOYCode: '',
        purchasePrice: ''
    }

    sendGeneralInfoData = (e) => {
        const { organisationName, EDRPOYCode, purchasePrice } = this.state

        let name = e.currentTarget.name
        let value = e.currentTarget.value

        name === 'EDRPOYCode' || name === 'purchasePrice' ? this.setState({ [name]: value.replace(/\D/g, '') }) : this.setState({ [name]: value })

        if (organisationName.length > 0 && EDRPOYCode.length === 8 && purchasePrice.length > 0) {
            this.props.actions.setGeneralInfo(organisationName, EDRPOYCode, purchasePrice)
        }
    }

    render() {
        return (
            <div className="general_info" >
                <div className="title" >
                    <span>1</span>
                    <h1>Загальна інформація</h1>
                </div>

                <div className="first_position grid_right_column">
                    <p className="subtitle">Назва організації:<span>*</span></p>
                    <TextArea getData={this.sendGeneralInfoData} name="organisationName" className="text_area" placeholder="Введіть назву організації" />
                </div>

                <div className="second_position grid_right_column">
                    <p className="subtitle">Код ЄДРПОУ (8 цифр):<span>*</span></p>
                    <Input getData={this.sendGeneralInfoData} name="EDRPOYCode" type="EDRPOY" className="input" placeholder="Введіть восьмизначний код" />
                </div>

                <div className="third_position grid_right_column">
                    <p className="subtitle">Ціна купівлі без ПДВ та роздрібних витрат:<span>*</span></p>
                    <Input getData={this.sendGeneralInfoData} name="purchasePrice" type="money" className="input" placeholder="Ведіть ціну в гривнях" />
                </div>

                <div className="forth_position grid_left_column">
                    <p className="subtitle">Фото документу який засвідчує право власності:<span>*</span></p>
                    <UploadField />
                    <br />

                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        organisationName: state.advert.organisationName,
        EDRPOYCode: state.advert.EDRPOYCode,
        purchasePrice: state.advert.purchasePrice,
        documentPhoto: state.advert.documentPhoto
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(GeneralInfo);