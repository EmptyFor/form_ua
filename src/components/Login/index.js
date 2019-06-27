import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import links from '../../config/links';
import { Input } from '../common/Input';
import styles from './style.modules.scss';
import { Button } from '../common/Button';
import * as authActions from '../../store/actions/authorise';
export class Login extends Component {

  // static propTypes = {
  //   token: PropTypes.string,
  //   error: PropTypes.string,
  //   authActions: PropTypes.object,
  // }
  state = {
    email: '',
    password: ''
  }

  handleSubmit = e => {
    const { email, password } = this.state
    this.props.authActions.login(email, password)
  }
  handleChange = e => {
    e.preventDefault();
    if (e.target.name === 'log_mail') { this.setState({ email: e.currentTarget.value }) }
    if (e.target.name === 'log_pass') { this.setState({ password: e.currentTarget.value }) }
  }



  render() {
    // const { token, error, authActions } = this.props;

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
            <Input placeholder="Електронна адреса" onChange={this.handleChange} name="log_mail" />
            <Input type='password' placeholder="Пароль" onChange={this.handleChange} name="log_pass" />
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