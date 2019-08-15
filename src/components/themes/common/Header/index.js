import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommonHeader from './CommonHeader';
import MobileHeader from './MobileHeader';
import * as actions from '../../../../store/actions/user'
import { logout } from '../../../../store/actions/authorise'
import { bindActionCreators } from 'redux';

class Header extends Component {


  state = { isMobile: false }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this))
    this.resize()
  }

  resize = () => {
    this.setState({ isMobile: window.innerWidth <= 580 })
  }

  render() {
    return (
      this.state.isMobile ?
        <MobileHeader
          isTransparent={this.props.isTransparent}
          fix={this.props.fix}
          className={this.props.className}
        />
        : <CommonHeader
          fix={this.props.fix}
          className={this.props.className}
        />
    )
  }
}

export default connect(
  (state) => ({
  }),
  dispatch => ({
  })
)(Header);