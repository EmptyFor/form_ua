import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input } from '../../common/Input';
import * as actions from '../../../store/actions/advert';
import './style.modules.scss'
import './style.modules.media.scss'

export class OwnerInfo extends Component {

    static propTypes = {}

    phoneInputArr = []
    tel = []

    state = {
        input: [this.phoneInput],
        owner_data: '',
        tel: [""]
    }

    //Append phone input

    appendPhoneInput = () => {
        let lastInput = document.getElementById(`ca_phone_input_${this.phoneInputArr.length}`)
        if (lastInput.value.length === 24) {
            this.phoneInputArr.push(
                <Input
                    type='phone'
                    placeholder="+ 38 (0 _ _ )  _ _ _  -  _ _  -  _ _"
                    width="100%"
                    className="input"
                    name="tel"
                    id={`ca_phone_input_${this.phoneInputArr.length + 1}`}
                    key={`ca_phone_input_${this.phoneInputArr.length + 1}`}
                    getData={this.setOwnerInfoData}
                    clear={this.props.clear}
                />)
            this.setState({
                input: this.phoneInputArr
            })
        }
    }

    //Send data to redux store

    setOwnerInfoData = (e) => {
        let name = e.target.name
        let value = e.target.value
        let id = e.target.id.replace('ca_phone_input_', "")

        this.props.actions.clearAllInfo(false)

        if (name === 'tel') {
            this.tel[id] = value
            value = this.tel
            this.setState({ tel: value })
        }
        else if (name === 'owner_data') {
            this.setState({ owner_data: value })
        }
    }

    sendOwnerInfoData = () => {
        const { owner_data, tel } = this.state
        this.props.actions.setOwnerInfo(owner_data, tel)
    }

    clearState = () => {
        this.phoneInputArr = []
        this.tel = [""]
        this.setState({
            input: this.phoneInputArr,
            tel: this.tel,
            owner_data: ''
        })
    }

    clearValue = () => {
        this.clearState()
        const { owner_data, tel } = this.state
        this.props.actions.setOwnerInfo(owner_data, tel)
    }

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.clearValue() : void 0
        this.props.actions.clearAllInfo(false)
    }

    render() {
        this.sendOwnerInfoData()
        console.log(this.props)
        return (
            <div className="owner_info">
                <div className="title" >
                    <span>3</span>
                    <h1>Дані про власника</h1>
                </div>

                <div className="first_position grid_left_column">
                    <p className="subtitle">ПІБ власника/юридичної особи:<span>*</span></p>
                    <Input
                        placeholder="Введіть прізвище ім’я та по-батькові власника"
                        width="100%"
                        className="input"
                        name="owner_data"
                        getData={this.setOwnerInfoData}
                        clear={this.props.clear}
                        required={true}
                    />
                </div>

                <div className="second_position grid_right_column">
                    <p className="subtitle">Контактний номер телефону:<span>*</span></p>
                    <Input
                        type='phone'
                        placeholder="+ 38 (0 _ _ )  _ _ _  -  _ _  -  _ _"
                        width="100%"
                        className="input"
                        name="tel"
                        id="ca_phone_input_0"
                        key="ca_phone_input_0"
                        getData={this.setOwnerInfoData}
                        clear={this.props.clear}
                        required={true}
                    />
                    {this.state.input.map(item => { return item })}
                    <label className="append_phone" onClick={this.appendPhoneInput}>
                        Додати телефон
                        <span></span>
                    </label>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        owner_data: state.advert.owner_data,
        tel: state.advert.tel,
        clear: state.advert.clear
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(OwnerInfo);