import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateAdvertBtn from '../../../../common/CreateAdvertBtn';
import styles from './styles.module.scss';
import './style.modules.media.scss';
import main_logo from '../../../../../assets/images/logo@2x.png';
import mobile_logo from '../../../../../assets/images/mobile_logo.svg';
import links from '../../../../../config/links';
import * as actions from '../../../../../store/actions/user';
import { logout } from '../../../../../store/actions/authorise';
import { bindActionCreators } from 'redux';
import { getInfo, getToken } from '../../../../../store/helpers/localStorage';
import { Redirect } from 'react-router-dom';

class MobileHeader extends Component {


  state = {
    isOpen: false,
    hideMenu: true,
  }

  componentDidMount = () => {
    const token = getToken();
    const id = getInfo()
    if (token) {
      this.props.actions.getUserId(id)
    }
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  handleLogout = () => {
    this.handleClose()
    this.props.logout();
  }

  openDropdown = () => {
    if (this.state.isOpen === true) {
      return this.handleClose()
    } else {
      return this.setState({ isOpen: true })
    }

  }

  togleMenu = () => {
    this.setState((prevState) => ({ hideMenu: !prevState.hideMenu }))
  }


  render() {
    const { user } = this.props;
    const { isOpen } = this.state;
    const token = getToken()

    return (
      <header className={`menu ${this.props.className} ${this.state.isTransparent && this.props.isMobile  ? styles.close : styles.open}`} fix={this.props.fix}>
        <Link className={styles.main_logo} to={links.login}>
          <img src={this.state.isTransparent && this.props.isMobile ? main_logo : mobile_logo} alt="" onClick={this.handleClick}></img>
        </Link>

        <div
          className={styles.hamburger}
          onClick={this.togleMenu}
        >
          <input type="checkbox"></input>
          <span style = {this.props.isTransparent && {background : '#fff'}}></span>
          <span style = {this.props.isTransparent && {background : '#fff'}}></span>
          <span style = {this.props.isTransparent && {background : '#fff'}}></span>
        </div>

        <div className={`${styles.mobile_menu} ${this.state.hideMenu ? styles.close : styles.open}`}>
          <div className={styles.language} id="language">
            <p>
              Українська
            </p>
          </div>

          <div className={styles.right_side}>
            {this.props.fix === 'false' ? <CreateAdvertBtn className={styles.create_advert} /> : null}
            <div className={styles.profile}>
              {
                token ? <Link to={links.profile}><p onClick={this.handleClose}>{user.first_name || ""}</p></Link> : <Link to={links.login}><p>Увійти</p></Link>
              }

              {
                token && <span onClick={this.handleLogout}>Вийти</span>
              }
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default connect(
  (state) => ({
    token: state.auth.token,
    user: state.usr.user,
    id: state.auth.id,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    logout: bindActionCreators(logout, dispatch)
  })
)(MobileHeader);