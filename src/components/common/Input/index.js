import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import '../Input/style.modules.scss';



export class Input extends Component {

    inputRef = React.createRef()

    state = {
        value: '',
        borderColor: 'none'
    }

    //Simple input check

    checkInputValue = (e) => {
        let value = e.target.value
        this.props.required ? value.length > 0 ? this.setState({ borderColor: '#1ccee9' }) : this.setState({ borderColor: 'tomato' }) : value.length > 0 ? this.setState({ borderColor: '#1ccee9' }) : this.setState({ borderColor: '' })
    }

    //Money Input

    moneyInput = (e) => {
        let isValid = /\D/g
        e.target.value = e.target.value.replace(isValid, '')
        this.moneyInputValue = e.target.value

        let out = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        e.target.value = out
        this.checkInputValue(e)
    }

    //Input with Mask

    onChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({
            value: value
        });
        this.props.required ? value.length > 0 ? this.setState({ borderColor: '#1ccee9' }) : this.setState({ borderColor: 'tomato' }) : value.length > 0 ? this.setState({ borderColor: '#1ccee9' }) : this.setState({ borderColor: '' })
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
        this.setState({ value: "" })
        try {
            this.inputRef.current.setInputValue('')
        }
        catch {
            void 0
        }
    }

    setErrorBorder = () => {
        this.setState({ borderColor: 'red' })
    }

    unsetErrorBorder = () => {
        this.setState({ borderColor: 'unset' })
    }

    componentDidMount() {
        if (this.props.value !== undefined) {
            this.inputRef.current.value = this.props.value
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
                style={{ width: width, borderColor: this.state.borderColor }}
                name={name}
                ref={this.inputRef}
                id={id}
                required={required}
                mask="+ 38 (099) 999 - 99 - 99"
                maskChar=""
                autoComplete="off"
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
                style={{ width: width, borderColor: this.state.borderColor }}
                autoComplete="off"
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
                style={{ width: width, borderColor: this.state.borderColor }}
                name={name}
                ref={this.inputRef}
                id={id}
                required={required}
                mask="99 - 99 - 99 - 99"
                autoComplete="off"
                maskChar=""
                value={this.state.value}
                onChange={this.onChange}
                onBlur={this.props.getData}
                onClick={this.onClick}
                beforeMaskedValueChange={this.beforeMaskedValueChange} />
        }
        else if (this.props.type === 'date') {
            return <InputMask className={`common-input ${className}`}
                placeholder={placeholder}
                style={{ width: width, borderColor: this.state.borderColor }}
                name={name}
                ref={this.inputRef}
                id={id}
                required={required}
                mask="99/99/9999"
                autoComplete="off"
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
                style={{ width: width, borderColor: this.state.borderColor }}
                name={name}
                ref={this.inputRef}
                onChange={this.checkInputValue}
                autoComplete="off"
                onBlur={this.props.getData}
                id={id}
                required={required}
            ></input>
        }
    }
}






export default connect()(Input);