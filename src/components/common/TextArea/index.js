import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles.modules.scss';
// import globalStyle from '../../../assets/styles/global.styles.scss'
export class TeatArea extends Component {


    render() {
        return (
            <textarea className = {`common_text_area ${this.props.className}`} placeholder = {this.props.placeholder}>

            </textarea>
        );
    }
}






export default connect(
    (state) => ({

    }),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(TeatArea);