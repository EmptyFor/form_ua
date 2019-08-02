import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../../../store/actions/search';
import '../Form/style.modules.scss';
import { Button } from '../../common/Button';
import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import { CheckBox } from '../../common/CheckBox';
import links from '../../../config/links';
import { images } from '../../../assets/images/images'

export class Form extends Component {

    state = {
        link: links.search,
        legal_form: '',
        kved_name: '',
        city: '',
        region: '',
        tax_form: '',
        price_from: 0,
        price_to: 0,
        pda: false
    }

    legalForm = [
        {
            name: 'Приватне акціонерне товариство',
            value: 'private_joint_stock_company'
        },
        {
            name: 'Публічне акціонерне товариство',
            value: 'public_company'
        },
        {
            name: 'Товариство з обмеженою відповідальністю',
            value: 'limited_liability_company'
        },
        {
            name: 'Приватне підприємство',
            value: 'private_enterprise'
        },
        {
            name: 'Асоціація',
            value: 'association'
        },
        {
            name: 'Благодійна організація',
            value: 'charitable_organization'
        },
        {
            name: 'Виробничий кооператив',
            value: 'manufacturing_cooperation'
        },
        {
            name: 'Гаражний кооператив',
            value: 'garage_cooperative'
        },
        {
            name: 'Громадська організація',
            value: 'public_organization'
        },
        {
            name: 'Житлово-будівельний кооператив',
            value: "housing_and_building_cooperatives"
        },
        {
            name: 'Консорціум',
            value: 'consortium'
        },
        {
            name: 'Концерн',
            value: 'concern'
        },
        {
            name: 'Кооперативний банк',
            value: 'cooperative_bank'
        },
        {
            name: 'Корпорація',
            value: 'corporation'
        },
        {
            name: 'Кредитна спілка',
            value: 'credit_union'
        },
        {
            name: 'Обслуговуючий кооператив',
            value: 'service_cooperative'
        },
        {
            name: 'Підприємство споживчої кооперації',
            value: 'enterprise_of_consumer_cooperation'
        },
        {
            name: 'Політична партія',
            value: 'political_party'
        },
        {
            name: 'Садівниче товариство',
            value: 'saddoviche_society'
        },
        {
            name: 'Сільськогосподарський виробничий кооператив',
            value: 'agricultural_production_cooperation'
        },
        {
            name: 'Сільськогосподарський обслуговуючий кооператив',
            value: 'agricultural_service_cooperative'
        },
        {
            name: 'Споживче товариство',
            value: 'consumer_company'
        },
        {
            name: 'Споживчий кооператив',
            value: 'consumer_cooperation'
        },
        {
            name: 'Товариство з додатковою відповідальністю',
            value: 'company_with_additional_liability'
        },
        {
            name: 'Товарна біржа',
            value: 'commodity_exchange'
        },
        {
            name: 'Фермерське господарство',
            value: 'farming_household'
        },
        {
            name: 'Фондова біржа',
            value: 'stock_exchange'
        },

        {
            name: 'Холдингова компанія',
            value: 'holding_company'
        }
    ]

    taxForm = [
        {
            name: 'Загальна система',
            value: 'general_system'
        },
        {
            name: 'Єдиний податок перша група',
            value: 'the_only_tax_is_the_first_group'
        },
        {
            name: 'Єдиний податок друга група',
            value: 'the_only_tax_is_the_second_group'
        },
        {
            name: 'Єдиний податок третя група',
            value: 'the_only_tax_is_the_third_group'
        }
    ]

    setSearchData = (e) => {
        let name = e.target.getAttribute('name')
        let value = e.target.getAttribute('value') || e.target.value

        name === 'price_from' || name === 'price_to' ? value = value.replace(/\D/g, '') : void 0
        name === 'pda' ? value = e.target.checked : void 0
        if (name === 'location') {
            value === undefined ? value = "" : void 0
            value = value.split(',')
            this.setState({ region: value[0], city: value[1] })
        }

        this.setState({
            [name]: value
        })
    }

    sendSearchData = () => {
        const { legal_form, kved_name, city, region, tax_form, price_from, price_to, pda } = this.state

        if (legal_form &&
            kved_name &&
            city &&
            region &&
            tax_form &&
            price_from.length > 0 &&
            price_to > 0
        ) {
            this.props.actions.setMainPageFormInfo(legal_form, kved_name, city, region, tax_form, price_from, price_to, pda)
        }
    }

    render() {
        console.log(this.props)
        this.sendSearchData()

        return (

            <div className='wrapp' >
                <h1>Розпочни свій бізнес вже сьогодні</h1>
                <span className="form_subtitle" >Знайди ідеальне рішення за декілька секунд...</span>

                <div className='search_form grid'>

                    <Select
                        type="common"
                        width='auto'
                        itemList={this.legalForm}
                        placeholder='Організаційно правова форма'
                        icon={images.house} id='mp_form_select_1'
                        name="legal_form"
                        getData={this.setSearchData}
                    />
                    <Select
                        type="search"
                        searchType="kved"
                        width='auto'
                        placeholder='Оновний вид господарської діяльності (КВЕДи)'
                        icon={images.portfolio}
                        id='mp_form_select_2'
                        name="kved_name"
                        getData={this.setSearchData}
                    />
                    <Select
                        type="search"
                        searchType="location"
                        width='auto'
                        placeholder='Вибріть місто/населений пункт'
                        icon={images.mapPoint}
                        id='mp_form_select_3'
                        name="location"
                        getData={this.setSearchData}
                    />
                    <Select
                        type="common"
                        itemList={this.taxForm}
                        width='auto'
                        placeholder='Форма оподаткування'
                        icon={images.lable}
                        id='mp_form_select_4'
                        name="tax_form"
                        getData={this.setSearchData}
                    />

                    <p className="price">Ціна</p>
                    <Input
                        getData={this.setSearchData}
                        name="registrationDate"
                        type="money"
                        placeholder='від (₴)'
                        width="100%"
                        className='price_from'
                        name="price_from"
                        clear={this.props.clear}
                    />
                    <Input
                        getData={this.setSearchData}
                        name="registrationDate"
                        type="money"
                        placeholder='до (₴)'
                        width="100%"
                        className='price_to'
                        name="price_to"
                        clear={this.props.clear}
                    />

                    <div className="is_PDV_payer">
                        <CheckBox
                            getData={this.setSearchData}
                            name="pda"
                            id='pda'
                            text="Є платником ПДВ"
                            clear={this.props.clear}
                        />
                    </div>

                    <Link to={'/'} className='common_btn_link' style={{ gridColumn: 'span 3' }}>
                        <Button className='extendet_search grey_btn'
                            text='Розширений пошук' />
                    </Link>


                    <Link to={links.search} className='common_btn_link' style={{ gridColumn: 'span 2' }}>
                        <Button className='find'
                            text='Знайти' />
                    </Link>
                </div>
            </div >

        );
    }
}

export default connect(
    (state) => ({
        legal_form: state.search.legal_form,
        kved_name: state.search.kved_name,
        city: state.search.city,
        region: state.search.region,
        tax_form: state.search.tax_form,
        price_from: state.search.price_from,
        price_to: state.search.price_to,
        pda: state.search.pda
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Form);