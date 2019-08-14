import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/details';
import Header from '../themes/common/Header';
import { getPostId } from '../../store/helpers/localStorage'
import ispdacheck from '../../assets/images/ispdacheck.svg'
import { baseURL } from '../../core/constants/baseURL'
import profile_phone from '../../assets/images/red_phone.svg'
import './style.modules.scss';

export class AdvertDetails extends Component {

    constructor() {
        super();
        this.advertid = getPostId()
    }

    componentDidMount = () => {
        this.props.actions.getAdvertDetails(this.advertid);
    }

    render() {
        const { data } = this.props.info

        return (
            <Fragment >
                <Header className='menu_fix' fix="false" />
                {data ? <div className="details_wrapper">
                    <div className="details_list" >
                        {/* Head */}
                        <div className='details_list_header'><span>Деталі оголошення </span></div>
                        <div className="details_main_info">
                            <div className="details_main_info_head">
                                <div className="details_main_info_head_contain">
                                    <span className="details_main_info_head_contain_title">{data.post.name}</span>
                                    <span className="details_main_info_head_contain_price">{data.post.price} грн</span>
                                </div>
                                <div className="details_main_info_head_image"><img alt="" style={{ height: '100%', width: '100%', objectFit: 'contain' }} src={baseURL + data.post.image}></img></div>
                            </div>

                            {/* Main Body */}
                            <div className="details_main_info_body">

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Організаційно правова форма</label>
                                    <span className="details_values_list">{data.post.legal_form}</span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Основний вид господарської діяльності</label>
                                    <span className="details_values_list">{data.post.kved_name}</span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Додаткові види</label>
                                    <ul>
                                        {
                                            data.post.extra_kved_name.map((elem, index) => {
                                                return (
                                                    <li key={index+'a'} style={{ marginBlockEnd: '2%' }}>{`${index + 1}. ${elem}`}</li>
                                                )
                                            })
                                        }
                                        {
                                            data.post.extra_kved_name.length < 1 && <span className="details_values_list list">
                                                <span style={{ color: 'grey' }}>Не надано жодної інформації</span>
                                            </span>
                                        }
                                    </ul>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Місце знаходження реєстрації</label>
                                    <span className="details_values_list"><span className="place_advert_detail" >{`${data.post.region},  ${data.post.city} `}</span></span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Дата державної реєстрації</label>
                                    <span className="details_values_list">{data.post.registered_at || <span style={{ color: 'grey' }}>Не надано жодної інформації</span>}</span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Форма оподаткування</label>
                                    <span className="details_values_list">{data.post.tax_form}</span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Оплата податків</label>
                                    <span className="details_values_list">
                                        {data.post.pda ? <span>Є платником ПДВ <img src={ispdacheck} /></span>
                                            : <span>Не є платником ПДВ</span>}
                                    </span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Ліцензія</label>
                                    <ul>
                                        {
                                            data.post.licenses.map((elem, index) => {
                                                return (
                                                    <li key={index} style={{ marginBlockEnd: '2%' }}>{`${index + 1}. ${elem}`}</li>
                                                )
                                            })
                                        }
                                        {
                                            data.post.licenses.length < 1 && <span className="details_values_list list">
                                                <span style={{ color: 'grey' }}>Не надано жодної інформації</span>
                                            </span>
                                        }
                                    </ul>

                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Господарська діяльність</label>
                                    <span className="details_values_list">{data.post.have_activity === true ? 'Вела/веде господарську діяльнасть' :
                                        data.post.have_activity === false ? 'НЕ вела/веде господарську діяльність' : <span style={{ color: 'grey' }}>Не надано жодної інформації</span>}</span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Обтяження та заборгованість</label>
                                    <span className="details_values_list">{data.post.no_debt === true ? 'Присутні' :
                                        data.post.no_debt === false ? 'Відсутні' : <span style={{ color: 'grey' }}>Не надано жодної інформації</span>}</span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Статутний капітал</label>
                                    <span className="details_values_list" style={{ fontWeight: '800' }}> {data.post.capital || <span style={{ color: 'grey' }}>Не надано жодної інформації</span>} </span>
                                </div>

                                {/* footer */}

                            </div>
                            <div className="details_main_info_footer">
                                <label className="details_labels_list ">Власник / Юридична особа</label>
                                <span className="details_values_list" style={{ paddingLeft: '2%' }}> {data.post.owner_data}</span>
                            </div>
                        </div>
                    </div>
                    <div className="details_info" >
                        <div className='details_list_header info_head'><span>Особисті дані </span></div>
                        <div className="details_info_main_contain ">
                            <span style={{ fontWeight: 'bold', fontSize: '25px' }}>{data.author.first_name}</span>
                                {
                                    data.post.tel.map((item, index) => {
                                        return <span key={index} style={{ marginBlockEnd: '5%' }}>
                                            <img style={{ width: '1.3em', paddingRight: '5%' }} src={profile_phone} key={index} />
                                            {item}
                                            <br/>
                                            </span>
                                    })
                                }
                        </div>
                    </div>
                </div> : <p className="results_preloader">Зачекайте...</p>}
            </Fragment>
        );
    }
}

export default connect(
    (state) => ({
        info: state.details.info
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(AdvertDetails);