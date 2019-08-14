import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.modules.scss';
import * as searchActions from '../../../store/actions/details'
import * as profileActions from '../../../store/actions/profile'
import links from '../../../config/links';
import { Link } from 'react-router-dom';
import { removePostId, setPostId, getPostId } from '../../../store/helpers/localStorage'
import { baseURL } from '../../../core/constants/baseURL'
import delete_img from '../../../assets/images/delete2.png'
import deactivate_img from '../../../assets/images/deactivate2x.png'
import edit_img from '../../../assets/images/edit2x.png'
import ispdacheck from '../../../assets/images/ispdacheck.svg'
class Advert extends Component {

    modal = null;

    state = {
        text: '',
        profile: false,
    }

    componentWillMount = () => {
        if (this.props.profile) {
            this.setState({
                profile: true
            })
        } else {
            this.setState({
                profile: false
            })
        }
    }
    componentDidMount = () => {
        if (this.props.ispda) {
            this.setState({ text: 'Є платником ПДВ' })
        } else {
            this.setState({ text: 'НЕ є платником ПДВ' })
        }
    }

    handleClick = () => {
        const { advertid } = this.props;
        this.props.searchActions.getAdvertDetails(advertid);
        const localPostId = getPostId();

        if (advertid !== localPostId) {
            removePostId();
            setPostId(advertid);
        }
    }

    deleteAdvert = () => {
        const { advertid } = this.props;
        const type = 'delete'
        this.props.profileActions.getAdvertId(advertid, type)
    }

    deactivateAdvert = () => {
        const { advertid } = this.props;
        const type = 'deactivate';
        this.props.profileActions.getAdvertId(advertid, type)
    }

    render() {
        return (<Fragment>
          
            <Link to={links.details}>
                <div className="common_advert" profile={this.props.profile} onClick={this.handleClick} key={this.props.key}>
                    <div className="left_side_advert">
                        <h1>{this.props.orgName}</h1>
                        <div className="minor_info_advert" advertid={this.props.advertid}>
                            <span className="ispda_advert" ispda={this.props.ispda}>{this.state.text}</span>
                            {this.props.ispda ? <span><img src={ispdacheck} /></span> : null}
                            <span className="date_advert"> 	&bull;	 {this.props.createDate} &bull;	</span>

                            <span className="place_advert">{this.props.cityPlace}</span>
                        </div>
                        <p>{this.props.about}</p>
                    </div>
                    <div className="right_side_advert">
                        <span className="fullprice_advert">{this.props.fullPrice}</span>
                        <span className="image_document_advert"><picture><img alt="" style={{ height: '100%', width: '100%',objectFit: 'contain' }} src={`${baseURL}${this.props.image}`} /></picture></span>
                    </div>


                </div>
            </Link>
            {
                this.props.profile ? <div className="advert_action_bar">
                    <div className="advert_action_bar_time">{`${this.props.dateResult}`}</div>
                    <div className="advert_action_bar_actions" >
                        <span className="profile_advert_action_delete" onClick={this.deleteAdvert}><img src={delete_img} />Видалити</span>
                        <span className="profile_advert_action_disactivate" onClick={this.deactivateAdvert}><img src={deactivate_img} />Деактивувати</span>
                        <span className="profile_advert_action_edit" onClick={this.props.onClick}><img src={edit_img} />Редагувати</span>
                    </div>
                </div> : null
            }
        </Fragment>
        )
    }
}

export default connect(
    () => ({}),
    dispatch => ({
        searchActions: bindActionCreators(searchActions, dispatch),
        profileActions: bindActionCreators(profileActions, dispatch)
    })
)(Advert);