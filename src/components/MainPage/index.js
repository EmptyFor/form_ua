import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../themes/common/Header';
import { Form } from './Form';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/';
// import styles from '../../assets/styles/global.styles.scss';
import styles from '../MainPage/style.modules.scss'
import triangle_bg from '../../assets/images/triangle_bg.png'
export class MainPage extends Component {

    static propTypes = {}

    render() {
        // const { } = this.props;
        console.log(this.props)
        return (
            <Fragment>
                    <Header />
                    <Form />
                    <img style = {{width: '100%', height: '100%', marginTop: '-65vh'}} src = {triangle_bg}></img>
            </Fragment>
        );
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(MainPage);