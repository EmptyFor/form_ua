import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../store/actions/';
import styles from './style.modules.scss';
import TextArea from '../../common/TextArea';
import Input from '../../common/Input';
import UploadField from '../../common/UploadField';

export class GeneralInfo extends Component {

    static propTypes = {}

    render() {

        return (
            <div className="general_info" >
                <div className="title" >
                    <span>1</span>
                    <h1>Загальна інформація</h1>
                </div>

                <div className="first_position">
                    <p className="subtitle">Назва організації:<span>*</span></p>
                    <TextArea className="text_area" placeholder="Введіть назву організації" />
                </div>

                <div className="second_position">
                    <p className="subtitle">Код ЄДРПОУ (8 цифр):<span>*</span></p>
                    <Input className="input" placeholder="Введіть восьмизначний код" />
                </div>

                <div className="third_position">
                    <p className="subtitle">Ціна купівлі без ПДВ та роздрібних витрат:<span>*</span></p>
                    <Input className="input" placeholder="Ведіть ціну в гривнях" />
                </div>

                <div className="forth_position">

                <UploadField />

                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({}),
    dispatch => ({
        // actions: bindActionCreators(actions, dispatch)
    })
)(GeneralInfo);