import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Footer } from './Footer';
// import { bindActionCreators } from 'redux';

class Registration extends Component {

  render () {
    // TODO: add app global messages here with other global things

    return (
        <Fragment>
        { this.props.children }
        </Fragment>
    //   <Fragment>
    //     { this.props.children }
    //   </Fragment>
    )
  }
}

export default connect(
  (state) => ({ }),
  dispatch => ({ })
)(Registration);
