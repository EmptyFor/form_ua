import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../Form/style.modules.scss';
import { Button } from '../../common/Button';
import { Select } from '../../common/Select';
import { Input } from '../../common/Input';
import house_select_icon from '../../../../src/assets/images/house_select_icon.png'
// import globalStyle from '../../../assets/styles/global.styles.scss'
export class Form extends Component {


    handleEnter = e => {
        // e.target.style.cursor = 'pointer';
        e.target.style.backgroundColor = 'rgb(253, 83, 83)';
    }
    handleBlur = e => {
        e.target.style.backgroundColor = 'rgba(177, 167, 200, 0.16)';
    }
    render() {
        return (

            <div className='wrapp' >
                
            </div>

        );
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(Form);