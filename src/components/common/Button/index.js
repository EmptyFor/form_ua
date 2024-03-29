import React from 'react';
import { connect } from 'react-redux';
import '../Button/style.modules.scss';

export const Button = () => ({

    render() {

        return (
            <button className={`common_btn ${this.props.className}`}
                type="button"
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






export default connect()(Button);