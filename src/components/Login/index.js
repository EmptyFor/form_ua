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
    validMail: false,
    validPass: false,
    message: 'Неправильно введений логін або пароль',
    borderColor: '',
    visibility: 'hidden'

  }

  handleSubmit = e => {
    const { email, password, validMail, validPass, borderColor } = this.state;
    console.log(this.state);
    // email.length === 0 ? this.setState({ checkLengthMail: this.state.checkLengthMail = true }) :
    //   password.length === 0 ? this.setState({ checkLengthPass: this.state.checkLengthPass = true }) 
    if(!(validMail && validPass) ){
      this.setState({ borderColor: 'red', visibility: 'visible' })
    } else{
      this.setState({ borderColor: '', visibility: 'hidden' })
      this.props.authActions.login(email, password);
    }
      
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    console.log('test', regexps.log_mail.test(e.target.value))
    if (regexps.log_mail.test(e.target.value)) {
      console.log('111112')
      this.setState({ validMail: true });
    }
    if (regexps.log_pass.test(e.target.value)) {
      this.setState({ validPass: true });
    }
    // if (!(regexps.log_pass.test(e.target.value) && regexps.log_mail.test(e.target.value))) {
    //   this.setState({ validPass: false, validMail: false });
    // }
    console.log(this.state);
  }


  render() {
    // const { token, error, authActions } = this.props;
    const { email, password, message, borderColor, visibility } = this.state

    // if (token) {
    //   return <Redirect to={links.home} />
    // }
    // console.log(this.props)
    return (

      <div className="login_page">
        <span>Log</span>
        <div className='login_modal_form' style={{ borderColor: borderColor }}>
          <span className="login_form_header">Вхід</span>
          <form ref='logForm' >
            <Input style={{ borderColor: borderColor }} label='Будь ласка, введіть e-mail' visibleLabel={false} placeholder="Електронна адреса" value={email} onChange={this.handleChange} name="email" />
            <Input style={{ borderColor: borderColor }} label='Будь ласка, введіть пароль' visibleLabel={false} type='password' placeholder="Пароль" value={password} onChange={this.handleChange} name="password" />
            <label style={{ visibility: visibility }}>{message}</label>
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