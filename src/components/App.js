import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class App extends Component {

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
)(App);