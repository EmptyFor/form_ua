import React, { Component, Fragment, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/advert';
import { bindActionCreators } from 'redux';
import InputMask from 'react-input-mask';
import styles from '../Input/style.modules.scss';
// import globalStyle from '../../../assets/styles/global.styles.scss'



export class Input extends Component {

    inputRef = React.createRef()

    state = {
        value: '',
    }

    //Money Input

    moneyInput = (e) => {
        let isValid = /\D/g
        e.target.value = e.target.value.replace(isValid, '')
        this.moneyInputValue = e.target.value

        let out = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        e.target.value = out
    }

    //Input with Mask

    onChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    beforeMaskedValueChange = (newState, oldState, userInput) => {
        var { value } = newState;
        var selection = newState.selection;
        var cursorPosition = selection ? selection.start : null;

        if (value.endsWith('-') && userInput !== '-' && !this.state.value.endsWith('-')) {
            if (cursorPosition === value.length) {
                cursorPosition--;
                selection = { start: cursorPosition, end: cursorPosition };
            }
            value = value.slice(0, -1);
        }

        return {
            value,
            selection
        };
    }

    clearInput = () => {
        this.inputRef.current.value = ""
        this.setState({value: ""})
        try {
            this.inputRef.current.setInputValue('')
        }
        catch {
            void 0
        }
    }

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.clearInput() : void 0
    }

    render() {
        const { type, className, placeholder, width, name, id, required } = this.props
        if (this.props.type === 'phone') {
            return <InputMask className={`common-input ${className}`}
                placeholder={placeholder}
                style={{ width: width }}
                name={name}
                ref={this.inputRef}
                id={id}
                required={required}
                mask="+ 38 (099) 999 - 99 - 99"
                maskChar=""
                value={this.state.value}
                onChange={this.onChange}
                onClick={this.onClick}
                onBlur={this.props.getData}
                beforeMaskedValueChange={this.beforeMaskedValueChange} />
        }
        else if (this.props.type === 'money') {
            return <input type={type}
                className={`common-input ${className}`}
                placeholder={placeholder}
                style={{ width: width }}
                name={name}
                ref={this.inputRef}
                onChange={this.moneyInput}
                onBlur={this.props.getData}
                id={id}
                required={required}
            ></input>
        }
        else if (this.props.type === 'EDRPOY') {
            return <InputMask className={`common-input ${className}`}
                placeholder={placeholder}
                style={{ width: width }}
                name={name}
                ref={this.inputRef}
                id={id}
                required={required}
                mask="99 - 99 - 99 - 99"
                maskChar="_"
                value={this.state.value}
                onChange={this.onChange}
                onBlur={this.props.getData}
                onClick={this.onClick}
                beforeMaskedValueChange={this.beforeMaskedValueChange} />
        }
        else if (this.props.type === 'date') {
            return <InputMask className={`common-input ${className}`}
                placeholder={placeholder}
                style={{ width: width }}
                name={name}
                ref={this.inputRef}
                id={id}
                required={required}
                mask="99/99/9999"
                maskChar=""
                value={this.state.value}
                onChange={this.onChange}
                onBlur={this.props.getData}
                onClick={this.onClick}
            />
        }
        else {
            return <input type={type}
                className={`common-input ${className}`}
                placeholder={placeholder}
                style={{ width: width }}
                name={name}
                ref={this.inputRef}
                onBlur={this.props.getData}
                id={id}
                required={required}
            ></input>
        }
    }
}






export default connect(
    (state) => ({
        // clear: state.advert.clear
    }),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(Input);