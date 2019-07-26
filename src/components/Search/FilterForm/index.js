import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../common/Button';
import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import house_select_icon from '../../../../src/assets/images/house_select_icon.png'

// import { bindActionCreators } from 'redux';
import '../FilterForm/style.modules.scss';
class FilterForm extends Component {

  render() {

    return (
      <div className="filter_form">
        <div className="filter_header">Загальні параметри пошуку</div>
        <div className="filter_inputs">
          <Select width='auto' placeholder='Організаційно правова форма' icon={house_select_icon} type='common' id='filter_select_1' />
          <Select width='auto' placeholder='Основний вид госпоарської діяльності' icon={house_select_icon} type='common' id='filter_select_2' />
          <Select width='auto' placeholder='Додаткові види' icon={house_select_icon} type='common' id='filter_select_3' />
          <Select width='auto' placeholder='Місце знаходження/реєстрації' icon={house_select_icon} type='common' id='filter_select_4' />
          <Select width='auto' placeholder='Форма оподаткування' icon={house_select_icon} type='common' id='filter_select_5' />
          <Select width='auto' placeholder='Ліцензія' icon={house_select_icon} type='common' id='filter_select_6' />
        </div>

        <div className="filter_checkboxes">
          <span><label>Є платником ПДФ</label><input type="checkbox" name="option1" value="a1" /></span>
          <span><label>Ведення господарської діяльності</label><input type="checkbox" className="check_circle" name="option2" value="a2" /></span>
          <span><label>Наявність заборгованостей/обтяжень</label><input type="checkbox" className="check_circle" name="option3" value="a3" /></span>
        </div>

        <div className="filter_bottom">
          <div className="filter_bottom_inputs">
            <label>Ціна</label>
            <Input className='price_from' placeholder='від (₴)' />
            <Input className='price_to' placeholder='до (₴)' />
          </div>

          <div className="filter_bottom_buttons">
            <Button className='extendet_search '
              text='Скинути фільтри' />
            <Button className='find'
              text='Показати' />
          </div>
        </div>
      </div>

    )
  }
}

export default connect(
  (state) => ({}),
  dispatch => ({})
)(FilterForm);