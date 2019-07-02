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


export class RegistrationTwice extends Component {

    state = {
        email: '',
        password: '',
        confPassword: '',
        validEmail: false,
        validPass: false,
        validConfPass: false,
        validConfirmation: true,
        borderColor: '',

    }

    handleSubmit = e => {
        const { email, password, confPassword } = this.state
        if (password !== confPassword) {
            this.setState({ password: '', confPassword: '', borderColor: 'red', validConfirmation:true  })

        }
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });

        if (regexps.log_mail.test(e.currentTarget.value)) {
            this.setState({ validEmail: true });
        }
        if (regexps.log_pass.test(e.currentTarget.value)) {
            this.setState({ validPass: true });
        }
        if (regexps.log_pass.test(this.state.confPassword)) {
            this.setState({ validConfPass: true });
        }
    }

    render() {
        const { email, password, confPassword, validEmail, validPass, validConfPass, validConfirmation,borderColor } = this.state
        const isOk = email.length > 0 && validEmail && password.length > 0 && validPass && confPassword.length > 0 && validConfPass;
        let disabledColor = '';
        !isOk ? disabledColor = '#aeaeae' : disabledColor = '';

        return (
            <div className="login_page">
                <span>Log</span>
                <div className='login_modal_form'>
                    <span className="login_form_header">Реєстрація</span>
                    <form>
                        <Input name='email' value={email} onChange={this.handleChange} placeholder="Електронна адреса" />
                        <Input style={{ borderColor: borderColor }} name='password' value={password} onChange={this.handleChange} type='password' placeholder="Пароль" />
                        <Input style={{ borderColor: borderColor }} name='confPassword' visibleLabel={!validConfirmation} label='Паролі не співпадають. Будь ласка, введіть однікові паролі' value={confPassword} onChange={this.handleChange} type='password' placeholder="Підтвердити Пароль" />
                        <Button width='340px' text='Зареєструватись' onClick={this.handleSubmit} back={disabledColor} disabled={!isOk} />

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
        // actions: bindActionCreators(actions, dispatch)
    })
)(RegistrationTwice);