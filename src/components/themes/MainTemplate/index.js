import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Header } from '../common';
// import styles from './styles.module.scss';

class MainTemplate extends Component {

  static propTypes = {}

  render() {
    return (
      <div >
        <div >
          { this.props.children }
        </div>

      </div>

    );
  }
}

export default MainTemplate;
