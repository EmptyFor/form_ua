import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../Button/style.modules.scss';
// import globalStyle from '../../../assets/styles/global.styles.scss'

export const Button = props => ({
    render() {
        return (
            <div className='common_btn'
                onSubmit={this.props.onSubmit}
                onMouseEnter={this.props.onMouseEnter}
                onClick={this.props.onClick}
                onFocus={this.props.onFocus}
                onMouseLeave={this.props.onMouseLeave}
                style={{ background: `${this.props.back}`, width: `${this.props.width}`, color: `${this.props.color}`, cursor: 'pointer' }}>
                {this.props.text}
            </div>
        );
    }
})






export default connect(
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(Button);