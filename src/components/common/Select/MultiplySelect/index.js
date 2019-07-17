import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
// import links from '../../config/links';
import styles from './style.modules.scss';

export class MultiplySelect extends Component {

    state = {
        isOpen: false,
        togleClass: 'close',
        placeholder: [this.props.placeholder],
        style: {
            arrow: {
                transform: '',
                transition: ''
            },
            select: {
                gridColumn: this.props.gridColumn,
                borderRadius: '20px',
                transition: '0.5s',
                zIndex: 1,
            },
            border: {
                display: 'none'
            }
        }
    }

    selectItems = [
        "Aкціонерне товариство",
        "Aсоціація",
        "Благодійна асоціація",
        "Виробничий підрозділ",
        "Гаражний кооператив",
        "Господарські товариства",
        "Громадська організація",
        "Житлово-будівельний кооператив",
        "Концерн",
        "Кооператив",
    ]

    placeholderItems = []

    selectedItems = []

    //Togle isOpen state

    togleIsOpenState = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    //Togle Open & Close Styles

    openSelectStyle = () => {
        this.setState({
            togleClass: 'open',
            style: {
                select: {
                    borderRadius: '20px 20px 0px 0px',
                    borderBottom: 'none',
                    borderColor: '#d2fbff',
                    zIndex: 9999
                },
                arrow: {
                    transform: 'rotate(180deg)',
                    transition: '0.5s'
                },
                border: {
                    display: 'block'
                }
            }
        })
    }

    closeSelectStyle = () => {
        this.setState({
            togleClass: 'close',
            style: {
                select: {
                    borderRadius: '20px',
                    borderBottom: 'solid 1px #b1a7c8',
                    borderColor: '#b1a7c8',
                    zIndex: 1
                },
                arrow: {
                    transform: 'rotate(0deg)',
                    transition: '0.5s'
                },
                border: {
                    display: 'none'
                }
            }
        })
    }

    //Togle Select List

    togleSelectList = (e) => {
        if (e.target.getAttribute('id') === 'selectPlaceholder') {
            this.togleIsOpenState()
            this.state.isOpen ? this.closeSelectStyle() : this.openSelectStyle()
        }
    }

    closeSelectList = (e) => {
        this.setState({
            isOpen: false,
            togleClass: 'close'
        })
        this.closeSelectStyle()
    }

    //Togle Select List Items

    togleSelectListItems(e) {
        let value = e.target.getAttribute('value')
        this.togleActiveClass(e.target, value)
        this.fillSelectedItemsArray(e, value)
        this.fillPlaceholder(e, value)
        console.log(this.selectedItems)
    }

    //Toggle Active Class

    togleActiveClass = (e, value) => {
        let checkBoxClasses = e.childNodes[1].classList

        value === 'true' ? e.setAttribute('value', false) : e.setAttribute('value', true)
        value === 'true' ? e.classList.add('active') : e.classList.remove('active')
        value === 'true' ? checkBoxClasses.add('select') : checkBoxClasses.remove('select')
    }

    handleClick = (e) => {
        this.closeSelectList(e)
    }

    //Fill Placeholder

    fillPlaceholder = (e, value) => {
        value === 'true' ? this.addListItem(e) : this.removeListItem(e)
    }

    //Create Element 

    cloneListItem = (e) => {
        let name = e.target.getAttribute('name')
        return (
            <div className="selected_item" id={e.target.id}>
                {name}
                <div className="remove_button" id={e.target.id} onClick={this.removeListItem}>
                    ✖
                </div>
            </div>
        )
    }

    //Push to placeholder

    addListItem = (e) => {
        let id = e.target.getAttribute('id')
        this.placeholderItems[id] = this.cloneListItem(e)
        this.setState({
            placeholder: this.placeholderItems
        })
        console.log(this.placeholderItems[1])
    }

    //Remove from placeholder

    removeListItem = (e) => {
        let index = e.target.getAttribute('id')

        this.placeholderItems[index] = ''
        this.setState({
            placeholder: this.placeholderItems
        })

        //Remove from selectedItems
        let i = e.target.parentNode.childNodes[0]
        this.selectedItems.splice(i, 1)
        this.placeholderItems.join('') === '' ? this.setState({ placeholder: this.props.placeholder }) : void 0

        //Remove styles
        let select = document.getElementById(this.props.id)
        let listItem = select.childNodes[2].childNodes
        this.togleActiveClass(listItem[index])
    }

    //Fill selectedItems Array

    fillSelectedItemsArray(e, value) {
        value === 'true' ? this.pushToSelectedItems(e) : this.removeFromSelectedItems(e)
    }

    //Push Selected Items

    pushToSelectedItems(e) {
        let item = e.target.getAttribute('name')
        this.selectedItems.push(item)
    }

    //Remove Selected Items

    removeFromSelectedItems(e) {
        let item = e.target.getAttribute('name')
        let index = this.selectedItems.indexOf(item)
        this.selectedItems.splice(index, 1)
    }

    render() {
        return (
            <div id={this.props.id} className="common_select" style={this.state.style.select} tabindex="0" onBlur={this.closeSelectList}>
                <div id="selectArea" className="select_area" onClick={this.togleSelectList}  >
                    <img className="select_icon" src={this.props.icon}></img>
                    <div id="selectPlaceholder" className="placeholder">{this.state.placeholder}</div>
                    <div id="selected_items" className="selected_items" ></div>
                    <svg id="arrow"
                        className="arrow"
                        style={this.state.style.arrow}
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="17"
                        viewBox="0 0 9 5"
                        onClick={this.rotateArrow}>

                        <path fill="#1ADDEF" fill-rule="evenodd" d="M4.375 5L8.75 0H0z">

                        </path>
                    </svg>
                </div>

                <div className="border" style={this.state.style.border}></div>

                <div id="select_list" className={`select_list ${this.state.togleClass}`} >

                    {
                        this.selectItems.map((item, index) => {
                            return <div value='true' name={item} onClick={this.togleSelectListItems.bind(this)} id={`${index}`} className="list_item" >
                                {item}
                                <div id={`${index}`} value={false} className="drop_multiply_box"></div>
                            </div>
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
)(MultiplySelect);