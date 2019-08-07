import React from 'react'
import './styles.modules.scss'
import { Link } from 'react-router-dom'
import links from '../../../config/links'



export default function CreateAdvertBtn(props) {
    
    return <Link to={links.createAdvert}><div className={`advert ${props.className}`} onClick={props.onClick} fix={props.fix} >Створити оголошення <span className="adding_advert">+</span></div></Link>
}