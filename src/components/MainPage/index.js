import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../themes/common/Header';
import MobileHeader from '../themes/common/MobileHeader';
import Form from './Form';
import Info from './Info';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/';
// import styles from '../../assets/styles/global.styles.scss';
import '../MainPage/style.modules.scss'
import triangle_bg from '../../assets/images/triangle_bg.png'
export class MainPage extends Component {

    static propTypes = {}

    state = { hideNav: false }

    componentDidMount() {
        window.addEventListener('resize', this.resize.bind(this))
        this.resize()
    }

    resize = () => {
        this.setState({ hideNav: window.innerWidth <= 580 })
    }

    render() {
        // const {  } = this.props;
        return (
            <div className="bg">
                <img className="image_bg" alt="" src={triangle_bg}></img>
                {
                    this.state.hideNav ? <MobileHeader fix="false" /> : <Header fix="false" />
                }
                <Form />
                <Info />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        token: state.auth.token
    }),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(MainPage);