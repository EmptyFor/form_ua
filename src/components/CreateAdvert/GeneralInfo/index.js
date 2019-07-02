import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/';
import styles from './style.modules.scss'

export class GeneralInfo extends Component {

    static propTypes = {}

    render() {

        return (
            <div className="general_info" >
                
                <h1>
                    Загальна інформація
                    
                </h1>

            </div>
        );
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(GeneralInfo);