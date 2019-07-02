import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/';
import GeneralInfo from './GeneralInfo';
import StatutInfo from './StatutInfo';
import OwnerInfo from './OwnerInfo';
import styles from '../CreateAdvert/style.modules.scss'

export class CreateAdvert extends Component {

    static propTypes = {}

    render() {

        return (
            <Fragment>
                <div className="bg">
                    <GeneralInfo />
                    <StatutInfo />
                    <OwnerInfo />
                </div>
            </Fragment>
        );
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(CreateAdvert);