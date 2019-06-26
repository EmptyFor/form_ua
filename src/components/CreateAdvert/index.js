import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/';
import styles from '../CreateAdvert/style.modules.scss'

export class CreateAdvert extends Component {

    static propTypes = {}

    render() {

        return (
            <Fragment>
                <div>
                    Створити оголошення
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