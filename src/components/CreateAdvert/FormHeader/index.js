import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/';
import styles from './style.modules.scss';

export class FormHeader extends Component {

    static propTypes = {}

    render() {

        return (
            <div className="form_header" >
                <h1>Створити оголошення про продаж</h1>
            </div>
        );
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(FormHeader);