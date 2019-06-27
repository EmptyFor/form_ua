import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import links from '../../config/links';
import LogForm from '../common/LogForm';
import { Input } from '../common/Input';
import styles from './style.modules.scss';
import { Button } from '../common/Button';

export class Login extends Component {

  static propTypes = {
    token: PropTypes.string,
    error: PropTypes.string,
    authActions: PropTypes.object,
  }

  render() {
    // const { token, error, authActions } = this.props;

    // if (token) {
    //   return <Redirect to={links.home} />
    // }
    console.log('AAAAAAAAAAAAA')

    return (
      //   <div className={styles.wrapper}>
      //     <div className={styles.container}>
      //       <div className={styles.imageWrapper}>
      //         <img src={logo} alt="logo" />
      //       </div>

      //       {
      //         <LoginForm
      //           onSubmit={authActions.login}
      //           onClearError={authActions.resetError}
      //           error={error}
      //         />
      //       }

      // </div>

      //   </div>



      <div className="login_page">
        <span>Log</span>
        <div className='login_modal_form'>
          <span className="login_form_header">Вхід</span>
          <form>
            <Input placeholder="Електронна адреса"/>
            <Input type='password' placeholder="Пароль" />
            <Button width='340px' text='Увійти' />
          </form>
          <div className="login_form_footer">Ви ще не з нами? &nbsp; <Link to={links.registrationFirst}>Зареєструватися >></Link></div>
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
)(Login);