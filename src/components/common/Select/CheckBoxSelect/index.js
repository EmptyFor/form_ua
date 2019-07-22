import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
// import links from '../../config/links';
import styles from './style.modules.scss';

export class CheckBoxSelect extends Component {

    static propTypes = {
        token: PropTypes.string,
        error: PropTypes.string,
        authActions: PropTypes.object,
    }
    state = {
        isOpen: false,
        togleClass: 'close',
        placeholder: this.props.placeholder,
        selectedItems: [],
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

    togleSelectList = () => {
        this.togleIsOpenState()
        this.state.isOpen ? this.closeSelectStyle() : this.openSelectStyle()
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
        this.togleActiveClass(e, value)
        this.fillSelectedItemsArray(e, value)
        console.log(this.selectedItems)
    }

    //Toggle Active Class

    togleActiveClass = (e, value) => {
        let checkBoxClasses = e.target.childNodes[1].classList

        value === 'true' ? e.target.setAttribute('value', false) : e.target.setAttribute('value', true)
        value === 'true' ? e.target.classList.add('active') : e.target.classList.remove('active')
        value === 'true' ? checkBoxClasses.add('check') : checkBoxClasses.remove('check')
    }

    handleClick = (e) => {
        this.closeSelectList(e)
    }

    //Fill selectedItems Array

    fillSelectedItemsArray(e, value) {
        value === 'true' ? this.pushToSelectedItems(e) : this.removeFromSelectedItems(e)
    }

    //Push Selected Items

    pushToSelectedItems(e) {
        let item = e.target.getAttribute('name')
        this.selectedItems.push(item)
        this.setState({ selectedItems: this.selectedItems })
    }

    //Remove Selected Items

    removeFromSelectedItems(e) {
        let item = e.target.getAttribute('name')
        let index = this.selectedItems.indexOf(item)
        this.selectedItems.splice(index, 1)
        this.setState({ selectedItems: this.selectedItems })
    }

    render() {
        return (
            <div id={this.props.id}
                className="common_select"
                name={this.props.name}
                value={this.state.selectedItems}
                style={this.state.style.select}
                tabIndex="0"
                onBlur={this.closeSelectList}>
                    
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
                                <div id={`${index}`} value={false} className="drop_check_box"></div>
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
)(CheckBoxSelect);