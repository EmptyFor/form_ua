import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../common/Button';
import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import { CheckBox } from '../../common/CheckBox';
import { images } from '../../../assets/images/images';
import * as actions from '../../../store/actions/search';
import { bindActionCreators } from 'redux';
import '../FilterForm/style.modules.scss';
class FilterForm extends Component {

  state = {
    additionalEconomicActivityType: "",
    broughtEconomicActivity: Boolean,
    hasDebt: Boolean,
    isPDVPayer: Boolean,
    legalForm: "",
    license: "",
    location: "",
    mainEconomicActivityType: "",
    purchasePriceFrom: "",
    taxationForm: ""
  }

  setSearchData = (e) => {
    let name = e.target.getAttribute('name')
    let value = e.target.getAttribute('value') || e.target.value || e.target.checked

    value !== undefined ? name === 'additionalEconomicActivityType' || name === 'license' ? value = value.split(',') : void 0 : void 0
    name === 'isPDVPayer' || name === 'broughtEconomicActivity' || name === 'hasDebt' ? value = e.target.checked : void 0
    name === 'purchasePriceFrom' || name === 'purchasePriceTo' ? value = value.replace(/\D/g, '') : void 0

    this.setState({
      [name]: value
    })
  }

  sendSearchData = () => {
    const { legalForm, mainEconomicActivityType, location, taxationForm, purchasePriceFrom, purchasePriceTo, isPDVPayer, additionalEconomicActivityType, license, broughtEconomicActivity, hasDebt } = this.state

    this.props.actions.setMainPageFormInfo(legalForm, mainEconomicActivityType, location, taxationForm, purchasePriceFrom, purchasePriceTo, isPDVPayer, additionalEconomicActivityType, license, broughtEconomicActivity, hasDebt)
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
            name="legalForm"
            type="common"
            width='auto'
            placeholder='Оберіть зі списку'
            icon={images.house}
            id='ca_form_select_1'
            clear={this.props.clear}
          />
          <Select
            getData={this.setSearchData}
            name="mainEconomicActivityType"
            type="common"
            width='auto'
            placeholder='Оберіть зі списку'
            icon={images.portfolio}
            id='ca_form_select_2'
            clear={this.props.clear}
          />
          <Select
            getData={this.setSearchData}
            name="additionalEconomicActivityType"
            type="multiply" width='auto'
            placeholder='Додаткові види'
            icon={images.plus}
            id='ca_form_select_3'
            clear={this.props.clear}
          />
          <Select
            getData={this.setSearchData}
            name="location"
            type="search"
            width='auto'
            placeholder='Вибріть місто/населений пункт'
            icon={images.mapPoint}
            id='ca_form_select_6'
            clear={this.props.clear}
          />
          <Select
            getData={this.setSearchData}
            name="taxationForm"
            type="common"
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
              name="isPDVPayer"
              id='isPDVPayer'
              clear={this.props.clear}
            />
          </span>
          <span>
            <label>Ведення господарської діяльності</label>
            <CheckBox
              getData={this.setSearchData}
              name="broughtEconomicActivity"
              id='broughtEconomicActivity'
              clear={this.props.clear}
            />
          </span>
          <span>
            <label>Наявність заборгованостей/обтяжень</label>
            <CheckBox
              getData={this.setSearchData}
              name="hasDebt"
              id='hasDebt'
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
    legalForm: state.search.legalForm,
    mainEconomicActivityType: state.search.mainEconomicActivityType,
    location: state.search.location,
    taxationForm: state.search.taxationForm,
    purchasePriceFrom: state.search.purchasePriceFrom,
    purchasePriceTo: state.search.purchasePriceTo,
    isPDVPayer: state.search.isPDVPayer,
    additionalEconomicActivityType: state.search.additionalEconomicActivityType,
    license: state.search.license,
    broughtEconomicActivity: state.search.broughtEconomicActivity,
    hasDebt: state.search.hasDebt,
    clear: state.search.clear
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(FilterForm);