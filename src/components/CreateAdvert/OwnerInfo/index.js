import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input } from '../../common/Input';
import * as actions from '../../../store/actions/advert';
import styles from './style.modules.scss'

export class OwnerInfo extends Component {

    static propTypes = {}

    phoneInputArr = []
    phoneNumbers = []

    state = {
        input: [this.phoneInput],
        ownerName: '',
        phoneNumbers: [""]
    }

    //Append phone input

    appendPhoneInput = () => {
        this.phoneInputArr.push(
            <Input
                type='phone'
                placeholder="+ 38 (0 _ _ )  _ _ _  -  _ _  -  _ _"
                width="100%"
                className="input"
                name="phoneNumbers"
                id={this.phoneInputArr.length+1}
                key={`ca_phone_input_${this.phoneInputArr.length+1}`}
                getData={this.sendOwnerInfoData}
            />)
        this.setState({
            input: this.phoneInputArr
        })
    }

    //Send data to redux store

    sendOwnerInfoData = (e) => {
        const {ownerName, phoneNumbers} = this.state

        let name = e.target.name
        let value = e.target.value
        let id = e.target.id

        if (name === 'phoneNumbers' && value.length === 24) {
            this.phoneNumbers[id] = value
            value = this.phoneNumbers
            this.setState({ phoneNumbers: value })
        }
        else if (name === 'ownerName') {
            this.setState({ ownerName: value })
        }

        ownerName && phoneNumbers[0].length == 24 ? this.props.actions.setOwnerInfo(ownerName, phoneNumbers) : void 0

    }

    render() {
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
                        name="ownerName"
                        getData={this.sendOwnerInfoData}
                    />
                </div>

                <div className="second_position grid_right_column">
                    <p className="subtitle">Контактний номер телефону:<span>*</span></p>
                    <Input
                        type='phone'
                        placeholder="+ 38 (0 _ _ )  _ _ _  -  _ _  -  _ _"
                        width="100%"
                        className="input"
                        autocorrect="off"
                        autocapitalize="off"
                        pattern="^\+\d{2} \(\d{3}\) \d{3}-\d{2}-\d{2}$"
                        minlength="19"
                        name="phoneNumbers"
                        id={0}
                        key="ca_phone_input_0"
                        getData={this.sendOwnerInfoData}
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
        ownerName: state.advert.ownerName,
        phoneNumbers: state.advert.phoneNumbers
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(OwnerInfo);