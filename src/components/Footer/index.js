import React from 'react';
import { connect } from 'react-redux';
import './style.modules.scss'
import './style.modules.media.scss'
// import { bindActionCreators } from 'redux';
// import logo_footer from '../../assets/images/logologin2x.png'
// import links from '../../config/links';
import logo_footer from '../../assets/images/footer.svg'


export const Footer = () => ({
    render() {
        return (
            <footer>

             <div className="footer_logo"><img src={logo_footer} alt="#"></img></div>
                <div className="footer_texts">
                    <div className="footer_links"><a href="/">Партнерам</a> | <a href="/">Політика конфіденційності </a>| <a href="/">Часті запитання</a></div>
                    <span>(c) firm.ua 2019 всі права захищені </span>
                </div>
            </footer>
        )
    }
})

export default connect(
    // (state) => ({}),
    // dispatch => ({})
)(Footer);
