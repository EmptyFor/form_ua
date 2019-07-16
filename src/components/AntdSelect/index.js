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

export class AntdSelect extends Component {

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

    toggleSelectMenu = () => {
        if (this.state.isOpen === false) {
            this.setState({
                isOpen: true
            })
            this.openSelectStyle()
        }
        else {
            this.setState({
                isOpen: false
            })
            this.closeSelectStyle()
        }
    }

    blurSelectMenu = () => {
        this.setState({
            isOpen: false
        })
        this.closeSelectStyle()
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
                    style={this.state.style.select}
                    showArrow={false}
                    onBlur={this.blurSelectMenu}
                    onDeselect={this.blurSelectMenu}
                    dropdownClassName="dropdwn"
                    dropdownStyle={{}}>

                    {this.menuItems.map((menuItem, index) => <Option style={{ transform: 'translate(0, 0)' }} key={index} value={menuItem}>{menuItem}</Option>)}

                </Select>
            </div>
        );
    }
}