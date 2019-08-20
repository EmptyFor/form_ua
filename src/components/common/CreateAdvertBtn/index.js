import React from 'react'
import './style.modules.scss'
import './style.modules.media.scss'
import { Link } from 'react-router-dom'
import links from '../../../config/links'
import { useTranslation } from 'react-i18next';



export default function CreateAdvertBtn(props) {
    const { t } = useTranslation();
    return <Link to={links.createAdvert}><div className={`advert ${props.className}`} onClick={props.onClick} fix={props.fix} ><p>{t('commoon-create-advert-btn')}</p><span className="adding_advert">+</span></div></Link>
}