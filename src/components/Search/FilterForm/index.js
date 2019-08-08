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

  filterItemList = React.createRef()

  state = {
    legal_form: '',
    kved_code: '',
    kved_name: '',
    city: '',
    region: '',
    tax_form: '',
    price_from: false,
    price_to: false,
    pda: false,
    license: [],
    have_activity: false,
    no_debt: false
  }

  sendSearchArgs = () => {
    const { legal_form, kved_code, kved_name, city, region, tax_form, price_from, price_to, pda, extra_kved_name, license, have_activity, no_debt } = this.state
    let search_args = []

    legal_form !== undefined ? legal_form.length > 0 ? search_args.push(`?legalform=${legal_form}`) : void 0 : void 0
    kved_name !== undefined ? kved_name.length > 0 ? search_args.push(`?st_kved_name=${kved_name}`) : void 0 : void 0
    city !== undefined ? city.length > 0 ? search_args.push(`?st_city=${city}`) : void 0 : void 0
    tax_form !== undefined ? tax_form.length > 0 ? search_args.push(`?taxform=${tax_form}`) : void 0 : void 0
    price_from !== false ? price_from >= 0 ? search_args.push(`?over_price=${price_from}`) : void 0 : void 0
    price_to !== false ? price_to >= 0 ? search_args.push(`?under_price=${price_to}`) : void 0 : void 0
    pda !== undefined ? pda === true ? search_args.push(`?pda_true=${pda}`) : void 0 : void 0
    license !== undefined ? license.length > 0 ? search_args.push(`?st_license=${license}`) : void 0 : void 0
    have_activity !== undefined ? have_activity === true ? search_args.push(`?no_debt_true=${have_activity}`) : void 0 : void 0
    no_debt !== undefined ? no_debt === true ? search_args.push(`?no_debt_true=${no_debt}`) : void 0 : void 0

    search_args = search_args.join('&')

    this.props.actions.setSearchArgs(search_args)
  }

  setMainPageFormInfo = (e) => {
    const { price_from, price_to, pda } = this.state
    let filterItemList = [
      this.filterItemList.current.childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0],
      this.filterItemList.current.childNodes[3].childNodes[0].childNodes[1],
      this.filterItemList.current.childNodes[3].childNodes[0].childNodes[2]
    ]
    filterItemList[0].checked = pda
    filterItemList[1].value = price_from
    filterItemList[2].value = price_to
  }

  setSearchData = (e) => {
    let name = e.target.getAttribute('name')
    let value = e.target.getAttribute('value') || e.target.value || e.target.checked

    value !== undefined ? name === 'license' ? value = value.split(',') : void 0 : void 0
    name === 'pda' || name === 'have_activity' || name === 'no_debt' ? value = e.target.checked : void 0
    value !== false ? name === 'price_from' || name === 'price_to' ? value = value.replace(/\D/g, '') : void 0 : void 0
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
    const { legal_form, kved_code, kved_name, city, region, tax_form, price_from, price_to, pda, extra_kved_name, license, have_activity, no_debt } = this.state

    this.props.actions.setMainPageFormInfo(legal_form, kved_code, kved_name, city, region, tax_form, price_from, price_to, pda, extra_kved_name, license, have_activity, no_debt)
  }

  clearAllFields = () => {
    this.props.actions.clearAllInfo(true)
    this.setState({
      legal_form: '',
      kved_code: '',
      kved_name: '',
      city: '',
      region: '',
      tax_form: '',
      price_from: false,
      price_to: false,
      pda: false,
      license: [],
      have_activity: false,
      no_debt: false
    })
    setTimeout(() => {
      this.props.actions.clearAllInfo(false)
    }, 100);
  }

  componentWillMount = () => {
    const { legal_form, kved_code, kved_name, city, region, tax_form, price_from, price_to, pda } = this.props

    this.setState({
      legal_form: legal_form,
      kved_code: kved_code,
      kved_name: kved_name,
      city: city,
      region: region,
      tax_form: tax_form,
      price_from: price_from,
      price_to: price_to,
      pda: pda
    })
    this.sendSearchData()
    this.sendSearchArgs()
  }

  render() {
    return (
      <div className="filter_form" ref={this.filterItemList}>
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
            value={this.state.legal_form}
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
            value={`${this.state.kved_code}, ${this.state.kved_name}`}
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
            value={`${this.state.region}, ${this.state.city}`}
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
            value={this.state.tax_form}
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
              value={this.state.pda}
            />
          </span>
          <span>
            <label>Ведення господарської діяльності</label>
            <CheckBox
              getData={this.setSearchData}
              name="have_activity"
              id='have_activity'
              clear={this.props.clear}
              value={this.state.have_activity}
            />
          </span>
          <span>
            <label>Наявність заборгованостей/обтяжень</label>
            <CheckBox
              getData={this.setSearchData}
              name="no_debt"
              id='no_debt'
              clear={this.props.clear}
              value={this.state.no_debt}
            />
          </span>
        </div>

        <div className="filter_bottom">
          <div className="filter_bottom_inputs">
            <label>Ціна</label>
            <Input
              getData={this.setSearchData}
              type="money"
              placeholder='від (₴)'
              width="100%"
              className='price_from'
              name="price_from"
              clear={this.props.clear}
              value={this.state.price_from}
            />
            <Input
              getData={this.setSearchData}
              type="money"
              placeholder='до (₴)'
              width="100%"
              className='price_to'
              name="price_to"
              clear={this.props.clear}
              value={this.state.price_to}
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
              onClick={this.sendSearchArgs}
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
    kved_code: state.search.kved_code,
    kved_name: state.search.kved_name,
    city: state.search.city,
    region: state.search.region,
    tax_form: state.search.tax_form,
    price_from: state.search.price_from,
    price_to: state.search.price_to,
    pda: state.search.pda,
    license: state.search.license,
    have_activity: state.search.have_activity,
    no_debt: state.search.no_debt,
    clear: state.search.clear
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(FilterForm);