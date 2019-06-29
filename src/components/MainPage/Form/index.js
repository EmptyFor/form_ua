import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../Form/style.modules.scss';
import { Button } from '../../common/Button';
import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import house_select_icon from '../../../../src/assets/images/house_select_icon.png'
// import globalStyle from '../../../assets/styles/global.styles.scss'
export class Form extends Component {


    handleEnter = e => {
        // e.target.style.cursor = 'pointer';
        e.target.style.backgroundColor = 'rgb(253, 83, 83)';
    }
    handleBlur = e => {
        e.target.style.backgroundColor = 'rgba(177, 167, 200, 0.16)';
    }
    render() {
        return (

            <div className='wrapp' >
                {/* <h1>Розпочни свій бізнес вже сьогодні</h1>
                <span >Знайди ідеальне рішення за декілька секунд...</span> */}

                <div className='search_form grid'>

                    <Select width='auto' placeholder='Організаційно правова форма' icon={house_select_icon} type='common' id='select_1' />
                    <Select width='auto' placeholder='Організаційно правова форма' icon={house_select_icon} type='common' id='select_2' />
                    <Select width='auto' placeholder='Організаційно правова форма' icon={house_select_icon} type='common' id='select_3' />
                    <Select width='auto' placeholder='Організаційно правова форма' icon={house_select_icon} type='common' id='select_4' />

                    <p className="price">Ціна</p>
                    <Input className='price_from' placeholder='від (₴)' />
                    <Input className='price_to' placeholder='до (₴)' />

                    <div className="is_PDV_payer">
                        <p>Є платником ПДВ</p>
                        <Input type="radio" />
                    </div>

                    <Button className='extendet_search'
                        onMouseEnter={this.handleEnter}
                        onMouseLeave={this.handleBlur}
                        back='rgba(177, 167, 200, 0.16)'
                        color='#707488'
                        text='Розширений пошук' />
                    <Button className='find'
                        text='Знайти' />

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
)(Form);