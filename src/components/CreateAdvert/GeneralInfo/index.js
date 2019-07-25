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

    setGeneralInfoData = (e) => {
        let name = e.currentTarget.name
        let value = e.currentTarget.value
        name === 'EDRPOYCode' || name === 'purchasePrice' ? this.setState({ [name]: value.replace(/\D/g, '') }) : this.setState({ [name]: value })
    }

    sendGeneralInfoData = () => {
        const { organisationName, EDRPOYCode, purchasePrice } = this.state

        if (this.props.clear) {
            this.props.actions.setGeneralInfo(organisationName, EDRPOYCode, purchasePrice)
        }
        else {
            organisationName.length > 0 &&
                EDRPOYCode.length === 8 &&
                purchasePrice.length > 0 ?
                this.props.actions.setGeneralInfo(organisationName, EDRPOYCode, purchasePrice) :
                void 0
        }
    }

    clearValue = () => {
        this.setState({
            organisationName: '',
            EDRPOYCode: '',
            purchasePrice: ''
        })
    }

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.clearValue() : void 0
    }

    render() {
        this.sendGeneralInfoData()
        return (
            <div className="general_info" >
                <div className="title" >
                    <span>1</span>
                    <h1>Загальна інформація</h1>
                </div>

                <div className="first_position grid_left_column">
                    <p className="subtitle">Назва організації:<span>*</span></p>
                    <TextArea
                        getData={this.setGeneralInfoData}
                        name="organisationName"
                        className="text_area"
                        placeholder="Введіть назву організації"
                        clear={this.props.clear}
                    />
                </div>

                <div className="second_position grid_left_column">
                    <p className="subtitle">Код ЄДРПОУ (8 цифр):<span>*</span></p>
                    <Input
                        getData={this.setGeneralInfoData}
                        name="EDRPOYCode"
                        type="EDRPOY"
                        className="input"
                        placeholder="Введіть восьмизначний код"
                        clear={this.props.clear}
                    />
                </div>

                <div className="third_position grid_left_column">
                    <p className="subtitle">Ціна купівлі без ПДВ та роздрібних витрат:<span>*</span></p>
                    <Input
                        getData={this.setGeneralInfoData}
                        name="purchasePrice"
                        type="money"
                        className="input"
                        placeholder="Ведіть ціну в гривнях"
                        clear={this.props.clear}
                    />
                </div>

                <div className="forth_position grid_right_column">
                    <p className="subtitle">Фото документу який засвідчує право власності:<span>*</span></p>
                    <UploadField clear={this.props.clear} />
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
        documentPhoto: state.advert.documentPhotoб,
        clear: state.advert.clear
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(GeneralInfo);