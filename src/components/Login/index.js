import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import links from '../../config/links';
import { Input } from '../common/LogForm/Input';
import './style.modules.scss';
import { Button } from '../common/Button';
import * as actions from '../../store/actions/authorise';
// import * as regexps from '../../core/constants/regexp';
import logo_login from '../../assets/images/logolog.png'

export class Login extends Component {

  state = {
    email: '',
    password: '',
    validMail: true,
    validPass: true,
    message: 'Заповніть будь ласка всі поля',
    borderColor: '',
    visibility: 'hidden',
  }


  handleSubmit = e => {
    const { email, password } = this.state;
    if (email.length === 0 || password.length === 0) {
      this.setState({ message: 'Заповніть будь ласка поля', borderColor: 'red', visibility: 'visible' })
    } else {
      this.props.actions.login(email, password);
      this.setState({ borderColor: '', visibility: 'hidden' })
    }
  }

  handleEnter = e => {
    if (e.key === 'Enter') {
      return this.handleSubmit()
    }
  }

  handleChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({ [name]: value });
  }


  render() {
    const { email, password, borderColor, message, visibility } = this.state;
    const { token, error } = this.props;
    let errClass = '';
    if (error) {
      errClass = 'error'
    }

    if (token) {
      return <Redirect to={links.home} />
    }
    return (
      <div className="login_page">
        <Link to={links.home}><img alt="" src={logo_login}></img></Link>
        <div className={`login_modal_form ${errClass}`} style={{ borderColor: borderColor }}>
          <span className="login_form_header">Вхід</span>
          <form ref='logForm' onKeyPress={this.handleEnter} >
            <div className="input_container email_input">
              <Input style={{ borderColor: borderColor }} label='Будь ласка, введіть e-mail' visibleLabel={false} placeholder="Електронна адреса" value={email} onChange={this.handleChange} name="email" />
            </div>
            <div className="input_container password_input">
              <Input style={{ borderColor: borderColor }} label='Будь ласка, введіть пароль' visibleLabel={false} type='password' placeholder="Пароль" value={password} onChange={this.handleChange} name="password" className="password_input" />
            </div>
            {error ? <label className="err_label">Неправильно введений логін або пароль!</label> : <label style={{ visibility: visibility }}>{message}</label>}
            <Button width='92%' text='Увійти' onClick={this.handleSubmit} />
          </form>
          <div className="login_form_footer">Ви ще не з нами? &nbsp; <Link to={links.registrationFirst}>Зареєструватися >></Link></div>
        </div>
      </div>

    );
  }
}

export default connect(
  (state) => ({
    token: state.auth.token,
    error: state.auth.error,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Login);