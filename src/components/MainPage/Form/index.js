import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../Form/style.modules.scss';
import { Button } from '../../common/Button';
// import globalStyle from '../../../assets/styles/global.styles.scss'
export class Form extends Component {


    handleEnter = e => {
        e.target.style.cursor = 'pointer';
        e.target.style.backgroundColor = 'rgb(253, 83, 83)';
    }
    handleBlur = e => {
        e.target.style.backgroundColor = 'rgba(177, 167, 200, 0.16)';
    }
    render() {
        return (
 
            <div className='wrapp' >
                <h1>Розпочни свій бізнес вже сьогодні</h1>
                <span >Знайди ідеальне рішення за декілька секунд...</span>
            <div className='search_form'>
                <Button onMouseEnter = {this.handleEnter}
                 onMouseLeave={this.handleBlur} 
                 back='rgba(177, 167, 200, 0.16)' 
                 color='#707488'
                 text='Розширений пошук' />
                <Button text='Знайти'/>
            </div>
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