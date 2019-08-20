import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MultiplySearchSelect } from './MultiplySearchSelect';
import { CheckBoxSelect } from './CheckBoxSelect';
import { MultiplySelect } from './MultiplySelect';
import { CommonSelect } from './CommonSelect';
import { SearchSelect } from './SearchSelect';
import './style.modules.scss';
export class Select extends Component {

    render() {

        const { width, placeholder, icon, id, type } = this.props

        if (type === 'multiply') {
            return <MultiplySelect
                width={width}
                placeholder={placeholder}
                required={this.props.required}
                itemList={this.props.itemList}
                searchType={this.props.searchType}
                value={this.props.value}
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
                itemList={this.props.itemList}
                value={this.props.value}
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
                itemList={this.props.itemList}
                value={this.props.value}
                icon={icon}
                id={id}
                searchType={this.props.searchType}
                searchHolder={this.props.searchHolder}
                getData={this.props.getData}
                name={this.props.name}
                clear={this.props.clear}
            />
        }
        else if (type === 'multiply search') {
            return <MultiplySearchSelect
                width={width}
                placeholder={placeholder}
                required={this.props.required}
                itemList={this.props.itemList}
                value={this.props.value}
                searchHolder={this.props.searchHolder}
                icon={icon}
                id={id}
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
                itemList={this.props.itemList}
                value={this.props.value}
                icon={icon}
                id={id}
                getData={this.props.getData}
                name={this.props.name}
                clear={this.props.clear}
            />
        }
    }
}

export default connect()(Select);