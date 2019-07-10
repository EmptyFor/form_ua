import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../Modal/style.modules.scss';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import links from '../../../config/links';

export const Modal = props => ({

    render() {
        return (
            <div className="modal_wrapper">
                <div className="modal_window">
                <div className="modal_header">
                    <span>&times;</span>
                </div>
                <p className="modal_text">Ваше оголошення було успішно опубліковане.<br/>
                    Очікуйте дзвінків від покупців.
                </p>
                   <Link to={links.home}> <Button width="40%" text="Переглянути"/></Link>
                </div>
            </div>
        );  
    }
})






export default connect(
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(Modal);