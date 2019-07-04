import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import styles from '../FilterForm/style.modules.scss';
class FilterForm extends Component {

  render () {

    return (
        <div className="filter_form">
          <div className="filter_header">Загальні параметри пошуку</div>
        </div>

    )
  }
}

export default connect(
  (state) => ({ }),
  dispatch => ({ })
)(FilterForm);