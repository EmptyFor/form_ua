import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import links from '../../../config/links';
import { Input } from '../../common/LogForm/Input';
import './style.modules.scss';
import { Button } from '../../common/Button';
import * as regexps from '../../../core/constants/regexp'
import * as actions from '../../../store/actions/registration'
import logo_login from '../../../assets/images/logolog.png'
import { Redirect } from 'react-router-dom';
import { setInfo, setToken } from '../../../store/helpers/localStorage'
import { setAuthData } from '../../../store/actions/authorise'

export class RegistrationTwice extends Component {

    state = {
        email: '',
        password: '',
        confPassword: '',
        validEmail: false,
        validPass: false,
        validConfPass: false,
        visibility: 'hidden',
        borderColor: '',
    }


    handleSubmit = () => {
        const { password, confPassword, email } = this.state;
        const { first_name, phone } = this.props;
        if (password !== confPassword) {
            this.setState({ password: '', confPassword: '', validPass: false, validConfPass: false, borderColor: 'red', visibility: 'visible' })
        } else {
            this.setState({ borderColor: '', visibility: 'hidden' })
        }
        this.props.actions.twicePage(first_name, phone, email, password)
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
        const { email, password, confPassword, validEmail, validPass, validConfPass, visibility, borderColor } = this.state
        const isOk = email.length > 0 && validEmail && password.length > 0 && validPass && confPassword.length > 0 && validConfPass;
        const { first_name, phone } = this.props;

        let disabledColor = '';
        if (first_name !== undefined && phone !== undefined) {
            if ((first_name.length || phone.length) === 0) {
                return <Redirect to={links.registrationFirst} />
            }
        }

        if (this.props.data) {
            const { id, auth_token } = this.props.data.user
            if (auth_token) {
                setInfo(id);
                setAuthData(auth_token);
                setToken(auth_token);
                return <Redirect to={links.profile} />
            }
        }

        !isOk ? disabledColor = '#aeaeae' : disabledColor = '';

        return (
            <div className="login_page">
                <img alt="" src={logo_login}></img>
                <div className='login_modal_form'>
                    <span className="login_form_header">Реєстрація</span>
                    <form className='reg_form'>
                        <div className="input_container email_input">
                            <Input name='email' value={email} onChange={this.handleChange} placeholder="Електронна адреса" />
                        </div>
                        <div className="input_container password_input">
                            <Input style={{ borderColor: borderColor }} name='password' value={password} onChange={this.handleChange} type='password' placeholder="Пароль" />
                        </div>
                        <div className="input_container password_input">
                            <Input style={{ borderColor: borderColor }} name='confPassword' value={confPassword} onChange={this.handleChange} type='password' placeholder="Підтвердити Пароль" />
                        </div>
                        <label className="information_label">Пароль мусить містити не менше ніж 6 символів</label>
                        <label className='reg_label' style={{ visibility: visibility }}>{`Паролі не співпадають. Будь ласка, введіть однaкові паролі`}</label>
                        <Button width='92%' text='Зареєструватись' onClick={this.handleSubmit} back={disabledColor} disabled={!isOk} />

                    </form>
                    <div className="login_form_footer">Вже зареєстровані? &nbsp; <Link to={links.login}> Увійти >></Link></div>
                </div>


            </div>

        );
    }
}

export default connect(
    (state) => ({
        first_name: state.reg.first_name,
        phone: state.reg.phone,
        data: state.reg.data,

    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(RegistrationTwice);
