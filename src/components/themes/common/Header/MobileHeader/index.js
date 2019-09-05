import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateAdvertBtn from '../../../../common/CreateAdvertBtn';
import styles from './styles.module.scss';
import main_logo from '../../../../../assets/images/logo@2x.png';
import mobile_logo from '../../../../../assets/images/mobile_logo.svg';
import links from '../../../../../config/links';
import * as actions from '../../../../../store/actions/user';
import { logout } from '../../../../../store/actions/authorise';
import { bindActionCreators } from 'redux';
import { getInfo, getToken } from '../../../../../store/helpers/localStorage';
import { withTranslation } from 'react-i18next';
import i18n from '../../../../../i18n';

class MobileHeader extends Component {


  state = {
    hideMenu: true,
    lang: ''
  }

  componentDidMount = () => {
    const token = getToken();
    const id = getInfo()
    if (token) {
      this.props.actions.getUserId(id)
    }

    if (!localStorage.getItem('localHaste')) {
      this.setState({
        lang: localStorage.getItem('i18nextLng').toUpperCase()
      })
    } else {
      this.setState({
        lang: localStorage.getItem('localHaste').toUpperCase()
      })
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
    this.setState((prevState) => ({ hideMenu: !prevState.hideMenu }));
  }

  setLanguage(language, e) {

    localStorage.setItem('localHaste', language)
    i18n.init({
      lng: localStorage.getItem('localHaste')
    })
    this.setState({
      lang: localStorage.getItem('localHaste').toUpperCase()
    })
    this.handleClose()
  }

  render() {
    const { user, t } = this.props;
    const token = getToken()
    return (
      <header
        className={`menu ${this.props.className} ${this.state.hideMenu && this.props.isTransparent ? styles.close : styles.open}`}
        fix={this.props.fix}
        style={!this.props.isTransparent ? { position: 'relative' } : void 0}
      >
        <Link className={styles.main_logo} to={links.home}>
          <img src={this.state.hideMenu && this.props.isTransparent ? main_logo : mobile_logo} alt="" onClick={this.handleClick}></img>
        </Link>

        <div
          className={styles.hamburger}
          onClick={this.togleMenu}
        >
          <input type="checkbox"></input>
          <span style={this.props.isTransparent && this.state.hideMenu ? { background: '#fff' } : { background: '#207db5' }}></span>
          <span style={this.props.isTransparent && this.state.hideMenu ? { background: '#fff' } : { background: '#207db5' }}></span>
          <span style={this.props.isTransparent && this.state.hideMenu ? { background: '#fff' } : { background: '#207db5' }}></span>
        </div>

        <div className={`${styles.mobile_menu} ${this.state.hideMenu ? styles.close : styles.open}`}>
          <div className={styles.language} id="language">
            <span onClick={this.setLanguage.bind(this, 'ua')}>
              Українська
            </span>
            <span onClick={this.setLanguage.bind(this, 'ru')}>
              Русский
               </span>
            <span className={styles.lang_checkout}>{this.state.lang}</span>
          </div>

          <div className={styles.right_side}>
            {this.props.fix === 'false' ? <CreateAdvertBtn className={styles.create_advert} /> : null}
            <div className={styles.profile}>
              {
                token ? <Link to={links.profile}><p onClick={this.handleClose}>{user.first_name || ""}</p></Link> : <Link to={links.login}><p>{t('login')}</p></Link>
              }

              {
                token && <span onClick={this.handleLogout}>{t('header-logout')}</span>
              }
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default withTranslation()(connect(
  (state) => ({
    token: state.auth.token,
    user: state.usr.user,
    id: state.auth.id,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    logout: bindActionCreators(logout, dispatch)
  })
)(MobileHeader));