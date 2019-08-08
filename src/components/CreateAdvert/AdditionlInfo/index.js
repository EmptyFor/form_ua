import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../store/actions/advert'
import legalForm from '../../../assets/db/legalForm';
import taxForm from '../../../assets/db/taxForm';
import license from '../../../assets/db/license';
import { images } from '../../../assets/images/images';
import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import { Radiobutton } from '../../common/Radiobutton';
import './style.modules.scss';

export class AdditionlInfo extends Component {
    constructor() {
        super()
        this.setAdditionlInfoData = this.setAdditionlInfoData.bind(this)
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
                extra_kved_name.push({
                    code: item.replace(' ', 'splitPoint').split('splitPoint')[0],
                    name: item.replace(' ', 'splitPoint').split('splitPoint')[1]
                })
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
            legal_form &&
                kved_name &&
                extra_kved_name.length <= 10 &&
                tax_form &&
                license.length <= 5 &&
                city &&
                region &&
                registered_at.length === 10 &&
                pda.toString().length > 0 ?
                this.props.actions.setAdditionalInfo(legal_form, kved_code, kved_name, extra_kved_name, tax_form, license, city, region, registered_at, pda, have_activity, no_debt, capital) :
                void 0
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

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.clearValue() : void 0
    }

    render() {
        this.sendAdditionlInfoData()
        return (
            <div className="additionl_info" >
                <div className="title" >
                    <span>2</span>
                    <h1>Положення згідно законодавства</h1>
                </div>

                <div className="first_position grid_left_column">
                    <p className="subtitle">Організаційно правова форма:<span>*</span></p>
                    <Select
                        getData={this.setAdditionlInfoData}
                        name="legal_form"
                        type="common"
                        itemList={legalForm}
                        width='auto'
                        placeholder='Оберіть зі списку'
                        icon={images.house}
                        id='ca_form_select_1'
                        clear={this.props.clear}
                        required={true}
                    />
                </div>

                <div className="second_position grid_left_column">
                    <p className="subtitle">Основний вид господарської діяльності:<span>*</span></p>
                    <Select
                        getData={this.setAdditionlInfoData}
                        name="kved_name"
                        type="search"
                        searchType="kved"
                        width='auto'
                        placeholder='Оберіть зі списку'
                        icon={images.portfolio}
                        id='ca_form_select_2'
                        clear={this.props.clear}
                        required={true}
                    />
                </div>

                <div className="third_position grid_left_column">
                    <p className="subtitle">Додаткові види (до 10 видів):</p>
                    <Select
                        getData={this.setAdditionlInfoData}
                        name="extra_kved_name"
                        type="multiply search" width='auto'
                        placeholder='Оберіть зі списку'
                        icon={images.plus}
                        id='ca_form_select_3'
                        clear={this.props.clear}
                    />
                </div>

                <div className="forth_position grid_left_column">
                    <p className="subtitle">Форма оподаткування:<span>*</span></p>
                    <Select
                        getData={this.setAdditionlInfoData}
                        name="tax_form"
                        type="common"
                        itemList={taxForm}
                        width='auto'
                        placeholder='Оберіть зі списку'
                        icon={images.lable}
                        id='ca_form_select_4'
                        clear={this.props.clear}
                        required={true}
                    />
                </div>

                <div className="fifth_position grid_left_column">
                    <p className="subtitle">Ліцензія (до 5 видів):</p>
                    <Select
                        getData={this.setAdditionlInfoData}
                        name="license"
                        itemList={license}
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
                        getData={this.setAdditionlInfoData}
                        name="location"
                        type="search"
                        searchType="location"
                        width='auto'
                        placeholder='Вибріть місто/населений пункт'
                        icon={images.mapPoint}
                        id='ca_form_select_6'
                        clear={this.props.clear}
                        required={true}
                    />
                </div>

                <div className="seventh_position grid_right_column">
                    <p className="subtitle">Дата державної реєстрації:<span>*</span></p>
                    <Input
                        getData={this.setAdditionlInfoData}
                        name="registered_at"
                        type="date"
                        placeholder="Введіть у форматі ДД/ММ/РРРР"
                        width="100%"
                        className="input"
                        clear={this.props.clear}
                        required={true}
                    />
                </div>

                <div className="eith_position grid_right_column">
                    <div className="first_radio">
                        <p className="subtitle">Є платником ПДВ?<span>*</span></p>
                        <Radiobutton
                            getData={this.setAdditionlInfoData}
                            name="pda"
                            options={['Так', 'Ні']}
                            id='pda'
                            clear={this.props.clear}
                        />
                    </div>

                    <div className="second_radio">
                        <p className="subtitle">Вела господарську діяльність?</p>
                        <Radiobutton
                            getData={this.setAdditionlInfoData}
                            name="have_activity"
                            options={['Так', 'Ні']}
                            id='have_activity'
                            clear={this.props.clear}
                        />
                    </div>

                    <div className="third_radio">
                        <p className="subtitle">Без обтяжень та заборгованостей?</p>
                        <Radiobutton
                            getData={this.setAdditionlInfoData}
                            name="no_debt"
                            options={['Так', 'Ні']}
                            id='no_debt'
                            clear={this.props.clear}
                        />
                    </div>
                </div>

                <div className="nineth_position grid_right_column">
                    <p className="subtitle">Статутний капітал:</p>
                    <Input
                        getData={this.setAdditionlInfoData}
                        name="capital"
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
)(AdditionlInfo);