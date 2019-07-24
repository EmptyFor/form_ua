import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/advert';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
// import links from '../../config/links';
import styles from './style.modules.scss';
import { CheckBoxSelect } from './CheckBoxSelect';
import { MultiplySelect } from './MultiplySelect';
import { CommonSelect } from './CommonSelect';

export class Select extends Component {

    render() {

        const { width, placeholder, icon, id, type } = this.props

        if (type === 'multiply') {
            return <MultiplySelect width={width} placeholder={placeholder} icon={icon} id={id} getData={this.props.getData} name={this.props.name} />
        }

        else if (type === 'checkbox') {
            return <CheckBoxSelect width={width} placeholder={placeholder} icon={icon} id={id} getData={this.props.getData} name={this.props.name} />
        }
        else {
            return <CommonSelect width={width} placeholder={placeholder} icon={icon} id={id} getData={this.props.getData} name={this.props.name} />
        }
    }
}

export default connect(
    (state) => ({
        clear: state.advert.clear
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Select);