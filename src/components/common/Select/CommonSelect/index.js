import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../../store/actions/advert';
import './style.modules.scss';

export class CommonSelect extends Component {

    selectRef = React.createRef()
    selectArea = React.createRef()

    state = {
        isOpen: false,
        togleClass: 'close',
        value: '',
        style: {
            border: {
                display: 'none'
            }
        }
    }

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
                    borderRadius: '30px 30px 0px 0px',
                    borderBottom: 'none',
                    borderColor: '#1ccee9',
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
        let value = this.state.value
        if (this.props.required) {
            if (value.length > 0) {
                this.setState(prevState => ({
                    isOpen: false,
                    togleClass: 'close',
                    style: {
                        ...prevState.style,
                        select: {
                            borderRadius: '30px',
                            border: 'solid 1px #1ccee9',
                            zIndex: 1
                        },
                    }
                }))
            }
            else {
                this.setState(prevState => ({
                    isOpen: false,
                    togleClass: 'close',
                    style: {
                        ...prevState.style,
                        select: {
                            borderRadius: '30px',
                            border: 'solid 1px #b1a7c8',
                            borderColor: 'tomato',
                            zIndex: 1
                        },
                    }
                }))
            }
        }
        else {
            if (value.length > 0) {
                this.setState(prevState => ({
                    isOpen: false,
                    togleClass: 'close',
                    style: {
                        ...prevState.style,
                        select: {
                            borderRadius: '30px',
                            border: 'solid 1px #1ccee9',
                            zIndex: 1
                        },
                    }
                }))
            }
            else {
                this.setState(prevState => ({
                    isOpen: false,
                    togleClass: 'close',
                    style: {
                        ...prevState.style,
                        select: {
                            borderRadius: '30px',
                            borderBottom: 'solid 1px #b1a7c8',
                            borderColor: '',
                            zIndex: 1
                        },
                    }
                }))
            }
        }
        this.setState(prevState => ({
            isOpen: false,
            togleClass: 'close',
            style: {
                ...prevState.style,
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
        let item = e.target.innerText
        let value = this.props.itemList[e.target.getAttribute('id')].value
        this.setState(prevState => ({
            item: item,
            value: value,
            style: {
                ...prevState.style,
                placeholder: {
                    display: "none"
                },
                value: {
                    display: "inline-block"
                },
                select: {
                    borderRadius: '30px',
                    borderBottom: 'solid 1px #b1a7c8',
                    borderColor: '#1ccee9',
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
        }));
    }

    //Set top for select list

    setTop = () => {
        try {
            let h = this.selectArea.current.offsetHeight
            this.top = h + 'px'

            this.top !== this.state.top ? this.setState({ top: h + 'px' }) : void 0
        }
        catch {

        }
    }

    componentWillMount() {
        let value = this.props.value
        if (value !== undefined && value !== "") {
            let item = this.props.itemList.map(item => { return item.value === value ? item.name : "" })
            this.setState(prevState => ({
                value: value,
                item: item,
                style: {
                    ...prevState.style,
                    placeholder: {
                        display: "none"
                    },
                    value: {
                        display: "inline-block"
                    }
                }
            }))
        }
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

    clearVlaue = () => {
        this.setState(prevState => ({
            value: "",
            style: {
                ...prevState.style,
                placeholder: {
                    display: "inline-block"
                },
                value: {
                    display: "none"
                }
            }
        }))
    }

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.clearVlaue() : void 0
    }

    render() {
        return (
            <div id={this.props.id}
                name={this.props.name}
                className="common_select"
                value={this.state.value}
                style={this.state.style.select}
                tabIndex="0"
                ref={this.selectRef}
                onBlur={this.closeSelectList}
                onClick={this.togleSelectList}>

                <div id="selectArea" className="select_area" ref={this.selectArea}>
                    <img alt="" className="select_icon" src={this.props.icon}></img>
                    <div id="selectPlaceholder" className="select_value placeholder" style={this.state.style.placeholder}>{this.props.placeholder}</div>
                    <div id="selectValue" className="select_value" style={this.state.style.value} >{this.state.item}</div>
                    <div id="selectedItems" className="selected_items" ></div>
                    <svg id="arrow"
                        className="arrow"
                        style={this.state.style.arrow}
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="17"
                        viewBox="0 0 9 5"
                        onClick={this.rotateArrow}>

                        <path fill="#99abc3" fillRule="evenodd" d="M4.375 5L8.75 0H0z">

                        </path>
                    </svg>
                </div>

                <div className="border" style={this.state.style.border}></div>

                <div id="select_list" className={`select_list ${this.state.togleClass}`} style={{ top: this.top }} >

                    <div className="select_list_items">
                        {
                            this.props.itemList.map((item, index) => {
                                return <div value='false' onClick={this.setSelectValue} id={index} key={index} className="sub_list_item" >{item.name}</div>
                            })
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        clear: state.advert.clear
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(CommonSelect);