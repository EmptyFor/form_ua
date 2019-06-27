import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
// import links from '../../config/links';
import styles from './style.modules.scss';

export class Select extends Component {

    static propTypes = {
        token: PropTypes.string,
        error: PropTypes.string,
        authActions: PropTypes.object,
    }
    state = {
        isOpen: false,
        togleClass: 'close',
        placeholder: this.props.placeholder
    }

    selectItems = [
        'Пункт 1',
        'Пункт 2',
        'Пункт 3',
        'Пункт 4',
        'Пункт 5',
        'Пункт 6'
    ]

    togleSelectList = () => {
        if (this.state.isOpen) {
            this.setState({
                isOpen: false,
                togleClass: 'close'
            })
            document.getElementById('common_select').style.borderRadius = '20px'
        }
        else {
            this.setState({
                isOpen: true,
                togleClass: 'open'
            })
            document.getElementById('common_select').style.borderRadius = '20px 20px 0px 0px'
        }
    }

    togleActiveClass = () => {

    }

    selectItem = (e) => {
        let value = e.target.getAttribute('value')
        this.setState({
            placeholder: e.target.innerText
        })
        value === 'true' ? e.target.setAttribute('value', false) : e.target.setAttribute('value', true)
        value === 'true' ? e.target.classList.remove('active') : e.target.classList.add('active')
        
    }

    render() {
        return (
            <div id="common_select" className="common_select" style={{ width: `${this.props.width}` }}>
                <div id = "selectArea" className = "selectArea" onClick={this.togleSelectList}>
                    <p id = "selectPlaceholder">{this.state.placeholder}</p>
                </div>
                <div id="select_list" className={`select_list ${this.state.togleClass}`} >
                    {
                        this.selectItems.map((item, index) => {
                            return <div value = 'false' onClick={this.selectItem} id={index} className="list_item" >{item}</div>
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
)(Select);