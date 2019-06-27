import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styles from './style.modules.scss'
// import { bindActionCreators } from 'redux';

export const Footer = () => ({
    render() {
        return (
            <footer>

                <div className="footer_logo">log</div>
                <div className="footer_texts">
                    <div className="footer_links"><a href="#">Партнерам</a> | <a href="#">Політика конфіденційності </a>| <a href="#">Часті запитання</a></div>
                    <span>(c) firm.ua 2019 всі права захищені </span>
                </div>
            </footer>
        )
    }
})

export default connect(
    (state) => ({}),
    dispatch => ({})
)(Footer);
