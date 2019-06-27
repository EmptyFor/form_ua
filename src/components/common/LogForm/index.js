// // import React, { Component } from 'react';
// // import PropTypes from 'prop-types';
// // import { connect } from 'react-redux';
// // import { bindActionCreators } from 'redux';
// // import { Redirect } from 'react-router-dom';
// // // import links from '../../config/links';
// // // import styles from './styles.module.scss';

// // export class Login extends Component {

// //   static propTypes = {
// //     token: PropTypes.string,
// //     error: PropTypes.string,
// //     authActions: PropTypes.object,
// //   }

// //   render() {
// //     // const { token, error, authActions } = this.props;

// //     // if (token) {
// //     //   return <Redirect to={links.home} />
// //     // }
// //     console.log('AAAAAAAAAAAAA')

// //     return (
// //     //   <div className={styles.wrapper}>
// //     //     <div className={styles.container}>
// //     //       <div className={styles.imageWrapper}>
// //     //         <img src={logo} alt="logo" />
// //     //       </div>

// //     //       {
// //     //         <LoginForm
// //     //           onSubmit={authActions.login}
// //     //           onClearError={authActions.resetError}
// //     //           error={error}
// //     //         />
// //     //       }

// //         // </div>

// //     //   </div>


// //     <div>
// //     AAAA
// //     </div>
// //     );
// //   }
// // }    

// // export default connect(
// //     (state) => ({}),
// //     dispatch => ({
// //       // actions: bindActionCreators(actions, dispatch)
// //     })
// //   )(Login);

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link, NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Redirect } from 'react-router-dom';
// import styles from './style.modules.scss';


// export class Form extends Component {
//   render() {
//     return (
 



//       <div className="login_page">
//         <span>{this.props.formLogo}</span>
//         <div className='login_modal_form'>
//           <span className="login_form_header">{this.props.formHeader}</span>
//           <form>
//           </form>
//           <div className="login_form_footer">{this.props.formFooter}</div>
//         </div>


//       </div>

//     );
//   }
// }

// export default connect(
//   (state) => ({}),
//   dispatch => ({
//     // actions: bindActionCreators(actions, dispatch)
//   })
// )(Form);