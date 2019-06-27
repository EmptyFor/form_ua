import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
// import links from '../../config/links';
import styles from './style.modules.scss';

export class Input extends Component {

  static propTypes = {
    token: PropTypes.string,
    error: PropTypes.string,
    authActions: PropTypes.object,
  }

  render() {
    return (
    <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} onChange={this.props.onChange} value={this.props.value} defaultValue={this.props.defValue} pattern={this.props.pattern} className="form_input"></input>
    );
  }
}    

export default connect(
    (state) => ({}),
    dispatch => ({
    })
  )(Input);