import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import FilterForm from '../Search/FilterForm/index';
import SearchResult from '../Search/SearchResult/index'

class Search extends Component {

  render () {

    return (
        <Fragment>
        <FilterForm />
        <SearchResult />
        </Fragment>

    )
  }
}

export default connect(
  (state) => ({ }),
  dispatch => ({ })
)(Search);
