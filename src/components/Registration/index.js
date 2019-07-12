import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/registration';
import { bindActionCreators } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';
import { RegistrationFirst } from './FirstPage';
import { RegistrationTwice } from './TwicePage';

// import { bindActionCreators } from 'redux';

class Registration extends Component {

  render () {
    // TODO: add app global messages here with other global things
    console.log(this)
    return (
        <Fragment>
        </Fragment>
    //   <Fragment>
    //     { this.props.children }
    //   </Fragment>
    )
  }
}

export default connect(
  (state) => ({ }),
  dispatch => ({ 
    actions: bindActionCreators(actions, dispatch)
  })
)(Registration);
