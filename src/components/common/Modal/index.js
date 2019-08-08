import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../Modal/style.modules.scss';
import * as actions from '../../../store/actions/advert';
import { getAdvertDetails } from '../../../store/actions/search'
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import links from '../../../config/links';
import { Redirect } from 'react-router-dom';



class Modal extends Component {

    constructor(props) {
        super(props);
        this.status = props.status;
        this.advertid = props.advertid
    }



    handleClose = () => {
        this.status = ''
        this.props.actions.setClearStatus(this.status)
    }



    render() {
        return (
            <div className="modal_wrapper" >
                <div className="modal_window" status={this.props.status} advertid={this.props.advertid}>
                    <div className="modal_header">
                        <span onClick={this.handleClose}>&times;</span>
                    </div>
                    <p className="modal_text">Ваше оголошення було успішно опубліковане.<br />
                        Очікуйте дзвінків від покупців.
                </p>
                    <Link  className='common_btn_link' to={links.details}><Button width="40%" text="Переглянути" /></Link>
                </div>
            </div>
        );
    }
}






export default connect(
    (state) => ({
        info: state.search.info,
        // status: state.advert.status
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Modal);