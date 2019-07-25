import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styles from '../Form/style.modules.scss';
import { Button } from '../../common/Button';
import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import links from '../../../config/links';
import { images } from '../../../assets/images/images'
// import globalStyle from '../../../assets/styles/global.styles.scss'
// import { Select } from 'antd';
// const { Option } = Select;

export class Form extends Component {



    render() {
        return (

            <div className='wrapp' >
                <h1>Розпочни свій бізнес вже сьогодні</h1>
                <span className="form_subtitle" >Знайди ідеальне рішення за декілька секунд...</span>

                <div className='search_form grid'>

                    <Select type="multiply" width='auto' placeholder='Організаційно правова форма' icon={images.house} id='mp_form_select_1' />
                    <Select type="common" width='auto' placeholder='Організаційно правова форма' icon={images.portfolio} id='mp_form_select_2' />
                    <Select type="checkbox" width='auto' placeholder='Організаційно правова форма' icon={images.mapPoint} id='mp_form_select_3' />
                    <Select type="checkbox" width='auto' placeholder='Організаційно правова форма' icon={images.lable} id='mp_form_select_4' />

                    <p className="price">Ціна</p>
                    <Input className='price_from' placeholder='від (₴)' />
                    <Input className='price_to' placeholder='до (₴)' />

                    <div className="is_PDV_payer">
                        <p>Є платником ПДВ</p>
                        <Input type="checkbox" />
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
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(Form);