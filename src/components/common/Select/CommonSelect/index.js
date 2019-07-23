import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
// import links from '../../config/links';
import styles from './style.modules.scss';

export class CommonSelect extends Component {

    state = {
        isOpen: false,
        togleClass: 'close',
        value: '',
        style: {

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

    selectedItem = ''

    //Togle isOpen state

    togleIsOpenState = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    //Togle Open & Close Styles

    openSelectStyle = () => {
        this.setState(prevState => ({
            togleClass: 'open',
            style: {
                ...prevState.style,
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
                },
            }
        }))
    }

    closeSelectStyle = () => {
        this.setState(prevState => ({
            togleClass: 'close',
            style: {
                ...prevState.style,
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
                },
            }
        }))
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
        this.props.getData(e)
    }

    //Togle Select List Items

    togleSelectListItems(e) {
        let value = e.target.getAttribute('value')
        this.togleActiveClass(e, value)
        this.fillSelectedItemsArray(e, value)
    }

    // Common select

    setSelectValue = (e) => {
        let value = e.target.innerText
        this.setState(prevState => ({
            value: value,
            style: {
                ...prevState.style,
                placeholder: {
                    display: "none"
                },
                value: {
                    display: "inline-block"
                }
            }
        }));
        console.log(this.state)
    }

    render() {
        return (
            <div id={this.props.id}
                name={this.props.name}
                className="common_select"
                value={this.state.value}
                style={this.state.style.select}
                tabIndex="0"
                onBlur={this.closeSelectList}
                onClick={this.togleSelectList}>

                <div id="selectArea" className="select_area" >
                    <img className="select_icon" src={this.props.icon}></img>
                    <div id="selectPlaceholder" className="select_value placeholder" style={this.state.style.placeholder}>{this.props.placeholder}</div>
                    <div id="selectValue" className="select_value" style={this.state.style.value} >{this.state.value}</div>
                    <div id="selectedItems" className="selected_items" ></div>
                    <svg id="arrow"
                        className="arrow"
                        style={this.state.style.arrow}
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="17"
                        viewBox="0 0 9 5"
                        onClick={this.rotateArrow}>

                        <path fill="#1ADDEF" fillRule="evenodd" d="M4.375 5L8.75 0H0z">

                        </path>
                    </svg>
                </div>



                <div id="select_list" className={`select_list ${this.state.togleClass}`} >

                    {
                        this.selectItems.map((item, index) => {
                            return <div value='false' onClick={this.setSelectValue} id={index} key={index} className="list_item" >{item}</div>
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
)(CommonSelect);