import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../store/actions/advert'
import styles from './style.modules.scss';
import { images } from '../../../assets/images/images';
import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import { Radiobutton } from '../../common/Radiobutton';

export class AdditionlInfo extends Component {
    constructor() {
        super()
        this.sendAdditionlInfoData = this.sendAdditionlInfoData.bind(this)
    }

    state = {
        legalForm: '',
        mainEconomicActivityType: '',
        additionalEconomicActivityType: [],
        taxationForm: '',
        license: [],
        location: '',
        registrationDate: '',
        isPDVPayer: '',
        broughtEconomicActivity: '',
        hasDebt: '',
        shareCapital: '',
    }

    sendAdditionlInfoData(e) {
        const { legalForm, mainEconomicActivityType, additionalEconomicActivityType, taxationForm, license, location, registrationDate, isPDVPayer, broughtEconomicActivity, hasDebt, shareCapital } = this.state

        let name = e.target.getAttribute('name')
        let value = e.target.getAttribute('value') || e.target.value

        name === 'additionalEconomicActivityType' || name === 'license' ? value === undefined ? value = "" : value = value.split(',') : void 0
        name === 'shareCapital' ? value = value.replace(/\D/g, '') : void 0

        this.setState({
            [name]: value
        })


        legalForm &&
            mainEconomicActivityType &&
            additionalEconomicActivityType.length <= 10 &&
            taxationForm &&
            license.length <= 5 &&
            location &&
            registrationDate.length === 10 &&
            isPDVPayer ?
            this.props.actions.setAdditionalInfo(legalForm, mainEconomicActivityType, additionalEconomicActivityType, taxationForm, license, location, registrationDate, isPDVPayer, broughtEconomicActivity, hasDebt, shareCapital) :
            void 0

        this.props.actions.clearAllInfo(false)
    }

    clearValue = () => {

    }

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.clearValue() : void 0
    }

    render() {
        return (
            <div className="additionl_info" >
                <div className="title" >
                    <span>2</span>
                    <h1>Положення згідно законодавства</h1>
                </div>

                <div className="first_position grid_left_column">
                    <p className="subtitle">Організаційно правова форма:<span>*</span></p>
                    <Select
                        getData={this.sendAdditionlInfoData}
                        name="legalForm"
                        type="common"
                        width='auto'
                        placeholder='Оберіть зі списку'
                        icon={images.house}
                        id='ca_form_select_1'
                        clear={this.props.clear}
                    />
                </div>

                <div className="second_position grid_left_column">
                    <p className="subtitle">Основний вид господарської діяльності:<span>*</span></p>
                    <Select
                        getData={this.sendAdditionlInfoData}
                        name="mainEconomicActivityType"
                        type="common"
                        width='auto'
                        placeholder='Оберіть зі списку'
                        icon={images.portfolio}
                        id='ca_form_select_2'
                        clear={this.props.clear}
                    />
                </div>

                <div className="third_position grid_left_column">
                    <p className="subtitle">Додаткові види (до 10 видів):</p>
                    <Select
                        getData={this.sendAdditionlInfoData}
                        name="additionalEconomicActivityType"
                        type="multiply" width='auto'
                        placeholder='Оберіть зі списку'
                        icon={images.plus}
                        id='ca_form_select_3'
                        clear={this.props.clear}
                    />
                </div>

                <div className="forth_position grid_left_column">
                    <p className="subtitle">Форма оподаткування:<span>*</span></p>
                    <Select
                        getData={this.sendAdditionlInfoData}
                        name="taxationForm"
                        type="common"
                        width='auto'
                        placeholder='Оберіть зі списку'
                        icon={images.lable}
                        id='ca_form_select_4'
                        clear={this.props.clear}
                    />
                </div>

                <div className="fifth_position grid_left_column">
                    <p className="subtitle">Ліцензія (до 5 видів):</p>
                    <Select
                        getData={this.sendAdditionlInfoData}
                        name="license"
                        type="multiply"
                        width='auto'
                        placeholder='Оберіть зі списку'
                        icon={images.cc}
                        id='ca_form_select_5'
                        clear={this.props.clear}
                    />
                </div>

                <div className="sixth_position grid_right_column">
                    <p className="subtitle">Місце знаходження/реєстрації:<span>*</span></p>
                    <Select
                        getData={this.sendAdditionlInfoData}
                        name="location"
                        type="common"
                        width='auto'
                        placeholder='Вибріть місто/населений пункт'
                        icon={images.mapPoint}
                        id='ca_form_select_6'
                        clear={this.props.clear}
                    />
                </div>

                <div className="seventh_position grid_right_column">
                    <p className="subtitle">Дата державної реєстрації:<span>*</span></p>
                    <Input
                        getData={this.sendAdditionlInfoData}
                        name="registrationDate"
                        type="date"
                        placeholder="Введіть у форматі ДД/ММ/РРРР"
                        width="100%"
                        className="input"
                        clear={this.props.clear}
                    />
                </div>

                <div className="eith_position grid_right_column">
                    <div className="first_radio">
                        <p className="subtitle">Є платником ПДВ?<span>*</span></p>
                        <Radiobutton
                            getData={this.sendAdditionlInfoData}
                            name="isPDVPayer"
                            options={['Так', 'Ні']}
                            id='isPDVPayer'
                            clear={this.props.clear}
                        />
                    </div>

                    <div className="second_radio">
                        <p className="subtitle">Вела господарську діяльність?</p>
                        <Radiobutton
                            getData={this.sendAdditionlInfoData}
                            name="broughtEconomicActivity"
                            options={['Так', 'Ні']}
                            id='broughtEconomicActivity'
                            clear={this.props.clear}
                        />
                    </div>

                    <div className="third_radio">
                        <p className="subtitle">Без обтяжень та заборгованостей?</p>
                        <Radiobutton
                            getData={this.sendAdditionlInfoData}
                            name="hasDebt"
                            options={['Так', 'Ні']}
                            id='hasDebt'
                            clear={this.props.clear}
                        />
                    </div>
                </div>

                <div className="nineth_position grid_right_column">
                    <p className="subtitle">Статутний капітал:</p>
                    <Input
                        getData={this.sendAdditionlInfoData}
                        name="shareCapital"
                        type="money"
                        placeholder="Введіть суму в гривнях"
                        width="100%"
                        className="input"
                        clear={this.props.clear}
                    />
                </div>

            </div>
        );
    }
}

export default connect(
    (state) => ({
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
        clear: state.advert.clear
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(AdditionlInfo);