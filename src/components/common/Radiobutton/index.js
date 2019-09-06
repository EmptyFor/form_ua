import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.modules.scss';
export class Radiobutton extends Component {

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

    setEditValue = (nextProps) => {
        let checkMar = document.getElementById(this.props.id).getElementsByTagName('input')
        nextProps.value ? checkMar[0].checked = true : checkMar[1].checked = true

    }

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.clearValue() : void 0
        nextProps.value !== null && nextProps.value !== undefined && this.setEditValue(nextProps)
    }

    render() {
        return (
            <div className="common_radiobutton" id={this.props.id}>
                {this.radiobuttons}
            </div>
        );
    }

}


export default connect()(Radiobutton);