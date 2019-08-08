import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/registration';
import { bindActionCreators } from 'redux';
import { RegistrationFirst } from './FirstPage';
import { RegistrationTwice } from './TwicePage';

// import { bindActionCreators } from 'redux';

export default class Registration extends Component {

  render () {
    // TODO: add app global messages here with other global things
    return (
        <Fragment>
        </Fragment>
    //   <Fragment>
    //     { this.props.children }
    //   </Fragment>
    )
  }
}


