import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './style.modules.scss';
// import globalStyle from '../../../assets/styles/global.styles.scss'
export class Radiobutton extends Component {


    selectRadio = () => {
        let radio = document.getElementById(this.props.id).getElementsByTagName('input')
        console.log(radio)
        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked === true) {
                console.log(radio[i].value)
            }
        }
    }

    radiobuttons = this.props.options.map((item, index) => {
        return (
            <label className="container" id={`${this.props.id}_${index}`} key={`${this.props.id}_${index}`} name={this.props.name}>
                <span>{item}</span>
                <input type="radio" name={this.props.id} value={item} onClick={this.selectRadio}></input>
                <span className="checkmark"></span>
            </label>
        )
    })

    render() {
        return (
            <div className="common_radiobutton" id={this.props.id}>
                {this.radiobuttons}
            </div>
        );
    }

}


export default connect(
    (state) => ({

    }),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(Radiobutton);