import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import links from '../../config/links';
// import styles from './styles.module.scss';

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


    <div>
    AAAA
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