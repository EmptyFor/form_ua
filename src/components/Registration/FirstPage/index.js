import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputMask from 'react-input-mask';
import links from '../../../config/links';
import { Input } from '../../common/LogForm/Input';
import './style.modules.scss';
import { Button } from '../../common/Button';
import * as regexps from '../../../core/constants/regexp'
import * as actions from '../../../../src/store/actions/registration';
import logo_login from '../../../assets/images/logolog.png'
export class RegistrationFirst extends Component {

    state = {
        first_name: '',
        phone: '',
        validLogin: false,
        validPhone: false,
    };

    handleSubmit = () => {
        const { first_name, phone } = this.state;
        this.props.actions.firstPage(first_name, phone)
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
        if (regexps.reg_name.test(e.target.value)) {
            this.setState({ validLogin: true });
        }
        if (regexps.reg_phone.test(e.target.value)) {
            this.setState({ validPhone: true });
        }
    };

    render() {
        const { first_name, phone, validLogin, validPhone } = this.state;

        const isOk = first_name.length > 0 && validLogin && phone.length > 0 && validPhone;
        let disabledColor = '';
        !isOk ? disabledColor = '#aeaeae' : disabledColor = '';

        return (

            <div className="login_page">
                <img alt="" src={logo_login}></img>
                <div className='login_modal_form'>
                    <span className="login_form_header">Реєстрація</span>
                    <form>
                        <div className="input_container user_input">
                            <Input name='first_name' value={first_name} onChange={this.handleChange} placeholder="Прізвище Ім'я або Назва компанії" maxLength='30' />
                        </div>
                        <div className="input_container phone_input">
                            <Input type='phone' placeholder="+ 38 (0 _ _ )  _ _ _  -  _ _  -  _ _" name='phone' value={phone} onChange={this.handleChange} className="form_input" maxLength='13' />
                        </div>
                        <Link to={links.registrationTwice} className="common_btn_link"><Button width='92%' back={disabledColor} onClick={this.handleSubmit} text='Далі' disabled={!isOk} /></Link>
                    </form>
                    <div className="login_form_footer">Вже зареєстровані? &nbsp; <Link to={links.login}> Увійти >></Link></div>
                </div>


            </div>

        );
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(RegistrationFirst);
