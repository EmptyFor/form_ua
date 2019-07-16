import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styles from '../Form/style.modules.scss';
import { Button } from '../../common/Button';
import { Select } from '../../common/Select';
import { CheckBoxSelect } from '../../common/CheckBoxSelect';
import { Input } from '../../common/Input';
import { AntdCheckBoxSelect } from '../../common/AntdCheckBoxSelect'
import house from '../../../assets/images/combined-gray@2x.png'
import links from '../../../config/links';
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

                    {/* <AntdCheckBoxSelect gridColumn='span 5' value="Організаційно правова форма" />
                    <AntdCheckBoxSelect gridColumn='span 8' value="Оновний вид господарської діяльності (КВЕДи)" /> */}

                                      
                    <CheckBoxSelect width='auto' placeholder='Організаційно правова форма' icon={house} type='checkbox' id='select_1' />
                    <CheckBoxSelect width='auto' placeholder='Організаційно правова форма' icon={house} type='checkbox' id='select_2' />
                    <CheckBoxSelect width='auto' placeholder='Організаційно правова форма' icon={house} type='checkbox' id='select_3' />
                    <CheckBoxSelect width='auto' placeholder='Організаційно правова форма' icon={house} type='checkbox' id='select_4' />

                    <p className="price">Ціна</p>
                    <Input className='price_from' placeholder='від (₴)' />
                    <Input className='price_to' placeholder='до (₴)' />

                    <div className="is_PDV_payer">
                        <p>Є платником ПДВ</p>
                        <Input type="checkbox" />
                    </div>


                    <Button className='extendet_search '
                        text='Розширений пошук' />


                    <Link to={links.search} className='links'>
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