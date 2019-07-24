import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import FilterForm from '../Search/FilterForm/index';
import SearchResult from '../Search/SearchResult/index'
import { wrap } from 'module';
import styles from './style.modules.scss'
import Header from '../themes/common/Header';
class Search extends Component {

  render() {

    return (
      <Fragment>
        <Header className ='menu_fix' fix={false} />
        <div className='short_wrapp' >
          <FilterForm />
          <SearchResult />
        </div>
      </Fragment>
    )
  }
}

export default connect(
  (state) => ({}),
  dispatch => ({})
)(Search);
