import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../common/Button';
import legalForm from '../../../assets/db/legalForm';
import taxForm from '../../../assets/db/taxForm';
import license from '../../../assets/db/license';
import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import { CheckBox } from '../../common/CheckBox';
import { images } from '../../../assets/images/images';
import * as actions from '../../../store/actions/search';
import { bindActionCreators } from 'redux';
import '../FilterForm/style.modules.scss';
class FilterForm extends Component {

  state = {
    legal_form: '',
    kved_name: '',
    city: '',
    region: '',
    tax_form: '',
    price_from: 0,
    price_to: 0,
    pda: false,
    extra_kved_name: [],
    license: [],
    have_activity: false,
    no_debt: false
  }

  setSearchData = (e) => {
    let name = e.target.getAttribute('name')
    let value = e.target.getAttribute('value') || e.target.value || e.target.checked

    value !== undefined ? name === 'extra_kved_name' || name === 'license' ? value = value.split(',') : void 0 : void 0
    name === 'pda' || name === 'have_activity' || name === 'no_debt' ? value = e.target.checked : void 0
    name === 'purchasePriceFrom' || name === 'purchasePriceTo' ? value = value.replace(/\D/g, '') : void 0
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
    const { legal_form, kved_name, city, region, tax_form, purchasePriceFrom, purchasePriceTo, pda, extra_kved_name, license, have_activity, no_debt } = this.state

    this.props.actions.setMainPageFormInfo(legal_form, kved_name, city, region, tax_form, purchasePriceFrom, purchasePriceTo, pda, extra_kved_name, license, have_activity, no_debt)
  }

  clearAllFields = () => {
    this.props.actions.clearAllInfo(true)
    setTimeout(() => {
      this.props.actions.clearAllInfo(false)
    }, 100);
  }

  render() {
    this.sendSearchData()

    console.log(this.props)
    return (
      <div className="filter_form">
        <div className="filter_header">Загальні параметри пошуку</div>
        <div className="filter_inputs">
          <Select
            getData={this.setSearchData}
            name="legal_form"
            itemList={legalForm}
            type="common"
            width='auto'
            placeholder='Оберіть зі списку'
            icon={images.house}
            id='ca_form_select_1'
            clear={this.props.clear}
          />
          <Select
            getData={this.setSearchData}
            name="kved_name"
            type="search"
            searchType="kved"
            width='auto'
            placeholder='Оберіть зі списку'
            icon={images.portfolio}
            id='ca_form_select_2'
            clear={this.props.clear}
          />
          <Select
            getData={this.setSearchData}
            name="extra_kved_name"
            type="multiply search" width='auto'
            placeholder='Додаткові види'
            icon={images.plus}
            id='ca_form_select_3'
            clear={this.props.clear}
          />
          <Select
            getData={this.setSearchData}
            name="location"
            type="search"
            searchType="location"
            width='auto'
            placeholder='Вибріть місто/населений пункт'
            icon={images.mapPoint}
            id='ca_form_select_6'
            clear={this.props.clear}
          />
          <Select
            getData={this.setSearchData}
            name="tax_form"
            type="common"
            itemList={taxForm}
            width='auto'
            placeholder='Форма оподаткування'
            icon={images.lable}
            id='ca_form_select_4'
            clear={this.props.clear}
          />
          <Select
            getData={this.setSearchData}
            name="license"
            type="multiply"
            itemList={license}
            width='auto'
            placeholder='Ліцензія'
            icon={images.cc}
            id='ca_form_select_5'
            clear={this.props.clear}
          />
        </div>

        <div className="filter_checkboxes">
          <span>
            <label>Є платником ПДВ?</label>
            <CheckBox
              getData={this.setSearchData}
              name="pda"
              id='pda'
              clear={this.props.clear}
            />
          </span>
          <span>
            <label>Ведення господарської діяльності</label>
            <CheckBox
              getData={this.setSearchData}
              name="have_activity"
              id='have_activity'
              clear={this.props.clear}
            />
          </span>
          <span>
            <label>Наявність заборгованостей/обтяжень</label>
            <CheckBox
              getData={this.setSearchData}
              name="no_debt"
              id='no_debt'
              clear={this.props.clear}
            />
          </span>
        </div>

        <div className="filter_bottom">
          <div className="filter_bottom_inputs">
            <label>Ціна</label>
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
          </div>

          <div className="filter_bottom_buttons">
            <Button
              className='grey_btn'
              text='Скинути фільтри'
              onClick={this.clearAllFields}
            />
            <Button
              className='find'
              text='Показати'
            />
          </div>
        </div>
      </div>

    )
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
    pda: state.search.pda,
    extra_kved_name: state.search.extra_kved_name,
    license: state.search.license,
    have_activity: state.search.have_activity,
    no_debt: state.search.no_debt,
    clear: state.search.clear
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(FilterForm);