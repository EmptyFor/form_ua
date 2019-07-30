import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateAdvertBtn from '../../../common/CreateAdvertBtn';
import styles from './styles.module.scss';
import main_logo from '../../../../assets/images/logo@2x.png'
import links from '../../../../config/links';
import * as actions from '../../../../store/actions/user'
import { bindActionCreators } from 'redux';
import { getInfo } from '../../../../store/helpers/localStorage'

class Header extends Component {

  componentDidMount = () => {
    const id = getInfo()
    this.props.actions.getUserId(id)
  }

  render() {
    const { token } = this.props
    return (
      <header className={`menu ${this.props.className}`} fix={this.props.fix}>
        <div className={styles.language} id="language">
          <p>
            Language
          </p>
        </div>
        <Link className={styles.main_logo} to={links.login}>
          <img src={main_logo} alt="" onClick={this.handleClick}></img>
        </Link>

        <div className={styles.right_side}>
          {!this.props.fix ? <CreateAdvertBtn className={styles.create_advert} /> : null}
          <div className={styles.profile}>
            {
              token ? <Link to={links.profile}><p>S</p></Link> : <Link to={links.login}><p>Увійти</p></Link>
            }


          </div>
        </div>
      </header>
    )
  }
}

export default connect(
  (state) => ({
    token: state.auth.token,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Header);