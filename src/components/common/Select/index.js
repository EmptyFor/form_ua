import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../../../store/actions/advert';
// import { bindActionCreators } from 'redux';
// import { Redirect } from 'react-router-dom';
// import links from '../../config/links';
import './style.modules.scss';
import { CheckBoxSelect } from './CheckBoxSelect';
import { MultiplySelect } from './MultiplySelect';
import { CommonSelect } from './CommonSelect';
import { SearchSelect } from './SearchSelect';

export class Select extends Component {

    render() {

        const { width, placeholder, icon, id, type } = this.props

        if (type === 'multiply') {
            return <MultiplySelect
                width={width}
                placeholder={placeholder}
                required={this.props.required}
                icon={icon}
                id={id}
                getData={this.props.getData}
                name={this.props.name}
                clear={this.props.clear}
            />
        }

        else if (type === 'checkbox') {
            return <CheckBoxSelect
                width={width}
                placeholder={placeholder}
                required={this.props.required}
                icon={icon}
                id={id}
                getData={this.props.getData}
                name={this.props.name}
                clear={this.props.clear}
            />
        }
        else if (type === 'search') {
            return <SearchSelect
                width={width}
                placeholder={placeholder}
                required={this.props.required}
                icon={icon}
                id={id}
                searchType={this.props.searchType}
                getData={this.props.getData}
                name={this.props.name}
                clear={this.props.clear}
            />
        }
        else {
            return <CommonSelect
                width={width}
                placeholder={placeholder}
                required={this.props.required}
                icon={icon}
                id={id}
                getData={this.props.getData}
                name={this.props.name}
                clear={this.props.clear}
            />
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
)(Select);