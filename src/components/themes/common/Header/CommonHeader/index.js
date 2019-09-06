import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateAdvertBtn from '../../../../common/CreateAdvertBtn';
import styles from './styles.module.scss';
import './style.modules.media.scss';
import main_logo from '../../../../../assets/images/logo@2x.png';
import links from '../../../../../config/links';
import * as actions from '../../../../../store/actions/user'
import { logout } from '../../../../../store/actions/authorise'
import { bindActionCreators } from 'redux';
import { getInfo, getToken } from '../../../../../store/helpers/localStorage'
import { withTranslation } from 'react-i18next';
import i18n from '../../../../../i18n';


class CommonHeader extends Component {

  constructor() {
    super();
    this._localisation = React.createRef();
    this._profile = React.createRef();

  }


  state = {
    isOpen: false,
    isOpenLang: false,
    lang: ''
  }

  componentDidMount = () => {

    i18n.init({
      lng: localStorage.getItem('localHaste')
    })

    if (localStorage.getItem('i18nextLng') === 'ru') {
      this.setState({
        lang: "Русский"
      })
    }
    if(localStorage.getItem('i18nextLng') === 'ua'){
      this.setState({
        lang: "Українська"
      })
    }
      const token = getToken();
    const id = getInfo()
    if (token) {
      this.props.actions.getUserId(id)
    }
  }

  setLanguage(language, e) {
    this.setState({
      lang: e.target.innerHTML
    })
    localStorage.setItem('localHaste', language)
    i18n.init({
      lng: localStorage.getItem('localHaste')
    })
    this.handleClose()
  }

  handleClose = (e) => {
    if (this._profile.current) {
      this.setState({ isOpen: false })
    }
    if (this._localisation.current) {
      this.setState({ isOpenLang: false })
    }
  }

  handleLogout = () => {
    this.handleClose()
    this.props.logout();
  }

  openDropdown = (e) => {


    if (e.currentTarget === this._profile.current) {
      if (this.state.isOpen === true) {
        return this.handleClose()
      } else {
        return this.setState({ isOpen: true })
      }
    }

    if (e.currentTarget === this._localisation.current) {
      if (this.state.isOpenLang === true) {
        return this.handleClose()
      } else {
        return this.setState({ isOpenLang: true })
      }
    }

  }


  render() {
    const { user } = this.props;
    const { isOpen, isOpenLang } = this.state;
    const { t } = this.props;
    const token = getToken()

    return (
      <header className={`menu ${this.props.className}`} fix={this.props.fix}>
        <div className={styles.language} id="language">
          <p ref={this._localisation} onClick={this.openDropdown} style={{ cursor: 'pointer' }}>
            {this.state.lang}
          </p>
          {isOpenLang ? <div className={styles.language_dropdown}>
            <span onClick={this.setLanguage.bind(this, 'ua')}>Українська</span>
            <span onClick={this.setLanguage.bind(this, 'ru')}>Русский</span>
          </div> : null
          }
        </div>
        <Link className={styles.main_logo} to={links.home}>
          <img src={main_logo} alt="" onClick={this.handleClick}></img>
        </Link>

        <div className={styles.right_side}>
          {this.props.fix === 'false' ? <CreateAdvertBtn className={styles.create_advert} /> : null}
          <div className={styles.profile}>
            {
              token ? <p ref={this._profile} onClick={this.openDropdown}>{user.first_name || ""}</p> : <Link to={links.login}><p ref={this._profile}>{t('login')}</p></Link>
            }

            {isOpen ? <div className={styles.profile_dropdown}>
              <Link to={links.profile}><span onClick={this.handleClose}>{t('header-profile')}</span></Link>
              <span onClick={this.handleLogout}>{t('header-logout')}</span>
            </div> : null
            }
          </div>
        </div>
      </header>
    )
  }
}

const CommonHeaderHOK = connect(
  (state) => ({
    token: state.auth.token,
    user: state.usr.user,
    id: state.auth.id,
    error: state.usr.err
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    logout: bindActionCreators(logout, dispatch)
  })
)(CommonHeader);


export default withTranslation()(CommonHeaderHOK)

