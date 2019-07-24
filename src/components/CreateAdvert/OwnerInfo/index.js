import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from '../../common/Input';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/';
import styles from './style.modules.scss'

export class OwnerInfo extends Component {

    static propTypes = {}

    phoneInputArr = []

    state = {
        input: [this.phoneInput]
    }

    appendPhoneInput = () => {
        this.phoneInputArr.push(
            <Input
                type={'phone'}
                placeholder="+ 38 (0 _ _ )  _ _ _  -  _ _  -  _ _"
                width="100%"
                className="input"
                autocorrect="off"
                autocapitalize="off"
                pattern="^\+\d{2} \(\d{3}\) \d{3}-\d{2}-\d{2}$"
                minlength="19"
                name="phone"
                id={`ca_phone_input_${this.phoneInputArr.length}`}
            />)
        this.setState({
            input: this.phoneInputArr
        })
    }

    render() {

        return (
            <div className="owner_info">
                <div className="title" >
                    <span>2</span>
                    <h1>Положення згідно законодавства</h1>
                </div>

                <div className="first_position grid_right_column">
                    <p className="subtitle">ПІБ власника/юридичної особи:<span>*</span></p>
                    <Input placeholder="Введіть прізвище ім’я та по-батькові власника" width="100%" className="input" />
                </div>

                <div className="second_position grid_left_column">
                    <p className="subtitle">Контактний номер телефону:<span>*</span></p>
                    <Input
                        type={'phone'}
                        placeholder="+ 38 (0 _ _ )  _ _ _  -  _ _  -  _ _"
                        width="100%"
                        className="input"
                        autocorrect="off"
                        autocapitalize="off"
                        pattern="^\+\d{2} \(\d{3}\) \d{3}-\d{2}-\d{2}$"
                        minlength="19"
                        name="phone"
                        id="ca_phone_input_0"
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
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(OwnerInfo);