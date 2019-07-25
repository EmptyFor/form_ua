import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../../store/actions/search';
import { bindActionCreators } from 'redux';
import '../Form/style.modules.scss';
import { Button } from '../../common/Button';
import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import { Radiobutton } from '../../common/Radiobutton';
import links from '../../../config/links';
import { images } from '../../../assets/images/images'

export class Form extends Component {

    state = {
        legalForm: '',
        mainEconomicActivityType: '',
        location: '',
        taxationForm: ''
    }

    setSearchData = (e) => {
        let name = e.target.getAttribute('name')
        let value = e.target.getAttribute('value') || e.target.value
        
        this.setState({
            [name]: value
        })
        console.log('...search')
    }

    render() {
        const { legalForm, mainEconomicActivityType, location, taxationForm } = this.state
        this.props.actions.setSearchData(legalForm, mainEconomicActivityType, location, taxationForm)

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
                        getData={this.setSearchData}
                    />
                    <Select
                        type="common"
                        width='auto'
                        placeholder='Оновний вид господарської діяльності (КВЕДи)'
                        icon={images.portfolio}
                        id='mp_form_select_2'
                        getData={this.setSearchData}
                    />
                    <Select
                        type="common"
                        width='auto'
                        placeholder='Вибріть місто/населений пункт'
                        icon={images.mapPoint}
                        id='mp_form_select_3'
                        getData={this.setSearchData}
                    />
                    <Select
                        type="common"
                        width='auto'
                        placeholder='Форма оподаткування'
                        icon={images.lable}
                        id='mp_form_select_4'
                        getData={this.setSearchData}
                    />

                    <p className="price">Ціна</p>
                    <Input
                        getData={this.setAdditionlInfoData}
                        name="registrationDate"
                        type="money"
                        placeholder='від (₴)'
                        width="100%"
                        className='price_from'
                        clear={this.props.clear}
                    />
                    <Input
                        getData={this.setAdditionlInfoData}
                        name="registrationDate"
                        type="money"
                        placeholder='до (₴)'
                        width="100%"
                        className='price_to'
                        clear={this.props.clear}
                    />

                    <div className="is_PDV_payer">
                        {/* <p>Є платником ПДВ</p> */}
                        <Radiobutton
                            getData={this.setAdditionlInfoData}
                            name="isPDVPayer"
                            options={['Є платником ПДВ']}
                            id='isPDVPayer'
                            clear={this.props.clear}
                        />
                    </div>

                    <Link className='links' style={{ gridColumn: 'span 3' }}>
                        <Button className='extendet_search grey_btn'
                            text='Розширений пошук' />
                    </Link>


                    <Link to={links.search} className='links' style={{ gridColumn: 'span 2' }}>
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
        taxationForm: state.search.taxationForm
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Form);