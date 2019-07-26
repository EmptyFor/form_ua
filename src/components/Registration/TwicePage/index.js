import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import links from '../../../config/links';
import { Input } from '../../common/LogForm/Input';
import './style.modules.scss';
import { Button } from '../../common/Button';
import * as regexps from '../../../core/constants/regexp'
// import * as actions from '../../../store/actions/registration'
import logo_login from '../../../assets/images/logolog.png'

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

    handleSubmit = e => {
        const { password, confPassword } = this.state
        if (password !== confPassword) {
            this.setState({ password: '', confPassword: '', validPass: false, validConfPass: false, borderColor: 'red', visibility: 'visible' })
        } else {
            this.setState({ borderColor: '', visibility: 'hidden' })
            //action
        }
    }

    handleChange = e => {
        // const { password, confPassword } = this.state
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
        let disabledColor = '';
        !isOk ? disabledColor = '#aeaeae' : disabledColor = '';
        console.log(this.props);
        return (
            <div className="login_page">
                <img alt="" src={logo_login}></img>
                <div className='login_modal_form'>
                    <span className="login_form_header">Реєстрація</span>
                    <form className='reg_form'>
                        <Input name='email' value={email} onChange={this.handleChange} placeholder="Електронна адреса" />
                        <Input style={{ borderColor: borderColor }} name='password' value={password} onChange={this.handleChange} type='password' placeholder="Пароль" />
                        <Input style={{ borderColor: borderColor }} name='confPassword' value={confPassword} onChange={this.handleChange} type='password' placeholder="Підтвердити Пароль" />
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
    (state) => ({}),
    // dispatch => ({
    //     actions: bindActionCreators(actions, dispatch)
    // })
)(RegistrationTwice);
