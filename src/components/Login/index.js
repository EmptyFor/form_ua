import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import links from '../../config/links';
import { Input } from '../common/LogForm/Input';
import styles from './style.modules.scss';
import { Button } from '../common/Button';
import * as authActions from '../../store/actions/authorise';
import * as regexps from '../../core/constants/regexp'
export class Login extends Component {

  // static propTypes = {
  //   token: PropTypes.string,
  //   error: PropTypes.string,
  //   authActions: PropTypes.object,
  // }
  state = {
    email: '',
    password: '',
    validMail: true,
    validPass: true,
    classMail: '',
    classPass: '',
    message: 'Confirm'
  }
  handleValid = e => {

  }

  handleSubmit = e => {
    const { email, password, validMail, validPass } = this.state;
    console.log(this.state);
    // if(validMail && validPass){
    //   this.props.authActions.login(email, password)
    // }

  }
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    if (!regexps.log_mail.test(e.target.value)) {
      this.setState({ validMail: false });
    }
    if (!regexps.log_pass.test(e.target.value)) {
      this.setState({ validPass: false });
    }
  }


  render() {
    // const { token, error, authActions } = this.props;
    const { email, password, message } = this.state
    // if (token) {
    //   return <Redirect to={links.home} />
    // }
    // console.log(this.props)
    return (

      <div className="login_page">
        <span>Log</span>
        <div className='login_modal_form'>
          <span className="login_form_header">Вхід</span>
          <form ref='logForm'>
            <Input visibleLabel={true} label={message} placeholder="Електронна адреса" value={email} onChange={this.handleChange} name="email" />
            <Input visibleLabel={true} label={message} type='password' placeholder="Пароль" value={password} onChange={this.handleChange} name="password" />
            <Button width='340px' text='Увійти' onClick={this.handleSubmit} />
          </form>
          <div className="login_form_footer">Ви ще не з нами? &nbsp; <Link to={links.home}>Зареєструватися >></Link></div>
        </div>
      </div>

    );
  }
}

export default connect(
  ({ token, error }) => ({
    token,
    error
  }),
  dispatch => ({
    authActions: bindActionCreators(authActions, dispatch)
  })
)(Login);