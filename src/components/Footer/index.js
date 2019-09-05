import React from 'react';
import { connect } from 'react-redux';
import './style.modules.scss'
import './style.modules.media.scss'
import logo_footer from '../../assets/images/footer.svg'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import links from '../../config/links'


export const Footer = () => {
    const { t } = useTranslation()
    return <footer>

        < div className="footer_logo" > <img src={logo_footer} alt="#"></img></div>
        <div className="footer_texts">
            <div className="footer_links"> <Link to={links.confident_politic}>{t('footer-politics')} </Link> <Link to={links.user_rules}>{t('footer-questions')}</Link></div>
            <span>(c) firm.ua 2019 {t('footer-lawyers')} </span>
        </div>
    </footer >


}

export default connect()(Footer);
