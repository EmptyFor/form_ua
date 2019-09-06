import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../store/actions/advert'
import { images } from '../../../assets/images/images';
import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import { Radiobutton } from '../../common/Radiobutton';
import './style.modules.scss';
import './style.modules.media.scss';
import { withTranslation } from 'react-i18next';

export class AdditionlInfo extends Component {
    constructor() {
        super()
        this.setAdditionlInfoData = this.setAdditionlInfoData.bind(this)
    }

    info = {

    }

    state = {
        legal_form: '',
        kved_name: '',
        extra_kved_name: [],
        tax_form: '',
        license: [],
        city: '',
        region: '',
        registered_at: '',
        pda: '',
        have_activity: '',
        no_debt: '',
        capital: 0
    }

    setAdditionlInfoData(e) {
        let name = e.target.getAttribute('name')
        let value = e.target.getAttribute('value') || e.target.value

        name === 'extra_kved_name' || name === 'license' ? value === undefined ? value = "" : value = value.split(',') : void 0
        name === 'capital' ? value = value.replace(/\D/g, '') : void 0

        if (name === 'pda' || name === 'have_activity' || name === 'no_debt') {
            value === 'Так' ? value = true : value = false
        }

        if (name === 'location') {
            value === undefined ? value = "" : void 0
            value = value.split(',')
            this.setState({ region: value[0], city: value[1] })
        }
        else if (name === 'kved_name' && value !== undefined) {
            this.setState({
                kved_code: value.replace(' ', 'splitPoint').split('splitPoint')[0],
                kved_name: value.replace(' ', 'splitPoint').split('splitPoint')[1]
            })
        }
        else if (name === 'extra_kved_name' && value !== undefined && value !== '') {
            let extra_kved_name = []
            value.map(item => {
                extra_kved_name.push(item.replace(' ', 'splitPoint').split('splitPoint')[1])
            })
            this.setState({
                extra_kved_name: extra_kved_name
            })
        }
        else {
            this.setState({
                [name]: value
            })
        }
    }

    sendAdditionlInfoData() {
        const { legal_form, kved_name, kved_code, extra_kved_name, tax_form, license, city, region, registered_at, pda, have_activity, no_debt, capital } = this.state
        if (this.props.clear) {
            this.props.actions.setAdditionalInfo(legal_form, kved_code, kved_name, extra_kved_name, tax_form, license, city, region, registered_at, pda, have_activity, no_debt, capital)
        }
        else {
            this.props.actions.setAdditionalInfo(legal_form, kved_code, kved_name, extra_kved_name, tax_form, license, city, region, registered_at, pda, have_activity, no_debt, capital)
        }
    }

    clearValue = () => {
        this.setState({
            legal_form: '',
            kved_name: '',
            extra_kved_name: [],
            tax_form: '',
            license: [],
            city: '',
            region: '',
            registered_at: '',
            pda: '',
            have_activity: '',
            no_debt: '',
            capital: '',
        })
    }

    setDataInfo = (nextProps) => {
        this.info = {
            legal_form: nextProps.data.post.legal_form,
            kved_name: nextProps.data.post.kved_name,
            extra_kved_name: nextProps.data.post.extra_kved_name,
            tax_form: nextProps.data.post.tax_form,
            license: nextProps.data.post.licenses,
            city: nextProps.data.post.city,
            region: nextProps.data.post.region,
            registered_at: nextProps.data.post.registered_at,
            pda: nextProps.data.post.pda,
            have_activity: nextProps.data.post.have_activity,
            no_debt: nextProps.data.post.no_debt,
            capital: nextProps.data.post.capital,
        }
        this.setState({
            legal_form: nextProps.data.post.legal_form,
            kved_name: nextProps.data.post.kved_name,
            extra_kved_name: nextProps.data.post.extra_kved_name,
            tax_form: nextProps.data.post.tax_form,
            license: nextProps.data.post.licenses,
            city: nextProps.data.post.city,
            region: nextProps.data.post.region,
            registered_at: nextProps.data.post.registered_at,
            pda: nextProps.data.post.pda,
            have_activity: nextProps.data.post.have_activity,
            no_debt: nextProps.data.post.no_debt,
            capital: nextProps.data.post.capital
        })
        console.log(this.info)
    }

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.clearValue() : void 0
        if (nextProps.data !== undefined && this.info.legal_form === undefined) {
            console.log(nextProps.data.post.legal_form)
            nextProps.data !== undefined && this.setDataInfo(nextProps)
        }
    }

    render() {
        const { t } = this.props
        console.log(this.props)
        this.sendAdditionlInfoData()
        return (
            <div className="additionl_info" >
                <div className="title" >
                    <span>2</span>
                    <h1>{t('create-advert-additional-header')}</h1>
                </div>

                <div className="first_position grid_left_column">
                    <p className="subtitle">{t('create-advert-additional-legal-form')}<span>*</span></p>
                    <Select
                        getData={this.setAdditionlInfoData}
                        name="legal_form"
                        type="common"
                        itemList={t('legalForm', { returnObjects: true })}
                        width='auto'
                        placeholder={t('additional-default-select-placeholder')}
                        icon={images.house}
                        id='ca_form_select_1'
                        clear={this.props.clear}
                        required={true}
                        editValue={this.state.legal_form}
                    />
                </div>

                <div className="second_position grid_left_column">
                    <p className="subtitle">{t('kved-name-select-placeholder')}<span>*</span></p>
                    <Select
                        getData={this.setAdditionlInfoData}
                        name="kved_name"
                        type="search"
                        searchType="kved"
                        width='auto'
                        placeholder={t('additional-default-select-placeholder')}
                        icon={images.portfolio}
                        id='ca_form_select_2'
                        clear={this.props.clear}
                        required={true}
                        editValue={this.state.kved_name}
                    />
                </div>

                <div className="third_position grid_left_column">
                    <p className="subtitle">{t('create-advert-additional-extra-kved')}</p>
                    <Select
                        getData={this.setAdditionlInfoData}
                        name="extra_kved_name"
                        type="multiply search" width='auto'
                        placeholder={t('additional-default-select-placeholder')}
                        icon={images.plus}
                        id='ca_form_select_3'
                        clear={this.props.clear}
                        value={this.state.extra_kved_name}
                    />
                </div>

                <div className="forth_position grid_left_column">
                    <p className="subtitle">{t('create-advert-additional-tax-form')}<span>*</span></p>
                    <Select
                        getData={this.setAdditionlInfoData}
                        name="tax_form"
                        type="common"
                        itemList={t('taxForm', { returnObjects: true })}
                        width='auto'
                        placeholder={t('additional-default-select-placeholder')}
                        icon={images.lable}
                        id='ca_form_select_4'
                        clear={this.props.clear}
                        required={true}
                        editValue={this.state.tax_form}
                    />
                </div>

                <div className="fifth_position grid_left_column">
                    <p className="subtitle">{t('create-advert-additional-license')}</p>
                    <Select
                        getData={this.setAdditionlInfoData}
                        name="license"
                        itemList={t('license', { returnObjects: true })}
                        type="multiply"
                        width='auto'
                        placeholder={t('additional-default-select-placeholder')}
                        icon={images.cc}
                        id='ca_form_select_5'
                        clear={this.props.clear}
                        value={this.state.license}
                    />
                </div>

                <div className="sixth_position grid_right_column">
                    <p className="subtitle">{t('create-advert-additional-place')}<span>*</span></p>
                    <Select
                        getData={this.setAdditionlInfoData}
                        name="location"
                        type="search"
                        searchType="location"
                        width='auto'
                        placeholder={t('location-select-placeholder')}
                        icon={images.mapPoint}
                        id='ca_form_select_6'
                        clear={this.props.clear}
                        required={true}
                        editValue={`${this.state.region}, ${this.state.city}`}
                    />
                </div>

                <div className="seventh_position grid_right_column">
                    <p className="subtitle">{t('create-advert-additional-registered')}<span>*</span></p>
                    <Input
                        getData={this.setAdditionlInfoData}
                        name="registered_at"
                        type="date"
                        placeholder={t('registered-input-placeholder')}
                        width="100%"
                        className="input"
                        clear={this.props.clear}
                        required={true}
                        value={this.state.registered_at !== undefined && this.state.registered_at.split('-').reverse().join('-')}
                    />
                </div>

                <div className="eith_position grid_right_column">
                    <div className="first_radio">
                        <p className="subtitle">{t('ispda-question-placeholder')}<span>*</span></p>
                        <Radiobutton
                            getData={this.setAdditionlInfoData}
                            name="pda"
                            options={[t('yes'), t('no')]}
                            id='pda'
                            clear={this.props.clear}
                            value={this.state.pda}
                        />
                    </div>

                    <div className="second_radio">
                        <p className="subtitle">{t('haveactivity-question-placeholder')}</p>
                        <Radiobutton
                            getData={this.setAdditionlInfoData}
                            name="have_activity"
                            options={[t('yes'), t('no')]}
                            id='have_activity'
                            clear={this.props.clear}
                            value={this.state.have_activity}
                        />
                    </div>

                    <div className="third_radio">
                        <p className="subtitle">{t('no-debt-question-placeholder')}</p>
                        <Radiobutton
                            getData={this.setAdditionlInfoData}
                            name="no_debt"
                            options={[t('yes'), t('no')]}
                            id='no_debt'
                            clear={this.props.clear}
                            value={this.state.no_debt}
                        />
                    </div>
                </div>

                <div className="nineth_position grid_right_column">
                    <p className="subtitle">{t('create-advert-additional-capital')}</p>
                    <Input
                        getData={this.setAdditionlInfoData}
                        name="capital"
                        type="money"
                        placeholder={t('price-input-placeholder')}
                        width="100%"
                        className="input"
                        clear={this.props.clear}
                        value={this.state.capital}
                    />
                </div>

            </div>
        );
    }
}

export default withTranslation()(connect(
    (state) => ({
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
        clear: state.advert.clear
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(AdditionlInfo));