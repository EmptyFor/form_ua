import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.modules.scss';
export class CheckBox extends Component {

    value = Boolean

    selectCheckBox = (e) => {
        this.value = e.target.checked
    }

    clearValue = () => {
        this.value = false
    }

    componentWillMount() {
        this.value = this.props.value
    }

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.clearValue() : void 0
    }

    render() {
        return (
            <div className="common_checkbox" id={this.props.id} name={this.props.name}>
                <label
                    className="container"
                    id={this.props.id}
                    key={this.props.id}
                    name={this.props.name}
                    onChange={this.props.getData}
                >
                    <input type="checkbox" name={this.props.id} checked={this.value} onClick={this.selectCheckBox}></input>
                    <span className="text">{this.props.text}</span>
                    <span className="checkmark"></span>
                </label>
            </div>
        );
    }

}


export default connect(
    (state) => ({
        clear: state.search.clear
    }),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(CheckBox);