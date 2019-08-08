import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.modules.scss';

export class CheckBoxSelect extends Component {

    selectValue = React.createRef()
    selectArea = React.createRef()

    state = {
        isOpen: false,
        togleClass: 'close',
        placeholder: this.props.placeholder,
        value: [],
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
    value = []

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
    }

    //Togle Select List Items

    togleSelectListItems(e) {
        let value = e.target.getAttribute('value')
        this.togleActiveClass(e, value)
        this.fillSelectedItemsArray(e, value)
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

    //Set top for select list

    setTop = () => {
        let h = this.selectArea.current.offsetHeight
        this.top = h + 'px'

        this.top !== this.state.top ? this.setState({ top: h + 'px' }) : void 0
    }

    componentDidMount() {
        window.onload = this.setTop
        window.onresize = function () {
            this.setTop()
        }.bind(this)
    }

    componentDidUpdate() {
        this.setTop()
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

                <div id="selectArea" className="select_area" onClick={this.togleSelectList} ref={this.selectArea} >
                    <img alt="" className="select_icon" src={this.props.icon}></img>
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

                <div className="border" style={{ top: this.top, border:this.state.style.border }}></div>

                <div id="select_list" className={`select_list ${this.state.togleClass}`} style={{ top: this.top }} >

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

export default connect()(CheckBoxSelect);