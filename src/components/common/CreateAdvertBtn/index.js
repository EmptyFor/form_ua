import React from 'react'
import './style.modules.scss'
import './style.modules.media.scss'
import { Link } from 'react-router-dom'
import links from '../../../config/links'



export default function CreateAdvertBtn(props) {

    return <Link to={links.createAdvert}><div className={`advert ${props.className}`} onClick={props.onClick} fix={props.fix} ><p>Створити оголошення</p><span className="adding_advert">+</span></div></Link>
}