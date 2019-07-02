import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import links from '../../../config/links';
import { Input } from '../../common/LogForm/Input';
import styles from './style.modules.scss';
import { Button } from '../../common/Button';
import * as regexps from '../../../core/constants/regexp'

export class RegistrationFirst extends Component {

    state = {
        login: '',
        phone: '',
        validLogin: false,
        validPhone: false,
    };

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
        const { login, phone, validLogin, validPhone } = this.state;
        const isOk = login.length > 0 && validLogin && phone.length > 0 && validPhone;
        let disabledColor = '';
        !isOk ? disabledColor = '#aeaeae' : disabledColor = '';
        return (

            <div className="login_page">
                <span>Log</span>
                <div className='login_modal_form'>
                    <span className="login_form_header">Реєстрація</span>
                    <form>
                        <Input name='login' value={login} onChange={this.handleChange} placeholder="Прізвище Ім'я або Назва компанії" maxlength='30'/>
                        <Input name='phone' value={phone} onChange={this.handleChange} type='tel' placeholder="+38(0_ _) - _ _ _ - _ _ - _ _" maxlength='13'/>
                        <Link to={links.registrationTwice}><Button width='340px' back={disabledColor} text='Далі' disabled={!isOk} /></Link>
                    </form>
                    <div className="login_form_footer">Вже зареєстровані? &nbsp; <Link to={links}> Увійти >></Link></div>
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
)(RegistrationFirst);