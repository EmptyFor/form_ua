import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.modules.scss';
import { withTranslation } from 'react-i18next';

export class FormHeader extends Component {

    static propTypes = {}

    render() {

        return (
            <div className="form_header" >
                <h1>{this.props.t('create-advert-form-header')}</h1>
            </div>
        );
    }
}

export default withTranslation()(FormHeader);