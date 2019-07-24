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

                <div className="first_position grid_right_column">
                    <p className="subtitle">Назва організації:<span>*</span></p>
                    <TextArea className="text_area" placeholder="Введіть назву організації" />
                </div>

                <div className="second_position grid_right_column">
                    <p className="subtitle">Код ЄДРПОУ (8 цифр):<span>*</span></p>
                    <Input type="EDRPOY" className="input" placeholder="Введіть восьмизначний код" />
                </div>

                <div className="third_position grid_right_column">
                    <p className="subtitle">Ціна купівлі без ПДВ та роздрібних витрат:<span>*</span></p>
                    <Input type="money" className="input" placeholder="Ведіть ціну в гривнях" />
                </div>

                <div className="forth_position grid_left_column">
                    <p className="subtitle">Фото документу який засвідчує право власності:<span>*</span></p>
                    <UploadField />
                    <br />

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