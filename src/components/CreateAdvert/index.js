import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/';
import Header from '../themes/common/Header'
import FormHeader from './FormHeader';
import GeneralInfo from './GeneralInfo';
import AdditionlInfo from './AdditionlInfo';
import OwnerInfo from './OwnerInfo';
import FormFooter from './FormFooter';
import '../CreateAdvert/style.modules.scss';
import Modal from '../common/Modal'
import { getToken } from '../../store/helpers/localStorage'
import { Redirect } from 'react-router-dom';
import links from '../../config/links';
export class CreateAdvert extends Component {

    constructor() {
        super();
        this.token = getToken()
    }


    render() {
        let post;

        if (!this.token) {
            return <Redirect to={links.login} />
        }

        if (this.props.response.data) {
            post = this.props.response.data.data.post;
        }

        return (
            <Fragment>
                {this.props.status ? <Modal status={this.props.status} advertid={post.id} /> : null}
                <Header className="header" fix="true" />
                <div className="ca_bg">
                    <div className="form_bg">
                        <FormHeader />
                        <div className="form_content_bg">
                            <GeneralInfo />
                            <AdditionlInfo />
                            <OwnerInfo />
                        </div>
                        <FormFooter />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default connect(
    (state) => ({
        response: state.advert.response,
        status: state.advert.status,
    }),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(CreateAdvert);