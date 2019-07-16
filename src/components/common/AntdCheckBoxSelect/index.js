import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
// import links from '../../config/links';
import arrow from '../../../../src/assets/images/arrow.png'
import { Select } from 'antd';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
import styles from './style.modules.scss';
import house from '../../../assets/images/combined-gray@2x.png'

const { Option } = Select;

export class AntdCheckBoxSelect extends Component {

    state = {
        isOpen: false,
        style: {
            arrow: {
                transform: '',
                transition: ''
            },
            select: {
                gridColumn: this.props.gridColumn,
                borderRadius: '20px',
                transition: '0.5s'
            }
        },
        dropdown: {
            isOpen: true
        }
    }

    menuItems = [
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

    //Dropdown List With Check Box

    dropList = this.menuItems.map((menuItem, index) => {
        return (
            <Option style={{ transform: 'translate(0, 0)' }} key={index} value={menuItem}>
                {menuItem}
                <div id={`check_box_${index}`} value={false} className="drop_check_box"></div>
            </Option>
        )
    })

    openSelectStyle = () => {
        this.setState({
            style: {
                select: {
                    borderRadius: '20px 20px 0px 0px',
                    // height: '50px',
                    transition: '0.5s'
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
                    transition: '0.5s'
                },
                arrow: {
                    transform: 'rotate(0deg)',
                    transition: '0.5s'
                }
            }
        })
    }

    toggleSelectMenu = (e) => {
        if (e.target.getAttribute('aria-selected') == "false" || e.target.getAttribute('value') == "false" || e.target.getAttribute('value') == "true") {
            void 0
        }
        else {
            if (this.state.isOpen === false) {
                this.setState({
                    isOpen: true,
                })
                this.openSelectStyle()
            }
            else {
                this.setState({
                    isOpen: false,
                })
                this.closeSelectStyle()
            }
        }
    }

    blurSelectMenu = () => {
        this.setState({
            isOpen: false
        })
        this.closeSelectStyle()
    }

    //Check Box

    getCheckBoxById = (target, options) => {
        return document.getElementById(options.props.children[1].props.id)
    }

    togleCheckBoxList = (target, options) => {
        let checkBox = this.getCheckBoxById(target, options)

        if (checkBox.getAttribute('value') == 'false') {
            checkBox.setAttribute('value', 'true')
            checkBox.classList.add('check')
            options.props.style.fontWeight = 'bold'
            this.pushSelectedItem(options.props.children[0])
        }
        else {
            checkBox.setAttribute('value', 'false')
            checkBox.classList.remove('check')
            options.props.style.fontWeight = 'normal'
            this.removeSelectedItem(options.props.children[0])
        }
    }

    //Push selected item

    pushSelectedItem = (item) => {
        this.selectedItems.push(item)
        console.log(this.selectedItems)
    }

    //Remove selected item

    removeSelectedItem = (item) => {
        let index = this.selectedItems.indexOf(item)
        this.selectedItems.splice(index, 1)
        console.log(this.selectedItems)
    }

    render() {

        return (
            <div className="select_container" style={{ gridColumn: this.props.gridColumn }} onClick={this.toggleSelectMenu}>
                <img className="icon" src={house} onClick={this.rotateArrow}></img>

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

                <Select
                    open={this.state.isOpen}
                    value={this.props.value}
                    style={this.state.style.select}
                    showArrow={false}
                    onBlur={this.blurSelectMenu}
                    onDeselect={this.blurSelectMenu}
                    onSelect={this.togleCheckBoxList}
                    dropdownClassName="dropdwn"
                    dropdownStyle={{}}>

                    {this.dropList}

                </Select>
            </div>
        );
    }
}