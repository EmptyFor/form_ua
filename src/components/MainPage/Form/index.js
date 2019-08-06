import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../../../store/actions/search';
import '../Form/style.modules.scss';
import '../Form/style.modules.media.scss';
import legalForm from '../../../assets/db/legalForm';
import taxForm from '../../../assets/db/taxForm';
import license from '../../../assets/db/license';
import { Button } from '../../common/Button';
import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import { CheckBox } from '../../common/CheckBox';
import links from '../../../config/links';
import { images } from '../../../assets/images/images'

export class Form extends Component {

    state = {
        legal_form: '',
        kved_code: '',
        kved_name: '',
        city: '',
        region: '',
        tax_form: '',
        price_from: 0,
        price_to: 0,
        pda: false
    }

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

        else if (name === 'kved_name' && value !== undefined) {
            this.setState({
                kved_code: value.replace(' ', 'splitPoint').split('splitPoint')[0],
                kved_name: value.replace(' ', 'splitPoint').split('splitPoint')[1]
            })
        }

        else {
            this.setState({
                [name]: value
            })
        }
    }

    sendSearchData = () => {
        const { legal_form, kved_code, kved_name, city, region, tax_form, price_from, price_to, pda } = this.state

        if (legal_form &&
            kved_name &&
            city &&
            region &&
            tax_form &&
            price_from.length > 0 &&
            price_to > 0
        ) {
            this.props.actions.setMainPageFormInfo(legal_form, kved_code, kved_name, city, region, tax_form, price_from, price_to, pda)
            localStorage.setItem('formData', {

            })
            console.log(this.props)
        }
    }

    render() {
        this.sendSearchData()
        console.log(this.props)
        return (

            <div className='wrapp' >
                <h1>Розпочни свій бізнес вже сьогодні</h1>
                <span className="form_subtitle" >Знайди ідеальне рішення за декілька секунд...</span>

                <div className='search_form grid'>

                    <Select
                        type="common"
                        width='auto'
                        itemList={legalForm}
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
                        itemList={taxForm}
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
                        <Button
                            className='find'
                            text='Знайти'
                        />
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