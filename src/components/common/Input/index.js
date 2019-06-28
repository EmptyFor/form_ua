import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../Input/style.modules.scss';
// import globalStyle from '../../../assets/styles/global.styles.scss'
export class Input extends Component{
    

    render() {        
        return (
        <input type = {this.props.type} className={`common-input ${this.props.className}`} placeholder = {this.props.placeholder} style = {{width: this.props.width}}>
        </input>
        );
    }
}



    


export default connect(
    (state) => ({
        
    }),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(Input);