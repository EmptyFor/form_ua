import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../Form/style.modules.scss';
import { Button } from '../../common/Button';
// import globalStyle from '../../../assets/styles/global.styles.scss'
export class Form extends Component {


    handleEnter = e => {
        console.log(e)
    }
    render() {
        console.log(styles)

        return (
 
            <div className='wrapp' >
                <h1>Розпочни свій бізнес вже сьогодні</h1>
                <span>Знайди ідеальне рішення за декілька секунд...</span>
            <div className='search_form'>
                <Button onClick = {this.handleEnter} back='#CCC' text='Розширений пошук'/>
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