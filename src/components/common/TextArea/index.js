import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.modules.scss';

export class TeatArea extends Component {

    textareaRef = React.createRef()

    state = {
        borderColor: ''
    }

    validationBorder = (e) => {
        let value = e.target.value
        this.props.required ? value.length > 0 ? this.setState({ borderColor: '#1ccee9' }) : this.setState({ borderColor: 'tomato' }) : value.length > 0 ? this.setState({ borderColor: '#1ccee9' }) : this.setState({ borderColor: '' })
    }

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.textareaRef.current.value = "" : void 0
    }

    render() {
        return (
            <textarea
                className={`common_text_area ${this.props.className}`}
                placeholder={this.props.placeholder}
                ref={this.textareaRef}
                name={this.props.name}
                style={{borderColor: this.state.borderColor}}
                onChange={this.validationBorder}
                onBlur={this.props.getData}>
            </textarea>
        );
    }
}



export default connect()(TeatArea);