import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Redirect } from 'react-router-dom';
// // import * as userActions from '../store/actions/user';
// import { Loader } from './common';
// import links from '../config/links';

class Provider extends Component {
  // static propTypes = {
  //   token: PropTypes.string,
  //   user: PropTypes.object,
  //   userActions: PropTypes.object
  // }

  // componentDidMount () {
  //   // const { token, user, userActions } = this.props;


  // //   if (token && !user.id) {
  // //     userActions.getInfo();
  // //   }
  // }

  render () {
    // const { token, user } = this.props;

    // if (!token) {
    //   return <Redirect to={links.login} />;
    // }

    // if (!user.id || !user.selectedContract) {
    //   return <Loader fullSized size={35} />
    // }

    return (
      <Fragment>
        { this.props.children }
      </Fragment>

    )
  }
}


// export default connect(
//   ({ auth, user }) => ({
//     token: auth.token,
//     user
//   }),
//   dispatch => ({
//     userActions: bindActionCreators(userActions, dispatch)
//   })
// )(Provider);

export default connect(
  (state) => ({ }),
  dispatch => ({ })
)(Provider);