import React from 'react'
import './styles.modules.scss'

export default function CreateAdvertBtn(props) {

    return <div className={`advert ${props.className}`} onClick={props.onClick} fix={props.fix} >Створити оголошення <span className="adding_advert">+</span></div>
}