import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/details';
import Header from '../themes/common/Header';
import './style.modules.scss';
import document from '../../assets/images/spa.jpg';
import { getPostId } from '../../store/helpers/localStorage'
import ispdacheck from '../../assets/images/ispdacheck.svg'
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
        if (data) {
            console.log(data.post)
        }
        return (
            <Fragment >
                <Header className='menu_fix' fix="false" />
                <div className="details_wrapper">
                    {data ? <div className="details_list" >
                        {/* Head */}
                        <div className='details_list_header'><span>Деталі оголошення </span></div>
                        <div className="details_main_info">
                            <div className="details_main_info_head">
                                <div className="details_main_info_head_contain">
                                    <span className="details_main_info_head_contain_title">{data.post.name}</span>
                                    <span className="details_main_info_head_contain_price">{data.post.price} грн</span>
                                </div>
                                <div className="details_main_info_head_image"><img alt="" style={{ height: '100%', width: '100%' }} src={document}></img></div>
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
                                    {/* {Object.values(item)[0].map((elem, index) => {
                                        return (<ul key={index + 'a'}>
                                            <li style={{ marginBlockEnd: '2%' }}>{`${index + 1}. ${elem}`}</li>
                                        </ul>)
                                    })}*/}

                                    <span className="details_values_list list"><span style={{color:'grey'}}>Не надано жодної інформації</span></span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Місце знаходження реєстрації</label>
                                    <span className="details_values_list"><span className="place_advert_detail" >{`${data.post.region},  ${data.post.city} `}</span></span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Дата державної реєстрації</label>
                                    <span className="details_values_list">{data.post.registered_at}</span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Форма оподаткування</label>
                                    <span className="details_values_list">{data.post.tax_form}</span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Оплата податків</label>
                                    <span className="details_values_list">
                                        {data.post.pda ? <span>Є платником ПДФ <img src={ispdacheck} /></span>
                                            : <span>Не є платником ПДФ</span>}
                                    </span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Ліцензія</label>
                                    <span className="details_values_list">{data.post.tax_form || <span style={{color:'grey'}}>Не надано жодної інформації</span>}</span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Господарська діяльність</label>
                                    <span className="details_values_list">{data.post.have_activity || <span style={{color:'grey'}}>Не надано жодної інформації</span>}</span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Обтяження та заборгованість</label>
                                    <span className="details_values_list">{data.post.no_debt === true ? 'Присутні' :
                                        data.post.no_debt === false ? 'Відсутні' : <span style={{color:'grey'}}>Не надано жодної інформації</span>}</span>
                                </div>

                                <div className="details_body_item_list" >
                                    <label className="details_labels_list">Статутний капітал</label>
                                    <span className="details_values_list" style={{ fontWeight: '800' }}> {data.post.capital || <span style={{color:'grey'}}>Не надано жодної інформації</span>} </span>
                                </div>

                                {/* footer */}

                            </div>
                            <div className="details_main_info_footer">
                                <label className="details_labels_list ">Власник / Юридична особа</label>
                                <span className="details_values_list" style={{ paddingLeft: '2%' }}> {data.post.owner_data}</span>
                            </div>
                        </div>
                    </div> : <p className="results_preloader">Зачекайте...</p>}
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
    (state) => ({
        info: state.details.info
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(AdvertDetails);