import React, { Component, Fragment, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/authorise';
import Header from '../themes/common/Header';
import './style.modules.scss';
import document from '../../assets/images/spa.jpg'

const data = [
    { organistionForm: 'Акціонерне товариство' },
    { typeOfActivity: 'Спеціалізовані будівельні роботи' },
    {
        additionalTypes: ['Знесення та підготовчі роботи  на будівельному майданчику',
            'Знесення', 'Підготовчі роботи на будівельному майданчику',
            'Розвідувальне буріння',
            'Електромонтажні, водопровідні та інші будівельно-монтажні роботи',
            'Електромонтажні роботи', 'Монтаж водопровідних мереж, систем',
            'Роботи із завершення будівництва']
    },
    { placement: 'Львів' },
    { registrationDate: 'Від 22 травня 2018 року' },
    { taxationForm: 'Загальна система' },
    { taxationForm: 'Платник ПДВ' },
    { license: 'Посередництво в працевлаштуванні на роботу за кордоном. Ліцензія на працевлаштування за кордоном' },
    { economicActivity: 'Не вела господарської діяльності' },
    { arrears: 'Без обтяжень та заборгованостей' },
    { statutCapital: '10 000 грн' },
    // { id: '2b13SeweRf21ffhp02q' }
]
const labels = ['Організаційно правова форма',
    'Основний вид господарської діяльності',
    'Додаткові види',
    'Місце знаходження реєстрації',
    'Дата державної реєстрації',
    'Форма оподаткування',
    'Оплата податків',
    'Ліцензія',
    'Господарська діяльність',
    'Обтяження та заборгованість',
    'Статутний капітал']


export class AdvertDetails extends Component {

    state = {}

    renderDetailsBodyList = () => {
        return data.map((item, index) => {
            if (index === 2) {
                return (<div className="details_body_item_list" key={index}>
                    <label className="details_labels_list">{`${labels[index]} :`}</label>
                    <span className="details_values_list list">{Object.values(item)[0].map((elem, index) => {
                        return (<ul key={index + 'a'}>
                            <li style={{ marginBlockEnd: '2%' }}>{`${index + 1}. ${elem}`}</li>
                        </ul>)
                    })}</span>
                </div>)
            }
            if (index === 3) {
                return (<div className="details_body_item_list" key={index}>
                    <label className="details_labels_list">{`${labels[index]} :`}</label>
                    <span className="details_values_list"><span className="place_advert" >{Object.values(item)}</span></span>
                </div>)
            }
            if(index === 10) {
                return (<div className="details_body_item_list" key={index}>
                    <label className="details_labels_list">{`${labels[index]} :`}</label>
                    <span className="details_values_list" style={{fontWeight:'800'}}>{Object.values(item)}</span>
                </div>)
            }
            return (<div className="details_body_item_list" key={index}>
                <label className="details_labels_list">{`${labels[index]} :`}</label>
                <span className="details_values_list">{Object.values(item)}</span>

            </div>)
        })
    }

    render() {

        return (
            <Fragment>
                <Header className='menu_fix' fix={true} />
                <div className="details_wrapper">
                    <div className="details_list" >
                        <div className='details_list_header'><span>Деталі оголошення </span></div>
                        <div className="details_main_info">
                            <div className="details_main_info_head">
                                <div className="details_main_info_head_contain">
                                    <span className="details_main_info_head_contain_title">Конституційна Правова агенція твого міста</span>
                                    <span className="details_main_info_head_contain_price">11 500 грн</span>
                                </div>
                                <div className="details_main_info_head_image"><img style={{ height: '100%', width: '100%' }} src={document}></img></div>
                            </div>
                            <div className="details_main_info_body">
                                {this.renderDetailsBodyList()}
                            </div>
                            <div className="details_main_info_footer">
                                <label className="details_labels_list ">Власник / Юридична особа</label>
                                <span className="details_values_list"> Павлів Василь Ігорович</span>
                            </div>
                        </div>
                    </div>
                    <div className="details_info" >
                        <div className='details_list_header info_head'><span>Особисті дані </span></div>
                        <div className="details_info_main_contain ">
                            <span style={{ fontWeight: 'bold', fontSize: '25px' }}>Name Profile</span>
                            <span style={{ marginBlockEnd: '5%' }}>number</span>
                            {/* <span style={{marginBlockEnd:'5%'}}>email</span> */}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default connect(
    ({ }) => ({
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(AdvertDetails);