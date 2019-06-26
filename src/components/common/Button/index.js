import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../Button/style.modules.scss';
// import globalStyle from '../../../assets/styles/global.styles.scss'
export class Button extends Component{
    

    render() {        
        return (
        <div className="common-btn" style={{background:`${this.props.back}`, width:`${this.props.width}`}}>
            {this.props.text}
        </div>
        );
    }
}



    


export default connect(
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(Button);