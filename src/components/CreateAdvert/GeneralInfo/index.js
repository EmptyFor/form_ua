import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../store/actions/advert'
import TextArea from '../../common/TextArea';
import Input from '../../common/Input';
import UploadField from '../../common/UploadField';
import './style.modules.scss';
import './style.modules.media.scss';

export class GeneralInfo extends Component {

    state = {
        name: '',
        code: '',
        price: ''
    }

    setGeneralInfoData = (e) => {
        let name = e.currentTarget.name
        let value = e.currentTarget.value
        name === 'code' || name === 'price' ? this.setState({ [name]: value.replace(/\D/g, '') }) : this.setState({ [name]: value })
    }

    sendGeneralInfoData = () => {
        const { name, code, price } = this.state

        if (this.props.clear) {
            this.props.actions.setGeneralInfo(name, code, price)
        }
        else {
            this.props.actions.setGeneralInfo(name, code, price)
        }
    }

    clearValue = () => {
        this.setState({
            name: '',
            code: '',
            price: ''
        })
    }

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.clearValue() : void 0
    }

    render() {
        this.sendGeneralInfoData()
        return (
            <div className="general_info" >
                <div className="title" >
                    <span>1</span>
                    <h1>Загальна інформація</h1>
                </div>

                <div className="first_position grid_left_column">
                    <p className="subtitle">Назва організації:<span>*</span></p>
                    <TextArea
                        getData={this.setGeneralInfoData}
                        name="name"
                        className="text_area"
                        placeholder="Введіть назву організації"
                        clear={this.props.clear}
                        required={true}
                    />
                </div>

                <div className="second_position grid_left_column">
                    <p className="subtitle">Код ЄДРПОУ (8 цифр):<span>*</span></p>
                    <Input
                        getData={this.setGeneralInfoData}
                        name="code"
                        type="EDRPOY"
                        className="input"
                        placeholder="Введіть восьмизначний код"
                        clear={this.props.clear}
                        required={true}
                    />
                </div>

                <div className="third_position grid_left_column">
                    <p className="subtitle">Ціна купівлі без ПДВ та роздрібних витрат:<span>*</span></p>
                    <Input
                        getData={this.setGeneralInfoData}
                        name="price"
                        type="money"
                        className="input"
                        placeholder="Ведіть ціну в гривнях"
                        clear={this.props.clear}
                        required={true}
                    />
                </div>

                <div className="forth_position grid_right_column">
                    <p className="subtitle">Фото документу який засвідчує право власності:<span>*</span></p>
                    <UploadField clear={this.props.clear} />
                    <br />

                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        name: state.advert.name,
        code: state.advert.code,
        price: state.advert.price,
        image: state.advert.image,
        clear: state.advert.clear
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(GeneralInfo);