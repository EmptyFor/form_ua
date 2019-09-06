import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../store/actions/advert'
import TextArea from '../../common/TextArea';
import Input from '../../common/Input';
import UploadField from '../../common/UploadField';
import './style.modules.scss';
import './style.modules.media.scss';
import { withTranslation } from 'react-i18next';

export class GeneralInfo extends Component {

    state = {
        name: '',
        code: '',
        price: ''
    }

    info = {

    }

    setGeneralInfoData = (e) => {
        let name = e.currentTarget.name
        let value = e.currentTarget.value
        console.log(name + ": " + value)
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

    setDataInfo = (nextProps) => {
        this.info = {
            name: nextProps.data.post.name,
            code: nextProps.data.post.code,
            price: nextProps.data.post.price,
            image: nextProps.data.post.image
        }
        this.setState({
            name: nextProps.data.post.name,
            code: nextProps.data.post.code,
            price: nextProps.data.post.price,
            image: nextProps.data.post.image
        })
    }

    componentWillReceiveProps(nextProps) {
        nextProps.clear ? this.clearValue() : void 0
        if (nextProps.data !== undefined && this.info.name === undefined) {
            nextProps.data !== undefined && this.setDataInfo(nextProps)
        }
    }

    render() {
        const { t } = this.props
        this.sendGeneralInfoData()
        return (
            <div className="general_info" >
                <div className="title" >
                    <span>1</span>
                    <h1>{t('create-advert-general-title')}</h1>
                </div>

                <div className="first_position grid_left_column">
                    <p className="subtitle">{t('create-advert-general-name')}<span>*</span></p>
                    <TextArea
                        getData={this.setGeneralInfoData}
                        name="name"
                        className="text_area"
                        placeholder={t('org-name-textarea-placeholder')}
                        clear={this.props.clear}
                        required={true}
                        value={this.state.name}
                    />
                </div>

                <div className="second_position grid_left_column">
                    <p className="subtitle">{t('create-advert-general-edrpoy')}<span>*</span></p>
                    <Input
                        getData={this.setGeneralInfoData}
                        name="code"
                        type="EDRPOY"
                        className="input"
                        placeholder={t('edrpoy-input-placeholder')}
                        clear={this.props.clear}
                        required={true}
                        value={this.state.code}
                    />
                </div>

                <div className="third_position grid_left_column">
                    <p className="subtitle">{t('create-advert-general-price')}<span>*</span></p>
                    <Input
                        getData={this.setGeneralInfoData}
                        name="price"
                        type="money"
                        className="input"
                        placeholder={t('price-input-placeholder')}
                        clear={this.props.clear}
                        required={true}
                        value={this.state.price}
                    />
                </div>

                <div className="forth_position grid_right_column">
                    <p className="subtitle">{t('create-advert-general-photo')}<span>*</span></p>
                    <UploadField clear={this.props.clear} value={this.info.image} />
                    <br />

                </div>
            </div>
        );
    }
}

export default withTranslation()(connect(
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
)(GeneralInfo));