import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
// import links from '../../config/links';
import styles from './style.modules.scss';
import arrow from '../../../../src/assets/images/arrow.png'

export class Select extends Component {

    static propTypes = {
        token: PropTypes.string,
        error: PropTypes.string,
        authActions: PropTypes.object,
    }
    state = {
        isOpen: false,
        togleClass: 'close',
        placeholder: this.props.placeholder
    }

    selectItems = [
        'Пункт 1',
        'Пункт 2',
        'Пункт 3',
        'Пункт 4',
        'Пункт 5',
        'Пункт 6'
    ]

    // Multiply selct

    MultiplySelect = () => {
        this.selectItems.map((item, index) => {
            return <div value='false' onClick={this.togleItems} id={`${index}`} className="list_item" >{item}</div>
        })
    }

    togleSelectList = () => {
        if (this.state.isOpen) {
            this.setState({
                isOpen: false,
                togleClass: 'close'
            })
            // document.getElementById(this.props.id).style.borderRadius = '20px'
        }
        else {
            this.setState({
                isOpen: true,
                togleClass: 'open'
            })
            // document.getElementById(this.props.id).style.borderRadius = '20px 20px 0px 0px'
        }
    }

    togleActiveClass = (e, value) => {
        value === 'true' ? e.target.setAttribute('value', false) : e.target.setAttribute('value', true)
        value === 'true' ? e.target.classList.remove('active') : e.target.classList.add('active')
    }

    toglePlaceholder = (selectedItems) => {
        if (selectedItems.childNodes.length == 0) {
            this.setState({
                placeholder: this.props.placeholder
            })
        }
        else {
            this.setState({
                placeholder: ''
            })
        }
    }

    togleItems = (e) => {
        let value = e.target.getAttribute('value')
        let selectedItems = document.getElementById('selected_items')
        let cloneNode = e.target.cloneNode(true)

        // Create selected item node

        let selectedItem = document.createElement('div')
        selectedItem.classList.add('selected_item')
        selectedItem.id = e.target.id

        // Create rebove button

        let removeButton = document.createElement("div")
        let textNode = document.createTextNode('✖')
        removeButton.classList.add('remove_button')
        removeButton.id = e.target.id
        removeButton.appendChild(textNode)

        selectedItem.appendChild(cloneNode)
        selectedItem.appendChild(removeButton)

        let removeSelectedItem = document.getElementById(e.target.id)

        this.togleActiveClass(e, value)

        value === 'true' ? selectedItems.removeChild(removeSelectedItem) : selectedItems.appendChild(selectedItem)

        removeButton.addEventListener('click', function (e) {
            let selectItem = document.getElementsByClassName('select_list')[0].childNodes[e.target.id]
            selectItem.setAttribute('value', false)
            selectItem.classList.remove('active')
            selectedItems.removeChild(document.getElementById(e.target.id))
            this.toglePlaceholder(selectedItems)
        }.bind(this))

        this.toglePlaceholder(selectedItems)
    }

    // Common select

    setPlaceholder = (e) => {
        this.setState({
            placeholder: e.target.innerText
        })
    }

    render() {
        return (
            <div id = {this.props.id} className="common_select" style={{ width: `${this.props.width}` }}>
                <div id="selectArea" className="select_area" onClick={this.togleSelectList}>
                    <img className="select_icon" src={this.props.icon}></img>
                    <p id="selectPlaceholder">{this.state.placeholder}</p>
                    <div id="selected_items" className="selected_items" ></div>
                    <img className="arrow" src={arrow}></img>
                </div>
                <div id="select_list" className={`select_list ${this.state.togleClass}`} >

                    {
                        this.props.type == 'multiply' && this.selectItems.map((item, index) => {
                            return <div value='false' onClick={this.togleItems} id={`${index}`} className="list_item" >{item}</div>
                        })

                    }

                    {
                        this.props.type == 'common' && this.selectItems.map((item, index) => {
                            return <div value='false' onClick={this.setPlaceholder} id={`${index}`} className="list_item" >{item}</div>
                        })
                    }

                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({
    })
)(Select);