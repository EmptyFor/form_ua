import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Footer } from './Footer';
// import { bindActionCreators } from 'redux';

class App extends Component {

<<<<<<< HEAD
  render() {
    // TODO: add app global messages here with other global things

    return (
      <Fragment>
        {this.props.children}

        <Footer />
      </Fragment>
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
=======
    render() {
        // TODO: add app global messages here with other global things

        return (< Fragment >
            {this.props.children}

            <Footer />
        </Fragment>

        )
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({})
)(App);
>>>>>>> ce341cd18eeaf8abb768b7bd5495ac23d22396fc
