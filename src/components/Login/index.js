import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import links from '../../config/links';
import { Input } from '../common/LogForm/Input';
import './style.modules.scss';
import './style.modules.media.scss';
import { Button } from '../common/Button';
import * as actions from '../../store/actions/authorise';
import logo_login from '../../assets/images/logolog.png'
import { withTranslation } from 'react-i18next';

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
    const { token, error, t } = this.props;
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
          <span className="login_form_header">{t('login-form-header')}</span>
          <form ref='logForm' onKeyPress={this.handleEnter} >
            <div className="input_container email_input">
              <Input style={{ borderColor: borderColor }} label={t('login-empty-error-email')} visibleLabel={false} placeholder={t('login-placeholder-email')} value={email} onChange={this.handleChange} name="email" />
            </div>
            <div className="input_container password_input">
              <Input style={{ borderColor: borderColor }} label={t('login-empty-error-password')} visibleLabel={false} type='password' placeholder={t('login-placeholder-password')} value={password} onChange={this.handleChange} name="password" className="password_input" />
            </div>
            {error ? <label className="err_label">{t('login-error-label')}</label> : <label style={{ visibility: visibility }}>{message}</label>}
            <span className='span_btn'><Button width='100%' text={t('login')} onClick={this.handleSubmit} /></span>
          </form>
          <div className="login_form_footer">{t('login-form-footer')} &nbsp; <Link to={links.registrationFirst}>{t('registration')} >></Link></div>
        </div>
      </div>

    );
  }
}

export default withTranslation()(connect(
  (state) => ({
    token: state.auth.token,
    error: state.auth.error,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Login));