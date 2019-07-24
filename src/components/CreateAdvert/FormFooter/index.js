import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/';
import Button from '../../common/Button';
import styles from './style.modules.scss';

export class FormFooter extends Component {

    static propTypes = {}

    render() {

        return (
            <div className="form_footer" >
                <Button className="clear_btn grey_btn" text="Очистити дані" width="20%" />
                <Button className="publish_btn" text="Опублікувати" width="20%" />
            </div>
        );
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(FormFooter);