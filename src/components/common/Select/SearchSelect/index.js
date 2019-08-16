import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../../store/actions/advert';
import city from '../../../../assets/db/city';
// import kved from '../../../../assets/db/kved';
import kvedArr from '../../../../assets/db/kvedArr';
import './style.modules.scss';

export class SearchSelect extends Component {

    selectRef = React.createRef()
    selectArea = React.createRef()
    selectListRef = React.createRef()
    searchInputNameRef = React.createRef()

    state = {
        isOpen: false,
        togleClass: 'close',
        value: '',
        selectListItems: [],
        style: {
            border: {
                display: 'none'
            }
        }
    }

    selectedItem = ''
    selectListItems = []

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
                            border: 'solid 1px tomato',
                            zIndex: 1
                        },
                    }
                }))
            }
        }
        else {
            if (value !== undefined && value.length > 0) {
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
        e.target.getAttribute('id') !== 'searchInput' ? this.togleIsOpenState() : void 0
        this.state.isOpen && e.target.getAttribute('id') !== 'searchInput' ? this.closeSelectStyle() : this.openSelectStyle()
    }

    closeSelectList = (e) => {
        // this.setState({
        //     isOpen: false,
        //     togleClass: 'close'
        // })
        // this.closeSelectStyle()
        let value = this.state.value
        if (value !== "" && !this.state.isOpen) {
            this.setState(prevState => ({
                style: {
                    ...prevState.style,
                    select: {
                        borderRadius: '30px',
                        borderBottom: 'solid 1px #b1a7c8',
                        borderColor: '#1ccee9',
                        zIndex: 1
                    }
                }
            }))
        }
        this.props.getData(e)
    }

    //Togle Select List Items

    togleSelectListItems(e) {
        let value = e.target.getAttribute('value')
        this.togleActiveClass(e, value)
        this.fillSelectedItemsArray(e, value)
    }

    // Search select

    search = () => {
        let input = this.searchInputNameRef.current
        let filter = input.value.toUpperCase()
        let selectList = this.selectListRef.current
        let selectListItems = selectList.getElementsByTagName('div')

        for (let i = 0; i < selectListItems.length; i++) {
            let txtValue = selectListItems[i].innerText
            txtValue.toUpperCase().indexOf(filter) > -1 ? selectListItems[i].style.display = "" : selectListItems[i].style.display = "none"
        }
    }

    setLocationValue = (e) => {
        let region = e.target.parentNode.getElementsByClassName('region')[0].innerText
        let town = e.target.innerText
        this.setState(prevState => ({
            value: `${region}, ${town}`,
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

    setKvedValue = (e) => {
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

    kvedFilter = () => {
        let value = this.searchInputNameRef.current.value.toUpperCase().replace(/\s/, '')
        try {
            let kved = kvedArr.sections
            let found = []
            let foundItems = []

            found = kved.filter(item => {
                let str = (item.code + item.name).toUpperCase().replace(/\s/, '')
                return str.search(value) > 0
            })
            foundItems = found.map(item => { return item.code + ' ' + item.name })
            this.setState({ selectListItems: foundItems })
        }
        catch {

        }
    }

    //Set top for select list

    setTop = () => {
        try {
            let h = this.selectArea.current.offsetHeight
            this.top = h + 'px'

            this.top !== this.state.top ? this.setState({ top: h + 'px' }) : void 0
        }
        catch {}
    }

    componentWillMount() {
        let value = this.props.value
        if (value !== undefined && value !== ", ") {
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
            value: '',
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

                        <path fill="#99abc3" fillRule="evenodd" d="M4.375 5L8.75 0H0z">

                        </path>
                    </svg>
                </div>

                {/* <div className="border" style={this.state.style.border}></div> */}

                {
                    this.props.searchType === 'location' &&
                    <div id="select_list" className={`select_list ${this.state.togleClass}`} style={{ top: this.top }} >
                        <input
                            type="text"
                            placeholder="Пошук..."
                            id="searchInput"
                            key="searchInput"
                            ref={this.searchInputNameRef}
                            onKeyUp={this.search}
                            className="search_input"

                        />
                        <div className="select_list_items" ref={this.selectListRef}>
                            {
                                city.Regions.map((item, index) => {
                                    return <div value='false' id={index} key={index} className="list_item" >

                                        <p className="region">{item.Name}</p>

                                        {item.Cities.map((item, index) => <div value='false' onClick={this.setLocationValue} id={index} key={index} className="sub_list_item" >{item.Name}</div>)}

                                    </div>
                                })
                            }
                        </div>
                    </div>
                }
                {
                    this.props.searchType === 'kved' &&
                    <div id="select_list" className={`select_list ${this.state.togleClass}`} style={{ top: this.top }} >
                        <div className="input_field">
                            <input
                                autoFocus={true}
                                type="search"
                                autoComplete="off"
                                placeholder="Пошук..."
                                id="searchInput"
                                key="searchInputKved"
                                ref={this.searchInputNameRef}
                                onKeyUp={this.kvedFilter}
                                className="search_input"

                            />
                        </div>
                        <div className="select_list_items" ref={this.selectListRef}>
                            {
                                this.state.selectListItems.map((item, index) => <div value='false' onClick={this.setKvedValue} id={index} key={index} className="sub_list_item" >{item}</div>)
                            }
                        </div>
                    </div>
                }
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
)(SearchSelect);