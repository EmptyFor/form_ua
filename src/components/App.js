import React, { Component, Fragment, Suspense  } from 'react';
import { connect } from 'react-redux';
import { Footer } from './Footer';
// import { bindActionCreators } from 'redux';

class App extends Component {

  render() {
    // TODO: add app global messages here with other global things

    return (
      <Suspense fallback="loading">
          {this.props.children}

          <Footer />
      </Suspense>
      //   <Fragment>
      //     { this.props.children }
      //   </Fragment>
    )
  }
}

export default connect(
  (state) => ({}),
  dispatch => ({})
)(App);
