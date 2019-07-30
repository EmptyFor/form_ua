import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/advert';
import { bindActionCreators } from 'redux';
// import { Redirect } from 'react-router-dom';
// import links from '../../config/links';
import './style.modules.scss';

export class MultiplySelect extends Component {

    selectValue = React.createRef()
    selectArea = React.createRef()

    top

    state = {
        isOpen: false,
        togleClass: 'close',
        value: [],
        style: {
            arrow: {
                transform: '',
                transition: ''
            },
            select: {
                gridColumn: this.props.gridColumn,
                borderRadius: '30px',
                transition: '0.5s',
                zIndex: 1,
            },
            border: {
                display: 'none'
            },
            selectList: {
                top: ''
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
    value = []
    selectedItems = []

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
        let value = this.state.value
        this.setState(prevState => ({
            isOpen: false,
            togleClass: 'close',
            style: {
                ...prevState.style,
                select: {
                    borderRadius: '30px',
                    border: 'solid 1px #b1a7c8',
                    zIndex: 1
                },
            }
        }))
        if (this.props.required) {
            if (value.length > 0) {
                this.setState(prevState => ({
                    isOpen: false,
                    togleClass: 'close',
                    style: {
                        ...prevState.style,
                        select: {
                            borderRadius: '30px',
                            border: 'solid 1px #b1a7c8',
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
                            border: 'solid 1px #b1a7c8',
                            borderColor: '#1ccee9',
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

    togleSelectList = (e) => {
        if (e.target === this.selectArea.current || e.target === this.selectValue.current) {
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
        this.props.getData(e)
    }

    //Togle Select List Items

    togleSelectListItems(e) {
        let value = e.target.getAttribute('value')
        this.togleActiveClass(e.target, value)
        this.fillValue(e, value)
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

    //Fill Value

    fillValue = (e, value) => {
        value === 'true' ? this.addListItem(e) : this.removeListItem(e)
    }

    //Create Element 

    cloneListItem = (e) => {
        return (
            <Fragment key={`f_${e.target.id}`}>
                <div className="selected_item" id={`i_${e.target.id}`} value={e.target.getAttribute('name')}>
                    <p>
                        {e.target.getAttribute('name')}
                        <span className="remove_button" id={e.target.id} onClick={this.removeListItem}>✕</span>
                    </p>
                </div>
                <br />
            </Fragment>
        )
    }

    //Push to value

    addListItem = (e) => {
        this.value.push(this.cloneListItem(e))
        this.pushToSelectedItems(e)

        this.setState(prevState => ({
            value: this.value,
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

    //Remove from value

    removeListItem = (e) => {
        let index = e.target.getAttribute('id')
        let target = this.selectValue.current.querySelector(`#i_${index}`).getAttribute('value')
        let i = this.selectedItems.indexOf(target)

        this.value.splice(i, 1)
        this.selectedItems.splice(i, 1)


        if (this.selectedItems.join('') === '') {
            this.setState(prevState => ({
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


        this.setState({
            value: this.value
        })

        //Remove styles
        let select = document.getElementById(this.props.id)
        let listItem = select.childNodes[2].childNodes[0].childNodes
        this.togleActiveClass(listItem[index])
    }

    //Push Selected Items

    pushToSelectedItems(e) {
        let item = e.target.getAttribute('name')
        this.selectedItems.push(item)
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

    clearValue = () => {

        //Clear styles
        let select = document.getElementById(this.props.id)
        let listItem = select.childNodes[2].childNodes

        for (let i = 0; i < listItem.length; i++) {
            let value = listItem[i].getAttribute('value')
            let checkBoxClasses = listItem[i].childNodes[1].classList

            value === 'false' ? listItem[i].setAttribute('value', true) : void 0
            value === 'false' ? listItem[i].classList.remove('active') : void 0
            value === 'false' ? checkBoxClasses.remove('select') : void 0
        }

        //Clear Value
        this.value = []
        this.selectedItems = []
        this.setState(prevState => ({
            value: [],
            selectedItems: [],
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
        nextProps.clear ? this.clearValue() : void 0
    }

    render() {
        return (
            <div id={this.props.id}
                value={[this.state.selectedItems]}
                className="common_select"
                name={this.props.name}
                style={this.state.style.select}
                tabIndex="0"
                onBlur={this.closeSelectList}>

                <div id="selectArea" ref={this.selectArea} className="select_area" onClick={this.togleSelectList}  >
                    <img alt="" className="select_icon" src={this.props.icon}></img>
                    <div id="selectPlaceholder" className="select_value placeholder" style={this.state.style.placeholder}>{this.props.placeholder}</div>
                    <div id="selectValue" ref={this.selectValue} className="select_value" style={this.state.style.value} >
                        {this.state.value.map(item => { return item })}
                    </div>
                    <div id="selected_items" className="selected_items" ></div>
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
                            this.selectItems.map((item, index) => {
                                return <div value='true'
                                    name={item}
                                    id={index}
                                    key={index}
                                    className="sub_list_item"
                                    onClick={this.togleSelectListItems.bind(this)} >
                                    {item}
                                    <div id={index} value={false} className="drop_multiply_box"></div>
                                </div>
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
)(MultiplySelect);