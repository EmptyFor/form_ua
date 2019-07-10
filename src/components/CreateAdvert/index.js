import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/';
import GeneralInfo from './GeneralInfo';
import StatutInfo from './StatutInfo';
import OwnerInfo from './OwnerInfo';
import styles from '../CreateAdvert/style.modules.scss'
import { Modal } from '../common/Modal';

export class CreateAdvert extends Component {

//  <GeneralInfo />
    // <StatutInfo />
    // <OwnerInfo />)

    static propTypes = {}

    render() {

        return (
            <Fragment>
                <div className="bg">
                    <Modal />
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