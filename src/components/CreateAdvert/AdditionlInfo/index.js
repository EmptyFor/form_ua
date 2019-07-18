import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/';
import { images } from '../../../assets/images/images';
import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import { Radiobutton } from '../../common/Radiobutton';
import styles from './style.modules.scss';

export class AdditionlInfo extends Component {

    static propTypes = {}

    render() {

        return (
            <div className="additionl_info" >
                <div className="title" >
                    <span>2</span>
                    <h1>Положення згідно законодавства</h1>
                </div>

                <div className="first_position grid_right_column">
                    <p className="subtitle">Організаційно правова форма:<span>*</span></p>
                    <Select type="common" width='auto' placeholder='Оберіть зі списку' icon={images.house} id='ca_form_select_1' />
                </div>

                <div className="second_position grid_right_column">
                    <p className="subtitle">Основний вид господарської діяльності:<span>*</span></p>
                    <Select type="common" width='auto' placeholder='Оберіть зі списку' icon={images.portfolio} id='ca_form_select_2' />
                </div>

                <div className="third_position grid_right_column">
                    <p className="subtitle">Додаткові види (до 10 видів):</p>
                    <Select type="multiply" width='auto' placeholder='Оберіть зі списку' icon={images.plus} id='ca_form_select_3' />
                </div>

                <div className="forth_position grid_right_column">
                    <p className="subtitle">Форма оподаткування:<span>*</span></p>
                    <Select type="common" width='auto' placeholder='Оберіть зі списку' icon={images.lable} id='ca_form_select_4' />
                </div>

                <div className="fifth_position grid_right_column">
                    <p className="subtitle">Ліцензія (до 5 видів):</p>
                    <Select type="checkbox" width='auto' placeholder='Оберіть зі списку' icon={images.cc} id='ca_form_select_5' />
                </div>

                <div className="sixth_position grid_left_column">
                    <p className="subtitle">Місце знаходження/реєстрації:<span>*</span></p>
                    <Select type="common" width='auto' placeholder='Вибріть місто/населений пункт' icon={images.mapPoint} id='ca_form_select_6' />
                </div>

                <div className="seventh_position grid_left_column">
                    <p className="subtitle">Дата державної реєстрації:<span>*</span></p>
                    <Input placeholder="Введіть у форматі ДД/ММ/РРРР" width="100%" className="input" />
                </div>

                <div className="eith_position grid_left_column">
                    <p className="subtitle">Є латником ПДВ?<span>*</span></p>
                    <Radiobutton options={['Так', 'Ні']} id='PDV_radio' />
                </div>

                <div className="nineth_position grid_left_column">
                    <p className="subtitle">Вела господарську діяльність?</p>
                    <Radiobutton options={['Так', 'Ні']} id='Economic_activity_radio' />
                </div>

                <div className="tenth_position grid_left_column">
                    <p className="subtitle">Без обтяжень та заборгованостей?</p>
                    <Radiobutton options={['Так', 'Ні']} id='has_owed_radio' />
                </div>

                <div className="eleventh_position grid_left_column">
                    <p className="subtitle">Організаційно правова форма:<span>*</span></p>
                    <Select />
                </div>

            </div>
        );
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(AdditionlInfo);