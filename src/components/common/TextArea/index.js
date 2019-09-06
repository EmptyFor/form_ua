import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.modules.scss';

export class TeatArea extends Component {

    textareaRef = React.createRef()

    state = {
        value: '',
        borderColor: ''
    }

    validationBorder = (e) => {
        let value = e.target.value
        this.props.required ? value.length > 0 ? this.setState({ borderColor: '#1ccee9' }) : this.setState({ borderColor: 'tomato' }) : value.length > 0 ? this.setState({ borderColor: '#1ccee9' }) : this.setState({ borderColor: '' })
        this.setState({
            value: value
        })
    }

    setEditData = (nextProps) => {
        this.setState({
            value: nextProps.value
        })
    }

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.textareaRef.current.value = "" : void 0
        this.setEditData(nextProps)
    }

    render() {

        return (
            <textarea
                className={`common_text_area ${this.props.className}`}
                placeholder={this.props.placeholder}
                ref={this.textareaRef}
                name={this.props.name}
                style={{ borderColor: this.state.borderColor }}
                onChange={this.validationBorder}
                onBlur={this.props.getData}
                value={this.state.value}
            >
            </textarea>
        );
    }
}



export default connect()(TeatArea);