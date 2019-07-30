import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from'../../../store/actions/search';
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
        legalForm: '',
        mainEconomicActivityType: '',
        location: '',
        taxationForm: '',
        purchasePriceFrom: '',
        purchasePriceTo: '',
        isPDVPayer: ''
    }

    setSearchData = (e) => {
        let name = e.target.getAttribute('name')
        let value = e.target.getAttribute('value') || e.target.value

        name === 'purchasePriceFrom' || name === 'purchasePriceTo' ? value = value.replace(/\D/g, '') : void 0
        name === 'isPDVPayer' && value.length !== 0 ? value = true : void 0

        this.setState({
            [name]: value
        })
    }

    sendSearchData = () => {
        const { legalForm, mainEconomicActivityType, location, taxationForm, purchasePriceFrom, purchasePriceTo, isPDVPayer } = this.state

        if (legalForm &&
            mainEconomicActivityType &&
            location &&
            taxationForm &&
            purchasePriceFrom.length > 0 &&
            purchasePriceTo > 0 &&
            isPDVPayer) {
            this.props.actions.setMainPageFormInfo(legalForm, mainEconomicActivityType, location, taxationForm, purchasePriceFrom, purchasePriceTo, isPDVPayer)
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
                        placeholder='Організаційно правова форма'
                        icon={images.house} id='mp_form_select_1'
                        name="legalForm"
                        getData={this.setSearchData}
                    />
                    <Select
                        type="common"
                        width='auto'
                        placeholder='Оновний вид господарської діяльності (КВЕДи)'
                        icon={images.portfolio}
                        id='mp_form_select_2'
                        name="mainEconomicActivityType"
                        getData={this.setSearchData}
                    />
                    <Select
                        type="search"
                        width='auto'
                        placeholder='Вибріть місто/населений пункт'
                        icon={images.mapPoint}
                        id='mp_form_select_3'
                        name="location"
                        getData={this.setSearchData}
                    />
                    <Select
                        type="common"
                        width='auto'
                        placeholder='Форма оподаткування'
                        icon={images.lable}
                        id='mp_form_select_4'
                        name="taxationForm"
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
                        name="purchasePriceFrom"
                        clear={this.props.clear}
                    />
                    <Input
                        getData={this.setSearchData}
                        name="registrationDate"
                        type="money"
                        placeholder='до (₴)'
                        width="100%"
                        className='price_to'
                        name="purchasePriceTo"
                        clear={this.props.clear}
                    />

                    <div className="is_PDV_payer">
                        <CheckBox
                            getData={this.setSearchData}
                            name="isPDVPayer"
                            id='isPDVPayer'
                            name="isPDVPayer"
                            text="Є платником ПДВ"
                            clear={this.props.clear}
                        />
                    </div>

                    <Link className='common_btn_link' style={{ gridColumn: 'span 3' }}>
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
        legalForm: state.search.legalForm,
        mainEconomicActivityType: state.search.mainEconomicActivityType,
        location: state.search.location,
        taxationForm: state.search.taxationForm,
        purchasePriceFrom: state.search.purchasePriceFrom,
        purchasePriceTo: state.search.purchasePriceTo,
        isPDVPayer: state.search.isPDVPayer
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Form);