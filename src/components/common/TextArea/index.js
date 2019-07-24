import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { setOrganizationName } from '../../../store/actions/advert'
import * as actions from '../../../store/actions/advert';
import { bindActionCreators } from 'redux';
import styles from './styles.modules.scss';
// import globalStyle from '../../../assets/styles/global.styles.scss'
export class TeatArea extends Component {

    textareaRef = React.createRef()

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.textareaRef.current.value = "" : void 0
    }

    render() {
        return (
            <textarea
                className={`common_text_area ${this.props.className}`}
                placeholder={this.props.placeholder}
                ref={this.textareaRef}
                name={this.props.name}
                onBlur={this.props.getData}>
            </textarea>
        );
    }
}






export default connect(
    (state) => ({
        clear: state.advert.clear
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(TeatArea);