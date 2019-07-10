import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Footer } from './Footer';
import * as actions from '../../store/actions/registration';
import { bindActionCreators } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';

// import { bindActionCreators } from 'redux';

class Registration extends Component {

  render () {
    // TODO: add app global messages here with other global things
    // console.log(this.props)
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
  dispatch => ({ 
    // actions: bindActionCreators(actions, dispatch)
  })
)(Registration);
