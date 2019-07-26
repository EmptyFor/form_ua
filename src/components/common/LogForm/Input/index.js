import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Redirect } from 'react-router-dom';
// import links from '../../config/links';
import '../Input/style.modules.scss';

export class Input extends Component {

  static propTypes = {
    token: PropTypes.string,
    error: PropTypes.string,
    authActions: PropTypes.object,
  }

  state = {
    visibillity: 'hidden'
  }
  componentDidMount = () => {
    if(this.props.visiblelabel){
      this.setState({visibillity:'visible'})
    }else{
      this.setState({visibillity:'hidden'})
    }
  }
  render() {
    const { visibillity } = this.state
    // const { token, error, authActions } = this.props;

    // if (token) {
    //   return <Redirect to={links.home} />
    // }


    return (
      <Fragment>
        <input style={this.props.style} maxLength={this.props.maxLength} type={this.props.type} value={this.props.value} className={`form_input ${this.props.className}`} validation={this.props.validation} onChange={this.props.onChange} placeholder={this.props.placeholder} defaultValue={this.props.defValue} onKeyPress={this.props.onKeyPress} pattern={this.props.pattern} name={this.props.name} ></input>
        <label visiblelabel={this.props.visiblelabel} style={{ visibility:visibillity }}>{this.props.label}</label>
      </Fragment>);
  }
}

export default connect(
  (state) => ({}),
  dispatch => ({
    // actions: bindActionCreators(actions, dispatch)
  })
)(Input);