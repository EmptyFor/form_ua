import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../Button/style.modules.scss';
// import globalStyle from '../../../assets/styles/global.styles.scss'

export const Button = props => ({

//    const handleDisabled = e => {
        
//     }
    render() {
        
           
        
        return (
            <button className={`common_btn ${this.props.className}`}
                type="button"
                onPressKey={this.props.onPressKey}
                disabled={this.props.disabled}
                onSubmit={this.props.onSubmit}
                onMouseEnter={this.props.onMouseEnter}
                onClick={this.props.onClick}
                onFocus={this.props.onFocus}
                onMouseLeave={this.props.onMouseLeave}
                style={{ background: `${this.props.back}`, width: `${this.props.width}`, color: `${this.props.color}`, cursor: 'pointer' }}>
                {this.props.text}
            </button>
        );
    }
})






export default connect(
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(Button);