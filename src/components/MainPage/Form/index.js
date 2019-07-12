import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styles from '../Form/style.modules.scss';
import { Button } from '../../common/Button';
// import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import house_select_icon from '../../../../src/assets/images/house_select_icon.png'
import links from '../../../config/links';
// import globalStyle from '../../../assets/styles/global.styles.scss'
import { Select } from 'antd';

const { Option } = Select;

export class Form extends Component {

    render() {
        return (

            <div className='wrapp' >
                <h1>Розпочни свій бізнес вже сьогодні</h1>
                <span >Знайди ідеальне рішення за декілька секунд...</span>

                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
              
                <div className='search_form grid'>

                    {/*                   
                    <Select width='auto' placeholder='Організаційно правова форма' icon={house_select_icon} type='multiply' id='select_1' />
                    <Select width='auto' placeholder='Організаційно правова форма' icon={house_select_icon} type='common' id='select_2' />
                    <Select width='auto' placeholder='Організаційно правова форма' icon={house_select_icon} type='common' id='select_3' />
                    <Select width='auto' placeholder='Організаційно правова форма' icon={house_select_icon} type='common' id='select_4' /> */}

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