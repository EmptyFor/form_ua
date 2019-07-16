import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
// import links from '../../config/links';
import styles from './style.modules.scss';
import arrow from '../../../../src/assets/images/arrow.png'

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

    //Open & Close Select List

    togleSelectList = () => {
        if (this.state.isOpen) {
            this.setState({
                isOpen: false,
                togleClass: 'close'
            })
            
            this.closeSelectStyle()
        }
        else {
            this.setState({
                isOpen: true,
                togleClass: 'open'
            })
            this.openSelectStyle()
        }
    }

    closeSelectList = (e) => {
        this.setState({
            isOpen: false,
            togleClass: 'close'
        })
        this.closeSelectStyle()
    }

    //Toggle Active Class

    togleActiveClass = (e) => {
        let value = e.target.getAttribute('value')
        value === 'true' ? e.target.setAttribute('value', false) : e.target.setAttribute('value', true)
        value === 'true' ? e.target.classList.add('active') : e.target.classList.remove('active')
    }

    handleClick = (e) => {
        this.closeSelectList(e)
        this.togleItems(e)
    }

    openSelectStyle = () => {
        this.setState({
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
                }
            }
        })
    }

    closeSelectStyle = () => {
        this.setState({
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
                }
            }
        })
    }



    render() {
        return (
            <div id={this.props.id} className="common_select" style={this.state.style.select} tabindex="0" onBlur={this.closeSelectList}>
                <div id="selectArea" className="select_area" onClick={this.togleSelectList}  >
                    <img className="select_icon" src={this.props.icon}></img>
                    <p id="selectPlaceholder">{this.state.placeholder}</p>
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



                <div id="select_list" className={`select_list ${this.state.togleClass}`} >

                    {
                        this.selectItems.map((item, index) => {
                            return <div value='true' onClick={this.togleActiveClass} id={`${index}`} className="list_item" >{item}</div>
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