import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import links from '../../config/links';
import * as actions from '../../store/actions/authorise';
import Header from '../themes/common/Header';
import './style.modules.scss';
import CreateAdvertBtn from '../common/CreateAdvertBtn';


export class Profile extends Component {

  state = {}

  render() {

    return (
      <Fragment>
        <Header className='menu_fix' fix={true}/>
        <div className="profile_wrapper">
          <div className="profile_list" >
          <div className='profile_list_header'><span>Мої оголошення </span><span className=''><CreateAdvertBtn className="profile_create_advert_btn"/></span></div>
          </div>
          <div className="profile_info" >
          <div className='profile_list_header info_head'><span>Особисті дані </span></div>
          <div className="profile_info_main_contain ">
              <span style={{fontWeight:'bold',fontSize:'25px'}}>Name Profile</span>
              <span style={{marginBlockEnd:'5%'}}>number</span>
              <span style={{marginBlockEnd:'5%'}}>email</span>
            </div>
          </div>
        </div>
      </Fragment>
      );
  }
}

export default connect(
  ({ }) => ({
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Profile);