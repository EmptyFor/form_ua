import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import './style.modules.scss';
// import globalStyle from '../../../assets/styles/global.styles.scss'
export class Radiobutton extends Component {

    value = ''

    selectRadio = () => {
        let radio = document.getElementById(this.props.id).getElementsByTagName('input')
        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked === true) {
                this.value = radio[i].value
            }
        }
    }

    radiobuttons = this.props.options.map((item, index) => {
        return (
            <label
                className="container"
                id={`${this.props.id}_${index}`}
                key={`${this.props.id}_${index}`}
                name={this.props.name}
                value={this.value}
                onClick={this.props.getData}
            >
                <input type="radio" name={this.props.id} value={item} onClick={this.selectRadio}></input>
                <span className="text">{item}</span>
                <span className="checkmark"></span>
            </label>
        )
    })

    clearValue = () => {
        let checkMar = document.getElementById(this.props.id).getElementsByTagName('input')

        checkMar[0].checked = false
        checkMar[1].checked = false
        this.value = ""
    }

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.clearValue() : void 0
    }

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